"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(y,r(r({ref:t},s),{},{components:n})):a.createElement(y,r({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53923:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var a=n(87462),l=n(67294),o=n(3905);const r={id:"colony-chain-funds-claim-input",title:"ColonyChainFundsClaimInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/colony-chain-funds-claim-input",id:"graphql/inputs/colony-chain-funds-claim-input",title:"ColonyChainFundsClaimInput",description:"No description",source:"@site/colony/graphql/inputs/colony-chain-funds-claim-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/colony-chain-funds-claim-input",permalink:"/next/graphql/inputs/colony-chain-funds-claim-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/colony-chain-funds-claim-input.mdx",tags:[],version:"current",frontMatter:{id:"colony-chain-funds-claim-input",title:"ColonyChainFundsClaimInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ColonyBalancesInput",permalink:"/next/graphql/inputs/colony-balances-input"},next:{title:"ColonyMetadataChangelogInput",permalink:"/next/graphql/inputs/colony-metadata-changelog-input"}},d={},s=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyChainFundsClaimInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonychainfundsclaiminputbidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyChainFundsClaimInput.<b>createdAtBlock</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonychainfundsclaiminputbcreatedatblockbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyChainFundsClaimInput.<b>createdAt</b></code><Bullet /><code>AWSDateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonychainfundsclaiminputbcreatedatbcodeawsdatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyChainFundsClaimInput.<b>updatedAt</b></code><Bullet /><code>AWSDateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonychainfundsclaiminputbupdatedatbcodeawsdatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ColonyChainFundsClaimInput.<b>amount</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-colonychainfundsclaiminputbamountbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:i=!1}=e;const[c,d]=(0,l.useState)(i);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},h={Bullet:s,SpecifiedBy:u,Badge:p,toc:m,Details:y};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input ColonyChainFundsClaimInput {\n  id: ID\n  createdAtBlock: Int!\n  createdAt: AWSDateTime\n  updatedAt: AWSDateTime\n  amount: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-colonychainfundsclaiminputbidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ColonyChainFundsClaimInput.",(0,o.kt)("b",null,"id"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-colonychainfundsclaiminputbcreatedatblockbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ColonyChainFundsClaimInput.",(0,o.kt)("b",null,"createdAtBlock"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-colonychainfundsclaiminputbcreatedatbcodeawsdatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ColonyChainFundsClaimInput.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,o.kt)("inlineCode",{parentName:"a"},"AWSDateTime"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-colonychainfundsclaiminputbupdatedatbcodeawsdatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ColonyChainFundsClaimInput.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,o.kt)("inlineCode",{parentName:"a"},"AWSDateTime"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-colonychainfundsclaiminputbamountbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ColonyChainFundsClaimInput.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/inputs/create-colony-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateColonyInput")),"  ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/inputs/update-colony-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateColonyInput")),"  ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);