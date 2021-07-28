/* eslint-disable react-hooks/rules-of-hooks */ // Using maps as React functional components
import { Button, Checkbox, Divider, FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { Definition, SchemaDgraph } from 'unigraph-dev-common/lib/types/json-ts';
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { getRandomInt } from 'unigraph-dev-common/lib/api/unigraph';
import { ReferenceableSelectorControlled } from './ReferenceableSelector';
import { Delete, Save } from '@material-ui/icons';
import { isJsonString } from 'unigraph-dev-common/lib/utils/utils';
import { BacklinkView } from './BacklinkView';

const useStyles = makeStyles({
    editorFrame: {
        padding: "16px"
    },
    editorColumn: {}
});


const defaultNewValues: any = {
    "$/primitive/number": 0,
    "$/primitive/string": "",
    "$/primitive/datetime": (new Date()).toISOString(),
    "$/primitive/boolean": false,
    "schemaRef": {}
}

const TypedObjectPartEditor: any = {
    "$/composer/Object": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        const fields = _.intersection(Object.keys(localObject['_value']), localSchema['_properties'].map((el: any) => el['_key']));
        const classes = useStyles();
        const [selectedNewProp, setSelectedNewProp] = React.useState<any>();
        const [currentInputValue, setCurrentInputValue] = React.useState<any>();
        const [currentInputObjValue, setCurrentInputObjValue] = React.useState<any>();
        React.useEffect(() => {if (JSON.stringify(currentInputObjValue) !== currentInputValue) setCurrentInputValue(JSON.stringify(currentInputObjValue))}, [currentInputObjValue]);
        React.useEffect(() => {if (isJsonString(currentInputValue)) setCurrentInputObjValue(JSON.parse(currentInputValue))}, [currentInputValue])
        return <React.Fragment>
            <Paper variant="outlined" className={classes.editorFrame}>
                <Typography>Object ID: {localObject.uid}, type: {localObject?.type?.['unigraph.id']}</Typography>
                {fields.map((key) => <div style={{display: "flex", alignItems: "baseline", paddingTop: "8px"}}>
                    <Typography variant="body1" style={{paddingRight: "8px"}}>{key}:</Typography>
                    <ObjectPartEditor
                        localSchema={(localSchema['_properties']).filter((el: any) => el['_key'] === key)[0]['_definition']}
                        localObject={localObject['_value'][key]} schemaMap={schemaMap}
                        setLocalObject={(newVal: any) => window.unigraph.updateObject(localObject['_value'][key]['uid'], newVal, false, false)}
                    />
                    <Delete onClick={() => {window.unigraph.deleteRelation(localObject._value.uid, {[key]: null})}} className="showOnHover"/>
                </div>)}
                <div style={{display: "flex", alignItems: "baseline", paddingTop: "8px"}}>
                    <FormControl>
                        <InputLabel>New property</InputLabel>
                        <Select
                            value={selectedNewProp}
                            onChange={(e: any) => {
                                setSelectedNewProp(e.target.value);
                                const propType = (localSchema['_properties']).filter((el: any) => el['_key'] === e.target.value)[0]['_definition']['type']['unigraph.id'];
                                let deft = undefined;
                                if (propType.startsWith?.('$/schema') || !Object.keys(defaultNewValues).includes(propType)) deft = defaultNewValues['schemaRef'];
                                else deft = defaultNewValues[propType];
                                console.log(schemaMap[propType])
                                if (propType.startsWith?.('$/schema') && Object.keys(defaultNewValues).includes(schemaMap[propType]?.['_definition']?.type?.['unigraph.id'])) 
                                    deft = defaultNewValues[schemaMap[propType]?.['_definition']?.type?.['unigraph.id']]
                                setCurrentInputObjValue(deft);
                            }}
                            style={{width: "240px"}}
                        >
                            <MenuItem>
                                <em>Select property</em>
                            </MenuItem>
                            {(localSchema['_properties'].map((el: any) => el['_key'])).map((el: string) => <MenuItem value={el}>{el}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField onChange={(e) => {setCurrentInputValue(e.target.value)}} value={currentInputValue} style={{opacity: currentInputObjValue === undefined ? 0 : 1}}></TextField>
                    {JSON.stringify(currentInputObjValue)}
                    <Button onClick={() => window.unigraph.updateObject(localObject.uid, {[selectedNewProp]: currentInputObjValue})} style={{opacity: currentInputObjValue === undefined ? 0 : 1}}>Add</Button>
                </div>
            </Paper>
        </React.Fragment>
    },
    "$/composer/Union": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        console.log(localObject, localSchema)
        if (!localObject['_value']['type']) return "Deleted object";
        const currentUnionType = localObject['_value']['type']['unigraph.id'];
        const classes = useStyles();
        return <Paper variant="outlined" className={classes.editorFrame}>
            <Typography>Union type - object type: {currentUnionType}</Typography>
            <ObjectPartEditor
                localSchema={schemaMap[currentUnionType]['_definition']}
                localObject={localObject[Object.keys(localObject).filter((s: string) => s.startsWith( '_value'))[0]]}
                schemaMap={schemaMap}
                setLocalObject={() => {}}
            />
        </Paper>
    },
    "$/composer/Array": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        const classes = useStyles();
        console.log(localSchema, localObject)
        return <Paper variant="outlined" className={classes.editorFrame}>
            <Typography>Array type</Typography>
            {localObject['_value['].map((el: any) => <div style={{display: "flex", alignItems: "baseline", paddingTop: "8px"}}>
                <ObjectPartEditor
                            localSchema={schemaMap[el['_value']['type']['unigraph.id']]['_definition']}
                            localObject={el['_value']} schemaMap={schemaMap}
                            setLocalObject={() => {}}
                />
                <Delete onClick={() => {window.unigraph.deleteItemFromArray(localObject.uid, el.uid)}} className="showOnHover"/>
            </div>)}
        </Paper>
    },
    "default": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        return <Typography>Object part</Typography>
    },
    "$/primitive/number": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        const [currentInputValue, setCurrentInputValue] = React.useState(localObject['_value.#i']);

        return <React.Fragment>
            <TextField onChange={(e) => {setCurrentInputValue(e.target.value)}} value={currentInputValue}></TextField>
            <Save onClick={() => window.unigraph.updateObject(localObject.uid, {"_value.#i": Number(currentInputValue)}, false, false)} opacity={Number(currentInputValue) === localObject['_value.#i'] ? 0 : 1}></Save>
        </React.Fragment>
    },
    "$/primitive/string": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        const [currentInputValue, setCurrentInputValue] = React.useState(localObject['_value.%']);

        return <React.Fragment>
            <TextField onChange={(e) => {setCurrentInputValue(e.target.value)}} value={currentInputValue}></TextField>
            <Save onClick={() => window.unigraph.updateObject(localObject.uid, {"_value.%": currentInputValue}, false, false)} opacity={currentInputValue === localObject['_value.%'] ? 0 : 1}></Save>
        </React.Fragment>
    },
    "$/primitive/datetime": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        const [currentInputValue, setCurrentInputValue] = React.useState<any>(new Date(localObject['_value.%dt']));

        return <React.Fragment>
            <KeyboardDateTimePicker onChange={setCurrentInputValue} value={currentInputValue} format="yyyy/MM/DD HH:mm" ampm={false}></KeyboardDateTimePicker>
            <Save onClick={() => window.unigraph.updateObject(localObject.uid, {"_value.%dt": currentInputValue.toISOString()}, false, false)} opacity={currentInputValue.toISOString() === localObject['_value.%dt'] ? 0 : 1}></Save>
        </React.Fragment>
    },
    "$/primitive/boolean": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        const [currentInputValue, setCurrentInputValue] = React.useState(localObject['_value.!']);

        return <React.Fragment>
            <Checkbox onChange={(e) => {setCurrentInputValue(e.target.checked)}} checked={currentInputValue}></Checkbox>
            <Save onClick={() => window.unigraph.updateObject(localObject.uid, {"_value.!": currentInputValue}, false, false)} opacity={currentInputValue === localObject['_value.!'] ? 0 : 1}></Save>
        </React.Fragment>
    },
    "schemaRef": ({localSchema, localObject, setLocalObject, schemaMap}: any) => {
        console.log(localSchema)
        if (typeof localSchema !== "string") localSchema = localSchema?.['type']?.['unigraph.id']
        
        const classes = useStyles();
        const definition = localSchema === "$/schema/any" ? schemaMap[localObject[Object.keys(localObject).filter((s: string) => s.startsWith( '_value'))[0]]['type']['unigraph.id']]['_definition'] : schemaMap[localSchema]['_definition']
        console.log(localSchema, localObject, definition)
        return <Paper variant="outlined" className={classes.editorFrame}>
            <Typography>Schema ref: {localSchema}</Typography>
            <ObjectPartEditor
                localSchema={definition}
                localObject={localObject[Object.keys(localObject).filter((s: string) => s.startsWith( '_value'))[0]]}
                schemaMap={schemaMap}
                setLocalObject={() => {}}
            />
        </Paper>
    },
}

