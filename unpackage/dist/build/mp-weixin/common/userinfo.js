(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/userinfo"],{"0e30":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"a5d2"))}},o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},1250:function(t,e,n){},"5ee8":function(t,e,n){"use strict";var r=n("1250"),o=n.n(r);o.a},6913:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),o=n("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return l(t)||s(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done);r=!0)if(n.push(i.value),e&&n.length===e)break}catch(c){o=!0,u=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw u}}return n}}function l(t){if(Array.isArray(t))return t}function d(t,e,n,r,o,u,i){try{var a=t[u](i),c=a.value}catch(f){return void n(f)}a.done?e(c):Promise.resolve(c).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function i(t){d(u,r,o,i,a,"next",t)}function a(t){d(u,r,o,i,a,"throw",t)}i(void 0)}))}}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={props:["order"],computed:v({},(0,o.mapState)("myuser",["userinfo"])),data:function(){return{name:"",orders:[]}},onLoad:function(){},methods:v(v({},(0,o.mapMutations)("myuser",["updateUserInfo","updateToken","updateAddress"])),{},{userorder:function(t){this.name=t.target.dataset.name,this.orders=this.order},logout:function(){var e=this;return p(r.default.mark((function n(){var o,u,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.showModal({title:"提示",content:"确认退出登录吗？"}).catch((function(t){return t}));case 2:o=n.sent,u=i(o,2),u[0],a=u[1],a&&a.confirm&&(e.updateUserInfo({}),e.updateToken(""),e.updateAddress({}));case 7:case"end":return n.stop()}}),n)})))()}})};e.default=y}).call(this,n("543d")["default"])},8762:function(t,e,n){"use strict";n.r(e);var r=n("0e30"),o=n("ddfb");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("5ee8");var i,a=n("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},ddfb:function(t,e,n){"use strict";n.r(e);var r=n("6913"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'common/userinfo-create-component',
    {
        'common/userinfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8762"))
        })
    },
    [['common/userinfo-create-component']]
]);
