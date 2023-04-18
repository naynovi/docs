"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94097],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=c(a),g=o,u=p["".concat(i,".").concat(g)]||p[g]||s[g]||l;return a?n.createElement(u,d(d({ref:t},m),{},{components:a})):n.createElement(u,d({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,d=new Array(l);d[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,d[1]=r;for(var c=2;c<l;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94304:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,Details:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>d,metadata:()=>i,toc:()=>g});var n=a(87462),o=a(67294),l=a(3905);const d={id:"domain-metadata",title:"DomainMetadata",hide_table_of_contents:!1},r=void 0,i={unversionedId:"graphql/objects/domain-metadata",id:"graphql/objects/domain-metadata",title:"DomainMetadata",description:"No description",source:"@site/colony/graphql/objects/domain-metadata.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/domain-metadata",permalink:"/next/graphql/objects/domain-metadata",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/domain-metadata.mdx",tags:[],version:"current",frontMatter:{id:"domain-metadata",title:"DomainMetadata",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DomainMetadataChangelog",permalink:"/next/graphql/objects/domain-metadata-changelog"},next:{title:"Domain",permalink:"/next/graphql/objects/domain"}},c={},m=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadata.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatabidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadata.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatabnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadata.<b>description</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatabdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadata.<b>color</b></code><Bullet /><code>DomainColor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-domainmetadatabcolorbcodedomaincolor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadata.<b>changelog</b></code><Bullet /><code>[DomainMetadataChangelog!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-domainmetadatabchangelogbcodedomainmetadatachangelog--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadata.<b>createdAt</b></code><Bullet /><code>AWSDateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatabcreatedatbcodeawsdatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DomainMetadata.<b>updatedAt</b></code><Bullet /><code>AWSDateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-domainmetadatabupdatedatbcodeawsdatetime--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[i,c]=(0,o.useState)(r);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},y={Bullet:m,SpecifiedBy:s,Badge:p,toc:g,Details:u};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type DomainMetadata {\n  id: ID!\n  name: String!\n  description: String!\n  color: DomainColor!\n  changelog: [DomainMetadataChangelog!]\n  createdAt: AWSDateTime!\n  updatedAt: AWSDateTime!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatabidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadata.",(0,l.kt)("b",null,"id"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatabnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadata.",(0,l.kt)("b",null,"name"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatabdescriptionbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadata.",(0,l.kt)("b",null,"description"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatabcolorbcodedomaincolor--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadata.",(0,l.kt)("b",null,"color"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/enums/domain-color"},(0,l.kt)("inlineCode",{parentName:"a"},"DomainColor!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatabchangelogbcodedomainmetadatachangelog--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadata.",(0,l.kt)("b",null,"changelog"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/domain-metadata-changelog"},(0,l.kt)("inlineCode",{parentName:"a"},"[DomainMetadataChangelog!]"))," ",(0,l.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatabcreatedatbcodeawsdatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadata.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,l.kt)("inlineCode",{parentName:"a"},"AWSDateTime!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-domainmetadatabupdatedatbcodeawsdatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DomainMetadata.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,l.kt)("inlineCode",{parentName:"a"},"AWSDateTime!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/create-domain-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"createDomainMetadata")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/delete-domain-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteDomainMetadata")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/queries/get-domain-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"getDomainMetadata")),"  ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-create-domain-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"onCreateDomainMetadata")),"  ",(0,l.kt)(p,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-delete-domain-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"onDeleteDomainMetadata")),"  ",(0,l.kt)(p,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-update-domain-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"onUpdateDomainMetadata")),"  ",(0,l.kt)(p,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/update-domain-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"updateDomainMetadata")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/objects/domain"},(0,l.kt)("inlineCode",{parentName:"a"},"Domain")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/objects/model-domain-metadata-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelDomainMetadataConnection")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);