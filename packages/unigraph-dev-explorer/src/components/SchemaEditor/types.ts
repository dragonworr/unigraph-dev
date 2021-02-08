import { RefUnigraphIdType } from "unigraph-dev-common/lib/api/unigraph";

export interface KeyValueField<K = any, V = any> {
  key: K;
  value: V;
}

export type KeyValueInput<K = any, V = any> = Partial<KeyValueField<K, V>>;

/**
 * TODO: common package for shared types & enums
 */

export type EntityField<T extends string = string> = {
  key: string;
  definition: {
    type?: RefUnigraphIdType<T>;
    parameters?: {
      element: {
        type: RefUnigraphIdType<T>;
      }
    }
  };
}

export type EntityFieldInput<T extends string = string> = {
  key: string,
  definition: { type: string }
}