(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),o={class:"container min-vh-100"},n={class:"row justify-content-center"},c={class:"col-8"},s={class:"card top-50 p-3"},i={class:"card-body"},d=Object(a["createVNode"])("h3",{class:"text-center"},"登入",-1),l={class:"mb-3"},u=Object(a["createVNode"])("label",{for:"js-loginEmail",class:"form-label"},"帳號",-1),b={class:"mb-3"},p=Object(a["createVNode"])("label",{for:"js-loginPassword",class:"form-label"},"密碼",-1),m=Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary text-white m-auto d-block"},"送出",-1);function v(e,t,r,v,j,w){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",c,[Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("form",{onSubmit:t[3]||(t[3]=Object(a["withModifiers"])((function(){return w.handleLogin&&w.handleLogin.apply(w,arguments)}),["prevent"])),id:"js-loginForm"},[d,Object(a["createVNode"])("div",l,[u,Object(a["withDirectives"])(Object(a["createVNode"])("input",{id:"js-loginEmail",type:"email",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return j.login.username=e}),"aria-describedby":"emailHelp",required:""},null,512),[[a["vModelText"],j.login.username,void 0,{trim:!0}]])]),Object(a["createVNode"])("div",b,[p,Object(a["withDirectives"])(Object(a["createVNode"])("input",{id:"js-loginPassword",type:"password",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return j.login.password=e}),required:""},null,512),[[a["vModelText"],j.login.password,void 0,{trim:!0}]])]),m],32)])])])])])}var j=r("1da1"),w=(r("96cf"),r("3a51")),f=r("365c"),O={data:function(){return{login:{username:"",password:""}}},methods:{handleLogin:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,a,o,n,c,s,i,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vLoading(!0),t.prev=1,r=e.login,a=r.username,o=r.password,n={username:a,password:o},t.next=6,Object(f["t"])(n);case 6:c=t.sent,s=c.data,i=s.success,d=s.token,i?(w["a"].saveToken(d),e.$router.push("/admin/products")):e.$vHttpsNotice(c,"登入"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.$vErrorNotice();case 14:return t.prev=14,e.$vLoading(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))()}}};O.render=v;t["default"]=O}}]);
//# sourceMappingURL=chunk-2d2086b7.19e8815f.js.map