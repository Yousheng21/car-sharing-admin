(this["webpackJsonpcar-sharing-admin"]=this["webpackJsonpcar-sharing-admin"]||[]).push([[0],{100:function(e,t,r){},101:function(e,t,r){},102:function(e,t,r){},103:function(e,t,r){},104:function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r(17),i=r.n(c),s=(r(47),r(48),r(69),r(10)),o=r(20),l=r(3);r(73);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=function(e){return a.createElement("svg",u({width:45,height:45,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 22.25C0 9.962 9.962 0 22.25 0S44.5 9.962 44.5 22.25c0 2.814-.523 5.507-1.476 7.985a9.25 9.25 0 10-12.789 12.789A22.194 22.194 0 0122.25 44.5C9.962 44.5 0 34.538 0 22.25zm30.235 20.774a9.25 9.25 0 0012.789-12.789 22.32 22.32 0 01-12.789 12.79z",fill:"#0EC261"})))},j=(r(74),r(1)),d=function(e){var t=e.value,r=e.setValue,n=e.type,a=e.placeholder,c=e.onBlur,i=e.onFocus,s=e.id,o=e.label,l=e.error;return Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:s,children:o}),Object(j.jsx)("input",{className:"form-control",onChange:r,onBlur:c,onFocus:i,value:t,type:n,placeholder:a,id:s,autoComplete:"off"}),Object(j.jsx)("span",{className:"error",children:null!==l&&void 0!==l?l:""})]})},b=r(5),p=r(12),v=function(e,t){var r=Object(a.useState)(e),n=Object(p.a)(r,2),c=n[0],i=n[1],s=Object(a.useState)(!1),o=Object(p.a)(s,2),l=o[0],u=o[1],h=function(e,t){var r=Object(a.useState)({value:!0,text:""}),n=Object(p.a)(r,2),c=n[0],i=n[1],s=Object(a.useState)({value:!1,text:""}),o=Object(p.a)(s,2),l=o[0],u=o[1],h=Object(a.useState)(!1),j=Object(p.a)(h,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){Object.keys(t).forEach((function(r){switch(r){case"isEmpty":i(e?{value:!1,text:""}:{value:!0,text:t[r].text});break;case"isEmail":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?u({value:!1,text:""}):u({value:!0,text:t[r].text})}}))}),[e]),Object(a.useEffect)((function(){c.value||l.value?b(!1):b(!0)}),[c.value,l.value]),{isEmpty:c,emailError:l,inputValid:d}}(c,t);return Object(b.a)({value:c,onChange:function(e){i(e.target.value)},onBlur:function(){u(!0)},onFocus:function(){u(!1)},isDirty:l,printError:function(e){var t=!1;return e.map((function(e){return!(!t&&h[e].value)||(t=!0,h[e].text)}))}},h)},f=r(16),O=r.n(f),m=r(24),x=r(25),g=r.n(x),y=r(42),E="https://api-factory.simbirsoft1.com",w="5e25c641099b810b946c5d5b",A="4cbcea96de",C=(g.a.create({baseURL:E,headers:{"X-Api-Factory-Application-Id":w,Authorization:"Bearer ".concat("52efbe08228671240494f537f2486bc109a637b4")}}),g.a.create({baseURL:E,method:"post",headers:{"X-Api-Factory-Application-Id":w,Authorization:"Basic ".concat(y.a.encode("".concat(A,":").concat(A)))}})),N="SET_USER",R="SET_ERROR_FORM",V={userId:"",isAuth:!1,isErrorAuth:{value:!1,text:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}};var z,B=function(e){return{type:N,id:e}},H=function(){return{type:R}},L=function(e,t){return function(){var r=Object(m.a)(O.a.mark((function r(n){var a;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C({url:"/api/auth/login",data:{username:e,password:t}});case 3:a=r.sent,n(B(a.data.user_id)),localStorage.setItem("token",a.data.refresh_token),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),n(H()),console.error(r.t0.response);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},S=(L(),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user.isErrorAuth})),r=v("",{isEmpty:{value:!0,text:"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"}}),n=v("",{isEmpty:{value:!0,text:"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"}});return Object(j.jsxs)("div",{className:"auth",children:[Object(j.jsxs)("div",{className:"auth-header",children:[Object(j.jsx)(h,{}),Object(j.jsx)("h1",{children:"Need for drive"})]}),Object(j.jsxs)("main",{className:"auth-content",children:[Object(j.jsx)("h2",{children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("form",{action:"",children:[Object(j.jsx)(d,{id:"username",value:r.value,onBlur:r.onBlur,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d...",type:"text",label:"\u041b\u043e\u0433\u0438\u043d",setValue:r.onChange,error:r.isDirty&&r.printError(["isEmpty","emailError"])}),Object(j.jsx)(d,{id:"password",value:n.value,onBlur:n.onBlur,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c...",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",setValue:n.onChange,error:n.isDirty&&n.printError(["isEmpty"])}),Object(j.jsxs)("section",{className:"auth-footer",children:[Object(j.jsx)("a",{className:"link-primary",href:"/car-sharing-admin",children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"}),Object(j.jsx)("button",{type:"button",className:"btn btn-primary",disabled:!r.inputValid||!n.inputValid,onClick:function(){return e(L(r.value,n.value))},children:"\u0412\u043e\u0439\u0442\u0438"})]})]}),Object(j.jsx)("span",{className:"error",children:t.value?t.text:""})]})]})}),k=(r(95),r(96),r(97),r(39)),M=r.n(k);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var P,D=function(e){return a.createElement("svg",F({width:15,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),z||(z=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.321 4.109a.608.608 0 010 .861l-1.118 1.118-2.291-2.291 1.118-1.118a.609.609 0 01.862 0l1.43 1.43zM2.5 13.5v-2.291L9.258 4.45l2.291 2.291L4.791 13.5H2.5z",fill:"#CACEDB"})))};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var I,T=function(e){return a.createElement("svg",_({width:17,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),P||(P=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 3.5v1.357h5.333V3.5H2.5zm5.333 4.071H2.5V6.214h5.333v1.357zM2.5 10.286h5.333V8.929H2.5v1.357zM2.5 13h5.333v-1.357H2.5V13zm12-9.5H9.167V13H14.5V3.5z",fill:"#CACEDB"})))};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var J=function(e){return a.createElement("svg",U({width:13,height:12,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),I||(I=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 1h-4c-.55 0-.995.45-.995 1L2.5 10c0 .55.445 1 .995 1H9.5c.55 0 1-.45 1-1V4l-3-3zm1 7H7v1.5H6V8H4.5V7H6V5.5h1V7h1.5v1zM7 1.75V4.5h2.75L7 1.75z",fill:"#CACEDB"})))},X=[{text:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",icon:Object(j.jsx)(D,{}),path:"/"},{text:"\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u0432\u0442\u043e",icon:Object(j.jsx)(T,{}),path:"/cardList"},{text:"\u0417\u0430\u043a\u0430\u0437\u044b",icon:Object(j.jsx)(J,{}),path:"/orderList"}],Z="SET_CURRENT_PAGE",G={currentPage:0};var W=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app.currentPage}));return Object(j.jsxs)("div",{className:"navBar",children:[Object(j.jsxs)("div",{className:"navBar-header",children:[Object(j.jsx)(h,{}),Object(j.jsx)("h1",{children:"Need for drive"})]}),Object(j.jsx)("section",{children:X.map((function(r,n){return Object(j.jsxs)(o.b,{className:M()({"navBar-tab":!0,active:n===t}),onClick:function(){return e({type:Z,page:n})},to:"/car-sharing-admin".concat(r.path),children:[r.icon,r.text]},r.text)}))})]})},$=(r(100),function(){return Object(j.jsx)("div",{className:"header",children:"Header"})}),q=(r(101),function(){return Object(j.jsx)("div",{className:"footer",children:"Footer"})}),K=function(e){var t=e.children;return Object(j.jsxs)("div",{className:"order-layout",children:[Object(j.jsx)(W,{}),Object(j.jsx)($,{}),t,Object(j.jsx)(q,{})]})},Q=function(){return Object(j.jsx)(K,{children:Object(j.jsx)("main",{children:"OrderList"})})},Y=(r(102),function(){return Object(j.jsx)(K,{children:Object(j.jsx)("main",{children:"CardCar"})})}),ee=(r(103),function(){return Object(j.jsx)(K,{children:Object(j.jsx)("main",{children:"CarList"})})}),te=function(){var e=Object(s.c)((function(e){return e.user.isAuth}));return Object(j.jsx)(o.a,{children:e?Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/car-sharing-admin",component:Y}),Object(j.jsx)(l.a,{path:"/car-sharing-admin/cardList",component:ee}),Object(j.jsx)(l.a,{path:"/car-sharing-admin/orderList",component:Q})]}):Object(j.jsx)(l.c,{children:Object(j.jsx)(l.a,{exact:!0,path:"/car-sharing-admin",component:S})})})},re=r(15),ne=r(40),ae=r(41);var ce=Object(re.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{isAuth:!0,userId:t.id,isErrorAuth:Object(b.a)(Object(b.a)({},e.isErrorAuth),{},{value:!1})});case R:return Object(b.a)(Object(b.a)({},e),{},{isErrorAuth:Object(b.a)(Object(b.a)({},e.isErrorAuth),{},{value:!0})});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.page});default:return e}}}),ie=Object(re.createStore)(ce,Object(ne.composeWithDevTools)(Object(re.applyMiddleware)(ae.a)));i.a.render(Object(j.jsx)(s.a,{store:ie,children:Object(j.jsx)(te,{})}),document.getElementById("root"))},69:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},95:function(e,t,r){},96:function(e,t,r){},97:function(e,t,r){}},[[104,1,2]]]);
//# sourceMappingURL=main.c93a140f.chunk.js.map