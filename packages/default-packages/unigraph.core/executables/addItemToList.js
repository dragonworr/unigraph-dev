const destUidOrName = context.params.where;
const sourceUid = context.params.item;
let destUid;

if (destUidOrName.startsWith('$/entity')) {
    // Named entity
    destUidOrName = unigraph.getNamespaceMapUid(destUidOrName)
} else if (destUidOrName.startsWith('0x')) {
    // UID
    destUid = destUidOrName;
} else {
    throw new Error("Destination is not valid - should either be a named entity or an UID.")
}

await unigraph.updateObject(destUid, {
    _value: {
        children: {
            "_value[": [{
                "_value": {
                    uid: sourceUid
                }
            }]
        }
    }
}, true, false);

