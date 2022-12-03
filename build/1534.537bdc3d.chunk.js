(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[1534],{44174:T=>{function P(e,t,a,u){for(var m=-1,b=e==null?0:e.length;++m<b;){var c=e[m];t(u,c,a(c),e)}return u}T.exports=P},81119:(T,P,e)=>{var t=e(89881);function a(u,m,b,c){return t(u,function(h,E,d){m(c,h,b(h),d)}),c}T.exports=a},55189:(T,P,e)=>{var t=e(44174),a=e(81119),u=e(67206),m=e(1469);function b(c,h){return function(E,d){var s=m(E)?t:a,g=h?h():{};return s(E,c,u(d,2),g)}}T.exports=b},94654:(T,P,e)=>{var t=e(21078),a=e(35161);function u(m,b){return t(a(m,b),1)}T.exports=u},7739:(T,P,e)=>{var t=e(89465),a=e(55189),u=Object.prototype,m=u.hasOwnProperty,b=a(function(c,h,E){m.call(c,E)?c[E].push(h):t(c,E,[h])});T.exports=b},35161:(T,P,e)=>{var t=e(29932),a=e(67206),u=e(69199),m=e(1469);function b(c,h){var E=m(c)?t:u;return E(c,a(h,3))}T.exports=b},48734:(T,P,e)=>{"use strict";e.d(P,{U:()=>D,y:()=>s});var t=e(67294),a=e(45697),u=e(71893),m=e(72735),b=e(13819),c=e(41762),h=e(35961),E=e(46273);const d=({theme:n,expanded:i,variant:r,disabled:l,error:p})=>p?`1px solid ${n.colors.danger600} !important`:l?`1px solid ${n.colors.neutral150}`:i?`1px solid ${n.colors.primary600}`:r==="primary"?`1px solid ${n.colors.neutral0}`:`1px solid ${n.colors.neutral100}`,s=(0,u.default)(m.Z)``,g=(0,u.default)(h.x)`
  border: ${d};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:n})=>n.colors.primary600};

    ${s} {
      color: ${({theme:n,expanded:i})=>i?void 0:n.colors.primary700};
    }

    ${m.Z} {
      color: ${({theme:n,expanded:i})=>i?void 0:n.colors.primary600};
    }

    & > ${E.k} {
      background: ${({theme:n})=>n.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:n})=>n.colors.primary200};
    }
  }
`,D=({children:n,expanded:i,id:r,size:l,variant:p,disabled:y,error:_,hasErrorMessage:o,onToggle:v,toggle:f})=>{const x=(0,c.M)("accordion",r);return t.createElement(b.S.Provider,{value:{expanded:i,onToggle:v,toggle:f,id:x,size:l,variant:p,disabled:y}},t.createElement(g,{"data-strapi-expanded":i,disabled:y,"aria-disabled":y,expanded:i,hasRadius:!0,variant:p,error:_},n),_&&o&&t.createElement(h.x,{paddingTop:1},t.createElement(m.Z,{variant:"pi",textColor:"danger600"},_)))};D.defaultProps={disabled:!1,error:void 0,expanded:!1,hasErrorMessage:!0,id:void 0,toggle:void 0,size:"M",variant:"primary",onToggle:void 0},D.propTypes={children:a.node.isRequired,disabled:a.bool,error:a.string,expanded:a.bool,hasErrorMessage:a.bool,id:a.string,onToggle:a.func,size:a.oneOf(["S","M"]),toggle:a.func,variant:a.oneOf(["primary","secondary"])}},63081:(T,P,e)=>{"use strict";e.d(P,{v:()=>D});var t=e(67294),a=e(45697),u=e(13819),m=e(35961),b=Object.defineProperty,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,d=(n,i,r)=>i in n?b(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r,s=(n,i)=>{for(var r in i||(i={}))h.call(i,r)&&d(n,r,i[r]);if(c)for(var r of c(i))E.call(i,r)&&d(n,r,i[r]);return n},g=(n,i)=>{var r={};for(var l in n)h.call(n,l)&&i.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&c)for(var l of c(n))i.indexOf(l)<0&&E.call(n,l)&&(r[l]=n[l]);return r};const D=n=>{var i=n,{children:r}=i,l=g(i,["children"]);const{expanded:p,id:y}=(0,u.A)();if(!p)return null;const _=`accordion-content-${y}`,o=`accordion-label-${y}`,v=`accordion-desc-${y}`;return t.createElement(m.x,s({role:"region",id:_,"aria-labelledby":o,"aria-describedby":v},l),r)};D.propTypes={children:a.node.isRequired}},13819:(T,P,e)=>{"use strict";e.d(P,{A:()=>u,S:()=>a});var t=e(67294);const a=(0,t.createContext)(),u=()=>(0,t.useContext)(a)},74756:(T,P,e)=>{"use strict";e.d(P,{B:()=>x});var t=e(67294),a=e(45697),u=e(12645),m=e(71893),b=e(39785),c=e(72735),h=e(48734),E=e(13819),d=e(46273),s=e(7681),g=e(52624);const D=({expanded:O,disabled:M,variant:C})=>{let B;return O?B="primary100":M?B="neutral150":C==="primary"?B="neutral0":B="neutral100",B};var n=e(25108),i=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,y=(O,M,C)=>M in O?i(O,M,{enumerable:!0,configurable:!0,writable:!0,value:C}):O[M]=C,_=(O,M)=>{for(var C in M||(M={}))l.call(M,C)&&y(O,C,M[C]);if(r)for(var C of r(M))p.call(M,C)&&y(O,C,M[C]);return O},o=(O,M)=>{var C={};for(var B in O)l.call(O,B)&&M.indexOf(B)<0&&(C[B]=O[B]);if(O!=null&&r)for(var B of r(O))M.indexOf(B)<0&&p.call(O,B)&&(C[B]=O[B]);return C};const v=(0,m.default)(b.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:O,expanded:M})=>M?O.colors.primary600:O.colors.neutral500};
    }
  }
