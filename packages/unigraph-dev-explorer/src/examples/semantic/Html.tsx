import { Divider } from "@material-ui/core";
import { FormatLineSpacing } from "@material-ui/icons";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import _ from "lodash";
import React from "react";
import { AutoDynamicView } from "../../components/ObjectView/DefaultObjectView"
import { DynamicViewRenderer } from "../../global"

const makeCSS = (style: Style) => {
    return `body {
        line-height: ${style.text.lineHeight};
        font-family: '${style.text.fontFamily}'
    }`
}

export type Style = {
    text: {
        "lineHeight": string,
        "fontFamily": string
    }
}

export const HtmlStyleChooser = ({style, onStyleChange}: any) => {
    return <React.Fragment>
        <ToggleButtonGroup value={style?.text?.lineHeight} onChange={(ev, newStyle) => {onStyleChange(_.merge({}, style, {text: {lineHeight: newStyle}}))}} exclusive>
            <ToggleButton value="1.2"><FormatLineSpacing style={{transform: "scaleY(0.7)"}}/></ToggleButton>
            <ToggleButton value="1.5"><FormatLineSpacing/></ToggleButton>
            <ToggleButton value="1.8"><FormatLineSpacing style={{transform: "scaleY(1.3)"}}/></ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value={style?.text?.fontFamily} onChange={(ev, newStyle) => {onStyleChange(_.merge({}, style, {text: {fontFamily: newStyle}}))}} exclusive>
            <ToggleButton value="Georgia"><span style={{fontFamily: "Georgia", textTransform: "none"}}>Georgia</span></ToggleButton>
            <ToggleButton value="Times New Roman"><span style={{fontFamily: "Times New Roman", textTransform: "none"}}>Times NR</span></ToggleButton>
            <ToggleButton value="Consolas"><span style={{fontFamily: "Consolas", textTransform: "none"}}>Consolas</span></ToggleButton>
        </ToggleButtonGroup>
    </React.Fragment>
}

export const Html: DynamicViewRenderer = ({data, context, callbacks}) => {
    const frm = React.useRef(null);
    const userStyle = React.useRef(null);
    const [style, setStyle] = React.useState<Style>({
        text: {
            lineHeight: "1.5",
            fontFamily: "Georgia"
        }
    })
    React.useEffect(() => {
        console.log(userStyle.current)
        // @ts-expect-error: already checked for nullity
        if (userStyle.current) (userStyle.current as HTMLElement).innerHTML = makeCSS(style)
    }, [style])

    return <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
        {context ? <React.Fragment>
            <AutoDynamicView object={context} />
            <Divider/>
        </React.Fragment> : []}
        <iframe srcDoc={data['_value.%']} style={{flexGrow: 1, width: "100%"}} ref={frm} onLoad={() => {
            (frm.current as any).contentDocument.head.insertAdjacentHTML("beforeend", "<style>img{ width: 100%; height: auto } video{ width: 100%; height: auto } body{margin-bottom: 64px}</style>");
            userStyle.current = (frm.current as any).contentDocument.head.insertAdjacentElement("beforeend", (frm.current as any).contentDocument.createElement('style'));
            // @ts-expect-error: already checked for nullity
            (userStyle.current as HTMLElement).innerHTML = makeCSS(style)
        }} title={`object-view-${data.uid}`} frameBorder="0"/>
        <div style={{display: "flex", position: "absolute", bottom: 0, backgroundColor: "white"}}>
            <HtmlStyleChooser style={style} onStyleChange={setStyle}/>
        </div>
    </div>
}

