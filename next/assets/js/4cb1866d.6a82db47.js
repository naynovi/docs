"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return r?o.createElement(m,s(s({ref:t},p),{},{components:r})):o.createElement(m,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2371:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>g});var o=r(87462),n=r(67294),a=r(3905);const s={id:"aws-cognito-user-pools",title:"aws_cognito_user_pools",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/directives/aws-cognito-user-pools",id:"graphql/directives/aws-cognito-user-pools",title:"aws_cognito_user_pools",description:"No description",source:"@site/colony/graphql/directives/aws-cognito-user-pools.mdx",sourceDirName:"graphql/directives",slug:"/graphql/directives/aws-cognito-user-pools",permalink:"/next/graphql/directives/aws-cognito-user-pools",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/directives/aws-cognito-user-pools.mdx",tags:[],version:"current",frontMatter:{id:"aws-cognito-user-pools",title:"aws_cognito_user_pools",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"aws_auth",permalink:"/next/graphql/directives/aws-auth"},next:{title:"aws_iam",permalink:"/next/graphql/directives/aws-iam"}},c={},p=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>aws_cognito_user_pools.<b>cognito_groups</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-aws_cognito_user_poolsbcognito_groupsbcodestring--",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:s,startOpen:l=!1}=e;const[i,c]=(0,n.useState)(l);return(0,a.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&s)},f={Bullet:p,SpecifiedBy:u,Badge:d,toc:g,Details:m};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @aws_cognito_user_pools(\n  cognito_groups: [String!]\n) on \n  | FIELD_DEFINITION\n  | OBJECT\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-aws_cognito_user_poolsbcognito_groupsbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"aws_cognito_user_pools.",(0,a.kt)("b",null,"cognito_groups"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,a.kt)(d,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);