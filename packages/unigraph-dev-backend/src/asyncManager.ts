/**
 * Main file for classes and functions of asyncManager, which deals with asynchronous locking and resource consistency.
 */

import AsyncLock from 'async-lock';

export const resources = [
    "caches/schema",
];

export function getAsyncLock () { return new AsyncLock() };