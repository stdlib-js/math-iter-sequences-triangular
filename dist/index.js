"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=v(function(j,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(t,r){return x(r)?y(r,"iter")&&(t.iter=r.iter,!O(r.iter))?new TypeError(o('0ap2t',"iter",r.iter)):null:new TypeError(o('0ap2V',r));}s.exports=h
});var d=v(function(I,g){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=f(),T=134217727;function c(t){var r,e,u,n,i;if(r={iter:T},arguments.length&&(n=w(r,t),n))throw n;return i=-1,e={},a(e,"next",m),a(e,"return",q),l&&a(e,l,p),e;function m(){return i+=1,u||i>=r.iter?{done:!0}:{value:i/2*(i+1),done:!1}}function q(b){return u=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return c(r)}}g.exports=c
});var E=d();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
