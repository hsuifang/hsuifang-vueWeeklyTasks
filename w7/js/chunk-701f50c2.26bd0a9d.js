(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-701f50c2"],{"057f":function(e,t,r){var c=r("fc6a"),o=r("241c").f,n={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return o(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==n.call(e)?i(e):o(c(e))}},"4de4":function(e,t,r){"use strict";var c=r("23e7"),o=r("b727").filter,n=r("1dde"),a=n("filter");c({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var c=r("1d80"),o=r("5899"),n="["+o+"]",a=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),s=function(e){return function(t){var r=String(c(t));return 1&e&&(r=r.replace(a,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},"6a2e":function(e,t,r){"use strict";r.r(t);r("a9e3");var c=r("7a23"),o={class:"container pt-5 pb-3 mb-3"},n={class:"row"},a={class:"card mb-2 shadow-sm"},i={class:"card-img-top"},s={class:"card-body"},l={class:"h6 card-title mb-1"},d={class:"text-secondary"},u={class:"d-flex justify-content-end"},b={key:0,class:"position-absolute top-50 start-100",style:{transform:"translateX(-20px)"}},p=Object(c["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(c["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),f={key:0,class:"position-absolute top-50 start-100",style:{transform:"translateX(-10px)"}},g=Object(c["createVNode"])("div",{class:"spinner-border spinner-border-sm",role:"status"},[Object(c["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),O={key:1};function m(e,t,r,m,j,v){var y=Object(c["resolveComponent"])("UserProductModal");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])("div",n,[j.products.length>0?(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(j.products,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-12 col-md-5 col-lg-4",key:e.id},[Object(c["createVNode"])("div",a,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("img",{src:e.imageUrl,alt:"主要圖片"},null,8,["src"])]),Object(c["createVNode"])("div",s,[Object(c["createVNode"])("h2",l,Object(c["toDisplayString"])(e.title),1),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(Number(e.rate||0),(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("i",{class:"fa fa-star text-warning mb-2",key:e})})),128)),Object(c["createVNode"])("h5",d,"NT$"+Object(c["toDisplayString"])(e.price),1),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("div",null,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary btn-sm rounded-pill me-2 px-3",onClick:function(t){return v.showProductDetail(e)},disabled:"detail"===j.loadingItem.pos}," 查看 ",8,["onClick","disabled"]),"detail"===j.loadingItem.pos&&j.loadingItem.id===e.id?(Object(c["openBlock"])(),Object(c["createBlock"])("div",b,[p])):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-secondary btn-sm rounded-pill px-3 text-white",onClick:function(t){return v.addToCart({productId:e.id,qty:1})},disabled:"list"===j.loadingItem.pos&&j.loadingItem.id===e.id}," 加入購物車 ",8,["onClick","disabled"]),"list"===j.loadingItem.pos&&j.loadingItem.id===e.id?(Object(c["openBlock"])(),Object(c["createBlock"])("div",f,[g])):Object(c["createCommentVNode"])("",!0)])])])])])})),128)):(Object(c["openBlock"])(),Object(c["createBlock"])("p",O,"目前無資料"))]),Object(c["createVNode"])(y,{ref:"productModal","item-detail":j.targetProduct,onAddCart:v.addToCart},null,8,["item-detail","onAddCart"])])}var j=r("1da1"),v=(r("96cf"),r("365c")),y=(r("a4d3"),r("e01a"),{ref:"modal",class:"modal fade show",tabindex:"-1",role:"dialog","aria-labelledby":"userProductModal","aria-hidden":"true"}),h={class:"modal-dialog modal-lg"},N={class:"modal-content"},k=Object(c["createVNode"])("div",{class:"modal-header"},[Object(c["createVNode"])("h5",{class:"modal-title"},"產品"),Object(c["createVNode"])("button",{type:"button",class:"btn-close my-1","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},w={class:"container-fluid"},S={class:"row"},I={class:"col-5"},x={class:"gallerySlides"},D={key:1,class:"gallerySlides__main"},B=Object(c["createVNode"])("p",{class:"gallerySlides__caption"},"目前無圖片",-1),C={class:"gallerySlides__wrap"},_={class:"col-7"},P={class:"h3 text-secondary"},E={class:"d-flex align-items-end"},L={class:"h4 me-1 mb-0"},$={class:"text-muted"},A={class:"text-secondary mb-0"},T={class:"fw-bold ps-1 mb-2"},F={class:"input-group mb-2"},M={class:"input-group mb-4 border rounded-pill p-2"},R={class:"input-group-append border-0"},U=Object(c["createVNode"])("i",{class:"fa fa-cart-plus me-2"},null,-1),q=Object(c["createTextVNode"])("加入購物車 "),Q=Object(c["createVNode"])("hr",null,null,-1),J={class:"list-unstyled pb-3"},X=Object(c["createVNode"])("h6",null,"內容",-1),G=Object(c["createVNode"])("h6",null,"描述",-1);function H(e,t,r,o,n,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",y,[Object(c["createVNode"])("div",h,[Object(c["createVNode"])("div",N,[k,Object(c["createVNode"])("div",V,[Object(c["createVNode"])("div",w,[Object(c["createVNode"])("div",S,[Object(c["createVNode"])("div",I,[Object(c["createVNode"])("div",x,[n.productDetail.imageUrl?(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:0,class:"gallerySlides__main",style:{backgroundImage:"url(".concat(n.productDetail.imageUrl,")")}},null,4)):(Object(c["openBlock"])(),Object(c["createBlock"])("div",D,[B])),Object(c["createVNode"])("ul",C,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.resetImages,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:t,class:"gallerySlides__slideImg",style:{backgroundImage:"url(".concat(e,")")}},null,4)})),128))])])]),Object(c["createVNode"])("div",_,[Object(c["createVNode"])("h1",P,Object(c["toDisplayString"])(n.productDetail.title),1),Object(c["createVNode"])("div",E,[Object(c["createVNode"])("h2",L,"$ "+Object(c["toDisplayString"])(n.productDetail.price),1),Object(c["createVNode"])("p",$,[Object(c["createVNode"])("del",null,"$ "+Object(c["toDisplayString"])(n.productDetail.origin_price),1)])]),Object(c["createVNode"])("p",A,"類別:"+Object(c["toDisplayString"])(n.productDetail.category),1),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(Number(n.productDetail.rate||0),(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("i",{class:"fa fa-star mb-4 text-warning",key:e})})),128)),Object(c["createVNode"])("p",T," 剩下 "+Object(c["toDisplayString"])(n.productDetail.num)+" "+Object(c["toDisplayString"])(n.productDetail.unit),1),Object(c["createVNode"])("div",F,[Object(c["createVNode"])("div",M,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",placeholder:"購買數量",min:"1","aria-describedby":"button-addon3",class:"form-control border-0","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.requestQty=e})},null,512),[[c["vModelText"],n.requestQty,void 0,{number:!0}]]),Object(c["createVNode"])("div",R,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-primary px-4 rounded-pill",onClick:t[2]||(t[2]=function(){return a.addCart&&a.addCart.apply(a,arguments)})},[U,q])])])]),Q,Object(c["createVNode"])("ul",J,[Object(c["createVNode"])("li",null,[X,Object(c["createVNode"])("p",null,Object(c["toDisplayString"])(n.productDetail.content),1)]),Object(c["createVNode"])("li",null,[G,Object(c["createVNode"])("p",null,Object(c["toDisplayString"])(n.productDetail.description),1)])])])])])])])])],512)}r("4de4");var Y=r("e0ae"),W={props:{itemDetail:{type:Object}},mixins:[Y["a"]],data:function(){return{productDetail:{},requestQty:1}},computed:{resetImages:function(){var e=this.productDetail.imagesUrl;return e?this.productDetail.imagesUrl.filter((function(e){return Boolean(e)})):[]}},methods:{addCart:function(){this.$emit("addCart",{productId:this.productDetail.id,qty:this.requestQty}),this.closeModal()}},watch:{itemDetail:function(e){this.productDetail=e}}};W.render=H;var z=W,K={name:"product",components:{UserProductModal:z},data:function(){return{carts:[],products:[],pageInfo:{current_page:1,has_next:!1,has_pre:!1,total_pages:1},loadingItem:{pos:"",id:""},targetProduct:{}}},methods:{fetchProductList:function(){var e=arguments,t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var c,o,n,a,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return c=e.length>0&&void 0!==e[0]?e[0]:1,t.$vLoading(!0),r.prev=2,r.next=5,Object(v["o"])(c);case 5:o=r.sent,n=o.data,a=n.success,i=n.products,s=n.pagination,a?(t.products=i,t.pageInfo=s):t.$vHttpsNotice(o,"產品顯示"),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](2),t.$vErrorNotice();case 13:return r.prev=13,t.$vLoading(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[2,10,13,16]])})))()},addToCart:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var c,o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return c=e.productId,o=e.qty,t.toggleLoding({pos:"list",id:c}),r.prev=2,r.next=5,Object(v["a"])({id:c,qty:o});case 5:n=r.sent,t.$vHttpsNotice(n,"加入購物車"),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](2),t.$vErrorNotice();case 12:return r.prev=12,t.toggleLoding({pos:"",id:""}),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[2,9,12,15]])})))()},showProductDetail:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var c,o,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.toggleLoding({pos:"detail",id:e.id}),r.next=3,Object(v["r"])(e.id);case 3:c=r.sent,o=c.data,n=o.success,a=o.product,n?(t.targetProduct=a,t.$refs.productModal.openModal()):t.$vHttpsNotice(c,"查看產品"),t.toggleLoding({pos:"",id:""});case 7:case"end":return r.stop()}}),r)})))()},toggleLoding:function(e){var t=e.pos,r=e.id;this.loadingItem.pos=t,this.loadingItem.id=r}},created:function(){this.fetchProductList()}};K.render=m;t["default"]=K},7156:function(e,t,r){var c=r("861d"),o=r("d2bb");e.exports=function(e,t,r){var n,a;return o&&"function"==typeof(n=t.constructor)&&n!==r&&c(a=n.prototype)&&a!==r.prototype&&o(e,a),e}},"746f":function(e,t,r){var c=r("428f"),o=r("5135"),n=r("e538"),a=r("9bf2").f;e.exports=function(e){var t=c.Symbol||(c.Symbol={});o(t,e)||a(t,e,{value:n.f(e)})}},a4d3:function(e,t,r){"use strict";var c=r("23e7"),o=r("da84"),n=r("d066"),a=r("c430"),i=r("83ab"),s=r("4930"),l=r("fdbf"),d=r("d039"),u=r("5135"),b=r("e8b5"),p=r("861d"),f=r("825a"),g=r("7b0b"),O=r("fc6a"),m=r("c04e"),j=r("5c6c"),v=r("7c73"),y=r("df75"),h=r("241c"),N=r("057f"),k=r("7418"),V=r("06cf"),w=r("9bf2"),S=r("d1e7"),I=r("9112"),x=r("6eeb"),D=r("5692"),B=r("f772"),C=r("d012"),_=r("90e3"),P=r("b622"),E=r("e538"),L=r("746f"),$=r("d44e"),A=r("69f3"),T=r("b727").forEach,F=B("hidden"),M="Symbol",R="prototype",U=P("toPrimitive"),q=A.set,Q=A.getterFor(M),J=Object[R],X=o.Symbol,G=n("JSON","stringify"),H=V.f,Y=w.f,W=N.f,z=S.f,K=D("symbols"),Z=D("op-symbols"),ee=D("string-to-symbol-registry"),te=D("symbol-to-string-registry"),re=D("wks"),ce=o.QObject,oe=!ce||!ce[R]||!ce[R].findChild,ne=i&&d((function(){return 7!=v(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,t,r){var c=H(J,t);c&&delete J[t],Y(e,t,r),c&&e!==J&&Y(J,t,c)}:Y,ae=function(e,t){var r=K[e]=v(X[R]);return q(r,{type:M,tag:e,description:t}),i||(r.description=t),r},ie=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof X},se=function(e,t,r){e===J&&se(Z,t,r),f(e);var c=m(t,!0);return f(r),u(K,c)?(r.enumerable?(u(e,F)&&e[F][c]&&(e[F][c]=!1),r=v(r,{enumerable:j(0,!1)})):(u(e,F)||Y(e,F,j(1,{})),e[F][c]=!0),ne(e,c,r)):Y(e,c,r)},le=function(e,t){f(e);var r=O(t),c=y(r).concat(fe(r));return T(c,(function(t){i&&!ue.call(r,t)||se(e,t,r[t])})),e},de=function(e,t){return void 0===t?v(e):le(v(e),t)},ue=function(e){var t=m(e,!0),r=z.call(this,t);return!(this===J&&u(K,t)&&!u(Z,t))&&(!(r||!u(this,t)||!u(K,t)||u(this,F)&&this[F][t])||r)},be=function(e,t){var r=O(e),c=m(t,!0);if(r!==J||!u(K,c)||u(Z,c)){var o=H(r,c);return!o||!u(K,c)||u(r,F)&&r[F][c]||(o.enumerable=!0),o}},pe=function(e){var t=W(O(e)),r=[];return T(t,(function(e){u(K,e)||u(C,e)||r.push(e)})),r},fe=function(e){var t=e===J,r=W(t?Z:O(e)),c=[];return T(r,(function(e){!u(K,e)||t&&!u(J,e)||c.push(K[e])})),c};if(s||(X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=_(e),r=function(e){this===J&&r.call(Z,e),u(this,F)&&u(this[F],t)&&(this[F][t]=!1),ne(this,t,j(1,e))};return i&&oe&&ne(J,t,{configurable:!0,set:r}),ae(t,e)},x(X[R],"toString",(function(){return Q(this).tag})),x(X,"withoutSetter",(function(e){return ae(_(e),e)})),S.f=ue,w.f=se,V.f=be,h.f=N.f=pe,k.f=fe,E.f=function(e){return ae(P(e),e)},i&&(Y(X[R],"description",{configurable:!0,get:function(){return Q(this).description}}),a||x(J,"propertyIsEnumerable",ue,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:X}),T(y(re),(function(e){L(e)})),c({target:M,stat:!0,forced:!s},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var r=X(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),c({target:"Object",stat:!0,forced:!s,sham:!i},{create:de,defineProperty:se,defineProperties:le,getOwnPropertyDescriptor:be}),c({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pe,getOwnPropertySymbols:fe}),c({target:"Object",stat:!0,forced:d((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(g(e))}}),G){var ge=!s||d((function(){var e=X();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));c({target:"JSON",stat:!0,forced:ge},{stringify:function(e,t,r){var c,o=[e],n=1;while(arguments.length>n)o.push(arguments[n++]);if(c=t,(p(t)||void 0!==e)&&!ie(e))return b(t)||(t=function(e,t){if("function"==typeof c&&(t=c.call(this,e,t)),!ie(t))return t}),o[1]=t,G.apply(null,o)}})}X[R][U]||I(X[R],U,X[R].valueOf),$(X,M),C[F]=!0},a9e3:function(e,t,r){"use strict";var c=r("83ab"),o=r("da84"),n=r("94ca"),a=r("6eeb"),i=r("5135"),s=r("c6b6"),l=r("7156"),d=r("c04e"),u=r("d039"),b=r("7c73"),p=r("241c").f,f=r("06cf").f,g=r("9bf2").f,O=r("58a8").trim,m="Number",j=o[m],v=j.prototype,y=s(b(v))==m,h=function(e){var t,r,c,o,n,a,i,s,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=O(l),t=l.charCodeAt(0),43===t||45===t){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:c=2,o=49;break;case 79:case 111:c=8,o=55;break;default:return+l}for(n=l.slice(2),a=n.length,i=0;i<a;i++)if(s=n.charCodeAt(i),s<48||s>o)return NaN;return parseInt(n,c)}return+l};if(n(m,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var N,k=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof k&&(y?u((function(){v.valueOf.call(r)})):s(r)!=m)?l(new j(h(t)),r,k):h(t)},V=c?p(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;V.length>w;w++)i(j,N=V[w])&&!i(k,N)&&g(k,N,f(j,N));k.prototype=v,v.constructor=k,a(o,m,k)}},e01a:function(e,t,r){"use strict";var c=r("23e7"),o=r("83ab"),n=r("da84"),a=r("5135"),i=r("861d"),s=r("9bf2").f,l=r("e893"),d=n.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof b?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};l(b,d);var p=b.prototype=d.prototype;p.constructor=b;var f=p.toString,g="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=f.call(e);if(a(u,e))return"";var r=g?t.slice(7,-1):t.replace(O,"$1");return""===r?void 0:r}}),c({global:!0,forced:!0},{Symbol:b})}},e538:function(e,t,r){var c=r("b622");t.f=c}}]);
//# sourceMappingURL=chunk-701f50c2.26bd0a9d.js.map