"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=d(n),m=r,u=f["".concat(c,".").concat(m)]||f[m]||p[m]||l;return n?o.createElement(u,a(a({ref:t},s),{},{components:n})):o.createElement(u,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23205:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=n(87462),r=n(67294),l=n(3905);const a={id:"model-profile-connection",title:"ModelProfileConnection",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/objects/model-profile-connection",id:"graphql/objects/model-profile-connection",title:"ModelProfileConnection",description:"No description",source:"@site/colony/graphql/objects/model-profile-connection.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/model-profile-connection",permalink:"/next/graphql/objects/model-profile-connection",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/model-profile-connection.mdx",tags:[],version:"current",frontMatter:{id:"model-profile-connection",title:"ModelProfileConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelDomainMetadataConnection",permalink:"/next/graphql/objects/model-domain-metadata-connection"},next:{title:"ModelTokenConnection",permalink:"/next/graphql/objects/model-token-connection"}},d={},s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelProfileConnection.<b>items</b></code><Bullet /><code>[Profile]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-modelprofileconnectionbitemsbcodeprofile--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelProfileConnection.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelprofileconnectionbnexttokenbcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:i=!1}=e;const[c,d]=(0,r.useState)(i);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&a)},y={Bullet:s,SpecifiedBy:p,Badge:f,toc:m,Details:u};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ModelProfileConnection {\n  items: [Profile]!\n  nextToken: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-modelprofileconnectionbitemsbcodeprofile--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ModelProfileConnection.",(0,l.kt)("b",null,"items"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/profile"},(0,l.kt)("inlineCode",{parentName:"a"},"[Profile]!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-modelprofileconnectionbnexttokenbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ModelProfileConnection.",(0,l.kt)("b",null,"nextToken"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/queries/get-profile-by-email"},(0,l.kt)("inlineCode",{parentName:"a"},"getProfileByEmail")),"  ",(0,l.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/queries/list-profiles"},(0,l.kt)("inlineCode",{parentName:"a"},"listProfiles")),"  ",(0,l.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);