function getPartEditor(type: string, localSchema: any) {
    return Object.keys(TypedObjectPartEditor).includes(type) ? TypedObjectPartEditor[type] : 
        (type.startsWith('$/schema/') ? TypedObjectPartEditor['schemaRef'] : TypedObjectPartEditor['default'])
}

export const ObjectPartEditor = ({localSchema, localObject, setLocalObject, schemaMap}: any) => {

    let innerEl = React.createElement(getPartEditor(localSchema?.['type']?.['unigraph.id'] || localSchema, localSchema), {
        localSchema, localObject, setLocalObject, schemaMap
    });

    return <div>
        {innerEl}
    </div>
}

export const ObjectEditorSelector = ({currentUid, setCurrentUid, style}: any) => {

    const [currentSchema, setCurrentSchema]: [any, Function] = React.useState(null)
    const [currentSchemaSHName, setCurrentSchemaSHName]: any = React.useState(null)
    const [referenceables, setReferenceables] = React.useState([]);

    const [currentInputUid, setCurrentInputUid] = React.useState(currentUid || '');

    useEffectOnce(() => {
        window.unigraph.getReferenceables().then((refs: any) => setReferenceables(refs));
    })

    return <React.Fragment>
        <TextField onChange={(e) => {setCurrentInputUid(e.target.value)}} value={currentInputUid}></TextField>
        <Button onClick={() => setCurrentUid(currentInputUid)}>Load object</Button>
        Schema name: <ReferenceableSelectorControlled 
            referenceables={referenceables}
            onChange={(schema: string) => window.unigraph.getSchemas()
                .then((schemas: Record<string, SchemaDgraph>) => {setCurrentSchema(schemas[schema]); setCurrentSchemaSHName(schema)})}
            value={currentSchema?._definition?.type['unigraph.id']}
        />
        <Button onClick={async ()=> {
            const returnUid = await window.unigraph.addObject({}, currentSchemaSHName);
            setCurrentUid(returnUid);
        }}>Create with schema</Button>
    </React.Fragment>
}

