import{r as N,j as e,a as b,b as S,m as C}from"./index-DerKfh_i.js";import{C as V,a as W}from"./card-B6ouLRYl.js";import{u as $,s as k,o as L,a as _,F as O,b as d,c as m,d as x,e as u,f as h,g as H,h as g,k as K}from"./form-BqdHsX1y.js";import{D as z,b as q,d as G,e as J,f as X,T as Y,g as M,h as Q,i as Z,j as E,k as y,l as ee,m as j}from"./table-C4EX-m7M.js";import{I as T}from"./input-D3bTOU5h.js";import{M as se}from"./multi-select-D1bUAzzq.js";import{S as D,a as w,b as U,c as P,d as B}from"./select-pV0H3e33.js";import{W as F}from"./wallet-CRRMzm2R.js";import{B as I}from"./badge-C6fu0KNW.js";import{C as ae,B as te,U as re}from"./user--aavO9OP.js";import"./index-BnZGiQrK.js";import"./wand-sparkles-DhWsRIAQ.js";const ne=L({mode:K(["WALLET","BANK","CARD"],{required_error:"Please select a payment mode"}),accountNumber:g().min(1,"Account number is required").regex(/^\d+$/,"Account number must contain only numbers"),provider:g().min(1,"Please select a provider"),User_ID:g().min(1,"Please select a user"),name:g().min(1,"Account holder name is required")}),ce=L({accounts:H(ne).min(1,"Add at least one payment account")}),le=[{value:"4298e2e3-4215-4884-9bb1-3fc7d9695e49",label:"James Baako",icon:F}],oe=["WALLET","BANK","CARD"],ie={WALLET:["MTN","VODAFONE","AIRTELTIGO"],BANK:["GCB","ECOBANK","ABSA","FIDELITY"],CARD:["VISA","MASTERCARD","AMEX"]};function de({open:c,onOpenChange:t,onSubmit:l}){const a=$({resolver:k(ce),defaultValues:{accounts:[{mode:"WALLET",accountNumber:"",provider:"",User_ID:"",name:""}]}}),{fields:i,append:p,remove:A}=_({control:a.control,name:"accounts"});N.useEffect(()=>{c||a.reset({accounts:[{mode:"WALLET",accountNumber:"",provider:"",User_ID:"",name:""}]})},[c]);const f=s=>{l(s.accounts),a.reset()};return e.jsx(z,{open:c,onOpenChange:t,children:e.jsxs(q,{className:"max-w-2xl bg-white",children:[e.jsxs(G,{children:[e.jsx(J,{className:"text-[#4A36EC] text-xl font-bold",children:"Add Payment Account"}),e.jsx(X,{className:"text-gray-600",children:"Register new payment accounts for users"})]}),e.jsx(O,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(f),className:"space-y-6",children:[e.jsx("div",{className:"space-y-4",children:i.map((s,r)=>{const R=a.watch(`accounts.${r}.mode`);return e.jsxs("div",{className:"space-y-4 p-4 border rounded-lg",children:[e.jsx(d,{control:a.control,name:`accounts.${r}.User_ID`,render:({field:n})=>e.jsxs(m,{children:[e.jsx(x,{className:"text-gray-700",children:"Select User"}),e.jsx(u,{children:e.jsx(se,{options:le,value:[n.value],onValueChange:o=>n.onChange(o[0]),placeholder:"Select a user",maxCount:1})}),e.jsx(h,{className:"text-red-500"})]})}),e.jsx(d,{control:a.control,name:`accounts.${r}.mode`,render:({field:n})=>e.jsxs(m,{children:[e.jsx(x,{className:"text-gray-700",children:"Payment Mode"}),e.jsxs(D,{onValueChange:o=>{n.onChange(o),a.setValue(`accounts.${r}.provider`,"")},defaultValue:n.value,children:[e.jsx(u,{children:e.jsx(w,{children:e.jsx(U,{placeholder:"Select payment mode"})})}),e.jsx(P,{children:oe.map(o=>e.jsx(B,{value:o,children:o},o))})]}),e.jsx(h,{className:"text-red-500"})]})}),e.jsx(d,{control:a.control,name:`accounts.${r}.provider`,render:({field:n})=>{var o;return e.jsxs(m,{children:[e.jsx(x,{className:"text-gray-700",children:"Provider"}),e.jsxs(D,{onValueChange:n.onChange,defaultValue:n.value,children:[e.jsx(u,{children:e.jsx(w,{children:e.jsx(U,{placeholder:"Select provider"})})}),e.jsx(P,{children:(o=ie[R])==null?void 0:o.map(v=>e.jsx(B,{value:v,children:v},v))})]}),e.jsx(h,{className:"text-red-500"})]})}}),e.jsx(d,{control:a.control,name:`accounts.${r}.accountNumber`,render:({field:n})=>e.jsxs(m,{children:[e.jsx(x,{className:"text-gray-700",children:"Account Number"}),e.jsx(u,{children:e.jsx(T,{placeholder:"Enter account number",className:"border-gray-200 focus:border-[#4A36EC] focus:ring-[#4A36EC]",...n})}),e.jsx(h,{className:"text-red-500"})]})}),e.jsx(d,{control:a.control,name:`accounts.${r}.name`,render:({field:n})=>e.jsxs(m,{children:[e.jsx(x,{className:"text-gray-700",children:"Account Holder Name"}),e.jsx(u,{children:e.jsx(T,{placeholder:"Enter account holder name",className:"border-gray-200 focus:border-[#4A36EC] focus:ring-[#4A36EC]",...n})}),e.jsx(h,{className:"text-red-500"})]})}),i.length>1&&e.jsx(b,{type:"button",variant:"outline",size:"icon",className:"hover:bg-gray-100",onClick:()=>A(r),children:e.jsx(Y,{className:"w-4 h-4 text-gray-600"})})]},s.id)})}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs(b,{type:"button",variant:"outline",className:"hover:bg-gray-100",onClick:()=>p({mode:"WALLET",accountNumber:"",provider:"",User_ID:"",name:""}),children:[e.jsx(M,{className:"w-4 h-4 mr-2"}),"Add Another"]}),e.jsx(b,{type:"submit",className:"bg-[#4A36EC] hover:bg-[#5B4AEE] text-white",children:"Save Accounts"})]})]})})]})})}const me={"4298e2e3-4215-4884-9bb1-3fc7d9695e49":{name:"James Baako",email:"james@example.com"}},xe=c=>({WALLET:"bg-blue-100 text-blue-800",BANK:"bg-green-100 text-green-800",CARD:"bg-purple-100 text-purple-800"})[c]||"bg-gray-100 text-gray-800";function ue({accounts:c}){return e.jsx("div",{className:"border rounded-lg bg-white",children:e.jsxs(Q,{children:[e.jsx(Z,{children:e.jsxs(E,{className:"bg-gray-50",children:[e.jsx(y,{className:"text-[#4A36EC] font-semibold",children:"Account Holder"}),e.jsx(y,{className:"text-[#4A36EC] font-semibold",children:"Account Details"}),e.jsx(y,{className:"text-[#4A36EC] font-semibold",children:"Provider"}),e.jsx(y,{className:"text-[#4A36EC] font-semibold",children:"Payment Mode"})]})}),e.jsxs(ee,{children:[c.map((t,l)=>{var a;return e.jsxs(E,{className:"hover:bg-gray-50 transition-colors",children:[e.jsx(j,{children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-gray-900 font-medium",children:t.name}),e.jsx("span",{className:"text-gray-500 text-sm",children:((a=me[t.User_ID])==null?void 0:a.email)||"Unknown User"})]})}),e.jsx(j,{className:"text-gray-700",children:e.jsx("div",{className:"flex flex-col",children:e.jsx("span",{className:"font-medium",children:t.accountNumber})})}),e.jsx(j,{children:e.jsx(I,{variant:"outline",className:"bg-gray-100",children:t.provider})}),e.jsx(j,{children:e.jsx(I,{className:xe(t.mode),children:t.mode})})]},l)}),c.length===0&&e.jsx(E,{children:e.jsx(j,{colSpan:4,className:"text-center text-gray-500 py-8",children:"No payment accounts registered yet"})})]})]})})}function Se(){const[c,t]=N.useState(!1),[l,a]=N.useState([]),[i,p]=N.useState(null),A=async s=>{try{console.log(s),a([...l,...s]),t(!1),p(null)}catch(r){p("Failed to add payment accounts"),console.error(r)}},f=[{title:"Total Accounts",value:l.length,icon:F,description:"Registered accounts",trend:"+3.2%",trendUp:!0},{title:"Payment Methods",value:new Set(l.map(s=>s.mode)).size,icon:ae,description:"Available methods",trend:"+1.8%",trendUp:!0},{title:"Providers",value:new Set(l.map(s=>s.provider)).size,icon:te,description:"Active providers",trend:"+2.5%",trendUp:!0},{title:"Active Users",value:new Set(l.map(s=>s.User_ID)).size,icon:re,description:"With payment methods",trend:"+2.1%",trendUp:!0}];return e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsxs("div",{className:"flex items-center text-sm text-muted-foreground",children:[e.jsx("a",{href:"/",className:"hover:text-[#4A36EC]",children:"Dashboard"}),e.jsx(S,{className:"w-4 h-4 mx-2"}),e.jsx("a",{href:"/user-management",className:"hover:text-[#4A36EC]",children:"User Management"}),e.jsx(S,{className:"w-4 h-4 mx-2"}),e.jsx("span",{className:"text-[#4A36EC] font-medium",children:"Payment Accounts"})]}),e.jsxs(C.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-[#4A36EC]",children:"Payment Accounts"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Manage user payment accounts and methods"})]}),e.jsxs(b,{onClick:()=>t(!0),className:"bg-[#4A36EC] hover:bg-[#5B4AEE] text-white",children:[e.jsx(M,{className:"w-4 h-4 mr-2"}),"Add Payment Account"]})]}),e.jsx(C.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:f.map((s,r)=>e.jsx(V,{className:"border border-gray-200 hover:border-[#4A36EC] transition-colors",children:e.jsxs(W,{className:"p-6",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-600",children:s.title}),e.jsx("h3",{className:"text-2xl font-bold text-gray-900 mt-2",children:s.value})]}),e.jsx("div",{className:"bg-[#4A36EC]/10 p-2 rounded-lg",children:e.jsx(s.icon,{className:"w-5 h-5 text-[#4A36EC]"})})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx("p",{className:"text-xs text-gray-500",children:s.description}),e.jsx("span",{className:`text-xs font-medium ${s.trendUp?"text-green-600":"text-red-600"}`,children:s.trend})]})]})},r))}),e.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:e.jsx(ue,{accounts:l})}),i&&e.jsx("div",{className:"text-red-600 text-sm",children:i}),e.jsx(de,{open:c,onOpenChange:t,onSubmit:A})]})}export{Se as default};
