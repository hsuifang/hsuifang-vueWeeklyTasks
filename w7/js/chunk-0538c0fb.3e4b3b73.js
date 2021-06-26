(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0538c0fb"],{"0c78":function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),n={class:"container pt-4 pb-4 pt-lg-7 pb-lg-7"},o={class:"card"},a={class:"card-body"},l=Object(r["createVNode"])("div",{class:"d-flex justify-content-md-between pr-3 mb-4"},[Object(r["createVNode"])("h2",{class:"h6 text-secondary"},"訂單清單")],-1),s={key:0,class:"text-end mb-2"},i={class:"table caption-top"},d=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{scope:"col"},"購買時間"),Object(r["createVNode"])("th",{scope:"col"},"姓名"),Object(r["createVNode"])("th",{scope:"col"},"購買款項"),Object(r["createVNode"])("th",{scope:"col"},"付款金額"),Object(r["createVNode"])("th",{scope:"col"},"是否付款"),Object(r["createVNode"])("th",{scope:"col"},"功能")])],-1),b={key:0},u=Object(r["createVNode"])("td",{class:"text-center text-muted",colspan:"5"},[Object(r["createVNode"])("img",{width:"100",src:"https://media.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif"})],-1),p={class:"list-unstyled"},O={class:"text-secondary"},j={class:"form-check form-switch"},f={key:0,class:"text-center text-muted"},m=Object(r["createVNode"])("td",{class:"text-center text-muted",colspan:"6"},"無商品",-1),g={class:"d-flex justify-content-md-between"},h=Object(r["createTextVNode"])(" 目前有 "),y=Object(r["createTextVNode"])(" 項訂單 ");function N(e,t,c,N,V,k){var v=Object(r["resolveComponent"])("Pagination"),x=Object(r["resolveComponent"])("OrderModal");return Object(r["openBlock"])(),Object(r["createBlock"])("div",n,[Object(r["createVNode"])("div",o,[Object(r["createVNode"])("div",a,[l,V.orders.length>0?(Object(r["openBlock"])(),Object(r["createBlock"])("div",s,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary rounded-pill px-3",onClick:t[1]||(t[1]=function(){return k.deleteAllOrders&&k.deleteAllOrders.apply(k,arguments)})}," 刪除全部 ")])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("table",i,[d,Object(r["createVNode"])("tbody",null,[V.isLoading?(Object(r["openBlock"])(),Object(r["createBlock"])("tr",b,[u])):(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:1},[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(V.orders,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:t.id},[Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.$filters.localeDateStr(t.create_at)),1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(t.user.name),1),Object(r["createVNode"])("td",null,[Object(r["createVNode"])("ul",p,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(t.products,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:t},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.product.title)+" ",1),Object(r["createVNode"])("span",O,"數量："+Object(r["toDisplayString"])(e.qty)+" "+Object(r["toDisplayString"])(e.product.unit),1)])})),128))])]),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.$filters.currency(t.total)),1),Object(r["createVNode"])("td",null,[Object(r["createVNode"])("div",j,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return k.toggleOrderItemStatus(t)}},null,40,["onUpdate:modelValue","onChange"]),[[r["vModelCheckbox"],t.is_paid]])])]),Object(r["createVNode"])("td",null,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-sm btn-primary me-1","data-action":"remove",onClick:function(e){return k.handleOrderItem(t)}}," 編輯 ",8,["onClick"]),Object(r["createVNode"])("button",{type:"button",class:"btn btn-sm btn-danger text-white","data-action":"remove",onClick:function(e){return k.deleteOrderItem({id:t.id,title:t.title})}}," 刪除 ",8,["onClick"])])])})),128)),0===V.orders.length?(Object(r["openBlock"])(),Object(r["createBlock"])("tr",f,[m])):Object(r["createCommentVNode"])("",!0)],64))])]),Object(r["createVNode"])("div",g,[Object(r["createVNode"])("p",null,[h,Object(r["createVNode"])("span",null,Object(r["toDisplayString"])(V.orders.length),1),y]),Object(r["createVNode"])(v,{pageInfo:V.pageInfo,onChangePage:k.changePage},null,8,["pageInfo","onChangePage"])])])]),Object(r["createVNode"])(x,{ref:"orderModal",orderInfo:V.currentItem,onUpdateOrder:k.submitOrderItem,onClearItem:t[2]||(t[2]=function(e){return V.currentItem={}})},null,8,["orderInfo","onUpdateOrder"])])}var V=c("1da1"),k=(c("c740"),c("96cf"),c("365c")),v=c("1799"),x={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","data-bs-backdrop":"static","aria-hidden":"true",ref:"modal"},w={class:"modal-dialog modal-xl",role:"document"},B={class:"modal-content border-0"},I={class:"modal-header"},D=Object(r["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(r["createVNode"])("span",null,"訂單細節")],-1),S={class:"modal-body px-5 py-4"},C={class:"row"},_={class:"col-lg-5 mb-5"},P=Object(r["createVNode"])("h3",{class:"fs-6 bg-light rounded-pill px-4 py-3 fw-bold text-secondary"},"用戶資料",-1),$={key:0,class:"list-unstyled px-4"},L={class:"d-flex justify-content-between py-3 border-bottom"},M=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"姓名",-1),R={class:"d-flex justify-content-between py-3 border-bottom"},E=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"Email",-1),F={class:"d-flex justify-content-between py-3 border-bottom"},A=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"電話",-1),U={class:"d-flex justify-content-between py-3 border-bottom"},q=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"地址",-1),T={class:"col-lg-7"},H=Object(r["createVNode"])("h3",{class:"fs-6 bg-light rounded-pill px-4 py-3 fw-bold text-secondary"},"訂單細節",-1),J={class:"list-unstyled px-4 mb-4"},X={class:"d-flex justify-content-between py-3 border-bottom"},Y=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"訂單編號",-1),z={class:"d-flex justify-content-between align-items-center py-3 border-bottom"},G=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"下單時間",-1),K={class:"d-flex justify-content-between py-3 border-bottom"},Q=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"付款時間",-1),W={key:0},Z={key:1},ee={class:"d-flex justify-content-between py-3 border-bottom"},te=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"付款狀態",-1),ce={key:0,class:"text-success"},re={key:1,class:"text-muted"},ne={class:"d-flex justify-content-between py-3 border-bottom"},oe=Object(r["createVNode"])("h4",{class:"fs-6 mb-0"},"總金額",-1),ae=Object(r["createVNode"])("h3",{class:"fs-6 bg-light rounded-pill px-4 py-3 mb-3 fw-bold text-secondary"}," 選購商品 ",-1),le={class:"list-unstyled px-4 mb-3"},se={class:"fs-6"},ie={class:"d-flex justify-content-end px-4"},de={class:"form-check"},be={class:"form-check-label",for:"flexCheckDefault"},ue={key:0},pe={key:1},Oe={class:"modal-footer"};function je(e,t,c,n,o,a){return Object(r["openBlock"])(),Object(r["createBlock"])("div",x,[Object(r["createVNode"])("div",w,[Object(r["createVNode"])("div",B,[Object(r["createVNode"])("div",I,[D,Object(r["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[1]||(t[1]=function(t){return e.$emit("clearItem")})})]),Object(r["createVNode"])("div",S,[Object(r["createVNode"])("div",C,[Object(r["createVNode"])("div",_,[P,o.tempOrder.user?(Object(r["openBlock"])(),Object(r["createBlock"])("ul",$,[Object(r["createVNode"])("li",L,[M,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(o.tempOrder.user.name),1)]),Object(r["createVNode"])("li",R,[E,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(o.tempOrder.user.email),1)]),Object(r["createVNode"])("li",F,[A,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(o.tempOrder.user.tel),1)]),Object(r["createVNode"])("li",U,[q,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(o.tempOrder.user.address),1)])])):Object(r["createCommentVNode"])("",!0)]),Object(r["createVNode"])("div",T,[H,Object(r["createVNode"])("ul",J,[Object(r["createVNode"])("li",X,[Y,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(o.tempOrder.id),1)]),Object(r["createVNode"])("li",z,[G,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(e.$filters.localeDateStr(o.tempOrder.create_at))+" "+Object(r["toDisplayString"])(e.$filters.localeTimeStr(o.tempOrder.create_at)),1)]),Object(r["createVNode"])("li",K,[Q,Object(r["createVNode"])("p",null,[o.tempOrder.paid_date?(Object(r["openBlock"])(),Object(r["createBlock"])("span",W,Object(r["toDisplayString"])(e.$filters.localeDateStrs(o.tempOrder.paid_date)),1)):(Object(r["openBlock"])(),Object(r["createBlock"])("span",Z,"-"))])]),Object(r["createVNode"])("li",ee,[te,Object(r["createVNode"])("p",null,[o.tempOrder.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("strong",ce,"已付款")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",re,"尚未付款"))])]),Object(r["createVNode"])("li",ne,[oe,Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(e.$filters.currency(o.tempOrder.total)),1)])]),ae,Object(r["createVNode"])("ul",le,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(o.tempOrder.products,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:"d-flex justify-content-between",key:t.id},[Object(r["createVNode"])("h3",se,Object(r["toDisplayString"])(t.product.title),1),Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(t.qty)+" / "+Object(r["toDisplayString"])(t.product.unit),1),Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))]),Object(r["createVNode"])("div",ie,[Object(r["createVNode"])("div",de,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.tempOrder.is_paid=e})},null,512),[[r["vModelCheckbox"],o.tempOrder.is_paid]]),Object(r["createVNode"])("label",be,[o.tempOrder.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("span",ue,"已付款")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",pe,"未付款"))])])])])])]),Object(r["createVNode"])("div",Oe,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(t){return e.$emit("updateOrder",o.tempOrder)})}," 修改付款狀態 ")])])])],512)}var fe=c("5530"),me=c("e0ae"),ge={props:{orderInfo:{type:Object,default:function(){return{}}}},mixins:[me["a"]],emits:["updateOrder","clearItem"],data:function(){return{tempOrder:{}}},watch:{orderInfo:function(){this.tempOrder=Object(fe["a"])({},this.orderInfo)}}};ge.render=je;var he=ge,ye={components:{Pagination:v["a"],OrderModal:he},data:function(){return{currentItem:{},orders:[],pageInfo:{current_page:1,has_next:!1,has_pre:!1,total_pages:1},isCreateItem:!0,isLoading:!1}},methods:{fetchOrders:function(){var e=arguments,t=this;return Object(V["a"])(regeneratorRuntime.mark((function c(){var r,n,o,a,l,s;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,c.prev=1,t.isLoading=!0,c.next=5,Object(k["q"])(r);case 5:n=c.sent,o=n.data,a=o.orders,l=o.pagination,s=o.success,s?(t.orders=a,t.pageInfo=l):t.$vHttpNotice(n,"取得訂單資訊"),c.next=13;break;case 10:c.prev=10,c.t0=c["catch"](1),t.$vErrorNotice();case 13:return c.prev=13,t.isLoading=!1,c.finish(13);case 16:case"end":return c.stop()}}),c,null,[[1,10,13,16]])})))()},toggleOrderItemStatus:function(e){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return t.isLoading=!0,t.currentItem=e,c.next=4,t.submitOrderItem(t.currentItem);case 4:t.isLoading=!1;case 5:case"end":return c.stop()}}),c)})))()},deleteOrderItem:function(e){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function c(){var r,n,o,a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(r=e.id,n=e.title,o=void 0===n?"":n,!window.confirm("你確定要刪除".concat(o,"嗎？"))){c.next=14;break}return t.isLoading=!0,c.prev=3,c.next=6,Object(k["g"])(r);case 6:a=c.sent,a.data.success&&t.fetchOrders(t.pageInfo.current_page),c.next=14;break;case 10:c.prev=10,c.t0=c["catch"](3),t.isLoading=!1,t.$vErrorNotice();case 14:case"end":return c.stop()}}),c,null,[[3,10]])})))()},deleteAllOrders:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){var c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vLoading(!0),t.prev=1,t.next=4,Object(k["h"])();case 4:c=t.sent,r=c.data.success,r?(e.carts=[],e.fetchOrders()):e.$vHttpsNotice(c,"刪除所有訂單"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.$vErrorNotice();case 12:return t.prev=12,e.$vLoading(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()},submitOrderItem:function(e){var t=this;return Object(V["a"])(regeneratorRuntime.mark((function c(){var r,n,o,a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,t.$vLoading(!0),r=e.id,c.next=5,Object(k["w"])({id:r,data:{data:e}});case 5:n=c.sent,o=n.data.success,o&&(t.$refs.orderModal.closeModal(),r?(a=t.orders.findIndex((function(e){return e.id===r})),-1!==a&&(t.orders[a]=e)):t.fetchOrders()),t.$vHttpsNotice(n,"修改訂單資訊"),c.next=14;break;case 11:c.prev=11,c.t0=c["catch"](0),t.$vErrorNotice();case 14:return c.prev=14,t.$vLoading(!1),c.finish(14);case 17:case"end":return c.stop()}}),c,null,[[0,11,14,17]])})))()},handleOrderItem:function(e){e&&(this.currentItem=e,this.isCreateItem=!1),this.$refs.orderModal.openModal()},updateOrderItem:function(e){this.submitOrderItem(e)},changePage:function(e){this.fetchOrders(e)},init:function(){this.fetchOrders()}},created:function(){this.init()}};ye.render=N;t["default"]=ye},1799:function(e,t,c){"use strict";var r=c("7a23"),n={class:"btn-group me-2",role:"group","aria-label":"First group"};function o(e,t,c,o,a,l){return Object(r["openBlock"])(),Object(r["createBlock"])("div",n,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-primary",disabled:!c.pageInfo.has_pre,onClick:t[1]||(t[1]=function(e){return l.changePage(c.pageInfo.current_page-1)})}," < ",8,["disabled"]),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.pageInfo.total_pages,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("button",{type:"button",class:["btn btn-outline-primary",{active:e===c.pageInfo.current_page}],key:"page".concat(e),onClick:function(t){return l.changePage(e)}},Object(r["toDisplayString"])(e),11,["onClick"])})),128)),Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-primary",disabled:!c.pageInfo.has_next,onClick:t[2]||(t[2]=function(e){return l.changePage(c.pageInfo.current_page+1)})}," > ",8,["disabled"])])}var a={name:"pagination",props:{pageInfo:{type:Object}},data:function(){return{}},methods:{changePage:function(e){e!==this.pageInfo.current_page&&this.$emit("changePage",e)}}};a.render=o;t["a"]=a},5530:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function n(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)}return c}function o(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?n(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},b0c0:function(e,t,c){var r=c("83ab"),n=c("9bf2").f,o=Function.prototype,a=o.toString,l=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&n(o,s,{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(e){return""}}})},c740:function(e,t,c){"use strict";var r=c("23e7"),n=c("b727").findIndex,o=c("44d2"),a="findIndex",l=!0;a in[]&&Array(1)[a]((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},dbb4:function(e,t,c){var r=c("23e7"),n=c("83ab"),o=c("56ef"),a=c("fc6a"),l=c("06cf"),s=c("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,c,r=a(e),n=l.f,i=o(r),d={},b=0;while(i.length>b)c=n(r,t=i[b++]),void 0!==c&&s(d,t,c);return d}})},e439:function(e,t,c){var r=c("23e7"),n=c("d039"),o=c("fc6a"),a=c("06cf").f,l=c("83ab"),s=n((function(){a(1)})),i=!l||s;r({target:"Object",stat:!0,forced:i,sham:!l},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})}}]);
//# sourceMappingURL=chunk-0538c0fb.3e4b3b73.js.map