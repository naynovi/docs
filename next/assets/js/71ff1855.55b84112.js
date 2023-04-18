"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11858:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>y});var o=n(87462),r=n(67294),a=n(3905);const l={id:"on-update-colony-action",title:"onUpdateColonyAction",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/subscriptions/on-update-colony-action",id:"graphql/subscriptions/on-update-colony-action",title:"onUpdateColonyAction",description:"No description",source:"@site/colony/graphql/subscriptions/on-update-colony-action.mdx",sourceDirName:"graphql/subscriptions",slug:"/graphql/subscriptions/on-update-colony-action",permalink:"/next/graphql/subscriptions/on-update-colony-action",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/subscriptions/on-update-colony-action.mdx",tags:[],version:"current",frontMatter:{id:"on-update-colony-action",title:"onUpdateColonyAction",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"onDeleteWatchedColonies",permalink:"/next/graphql/subscriptions/on-delete-watched-colonies"},next:{title:"onUpdateColonyExtension",permalink:"/next/graphql/subscriptions/on-update-colony-extension"}},p={},s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>onUpdateColonyAction.<b>filter</b></code><Bullet /><code>ModelSubscriptionColonyActionFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onupdatecolonyactionbfilterbcodemodelsubscriptioncolonyactionfilterinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ColonyAction</code> <Badge class="secondary" text="object"/>',id:"colonyaction-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,p]=(0,r.useState)(i);return(0,a.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},m={Bullet:s,SpecifiedBy:d,Badge:u,toc:y,Details:f};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"onUpdateColonyAction(\n  filter: ModelSubscriptionColonyActionFilterInput\n): ColonyAction\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onupdatecolonyactionbfilterbcodemodelsubscriptioncolonyactionfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"onUpdateColonyAction.",(0,a.kt)("b",null,"filter"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-colony-action-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionColonyActionFilterInput"))," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"colonyaction-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/objects/colony-action"},(0,a.kt)("inlineCode",{parentName:"a"},"ColonyAction"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}b.isMDXComponent=!0}}]);