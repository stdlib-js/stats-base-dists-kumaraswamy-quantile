// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";function r(t,n,r){return s(t)||s(n)||s(r)||n<=0||r<=0||t<0||t>1?NaN:e(1-e(1-t,1/r),1/n)}function i(t,r){return s(t)||s(r)||t<=0||r<=0?n(NaN):function(n){if(s(n)||n<0||n>1)return NaN;return e(1-e(1-n,1/r),1/t)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