`,f=(0,m.default)(d.k)`
  min-height: ${({theme:O,size:M})=>O.sizes.accordions[M]};
  border-radius: ${({theme:O,expanded:M})=>M?`${O.borderRadius} ${O.borderRadius} 0 0`:O.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:O})=>O.colors.primary600};
      }
    }
  }
`,x=O=>{var M=O,{title:C,description:B,as:I,togglePosition:K,action:$}=M,W=o(M,["title","description","as","togglePosition","action"]);const U=(0,t.useRef)(null),{onToggle:S,toggle:w,expanded:R,id:L,size:A,variant:G,disabled:j}=(0,E.A)(),J=`accordion-content-${L}`,Z=`accordion-label-${L}`,X=`accordion-desc-${L}`,F=A==="M"?6:4,z=A==="M"?F:F-2,Y=D({expanded:R,disabled:j,variant:G}),Q={as:I,fontWeight:A==="S"?"bold":void 0,id:Z,textColor:R?"primary600":"neutral700",ellipsis:!0,variant:A==="M"?"delta":void 0},k=R?"primary600":"neutral600",q=R?"primary200":"neutral200",N=A==="M"?`${32/16}rem`:`${24/16}rem`,ee=()=>{j||(w&&!S?(n.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),w()):S())},H=t.createElement(d.k,{justifyContent:"center",borderRadius:"50%",height:N,width:N,transform:R?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,disabled:j,"aria-hidden":!0,as:"span",background:q,cursor:j?"not-allowed":"pointer",onClick:()=>{var V;return(V=U==null?void 0:U.current)==null?void 0:V.click()},shrink:0},t.createElement(g.J,{as:u.default,width:A==="M"?`${11/16}rem`:`${8/16}rem`,color:R?"primary600":"neutral600"}));return t.createElement(f,{paddingBottom:z,paddingLeft:F,paddingRight:F,paddingTop:z,background:Y,expanded:R,size:A,justifyContent:"space-between",cursor:j?"not-allowed":""},t.createElement(s.K,{horizontal:!0,spacing:3,flex:1,maxWidth:"100%"},K==="left"&&H,t.createElement(v,_({ref:U,onClick:ee,"aria-disabled":j,"aria-expanded":R,"aria-controls":J,"aria-labelledby":Z,"data-strapi-accordion-toggle":!0,expanded:R,type:"button",flex:1,minWidth:0},W),t.createElement(t.Fragment,null,t.createElement(h.y,_({},Q),C),B&&t.createElement(c.Z,{as:"p",id:X,textColor:k},B))),K==="right"&&t.createElement(s.K,{horizontal:!0,spacing:3},H,$),K==="left"&&$))};x.defaultProps={action:void 0,as:"span",description:void 0,variant:"primary",togglePosition:"right"},x.propTypes={action:a.node,as:a.string,description:a.string,title:a.string.isRequired,togglePosition:a.oneOf(["right","left"]),variant:a.oneOf(["primary","secondary"])}},2407:(T,P,e)=>{"use strict";e.d(P,{$:()=>p,O:()=>_});var t=e(67294),a=e(45697),u=e(71893),m=e(16405),b=e(72735),c=e(35961),h=e(46273),E=e(63237),d=Object.defineProperty,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,n=(o,v,f)=>v in o?d(o,v,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[v]=f,i=(o,v)=>{for(var f in v||(v={}))g.call(v,f)&&n(o,f,v[f]);if(s)for(var f of s(v))D.call(v,f)&&n(o,f,v[f]);return o},r=(o,v)=>{var f={};for(var x in o)g.call(o,x)&&v.indexOf(x)<0&&(f[x]=o[x]);if(o!=null&&s)for(var x of s(o))v.indexOf(x)<0&&D.call(o,x)&&(f[x]=o[x]);return f};const l=(0,u.default)(h.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }
  :last-of-type ${c.x} {
    display: none;
  }
  :last-of-type ${b.Z} {
    color: ${({theme:o})=>o.colors.neutral800};
    font-weight: ${({theme:o})=>o.fontWeights.bold};
  }
`,p=({children:o})=>t.createElement(l,{inline:!0,as:"li"},t.createElement(b.Z,{variant:"pi",textColor:"neutral600"},o),t.createElement(c.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},t.createElement(m.default,null)));p.displayName="Crumb",p.propTypes={children:a.node.isRequired};const y=a.shape({type:a.oneOf([p])}),_=o=>{var v=o,{children:f,label:x}=v,O=r(v,["children","label"]);return t.createElement(h.k,i({},O),t.createElement(E.T,null,x),t.createElement("ol",{"aria-hidden":!0},f))};_.displayName="Breadcrumbs",_.propTypes={children:a.oneOfType([a.arrayOf(y),y]).isRequired,label:a.string.isRequired}},36989:(T,P,e)=>{"use strict";e.d(P,{Z:()=>E});var t=e(67294),a=e(45697),u=e(71893),m=e(35961),b=e(46273);const c=(0,u.default)(b.k)`
  & > * + * {
    margin-left: ${({theme:d})=>d.spaces[2]};
  }

  margin-left: ${({pullRight:d})=>d?"auto":void 0};
`,h=(0,u.default)(c)`
  flex-shrink: 0;
`,E=({startActions:d,endActions:s})=>d||s?t.createElement(m.x,{paddingLeft:10,paddingRight:10},t.createElement(m.x,{paddingBottom:4},t.createElement(b.k,{justifyContent:"space-between",alignItems:"flex-start"},d&&t.createElement(c,{wrap:"wrap"},d),s&&t.createElement(h,{pullRight:!0},s)))):null;E.defaultProps={endActions:void 0,startActions:void 0},E.propTypes={endActions:a.node,startActions:a.node}},53192:(T,P,e)=>{"use strict";e.d(P,{m:()=>i});var t=e(67294),a=e(71893),u=e(45697),m=e(11276),b=Object.defineProperty,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,d=(r,l,p)=>l in r?b(r,l,{enumerable:!0,configurable:!0,writable:!0,value:p}):r[l]=p,s=(r,l)=>{for(var p in l||(l={}))h.call(l,p)&&d(r,p,l[p]);if(c)for(var p of c(l))E.call(l,p)&&d(r,p,l[p]);return r},g=(r,l)=>{var p={};for(var y in r)h.call(r,y)&&l.indexOf(y)<0&&(p[y]=r[y]);if(r!=null&&c)for(var y of c(r))l.indexOf(y)<0&&E.call(r,y)&&(p[y]=r[y]);return p};const D=`${232/16}rem`,n=(0,a.default)(m.r)`
  width: ${D};
  background: ${({theme:r})=>r.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:r})=>r.colors.neutral200};
  z-index: 1;
`,i=r=>{var l=r,{ariaLabel:p}=l,y=g(l,["ariaLabel"]);return t.createElement(n,s({"aria-label":p,as:"nav"},y))};i.propTypes={ariaLabel:u.string.isRequired}},38702:(T,P,e)=>{"use strict";e.d(P,{p:()=>l});var t=e(67294),a=e(45697),u=e(71893),m=e(97184),b=e(46273),c=e(72735),h=e(12028),E=e(35961),d=e(70004),s=e(49123),g=e(8509),D=e(41762);const n=p=>{const y=(0,t.useRef)();return(0,t.useEffect)(()=>{y.current=p}),y.current};var i=e(7801);const r=(0,u.default)(d.i)`
  width: ${24/16}rem;
  background-color: ${({theme:p})=>p.colors.neutral200};
`,l=({as:p,label:y,searchLabel:_,searchable:o,onChange:v,value:f,onClear:x,onSubmit:O,id:M})=>{const[C,B]=(0,t.useState)(!1),I=n(C),K=(0,D.M)("subnav-searchbar-clear",M),$=(0,t.useRef)(),W=(0,t.useRef)();(0,t.useEffect)(()=>{C&&$.current&&$.current.focus(),I&&!C&&W.current&&W.current.focus()},[C,I]);const U=()=>{B(L=>!L)},S=L=>{x(L),$.current.focus()},w=L=>{var A;((A=L.relatedTarget)==null?void 0:A.id)!==K&&B(!1)},R=L=>{L.key===i.y.ESCAPE&&B(!1)};return C?t.createElement(E.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},t.createElement(g.U,null,t.createElement(s.w,{name:"searchbar",value:f,onChange:v,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:R,ref:$,onBlur:w,onClear:S,onSubmit:O,clearLabel:"Clear",size:"S"},_)),t.createElement(E.x,{paddingLeft:2,paddingTop:4},t.createElement(r,null))):t.createElement(E.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},t.createElement(b.k,{justifyContent:"space-between",alignItems:"flex-start"},t.createElement(c.Z,{variant:"beta",as:p},y),o&&t.createElement(h.h,{ref:W,onClick:U,label:_,icon:t.createElement(m.default,null)})),t.createElement(E.x,{paddingTop:4},t.createElement(r,null)))};l.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},l.propTypes={as:a.string,id:a.string,label:a.string.isRequired,onChange:a.func,onClear:a.func,onSubmit:a.func,searchLabel:a.string,searchable:a.bool,value:a.string}},52305:(T,P,e)=>{"use strict";e.d(P,{E:()=>_});var t=e(67294),a=e(45697),u=e(71893),m=e(71818),b=e(35961),c=e(72735),h=e(46273),E=e(63507),d=Object.defineProperty,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,n=(o,v,f)=>v in o?d(o,v,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[v]=f,i=(o,v)=>{for(var f in v||(v={}))g.call(v,f)&&n(o,f,v[f]);if(s)for(var f of s(v))D.call(v,f)&&n(o,f,v[f]);return o},r=(o,v)=>{var f={};for(var x in o)g.call(o,x)&&v.indexOf(x)<0&&(f[x]=o[x]);if(o!=null&&s)for(var x of s(o))v.indexOf(x)<0&&D.call(o,x)&&(f[x]=o[x]);return f};const l=(0,u.default)(b.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:o})=>o.colors.neutral800};
  svg > * {
    fill: ${({theme:o})=>o.colors.neutral600};
  }

  &.active {
    ${({theme:o})=>`
      background-color: ${o.colors.primary100};
      border-right: 2px solid ${o.colors.primary600};
      svg > * {
        fill: ${o.colors.primary700};
      }
      ${c.Z} {
        color: ${o.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,p=(0,u.default)(m.default)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:o,$active:v})=>v?o.colors.primary600:o.colors.neutral600};
  }
`,y=u.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,_=t.forwardRef((o,v)=>{var f=o,{children:x,icon:O,withBullet:M,as:C,isSubSectionChild:B}=f,I=r(f,["children","icon","withBullet","as","isSubSectionChild"]);return t.createElement(l,i({as:C,icon:O,background:"neutral100",paddingLeft:B?9:7,paddingBottom:2,paddingTop:2,ref:v},I),t.createElement(h.k,null,O?t.createElement(y,null,O):t.createElement(p,null),t.createElement(b.x,{paddingLeft:2},t.createElement(c.Z,{as:"span"},x))),M&&t.createElement(b.x,{as:h.k,paddingRight:4},t.createElement(p,{$active:!0})))});_.displayName="SubNavLink",_.defaultProps={as:E.f,icon:null,isSubSectionChild:!1,withBullet:!1},_.propTypes={as:a.elementType,children:a.node.isRequired,icon:a.element,isSubSectionChild:a.bool,withBullet:a.bool}},29489:(T,P,e)=>{"use strict";e.d(P,{D:()=>r});var t=e(67294),a=e(45697),u=e(71893),m=e(35961),b=e(30190),c=e(7681),h=e(12645),E=e(72735),d=e(46273);const s=(0,u.default)(d.k)`
  border: none;
  padding: 0;
  background: transparent;
`,g=u.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:l})=>l?"0deg":"180deg"});
`,D=({collapsable:l,label:p,onClick:y,ariaExpanded:_,ariaControls:o})=>l?t.createElement(s,{as:"button",onClick:y,"aria-expanded":_,"aria-controls":o,textAlign:"left"},t.createElement(m.x,{paddingRight:1},t.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},p)),l&&t.createElement(g,{rotated:_},t.createElement(h.default,{"aria-hidden":!0}))):t.createElement(s,null,t.createElement(m.x,{paddingRight:1},t.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},p)));D.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},D.propTypes={ariaControls:a.string,ariaExpanded:a.bool,collapsable:a.bool,label:a.string.isRequired,onClick:a.func};var n=e(41762);const i=(0,u.default)(m.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:l})=>l.colors.neutral500};
    }
  }
`,r=({collapsable:l,label:p,badgeLabel:y,children:_,id:o})=>{const[v,f]=(0,t.useState)(!0),x=(0,n.M)("subnav-list",o),O=()=>{f(M=>!M)};return t.createElement(c.K,{spacing:1},t.createElement(i,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},t.createElement(m.x,{position:"relative",paddingRight:y?6:0},t.createElement(D,{onClick:O,ariaExpanded:v,ariaControls:x,collapsable:l,label:p}),y&&t.createElement(b.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},y))),(!l||v)&&t.createElement("ol",{id:x},t.Children.map(_,(M,C)=>t.createElement("li",{key:C},M))))};r.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},r.propTypes={badgeLabel:a.string,children:a.node.isRequired,collapsable:a.bool,id:a.string,label:a.string.isRequired}},34446:(T,P,e)=>{"use strict";e.d(P,{Z:()=>D});var t=e(67294),a=e(45697),u=e(7681),m=e(35961),b=Object.defineProperty,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,d=(n,i,r)=>i in n?b(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r,s=(n,i)=>{for(var r in i||(i={}))h.call(i,r)&&d(n,r,i[r]);if(c)for(var r of c(i))E.call(i,r)&&d(n,r,i[r]);return n},g=(n,i)=>{var r={};for(var l in n)h.call(n,l)&&i.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&c)for(var l of c(n))i.indexOf(l)<0&&E.call(n,l)&&(r[l]=n[l]);return r};const D=n=>{var i=n,{children:r}=i,l=g(i,["children"]);return t.createElement(m.x,{paddingTop:2,paddingBottom:4},t.createElement(u.K,s({as:"ol",spacing:2},l),t.Children.map(r,(p,y)=>t.createElement("li",{key:y},p))))};D.propTypes={children:a.node.isRequired}},67109:(T,P,e)=>{"use strict";e.d(P,{Z:()=>E});var t=e(67294),a=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,c=(d,s,g)=>s in d?a(d,s,{enumerable:!0,configurable:!0,writable:!0,value:g}):d[s]=g,h=(d,s)=>{for(var g in s||(s={}))m.call(s,g)&&c(d,g,s[g]);if(u)for(var g of u(s))b.call(s,g)&&c(d,g,s[g]);return d};function E(d){return t.createElement("svg",h({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),t.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}},71818:(T,P,e)=>{"use strict";e.r(P),e.d(P,{default:()=>E});var t=e(67294),a=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,c=(d,s,g)=>s in d?a(d,s,{enumerable:!0,configurable:!0,writable:!0,value:g}):d[s]=g,h=(d,s)=>{for(var g in s||(s={}))m.call(s,g)&&c(d,g,s[g]);if(u)for(var g of u(s))b.call(s,g)&&c(d,g,s[g]);return d};function E(d){return t.createElement("svg",h({width:"1em",height:"1em",viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),t.createElement("rect",{width:4,height:4,rx:2,fill:"#A5A5BA"}))}}}]);
