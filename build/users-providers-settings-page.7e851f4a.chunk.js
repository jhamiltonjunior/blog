"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2282],{8971:(V,j,t)=>{t.r(j),t.d(j,{ProvidersPage:()=>be,default:()=>nt});var e=t(67294),P=t(97132),l=t(68547),L=t(18721),h=t.n(L),R=t(11700),D=t.n(R),f=t(70982),C=t(17034),x=t(67838),F=t(49066),I=t(185),d=t(14087),v=t(38939),c=t(8060),y=t(79031),b=t(37909),X=t(15234),K=t(72735),m=t(63237),O=t(12028),T=t(4585),M=t(23724),r=t(53209),s=t(89031);const u={id:(0,s.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},p={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},A={id:(0,s.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},W={id:(0,s.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},z={id:(0,s.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},k={id:(0,s.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},Q={id:(0,s.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},_={id:(0,s.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:W,name:"enabled",type:"bool",description:A,size:6}]],schema:r.Ry().shape({enabled:r.Xg().required(l.translatedErrors.required)})},providers:{form:[[{intlLabel:W,name:"enabled",type:"bool",description:A,size:6,validations:{required:!0}}],[{intlLabel:z,name:"key",type:"text",placeholder:Q,size:12,validations:{required:!0}}],[{intlLabel:_,name:"secret",type:"text",placeholder:Q,size:12,validations:{required:!0}}],[{intlLabel:u,placeholder:p,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:k,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:r.Ry().shape({enabled:r.Xg().required(l.translatedErrors.required),key:r.Z_().when("enabled",{is:!0,then:r.Z_().required(l.translatedErrors.required),otherwise:r.Z_()}),secret:r.Z_().when("enabled",{is:!0,then:r.Z_().required(l.translatedErrors.required),otherwise:r.Z_()}),callback:r.Z_().when("enabled",{is:!0,then:r.Z_().required(l.translatedErrors.required),otherwise:r.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:W,name:"enabled",type:"bool",description:A,size:6,validations:{required:!0}}],[{intlLabel:z,name:"key",type:"text",placeholder:Q,size:12,validations:{required:!0}}],[{intlLabel:_,name:"secret",type:"text",placeholder:Q,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,s.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,s.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:u,placeholder:p,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:k,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:r.Ry().shape({enabled:r.Xg().required(l.translatedErrors.required),key:r.Z_().when("enabled",{is:!0,then:r.Z_().required(l.translatedErrors.required),otherwise:r.Z_()}),secret:r.Z_().when("enabled",{is:!0,then:r.Z_().required(l.translatedErrors.required),otherwise:r.Z_()}),subdomain:r.Z_().when("enabled",{is:!0,then:r.Z_().required(l.translatedErrors.required),otherwise:r.Z_()}),callback:r.Z_().when("enabled",{is:!0,then:r.Z_().required(l.translatedErrors.required),otherwise:r.Z_()})})}};var Re=(a,n,o)=>new Promise((Z,B)=>{var N=E=>{try{w(o.next(E))}catch(g){B(g)}},U=E=>{try{w(o.throw(E))}catch(g){B(g)}},w=E=>E.done?Z(E.value):Promise.resolve(E.value).then(N,U);w((o=o.apply(a,n)).next())});const Te=a=>Re(void 0,null,function*(){try{const{data:n}=yield s.be.get((0,s.Gc)("providers"));return n}catch(n){throw a({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Be=a=>s.be.put((0,s.Gc)("providers"),a);var Le=t(96486);const Ce=a=>(0,Le.sortBy)(Object.keys(a).reduce((n,o)=>{const{icon:Z,enabled:B,subdomain:N}=a[o],U=Z==="envelope"?["fas","envelope"]:["fab",Z];return N!==void 0?n.push({name:o,icon:U,enabled:B,subdomain:N}):n.push({name:o,icon:U,enabled:B}),n},[]),"name");var ue=t(81912),pe=t(29728),xe=t(7681),ve=t(2407),Ae=t(11276),De=t(74571),Ie=t(42866),je=t(24969),Ue=t(59946),Se=t(36856),Ze=t(45697),i=t.n(Ze),we=t(80831),Fe=t(20707),We=t(16364),Ne=Object.defineProperty,me=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,fe=(a,n,o)=>n in a?Ne(a,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[n]=o,ae=(a,n)=>{for(var o in n||(n={}))Ke.call(n,o)&&fe(a,o,n[o]);if(me)for(var o of me(n))ze.call(n,o)&&fe(a,o,n[o]);return a};const ne=({description:a,disabled:n,intlLabel:o,error:Z,name:B,onChange:N,placeholder:U,providerToEditName:w,type:E,value:g})=>{const{formatMessage:$}=(0,P.useIntl)(),G=B==="noName"?`${strapi.backendURL}/api/connect/${w}/callback`:g,J=$({id:o.id,defaultMessage:o.defaultMessage},ae({provider:w},o.values)),H=a?$({id:a.id,defaultMessage:a.defaultMessage},ae({provider:w},a.values)):"";if(E==="bool")return e.createElement(Fe.s,{"aria-label":B,checked:g,disabled:n,hint:H,label:J,name:B,offLabel:$({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:$({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:q=>{N({target:{name:B,value:q.target.checked}})}});const se=U?$({id:U.id,defaultMessage:U.defaultMessage},ae({},U.values)):"",ie=Z?$({id:Z,defaultMessage:Z}):"";return e.createElement(We.o,{"aria-label":B,disabled:n,error:ie,label:J,name:B,onChange:N,placeholder:se,type:E,value:G})};ne.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},ne.propTypes={description:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired,values:i().object}),disabled:i().bool,error:i().string,intlLabel:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired,values:i().object}).isRequired,name:i().string.isRequired,onChange:i().func.isRequired,placeholder:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired,values:i().object}),providerToEditName:i().string.isRequired,type:i().string.isRequired,value:i().oneOfType([i().bool,i().string])};const $e=ne;var He=Object.defineProperty,Ve=Object.defineProperties,Ge=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,ge=(a,n,o)=>n in a?He(a,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[n]=o,Ye=(a,n)=>{for(var o in n||(n={}))Xe.call(n,o)&&ge(a,o,n[o]);if(ye)for(var o of ye(n))Qe.call(n,o)&&ge(a,o,n[o]);return a},Je=(a,n)=>Ve(a,Ge(n));const oe=({headerBreadcrumbs:a,initialData:n,isSubmiting:o,layout:Z,isOpen:B,onSubmit:N,onToggle:U,providerToEditName:w})=>{const{formatMessage:E}=(0,P.useIntl)();return B?e.createElement(Ie.P,{onClose:U,labelledBy:"title"},e.createElement(je.x,null,e.createElement(ve.O,{label:a.join(", ")},a.map(g=>e.createElement(ve.$,{key:g},g)))),e.createElement(we.Formik,{onSubmit:g=>N(g),initialValues:n,validationSchema:Z.schema,validateOnChange:!1},({errors:g,handleChange:$,values:G})=>e.createElement(l.Form,null,e.createElement(Ue.f,null,e.createElement(xe.K,{spacing:1},e.createElement(Ae.r,{gap:5},Z.form.map(J=>J.map(H=>e.createElement(De.P,{key:H.name,col:H.size,xs:12},e.createElement($e,Je(Ye({},H),{error:g[H.name],onChange:$,value:G[H.name],providerToEditName:w})))))))),e.createElement(Se.m,{startActions:e.createElement(pe.z,{variant:"tertiary",onClick:U,type:"button"},E({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(pe.z,{type:"submit",loading:o},E({id:"global.save",defaultMessage:"Save"}))})))):null};oe.defaultProps={initialData:null,providerToEditName:null},oe.propTypes={headerBreadcrumbs:i().arrayOf(i().string).isRequired,initialData:i().object,layout:i().shape({form:i().arrayOf(i().array),schema:i().object}).isRequired,isOpen:i().bool.isRequired,isSubmiting:i().bool.isRequired,onSubmit:i().func.isRequired,onToggle:i().func.isRequired,providerToEditName:i().string};const ke=oe;var qe=Object.defineProperty,_e=Object.defineProperties,et=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,Ee=(a,n,o)=>n in a?qe(a,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[n]=o,le=(a,n)=>{for(var o in n||(n={}))tt.call(n,o)&&Ee(a,o,n[o]);if(he)for(var o of he(n))rt.call(n,o)&&Ee(a,o,n[o]);return a},at=(a,n)=>_e(a,et(n)),Pe=(a,n,o)=>new Promise((Z,B)=>{var N=E=>{try{w(o.next(E))}catch(g){B(g)}},U=E=>{try{w(o.throw(E))}catch(g){B(g)}},w=E=>E.done?Z(E.value):Promise.resolve(E.value).then(N,U);w((o=o.apply(a,n)).next())});const be=()=>{const{formatMessage:a}=(0,P.useIntl)();(0,l.useFocusWhenNavigate)();const{notifyStatus:n}=(0,d.G)(),o=(0,M.useQueryClient)(),{trackUsage:Z}=(0,l.useTracking)(),B=(0,e.useRef)(Z),[N,U]=(0,e.useState)(!1),[w,E]=(0,e.useState)(!1),[g,$]=(0,e.useState)(null),G=(0,l.useNotification)(),{lockApp:J,unlockApp:H}=(0,l.useOverlayBlocker)(),se=(0,e.useMemo)(()=>({update:ue.Z.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:q}}=(0,l.useRBAC)(se),{isLoading:ot,data:ee,isFetching:lt}=(0,M.useQuery)("get-providers",()=>Te(G),{onSuccess(){n(a({id:(0,s.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),st=ot||lt,it=(0,M.useMutation)(Be,{onSuccess(){return Pe(this,null,function*(){yield o.invalidateQueries("get-providers"),G({type:"info",message:{id:(0,s.OB)("notification.success.submit")}}),B.current("didEditAuthenticationProvider"),E(!1),de(),H()})},onError(){G({type:"warning",message:{id:"notification.error"}}),H(),E(!1)},refetchActive:!1}),te=(0,e.useMemo)(()=>Ce(ee),[ee]),dt=te.length,Oe=(0,e.useMemo)(()=>{if(!g)return!1;const S=te.find(ce=>ce.name===g);return h()(S,"subdomain")},[te,g]),ct=a({id:(0,s.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),ut=(0,e.useMemo)(()=>g==="email"?Y.email:Oe?Y.providersWithSubdomain:Y.providers,[g,Oe]),de=()=>{U(S=>!S)},Me=S=>{q&&($(S.name),de())},pt=S=>Pe(void 0,null,function*(){E(!0),J(),B.current("willEditAuthenticationProvider");const ce=at(le({},ee),{[g]:S});it.mutate({providers:ce})});return e.createElement(C.A,null,e.createElement(l.SettingsPageTitle,{name:ct}),e.createElement(I.o,null,e.createElement(x.T,{title:a({id:(0,s.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),st||ie?e.createElement(l.LoadingIndicatorPage,null):e.createElement(F.D,null,e.createElement(v.i,{colCount:4,rowCount:dt+1},e.createElement(c.h,null,e.createElement(y.Tr,null,e.createElement(b.Th,null,e.createElement(K.Z,{variant:"sigma",textColor:"neutral600"},e.createElement(m.T,null,a({id:(0,s.OB)("Providers.image"),defaultMessage:"Image"})))),e.createElement(b.Th,null,e.createElement(K.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(b.Th,null,e.createElement(K.Z,{variant:"sigma",textColor:"neutral600"},a({id:(0,s.OB)("Providers.status"),defaultMessage:"Status"}))),e.createElement(b.Th,null,e.createElement(K.Z,{variant:"sigma"},e.createElement(m.T,null,a({id:"global.settings",defaultMessage:"Settings"})))))),e.createElement(X.p,null,te.map(S=>e.createElement(y.Tr,le({key:S.name},(0,l.onRowClick)({fn:()=>Me(S),condition:q})),e.createElement(b.Td,{width:""},e.createElement(f.G,{icon:S.icon})),e.createElement(b.Td,{width:"45%"},e.createElement(K.Z,{fontWeight:"semiBold",textColor:"neutral800"},S.name)),e.createElement(b.Td,{width:"65%"},e.createElement(K.Z,{textColor:S.enabled?"success600":"danger600","data-testid":`enable-${S.name}`},S.enabled?a({id:"global.enabled",defaultMessage:"Enabled"}):a({id:"global.disabled",defaultMessage:"Disabled"}))),e.createElement(b.Td,le({},l.stopPropagation),q&&e.createElement(O.h,{onClick:()=>Me(S),noBorder:!0,icon:e.createElement(T.Z,null),label:"Edit"})))))))),e.createElement(ke,{initialData:ee[g],isOpen:N,isSubmiting:w,layout:ut,headerBreadcrumbs:[a({id:(0,s.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),D()(g)],onToggle:de,onSubmit:pt,providerToEditName:g}))},nt=()=>e.createElement(l.CheckPagePermissions,{permissions:ue.Z.readProviders},e.createElement(be,null))},46979:(V,j,t)=>{t.d(j,{Z:()=>D});var e=t(9669),P=t.n(e),l=t(68547),L=t.n(l),h=(f,C,x)=>new Promise((F,I)=>{var d=y=>{try{c(x.next(y))}catch(b){I(b)}},v=y=>{try{c(x.throw(y))}catch(b){I(b)}},c=y=>y.done?F(y.value):Promise.resolve(y.value).then(d,v);c((x=x.apply(f,C)).next())});const R=P().create({baseURL:"https://hamiltonjr.dev"});R.interceptors.request.use(f=>h(void 0,null,function*(){return f.headers={Authorization:`Bearer ${l.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},f}),f=>{Promise.reject(f)}),R.interceptors.response.use(f=>f,f=>{var C;throw((C=f.response)==null?void 0:C.status)===401&&(l.auth.clearAppStorage(),window.location.reload()),f});const D=R},89031:(V,j,t)=>{t.d(j,{be:()=>e.Z,YX:()=>L,Gc:()=>D,OB:()=>f.Z});var e=t(46979),P=t(96486);const L=C=>Object.keys(C).reduce((x,F)=>{const I=C[F].controllers,d=Object.keys(I).reduce((v,c)=>((0,P.isEmpty)(I[c])||(v[c]=I[c]),v),{});return(0,P.isEmpty)(d)||(x[F]={controllers:d}),x},{});var h=t(31498);const D=C=>`/${h.Z}/${C}`;var f=t(84757)},2407:(V,j,t)=>{t.d(j,{$:()=>b,O:()=>K});var e=t(67294),P=t(45697),l=t(71893),L=t(16405),h=t(72735),R=t(35961),D=t(46273),f=t(63237),C=Object.defineProperty,x=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,d=(m,O,T)=>O in m?C(m,O,{enumerable:!0,configurable:!0,writable:!0,value:T}):m[O]=T,v=(m,O)=>{for(var T in O||(O={}))F.call(O,T)&&d(m,T,O[T]);if(x)for(var T of x(O))I.call(O,T)&&d(m,T,O[T]);return m},c=(m,O)=>{var T={};for(var M in m)F.call(m,M)&&O.indexOf(M)<0&&(T[M]=m[M]);if(m!=null&&x)for(var M of x(m))O.indexOf(M)<0&&I.call(m,M)&&(T[M]=m[M]);return T};const y=(0,l.default)(D.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:m})=>m.colors.neutral500};
    }
  }
  :last-of-type ${R.x} {
    display: none;
  }
  :last-of-type ${h.Z} {
    color: ${({theme:m})=>m.colors.neutral800};
    font-weight: ${({theme:m})=>m.fontWeights.bold};
  }
