"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68371:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),o=r(67294),a=r(3905);const l={id:"token-from-everywhere-arguments",title:"TokenFromEverywhereArguments",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/inputs/token-from-everywhere-arguments",id:"graphql/inputs/token-from-everywhere-arguments",title:"TokenFromEverywhereArguments",description:"Input data for fetching a token's information from everywhere ??? I'm not sure what that means ???.",source:"@site/colony/graphql/inputs/token-from-everywhere-arguments.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/token-from-everywhere-arguments",permalink:"/next/graphql/inputs/token-from-everywhere-arguments",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/token-from-everywhere-arguments.mdx",tags:[],version:"current",frontMatter:{id:"token-from-everywhere-arguments",title:"TokenFromEverywhereArguments",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SetCurrentVersionInput",permalink:"/next/graphql/inputs/set-current-version-input"},next:{title:"TokenInput",permalink:"/next/graphql/inputs/token-input"}},c={},u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TokenFromEverywhereArguments.<b>tokenAddress</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tokenfromeverywhereargumentsbtokenaddressbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:s=!1}=e;const[i,c]=(0,o.useState)(s);return(0,a.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&l)},g={Bullet:u,SpecifiedBy:p,Badge:m,toc:d,Details:f};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input data for fetching a token's information from ",(0,a.kt)("em",{parentName:"p"},"everywhere")," ??? I'm not sure what that means ???."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input TokenFromEverywhereArguments {\n  tokenAddress: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-tokenfromeverywhereargumentsbtokenaddressbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TokenFromEverywhereArguments.",(0,a.kt)("b",null,"tokenAddress"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Address of the token on the blockchain.")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/graphql/queries/get-token-from-everywhere"},(0,a.kt)("inlineCode",{parentName:"a"},"getTokenFromEverywhere")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);