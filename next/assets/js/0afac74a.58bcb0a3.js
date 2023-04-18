"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,m=p["".concat(c,".").concat(y)]||p[y]||s[y]||l;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94597:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>y});var a=n(87462),o=n(67294),l=n(3905);const r={id:"create-unique-colony-input",title:"CreateUniqueColonyInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/create-unique-colony-input",id:"graphql/inputs/create-unique-colony-input",title:"CreateUniqueColonyInput",description:"No description",source:"@site/colony/graphql/inputs/create-unique-colony-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-unique-colony-input",permalink:"/next/graphql/inputs/create-unique-colony-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/create-unique-colony-input.mdx",tags:[],version:"current",frontMatter:{id:"create-unique-colony-input",title:"CreateUniqueColonyInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CreateTokenInput",permalink:"/next/graphql/inputs/create-token-input"},next:{title:"CreateUniqueUserInput",permalink:"/next/graphql/inputs/create-unique-user-input"}},u={},d=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUniqueColonyInput.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createuniquecolonyinputbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUniqueColonyInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createuniquecolonyinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUniqueColonyInput.<b>colonyNativeTokenId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createuniquecolonyinputbcolonynativetokenidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUniqueColonyInput.<b>type</b></code><Bullet /><code>ColonyType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-createuniquecolonyinputbtypebcodecolonytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUniqueColonyInput.<b>status</b></code><Bullet /><code>ColonyStatusInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createuniquecolonyinputbstatusbcodecolonystatusinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUniqueColonyInput.<b>chainMetadata</b></code><Bullet /><code>ChainMetadataInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createuniquecolonyinputbchainmetadatabcodechainmetadatainput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUniqueColonyInput.<b>version</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createuniquecolonyinputbversionbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:i=!1}=e;const[c,u]=(0,o.useState)(i);return(0,l.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},h={Bullet:d,SpecifiedBy:s,Badge:p,toc:y,Details:m};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateUniqueColonyInput {\n  id: ID!\n  name: String!\n  colonyNativeTokenId: ID!\n  type: ColonyType\n  status: ColonyStatusInput\n  chainMetadata: ChainMetadataInput\n  version: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createuniquecolonyinputbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateUniqueColonyInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createuniquecolonyinputbnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateUniqueColonyInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createuniquecolonyinputbcolonynativetokenidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateUniqueColonyInput.",(0,l.kt)("b",null,"colonyNativeTokenId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createuniquecolonyinputbtypebcodecolonytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateUniqueColonyInput.",(0,l.kt)("b",null,"type"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/enums/colony-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyType"))," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createuniquecolonyinputbstatusbcodecolonystatusinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateUniqueColonyInput.",(0,l.kt)("b",null,"status"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/colony-status-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyStatusInput"))," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createuniquecolonyinputbchainmetadatabcodechainmetadatainput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateUniqueColonyInput.",(0,l.kt)("b",null,"chainMetadata"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/chain-metadata-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ChainMetadataInput"))," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createuniquecolonyinputbversionbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateUniqueColonyInput.",(0,l.kt)("b",null,"version"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/create-unique-colony"},(0,l.kt)("inlineCode",{parentName:"a"},"createUniqueColony")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);