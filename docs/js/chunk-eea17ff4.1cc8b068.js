(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eea17ff4"],{"57a0":function(e,t,a){"use strict";var s=a("6c08"),c=a.n(s);c.a},"6c08":function(e,t,a){},b41f:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fragment",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[e._v("Привет")])])]),a("div",{staticClass:"row py-3"},[a("div",{staticClass:"col-12"},[a("p",[e._v("Добро пожаловать на "+e._s(e.day)+" тренировачный день.")]),null!==e.last?a("p",[e._v("Ваш последний результат - решено "+e._s(null!==e.last&&e.last.correctly)+" из "+e._s(null!==e.last&&e.last.solved))]):e._e(),null!==e.accurancy?a("p",[e._v("Общая точность "+e._s(e.accurancy)+"%")]):e._e()])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h3",[e._v("Настройки")])]),a("div",{staticClass:"form-group col-12"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],attrs:{type:"range",min:"1",max:"15"},domProps:{value:e.time},on:{__r:function(t){e.time=t.target.value}}}),e._v(" Длительность "+e._s(e.time)+" минут ")])]),a("div",{staticClass:"form-group col-12"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{type:"range",min:"1",max:"10"},domProps:{value:e.level},on:{__r:function(t){e.level=t.target.value}}}),e._v(" Сложность "+e._s(e.level)+" ")])]),a("div",{staticClass:"form-group col-12"},e._l(e.OPERATION,(function(t,s){return a("label",{key:s},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.types,expression:"types"}],attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.types)?e._i(e.types,t)>-1:e.types},on:{change:function(a){var s=e.types,c=a.target,l=!!c.checked;if(Array.isArray(s)){var n=t,r=e._i(s,n);c.checked?r<0&&(e.types=s.concat([n])):r>-1&&(e.types=s.slice(0,r).concat(s.slice(r+1)))}else e.types=l}}}),e._v(" "+e._s(t.text)+" ")])})),0)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-right"},[a("router-link",{staticClass:"btn btn-light shadow px-3",attrs:{to:{name:"game"}}},[e._v("Играть")])],1)])])},c=[],l=a("750b"),n=a("dca2"),r=a("a4de"),i=a("6bfe"),o={name:"SettingsPage",setup:function(){var e=Object(n["a"])(),t=e.getters,a=e.commit,s=t.day,c=Object(l["g"])(t.accurancy),o=Object(l["g"])(t.last),u=Object(l["a"])({get:function(){return t.time},set:function(e){return a(r["a"].SET_TIME,e)}}),v=Object(l["a"])({get:function(){return t.level},set:function(e){return a(r["a"].SET_LEVEL,e)}}),p=Object(l["a"])({get:function(){return t.types},set:function(e){return a(r["a"].SET_TYPES,e)}});return{day:s,accurancy:c,last:o,time:u,level:v,types:p,OPERATION:i["a"]}}},u=o,v=u,p=(a("57a0"),a("2877")),d=Object(p["a"])(v,s,c,!1,null,"4e567510",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-eea17ff4.1cc8b068.js.map