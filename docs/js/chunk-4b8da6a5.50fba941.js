(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b8da6a5"],{"0ccb":function(t,e,r){var n=r("50c4"),i=r("1148"),a=r("1d80"),c=Math.ceil,o=function(t){return function(e,r,o){var u,s,f=String(a(e)),l=f.length,d=void 0===o?" ":String(o),v=n(r);return v<=l||""==d?f:(u=v-l,s=i.call(d,c(u/d.length)),s.length>u&&(s=s.slice(0,u)),t?f+s:s+f)}};t.exports={start:o(!1),end:o(!0)}},1148:function(t,e,r){"use strict";var n=r("a691"),i=r("1d80");t.exports="".repeat||function(t){var e=String(i(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"4d90":function(t,e,r){"use strict";var n=r("23e7"),i=r("0ccb").start,a=r("9a0c");n({target:"String",proto:!0,forced:a},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"84ac":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"timer"},[t._v(t._s(t.formatedTime))])},i=[],a=(r("99af"),r("d3b7"),r("25f0"),r("4d90"),r("750b")),c=function(t,e,r){var n=Object(a["g"])(60*t),i=Object(a["a"])((function(){var t=Math.floor(n.value/60),e=(n.value%60).toString().padStart(2,"0");return"".concat(t,":").concat(e)})),c=setInterval((function(){if(e.value&&(n.value=n.value-1,0===n.value))return r("timeover"),o()}),1e3),o=function(){window.console.log("clear timer"),clearInterval(c)};return{formatedTime:i,clearTimer:o}},o=c,u={name:"Timer",props:["time","isTick"],setup:function(t,e){var r=t.time,n=t.isTick,i=e.emit,c=o(r,n,i),u=c.formatedTime,s=c.clearTimer;return n.clearTimer=s,Object(a["d"])(s),{formatedTime:u}}},s=u,f=s,l=(r("e7be"),r("2877")),d=Object(l["a"])(f,n,i,!1,null,"58b6e6d0",null);e["default"]=d.exports},"9a0c":function(t,e,r){var n=r("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},"9c89":function(t,e,r){},e7be:function(t,e,r){"use strict";var n=r("9c89"),i=r.n(n);i.a}}]);
//# sourceMappingURL=chunk-4b8da6a5.50fba941.js.map