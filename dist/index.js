"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=v(function(j,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r){return x(r)?y(r,"iter")&&(e.iter=r.iter,!O(r.iter))?new TypeError(o('0ap2t',"iter",r.iter)):null:new TypeError(o('0ap2V',r));}s.exports=h
});var d=v(function(I,g){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=f(),T=134217727;function c(e){var r,t,u,n,i;if(r={iter:T},arguments.length&&(n=w(r,e),n))throw n;return i=-1,t={},a(t,"next",m),a(t,"return",q),l&&a(t,l,p),t;function m(){return i+=1,u||i>=r.iter?{done:!0}:{value:i/2*(i+1),done:!1}}function q(b){return u=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return c(r)}}g.exports=c
});var E=d();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
