(function(e){function t(t){for(var r,a,u=t[0],l=t[1],i=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e504f":"7eea01d8","chunk-eea17ff4":"1cc8b068","chunk-47325bde":"0f6a2e4d","chunk-4b8da6a5":"50fba941","chunk-7e1289fa":"1e9a53cd","chunk-e0b65a3c":"6266c23e"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-eea17ff4":1,"chunk-47325bde":1,"chunk-4b8da6a5":1,"chunk-7e1289fa":1,"chunk-e0b65a3c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0e504f":"31d6cfe0","chunk-eea17ff4":"7dd9265f","chunk-47325bde":"778be20c","chunk-4b8da6a5":"6bcd91a8","chunk-7e1289fa":"d21cc82a","chunk-e0b65a3c":"183618e2"}[e]+".css",o=l.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],s=i.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1009:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("750b"),o=n("3f08"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container py-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-8 col-lg-6 col-xl-5 mx-auto"},[n("div",{staticClass:"card shadow"},[n("div",{staticClass:"card-body pb-4"},[n("router-view")],1)])])])])])},u=[],l=n("dca2"),i={name:"App",setup:function(e,t){var n=t.root;Object(l["b"])(n.$store)}},s=i,f=s,d=(n("a447"),n("2877")),p=Object(d["a"])(f,c,u,!1,null,"31007a9c",null),v=p.exports,b=(n("d3b7"),n("8c4f"));r["a"].use(b["a"]);var h,m,g=new b["a"]({mode:"history",routes:[{path:"/",component:function(){return n.e("chunk-eea17ff4").then(n.bind(null,"b41f"))},name:"settings"},{path:"/game",component:function(){return n.e("chunk-2d0e504f").then(n.bind(null,"9365"))},name:"game"}]}),y=g,S=n("2f62"),E=n("ade3"),T=n("a4de"),_=n("6bfe"),k={time:7,level:5,types:[_["a"].ADD,_["a"].SUB]},L=(h={},Object(E["a"])(h,T["a"].SET_TIME,(function(e,t){return e.time=t})),Object(E["a"])(h,T["a"].SET_LEVEL,(function(e,t){return e.level=t})),Object(E["a"])(h,T["a"].SET_TYPES,(function(e,t){return e.types=t})),h),w={time:function(e){var t=e.time;return+t},level:function(e){var t=e.level;return+t},types:function(e){var t=e.types;return t}},O={state:k,mutations:L,getters:w},j=(n("99af"),n("d81d"),n("ac1f"),n("1276"),n("3835")),A=function(){var e=(new Date).toLocaleDateString(),t=localStorage.getItem("lastInDay")||e;localStorage.setItem("lastInDay",e);var n=localStorage.getItem("day")||1;return e!==t&&(n+=1),localStorage.setItem("day",n),n},I={day:A(),last:localStorage.getItem("last"),all:localStorage.getItem("all")},x={SET_LAST:"SET_LAST",SET_ALL:"SET_ALL"},P=(m={},Object(E["a"])(m,x.SET_LAST,(function(e,t){return e.last=t})),Object(E["a"])(m,x.SET_ALL,(function(e,t){return e.all=t})),m),C={saveResult:function(e,t){var n=e.dispatch,r=e.state,a=t.solved,o=t.correctly,c=(r.all||"0/0").split("/").map((function(e){return+e})),u=Object(j["a"])(c,2),l=u[0],i=u[1];n("setAll","".concat(l+o,"/").concat(i+a)),n("setLast","".concat(o,"/").concat(a))},setAll:function(e,t){var n=e.commit;n(x.SET_ALL,t),localStorage.setItem("all",t)},setLast:function(e,t){var n=e.commit;n(x.SET_LAST,t),localStorage.setItem("last",t)}},D={day:function(e){var t=e.day;return t},last:function(e){var t=e.last;if(null===t)return null;var n=t.split("/"),r=Object(j["a"])(n,2),a=r[0],o=r[1];return{correctly:a,solved:o}},accurancy:function(e){var t=e.all;if(null===t)return null;var n=t.split("/"),r=Object(j["a"])(n,2),a=r[0],o=r[1];return Math.floor(a/o*100)}},M={state:I,mutations:P,actions:C,getters:D};r["a"].use(S["b"]);var N=new S["a"]({modules:{settings:O,results:M}}),B=N;r["a"].config.productionTip=!1,r["a"].use(a["b"]),r["a"].use(o["a"].Plugin),new r["a"]({router:y,store:B,render:function(e){return e(v)}}).$mount("#app")},"6bfe":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={ADD:{symbol:"+",text:"Суммирование"},SUB:{symbol:"-",text:"Разность"},MUL:{symbol:"*",text:"Умножение"},DIV:{symbol:"/",text:"Деление"}}},a447:function(e,t,n){"use strict";var r=n("1009"),a=n.n(r);a.a},a4de:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={SET_TIME:"SET_TIME",SET_LEVEL:"SET_LEVEL",SET_TYPES:"SET_TYPES"}},dca2:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));n("a4d3"),n("e01a"),n("d3b7");var r=n("750b"),a=Symbol(),o=function(e){return Object(r["e"])(a,e)},c=function(){var e=Object(r["c"])(a);if(!e)throw new Error("No store provided!");return e};t["a"]=c}});
//# sourceMappingURL=app.d8968148.js.map