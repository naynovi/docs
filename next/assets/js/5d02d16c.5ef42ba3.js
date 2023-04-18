"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25131:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>c,assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905);const i={id:"on-update-domain-metadata",title:"onUpdateDomainMetadata",hide_table_of_contents:!1},l=void 0,d={unversionedId:"graphql/subscriptions/on-update-domain-metadata",id:"graphql/subscriptions/on-update-domain-metadata",title:"onUpdateDomainMetadata",description:"No description",source:"@site/colony/graphql/subscriptions/on-update-domain-metadata.mdx",sourceDirName:"graphql/subscriptions",slug:"/graphql/subscriptions/on-update-domain-metadata",permalink:"/next/graphql/subscriptions/on-update-domain-metadata",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/subscriptions/on-update-domain-metadata.mdx",tags:[],version:"current",frontMatter:{id:"on-update-domain-metadata",title:"onUpdateDomainMetadata",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"onUpdateCurrentVersion",permalink:"/next/graphql/subscriptions/on-update-current-version"},next:{title:"onUpdateDomain",permalink:"/next/graphql/subscriptions/on-update-domain"}},p={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>onUpdateDomainMetadata.<b>filter</b></code><Bullet /><code>ModelSubscriptionDomainMetadataFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onupdatedomainmetadatabfilterbcodemodelsubscriptiondomainmetadatafilterinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>DomainMetadata</code> <Badge class="secondary" text="object"/>',id:"domainmetadata-",level:4}],f=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:l=!1}=e;const[d,p]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&i)},b={Bullet:s,SpecifiedBy:c,Badge:u,toc:m,Details:f};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"onUpdateDomainMetadata(\n  filter: ModelSubscriptionDomainMetadataFilterInput\n): DomainMetadata\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onupdatedomainmetadatabfilterbcodemodelsubscriptiondomainmetadatafilterinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"onUpdateDomainMetadata.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-domain-metadata-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionDomainMetadataFilterInput"))," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"domainmetadata-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/objects/domain-metadata"},(0,o.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}y.isMDXComponent=!0}}]);