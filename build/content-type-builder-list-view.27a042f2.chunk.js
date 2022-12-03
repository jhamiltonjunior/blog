"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5905],{8317:(ee,j,a)=>{a.r(j),a.d(j,{default:()=>ln});var e=a(67294),c=a(68547),f=a(96315),A=a(67109),R=a(85018),$=a(4585),D=a(29728),F=a(46273),g=a(7681),i=a(35961),v=a(67838),pe=a(49066),X=a(27361),Z=a.n(X),te=a(18721),ne=a.n(te),J=a(18446),oe=a.n(J),ue=a(11700),re=a.n(ue),I=a(97132),Q=a(49656),H=a(45697),r=a.n(H),l=a(72735),u=a(38939),m=a(8060),T=a(79031),M=a(37909),B=a(49386),Y=a(26478),z=a(13588),C=a(71893),b=a(5002),ae=a(70968),qe=a(70982);const we=(0,C.default)(qe.G)`
  width: ${(0,c.pxToRem)(32)} !important;
  height: ${(0,c.pxToRem)(32)} !important;
  padding: ${(0,c.pxToRem)(9)};
  border-radius: ${(0,c.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.neutral150};
  path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,xe=C.default.div`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.pxToRem)(8)};

  svg {
    width: ${(0,c.pxToRem)(10)};
    height: ${(0,c.pxToRem)(10)};
    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,_e=(0,C.default)(i.x)`
  flex-shrink: 0;
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${xe} {
      display: block;
    }

    ${we} {
      background: ${({theme:t})=>t.colors.primary200};
      path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }

    ${l.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,et=(0,C.default)(g.K)`
  align-items: center;
`;function me({component:t,dzName:n,index:o,isActive:s,isInDevelopmentMode:y,onClick:p}){const{modifiedData:E,removeComponentFromDynamicZone:L}=(0,z.Z)(),{schema:{icon:h,displayName:O}}=Z()(E,["components",t],{schema:{icon:null}}),w=d=>{d.stopPropagation(),L(n,o)};return e.createElement("button",{type:"button",onClick:p},e.createElement(_e,{className:s?"active":"",borderRadius:"borderRadius",paddingLeft:4,paddingRight:4},e.createElement(et,{spacing:1},e.createElement(we,{icon:h||"dice-d6"}),e.createElement(i.x,{maxWidth:`calc(${(0,c.pxToRem)(140)} - 32px)`},e.createElement(l.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},O))),y&&e.createElement(xe,{role:"button",tabIndex:0,onKeyDown:d=>(d.key==="Enter"||d.key===" ")&&w(d),onClick:w},e.createElement(ae.default,null))))}me.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},me.propTypes={component:r().string,dzName:r().string.isRequired,index:r().number.isRequired,isActive:r().bool,isInDevelopmentMode:r().bool,onClick:r().func};const tt=me,Oe=C.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:t?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function fe({customRowComponent:t,component:n,isFromDynamicZone:o,isNestedInDZComponent:s,firstLoopComponentUid:y}){const{modifiedData:p}=(0,z.Z)(),{schema:{attributes:E}}=Z()(p,["components",n],{schema:{attributes:[]}});return e.createElement(Oe,{isChildOfDynamicZone:o,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(je,{customRowComponent:t,items:E,targetUid:n,firstLoopComponentUid:y||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:y?n:null})))}fe.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},fe.propTypes={component:r().string,customRowComponent:r().func,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,isNestedInDZComponent:r().bool};const Pe=fe;var nt=Object.defineProperty,ot=Object.defineProperties,rt=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,Le=(t,n,o)=>n in t?nt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,it=(t,n)=>{for(var o in n||(n={}))at.call(n,o)&&Le(t,o,n[o]);if(Re)for(var o of Re(n))lt.call(n,o)&&Le(t,o,n[o]);return t},st=(t,n)=>ot(t,rt(n));const ct=(0,C.default)(f.default)`
  width: ${(0,c.pxToRem)(32)};
  height: ${(0,c.pxToRem)(32)};
  padding: ${(0,c.pxToRem)(9)};
  border-radius: ${(0,c.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,dt=(0,C.default)(i.x)`
  height: ${(0,c.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,pt=(0,C.default)(g.K)`
  width: 100%;
  overflow-x: auto;
`,ut=(0,C.default)(i.x)`
  padding-top: ${(0,c.pxToRem)(90)};
`,mt=(0,C.default)(g.K)`
  flex-shrink: 0;
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function ge({customRowComponent:t,components:n,addComponent:o,name:s,targetUid:y}){const{isInDevelopmentMode:p}=(0,z.Z)(),[E,L]=(0,e.useState)(0),{formatMessage:h}=(0,I.useIntl)(),O=d=>{E!==d&&L(d)},w=()=>{o(s)};return e.createElement(Oe,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(dt,{paddingLeft:8},e.createElement(pt,{horizontal:!0,spacing:2},p&&e.createElement("button",{type:"button",onClick:w},e.createElement(mt,{spacing:1},e.createElement(ct,null),e.createElement(l.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},h({id:(0,b.Z)("button.component.add"),formatMessage:"Add a component"})))),n.map((d,x)=>e.createElement(tt,{key:d,dzName:s,index:x,component:d,isActive:E===x,isInDevelopmentMode:p,onClick:()=>O(x)})))),e.createElement(ut,null,n.map((d,x)=>{const P={customRowComponent:t,component:d};return e.createElement(i.x,{tabId:`${x}`,key:d,style:{display:E===x?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Pe,st(it({},P),{isFromDynamicZone:!0,targetUid:y,key:d})))))}))))}ge.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},ge.propTypes={addComponent:r().func,components:r().instanceOf(Array),customRowComponent:r().func,name:r().string,targetUid:r().string.isRequired};const ft=ge,gt=(0,C.default)(i.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`;var yt=Object.defineProperty,le=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Me=(t,n,o)=>n in t?yt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,vt=(t,n)=>{for(var o in n||(n={}))$e.call(n,o)&&Me(t,o,n[o]);if(le)for(var o of le(n))Ze.call(n,o)&&Me(t,o,n[o]);return t},ht=(t,n)=>{var o={};for(var s in t)$e.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&le)for(var s of le(t))n.indexOf(s)<0&&Ze.call(t,s)&&(o[s]=t[s]);return o};const bt=(0,C.default)(i.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:n})=>t.colors[`${n}600`]};
  }
