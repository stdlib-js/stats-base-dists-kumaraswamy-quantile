"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=a(function(F,s){
var i=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-pow/dist');function y(e,r,t){return i(e)||i(r)||i(t)||r<=0||t<=0||e<0||e>1?NaN:o(1-o(1-e,1/t),1/r)}s.exports=y
});var v=a(function(O,f){
var l=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-pow/dist');function x(e,r){if(u(e)||u(r)||e<=0||r<=0)return l(NaN);return t;function t(n){return u(n)||n<0||n>1?NaN:q(1-q(1-n,1/r),1/e)}}f.exports=x
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=c(),d=v();w(N,"factory",d);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
