"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=c(n),u=l,k=y["".concat(s,".").concat(u)]||y[u]||p[u]||r;return n?o.createElement(k,a(a({ref:t},d),{},{components:n})):o.createElement(k,a({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},29549:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>d,Details:()=>k,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),l=n(67294),r=n(3905);const a={id:"list-colony-tokens",title:"listColonyTokens",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/queries/list-colony-tokens",id:"graphql/queries/list-colony-tokens",title:"listColonyTokens",description:"No description",source:"@site/colony/graphql/queries/list-colony-tokens.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/list-colony-tokens",permalink:"/next/graphql/queries/list-colony-tokens",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/queries/list-colony-tokens.mdx",tags:[],version:"current",frontMatter:{id:"list-colony-tokens",title:"listColonyTokens",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"listColonyMetadata",permalink:"/next/graphql/queries/list-colony-metadata"},next:{title:"listContractEvents",permalink:"/next/graphql/queries/list-contract-events"}},c={},d=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>listColonyTokens.<b>filter</b></code><Bullet /><code>ModelColonyTokensFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-listcolonytokensbfilterbcodemodelcolonytokensfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listColonyTokens.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listcolonytokensblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listColonyTokens.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listcolonytokensbnexttokenbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ModelColonyTokensConnection</code> <Badge class="secondary" text="object"/>',id:"modelcolonytokensconnection-",level:4}],k=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:i=!1}=e;const[s,c]=(0,l.useState)(i);return(0,r.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&a)},m={Bullet:d,SpecifiedBy:p,Badge:y,toc:u,Details:k};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"listColonyTokens(\n  filter: ModelColonyTokensFilterInput\n  limit: Int\n  nextToken: String\n): ModelColonyTokensConnection\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listcolonytokensbfilterbcodemodelcolonytokensfilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listColonyTokens.",(0,r.kt)("b",null,"filter"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-tokens-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyTokensFilterInput"))," ",(0,r.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listcolonytokensblimitbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listColonyTokens.",(0,r.kt)("b",null,"limit"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listcolonytokensbnexttokenbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listColonyTokens.",(0,r.kt)("b",null,"nextToken"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"modelcolonytokensconnection-"},(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/model-colony-tokens-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelColonyTokensConnection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}f.isMDXComponent=!0}}]);