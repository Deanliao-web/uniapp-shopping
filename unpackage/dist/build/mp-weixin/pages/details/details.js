(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details"],{"0feb":function(t,e,n){"use strict";var o=n("b2f9"),i=n.n(o);i.a},"1a99":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uniGoodsNav:function(){return n.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav").then(n.bind(null,"ac59"))}},i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"22ab":function(t,e,n){"use strict";n.r(e);var o=n("e5da"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"2caf":function(t,e,n){"use strict";(function(t){n("5895");o(n("66fd"));var e=o(n("678d"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"678d":function(t,e,n){"use strict";n.r(e);var o=n("1a99"),i=n("22ab");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0feb");var c,a=n("f0c5"),u=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=u.exports},b2f9:function(t,e,n){},e5da:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){n.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav").then(function(){return resolve(n("ac59"))}.bind(null,n)).catch(n.oe)},u={components:{uniGoodsNav:a},data:function(){return{item:{},price_up:"",price_low:"",options:[{icon:"headphones",text:"客服"},{icon:"shop",text:"店铺",info:0,infoBackgroundColor:"#007aff",infoColor:"red"},{icon:"cart",text:"购物车",info:0}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},onLoad:function(t){this.item=JSON.parse(t.item);var e=JSON.parse(t.item).price;this.price_up=e.split(".")[0],this.price_low=e.split(".")[1],console.log(this.item)},methods:r({onClick:function(e){"购物车"===e.content.text&&t.switchTab({url:"../cart/cart"}),t.showToast({title:"进入".concat(e.content.text),icon:"none"})},buttonClick:function(t){if("加入购物车"===t.content.text){var e={goods_id:this.item.id,goods_description:this.item.description,goods_price:this.item.price,goods_count:1,goods_img:this.item.img,goods_otherimgs:this.item.otherimgs,goods_state:!0,goods_page:this.item.page};this.addToCart(e)}},preview:function(e){t.previewImage({current:e,urls:this.item.otherimgs})}},(0,o.mapMutations)("mycart",["addToCart"])),computed:r(r({},(0,o.mapState)("mycart",["cart"])),(0,o.mapGetters)("mycart",["total"])),watch:{total:{handler:function(t){var e=this.options.find((function(t){return"购物车"===t.text}));e&&(e.info=t)},immediate:!0}}};e.default=u}).call(this,n("543d")["default"])}},[["2caf","common/runtime","common/vendor"]]]);