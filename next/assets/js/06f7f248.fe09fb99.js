"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=i(n),y=o,m=s["".concat(c,".").concat(y)]||s[y]||u[y]||l;return n?a.createElement(m,d(d({ref:t},p),{},{components:n})):a.createElement(m,d({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,d=new Array(l);d[0]=s;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,d[1]=r;for(var i=2;i<l;i++)d[i]=n[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36428:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>y});var a=n(87462),o=n(67294),l=n(3905);const d={id:"update-colony-input",title:"UpdateColonyInput",hide_table_of_contents:!1},r=void 0,c={unversionedId:"graphql/inputs/update-colony-input",id:"graphql/inputs/update-colony-input",title:"UpdateColonyInput",description:"No description",source:"@site/colony/graphql/inputs/update-colony-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-colony-input",permalink:"/next/graphql/inputs/update-colony-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/update-colony-input.mdx",tags:[],version:"current",frontMatter:{id:"update-colony-input",title:"UpdateColonyInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateColonyFundsClaimInput",permalink:"/next/graphql/inputs/update-colony-funds-claim-input"},next:{title:"UpdateColonyMetadataInput",permalink:"/next/graphql/inputs/update-colony-metadata-input"}},i={},p=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecolonyinputbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecolonyinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>status</b></code><Bullet /><code>ColonyStatusInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecolonyinputbstatusbcodecolonystatusinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>chainFundsClaim</b></code><Bullet /><code>ColonyChainFundsClaimInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecolonyinputbchainfundsclaimbcodecolonychainfundsclaiminput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>type</b></code><Bullet /><code>ColonyType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updatecolonyinputbtypebcodecolonytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>balances</b></code><Bullet /><code>ColonyBalancesInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecolonyinputbbalancesbcodecolonybalancesinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>chainMetadata</b></code><Bullet /><code>ChainMetadataInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecolonyinputbchainmetadatabcodechainmetadatainput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>version</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecolonyinputbversionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateColonyInput.<b>colonyNativeTokenId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecolonyinputbcolonynativetokenidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:r=!1}=e;const[c,i]=(0,o.useState)(r);return(0,l.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&d)},h={Bullet:p,SpecifiedBy:u,Badge:s,toc:y,Details:m};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateColonyInput {\n  id: ID!\n  name: String\n  status: ColonyStatusInput\n  chainFundsClaim: ColonyChainFundsClaimInput\n  type: ColonyType\n  balances: ColonyBalancesInput\n  chainMetadata: ChainMetadataInput\n  version: Int\n  colonyNativeTokenId: ID\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbstatusbcodecolonystatusinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"status"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/colony-status-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyStatusInput"))," ",(0,l.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbchainfundsclaimbcodecolonychainfundsclaiminput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"chainFundsClaim"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/colony-chain-funds-claim-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyChainFundsClaimInput"))," ",(0,l.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbtypebcodecolonytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"type"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/enums/colony-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyType"))," ",(0,l.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbbalancesbcodecolonybalancesinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"balances"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/colony-balances-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyBalancesInput"))," ",(0,l.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbchainmetadatabcodechainmetadatainput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"chainMetadata"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/chain-metadata-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ChainMetadataInput"))," ",(0,l.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbversionbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"version"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatecolonyinputbcolonynativetokenidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateColonyInput.",(0,l.kt)("b",null,"colonyNativeTokenId"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/update-colony"},(0,l.kt)("inlineCode",{parentName:"a"},"updateColony")),"  ",(0,l.kt)(s,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);