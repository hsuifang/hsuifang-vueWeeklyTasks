(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d35"],{3530:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"container py-5"},o={class:"nav justify-content-center align-items-center"},r={class:"nav-item"},i=Object(a["createTextVNode"])("回到前台"),s={class:"nav-item"},u=Object(a["createTextVNode"])("後台產品列表"),d={class:"nav-item"},l=Object(a["createTextVNode"])("後台訂單"),b={class:"nav-item"};function v(e,t,n,v,h,j){var O=Object(a["resolveComponent"])("router-link"),p=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])("ul",o,[Object(a["createVNode"])("li",r,[Object(a["createVNode"])(O,{class:"nav-link",to:"/"},{default:Object(a["withCtx"])((function(){return[i]})),_:1})]),Object(a["createVNode"])("li",s,[Object(a["createVNode"])(O,{class:"nav-link",to:"/admin/products"},{default:Object(a["withCtx"])((function(){return[u]})),_:1})]),Object(a["createVNode"])("li",d,[Object(a["createVNode"])(O,{class:"nav-link",to:"/admin/orders"},{default:Object(a["withCtx"])((function(){return[l]})),_:1})]),Object(a["createVNode"])("li",b,[Object(a["createVNode"])("a",{href:"#",class:"nav-link",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(){return j.handleLogout&&j.handleLogout.apply(j,arguments)}),["prevent"]))},"登出")])]),h.isAuthenticated?(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:0})):Object(a["createCommentVNode"])("",!0)])}var h=n("1da1"),j=(n("96cf"),n("365c")),O=n("3a51"),p=n("97e4"),m={name:"Dashboard",data:function(){return{isAuthenticated:!1}},methods:{checkLogin:function(){var e=this;p["a"].emit("v-loading",{isLoading:!0});var t=O["a"].getToken();t?Object(j["b"])(t).then((function(t){var n=t.data.success;n?(e.isAuthenticated=!0,e.$router.push("/admin/products"),p["a"].emit("v-loading",{isLoading:!1})):e.$router.push("/login")})):this.$router.push("/login"),p["a"].emit("v-loading",{isLoading:!1})},handleLogout:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return p["a"].emit("v-loading",{isLoading:!0}),t.prev=1,t.next=4,Object(j["l"])();case 4:n=t.sent,n.data.success&&(O["a"].removeToken(),e.isAuthenticated=!1,e.$router.push("/login")),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.dir(t.t0);case 11:return t.prev=11,p["a"].emit("v-loading",{isLoading:!1}),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}},created:function(){this.checkLogin()}};m.render=v;t["default"]=m}}]);
//# sourceMappingURL=chunk-2d0b9d35.7b9cb177.js.map