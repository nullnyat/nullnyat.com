/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,9],{279:function(t,e,r){var content=r(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("947f0334",content,!0,{sourceMap:!1})},280:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("3967ffec",content,!0,{sourceMap:!1})},281:function(t,e,r){"use strict";var n=r(9);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(t,e){v(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){v(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){v(t,e,r)}))}function v(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var c=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,c,t,r):Reflect.defineMetadata(n,c,t)}))}var h={__proto__:[]}instanceof Array;function m(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(n[t]=data[t])})),n}var y=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(y.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return o({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return m(this,t)}});var c=t.__decorators__;c&&(c.forEach((function(t){return t(e)})),delete t.__decorators__);var l=Object.getPrototypeOf(t.prototype),v=l instanceof n.default?l.constructor:n.default,h=v.extend(e);return w(h,t,v),f()&&d(h,t),h}var _={prototype:!0,arguments:!0,callee:!0,caller:!0};function w(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!_[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var l,f,d=Object.getOwnPropertyDescriptor(e,n);if(!h){if("cid"===n)return;var v=Object.getOwnPropertyDescriptor(r,n);if(l=d.value,f=c(l),null!=l&&("object"===f||"function"===f)&&v&&v.value===d.value)return}0,Object.defineProperty(t,n,d)}}}))}function j(t){return"function"==typeof t?O(t):function(e){return O(e,t)}}j.registerHooks=function(t){y.push.apply(y,l(t))},e.a=j},282:function(t,e,r){"use strict";r(279)},283:function(t,e,r){var n=r(65)(!1);n.push([t.i,".jumbo-logo{width:75%}",""]),t.exports=n},284:function(t,e,r){"use strict";r(280)},285:function(t,e,r){var n=r(65)(!1);n.push([t.i,".card-button[data-v-79d75b91]{width:15rem;height:20rem;border-width:0;background-color:#fafafa}.card-button[data-v-79d75b91]:hover{background-color:#f5f5f5}.icon[data-v-79d75b91]{width:4rem}",""]),t.exports=n},286:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("6919f02c",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r.r(e);var n=r(24),c=r(25),o=r(64),l=r(98),f=r(46),d=r(45),v=(r(6),r(1),r(157),r(9)),h=r(281);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},O=function(t){Object(o.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"iconName",get:function(){return"Icon".concat(this.serviceName)}}]),r}(v.default.extend({props:{serviceName:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0}}})),_=O=y([h.a],O),w=(r(284),r(47)),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"text-reset text-decoration-none",attrs:{target:"_blank",href:t.link}},[r("div",{staticClass:"card-button d-flex flex-column shadow-sm text-center rounded"},[r("h4",{staticClass:"pt-5 mb-5 color-fg-black"},[t._v(t._s(t.serviceName))]),r("span",{staticClass:"m-0"},[r(t.iconName,{tag:"component",staticClass:"icon"})],1),r("p",{staticClass:"color-bg-backgroundBlue p-4 m-0 mt-auto h-25 rounded-bottom"},[t._v(t._s(t.description))])])])}),[],!1,null,"79d75b91",null);e.default=component.exports},288:function(t,e,r){"use strict";r.r(e);r(282);var n=r(47),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"jumbo-logo",attrs:{fill:"white",width:"640",height:"166.56",version:"1.1",viewBox:"0 0 640 166.56",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{transform:"scale(.86398 1.1574)","stroke-width":"1.9204","aria-label":"ぬるきゃっとちゃん！"}},[r("path",{attrs:{d:"m40.789 52.926c0-1.9204 1.8436-3.6104 4.9162-3.6104 2.4581 0 4.7626 0.69134 6.9135 1.7668-1.69 3.3031-4.1481 5.5308-7.3744 5.5308-2.8422 0-4.4553-1.4595-4.4553-3.6872zm2.3045-51.16-10.601-0.30726c0.23045 2.3813 0.30726 3.6104 0.15363 6.9135-0.07682 1.2291-0.15363 2.6118-0.30726 4.0713-6.2221 1.3059-11.522 3.9176-15.978 7.1439-1.2291-3.8408-2.3813-7.8353-3.1495-11.599l-8.9875 3.764c1.8436 4.5322 2.2277 6.2989 3.1495 9.0643 0.61453 1.69 1.2291 3.4567 1.9204 5.3771-0.84498 0.9218-1.6131 1.9204-2.3813 2.919-3.9176 5.2235-6.9135 12.444-6.9135 21.048 0 8.8339 5.2235 13.443 11.522 13.443 10.601 0 20.971-14.595 25.503-28.499 1.5363-4.609 2.6886-9.9861 3.6104-15.286 8.9875 0.30726 14.979 5.9917 14.979 16.208 0 2.5349-0.23045 5.1467-0.69135 7.6048-2.919-1.0754-6.0685-1.69-9.5252-1.69-7.9121 0-12.982 6.1453-12.982 11.983 0 7.2207 5.2235 11.215 13.212 11.215 6.7598 0 11.522-3.1495 14.672-8.1425 2.1509 2.074 3.9176 4.3017 5.3771 5.9917l5.7612-7.2975c-1.9972-2.3813-4.609-4.9931-7.6816-7.2207 0.99861-3.9176 1.4595-8.2193 1.4595-12.751 0-14.288-10.063-23.506-23.429-24.043 0.15363-0.99861 0.30726-1.9972 0.38408-2.9958 0.15363-1.3827 0.4609-4.3017 0.92179-6.9135zm-34.26 46.704c0-3.9944 1.7668-8.6802 4.1481-12.675 0.84498 1.8436 1.6131 3.5335 2.3813 5.0699 1.5363 2.9958 2.919 5.3771 4.3017 7.4512-2.6886 3.2263-5.454 5.3003-7.528 5.3003-1.9972 0-3.3031-2.3813-3.3031-5.1467zm12.828-15.747c-0.69135-1.3827-1.4595-3.0726-2.2277-4.8394 3.2263-2.919 6.9903-5.3771 11.676-6.7598-0.76816 3.9944-1.69 8.0657-2.919 11.599-0.84498 2.3813-1.8436 4.6858-2.919 6.8366-1.2291-1.9972-2.3813-4.2249-3.6104-6.8366z"}}),t._v(" "),r("path",{attrs:{d:"m102.7 53.695c0-1.9204 1.8436-3.6872 4.7626-3.6872 4.1481 0 6.9903 3.2263 7.4512 8.2193-1.3827 0.15363-2.8422 0.23045-4.4553 0.23045-4.609 0-7.7584-1.9204-7.7584-4.7626zm-13.059-49.47 0.30726 9.9861c1.7668-0.23045 4.2249-0.4609 6.2989-0.61453 4.0713-0.23045 14.672-0.69135 18.59-0.76816-3.764 3.3031-11.753 9.7557-16.055 13.289-4.5322 3.764-13.827 11.599-19.281 15.978l6.9903 7.2207c8.2193-9.3716 15.901-15.594 27.654-15.594 9.0643 0 15.978 4.6858 15.978 11.599 0 4.6858-2.1508 8.2193-6.3757 10.447-1.0754-7.2975-6.8366-13.136-16.362-13.136-8.1425 0-13.75 5.7612-13.75 11.983 0 7.6816 8.0657 12.598 18.743 12.598 18.59 0 27.807-9.602 27.807-21.739 0-11.215-9.9093-19.358-22.968-19.358-2.4581 0-4.7626 0.23045-7.2975 0.84498 4.8394-3.8408 12.905-10.601 17.053-13.52 1.7668-1.3059 3.6104-2.3813 5.3771-3.5335l-4.993-6.8366c-0.92179 0.30726-2.6886 0.53771-5.838 0.84498-4.3785 0.38408-20.817 0.69135-24.888 0.69135-2.1509 0-4.8394-0.076816-6.9903-0.38408z"}}),t._v(" "),r("path",{attrs:{d:"m160.78 23.736 0.53772 9.0643c11.599 0.69134 23.967 0.69134 33.415 0.07682 1.2291 2.6118 2.6886 5.3003 4.3017 7.9889-2.3045-0.23045-6.4526-0.61453-9.6788-0.9218l-0.76816 7.2975c5.6076 0.61453 13.904 1.6131 18.205 2.4581l4.6858-7.0671c-1.3827-1.3059-2.4581-2.4581-3.4567-3.9176-1.3827-1.9972-2.6886-4.3785-3.9944-6.8366 4.609-0.61453 8.757-1.4595 12.291-2.3813l-1.5363-9.0643c-3.764 0.99861-8.373 2.3045-14.672 3.0726-0.4609-1.2291-0.9218-2.3813-1.3059-3.4567-0.38408-1.1522-0.76816-2.3813-1.1522-3.6104 5.0699-0.69135 9.9093-1.69 14.134-2.8422l-1.2291-8.8339c-4.9162 1.5363-9.8325 2.6118-15.133 3.3031-0.53771-2.6118-0.99861-5.3003-1.3827-8.0657l-10.293 1.1522c0.92179 2.6886 1.69 5.1467 2.4581 7.6048-7.0671 0.23045-14.902-0.076816-24.043-1.1522l0.53772 8.8339c9.6788 0.92179 18.666 1.0754 25.887 0.69135 0.46089 1.3059 0.92179 2.7654 1.5363 4.5322 0.30727 0.84498 0.61453 1.7668 0.99861 2.6886-8.5266 0.53771-18.897 0.4609-30.342-0.61453zm14.749 17.821-9.5252-1.8436c-1.7668 3.6872-3.4567 7.4512-3.3031 12.367 0.15363 10.985 9.6788 15.517 25.042 15.517 6.2989 0 13.289-0.53771 18.666-1.4595l0.53771-9.7557c-5.454 1.0754-11.983 1.69-19.281 1.69-10.14 0-15.517-2.3045-15.517-7.9889 0-3.3031 1.5363-5.9917 3.3799-8.5266z"}}),t._v(" "),r("path",{attrs:{d:"m264.86 24.274 6.8366-4.9931c-1.8436-2.074-6.2221-5.9148-8.4498-7.3744l-6.7598 4.9931c2.7654 1.9972 6.0685 4.9931 8.373 7.3744zm-15.747-6.2989-9.5252 3.6872c1.3827 1.6131 2.7654 3.8408 3.6104 5.3003 0.76816 1.3059 1.69 3.0726 2.6886 4.9931-1.9204 0.76816-3.6872 1.5363-5.454 2.2277-1.0754 0.4609-3.9176 1.3827-6.8366 2.074l4.3785 9.2948c2.074-0.9218 6.4526-3.2263 11.522-5.6844 0.69135 1.4595 1.3059 2.919 1.9204 4.3017 2.8422 7.0671 6.5294 17.745 8.373 25.426l9.6788-2.3045c-2.1508-6.8366-6.683-20.126-9.602-26.886-0.53772-1.3059-1.2291-2.8422-1.9204-4.4553 6.683-2.919 13.52-5.3771 17.898-5.3771 4.7626 0 7.0671 2.6118 7.0671 5.1467 0 3.9944-2.6118 6.683-7.9121 6.683-2.5349 0-5.9148-0.84498-8.6802-2.074l-0.23045 8.8339c2.2277 0.84498 6.2989 1.9204 9.602 1.9204 11.522 0 16.746-5.9148 16.746-15.363 0-6.7598-5.0699-13.673-16.208-13.673-5.7612 0-13.827 2.9958-21.893 6.2989-1.0754-2.2277-2.074-4.3017-2.919-5.838-0.53771-1.1522-1.5363-3.1495-2.3045-4.5322z"}}),t._v(" "),r("path",{attrs:{d:"m314.18 30.266 3.9944 9.9861c6.5294-2.7654 21.893-9.1411 30.803-9.1411 6.683 0 10.985 3.9944 10.985 9.7557 0 10.447-12.905 15.133-30.496 15.594l4.0713 9.4484c24.428-1.5363 36.641-10.985 36.641-24.888 0-11.599-8.1425-18.82-20.279-18.82-9.2948 0-22.354 4.3785-27.577 5.9917-2.3045 0.69134-5.838 1.6131-8.1425 2.074z"}}),t._v(" "),r("path",{attrs:{d:"m405.36 1.5363-9.602 3.9176c3.4567 8.1425 7.1439 16.362 10.677 22.891-7.3744 5.454-12.751 11.83-12.751 20.279 0 13.212 11.599 17.437 26.886 17.437 9.9861 0 18.129-0.76816 24.658-1.9204l0.15363-11.062c-6.8366 1.69-17.207 2.8422-25.119 2.8422-10.677 0-15.978-2.919-15.978-8.4498 0-5.3771 4.3017-9.7557 10.677-13.981 6.9903-4.5322 16.669-8.9875 21.432-11.369 2.8422-1.4595 5.3003-2.7654 7.6048-4.1481l-5.3003-8.9107c-1.9972 1.69-4.2249 2.9958-7.1439 4.6858-3.6104 2.074-10.293 5.3771-16.592 9.0643-3.0726-5.9148-6.683-13.289-9.602-21.278z"}}),t._v(" "),r("path",{attrs:{d:"m491.62 1.5363-10.908-0.4609c0.15363 2.5349 0.0768 4.4553-0.38408 7.7584-0.15364 0.92179-0.30727 1.9972-0.4609 3.1495-4.6858-0.07682-10.447-0.69134-15.056-1.4595v9.5252c3.9176 0.38408 8.4498 0.61453 13.289 0.69135-1.9972 8.4498-5.0699 18.666-8.757 25.81l9.0643 3.2263c0.76816-1.3059 1.3059-2.3045 2.1508-3.3799 4.609-5.838 12.444-8.9875 21.278-8.9875 7.528 0 11.446 3.8408 11.446 8.4498 0 11.292-16.976 13.366-33.799 10.601l2.6886 9.9093c24.812 2.6886 41.481-3.5335 41.481-20.817 0-9.8325-8.2193-16.439-20.664-16.439-6.8366 0-12.828 1.3827-19.05 4.8394 1.1522-3.764 2.3813-8.6802 3.4567-13.366 10.293-0.53771 22.507-1.9972 30.496-3.3031l-0.15363-9.1411c-9.2948 1.9972-19.665 3.1495-28.422 3.6104 0.15363-0.84498 0.30727-1.69 0.4609-2.3813 0.53771-2.5349 0.99861-5.1467 1.8436-7.8353z"}}),t._v(" "),r("path",{attrs:{d:"m572.13 24.274 6.8366-4.9931c-1.8436-2.074-6.2221-5.9148-8.4498-7.3744l-6.7598 4.9931c2.7654 1.9972 6.0685 4.9931 8.373 7.3744zm-15.747-6.2989-9.5252 3.6872c1.3827 1.6131 2.7654 3.8408 3.6104 5.3003 0.76816 1.3059 1.69 3.0726 2.6886 4.9931-1.9204 0.76816-3.6872 1.5363-5.454 2.2277-1.0754 0.4609-3.9176 1.3827-6.8366 2.074l4.3785 9.2948c2.074-0.9218 6.4526-3.2263 11.522-5.6844 0.69134 1.4595 1.3059 2.919 1.9204 4.3017 2.8422 7.0671 6.5294 17.745 8.373 25.426l9.6788-2.3045c-2.1509-6.8366-6.683-20.126-9.602-26.886-0.53771-1.3059-1.2291-2.8422-1.9204-4.4553 6.683-2.919 13.52-5.3771 17.898-5.3771 4.7626 0 7.0671 2.6118 7.0671 5.1467 0 3.9944-2.6118 6.683-7.9121 6.683-2.5349 0-5.9148-0.84498-8.6802-2.074l-0.23044 8.8339c2.2277 0.84498 6.2989 1.9204 9.602 1.9204 11.522 0 16.746-5.9148 16.746-15.363 0-6.7598-5.0699-13.673-16.208-13.673-5.7612 0-13.827 2.9958-21.893 6.2989-1.0754-2.2277-2.074-4.3017-2.919-5.838-0.53771-1.1522-1.5363-3.1495-2.3045-4.5322z"}}),t._v(" "),r("path",{attrs:{d:"m654.78 5.6844-10.908-4.3785c-1.3059 3.2263-2.7654 5.7612-3.764 7.8353-4.0713 7.2975-19.819 38.639-25.503 54.002l10.831 3.6872c1.1522-4.0713 3.8408-12.675 5.838-17.13 2.7654-6.2221 7.0671-11.599 12.291-11.599 2.7654 0 4.3017 1.6131 4.5322 4.3017 0.23045 3.1495 0.15363 9.4484 0.46089 13.52 0.30727 5.6076 4.3017 10.677 12.828 10.677 11.753 0 18.897-8.757 22.891-21.893l-8.2962-6.7598c-2.2277 9.5252-6.2989 18.129-12.982 18.129-2.5349 0-4.6858-1.1522-4.993-4.1481-0.38408-3.2263-0.15363-9.3716-0.30727-12.828-0.30726-6.3757-3.764-9.9861-9.5252-9.9861-2.919 0-5.9917 0.69135-8.8339 2.3045 3.8408-6.7598 9.2179-16.592 12.982-22.123 0.84498-1.2291 1.69-2.5349 2.4581-3.6104z"}}),t._v(" "),r("path",{attrs:{d:"m715.14 45.366 7.1012 3.3113 12.982-22.933 5.1852-10.211-11.557-5.389-4.489 10.536zm-5.0848 20.174c3.481 1.6232 7.2952 0.35054 8.9833-3.2697 1.7206-3.6898 0.24377-7.4297-3.2372-9.0529-3.481-1.6232-7.2952-0.35054-9.0158 3.3393-1.6881 3.6202-0.28092 7.3276 3.2697 8.9833z"}})]),t._v(" "),r("g",{attrs:{"stroke-width":".74416","aria-label":"-FANCLUB-"}},[r("path",{attrs:{d:"m73.674 159.52v-2.3255h8.1392v2.3255z"}}),t._v(" "),r("path",{attrs:{d:"m134.98 148.93v7.1799h9.8251v2.2964h-9.8251v7.863h-2.776v-19.607h12.95v2.2673z"}}),t._v(" "),r("path",{attrs:{d:"m204.98 166.27-2.0057-5.5521h-8.1828l-1.9912 5.5521h-2.8487l7.4124-19.607h3.1539l7.2816 19.607zm-6.0753-17.514-0.17441 0.56684-1.0029 3.0812-2.1947 6.148h6.7294l-2.5144-7.2671z"}}),t._v(" "),r("path",{attrs:{d:"m262.66 166.27-7.5578-16.424q0.23255 2.4999 0.23255 3.6917v12.732h-2.4708v-19.607h3.2266l7.6741 16.54q-0.26162-2.0929-0.26162-3.9824v-12.558h2.4999v19.607z"}}),t._v(" "),r("path",{attrs:{d:"m315.64 156.37q0 3.9678 1.2354 5.959 1.25 1.9767 3.808 1.9767 1.468 0 2.6598-0.98833 1.1918-1.0029 2.0203-3.1103l2.3109 0.94472q-2.1656 5.4067-7.02 5.4067-3.8225 0-5.8864-2.6307-2.0493-2.6307-2.0493-7.5578 0-10.014 7.7904-10.014 4.9271 0 6.773 4.869l-2.4418 0.94473q-0.53777-1.6424-1.686-2.5871-1.1337-0.95926-2.6307-0.95926-2.4854 0-3.6917 1.8749-1.1918 1.8749-1.1918 5.8718z"}}),t._v(" "),r("path",{attrs:{d:"m375.08 166.27v-19.607h2.776v17.339h9.767v2.2673z"}}),t._v(" "),r("path",{attrs:{d:"m447.97 159.14q0 3.8806-1.6569 5.6538-1.6569 1.7586-5.3195 1.7586-3.5464 0-5.1451-1.7005-1.5842-1.715-1.5842-5.4503v-12.747h2.776v12.369q0 2.965 0.84298 4.1277 0.85752 1.1482 3.0958 1.1482 2.34 0 3.2847-1.1918 0.94473-1.1918 0.94473-4.2731v-12.18h2.7615z"}}),t._v(" "),r("path",{attrs:{d:"m509.51 160.74q0 2.6162-1.9912 4.0696-1.9912 1.4534-5.5375 1.4534h-6.8602v-19.607h5.9881q7.209 0 7.209 4.7527 0 1.7732-1.0465 2.965t-2.8487 1.5552q2.4272 0.26162 3.7498 1.5552 1.3372 1.2936 1.3372 3.2557zm-3.9824-8.9822q0-1.5552-1.1046-2.2092-1.0901-0.66858-3.2847-0.66858h-3.2411v6.0462h3.2702q4.3603 0 4.3603-3.1685zm1.1773 8.7351q0-1.6569-1.2935-2.529-1.2936-0.87205-3.8516-0.87205h-3.6626v6.9474h3.8661q2.5435 0 3.7353-0.87205 1.2063-0.88659 1.2063-2.6743z"}}),t._v(" "),r("path",{attrs:{d:"m558.19 159.52v-2.3255h8.1392v2.3255z"}})])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,r){t.exports=r.p+"img/hi_nullcat.05ccd10.png"},290:function(t,e,r){t.exports=r.p+"img/bibibi_nullcat.c24f67f.png"},291:function(t,e,r){"use strict";r(286)},292:function(t,e,r){var n=r(65)(!1);n.push([t.i,".hero[data-v-e7cfa000]{height:45rem}.shape[data-v-e7cfa000],.shape-background[data-v-e7cfa000]{position:absolute;top:0;left:0;width:100%;height:100%}.shape[data-v-e7cfa000]{-webkit-clip-path:polygon(0 0,100% 0,0 100%,0 100%);clip-path:polygon(0 0,100% 0,0 100%,0 100%)}h3[data-v-e7cfa000]{margin-top:2rem}",""]),t.exports=n},293:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shape-background color-bg-background"},[e("div",{staticClass:"shape color-bg-backgroundBlue"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md w-100 mb-5"},[n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center h-100"},[n("img",{staticClass:"mb-3",attrs:{alt:"びびびびびびっ",width:"128",src:r(290)}}),n("h2",{staticClass:"text-center"},[t._v("Links")])])])}],c=(r(157),r(5),r(4),r(2),r(7),r(0)),o=r(24),l=r(25),f=r(64),d=r(98),v=r(46),h=r(45),m=(r(6),r(1),r(3),r(9)),y=r(281);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var c=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var w=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},j=function(t){Object(f.a)(r,t);var e=_(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).linksMeta=[{serviceName:"Twitter",description:"nullnyat",link:"https://twitter.com/nullnyat"},{serviceName:"Discord",description:"nullnyat#3595",link:"https://discord.com/users/839568515848470538"},{serviceName:"Keybase",description:"nullnyat",link:"https://keybase.io/nullnyat"},{serviceName:"GitHub",description:"nullnyat",link:"https://github.com/nullnyat"},{serviceName:"Steam",description:"nullnyat",link:"https://steamcommunity.com/id/nullnyat"},{serviceName:"Origin",description:"nullnyat",link:"https://www.origin.com/jpn/ja-jp/profile/user/BcMVy9jix55EDn_JfEXUMw--"}],t}return Object(l.a)(r,[{key:"linksMetaWithIndex",get:function(){var t=[];return this.linksMeta.forEach((function(object,e){return t.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({index:e},object))})),t}}]),r}(m.default),x=j=w([y.a],j),k=(r(291),r(47)),component=Object(k.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"color-bg-background"},[n("div",{staticClass:"hero d-flex align-items-center justify-content-center position-relative"},[t._m(0),n("b-container",{staticClass:"z-index-1 d-flex flex-column align-items-center justify-content-center"},[n("img",{staticClass:"mb-2 mb-md-5",attrs:{alt:"Hi",width:"128",src:r(289)}}),n("JumboLogo")],1)],1),n("article",[n("section",{staticClass:"container p-5",attrs:{id:"about"}},[n("b-row",[n("div",{staticClass:"col-md w-100"},[n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center h-100 z-index-1"},[n("img",{staticClass:"mb-3",attrs:{alt:"Nyan!",width:"128",src:r(215)}}),n("h2",{staticClass:"text-center"},[t._v("About")])])]),n("div",{staticClass:"col-md d-flex align-items-center w-100"},[n("b-row",{staticClass:"w-100"},[n("div",{staticClass:"col-md"},[n("h3",[t._v("自己紹介")]),n("p",[t._v("Nullcat chan!")]),n("p",[t._v("2004/8/26")]),n("h3",[t._v("ゲーム")]),n("ul",[n("li",[t._v("APEX")]),n("li",[t._v("Valorant")]),n("li",[t._v("VRChat")])]),n("h3",[t._v("すき")]),n("ul",[n("li",[t._v("絵をかく")]),n("li",[t._v("ゲーム")]),n("li",[t._v("曲をきく")])])]),n("div",{staticClass:"col-md"},[n("h3",[t._v("好きなキャラ")]),n("ul",[n("li",[t._v("ポッチャマ")]),n("li",[t._v("ポチャッコ")])])])])],1)])],1),n("section",{staticClass:"container p-5",attrs:{id:"links"}},[t._m(1),n("b-row",t._l(t.linksMetaWithIndex,(function(t){return n("b-col",{key:t.id,staticClass:"d-flex w-100 justify-content-center align-items-center mb-5"},[n("CardButton",{attrs:{"service-name":t.serviceName,description:t.description,link:t.link}})],1)})),1)],1)])])}),n,!1,null,"e7cfa000",null);e.default=component.exports;installComponents(component,{JumboLogo:r(288).default,CardButton:r(287).default})}}]);