/**
 * Original code from lljj-x/vue-json-schema-form
 * Copyright 2022 lljj-x
 * Licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 */
/**
 * Created by Liu.Jun on 2020/4/30 11:22.
 */

// 使用 ajv-i18n 这里只为初始化默认可以设置语言
// 也可以自己使用官方的语言包
// https://github.com/epoberezkin/ajv-i18n/tree/master/localize

import localizeZh from './localize/zh';

export default {
    $$currentLocalizeFn: localizeZh,
    getCurrentLocalize() {
        return this.$$currentLocalizeFn;
    },
    useLocal(fn) {
        this.$$currentLocalizeFn = fn;
    }
};
