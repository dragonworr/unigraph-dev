import { SchemaDgraph } from "./json-ts"
import { PackageDeclaration } from "./packages"

/** Unigraph interface */ // Don't remove this line - needed for Monaco to work
export type AppState<T = any> = {
    value: T,
    subscribers: ((newValue: T) => any)[],
    subscribe: (fn: (newValue: T) => any) => any,
    setValue: (newValue: T) => any,
}

export type UnigraphSchemaDeclaration = {
    name: string,
    schema: any
}

export type UnigraphContext = {
    schemas: UnigraphSchemaDeclaration[],
    packages: PackageDeclaration[],
    defaultData: any,
}

export type UnigraphHooks = {
    afterSchemasLoaded: (subsId: any, data: any, componentThis: any) => any,
}

export type UnigraphExecutable<T = any> = (
    context: {params: T},
    unigraph: Unigraph
) => any

export type UnigraphNotification = {
    name: string,
    from: string,
    content: string,
    actions?: any[]
}

/**
 * Global Unigraph API for applications.
 * 
 * Can be either accessed over WebSocket or directly from the main server thread. If 
 * accessed over WebSocket, Promise functionality is implemented using callback messages.
 * 
 * NOTE:
 * 1) If you're using Unigraph API over websocket, check out the server side 
 * documentations as well, since there would be more detail in context.
 */
