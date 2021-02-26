import { ReactElement } from "react";
import { Unigraph } from "unigraph-dev-common";

declare global {
    interface Window {
        unigraph: Unigraph;
    }
};

declare type DynamicViewCallbacks = {
    "onUpdate": (data: Record<string, any>) => any,
}

declare type DynamicViewRenderer = (data: Record<string, any>, callbacks: DynamicViewCallbacks) => ReactElement