(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{2098:function(e,t,n){},"6d7b":function(e,t,n){"use strict";n.r(t);var r=n("7785"),o=n("887b");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("7b43");var c,a=n("f0c5"),i=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=i.exports},7785:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"7b43":function(e,t,n){"use strict";var r=n("2098"),o=n.n(r);o.a},"887b":function(e,t,n){"use strict";n.r(t);var r=n("b869"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=o.a},b869:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("bd2f")),o=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={mixins:[r.default],data:function(){return{order:[]}},onLoad:function(){var e=this;wx.cloud.init({env:"web2010dean-6gzr9t1a190f533d"});var t=wx.cloud.database();t.collection("weixin-order").get().then((function(t){e.order=t.data,console.log(t.data)}))},computed:a({},(0,o.mapState)("myuser",["token"]))};t.default=f},d5e5:function(e,t,n){"use strict";(function(e){n("5895");r(n("66fd"));var t=r(n("6d7b"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["d5e5","common/runtime","common/vendor"]]]);