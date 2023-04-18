"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=o,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},29725:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),o=a(67294),r=a(3905);const l={id:"list-domain-metadata",title:"listDomainMetadata",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/queries/list-domain-metadata",id:"graphql/queries/list-domain-metadata",title:"listDomainMetadata",description:"No description",source:"@site/colony/graphql/queries/list-domain-metadata.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/list-domain-metadata",permalink:"/next/graphql/queries/list-domain-metadata",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/queries/list-domain-metadata.mdx",tags:[],version:"current",frontMatter:{id:"list-domain-metadata",title:"listDomainMetadata",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"listCurrentVersions",permalink:"/next/graphql/queries/list-current-versions"},next:{title:"listDomains",permalink:"/next/graphql/queries/list-domains"}},s={},c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>listDomainMetadata.<b>filter</b></code><Bullet /><code>ModelDomainMetadataFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-listdomainmetadatabfilterbcodemodeldomainmetadatafilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listDomainMetadata.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listdomainmetadatablimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listDomainMetadata.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listdomainmetadatabnexttokenbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ModelDomainMetadataConnection</code> <Badge class="secondary" text="object"/>',id:"modeldomainmetadataconnection-",level:4}],f=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[d,s]=(0,o.useState)(i);return(0,r.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},g={Bullet:c,SpecifiedBy:m,Badge:p,toc:u,Details:f};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"listDomainMetadata(\n  filter: ModelDomainMetadataFilterInput\n  limit: Int\n  nextToken: String\n): ModelDomainMetadataConnection\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listdomainmetadatabfilterbcodemodeldomainmetadatafilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listDomainMetadata.",(0,r.kt)("b",null,"filter"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-domain-metadata-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelDomainMetadataFilterInput"))," ",(0,r.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listdomainmetadatablimitbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listDomainMetadata.",(0,r.kt)("b",null,"limit"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-listdomainmetadatabnexttokenbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"listDomainMetadata.",(0,r.kt)("b",null,"nextToken"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"modeldomainmetadataconnection-"},(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/model-domain-metadata-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelDomainMetadataConnection"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}y.isMDXComponent=!0}}]);