`,Et=(0,C.default)(i.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Ae=t=>{var n=t,{children:o,icon:s,color:y}=n,p=ht(n,["children","icon","color"]);return e.createElement(Et,vt({paddingBottom:4,paddingTop:4,as:"button",type:"button"},p),e.createElement(F.k,null,e.createElement(bt,{color:y,"aria-hidden":!0,background:`${y}200`},s),e.createElement(i.x,{paddingLeft:3},e.createElement(l.Z,{variant:"pi",fontWeight:"bold",textColor:`${y}600`},o))))};Ae.propTypes={color:r().string.isRequired,children:r().string.isRequired,icon:r().node.isRequired};const Tt=Ae;var Ct=Object.defineProperty,wt=Object.defineProperties,xt=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertySymbols,Ot=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,Ie=(t,n,o)=>n in t?Ct(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,ie=(t,n)=>{for(var o in n||(n={}))Ot.call(n,o)&&Ie(t,o,n[o]);if(De)for(var o of De(n))Pt.call(n,o)&&Ie(t,o,n[o]);return t},ye=(t,n)=>wt(t,xt(n));function ve({addComponentToDZ:t,customRowComponent:n,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:y,isMain:p,isNestedInDZComponent:E,isSub:L,items:h,secondLoopComponentUid:O,targetUid:w}){const{formatMessage:d}=(0,I.useIntl)(),{trackUsage:x}=(0,c.useTracking)(),{isInDevelopmentMode:P,modifiedData:K,isInContentTypeView:N}=(0,z.Z)(),{onOpenModalAddField:U}=(0,Y.Z)(),S=()=>{x("hasClickedCTBAddFieldBanner"),U({forTarget:o,targetUid:w})};return w?h.length===0&&p?e.createElement(u.i,{colCount:2,rowCount:2},e.createElement(m.h,null,e.createElement(T.Tr,null,e.createElement(M.Th,null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement(M.Th,null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement(c.EmptyBodyTable,{action:e.createElement(D.z,{onClick:S,size:"L",startIcon:e.createElement(f.default,null),variant:"secondary"},d({id:(0,b.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:N?{id:(0,b.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,b.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(gt,null,e.createElement(i.x,ie({paddingLeft:6,paddingRight:p?6:0},p&&{style:{overflowX:"auto"}}),e.createElement("table",null,p&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,h.map(V=>{const{type:G}=V,q=n;return e.createElement(e.Fragment,{key:V.name},e.createElement(q,ye(ie({},V),{isNestedInDZComponent:E,targetUid:w,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:y,secondLoopComponentUid:O})),G==="component"&&e.createElement(Pe,ye(ie({},V),{customRowComponent:n,targetUid:w,isNestedInDZComponent:y,editTarget:o,firstLoopComponentUid:s})),G==="dynamiczone"&&e.createElement(ft,ye(ie({},V),{customRowComponent:n,addComponent:t,targetUid:w})))})))),p&&P&&e.createElement(B.c,{icon:e.createElement(f.default,null),onClick:S},d({id:(0,b.Z)(`form.button.add.field.to.${K.contentType?K.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})),L&&P&&e.createElement(Tt,{icon:e.createElement(f.default,null),onClick:S,color:y?"primary":"neutral"},d({id:(0,b.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(u.i,{colCount:2,rowCount:2},e.createElement(m.h,null,e.createElement(T.Tr,null,e.createElement(M.Th,null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),e.createElement(M.Th,null,e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},d({id:"global.type",defaultMessage:"Type"}))))),e.createElement(c.EmptyBodyTable,{colSpan:2,content:{id:(0,b.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}ve.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},ve.propTypes={addComponentToDZ:r().func,customRowComponent:r().func,editTarget:r().string.isRequired,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,isNestedInDZComponent:r().bool,isMain:r().bool,items:r().instanceOf(Array),secondLoopComponentUid:r().string,targetUid:r().string,isSub:r().bool};const je=ve;var Be=a(12028),Rt=Object.defineProperty,Se=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,ke=(t,n,o)=>n in t?Rt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Zt=(t,n)=>{for(var o in n||(n={}))Lt.call(n,o)&&ke(t,o,n[o]);if(Se)for(var o of Se(n))$t.call(n,o)&&ke(t,o,n[o]);return t};function Mt(t){return e.createElement("svg",Zt({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z",fill:"#8E8EA9"}))}var At=a(20022),Dt=Object.defineProperty,Fe=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,Ne=(t,n,o)=>n in t?Dt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Bt=(t,n)=>{for(var o in n||(n={}))It.call(n,o)&&Ne(t,o,n[o]);if(Fe)for(var o of Fe(n))jt.call(n,o)&&Ne(t,o,n[o]);return t};const St=(0,C.default)(i.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:n})=>t.colors[n]};
    display: block;
  }
`,kt=C.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ve=t=>e.createElement(St,null,e.createElement(kt,Bt({width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ve.propTypes={color:r().string.isRequired};const Ft=Ve,he=({content:t})=>re()(t);he.defaultProps={content:null},he.propTypes={content:r().string};const Nt=he,Vt=(0,C.default)(i.x)`
  position: relative;
`;var zt=a(66848);const be=({type:t,customField:n,repeatable:o})=>{const{formatMessage:s}=(0,I.useIntl)();let y=t;return["integer","biginteger","float","decimal"].includes(t)?y="number":["string"].includes(t)&&(y="text"),n?e.createElement(l.Z,null,s({id:(0,b.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(l.Z,null,s({id:(0,b.Z)(`attribute.${y}`),defaultMessage:t}),"\xA0",o&&s({id:(0,b.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};be.defaultProps={customField:null,repeatable:!1},be.propTypes={type:r().string.isRequired,customField:r().string,repeatable:r().bool};const Ut=be;var Wt=Object.defineProperty,ze=Object.getOwnPropertySymbols,Ht=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Ue=(t,n,o)=>n in t?Wt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,We=(t,n)=>{for(var o in n||(n={}))Ht.call(n,o)&&Ue(t,o,n[o]);if(ze)for(var o of ze(n))Kt.call(n,o)&&Ue(t,o,n[o]);return t};function Ee({configurable:t,customField:n,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:y,name:p,onClick:E,relation:L,repeatable:h,secondLoopComponentUid:O,target:w,targetUid:d,type:x}){const{contentTypes:P,isInDevelopmentMode:K,removeAttribute:N}=(0,z.Z)(),{formatMessage:U}=(0,I.useIntl)(),S=x==="relation"&&L.includes("morph"),V=["integer","biginteger","float","decimal"].includes(x)?"number":x,G=Z()(P,[w],{}),q=Z()(G,["schema","displayName"],""),_=Z()(G,"plugin"),Ce=w?"relation":V,se=()=>{S||t!==!1&&E(o,O||s||d,p,x,n)};let W;return O&&s?W=2:s?W=1:W=0,e.createElement(Vt,We({as:"tr"},(0,c.onRowClick)({fn:se,condition:K&&t&&!S})),e.createElement("td",{style:{position:"relative"}},W!==0&&e.createElement(Ft,{color:y?"primary200":"neutral150"}),e.createElement(g.K,{paddingLeft:2,spacing:4,horizontal:!0},e.createElement(zt.Z,{type:Ce,customField:n}),e.createElement(l.Z,{fontWeight:"bold"},p))),e.createElement("td",null,w?e.createElement(l.Z,null,U({id:(0,b.Z)(`modelPage.attribute.${S?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(Nt,{content:q}),"\xA0",_&&`(${U({id:(0,b.Z)("from"),defaultMessage:"from"})}: ${_})`)):e.createElement(Ut,{type:x,customField:n,repeatable:h})),e.createElement("td",null,K?e.createElement(F.k,We({justifyContent:"flex-end"},c.stopPropagation),t?e.createElement(g.K,{horizontal:!0,spacing:1},!S&&e.createElement(Be.h,{onClick:se,label:`${U({id:"app.utils.edit",defaultMessage:"Edit"})} ${p}`,noBorder:!0,icon:e.createElement($.Z,null)}),e.createElement(Be.h,{onClick:ce=>{ce.stopPropagation(),N(o,p,O||s||"")},label:`${U({id:"global.delete",defaultMessage:"Delete"})} ${p}`,noBorder:!0,icon:e.createElement(At.default,null)})):e.createElement(Mt,null)):e.createElement(i.x,{height:(0,c.pxToRem)(32)})))}Ee.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},Ee.propTypes={configurable:r().bool,customField:r().string,editTarget:r().string.isRequired,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,name:r().string.isRequired,onClick:r().func,relation:r().string,repeatable:r().bool,secondLoopComponentUid:r().string,target:r().string,targetUid:r().string,type:r().string};const Gt=(0,e.memo)(Ee),Xt=t=>{let n;switch(t){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=t}return n};var Jt=a(98432);const Qt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Te=({disabled:t,isTemporary:n,isInContentTypeView:o,contentTypeKind:s,targetUid:y})=>{const{formatMessage:p}=(0,I.useIntl)(),{push:E}=(0,Q.useHistory)(),{collectionTypesConfigurations:L,componentsConfigurations:h,singleTypesConfigurations:O}=Qt,w=p({id:"content-type-builder.form.button.configure-view"});let d=L;const x=()=>(n||E(o?`/content-manager/collectionType/${y}/configurations/edit`:`/content-manager/components/${y}/configurations/edit`),!1);return o&&s==="singleType"&&(d=O),o||(d=h),e.createElement(c.CheckPermissions,{permissions:d},e.createElement(D.z,{startIcon:e.createElement(Jt.Z,null),variant:"tertiary",onClick:x,disabled:n||t},w))};Te.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},Te.propTypes={disabled:r().bool.isRequired,contentTypeKind:r().string,isInContentTypeView:r().bool,isTemporary:r().bool,targetUid:r().string};const Yt=(0,e.memo)(Te);var qt=Object.defineProperty,_t=Object.defineProperties,en=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable,Ke=(t,n,o)=>n in t?qt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,on=(t,n)=>{for(var o in n||(n={}))tn.call(n,o)&&Ke(t,o,n[o]);if(He)for(var o of He(n))nn.call(n,o)&&Ke(t,o,n[o]);return t},rn=(t,n)=>_t(t,en(n)),an=(t,n,o)=>new Promise((s,y)=>{var p=h=>{try{L(o.next(h))}catch(O){y(O)}},E=h=>{try{L(o.throw(h))}catch(O){y(O)}},L=h=>h.done?s(h.value):Promise.resolve(h.value).then(p,E);L((o=o.apply(t,n)).next())});const ln=()=>{const{initialData:t,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:s,submitData:y}=(0,z.Z)(),{formatMessage:p}=(0,I.useIntl)(),{trackUsage:E}=(0,c.useTracking)(),L=(0,Q.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:h,onOpenModalAddField:O,onOpenModalEditField:w,onOpenModalEditSchema:d,onOpenModalEditCustomField:x}=(0,Y.Z)(),P=s?"contentType":"component",K=[P,"schema","attributes"],N=Z()(n,[P,"uid"]),U=Z()(n,[P,"isTemporary"],!1),S=Z()(n,[P,"schema","kind"],null),V=Z()(n,K,[]),G=ne()(t,[P,"plugin"]),q=!oe()(n,t),_=s?"contentType":"component",Ce=k=>{h({dynamicZoneTarget:k,targetUid:N})},se=(k,Ge,Xe,Je,Qe)=>an(void 0,null,function*(){const Ye=Xt(Je);Qe?x({forTarget:k,targetUid:Ge,attributeName:Xe,attributeType:Ye,customFieldUid:Qe}):w({forTarget:k,targetUid:Ge,attributeName:Xe,attributeType:Ye,step:Je==="component"?"2":null})});let W=Z()(n,[P,"schema","displayName"],"");const ce=Z()(n,[P,"schema","kind"],""),de=(L==null?void 0:L.params.currentUID)==="create-content-type";!W&&de&&(W=p({id:(0,b.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const sn=()=>{const k=ce||P;k==="collectionType"&&E("willEditNameOfContentType"),k==="singleType"&&E("willEditNameOfSingleType"),d({modalType:P,forTarget:P,targetUid:N,kind:k})};return e.createElement(e.Fragment,null,e.createElement(Q.Prompt,{message:p({id:(0,b.Z)("prompt.unsaved")}),when:q}),e.createElement(v.T,{id:"title",primaryAction:o&&e.createElement(g.K,{horizontal:!0,spacing:2},!de&&e.createElement(D.z,{startIcon:e.createElement(f.default,null),variant:"secondary",onClick:()=>{O({forTarget:_,targetUid:N})}},p({id:(0,b.Z)("button.attributes.add.another")})),e.createElement(D.z,{startIcon:e.createElement(R.Z,null),onClick:()=>y(),type:"submit",disabled:oe()(n,t)},p({id:"global.save",defaultMessage:"Save"}))),secondaryAction:o&&!G&&!de&&e.createElement(D.z,{startIcon:e.createElement($.Z,null),variant:"tertiary",onClick:sn},p({id:"app.utils.edit",defaultMessage:"Edit"})),title:re()(W),subtitle:p({id:(0,b.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(c.Link,{startIcon:e.createElement(A.Z,null),to:"/plugins/content-type-builder/"},p({id:"global.back",defaultMessage:"Back"}))}),e.createElement(pe.D,null,e.createElement(g.K,{spacing:4},e.createElement(F.k,{justifyContent:"flex-end"},e.createElement(g.K,{horizontal:!0,spacing:2},e.createElement(Yt,{key:"link-to-cm-settings-view",targetUid:N,isTemporary:U,isInContentTypeView:s,contentTypeKind:S,disabled:de}))),e.createElement(i.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(je,{items:V,customRowComponent:k=>e.createElement(Gt,rn(on({},k),{onClick:se})),addComponentToDZ:Ce,targetUid:N,editTarget:_,isMain:!0})))))}},49066:(ee,j,a)=>{a.d(j,{D:()=>A});var e=a(67294),c=a(45697),f=a(35961);const A=({children:R})=>e.createElement(f.x,{paddingLeft:10,paddingRight:10},R);A.propTypes={children:c.node.isRequired}},67838:(ee,j,a)=>{a.d(j,{T:()=>I});var e=a(67294),c=a(71893),f=a(45697),A=a(72735),R=a(35961),$=a(46273);const D=r=>{const l=(0,e.useRef)(null),[u,m]=(0,e.useState)(!0),T=([M])=>{m(M.isIntersecting)};return(0,e.useEffect)(()=>{const M=l.current,B=new IntersectionObserver(T,r);return M&&B.observe(l.current),()=>{M&&B.disconnect()}},[l,r]),[l,u]};var F=a(98402);const g=(r,l)=>{const u=(0,F.useCallbackRef)(l);(0,e.useLayoutEffect)(()=>{const m=new ResizeObserver(u);return Array.isArray(r)?r.forEach(T=>{T.current&&m.observe(T.current)}):r.current&&m.observe(r.current),()=>{m.disconnect()}},[r,u])};var i=Object.defineProperty,v=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,ne=(r,l,u)=>l in r?i(r,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[l]=u,J=(r,l)=>{for(var u in l||(l={}))Z.call(l,u)&&ne(r,u,l[u]);if(X)for(var u of X(l))te.call(l,u)&&ne(r,u,l[u]);return r},oe=(r,l)=>v(r,pe(l)),ue=(r,l)=>{var u={};for(var m in r)Z.call(r,m)&&l.indexOf(m)<0&&(u[m]=r[m]);if(r!=null&&X)for(var m of X(r))l.indexOf(m)<0&&te.call(r,m)&&(u[m]=r[m]);return u};const re=()=>{const r=(0,e.useRef)(null),[l,u]=(0,e.useState)(null),[m,T]=D({root:null,rootMargin:"0px",threshold:0});return g(m,()=>{m.current&&u(m.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{r.current&&u(r.current.getBoundingClientRect())},[r]),{containerRef:m,isVisible:T,baseHeaderLayoutRef:r,headerSize:l}},I=r=>{const{containerRef:l,isVisible:u,baseHeaderLayoutRef:m,headerSize:T}=re();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:T==null?void 0:T.height},ref:l},u&&e.createElement(H,J({ref:m},r))),!u&&e.createElement(H,oe(J({},r),{sticky:!0,width:T==null?void 0:T.width})))};I.displayName="HeaderLayout";const Q=(0,c.default)(R.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${r=>r.width}px;
  z-index: 4;
  box-shadow: ${({theme:r})=>r.shadows.tableShadow};
`,H=e.forwardRef((r,l)=>{var u=r,{navigationAction:m,primaryAction:T,secondaryAction:M,subtitle:B,title:Y,sticky:z,width:C}=u,b=ue(u,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const ae=typeof B=="string";return z?e.createElement(Q,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:C,"data-strapi-header-sticky":!0},e.createElement($.k,{justifyContent:"space-between"},e.createElement($.k,null,m&&e.createElement(R.x,{paddingRight:3},m),e.createElement(R.x,null,e.createElement(A.Z,J({variant:"beta",as:"h1"},b),Y),ae?e.createElement(A.Z,{variant:"pi",textColor:"neutral600"},B):B),M?e.createElement(R.x,{paddingLeft:4},M):null),e.createElement($.k,null,T?e.createElement(R.x,{paddingLeft:2},T):void 0))):e.createElement(R.x,{ref:l,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0},m?e.createElement(R.x,{paddingBottom:2},m):null,e.createElement($.k,{justifyContent:"space-between"},e.createElement($.k,null,e.createElement(A.Z,J({as:"h1",variant:"alpha"},b),Y),M?e.createElement(R.x,{paddingLeft:4},M):null),T),ae?e.createElement(A.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},B):B)});H.displayName="BaseHeaderLayout",H.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},H.propTypes={navigationAction:f.node,primaryAction:f.node,secondaryAction:f.node,sticky:f.bool,subtitle:f.oneOfType([f.string,f.node]),title:f.string.isRequired,width:f.number},I.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},I.propTypes={navigationAction:f.node,primaryAction:f.node,secondaryAction:f.node,subtitle:f.oneOfType([f.string,f.node]),title:f.string.isRequired}},67109:(ee,j,a)=>{a.d(j,{Z:()=>F});var e=a(67294),c=Object.defineProperty,f=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,$=(g,i,v)=>i in g?c(g,i,{enumerable:!0,configurable:!0,writable:!0,value:v}):g[i]=v,D=(g,i)=>{for(var v in i||(i={}))A.call(i,v)&&$(g,v,i[v]);if(f)for(var v of f(i))R.call(i,v)&&$(g,v,i[v]);return g};function F(g){return e.createElement("svg",D({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}},98432:(ee,j,a)=>{a.d(j,{Z:()=>F});var e=a(67294),c=Object.defineProperty,f=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,$=(g,i,v)=>i in g?c(g,i,{enumerable:!0,configurable:!0,writable:!0,value:v}):g[i]=v,D=(g,i)=>{for(var v in i||(i={}))A.call(i,v)&&$(g,v,i[v]);if(f)for(var v of f(i))R.call(i,v)&&$(g,v,i[v]);return g};function F(g){return e.createElement("svg",D({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g),e.createElement("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",fill:"#212134"}))}}}]);
