"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),y=s(n),m=l,k=y["".concat(i,".").concat(m)]||y[m]||p[m]||r;return n?o.createElement(k,a(a({ref:t},d),{},{components:n})):o.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},78861:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>d,Details:()=>k,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=n(87462),l=n(67294),r=n(3905);const a={id:"model-colony-tokens-connection",title:"ModelColonyTokensConnection",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/objects/model-colony-tokens-connection",id:"graphql/objects/model-colony-tokens-connection",title:"ModelColonyTokensConnection",description:"No description",source:"@site/colony/graphql/objects/model-colony-tokens-connection.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/model-colony-tokens-connection",permalink:"/next/graphql/objects/model-colony-tokens-connection",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/model-colony-tokens-connection.mdx",tags:[],version:"current",frontMatter:{id:"model-colony-tokens-connection",title:"ModelColonyTokensConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelColonyMetadataConnection",permalink:"/next/graphql/objects/model-colony-metadata-connection"},next:{title:"ModelContractEventConnection",permalink:"/next/graphql/objects/model-contract-event-connection"}},s={},d=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyTokensConnection.<b>items</b></code><Bullet /><code>[ColonyTokens]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-modelcolonytokensconnectionbitemsbcodecolonytokens--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyTokensConnection.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelcolonytokensconnectionbnexttokenbcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:c=!1}=e;const[i,s]=(0,l.useState)(c);return(0,r.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&a)},u={Bullet:d,SpecifiedBy:p,Badge:y,toc:m,Details:k};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ModelColonyTokensConnection {\n  items: [ColonyTokens]!\n  nextToken: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonytokensconnectionbitemsbcodecolonytokens--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyTokensConnection.",(0,r.kt)("b",null,"items"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/colony-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"[ColonyTokens]!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modelcolonytokensconnectionbnexttokenbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyTokensConnection.",(0,r.kt)("b",null,"nextToken"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/list-colony-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"listColonyTokens")),"  ",(0,r.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/objects/colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/objects/token"},(0,r.kt)("inlineCode",{parentName:"a"},"Token")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);