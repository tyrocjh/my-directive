!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tDirective=t():e.tDirective=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={"input-number":{inserted:function(e,t,n){var r=t.arg,o=t.modifiers,i=function(e){var t=e.target.value,i="";switch(e.type){case"input":if(o.integer)i=function(e){return o.minus?e.replace(/[^\d-]/g,"").replace(/(\-\d*)(\-\d*)/g,"$1"):e.replace(/[^\d]/g,"")}(t);else{var a=(i=function(e){return o.minus?e.replace(/[^\d.-]/g,"").replace(/(\-.*)(\-.*)/g,"$1").replace(/(\.\d*)(\.\d*)/g,"$1"):e.replace(/[^\d.]/g,"").replace(/(\.\d*)(\.\d*)/g,"$1")}(t)).toString().split(".")[1];if(!isNaN(r)&&a){var u=Number(r);i=a.length>u?function(e,t){return Math.floor(e*Math.pow(10,t))/Math.pow(10,t)}(i,u):i}}break;case"change":i=function(e){return""===e||null==e}(t)?"":o.integer?parseInt(t,10):parseFloat(t)}n.data.model?n.data.model.callback(i):e.target.value=i};e.addEventListener("input",i),e.addEventListener("change",i)}},permission:{inserted:function(e,t,n){var r=n.context.$route.meta.btnPermission;r&&!r.includes(t.value)&&e.parentNode.removeChild(e)}},trim:{inserted:function(e,t,n){e.addEventListener("change",(function(e){var t=e.target.value,r=t;t&&(r=t.replace(/^\s+|\s+$/gm,"")),n.data.model?n.data.model.callback(r):e.target.value=r}))}}};t.default={install:function(e){Object.keys(r).forEach((function(t){e.directive(t,r[t])}))}}}])}));