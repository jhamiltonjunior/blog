"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3650],{62694:(te,K,t)=>{t.r(K),t.d(K,{default:()=>ea});var e=t(67294),R=t(15482),s=t(97132),d=t(68547),o=t(39844),D=t(71893),U=t(49656),F=t(17034),h=t(36989),b=t(49066),S=t(185),w=t(35961),O=t(70004),L=t(41451),B=t(63237),W=t(12028),H=t(72735),J=t(74571),i=t(46273),C=t(4585),P=t(33012),N=t(78971),X=t(59771),l=t(6277),c=t(9383),u=t(27954),m=t(73817),j=t(44466),$=t(45697),f=t.n($);const ae=({pagination:r})=>e.createElement(w.x,{paddingTop:6},e.createElement(i.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(d.PageSizeURLQuery,null),e.createElement(d.PaginationURLQuery,{pagination:r})));ae.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ae.propTypes={pagination:f().shape({page:f().number,pageCount:f().number,pageSize:f().number,total:f().number})};var me=t(31817),fe=t(42047),ne=t(7681),Z=t(49826),_e=t(15537),_=t(29728),et=t(20022),tt=t(2967),at=(r,a,n)=>new Promise((y,v)=>{var E=p=>{try{g(n.next(p))}catch(I){v(I)}},A=p=>{try{g(n.throw(p))}catch(I){v(I)}},g=p=>p.done?y(p.value):Promise.resolve(p.value).then(E,A);g((n=n.apply(r,a)).next())});const Ae=({selected:r,onSuccess:a})=>{const{formatMessage:n}=(0,s.useIntl)(),[y,v]=(0,e.useState)(!1),{isLoading:E,remove:A}=(0,tt.K)(),g=()=>at(void 0,null,function*(){yield A(r),a()});return e.createElement(e.Fragment,null,e.createElement(_.z,{variant:"danger-light",size:"S",startIcon:e.createElement(et.default,null),onClick:()=>v(!0)},n({id:"global.delete",defaultMessage:"Delete"})),e.createElement(d.ConfirmDialog,{isConfirmButtonLoading:E,isOpen:y,onToggleDialog:()=>v(!1),onConfirm:g}))};Ae.propTypes={selected:f().arrayOf(Z.pw,Z.nx).isRequired,onSuccess:f().func.isRequired};var nt=t(32605),rt=t(80831),ot=t(41609),lt=t.n(ot),st=t(11276),it=t(88655),Be=t(42866),De=t(59946),dt=t(24969),ct=t(36856),ut=t(64777),Ie=t(23724),pe=t(55994),mt=Object.defineProperty,ft=Object.defineProperties,pt=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,xe=(r,a,n)=>a in r?mt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,Te=(r,a)=>{for(var n in a||(a={}))vt.call(a,n)&&xe(r,n,a[n]);if(Re)for(var n of Re(a))gt.call(a,n)&&xe(r,n,a[n]);return r},Fe=(r,a)=>ft(r,pt(a));const Et=()=>{const r=(0,d.useNotification)(),a=(0,Ie.useQueryClient)(),n=(0,o.IF)("actions/bulk-move"),y=({destinationFolderId:A,filesAndFolders:g})=>{const p=g.reduce((I,Q)=>{const{id:z,type:x}=Q,V=x==="asset"?"fileIds":"folderIds";return I[V]||(I[V]=[]),I[V].push(z),I},{});return o.be.post(n,Fe(Te({},p),{destinationFolderId:A}))},v=(0,Ie.useMutation)(y,{onSuccess(A){var g;const{data:{data:p}}=A;((g=p==null?void 0:p.files)==null?void 0:g.length)>0&&(a.refetchQueries([pe.Z,"assets"],{active:!0}),a.refetchQueries([pe.Z,"asset-count"],{active:!0})),a.refetchQueries([pe.Z,"folders"],{active:!0}),r({type:"success",message:{id:(0,o.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}}),E=(A,g)=>v.mutateAsync({destinationFolderId:A,filesAndFolders:g});return Fe(Te({},v),{move:E})};var yt=t(66951),ht=t(20796),Ot=(r,a,n)=>new Promise((y,v)=>{var E=p=>{try{g(n.next(p))}catch(I){v(I)}},A=p=>{try{g(n.throw(p))}catch(I){v(I)}},g=p=>p.done?y(p.value):Promise.resolve(p.value).then(E,A);g((n=n.apply(r,a)).next())});const ve=({onClose:r,selected:a,currentFolder:n})=>{const{formatMessage:y}=(0,s.useIntl)(),{data:v,isLoading:E}=(0,ht.v)(),{move:A}=Et();if(!v)return null;const g=(Q,z)=>Ot(void 0,[Q,z],function*(x,{setErrors:V}){try{yield A(x.destination.value,a),r()}catch(de){const T=(0,d.getAPIInnerErrors)(de,{getTrad:o.OB}),oe=Object.entries(T).reduce((ee,[G,Oe])=>(ee[G||"destination"]=Oe.defaultMessage,ee),{});lt()(oe)||V(oe)}}),p=()=>{r()};if(E)return e.createElement(Be.P,{onClose:p,labelledBy:"title"},e.createElement(De.f,null,e.createElement(i.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(it.a,null,y({id:(0,o.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const I={destination:{value:(n==null?void 0:n.id)||"",label:(n==null?void 0:n.name)||v[0].label}};return e.createElement(Be.P,{onClose:p,labelledBy:"title"},e.createElement(rt.Formik,{validateOnChange:!1,onSubmit:g,initialValues:I},({values:Q,errors:z,setFieldValue:x})=>e.createElement(d.Form,{noValidate:!0},e.createElement(dt.x,null,e.createElement(H.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},y({id:(0,o.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(De.f,null,e.createElement(st.r,{gap:4},e.createElement(J.P,{xs:12,col:12},e.createElement(ne.K,{spacing:1},e.createElement(ut.Q,{htmlFor:"folder-destination"},y({id:(0,o.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(yt.Z,{options:v,onChange:V=>{x("destination",V)},defaultValue:Q.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:z==null?void 0:z.destination,ariaErrorMessage:"destination-error"}),z.destination&&e.createElement(H.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},z.destination))))),e.createElement(ct.m,{startActions:e.createElement(_.z,{onClick:p,variant:"tertiary",name:"cancel"},y({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.z,{type:"submit",loading:E},y({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};ve.defaultProps={currentFolder:void 0},ve.propTypes={onClose:f().func.isRequired,currentFolder:Z.nx,selected:f().arrayOf(Z.nx,Z.pw).isRequired};const ge=({selected:r,onSuccess:a,currentFolder:n})=>{const{formatMessage:y}=(0,s.useIntl)(),[v,E]=(0,e.useState)(!1),A=()=>{E(!1),a()};return e.createElement(e.Fragment,null,e.createElement(_.z,{variant:"secondary",size:"S",startIcon:e.createElement(nt.Z,null),onClick:()=>E(!0)},y({id:"global.move",defaultMessage:"Move"})),v&&e.createElement(ve,{currentFolder:n,onClose:A,selected:r}))};ge.defaultProps={currentFolder:void 0},ge.propTypes={onSuccess:f().func.isRequired,currentFolder:Z.nx,selected:f().arrayOf(Z.pw,Z.nx).isRequired};const Ee=({selected:r,onSuccess:a,currentFolder:n})=>{const{formatMessage:y}=(0,s.useIntl)();return e.createElement(ne.K,{horizontal:!0,spacing:2,paddingBottom:5},e.createElement(H.Z,{variant:"epsilon",textColor:"neutral600"},y({id:(0,_e.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:r.filter(({type:v})=>v==="folder").length,numberAssets:r.filter(({type:v})=>v==="asset").length})),e.createElement(Ae,{selected:r,onSuccess:a}),e.createElement(ge,{currentFolder:n,selected:r,onSuccess:a}))};Ee.defaultProps={currentFolder:void 0},Ee.propTypes={onSuccess:f().func.isRequired,currentFolder:Z.nx,selected:f().arrayOf(Z.pw,Z.nx).isRequired};var le=t(98101),Pt=t(89597),Mt=t(51386),bt=t(45219),Se=t(97581);const Lt=()=>{var r;const a=(0,e.useRef)(null),[n,y]=(0,e.useState)(!1),{formatMessage:v}=(0,s.useIntl)(),{trackUsage:E}=(0,d.useTracking)(),[{query:A},g]=(0,d.useQueryParams)(),p=((r=A==null?void 0:A.filters)==null?void 0:r.$and)||[],I=()=>y(x=>!x),Q=x=>{g({filters:{$and:x},page:1})},z=x=>{E("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(x[x.length-1])[0]}),g({filters:{$and:x},page:1})};return e.createElement(e.Fragment,null,e.createElement(_.z,{variant:"tertiary",ref:a,startIcon:e.createElement(Pt.Z,null),onClick:I,size:"S"},v({id:"app.utils.filters",defaultMessage:"Filters"})),n&&e.createElement(bt.Z,{displayedFilters:Se.Z,filters:p,onSubmit:z,onToggle:I,source:a}),e.createElement(Mt.Z,{appliedFilters:p,filtersSchema:Se.Z,onRemoveFilter:Q}))};var Ct=t(80129),At=t(67838),Bt=t(23620),Dt=t(67109),ye=t(96315),It=t(67851),Rt=Object.defineProperty,xt=Object.defineProperties,Tt=Object.getOwnPropertyDescriptors,je=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,Ue=(r,a,n)=>a in r?Rt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,jt=(r,a)=>{for(var n in a||(a={}))Ft.call(a,n)&&Ue(r,n,a[n]);if(je)for(var n of je(a))St.call(a,n)&&Ue(r,n,a[n]);return r},Ut=(r,a)=>xt(r,Tt(a));const he=({breadcrumbs:r,canCreate:a,folder:n,onToggleEditFolderDialog:y,onToggleUploadAssetDialog:v})=>{var E,A;const{formatMessage:g}=(0,s.useIntl)(),{pathname:p}=(0,U.useLocation)(),[{query:I}]=(0,d.useQueryParams)(),Q=Ut(jt({},I),{folder:(A=(E=n==null?void 0:n.parent)==null?void 0:E.id)!=null?A:void 0});return e.createElement(At.T,{title:g({id:(0,o.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:r&&n&&e.createElement(It.O,{as:"nav",label:g({id:(0,o.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:r,currentFolderId:n==null?void 0:n.id}),navigationAction:n&&e.createElement(Bt.r,{startIcon:e.createElement(Dt.Z,null),to:`${p}?${(0,Ct.stringify)(Q,{encode:!1})}`},g({id:(0,o.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:a&&e.createElement(ne.K,{horizontal:!0,spacing:2},e.createElement(_.z,{startIcon:e.createElement(ye.default,null),variant:"secondary",onClick:y},g({id:(0,o.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(_.z,{startIcon:e.createElement(ye.default,null),onClick:v},g({id:(0,o.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};he.defaultProps={breadcrumbs:!1,folder:null},he.propTypes={breadcrumbs:f().oneOfType([Z.Fv,f().bool]),canCreate:f().bool.isRequired,folder:Z.nx,onToggleEditFolderDialog:f().func.isRequired,onToggleUploadAssetDialog:f().func.isRequired};var Wt=t(65169),Kt=t(70088),Nt=Object.defineProperty,Zt=Object.defineProperties,Ht=Object.getOwnPropertyDescriptors,We=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,Ke=(r,a,n)=>a in r?Nt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,wt=(r,a)=>{for(var n in a||(a={}))zt.call(a,n)&&Ke(r,n,a[n]);if(We)for(var n of We(a))$t.call(a,n)&&Ke(r,n,a[n]);return r},Qt=(r,a)=>Zt(r,Ht(a));const Vt=({isFiltering:r,canCreate:a,canRead:n})=>r?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:n?a?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Ne=({canCreate:r,isFiltering:a,canRead:n,onActionClick:y})=>{const{formatMessage:v}=(0,s.useIntl)(),E=Vt({isFiltering:a,canCreate:r,canRead:n});return e.createElement(Kt.i,{icon:n?null:Wt.default,action:r&&!a&&e.createElement(_.z,{variant:"secondary",startIcon:e.createElement(ye.default,null),onClick:y},v({id:(0,o.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:v(Qt(wt({},E),{id:(0,o.OB)(E.id)}))})};Ne.propTypes={canCreate:f().bool.isRequired,canRead:f().bool.isRequired,isFiltering:f().bool.isRequired,onActionClick:f().func.isRequired};var Gt=Object.defineProperty,Jt=Object.defineProperties,Xt=Object.getOwnPropertyDescriptors,Ze=Object.getOwnPropertySymbols,Yt=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable,He=(r,a,n)=>a in r?Gt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,se=(r,a)=>{for(var n in a||(a={}))Yt.call(a,n)&&He(r,n,a[n]);if(Ze)for(var n of Ze(a))kt.call(a,n)&&He(r,n,a[n]);return r},ie=(r,a)=>Jt(r,Xt(a));const qt=(0,D.default)(w.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,ze=(0,D.default)(H.Z)`
  max-width: 100%;
`,_t=()=>{var r,a,n,y;const{push:v}=(0,U.useHistory)(),{canRead:E,canCreate:A,canUpdate:g,canCopyLink:p,canDownload:I,isLoading:Q}=(0,me.y)(),z=(0,e.useRef)(),{formatMessage:x}=(0,s.useIntl)(),{pathname:V}=(0,U.useLocation)(),{trackUsage:de}=(0,d.useTracking)(),[{query:T},oe]=(0,d.useQueryParams)(),ee=Boolean(T._q||T.filters),{data:G,isLoading:Oe,errors:ta}=(0,m.L)({skipWhen:!E,query:T}),{data:ce,isLoading:aa,errors:na}=(0,j.j)({enabled:E&&((r=G==null?void 0:G.pagination)==null?void 0:r.page)===1&&!(0,o.rV)(T),query:T}),{data:Pe,isLoading:$e,error:we}=(0,fe.W)(T==null?void 0:T.folder,{enabled:E&&!!(T!=null&&T.folder)});((a=we==null?void 0:we.response)==null?void 0:a.status)===404&&v(V);const Y=(ce==null?void 0:ce.length)||0,ue=G==null?void 0:G.results,k=(n=ue==null?void 0:ue.length)!=null?n:0,Qe=$e||aa||Q||Oe,[ra,oa]=(0,e.useState)(!1),[la,Ve]=(0,e.useState)(!1),[Ge,Je]=(0,e.useState)(void 0),[Me,Xe]=(0,e.useState)(void 0),[q,{selectOne:be,selectAll:Ye}]=(0,d.useSelectionState)(["type","id"],[]),Le=()=>oa(M=>!M),ke=({created:M=!1}={})=>{M&&(T==null?void 0:T.page)!=="1"&&oe(ie(se({},T),{page:1})),Ve(re=>!re)},sa=M=>{de("didSortMediaLibraryElements",{location:"upload",sort:M}),oe({sort:M})},ia=M=>{Xe(M),Ve(!0)},da=M=>{Xe(null),ke(M),z.current&&z.current.focus()};return(0,d.useFocusWhenNavigate)(),e.createElement(F.A,null,e.createElement(S.o,{"aria-busy":Qe},e.createElement(he,{breadcrumbs:!$e&&(0,o.M4)(Pe,{pathname:V,query:T}),canCreate:A,onToggleEditFolderDialog:ke,onToggleUploadAssetDialog:Le,folder:Pe}),e.createElement(h.Z,{startActions:e.createElement(e.Fragment,null,g&&(k>0||Y>0)&&e.createElement(qt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(L.C,{"aria-label":x({id:(0,o.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:(q==null?void 0:q.length)>0&&(q==null?void 0:q.length)!==k+Y,value:(k>0||Y>0)&&q.length===k+Y,onChange:M=>{M.target.checked&&de("didSelectAllMediaLibraryElements"),Ye([...ue.map(re=>ie(se({},re),{type:"asset"})),...ce.map(re=>ie(se({},re),{type:"folder"}))])}})),E&&e.createElement(u.Z,{onChangeSort:sa}),E&&e.createElement(Lt,null)),endActions:e.createElement(d.SearchURLQuery,{label:x({id:(0,o.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})}),e.createElement(b.D,null,q.length>0&&e.createElement(Ee,{currentFolder:Pe,selected:q,onSuccess:Ye}),Qe&&e.createElement(d.LoadingIndicatorPage,null),(ta||na)&&e.createElement(d.AnErrorOccurred,null),Y===0&&k===0&&e.createElement(Ne,{canCreate:A,canRead:E,isFiltering:ee,onActionClick:Le}),E&&e.createElement(e.Fragment,null,Y>0&&e.createElement(c.$,{title:(ee&&k>0||!ee)&&x({id:(0,o.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:Y})||""},ce.map(M=>{const ca=!!q.filter(({type:Ce})=>Ce==="folder").find(Ce=>Ce.id===M.id),qe=(0,o.Km)(V,T,M);return e.createElement(J.P,{col:3,key:`folder-${M.id}`},e.createElement(le.Ac,{ref:Me&&M.id===Me.id?z:void 0,ariaLabel:M.name,id:`folder-${M.id}`,to:qe,startAction:be&&e.createElement(le.MM,{"data-testid":`folder-checkbox-${M.id}`,value:ca,onChange:()=>be(ie(se({},M),{type:"folder"}))}),cardActions:e.createElement(W.h,{icon:e.createElement(C.Z,null),"aria-label":x({id:(0,o.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>ia(M)})},e.createElement(le.Bu,null,e.createElement(le.u6,{to:qe},e.createElement(i.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(ze,{fontWeight:"semiBold",ellipsis:!0},M.name,e.createElement(B.T,null,":")),e.createElement(ze,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},x({id:(0,o.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:M.children.count,filesCount:M.files.count})))))))})),k>0&&Y>0&&e.createElement(w.x,{paddingTop:6,paddingBottom:4},e.createElement(O.i,null)),k>0&&e.createElement(e.Fragment,null,e.createElement(l.l,{assets:ue,onEditAsset:Je,onSelectAsset:be,selectedAssets:q.filter(({type:M})=>M==="asset"),title:(!ee||ee&&Y>0)&&((y=G==null?void 0:G.pagination)==null?void 0:y.page)===1&&x({id:(0,o.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:k})||""}),(G==null?void 0:G.pagination)&&e.createElement(ae,{pagination:G.pagination}))))),ra&&e.createElement(P.x,{onClose:Le,trackedLocation:"upload",folderId:T==null?void 0:T.folder}),la&&e.createElement(N.f,{onClose:da,folder:Me,parentFolderId:T==null?void 0:T.folder,location:"upload"}),Ge&&e.createElement(X.s,{onClose:()=>Je(void 0),asset:Ge,canUpdate:g,canCopyLink:p,canDownload:I,trackedLocation:"upload"}))},ea=()=>{const[{rawQuery:r},a]=(0,d.useQueryParams)(),{formatMessage:n}=(0,s.useIntl)(),y=n({id:(0,o.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{r||a({sort:"updatedAt:DESC",page:1,pageSize:10})},[r,a]),r?e.createElement(e.Fragment,null,e.createElement(R.Helmet,{title:y}),e.createElement(_t,null)):null}},36989:(te,K,t)=>{t.d(K,{Z:()=>F});var e=t(67294),R=t(45697),s=t(71893),d=t(35961),o=t(46273);const D=(0,s.default)(o.k)`
  & > * + * {
    margin-left: ${({theme:h})=>h.spaces[2]};
  }

  margin-left: ${({pullRight:h})=>h?"auto":void 0};
`,U=(0,s.default)(D)`
  flex-shrink: 0;
`,F=({startActions:h,endActions:b})=>h||b?e.createElement(d.x,{paddingLeft:10,paddingRight:10},e.createElement(d.x,{paddingBottom:4},e.createElement(o.k,{justifyContent:"space-between",alignItems:"flex-start"},h&&e.createElement(D,{wrap:"wrap"},h),b&&e.createElement(U,{pullRight:!0},b)))):null;F.defaultProps={endActions:void 0,startActions:void 0},F.propTypes={endActions:R.node,startActions:R.node}},49066:(te,K,t)=>{t.d(K,{D:()=>d});var e=t(67294),R=t(45697),s=t(35961);const d=({children:o})=>e.createElement(s.x,{paddingLeft:10,paddingRight:10},o);d.propTypes={children:R.node.isRequired}},67838:(te,K,t)=>{t.d(K,{T:()=>P});var e=t(67294),R=t(71893),s=t(45697),d=t(72735),o=t(35961),D=t(46273);const U=l=>{const c=(0,e.useRef)(null),[u,m]=(0,e.useState)(!0),j=([$])=>{m($.isIntersecting)};return(0,e.useEffect)(()=>{const $=c.current,f=new IntersectionObserver(j,l);return $&&f.observe(c.current),()=>{$&&f.disconnect()}},[c,l]),[c,u]};var F=t(98402);const h=(l,c)=>{const u=(0,F.useCallbackRef)(c);(0,e.useLayoutEffect)(()=>{const m=new ResizeObserver(u);return Array.isArray(l)?l.forEach(j=>{j.current&&m.observe(j.current)}):l.current&&m.observe(l.current),()=>{m.disconnect()}},[l,u])};var b=Object.defineProperty,S=Object.defineProperties,w=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,W=(l,c,u)=>c in l?b(l,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[c]=u,H=(l,c)=>{for(var u in c||(c={}))L.call(c,u)&&W(l,u,c[u]);if(O)for(var u of O(c))B.call(c,u)&&W(l,u,c[u]);return l},J=(l,c)=>S(l,w(c)),i=(l,c)=>{var u={};for(var m in l)L.call(l,m)&&c.indexOf(m)<0&&(u[m]=l[m]);if(l!=null&&O)for(var m of O(l))c.indexOf(m)<0&&B.call(l,m)&&(u[m]=l[m]);return u};const C=()=>{const l=(0,e.useRef)(null),[c,u]=(0,e.useState)(null),[m,j]=U({root:null,rootMargin:"0px",threshold:0});return h(m,()=>{m.current&&u(m.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{l.current&&u(l.current.getBoundingClientRect())},[l]),{containerRef:m,isVisible:j,baseHeaderLayoutRef:l,headerSize:c}},P=l=>{const{containerRef:c,isVisible:u,baseHeaderLayoutRef:m,headerSize:j}=C();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:j==null?void 0:j.height},ref:c},u&&e.createElement(X,H({ref:m},l))),!u&&e.createElement(X,J(H({},l),{sticky:!0,width:j==null?void 0:j.width})))};P.displayName="HeaderLayout";const N=(0,R.default)(o.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${l=>l.width}px;
  z-index: 4;
  box-shadow: ${({theme:l})=>l.shadows.tableShadow};
`,X=e.forwardRef((l,c)=>{var u=l,{navigationAction:m,primaryAction:j,secondaryAction:$,subtitle:f,title:ae,sticky:me,width:fe}=u,ne=i(u,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const Z=typeof f=="string";return me?e.createElement(N,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:fe,"data-strapi-header-sticky":!0},e.createElement(D.k,{justifyContent:"space-between"},e.createElement(D.k,null,m&&e.createElement(o.x,{paddingRight:3},m),e.createElement(o.x,null,e.createElement(d.Z,H({variant:"beta",as:"h1"},ne),ae),Z?e.createElement(d.Z,{variant:"pi",textColor:"neutral600"},f):f),$?e.createElement(o.x,{paddingLeft:4},$):null),e.createElement(D.k,null,j?e.createElement(o.x,{paddingLeft:2},j):void 0))):e.createElement(o.x,{ref:c,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0},m?e.createElement(o.x,{paddingBottom:2},m):null,e.createElement(D.k,{justifyContent:"space-between"},e.createElement(D.k,null,e.createElement(d.Z,H({as:"h1",variant:"alpha"},ne),ae),$?e.createElement(o.x,{paddingLeft:4},$):null),j),Z?e.createElement(d.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},f):f)});X.displayName="BaseHeaderLayout",X.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},X.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,sticky:s.bool,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired,width:s.number},P.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},P.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired}},17034:(te,K,t)=>{t.d(K,{A:()=>U});var e=t(67294),R=t(45697),s=t(71893),d=t(35961);const o=(0,s.default)(d.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:F})=>F?"auto 1fr":"1fr"};
`,D=(0,s.default)(d.x)`
  overflow-x: hidden;
`,U=({sideNav:F,children:h})=>e.createElement(o,{hasSideNav:Boolean(F)},F,e.createElement(D,{paddingBottom:10},h));U.defaultProps={sideNav:void 0},U.propTypes={children:R.node.isRequired,sideNav:R.node}},23620:(te,K,t)=>{t.d(K,{r:()=>J});var e=t(67294),R=t(45697),s=t(71893),d=t(17772),o=t(49656),D=t(72735),U=t(35961),F=t(15585),h=Object.defineProperty,b=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=(i,C,P)=>C in i?h(i,C,{enumerable:!0,configurable:!0,writable:!0,value:P}):i[C]=P,L=(i,C)=>{for(var P in C||(C={}))S.call(C,P)&&O(i,P,C[P]);if(b)for(var P of b(C))w.call(C,P)&&O(i,P,C[P]);return i},B=(i,C)=>{var P={};for(var N in i)S.call(i,N)&&C.indexOf(N)<0&&(P[N]=i[N]);if(i!=null&&b)for(var N of b(i))C.indexOf(N)<0&&w.call(i,N)&&(P[N]=i[N]);return P};const W=s.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:i})=>i?"none":void 0};
  color: ${({disabled:i,theme:C})=>i?C.colors.neutral600:C.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${D.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:i})=>i.colors.primary500};
  }

  &:active {
    color: ${({theme:i})=>i.colors.primary700};
  }

  ${F.BF};
`,H=(0,s.default)(U.x)`
  display: flex;
`,J=i=>{var C=i,{href:P,to:N,children:X,disabled:l,startIcon:c,endIcon:u}=C,m=B(C,["href","to","children","disabled","startIcon","endIcon"]);const j=P?"_blank":void 0,$=P?"noreferrer noopener":void 0;return e.createElement(W,L({as:N&&!l?o.NavLink:"a",target:j,rel:$,to:l?void 0:N,href:l?"#":P,disabled:l},m),c&&e.createElement(H,{as:"span","aria-hidden":!0,paddingRight:2},c),e.createElement(D.Z,null,X),u&&!P&&e.createElement(H,{as:"span","aria-hidden":!0,paddingLeft:2},u),P&&e.createElement(H,{as:"span","aria-hidden":!0,paddingLeft:2},e.createElement(d.default,null)))};J.displayName="Link",J.defaultProps={endIcon:void 0,href:void 0,to:void 0,disabled:!1,startIcon:void 0},J.propTypes={children:R.node.isRequired,disabled:R.bool,endIcon:R.element,href(i){if(!i.disabled&&!i.to&&!i.href)return new Error("href must be defined")},startIcon:R.element,to(i){if(!i.disabled&&!i.href&&!i.to)return new Error("to must be defined")}}},185:(te,K,t)=>{t.d(K,{o:()=>w});var e=t(67294),R=t(45697),s=t(71893),d=Object.defineProperty,o=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,F=(O,L,B)=>L in O?d(O,L,{enumerable:!0,configurable:!0,writable:!0,value:B}):O[L]=B,h=(O,L)=>{for(var B in L||(L={}))D.call(L,B)&&F(O,B,L[B]);if(o)for(var B of o(L))U.call(L,B)&&F(O,B,L[B]);return O},b=(O,L)=>{var B={};for(var W in O)D.call(O,W)&&L.indexOf(W)<0&&(B[W]=O[W]);if(O!=null&&o)for(var W of o(O))L.indexOf(W)<0&&U.call(O,W)&&(B[W]=O[W]);return B};const S=s.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,w=O=>{var L=O,{labelledBy:B}=L,W=b(L,["labelledBy"]);const H=B||"main-content-title";return e.createElement(S,h({"aria-labelledby":H,id:"main-content",tabIndex:-1},W))};w.defaultProps={labelledBy:void 0},w.propTypes={labelledBy:R.string}},67109:(te,K,t)=>{t.d(K,{Z:()=>F});var e=t(67294),R=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,D=(h,b,S)=>b in h?R(h,b,{enumerable:!0,configurable:!0,writable:!0,value:S}):h[b]=S,U=(h,b)=>{for(var S in b||(b={}))d.call(b,S)&&D(h,S,b[S]);if(s)for(var S of s(b))o.call(b,S)&&D(h,S,b[S]);return h};function F(h){return e.createElement("svg",U({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}}]);