const ObjectEditorBody = ({currentObject, setCurrentObject, schemaMap}: any) => {
    const [currentSchema, setCurrentSchema]: [any, Function] = React.useState(currentObject['type']['_value['][0]['_definition'])
    

    return <div style={{display: "flex"}}>
        <div style={{width: "66%"}}>
            <ObjectPartEditor localSchema={currentSchema} localObject={currentObject} setLocalObject={setCurrentObject} schemaMap={schemaMap} />
        </div>
        <div style={{width: "34%"}}>
            <Typography>Backlinks</Typography>
            <BacklinkView data={currentObject} hideHeader/>
        </div>
    </div>
}

export const ObjectEditor = ({uid}: any) => {
    const [currentUid, setCurrentUid] = React.useState(uid || "");
    const [currentObject, setCurrentObject]: any = React.useState(null);

    const [subsId, setSubsId]: any = React.useState(null);

    const [allSchemas, setAllSchemas] = React.useState(null);

    useEffectOnce(() => {
        window.unigraph.getSchemas().then((schemas: any) => setAllSchemas(schemas));
    })

    React.useEffect(() => {
        if (subsId) window.unigraph.unsubscribe(subsId);
        const newSubs = getRandomInt();
        if (currentUid) window.unigraph.subscribeToObject(currentUid, setCurrentObject, subsId);
        setSubsId(newSubs);
        return function cleanup () {window.unigraph.unsubscribe(subsId)};
    }, [currentUid])

    return <div>
        <ObjectEditorSelector setCurrentUid={setCurrentUid} currentUid={currentUid} />
        <Divider/>
        {
            (currentUid.length && currentObject && allSchemas) ? <ObjectEditorBody currentObject={currentObject} setCurrentObject={setCurrentObject} schemaMap={allSchemas}/> : "No object selected"
        }
    </div>

}