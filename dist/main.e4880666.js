parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d9Gs":[function(require,module,exports) {
"use strict";function t(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw u}}}}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function o(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,r,e){return r&&o(t.prototype,r),e&&o(t,e),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=function(){function r(t){n(this,r),this.areas=document.querySelectorAll("#".concat(t," area")),this.previousWidth=1920,this.currentWidth=document.body.clientWidth/this.previousWidth}return i(r,[{key:"hrefs",get:function(){return Array.prototype.map.call(this.areas,function(t){return t.href})}},{key:"coords",get:function(){return Array.prototype.map.call(this.areas,function(t){return t.coords.split(",")})},set:function(r){var e,n=t(this.areas);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.coords=o.coords.split(",").map(function(t){return t*r}).join(",")}}catch(i){n.e(i)}finally{n.f()}}},{key:"coordsSquare",get:function(){return this.coords.map(function(t){return{x:t[0],y:t[1],w:t[2]-t[0],h:t[3]-t[1]}})}},{key:"resize",value:function(){this.coords=document.body.clientWidth/this.previousWidth,this.previousWidth=document.body.clientWidth}}]),r}();exports.default=u;
},{}],"iNwS":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function e(i,s,n,o,r){t(this,e),this.coords=n,this.x=i,this.y=s,this.canvas=o,this.ctx=this.canvas.getContext("2d"),this.hoverColors=r,this.draw()}return i(e,[{key:"draw",value:function(){this.ctx.beginPath(this.ctx.isPointInPath(this.x,this.y)),this.shape(),this.ctx.fillStyle=this.ctx.isPointInPath(this.x,this.y)?this.hoverColors[0]:this.hoverColors[1],this.ctx.fill()}},{key:"shape",value:function(){throw new Error("Shape it's required function")}}]),e}();exports.default=s;
},{}],"ESWV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./Figure"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=a();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c,i){return n(this,o),r.call(this,t,e,u,c,i)}return u(o,[{key:"shape",value:function(){this.ctx.rect(this.coords.x,this.coords.y,this.coords.w,this.coords.h)}}]),o}();exports.default=y;
},{"./Figure":"iNwS"}],"E1Qf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./Figure"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=a();return function(){var r,o=p(t);if(e){var n=p(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return s(this,r)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(n,t.default);var r=f(n);function n(t,e,u,c,i){return o(this,n),r.call(this,t,e,u,c,i)}return u(n,[{key:"shape",value:function(){this.ctx.moveTo(this.coords[0],this.coords[1]);for(var t=2;t<this.coords.length;t+=2)this.ctx.lineTo(this.coords[t],this.coords[t+1]);this.ctx.closePath()}}]),n}();exports.default=y;
},{"./Figure":"iNwS"}],"qHrJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./Figure"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c,i){return n(this,o),r.call(this,t,e,u,c,i)}return u(o,[{key:"shape",value:function(){this.ctx.arc(this.coords[0],this.coords[1],this.coords[2],0,2*Math.PI)}}]),o}();exports.default=y;
},{"./Figure":"iNwS"}],"airl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=i(require("./ImageMap")),e=i(require("./figures/Rect")),r=i(require("./figures/Poly")),n=i(require("./figures/Circle"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,r){return(a=o()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&c(i,r.prototype),i}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}var f=function(){function i(e){var r=this;s(this,i),this.canvas=document.querySelector("#".concat(e.canvasId)),this.wrap=document.querySelector(e.wrap),this.ctx=this.canvas.getContext("2d"),this.imgMap=new t.default(e.mapId),this.currentLink=location.href,this.hoverColors=e.hoverColors,this.canvas.onmouseleave=function(){return r.ctx.clearRect(0,0,r.canvas.width,r.canvas.height)},this.canvas.onmousemove=function(t){return r.mapHilight(t)},this.canvas.onclick=function(){return location.href=r.currentLink}}return h(i,[{key:"refreshCanvasData",value:function(t){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var e=this.canvas.getBoundingClientRect();return this.canvas.width=this.wrap.offsetWidth,this.canvas.height=this.wrap.offsetHeight,{x:t.clientX-e.left,y:t.clientY-e.top}}},{key:"mapHilight",value:function(t){var i=this.refreshCanvasData(t),o=i.x,c=i.y;this.imgMap.resize();for(var s=0;s<this.imgMap.coords.length;s++){var u=this.imgMap.areas[s].shape,h=[o,c,"rect"===u?this.imgMap.coordsSquare[s]:this.imgMap.coords[s],this.canvas,this.hoverColors];a("rect"===u?e.default:"poly"===u?r.default:n.default,h);this.ctx.isPointInPath(o,c)&&(this.currentLink=this.imgMap.hrefs[s])}}}]),i}();exports.default=f;
},{"./ImageMap":"d9Gs","./figures/Rect":"ESWV","./figures/Poly":"E1Qf","./figures/Circle":"qHrJ"}],"epB2":[function(require,module,exports) {
"use strict";var a=r(require("./mapCanvas/MapCanvas"));function r(a){return a&&a.__esModule?a:{default:a}}var e=new a.default({wrap:"#wrap-canvas",canvasId:"map-canvas",mapId:"image-map",hoverColors:["rgba(0,0,0, .8)","rgba(0,0,0, .5)"]});
},{"./mapCanvas/MapCanvas":"airl"}]},{},["epB2"], null)