"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78907:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=r(67294),l=r(3905);const o={id:"awsemail",title:"AWSEmail",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/scalars/awsemail",id:"graphql/scalars/awsemail",title:"AWSEmail",description:"A field whose value conforms to the standard internet email address format as specified in RFC822//www.w3.org/Protocols/rfc822/.",source:"@site/colony/graphql/scalars/awsemail.mdx",sourceDirName:"graphql/scalars",slug:"/graphql/scalars/awsemail",permalink:"/next/graphql/scalars/awsemail",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/scalars/awsemail.mdx",tags:[],version:"current",frontMatter:{id:"awsemail",title:"AWSEmail",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AWSDate",permalink:"/next/graphql/scalars/awsdate"},next:{title:"AWSIPAddress",permalink:"/next/graphql/scalars/awsipaddress"}},p={},c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:i=!1}=e;const[s,p]=(0,n.useState)(i);return(0,l.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&o)},y={Bullet:c,SpecifiedBy:d,Badge:m,toc:u,Details:f};function g(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A field whose value conforms to the standard internet email address format as specified in RFC822: ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc822/"},"https://www.w3.org/Protocols/rfc822/"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar AWSEmail\n")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/create-profile-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateProfileInput")),"  ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/queries/get-profile-by-email"},(0,l.kt)("inlineCode",{parentName:"a"},"getProfileByEmail")),"  ",(0,l.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/objects/profile"},(0,l.kt)("inlineCode",{parentName:"a"},"Profile")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/profile-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ProfileInput")),"  ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/update-profile-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateProfileInput")),"  ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);