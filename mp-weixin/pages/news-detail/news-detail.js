(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"10f2":function(t,n,e){},"2ccb":function(t,n,e){"use strict";e.r(n);var r=e("dc8a"),u=e("71b6");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("f304");var a,c=e("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"9341864e",null,!1,r["a"],a);n["default"]=o.exports},"3c87":function(t,n,e){"use strict";(function(t){e("16c1"),e("921b");r(e("66fd"));var n=r(e("2ccb"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"71b6":function(t,n,e){"use strict";e.r(n);var r=e("d4d9"),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a},d4d9:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,u,i,a){try{var c=t[i](a),o=c.value}catch(f){return void e(f)}c.done?n(o):Promise.resolve(o).then(r,u)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var a=t.apply(n,e);function c(t){i(a,r,u,c,o,"next",t)}function o(t){i(a,r,u,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{detail:{},id:""}},onLoad:function(){var t=a(r.default.mark((function t(n){var e;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.id=n.id,t.next=3,this.$api.info("news",n.id);case 3:e=t.sent,this.detail=e.data,this.detail.content=this.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}()};n.default=c},dc8a:function(t,n,e){"use strict";var r,u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},f304:function(t,n,e){"use strict";var r=e("10f2"),u=e.n(r);u.a}},[["3c87","common/runtime","common/vendor"]]]);