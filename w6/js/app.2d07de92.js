(function(e){function n(n){for(var r,a,u=n[0],i=n[1],d=n[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(p.length)p.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aed4a":"7ad3674b","chunk-2d0e5e97":"74e0d695","chunk-2d21a3d2":"a00b23ef","chunk-58184344":"1b65cb35","chunk-17518b6a":"41f9f905","chunk-2d0b9d35":"61998f7e","chunk-2d2086b7":"2c1cebb7","chunk-372e12cc":"ca3e2d76","chunk-45436da4":"880fd199","chunk-58b1e690":"720e14d7"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var d=new Error;c=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"29f4":function(e,n,t){"use strict";t("972b")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23"),o=t("9062"),c=t.n(o),a=(t("e40d"),t("7bb1")),u=t("3aa8"),i=t("cbdf"),d=t("9457");function l(e,n,t,o,c,a){var u=Object(r["resolveComponent"])("router-view"),i=Object(r["resolveComponent"])("Loading");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(u),Object(r["createVNode"])(i,{active:c.isLoading,"onUpdate:active":n[1]||(n[1]=function(e){return c.isLoading=e}),"is-full-page":c.fullPage,loader:"bars",color:"#ffbbb9"},null,8,["active","is-full-page"])],64)}var f=t("97e4"),p={components:{Loading:c.a},data:function(){return{isLoading:!1,fullPage:!0}},methods:{handleLoading:function(e){this.isLoading=e}},created:function(){var e=this;f["a"].on("v-loading",(function(n){var t=n.isLoading;return e.handleLoading(t)}))}};t("29f4");p.render=l;var s=p,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),h=[{path:"/",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-58184344"),t.e("chunk-372e12cc"),t.e("chunk-58b1e690")]).then(t.bind(null,"a68d"))}},{path:"cart",component:function(){return Promise.all([t.e("chunk-58184344"),t.e("chunk-17518b6a")]).then(t.bind(null,"7b6e"))}}]},{path:"/login",component:function(){return Promise.all([t.e("chunk-58184344"),t.e("chunk-2d2086b7")]).then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return Promise.all([t.e("chunk-58184344"),t.e("chunk-2d0b9d35")]).then(t.bind(null,"3530"))},children:[{path:"products",component:function(){return Promise.all([t.e("chunk-58184344"),t.e("chunk-372e12cc"),t.e("chunk-45436da4")]).then(t.bind(null,"dc0d"))}},{path:"orders",component:function(){return t.e("chunk-2d0aed4a").then(t.bind(null,"0c78"))}}]},{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}}],m=Object(b["a"])({history:Object(b["b"])(),routes:h}),v=m;Object.keys(u["a"]).forEach((function(e){Object(a["e"])(e,u["a"][e])})),Object(a["d"])({generateMessage:Object(i["a"])({zh_TW:d}),validateOnInput:!0}),Object(i["b"])("zh_TW"),Object(r["createApp"])(s).use(c.a).use(v).component("v-form",a["c"]).component("v-field",a["b"]).component("error-message",a["a"]).mount("#app")},"972b":function(e,n,t){},"97e4":function(e,n,t){"use strict";var r=t("14b7");n["a"]=Object(r["a"])()}});
//# sourceMappingURL=app.2d07de92.js.map