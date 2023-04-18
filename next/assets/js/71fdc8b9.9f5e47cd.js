"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=o,f=s["".concat(c,".").concat(u)]||s[u]||p[u]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7044:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),o=n(67294),r=n(3905);const i={id:"create-domain",title:"createDomain",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/mutations/create-domain",id:"graphql/mutations/create-domain",title:"createDomain",description:"No description",source:"@site/colony/graphql/mutations/create-domain.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-domain",permalink:"/next/graphql/mutations/create-domain",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/create-domain.mdx",tags:[],version:"current",frontMatter:{id:"create-domain",title:"createDomain",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createDomainMetadata",permalink:"/next/graphql/mutations/create-domain-metadata"},next:{title:"createProfile",permalink:"/next/graphql/mutations/create-profile"}},d={},m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createDomain.<b>input</b></code><Bullet /><code>CreateDomainInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createdomainbinputbcodecreatedomaininput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createDomain.<b>condition</b></code><Bullet /><code>ModelDomainConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createdomainbconditionbcodemodeldomainconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Domain</code> <Badge class="secondary" text="object"/>',id:"domain-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[c,d]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},y={Bullet:m,SpecifiedBy:p,Badge:s,toc:u,Details:f};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"createDomain(\n  input: CreateDomainInput!\n  condition: ModelDomainConditionInput\n): Domain\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createdomainbinputbcodecreatedomaininput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createDomain.",(0,r.kt)("b",null,"input"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/create-domain-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateDomainInput!"))," ",(0,r.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createdomainbconditionbcodemodeldomainconditioninput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createDomain.",(0,r.kt)("b",null,"condition"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-domain-condition-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelDomainConditionInput"))," ",(0,r.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"domain-"},(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/domain"},(0,r.kt)("inlineCode",{parentName:"a"},"Domain"))," ",(0,r.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}g.isMDXComponent=!0}}]);