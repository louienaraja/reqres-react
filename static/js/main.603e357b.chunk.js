(this["webpackJsonptest-dashboard-bootstrap"]=this["webpackJsonptest-dashboard-bootstrap"]||[]).push([[0],{146:function(e,a,t){},212:function(e,a,t){e.exports={page:"Page_page__vuH5o"}},215:function(e,a,t){e.exports={main:"PageMain_main__24X8K"}},216:function(e,a,t){e.exports={footer:"PageFooter_footer__-YlIb"}},357:function(e,a,t){e.exports=t(509)},362:function(e,a,t){},496:function(e,a,t){},509:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),i=(t(362),t(31)),s=t(29),o=t(212),m=t.n(o),u=t(14),d=t(511),E=t(512),b=t(513),f=t(514),v=t(515),g=t(516),h=t(517),p=t(527),O=t(526),N=t(528),j=t(518),S=t(519);var k=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return l.a.createElement(d.a,{color:"light",light:!0,expand:"md"},l.a.createElement(E.a,{tag:i.c,to:"/reqres-react"},"Admin"),l.a.createElement(b.a,{onClick:function(){return r(!t)}}),l.a.createElement(f.a,{isOpen:t,navbar:!0},l.a.createElement(v.a,{className:"mr-auto",navbar:!0},l.a.createElement(g.a,null,l.a.createElement(h.a,{tag:i.c,to:"/reqres-react/users"},"Users")),l.a.createElement(g.a,null,l.a.createElement(h.a,{tag:i.c,to:"/features"},"Features")),l.a.createElement(g.a,null,l.a.createElement(h.a,{tag:i.c,to:"/pricing"},"Pricing")),l.a.createElement(g.a,null,l.a.createElement(h.a,{tag:i.c,to:"/disabled",disabled:!0},"Disabled")),l.a.createElement(p.a,{nav:!0,inNavbar:!0},l.a.createElement(O.a,{nav:!0,caret:!0},"Options"),l.a.createElement(N.a,{right:!0},l.a.createElement(j.a,null,"Option 1"),l.a.createElement(j.a,null,"Option 2"),l.a.createElement(j.a,{divider:!0}),l.a.createElement(j.a,null,"Reset")))),l.a.createElement(S.a,null,"Simple Text")))},y=t(215),_=t.n(y);var C=function(e){var a=e.children;return l.a.createElement("main",{className:_.a.main,role:"main"},a)},T=t(216),A=t.n(T);var U=function(){return l.a.createElement("footer",{className:A.a.footer},"footer")};var w=function(e){var a=e.children;return l.a.createElement("div",{className:m.a.page},l.a.createElement(k,null),l.a.createElement(C,null,a),l.a.createElement(U,null))},I=t(520),q=t(521);var D=function(){return l.a.createElement(I.a,null,l.a.createElement(q.a,{className:"mt-5"},l.a.createElement("h1",{className:"display-4"},"Louie Naraja"),l.a.createElement("address",null,l.a.createElement("a",{href:"mailto:narajamartin@gmail.com"},"narajamartin@gmail.com"),l.a.createElement("br",null),l.a.createElement("a",{href:"tel:+639278070527"},"(+63) 927-807-0527"))))},x=(t(391),t(41)),F=t(522),P=t(97),L=t.n(P),z="https://reqres.in/api/users",R={getUsers:function(){return L()({url:z,method:"GET",params:{page:1,per_page:20}})},viewUser:function(e){return L()({method:"GET",url:"".concat(z,"/").concat(e)})},createUser:function(e,a,t){return L()({method:"POST",url:z,data:{email:e,firstName:a,lastName:t}})},editUser:function(e,a,t,n){return L()({method:"PUT",url:"".concat(z,"/").concat(e),data:{email:a,firstName:t,lastName:n}})},deleteUser:function(e){return L()({method:"DELETE",url:"".concat(z,"/").concat(e)})}},H=t(523),B=t(525),M=t(277),$=t(524),G=t(60);t(146);var J=function(e){var a=H.a.useForm(),t=Object(u.a)(a,1)[0],r=l.a.createElement(G.a,{style:{fontSize:20},spin:!0}),c=Object(n.useState)(""),s=Object(u.a)(c,2),o=s[0],m=s[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),b=E[0],f=E[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),h=g[0],p=g[1],O=Object(n.useState)(!1),N=Object(u.a)(O,2),j=N[0],S=N[1],k=function(a){S(!0),R.createUser(o,b,h).then((function(a){console.log("THIS E: ",a);var t=a.data,n=a.status;console.log("STATUS: ",n),console.log("DATA: ",t),201===n&&(alert("Created User ".concat(b," ").concat(h)),S(!1),e.handleOk())}))};return l.a.createElement(B.a,{closable:!1,title:l.a.createElement("b",null,e.title),visible:e.visible,footer:[l.a.createElement(i.b,{to:"/reqres-react/users"},l.a.createElement(x.a,{key:"back",disabled:j,onClick:function(){return e.handleCancel()}},j?l.a.createElement(M.a,{indicator:r},"Cancel"):"Cancel")),l.a.createElement(i.b,{to:"/reqres-react/users"},l.a.createElement(x.a,{id:"Submit",key:"submit",type:e.buttonType,disabled:j,onClick:function(){t.submit(),Boolean(void 0!==t.submit())&&k()}},j?l.a.createElement(M.a,{indicator:r},e.action):e.action))]},l.a.createElement(H.a,{form:t,name:"create-user",scrollToFirstError:!0,onFinish:k},l.a.createElement("div",{className:"modal-main-content"},l.a.createElement(H.a.Item,{className:"modal-title",name:"email",label:"Email",hasFeedback:!0,rules:[{required:"true",message:"Please input your email address!"},{type:"email",message:"This is not a valid email"}]},l.a.createElement($.a,{className:"modal-content",placeholder:"Email Address",onChange:function(e){return m(e.target.value)}}))),l.a.createElement("div",{className:"modal-main-content"},l.a.createElement(H.a.Item,{className:"modal-title",name:"firstName",label:"First Name",hasFeedback:!0,rules:[{required:!0,message:"Please input your first name!"},{pattern:new RegExp(/^[a-z ,.'-]+$/i),message:"Numbers and Special Characters are NOT allowed."}]},l.a.createElement($.a,{className:"modal-content",placeholder:"First Name",onChange:function(e){return f(e.target.value)}}))),l.a.createElement("div",{className:"modal-main-content"},l.a.createElement(H.a.Item,{className:"modal-title",name:"lastName",label:"Last Name",hasFeedback:!0,rules:[{required:!0,message:"Please input your last name!"},{pattern:new RegExp(/^[a-z ,.'-]+$/i),message:"Numbers and Special Characters are NOT allowed."}]},l.a.createElement($.a,{className:"modal-content",placeholder:"Last Name",onChange:function(e){return p(e.target.value)}})))))};var W=function(e){var a=l.a.createElement(G.a,{style:{fontSize:20},spin:!0}),t=Object(n.useState)(""),r=Object(u.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),d=m[0],E=m[1],b=Object(n.useState)(""),f=Object(u.a)(b,2),v=f[0],g=f[1],h=Object(n.useState)(""),p=Object(u.a)(h,2),O=p[0],N=p[1],j=Object(n.useState)(!1),S=Object(u.a)(j,2),k=S[0],y=S[1];Object(n.useEffect)((function(){s(e.id),E(e.email),g(e.first_name),N(e.last_name)}),[e.id,e.email,e.first_name,e.last_name]);var _=function(){y(!0),R.editUser(c,d,v,O).then((function(a){console.log("THIS E: ",a);var t=a.data,n=a.status;console.log("STATUS: ",n),console.log("DATA: ",t),200===n&&(alert("Edited User ".concat(v," ").concat(O)),y(!1),e.handleOk())}))};return l.a.createElement(B.a,{closable:!1,title:l.a.createElement("b",null,e.title),visible:e.visible,footer:[l.a.createElement(i.b,{to:"/reqres-react/users"},l.a.createElement(x.a,{key:"back",disabled:k,onClick:function(){return e.handleCancel()}},k?l.a.createElement(M.a,{indicator:a},"Cancel"):"Cancel")),l.a.createElement(i.b,{to:"/reqres-react/users"},l.a.createElement(x.a,{id:"Submit",key:"submit",type:e.buttonType,disabled:k,onClick:function(){_()}},k?l.a.createElement(M.a,{indicator:a},e.action):e.action))]},l.a.createElement(H.a,{onFinish:_},l.a.createElement("div",{className:"modal-main-content"},l.a.createElement(H.a.Item,{className:"modal-title"},l.a.createElement("b",null,"Email"),l.a.createElement($.a,{className:"modal-content",value:d,onChange:function(e){return E(e.target.value)}}))),l.a.createElement("div",{className:"modal-main-content"},l.a.createElement(H.a.Item,{className:"modal-title"},l.a.createElement("b",null,"First Name"),l.a.createElement($.a,{className:"modal-content",value:v,onChange:function(e){return g(e.target.value)}}))),l.a.createElement("div",{className:"modal-main-content"},l.a.createElement(H.a.Item,{className:"modal-title"},l.a.createElement("b",null,"Last Name"),l.a.createElement($.a,{className:"modal-content",value:O,onChange:function(e){return N(e.target.value)}})))))};var K=function(e){var a=l.a.createElement(G.a,{style:{fontSize:20},spin:!0}),t=Object(n.useState)(""),r=Object(u.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),d=m[0],E=m[1],b=Object(n.useState)(""),f=Object(u.a)(b,2),v=f[0],g=f[1],h=Object(n.useState)(""),p=Object(u.a)(h,2),O=p[0],N=p[1],j=Object(n.useState)(!1),S=Object(u.a)(j,2),k=S[0],y=S[1];return Object(n.useEffect)((function(){s(e.id),E(e.email),g(e.first_name),N(e.last_name)}),[e.id,e.email,e.first_name,e.last_name]),l.a.createElement(B.a,{closable:!1,title:l.a.createElement("b",null,e.title),visible:e.visible,footer:[l.a.createElement(i.b,{to:"/reqres-react/users"},l.a.createElement(x.a,{key:"back",disabled:k,onClick:function(){return e.handleCancel()}},k?l.a.createElement(M.a,{indicator:a},"Cancel"):"Cancel")),l.a.createElement(i.b,{to:"/reqres-react/users"},l.a.createElement(x.a,{id:"Submit",key:"submit",type:e.buttonType,disabled:k,onClick:function(){return y(!0),void R.deleteUser(c).then((function(a){console.log("THIS E: ",a);var t=a.data,n=a.status;console.log("STATUS: ",n),console.log("DATA: ",t),204===n&&(alert("Deleted User ".concat(v," ").concat(O)),y(!1),e.handleOk())}))}},k?l.a.createElement(M.a,{indicator:a},e.action):e.action))]},l.a.createElement("div",{className:"modal-main-content"},l.a.createElement("div",{name:"email",className:"modal-title"},l.a.createElement("b",null,"Email"),l.a.createElement("div",{className:"modal-content"},d))),l.a.createElement("div",{className:"modal-main-content"},l.a.createElement("div",{name:"firstName",className:"modal-title"},l.a.createElement("b",null,"First Name"),l.a.createElement("div",{className:"modal-content"},v))),l.a.createElement("div",{className:"modal-main-content"},l.a.createElement("div",{name:"lastName",className:"modal-title"},l.a.createElement("b",null,"Last Name"),l.a.createElement("div",{className:"modal-content"},O))))};t(496);var X=function(){l.a.useEffect((function(){H()}),[]);var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),o=s[0],m=s[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),b=E[0],f=E[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),h=g[0],p=g[1],O=Object(n.useState)(""),N=Object(u.a)(O,2),j=N[0],S=N[1],k=Object(n.useState)(!1),y=Object(u.a)(k,2),_=y[0],C=y[1],T=Object(n.useState)(!1),A=Object(u.a)(T,2),U=A[0],w=A[1],q=Object(n.useState)(!1),D=Object(u.a)(q,2),P=D[0],L=D[1],z=[{title:"ID",dataIndex:"id",key:"id",align:"center",width:"20%",defaultSortOrder:"descend"},{title:"Profile",dataIndex:"profile",key:"profile",align:"center",width:"10%",render:function(e){return l.a.createElement("img",{src:e,alt:e})}},{title:"Email",dataIndex:"email",key:"email",align:"center",width:"15%"},{title:"First Name",key:"first_name",dataIndex:"first_name",align:"center",width:"20%"},{title:"Last Name",key:"last_name",dataIndex:"last_name",align:"center",width:"20%"},{title:"Actions",key:"actions",width:"20%",render:function(e){return l.a.createElement("div",{className:"action-buttons"},l.a.createElement(i.b,{to:"/reqres-react/users/".concat(e.id,"/delete")},l.a.createElement(x.a,{className:"btn-delete",size:"small",type:"danger",onClick:function(){m("".concat(e.first_name," ").concat(e.last_name)),R.viewUser(e.id).then((function(e){console.log("E: ",e);var a=e.data.data;console.log("DATASS: ",a),console.log("DATA EMAIL: ",a.email),f(a.email),p(a.first_name),S(a.last_name)})).then(L(!0))}}," Delete ")),l.a.createElement(i.b,{to:"/reqres-react/users/".concat(e.id,"/edit")},l.a.createElement(x.a,{className:"btn-edit",size:"small",onClick:function(){m("".concat(e.first_name," ").concat(e.last_name)),R.viewUser(e.id).then((function(e){console.log("E: ",e);var a=e.data.data;console.log("DATASS: ",a),console.log("DATA EMAIL: ",a.email),f(a.email),p(a.first_name),S(a.last_name)})).then(w(!0))}}," Edit ")))}}],H=function(){R.getUsers().then((function(e){var a=e.data.data;a&&(console.log("DATA: ",a),r(a))}))};return l.a.createElement(I.a,null,l.a.createElement("div",{className:"mt-3 text-right"},l.a.createElement(i.b,{to:"/reqres-react/users/create"},l.a.createElement(x.a,{color:"primary",type:"primary",onClick:function(){return C(!0)}},"+ Add User"))),l.a.createElement(F.a,{columns:z,dataSource:(console.log("RECORD: ",t),t.map((function(e,a){return{key:a,id:e.id,profile:e.avatar,email:e.email,first_name:e.first_name,last_name:e.last_name}}))),pagination:{pageSize:20}}),l.a.createElement(J,{title:"Create User",visible:_,action:"Create",buttonType:"primary",handleCancel:function(){return C(!1)},handleOk:function(){C(!1)}}),l.a.createElement(W,{title:"Edit User ".concat(o),email:b,first_name:h,last_name:j,visible:U,action:"Edit",buttonType:"primary",handleCancel:function(){return w(!1)},handleOk:function(){w(!1)}}),l.a.createElement(K,{title:"Delete User ".concat(o,"?"),email:b,first_name:h,last_name:j,visible:P,action:"Delete",buttonType:"danger",handleCancel:function(){return L(!1)},handleOk:function(){L(!1)}}))};var Y=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(i.a,null,l.a.createElement(w,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/reqres-react/"},l.a.createElement(D,null)),l.a.createElement(s.a,{path:"/reqres-react/users"},l.a.createElement(X,null)),l.a.createElement(s.a,{path:"*"},"404")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[357,1,2]]]);
//# sourceMappingURL=main.603e357b.chunk.js.map