export interface Unigraph<TT = WebSocket | false> {
    backendConnection: TT;
    /** Messages received from backend. Only used when running over WebSocket. */
    backendMessages: string[];
    eventTarget: EventTarget;
    /** Gets the status of the current Unigraph daemon. */
    getStatus(): Promise<any>;
    /** 
     * Create a new schema using the json-ts format and add it to cache.
     * 
     * Users should use `ensurePackage` and `ensureSchema` for applications.
     */
    createSchema(schema: any): Promise<any>;
    /**
     * Checks if Unigraph server has the schema with the given name. 
     * 
     * If not, create the schema defined in `fallback` instead.
     *  
     * @param name the schema name, starting with `$/schema/`
     * @param fallback the fallback schema, with the json-ts format.
     */
    ensureSchema(name: string, fallback: any): Promise<any>;
    /**
     * Checks if Unigraph server has the package with the given name.
     * 
     * If not, create the package defined in `fallback` instead.
     * 
     * @param packageName the unique package name, such as `unigraph.core`. 
     * You can also attach a version number, such as `unigraph.core@0.0.1`.
     * @param fallback the fallback schema with the `PackageDeclaration` format.
     */
    ensurePackage(packageName: string, fallback: PackageDeclaration): Promise<any>;
    /**
     * Subscribes to a Unigraph type, and call the callback function every time the subscription is updated.
     * 
     * @param name the type name. Can be `$/schema/`, `$/package/xxx/xxx/schema/` or `any` (subscribe to all objects).
     * @param callback the callback function.
     * @param eventId can be left empty - in this case, we will generate one for you, 
     * but you cannot get the subscription elsewhere other than from callback.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    subscribeToType(name: string, callback: Function, eventId?: number | undefined, all?: boolean | undefined): Promise<any>;
    /**
     * Subscribe to a Unigraph object with a given UID or name, and call the callback function evry time the subscription is updated.
     * 
     * @param uid UID of the unigraph object, of the format `0xabcd`; or a named entity starting with `$/`
     * @param callback the callback function.
     * @param eventId can be left empty - in this case, we will generate one for you, 
     * but you cannot get the subscription elsewhere other than from callback.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    subscribeToObject(uid: string, callback: Function, eventId?: number | undefined): Promise<any>;
    /**
     * Subscribe to a Unigraph query and call the callback function evry time the subscription is updated.
     * 
     * @param fragment DQL (GraphQL+-) Query fragment such as `(func: fn1(something)){ uid expand(_predicate_) }`
     * @param callback the callback function.
     * @param eventId can be left empty - in this case, we will generate one for you, 
     * but you cannot get the subscription elsewhere other than from callback.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    subscribeToQuery(fragment: string, callback: Function, eventId?: number | undefined): Promise<any>;
    /** Unsubscribes using the subscription ID. */
    unsubscribe(id: number): any;
    /**
     * Add an object to Unigraph. For more guidelines, see the overview docs folder.
     * 
     * @param object The object to be added.
     * @param schema Schema of that object, must be valid. Such as: `$/schema/abc`
     */
    addObject(object: any, schema: string): any;
    /**
     * Reach into the namespace map cache and get a UID corresponding to the name.
     * 
     * @param name Name of the named entity/executable/schema, usually starts with `$/`
     */
    getNamespaceMapUid(name: string): string;
    /** 
     * Gets all objects of a certain type name. 
     * 
     * @param name schema name of the type, such as: `$/schema/abd`.
     */
    getType(name: string): any;
    /**
     * Gets many query results at once using 1 single transaction.
     * 
     * @param fragments Array of DQL (GraphQL+-) Query fragments - such as `(func: fn1(something)){ uid expand(_predicate_) }`
     */
    getQueries(fragments: string[]): any;
    /** Deletes an object by its UID. */
    deleteObject(uid: string): any;
    /**
     * Updates a object simply using the SPO triplet format.
     * 
     * Deprecated: this is from a past era and should not be used.
     */
    updateSimpleObject(object: any, predicate: string, value: any): any;
    /**
     * Updates an existing object by its UID and describing the new object.
     * 
     * @param uid The uid string of the object, of the format `0xabcd`.
     * @param newObject The new object. Only include the parts you want to be updated.
     * @param upsert Whether to perform an upsert, defaults to `true`. Note that if
     * not upserting, the new object is going to be the only values of that UID. Thus,
     * make sure your update is minimal.
     * @param pad Whether to pad the new object - for partial update this should be false.
     */
    updateObject(uid: string, newObject: any, upsert?: boolean, pad?: boolean): any;
    /**
     * Deletes relationships by supplying the origin UID and JSONs to delete.
     * 
     * For example, if we have an array `0x1`, we can put uid as `0x1` and relation as `{
     *   "_value[": [{ "uid": "0x2" }] (note: for list elements, the second UID is the master UID with metadata.)
     * }`
     */
    deleteRelation(uid: string, relation: any): any;
    /**
     * Deletes an item from an array (ordered list).
     * 
     * @param uid The uid of the target list - must be of type `$/composer/Array`
     * @param item Either the UID (outer) or the index of an item, or an array of such items.
     */
    deleteItemFromArray(uid: string, item: (number | string) | (number | string)[]): any;
    /** Gets all referenceables from the library (like primitives, schemas, shorthands, etc) */
    getReferenceables(): Promise<any>;
    /** Deprecated: get selected referenceables. */
    getReferenceables(key?: string | undefined, asMapWithContent?: boolean | undefined): Promise<any>;
    /** Gets a list of schemas. */
    getSchemas(schemas?: string[] | undefined, resolve?: boolean): Promise<Record<string, SchemaDgraph>>;
    /** Gets a list of packages. */
    getPackages(packages?: string[] | undefined): Promise<Record<string, PackageDeclaration>>;
    /**
     * Fetches a URL and return its contents in Blob format.
     * 
     * Parameters should be similar to the fetch arguments.
     * 
     * This is mainly for bypassing the CORS rules of websites - for other purposes please use backend
     * executables instead.
     */
    proxyFetch(url: string | URL, options?: Record<string, any>): Promise<Blob>;
    /**
     * Implement a graph-like data structure based on js pointers from uid references.
     * 
     * Since pointers are not serializable, this must be done on the client side.
     * 
     * @param objects Objects with uid references as one of their fields
     */
    buildGraph(objects: any[]): any[];
    /**
     * Imports a list of objects (that might refer to each other) with uid as one of their fields.
     * 
     * @param objects A list of objects.
     */
    importObjects(objects: any[] | string): Promise<any>;
    /**
     * Runs an executable with the given global ID and parameters.
     * 
     * @param unigraphid The global executable id of the form `$/package/xxx/xxx/executable/abc`.
     * You can use the global function `getExecutableId` to find it.
     * @param params The parameters defined for that executable.
     */
    runExecutable<T>(unigraphid: string, params: T): Promise<any>;
    /**
     * Adds a notification to the global notification list.
     * 
     * @param item Of type UnigraphNotification: `{from: "<sender>", name: "<title>", content: "<content>"}`
     */
    addNotification(item: UnigraphNotification): Promise<any>;
    /**
     * Returns the AppState object for the selected string. Not implemented in backend API (for now).
     * 
     * @param name Name of the state object - this is globally (to the app) unique
     */
    getState(name: string): AppState;
    /**
     * Adds a state to the global state manager. Not available server side (for now).
     * 
     * @param name Name of the state object - this is globally (to the app) unique
     * @param initialValue Initial value, could be anything
     */
    addState<T = any>(name: string, initialValue: T): any;
    /**
     * Deletes the state specified by the name. Not available server side (for now).
     * 
     * @param name Name of the state object - this is globally (to the app) unique
     */
    deleteState(name: string): any;
}
/** End of unigraph interface */ // Don't remove this line - needed for Monaco to work