`,b=({children:m})=>e.createElement(y,{inline:!0,as:"li"},e.createElement(h.Z,{variant:"pi",textColor:"neutral600"},m),e.createElement(R.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},e.createElement(L.default,null)));b.displayName="Crumb",b.propTypes={children:P.node.isRequired};const X=P.shape({type:P.oneOf([b])}),K=m=>{var O=m,{children:T,label:M}=O,r=c(O,["children","label"]);return e.createElement(D.k,v({},r),e.createElement(f.T,null,M),e.createElement("ol",{"aria-hidden":!0},T))};K.displayName="Breadcrumbs",K.propTypes={children:P.oneOfType([P.arrayOf(X),X]).isRequired,label:P.string.isRequired}},49066:(V,j,t)=>{t.d(j,{D:()=>L});var e=t(67294),P=t(45697),l=t(35961);const L=({children:h})=>e.createElement(l.x,{paddingLeft:10,paddingRight:10},h);L.propTypes={children:P.node.isRequired}},67838:(V,j,t)=>{t.d(j,{T:()=>O});var e=t(67294),P=t(71893),l=t(45697),L=t(72735),h=t(35961),R=t(46273);const D=r=>{const s=(0,e.useRef)(null),[u,p]=(0,e.useState)(!0),A=([W])=>{p(W.isIntersecting)};return(0,e.useEffect)(()=>{const W=s.current,z=new IntersectionObserver(A,r);return W&&z.observe(s.current),()=>{W&&z.disconnect()}},[s,r]),[s,u]};var f=t(98402);const C=(r,s)=>{const u=(0,f.useCallbackRef)(s);(0,e.useLayoutEffect)(()=>{const p=new ResizeObserver(u);return Array.isArray(r)?r.forEach(A=>{A.current&&p.observe(A.current)}):r.current&&p.observe(r.current),()=>{p.disconnect()}},[r,u])};var x=Object.defineProperty,F=Object.defineProperties,I=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,y=(r,s,u)=>s in r?x(r,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[s]=u,b=(r,s)=>{for(var u in s||(s={}))v.call(s,u)&&y(r,u,s[u]);if(d)for(var u of d(s))c.call(s,u)&&y(r,u,s[u]);return r},X=(r,s)=>F(r,I(s)),K=(r,s)=>{var u={};for(var p in r)v.call(r,p)&&s.indexOf(p)<0&&(u[p]=r[p]);if(r!=null&&d)for(var p of d(r))s.indexOf(p)<0&&c.call(r,p)&&(u[p]=r[p]);return u};const m=()=>{const r=(0,e.useRef)(null),[s,u]=(0,e.useState)(null),[p,A]=D({root:null,rootMargin:"0px",threshold:0});return C(p,()=>{p.current&&u(p.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{r.current&&u(r.current.getBoundingClientRect())},[r]),{containerRef:p,isVisible:A,baseHeaderLayoutRef:r,headerSize:s}},O=r=>{const{containerRef:s,isVisible:u,baseHeaderLayoutRef:p,headerSize:A}=m();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:A==null?void 0:A.height},ref:s},u&&e.createElement(M,b({ref:p},r))),!u&&e.createElement(M,X(b({},r),{sticky:!0,width:A==null?void 0:A.width})))};O.displayName="HeaderLayout";const T=(0,P.default)(h.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${r=>r.width}px;
  z-index: 4;
  box-shadow: ${({theme:r})=>r.shadows.tableShadow};
`,M=e.forwardRef((r,s)=>{var u=r,{navigationAction:p,primaryAction:A,secondaryAction:W,subtitle:z,title:k,sticky:Q,width:_}=u,re=K(u,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const Y=typeof z=="string";return Q?e.createElement(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:_,"data-strapi-header-sticky":!0},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(R.k,null,p&&e.createElement(h.x,{paddingRight:3},p),e.createElement(h.x,null,e.createElement(L.Z,b({variant:"beta",as:"h1"},re),k),Y?e.createElement(L.Z,{variant:"pi",textColor:"neutral600"},z):z),W?e.createElement(h.x,{paddingLeft:4},W):null),e.createElement(R.k,null,A?e.createElement(h.x,{paddingLeft:2},A):void 0))):e.createElement(h.x,{ref:s,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:p?6:8,background:"neutral100","data-strapi-header":!0},p?e.createElement(h.x,{paddingBottom:2},p):null,e.createElement(R.k,{justifyContent:"space-between"},e.createElement(R.k,null,e.createElement(L.Z,b({as:"h1",variant:"alpha"},re),k),W?e.createElement(h.x,{paddingLeft:4},W):null),A),Y?e.createElement(L.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},z):z)});M.displayName="BaseHeaderLayout",M.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},M.propTypes={navigationAction:l.node,primaryAction:l.node,secondaryAction:l.node,sticky:l.bool,subtitle:l.oneOfType([l.string,l.node]),title:l.string.isRequired,width:l.number},O.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},O.propTypes={navigationAction:l.node,primaryAction:l.node,secondaryAction:l.node,subtitle:l.oneOfType([l.string,l.node]),title:l.string.isRequired}},17034:(V,j,t)=>{t.d(j,{A:()=>D});var e=t(67294),P=t(45697),l=t(71893),L=t(35961);const h=(0,l.default)(L.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:f})=>f?"auto 1fr":"1fr"};
`,R=(0,l.default)(L.x)`
  overflow-x: hidden;
