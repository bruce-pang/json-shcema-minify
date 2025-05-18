/**
 * Original code from lljj-x/vue-json-schema-form
 * Copyright 2022 lljj-x
 * Licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 */
// $ref 引用
function getPathVal(obj, pathStr) {
    const pathArr = pathStr.split('/');
    for (let i = 0; i < pathArr.length; i += 1) {
        if (obj === undefined) return undefined;
        obj = pathArr[i] === '' ? obj : obj[pathArr[i]];
    }
    return obj;
}

// 找到ref引用的schema
export default function findSchemaDefinition($ref, rootSchema = {}) {
    const origRef = $ref;
    if ($ref.startsWith('#')) {
        // Decode URI fragment representation.
        $ref = decodeURIComponent($ref.substring(1));
    } else {
        throw new Error(`Could not find a definition for ${origRef}.`);
    }
    const current = getPathVal(rootSchema, $ref);

    if (current === undefined) {
        throw new Error(`Could not find a definition for ${origRef}.`);
    }
    if (current.hasOwnProperty('$ref')) {
        return findSchemaDefinition(current.$ref, rootSchema);
    }
    return current;
}
