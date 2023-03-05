import{aS as Q,m as L,r as X}from"./base.ea2e1c8f.js";import{E as Z}from"./card.f6dde4d3.js";import{E as ee,a as te,b as oe,c as le,z as ae,f as ne,h as re,i as se}from"./zh-cn.945caf7e.js";/* empty css              *//* empty css            */import{E as ie,a as de}from"./select.985832ce.js";import"./scrollbar.b59d58bd.js";import{E as pe}from"./popper.b368ca5f.js";import{E as me,a as ue}from"./checkbox.ae72e815.js";import"./tooltip.f118fcb0.js";/* empty css                */import{_ as ce}from"./SvgIcon.3ad5772d.js";/* empty css                     */import{E as _e,a as fe}from"./form-item.2d30cfcf.js";/* empty css               */import{E as ge}from"./switch.a35872d6.js";import{u as he}from"./useLinkSetting.e09bf2f7.js";import{l as we}from"./admin-storage.1457b2b5.js";import{t as be}from"./vue3-clipboard.esm-bundler.34366eba.js";import{l as ve}from"./admin-setting.f81b0ebd.js";import{b as S}from"./route-block.9b0645f8.js";import{_ as ye}from"./plugin-vue_export-helper.21dcd24c.js";import{E as f}from"./request.1b18911b.js";import{E as Ve}from"./index.e933e8df.js";import{E as ke}from"./index.6a021637.js";import{W as Ee,r as g,o as Ce,a as h,f as y,h as e,e as a,p as r,u as s,k as xe,S as De,F as Le,y as Se,b as ze,t as w,U as Ue,V as Te,J as V}from"./index.544cacf2.js";import"./dayjs.min.bd36d86a.js";import"./index.e1fa80b6.js";import"./index.d4b985ac.js";import"./index.7fa0be7b.js";import"./event.3ec63147.js";import"./debounce.908227a6.js";import"./isEqual.eff0e513.js";import"./index.b0c6135b.js";import"./event.776e7e11.js";import"./scroll.691b983f.js";import"./validator.267e7406.js";import"./focus-trap.7fae4b98.js";import"./index.5cf4e3bb.js";import"./index.56aaff70.js";const z=c=>(Ue("data-v-397bd5eb"),c=c(),Te(),c),Ke={class:"zfile-admin-down-link"},Re={class:"flex justify-between"},Ae=z(()=>r("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," \u76F4\u94FE\u65E5\u5FD7 ",-1)),Fe={key:0,class:"flex space-x-1.5 justify-center items-center cursor-pointer"},Ie=z(()=>r("span",{class:"text-gray-400 text-sm font-bold"},"\u8BB0\u5F55\u4E0B\u8F7D\u65E5\u5FD7\uFF1A",-1)),Be={class:"mt-4"},Pe={class:"flex justify-between space-x-20"},Me={class:"text-gray-400"},Ne=V("\u67E5\u8BE2"),$e=V("\u6279\u91CF\u5220\u9664"),je={class:"space-x-2"},Ye=V("\u5220\u9664"),U={__name:"log",setup(c){const{data:b,saveData:T,saveLoading:qe}=he(),o=Ee({shortKey:"",storageKey:null,page:1,limit:10,path:"",ip:"",userAgent:"",referer:"",date:"",dateFrom:"",dateTo:"",total:0}),K=n=>{o.limit=n,o.page=1,p()},R=n=>{o.page=n,p()},k=g(),p=()=>{o.date instanceof Array?(o.dateFrom=o.date[0],o.dateTo=o.date[1]):(o.dateFrom="",o.dateTo=""),ne(o).then(n=>{k.value=n.data,o.total=n.dataCount})};Ce(()=>{p(),F(),A()});const E=g(),A=()=>{ve().then(n=>{E.value=n.data})},C=g(),F=()=>{we().then(n=>{C.value=n.data})},I=n=>{re(n).then(l=>{f.success("\u5220\u9664\u6210\u529F"),p()})},x=g(),B=()=>{let n=x.value.getSelectionRows();if(n.length===0){f.warning("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E");return}Ve.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u63D0\u793A",{type:"warning"}).then(()=>{let l=n.map(_=>_.id);se({ids:l}).then(_=>{f.success("\u5220\u9664\u6210\u529F"),p()})})};let P=n=>{be(n).then(()=>{f.success("\u590D\u5236\u6210\u529F")})},M=n=>{window.open(`${E.value.domain}/s/${n}`)};return(n,l)=>{const _=ge,N=ie,$=de,d=_e,m=ke,j=ee,v=X,Y=fe,i=me,q=pe,D=ce,H=te,J=ue,O=oe,W=le,G=Z;return h(),y("div",Ke,[e(G,null,{default:a(()=>[r("div",Re,[Ae,s(b)?(h(),y("div",Fe,[Ie,e(_,{onChange:s(T),"active-text":"\u662F","inline-prompt":"","inactive-text":"\u5426",modelValue:s(b).recordDownloadLog,"onUpdate:modelValue":l[0]||(l[0]=t=>s(b).recordDownloadLog=t)},null,8,["onChange","modelValue"])])):xe("",!0)]),r("div",Be,[e(Y,{inline:"",modelValue:o,"onUpdate:modelValue":l[8]||(l[8]=t=>De(o)?o.value=t:null)},{default:a(()=>[e(d,{label:"\u5B58\u50A8\u6E90"},{default:a(()=>[e($,{clearable:"",teleported:!1,modelValue:o.storageKey,"onUpdate:modelValue":l[1]||(l[1]=t=>o.storageKey=t)},{default:a(()=>[(h(!0),y(Le,null,Se(C.value,t=>(h(),ze(N,{key:t.id,label:t.name,value:t.key},{default:a(()=>[r("div",Pe,[r("span",null,w(t.name),1),r("span",Me,w(t.type.description),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u77ED\u94FE Key"},{default:a(()=>[e(m,{modelValue:o.shortKey,"onUpdate:modelValue":l[2]||(l[2]=t=>o.shortKey=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u6587\u4EF6\u540D"},{default:a(()=>[e(m,{modelValue:o.path,"onUpdate:modelValue":l[3]||(l[3]=t=>o.path=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u8BF7\u6C42 IP"},{default:a(()=>[e(m,{modelValue:o.ip,"onUpdate:modelValue":l[4]||(l[4]=t=>o.ip=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"UserAgent"},{default:a(()=>[e(m,{modelValue:o.userAgent,"onUpdate:modelValue":l[5]||(l[5]=t=>o.userAgent=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"Referer"},{default:a(()=>[e(m,{modelValue:o.referer,"onUpdate:modelValue":l[6]||(l[6]=t=>o.referer=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:a(()=>[e(j,{modelValue:o.date,"onUpdate:modelValue":l[7]||(l[7]=t=>o.date=t),type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss","default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)],"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue","default-time"])]),_:1}),e(d,null,{default:a(()=>[e(v,{type:"primary",icon:s(Q),onClick:p},{default:a(()=>[Ne]),_:1},8,["icon"])]),_:1})]),_:1},8,["modelValue"]),r("div",null,[e(v,{onClick:B,icon:s(L),type:"danger"},{default:a(()=>[$e]),_:1},8,["icon"])]),e(J,{ref_key:"linkTableRef",ref:x,size:"large",data:k.value},{default:a(()=>[e(i,{type:"selection",width:"55"}),e(i,{width:"120",label:"\u5B58\u50A8\u6E90\u540D\u79F0"},{default:a(t=>{var u;return[e(q,{content:(u=t.row.storageType)==null?void 0:u.description,placement:"right"},{default:a(()=>[r("span",null,w(t.row.storageName),1)]),_:2},1032,["content"])]}),_:1}),e(i,{"show-tooltip-when-overflow":"",prop:"shortKey",label:"\u77ED\u94FE key"},{default:a(t=>[r("div",je,[r("span",null,w(t.row.shortKey),1),e(D,{onClick:u=>s(P)(t.row.shortKey),class:"inline cursor-pointer",name:"copy"},null,8,["onClick"]),e(D,{onClick:u=>s(M)(t.row.shortKey),class:"inline cursor-pointer text-blue-500 text-sm",name:"target"},null,8,["onClick"])])]),_:1}),e(i,{"show-tooltip-when-overflow":"",prop:"path",label:"\u8DEF\u5F84"}),e(i,{width:"100","show-tooltip-when-overflow":"",prop:"ip",label:"\u8BF7\u6C42 ip"}),e(i,{width:"180","show-tooltip-when-overflow":"",prop:"userAgent",label:"UserAgent"}),e(i,{width:"150","show-tooltip-when-overflow":"",prop:"referer",label:"Referer"}),e(i,{width:"180",prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"}),e(i,{width:"120",label:"\u64CD\u4F5C"},{default:a(t=>[e(H,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664?",onConfirm:u=>I(t.row.id)},{reference:a(()=>[e(v,{icon:s(L),type:"danger"},{default:a(()=>[Ye]),_:1},8,["icon"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),e(W,{locale:s(ae)},{default:a(()=>[e(O,{class:"mt-3","page-size":o.limit,background:"",layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:R,onSizeChange:K,"current-page":o.page,"onUpdate:current-page":l[9]||(l[9]=t=>o.page=t),"default-current-page":10,"page-sizes":[10,50,100,200,1e3,99999999],total:o.total},null,8,["page-size","current-page","total"])]),_:1},8,["locale"])])]),_:1})])}}};typeof S=="function"&&S(U);var Tt=ye(U,[["__scopeId","data-v-397bd5eb"]]);export{Tt as default};