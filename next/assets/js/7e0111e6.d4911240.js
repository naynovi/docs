"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53316],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=d(a),p=o,u=h["".concat(i,".").concat(p)]||h[p]||m[p]||r;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72182:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),o=a(67294),r=a(3905);const l={id:"chain-metadata",title:"ChainMetadata",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/objects/chain-metadata",id:"graphql/objects/chain-metadata",title:"ChainMetadata",description:"Represents metadata related to a blockchain event.",source:"@site/colony/graphql/objects/chain-metadata.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/chain-metadata",permalink:"/next/graphql/objects/chain-metadata",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/chain-metadata.mdx",tags:[],version:"current",frontMatter:{id:"chain-metadata",title:"ChainMetadata",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"updateWatchedColonies",permalink:"/next/graphql/mutations/update-watched-colonies"},next:{title:"ColonyAction",permalink:"/next/graphql/objects/colony-action"}},d={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ChainMetadata.<b>network</b></code><Bullet /><code>Network</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-chainmetadatabnetworkbcodenetwork-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ChainMetadata.<b>chainId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-chainmetadatabchainidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ChainMetadata.<b>transactionHash</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-chainmetadatabtransactionhashbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ChainMetadata.<b>logIndex</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-chainmetadatablogindexbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ChainMetadata.<b>blockNumber</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-chainmetadatabblocknumberbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[i,d]=(0,o.useState)(c);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},k={Bullet:s,SpecifiedBy:m,Badge:h,toc:p,Details:u};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents metadata related to a blockchain event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ChainMetadata {\n  network: Network\n  chainId: Int\n  transactionHash: String\n  logIndex: Int\n  blockNumber: Int\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-chainmetadatabnetworkbcodenetwork-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ChainMetadata.",(0,r.kt)("b",null,"network"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/enums/network"},(0,r.kt)("inlineCode",{parentName:"a"},"Network"))," ",(0,r.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The network the event occurred on.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-chainmetadatabchainidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ChainMetadata.",(0,r.kt)("b",null,"chainId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The chain ID of the event.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-chainmetadatabtransactionhashbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ChainMetadata.",(0,r.kt)("b",null,"transactionHash"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The transaction hash of the event.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-chainmetadatablogindexbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ChainMetadata.",(0,r.kt)("b",null,"logIndex"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The log index of the event.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-chainmetadatabblocknumberbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ChainMetadata.",(0,r.kt)("b",null,"blockNumber"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The block number of the event.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/objects/colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")),"  ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/objects/contract-event"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractEvent")),"  ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/objects/token"},(0,r.kt)("inlineCode",{parentName:"a"},"Token")),"  ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);