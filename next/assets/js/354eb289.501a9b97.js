"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99334:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>f});var a=r(87462),n=r(67294),o=r(3905);const l={id:"awsdate",title:"AWSDate",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/scalars/awsdate",id:"graphql/scalars/awsdate",title:"AWSDate",description:"A date string, such as 2007-12-03, compliant with the full-date format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.",source:"@site/colony/graphql/scalars/awsdate.mdx",sourceDirName:"graphql/scalars",slug:"/graphql/scalars/awsdate",permalink:"/next/graphql/scalars/awsdate",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/scalars/awsdate.mdx",tags:[],version:"current",frontMatter:{id:"awsdate",title:"AWSDate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AWSDateTime",permalink:"/next/graphql/scalars/awsdate-time"},next:{title:"AWSEmail",permalink:"/next/graphql/scalars/awsemail"}},c={},p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f=[],m=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[s,c]=(0,n.useState)(i);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&l)},g={Bullet:p,SpecifiedBy:d,Badge:u,toc:f,Details:m};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A date string, such as 2007-12-03, compliant with the ",(0,o.kt)("inlineCode",{parentName:"p"},"full-date")," format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar AWSDate\n")))}y.isMDXComponent=!0}}]);