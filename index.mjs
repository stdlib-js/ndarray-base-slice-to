// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.1.0-esm/index.mjs";function r(r,n,d,m){var l,j;for(l=[],j=0;j<n.length;j++)s(n[j])?l.push(new t(n[j])):l.push(null);return i(r,e(l),d,m)}export{r as default};
//# sourceMappingURL=index.mjs.map
