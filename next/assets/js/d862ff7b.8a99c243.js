"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85519:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>f});var r=n(87462),o=n(67294),a=n(3905);const l={id:"on-delete-contract-event",title:"onDeleteContractEvent",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/subscriptions/on-delete-contract-event",id:"graphql/subscriptions/on-delete-contract-event",title:"onDeleteContractEvent",description:"No description",source:"@site/colony/graphql/subscriptions/on-delete-contract-event.mdx",sourceDirName:"graphql/subscriptions",slug:"/graphql/subscriptions/on-delete-contract-event",permalink:"/next/graphql/subscriptions/on-delete-contract-event",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/subscriptions/on-delete-contract-event.mdx",tags:[],version:"current",frontMatter:{id:"on-delete-contract-event",title:"onDeleteContractEvent",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"onDeleteColony",permalink:"/next/graphql/subscriptions/on-delete-colony"},next:{title:"onDeleteCurrentVersion",permalink:"/next/graphql/subscriptions/on-delete-current-version"}},s={},p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>onDeleteContractEvent.<b>filter</b></code><Bullet /><code>ModelSubscriptionContractEventFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-ondeletecontracteventbfilterbcodemodelsubscriptioncontracteventfilterinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ContractEvent</code> <Badge class="secondary" text="object"/>',id:"contractevent-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:c=!1}=e;const[i,s]=(0,o.useState)(c);return(0,a.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},b={Bullet:p,SpecifiedBy:d,Badge:u,toc:f,Details:m};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"onDeleteContractEvent(\n  filter: ModelSubscriptionContractEventFilterInput\n): ContractEvent\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-ondeletecontracteventbfilterbcodemodelsubscriptioncontracteventfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"onDeleteContractEvent.",(0,a.kt)("b",null,"filter"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-contract-event-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionContractEventFilterInput"))," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"contractevent-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/objects/contract-event"},(0,a.kt)("inlineCode",{parentName:"a"},"ContractEvent"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}v.isMDXComponent=!0}}]);