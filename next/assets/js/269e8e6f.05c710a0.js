"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57391:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=n(87462),o=n(67294),l=n(3905);const a={id:"delete-current-version",title:"deleteCurrentVersion",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/delete-current-version",id:"graphql/mutations/delete-current-version",title:"deleteCurrentVersion",description:"No description",source:"@site/colony/graphql/mutations/delete-current-version.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-current-version",permalink:"/next/graphql/mutations/delete-current-version",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/delete-current-version.mdx",tags:[],version:"current",frontMatter:{id:"delete-current-version",title:"deleteCurrentVersion",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"deleteContractEvent",permalink:"/next/graphql/mutations/delete-contract-event"},next:{title:"deleteDomainMetadata",permalink:"/next/graphql/mutations/delete-domain-metadata"}},s={},d=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteCurrentVersion.<b>input</b></code><Bullet /><code>DeleteCurrentVersionInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletecurrentversionbinputbcodedeletecurrentversioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>deleteCurrentVersion.<b>condition</b></code><Bullet /><code>ModelCurrentVersionConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletecurrentversionbconditionbcodemodelcurrentversionconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>CurrentVersion</code> <Badge class="secondary" text="object"/>',id:"currentversion-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:i=!1}=e;const[c,s]=(0,o.useState)(i);return(0,l.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&a)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:m,Details:y};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteCurrentVersion(\n  input: DeleteCurrentVersionInput!\n  condition: ModelCurrentVersionConditionInput\n): CurrentVersion\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletecurrentversionbinputbcodedeletecurrentversioninput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteCurrentVersion.",(0,l.kt)("b",null,"input"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/delete-current-version-input"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteCurrentVersionInput!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletecurrentversionbconditionbcodemodelcurrentversionconditioninput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteCurrentVersion.",(0,l.kt)("b",null,"condition"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-current-version-condition-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelCurrentVersionConditionInput"))," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"currentversion-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/current-version"},(0,l.kt)("inlineCode",{parentName:"a"},"CurrentVersion"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}g.isMDXComponent=!0}}]);