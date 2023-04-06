"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33839:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905);const i={id:"create-unique-user",title:"createUniqueUser",hide_table_of_contents:!1},u=void 0,l={unversionedId:"graphql/mutations/create-unique-user",id:"graphql/mutations/create-unique-user",title:"createUniqueUser",description:"Create a unique user within the Colony Network. ??? Maybe explain why unique ???",source:"@site/colony/graphql/mutations/create-unique-user.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-unique-user",permalink:"/next/graphql/mutations/create-unique-user",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/create-unique-user.mdx",tags:[],version:"current",frontMatter:{id:"create-unique-user",title:"createUniqueUser",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createUniqueColony",permalink:"/next/graphql/mutations/create-unique-colony"},next:{title:"createUserTokens",permalink:"/next/graphql/mutations/create-user-tokens"}},c={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createUniqueUser.<b>input</b></code><Bullet /><code>CreateUniqueUserInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createuniqueuserbinputbcodecreateuniqueuserinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],y=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:u=!1}=e;const[l,c]=(0,a.useState)(u);return(0,o.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&i)},f={Bullet:s,SpecifiedBy:p,Badge:d,toc:m,Details:y};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a unique user within the Colony Network. ??? Maybe explain why unique ???"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createUniqueUser(\n  input: CreateUniqueUserInput\n): User\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createuniqueuserbinputbcodecreateuniqueuserinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"createUniqueUser.",(0,o.kt)("b",null,"input"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/create-unique-user-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateUniqueUserInput"))," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"user-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Represents a User within the Colony Network.")))}g.isMDXComponent=!0}}]);