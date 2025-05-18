/**
 * Original code from lljj-x/vue-json-schema-form
 * Copyright 2022 lljj-x
 * Licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 */
/**
 * Created by Liu.Jun on 2020/4/25 14:45.
 */

import Vue from 'vue';

import {
    nodePath2ClassName, isRootNodePath, computedCurPath, getPathVal, path2prop, pathSeparator
} from './vueCommonUtils';

// 删除当前path值
export function deletePathVal(vueData, name) {
    Vue.delete(vueData, name);
}

// 设置当前path值
export function setPathVal(obj, path, value) {
    // Vue.set ?
    const pathArr = path.split(pathSeparator);
    for (let i = 0; i < pathArr.length; i += 1) {
        if (pathArr.length - i < 2) {
            // 倒数第一个数据
            // obj[pathArr[pathArr.length - 1]] = value;
            Vue.set(obj, pathArr[pathArr.length - 1], value);
            break;
        }
        obj = obj[pathArr[i]];
    }
}

export {
    nodePath2ClassName, isRootNodePath, computedCurPath, getPathVal, path2prop, pathSeparator
};
