import { Model } from "flexlayout-react";
import { ReactElement } from "react";
import { Unigraph } from "unigraph-dev-common/lib/api/unigraph";

declare global {
    interface Window {
        unigraph: Unigraph<WebSocket>;
        layoutModel: Model
        DynamicViews: Record<string, DynamicViewRenderer>,
        DynamicViewsDetailed: Record<string, DynamicViewRenderer>
    }
};

declare type DynamicViewCallbacks = {
    "onUpdate": (data: Record<string, any>) => any,
}

declare type DynamicViewRenderer = (data: Record<string, any>, callbacks: DynamicViewCallbacks) => ReactElement

declare module 'javascript-time-ago' {
    function foo(): void; 
    export = foo;
};

declare type UserSettings = {
    serverLocation: string,
    "new-window": "new-tab" | "new-pane" | "new-popout"
}