`,D=({sideNav:f,children:C})=>e.createElement(h,{hasSideNav:Boolean(f)},f,e.createElement(R,{paddingBottom:10},C));D.defaultProps={sideNav:void 0},D.propTypes={children:P.node.isRequired,sideNav:P.node}},185:(V,j,t)=>{t.d(j,{o:()=>I});var e=t(67294),P=t(45697),l=t(71893),L=Object.defineProperty,h=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,f=(d,v,c)=>v in d?L(d,v,{enumerable:!0,configurable:!0,writable:!0,value:c}):d[v]=c,C=(d,v)=>{for(var c in v||(v={}))R.call(v,c)&&f(d,c,v[c]);if(h)for(var c of h(v))D.call(v,c)&&f(d,c,v[c]);return d},x=(d,v)=>{var c={};for(var y in d)R.call(d,y)&&v.indexOf(y)<0&&(c[y]=d[y]);if(d!=null&&h)for(var y of h(d))v.indexOf(y)<0&&D.call(d,y)&&(c[y]=d[y]);return c};const F=l.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,I=d=>{var v=d,{labelledBy:c}=v,y=x(v,["labelledBy"]);const b=c||"main-content-title";return e.createElement(F,C({"aria-labelledby":b,id:"main-content",tabIndex:-1},y))};I.defaultProps={labelledBy:void 0},I.propTypes={labelledBy:P.string}}}]);
