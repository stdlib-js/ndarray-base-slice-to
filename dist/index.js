"use strict";var v=function(s,r){return function(){try{return r||s((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var l=v(function(o,a){
var c=require('@stdlib/assert-is-number/dist').isPrimitive,n=require('@stdlib/slice-base-args2multislice/dist'),q=require('@stdlib/slice-ctor/dist'),m=require('@stdlib/ndarray-base-slice/dist');function f(s,r,u,t){var i,e;for(i=[],e=0;e<r.length;e++)c(r[e])?i.push(new q(r[e])):i.push(null);return m(s,n(i),u,t)}a.exports=f
});var g=l();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
