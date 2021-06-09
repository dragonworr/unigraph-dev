import _ from "lodash";
import { resourceLimits } from "worker_threads";
import { IWebsocket } from "./custom";
import DgraphClient from "./dgraphClient";
import stringify from 'json-stable-stringify';

export type Subscription = {
    data: any,
    queryFragment: string, // something like () { uid }
    subType: "polling" | "pushing",
    callbackType: "function" | "messageid",
    id: number | string, // must be provided, regardless of using function or messageid
    /* eslint-disable */ // TODO: Temporarily appease the linter, remember to fix it later
    function?: Function,
    msgPort?: IWebsocket,
    regTime: number, // time of registration, can be used to manually terminate subscription going too long
    connId?: string
};

export function buildPollingQuery(subs: Subscription[]) {
    return subs.reduce((acc, now) => {return acc += `\n sub${now.id.toString()}` + now.queryFragment}, "{") + "}"
}

export type MsgCallbackFn = (id: number | string, updated: any, msgPort: IWebsocket, sub: Subscription) => any;

/**
 * Poll the database for subscription updates. Should be called by server roughly every 1 seconds (or more/less).
 * @param subs 
 * @param client 
 */
export async function pollSubscriptions(subs: Subscription[], client: DgraphClient, msgCallback: MsgCallbackFn, ids?: any[]) {
    if (!ids) ids = subs.map(el => el.id);
    if (subs.length >= 1) {
        subs.map(el => ids?.includes(el.id) ? el : false).forEach(async (el, index) => {
            if (el) {
                const query = buildPollingQuery([el]);
                let results: any[] = await client.queryDgraph(query).catch(e => {console.log(e); return []});
                const val = results[0];
                if (stringify(val) !== stringify(subs[index].data)) {
                    subs[index].data = val;
                    msgCallback(subs[index].id, val, subs[index].msgPort!, subs[index]);
                }
            }
        })
    }
}

export function createSubscriptionWS(id: string | number, msgPort: IWebsocket, queryFragment: string, connId: string) {
    return {
        data: null,
        queryFragment: queryFragment,
        subType: "polling",
        callbackType: "messageid",
        id: id,
        msgPort: msgPort,
        regTime: new Date().getTime(),
        connId: connId
    } as Subscription;
}

export function createSubscriptionLocal(id: string | number, callback: (data: any) => any, queryFragment: string) {
    return {
        data: null,
        queryFragment: queryFragment,
        subType: "polling",
        callbackType: "function",
        id: id,
        function: callback,
        regTime: new Date().getTime()
    } as Subscription;
}

export function removeSubscriptionsById(subscriptions: Subscription[], connId: string) {
    return subscriptions.filter((it) => !(it.connId === connId))
}