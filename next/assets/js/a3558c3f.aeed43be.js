"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64907:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),o=n(67294),a=n(3905);const i={id:"create-current-version",title:"createCurrentVersion",hide_table_of_contents:!1},c=void 0,l={unversionedId:"graphql/mutations/create-current-version",id:"graphql/mutations/create-current-version",title:"createCurrentVersion",description:"No description",source:"@site/colony/graphql/mutations/create-current-version.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-current-version",permalink:"/next/graphql/mutations/create-current-version",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/create-current-version.mdx",tags:[],version:"current",frontMatter:{id:"create-current-version",title:"createCurrentVersion",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createContractEvent",permalink:"/next/graphql/mutations/create-contract-event"},next:{title:"createDomainMetadata",permalink:"/next/graphql/mutations/create-domain-metadata"}},s={},u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createCurrentVersion.<b>input</b></code><Bullet /><code>CreateCurrentVersionInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcurrentversionbinputbcodecreatecurrentversioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createCurrentVersion.<b>condition</b></code><Bullet /><code>ModelCurrentVersionConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcurrentversionbconditionbcodemodelcurrentversionconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>CurrentVersion</code> <Badge class="secondary" text="object"/>',id:"currentversion-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[l,s]=(0,o.useState)(c);return(0,a.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&i)},f={Bullet:u,SpecifiedBy:d,Badge:p,toc:m,Details:y};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"createCurrentVersion(\n  input: CreateCurrentVersionInput!\n  condition: ModelCurrentVersionConditionInput\n): CurrentVersion\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createcurrentversionbinputbcodecreatecurrentversioninput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"createCurrentVersion.",(0,a.kt)("b",null,"input"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/create-current-version-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateCurrentVersionInput!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createcurrentversionbconditionbcodemodelcurrentversionconditioninput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"createCurrentVersion.",(0,a.kt)("b",null,"condition"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-current-version-condition-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelCurrentVersionConditionInput"))," ",(0,a.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"currentversion-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/objects/current-version"},(0,a.kt)("inlineCode",{parentName:"a"},"CurrentVersion"))," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}g.isMDXComponent=!0}}]);