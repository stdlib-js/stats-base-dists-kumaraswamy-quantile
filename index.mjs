// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var r=s,i=e;var a=n,d=s,m=e;var o=function(t,s,e){return r(t)||r(s)||r(e)||s<=0||e<=0||t<0||t>1?NaN:i(1-i(1-t,1/e),1/s)},l=function(t,s){return d(t)||d(s)||t<=0||s<=0?a(NaN):function(e){if(d(e)||e<0||e>1)return NaN;return m(1-m(1-e,1/s),1/t)}};t(o,"factory",l);var p=o;export{p as default,l as factory};
//# sourceMappingURL=index.mjs.map
