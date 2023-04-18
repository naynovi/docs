"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),y=o,m=d["".concat(c,".").concat(y)]||d[y]||s[y]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86597:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>y});var r=n(87462),o=n(67294),a=n(3905);const l={id:"create-unique-colony",title:"createUniqueColony",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/create-unique-colony",id:"graphql/mutations/create-unique-colony",title:"createUniqueColony",description:"No description",source:"@site/colony/graphql/mutations/create-unique-colony.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-unique-colony",permalink:"/next/graphql/mutations/create-unique-colony",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/create-unique-colony.mdx",tags:[],version:"current",frontMatter:{id:"create-unique-colony",title:"createUniqueColony",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createToken",permalink:"/next/graphql/mutations/create-token"},next:{title:"createUniqueUser",permalink:"/next/graphql/mutations/create-unique-user"}},u={},p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createUniqueColony.<b>input</b></code><Bullet /><code>CreateUniqueColonyInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createuniquecolonybinputbcodecreateuniquecolonyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Colony</code> <Badge class="secondary" text="object"/>',id:"colony-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,u]=(0,o.useState)(i);return(0,a.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:p,SpecifiedBy:s,Badge:d,toc:y,Details:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"createUniqueColony(\n  input: CreateUniqueColonyInput\n): Colony\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createuniquecolonybinputbcodecreateuniquecolonyinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"createUniqueColony.",(0,a.kt)("b",null,"input"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/create-unique-colony-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateUniqueColonyInput"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"colony-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/objects/colony"},(0,a.kt)("inlineCode",{parentName:"a"},"Colony"))," ",(0,a.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}g.isMDXComponent=!0}}]);