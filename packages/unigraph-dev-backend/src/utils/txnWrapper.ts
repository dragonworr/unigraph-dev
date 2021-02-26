import { UnigraphUpsert } from "@/custom"

import { typeMap } from 'unigraph-dev-common/lib/types/consts'

function buildDgraphFunctionFromRefQuery(query: {key: string, value: string}[]) {
    let string = "";
    let string1 = "";
    const innerRefs: string[] = [];
    query.forEach(({key, value}: any) => {
        const refTarget = key.replace(/["%@\\]/g, "");
        const refQuery = value.replace(/["%@\\]/g, "");
        if (refTarget === "unigraph.id") {
            string += `AND eq(${refTarget}, "${refQuery}")`;
            string1 = `eq(${refTarget}, "${refQuery}")`;
        } else {
            // Referencing a field (not unigraph.id), do manual padding!
            // TODO: Support deep nested references
            innerRefs.push(`_value { ${refTarget} @filter(eq(<${typeMap[typeof refQuery]}>, "${refQuery}")) }`)
        }
    })
    if (innerRefs.length) {
        string1 = `type(Entity)`
        string = `AND type(Entity)`
    }
    let fn = `var(func: ${string1}) @filter(${string.slice(4)})`;
    if (innerRefs.length) {
        fn += " @cascade {\n";
        innerRefs.forEach(str => fn += str + "\n");
        fn += "}";
    }
    return fn;
}

function insertsToUpsertRecursive(inserts: any[], appends: any[], queries: string[], currentObject: any) {
    console.log(currentObject)
    // If this is a reference object
    if (currentObject && currentObject["$ref"] && currentObject["$ref"].query) {
        if (currentObject.uid) { // uid takes precedence over $ref
            delete currentObject['$ref'];
        } else {
            const query = currentObject['$ref'].query;
            const dgraphFunction = buildDgraphFunctionFromRefQuery(query);
            queries.push("unigraphquery" + (queries.length + 1) + " as " + dgraphFunction + "\n");
            currentObject["uid"] = "uid(unigraphquery" + queries.length + ")";
            delete currentObject['$ref'];
            const append: any = {uid: "uid(unigraphquery" + queries.length + ")"}
            query.forEach(({key, value}: any) => {if (key === "unigraph.id") append[key] = value});
            appends.push(append)
        }
    }
    //console.log(currentObject)
    const objectValues = Object.values(currentObject);
    for(let i=0; i<objectValues.length; ++i) {
        if (typeof objectValues[i] === "object" && !Array.isArray(objectValues[i])) {
            insertsToUpsertRecursive(inserts, appends, queries, objectValues[i]);
        } else if (typeof objectValues[i] === "object" && Array.isArray(objectValues[i])) {
            for(let j=0; j<(objectValues[i] as any[]).length; ++j) {
                insertsToUpsertRecursive(inserts, appends, queries, (objectValues[i] as any[])[j]);
            }
        }
    }
}

/**
 * Converts a list of objects or schemas to a dgraph upsert operation.
 * This function will ensure that the field `unigraph.id` is unique and all references to be resolved.
 * @param inserts An array of objects or schemas to insert, containing the `$ref` field
 */
export function insertsToUpsert(inserts: any[]): UnigraphUpsert {
    const insertsCopy = JSON.parse(JSON.stringify(inserts))
    const queries: any[] = []
    const appends: any[] = []
    for(let i=0; i<insertsCopy.length; ++i) {
        insertsToUpsertRecursive(insertsCopy, appends, queries, insertsCopy[i])
    }
    return {queries: queries, mutations: [...insertsCopy, ...appends]}
}