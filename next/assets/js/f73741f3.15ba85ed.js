"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?o.createElement(b,r(r({ref:t},d),{},{components:n})):o.createElement(b,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78068:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=n(87462),i=n(67294),l=n(3905);const r={id:"model-subscription-watched-colonies-filter-input",title:"ModelSubscriptionWatchedColoniesFilterInput",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/inputs/model-subscription-watched-colonies-filter-input",id:"graphql/inputs/model-subscription-watched-colonies-filter-input",title:"ModelSubscriptionWatchedColoniesFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-subscription-watched-colonies-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-subscription-watched-colonies-filter-input",permalink:"/next/graphql/inputs/model-subscription-watched-colonies-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-subscription-watched-colonies-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-subscription-watched-colonies-filter-input",title:"ModelSubscriptionWatchedColoniesFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelSubscriptionUserTokensFilterInput",permalink:"/next/graphql/inputs/model-subscription-user-tokens-filter-input"},next:{title:"ModelTokenConditionInput",permalink:"/next/graphql/inputs/model-token-condition-input"}},c={},d=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionWatchedColoniesFilterInput.<b>id</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputbidbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionWatchedColoniesFilterInput.<b>colonyID</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputbcolonyidbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionWatchedColoniesFilterInput.<b>userID</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputbuseridbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionWatchedColoniesFilterInput.<b>and</b></code><Bullet /><code>[ModelSubscriptionWatchedColoniesFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputbandbcodemodelsubscriptionwatchedcoloniesfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionWatchedColoniesFilterInput.<b>or</b></code><Bullet /><code>[ModelSubscriptionWatchedColoniesFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputborbcodemodelsubscriptionwatchedcoloniesfilterinput--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:a=!1}=e;const[s,c]=(0,i.useState)(a);return(0,l.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&r)},h={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:b};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelSubscriptionWatchedColoniesFilterInput {\n  id: ModelSubscriptionIDInput\n  colonyID: ModelSubscriptionIDInput\n  userID: ModelSubscriptionIDInput\n  and: [ModelSubscriptionWatchedColoniesFilterInput]\n  or: [ModelSubscriptionWatchedColoniesFilterInput]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputbidbcodemodelsubscriptionidinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionWatchedColoniesFilterInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputbcolonyidbcodemodelsubscriptionidinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionWatchedColoniesFilterInput.",(0,l.kt)("b",null,"colonyID"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputbuseridbcodemodelsubscriptionidinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionWatchedColoniesFilterInput.",(0,l.kt)("b",null,"userID"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputbandbcodemodelsubscriptionwatchedcoloniesfilterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionWatchedColoniesFilterInput.",(0,l.kt)("b",null,"and"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-watched-colonies-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[ModelSubscriptionWatchedColoniesFilterInput]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionwatchedcoloniesfilterinputborbcodemodelsubscriptionwatchedcoloniesfilterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionWatchedColoniesFilterInput.",(0,l.kt)("b",null,"or"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-watched-colonies-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[ModelSubscriptionWatchedColoniesFilterInput]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-watched-colonies-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionWatchedColoniesFilterInput")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-create-watched-colonies"},(0,l.kt)("inlineCode",{parentName:"a"},"onCreateWatchedColonies")),"  ",(0,l.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-delete-watched-colonies"},(0,l.kt)("inlineCode",{parentName:"a"},"onDeleteWatchedColonies")),"  ",(0,l.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-update-watched-colonies"},(0,l.kt)("inlineCode",{parentName:"a"},"onUpdateWatchedColonies")),"  ",(0,l.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);