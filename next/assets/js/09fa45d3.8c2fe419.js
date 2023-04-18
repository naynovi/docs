"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,u=p["".concat(d,".").concat(m)]||p[m]||y[m]||l;return n?o.createElement(u,s(s({ref:t},i),{},{components:n})):o.createElement(u,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<l;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82517:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>y,assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var o=n(87462),a=n(67294),l=n(3905);const s={id:"colony-extension",title:"ColonyExtension",hide_table_of_contents:!1},r=void 0,d={unversionedId:"graphql/objects/colony-extension",id:"graphql/objects/colony-extension",title:"ColonyExtension",description:"No description",source:"@site/colony/graphql/objects/colony-extension.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/colony-extension",permalink:"/next/graphql/objects/colony-extension",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/colony-extension.mdx",tags:[],version:"current",frontMatter:{id:"colony-extension",title:"ColonyExtension",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ColonyChainFundsClaim",permalink:"/next/graphql/objects/colony-chain-funds-claim"},next:{title:"ColonyFundsClaim",permalink:"/next/graphql/objects/colony-funds-claim"}},c={},i=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>colonyId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbcolonyidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>colony</b></code><Bullet /><code>Colony!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-colonyextensionbcolonybcodecolony--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>hash</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbhashbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>installedBy</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbinstalledbybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>installedAt</b></code><Bullet /><code>AWSTimestamp!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbinstalledatbcodeawstimestamp--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>isDeprecated</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbisdeprecatedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>isDeleted</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbisdeletedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>isInitialized</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbisinitializedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>version</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbversionbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>createdAt</b></code><Bullet /><code>AWSDateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbcreatedatbcodeawsdatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyExtension.<b>updatedAt</b></code><Bullet /><code>AWSDateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonyextensionbupdatedatbcodeawsdatetime--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:r=!1}=e;const[d,c]=(0,a.useState)(r);return(0,l.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&s)},x={Bullet:i,SpecifiedBy:y,Badge:p,toc:m,Details:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ColonyExtension {\n  id: ID!\n  colonyId: ID!\n  colony: Colony!\n  hash: String!\n  installedBy: String!\n  installedAt: AWSTimestamp!\n  isDeprecated: Boolean!\n  isDeleted: Boolean!\n  isInitialized: Boolean!\n  version: Int!\n  createdAt: AWSDateTime!\n  updatedAt: AWSDateTime!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"id"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbcolonyidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"colonyId"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbcolonybcodecolony--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"colony"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/colony"},(0,l.kt)("inlineCode",{parentName:"a"},"Colony!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbhashbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"hash"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbinstalledbybcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"installedBy"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbinstalledatbcodeawstimestamp--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"installedAt"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/awstimestamp"},(0,l.kt)("inlineCode",{parentName:"a"},"AWSTimestamp!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbisdeprecatedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"isDeprecated"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbisdeletedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"isDeleted"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbisinitializedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"isInitialized"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbversionbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"version"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbcreatedatbcodeawsdatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,l.kt)("inlineCode",{parentName:"a"},"AWSDateTime!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-colonyextensionbupdatedatbcodeawsdatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ColonyExtension.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,l.kt)("inlineCode",{parentName:"a"},"AWSDateTime!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/create-colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"createColonyExtension")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/delete-colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteColonyExtension")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/queries/get-colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"getColonyExtension")),"  ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-create-colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"onCreateColonyExtension")),"  ",(0,l.kt)(p,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-delete-colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"onDeleteColonyExtension")),"  ",(0,l.kt)(p,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-update-colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"onUpdateColonyExtension")),"  ",(0,l.kt)(p,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/update-colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"updateColonyExtension")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/update-extension-by-colony-and-hash"},(0,l.kt)("inlineCode",{parentName:"a"},"updateExtensionByColonyAndHash")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/objects/colony-action"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyAction")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/objects/model-colony-extension-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelColonyExtensionConnection")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);