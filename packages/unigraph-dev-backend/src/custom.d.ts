import DgraphClient from './dgraphClient';
import { PackageDeclaration } from 'unigraph-dev-common/lib/types/packages';
import { UnigraphNotification } from 'unigraph-dev-common/lib/types/unigraph';

declare global {
  namespace Express {
    interface Request {
      dgraph: DgraphClient;
    }
  }
}

declare type UnigraphUpsert = {
  queries: string[],
  mutations: any[],
  appends: any[]
}

declare type EventCreateUnigraphSchema = {
  "type": "event",
  "event": "create_unigraph_schema",
  schema: Record<string, unknown> | Record<string, unknown>[],
  id: number
}

declare type EventAddUnigraphPackage = {
  "type": "event",
  "event": "add_unigraph_package",
  id: number,
  package: PackageDeclaration
}

declare type EventCreateUnigraphObject = {
  "type": "event",
  "event": "create_unigraph_object",
  object: Record<string, unknown>,
  id: number,
  schema: string | undefined,
  padding: boolean | undefined
}

declare type EventUpdateSPO = {
  type: "event",
  event: "update_spo",
  uid: string,
  predicate: string,
  value: any,
  id: number
}

declare type EventDeleteUnigraphObject = {
  type: "event",
  event: "delete_unigraph_object",
  id: number,
  uid: string
}

declare type EventDropAll = {
  type: "event",
  event: "drop_all",
  id: number
}

declare type EventDropData = {
  type: "event",
  event: "drop_data",
  id: number
}

declare type EventCreateDataByJson = {
  type: "event",
  event: "create_data_by_json",
  id: number,
  data: Record<string, unknown>
}

declare type EventSetDgraphSchema = {
  type: "event",
  event: "set_dgraph_schema",
  id: number,
  schema: string
}

declare type EventQueryByStringWithVars = {
  type: "event",
  event: "query_by_string_with_vars",
  vars: Record<string, unknown>,
  query: string,
  id: number
}

declare type EventSubscribeObject = {
  type: "event",
  event: "subscribe_to_object",
  id: number | string,
  queryFragment: string,
  connId: string,
}

declare type EventSubscribeType = {
  type: "event",
  event: "subscribe_to_type",
  id: number | string,
  all?: boolean,
  schema: string,
  connId: string,
}

declare type EventUnsubscribeById = {
  type: "event",
  event: "unsubscribe_by_id",
  id: number | string
}

declare interface IWebsocket {
  /* eslint-disable */ // TODO: Temporarily appease the linter, remember to fix it later
  send: Function,
  readyState: number
}

declare type EventEnsureUnigraphSchema = {
  type: "event",
  event: "ensure_unigraph_schema",
  id: number,
  name: string,
  fallback: any
}

declare type EventEnsureUnigraphPackage = {
  type: "event",
  event: "ensure_unigraph_package",
  id: number,
  packageName: string,
  fallback: PackageDeclaration
}

declare type EventGetSchemas = {
  type: "event",
  event: "get_schemas",
  id: number,
  schemas: string[],
  resolve: boolean
}

declare type EventGetPackages = {
  type: "event",
  event: "get_packages",
  id: number,
  packages: string[]
}

declare type EventUpdateObject = {
  type: "event",
  event: "update_object",
  id: number,
  uid: string,
  newObject: any,
  upsert: boolean | undefined,
  pad: boolean | undefined,
}

declare type EventDeleteRelation = {
  type: "event",
  event: "delete_relation",
  id: number,
  uid: string,
  relation: any
}

declare type EventDeleteItemFromArray = {
  type: "event",
  event: "delete_item_from_array",
  id: number,
  uid: string,
  item: any
}

declare type EventResponser = (event: any, ws: IWebsocket) => any

declare type EventProxyFetch = {
  type: "event",
  event: "proxy_fetch",
  id: number,
  url: string,
  options?: Record<string, any>
}

declare type EventImportObjects = {
  type: "event",
  event: "import_objects",
  id: number,
  objects: string
}

declare type EventRunExecutable = {
  type: "event",
  event: "run_executable",
  id: number,
  "unigraph.id": string,
  params: any,
}

declare type EventAddNotification = {
  type: "event",
  event: "add_notification",
  id: number,
  item: UnigraphNotification
}