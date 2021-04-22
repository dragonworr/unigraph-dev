import React, { useState, useEffect } from "react";

import { pkg as bookmarkPackage } from 'unigraph-dev-common/lib/data/unigraph.bookmark.pkg';

import { DynamicViewRenderer } from "../../global";
import { List, ListItem, TextField, Button, Chip, IconButton, ListItemSecondaryAction, ListItemText, ListItemIcon, Avatar } from "@material-ui/core";
import { LocalOffer, Delete, Link } from "@material-ui/icons";
import { getRandomInt } from 'unigraph-dev-common/lib/api/unigraph'
import { withUnigraphSubscription } from 'unigraph-dev-common/lib/api/unigraph-react'
import { Tag } from "../semantic/Tag";

type ABookmark = {
    uid?: string,
    name: string,
    url: string,
    favicon: string,
    semantic_properties: {
        tags: {uid?: string, color?: string, name: string}[]
        notes: any[]
    }
}

export const createBookmark: (t: string) => Promise<ABookmark> = (text: string) => {
    let tags_regex = /#[a-zA-Z0-9]*\b ?/gm;
    let tags = text.match(tags_regex) || [];
    tags = tags.map(tag => tag.slice(1).trim());
    text = text.replace(tags_regex, '');

    const url = new URL(text.trim());
    return new Promise((res, rej) => {
        window.unigraph.proxyFetch(url).then((fin: Blob) => {
            fin.text().then(text => {
                const match = text.match(/(<head>.*<\/head>)/gms);
                const head = match ? match[0] : "";
                let parser = new DOMParser();
                let headDom = parser.parseFromString(head, "text/html");
                var favicon = url.origin + "/favicon.ico";
                headDom.head.childNodes.forEach((node: any) => {
                    if (node.nodeName === "LINK" && node?.name?.includes('icon') && node.href) {
                        let newUrl = new URL(node.href, url.origin)
                        favicon = newUrl.href;
                    }
                })
                console.log(headDom)
                res({
                    name: headDom.title || url.href,
                    url: url.href,
                    favicon: favicon,
                    semantic_properties: {
                        tags: tags.map(tagName => {return {name: tagName}}),
                        notes: []
                    }
                })
            })
        }).catch(rej)
    })
} 

function BookmarksBody ({data}: { data: ABookmark[] }) {
    
    const bookmarks = data;
    const [newName, setNewName] = useState("");

    return <div>
        Hello bookmark!    <br/> 
        There are currently {bookmarks.length} bookmarks!   <br/>
        <List>
            {bookmarks.map(it => <ListItem button key={it.uid}>
                <BookmarkItem data={it} />
            </ListItem>)}
        </List>
        <TextField value={newName} onChange={(e) => setNewName(e.target.value)}></TextField>
        <Button onClick={() => createBookmark(newName).then((obj: any) => window.unigraph.addObject(obj, "$/schema/web_bookmark"))}>Add</Button>
        For example, enter #tag1 https://example.com
    </div>
}

export const Bookmarks = withUnigraphSubscription(
    // @ts-ignore
    BookmarksBody,
    { defaultData: [], schemas: [], packages: [bookmarkPackage]},
    { afterSchemasLoaded: (subsId: number, setData: any) => {
        window.unigraph.subscribeToType("$/schema/web_bookmark", (result: ABookmark[]) => {setData(result)}, subsId);
    }}
)

export const BookmarkItem: DynamicViewRenderer = ({data, callbacks}) => {
    let unpadded: ABookmark = window.unigraph.unpad(data);
    let totalCallbacks = callbacks || {
        'onUpdate': (data: Record<string, any>) => {
            throw new Error("not implemented")
            //window.unigraph.updateObject(data.uid, {"done": window.unigraph.unpad(data).done});
        }
    };

    return <React.Fragment>
        <ListItemIcon><Avatar alt={"favicon of "+unpadded.name} src={unpadded.favicon}>I</Avatar></ListItemIcon>
        <ListItemText 
            primary={unpadded.name}
            secondary={<div style={{display: "flex", alignContent: "center"}}>
                <Link onClick={() => {window.open(unpadded.url, "_blank")}}></Link>
                {!unpadded.semantic_properties?.tags?.map ? [] :
                unpadded.semantic_properties?.tags?.map(tag => <Tag data={tag}/>)}
                </div>}
        />
        <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={() => window.unigraph.deleteObject(unpadded.uid!)}>
                <Delete/>
            </IconButton>
        </ListItemSecondaryAction>
    </React.Fragment>
}