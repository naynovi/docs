"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25379],{3905:(n,e,t)=>{t.d(e,{Zo:()=>r,kt:()=>m});var o=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,l=function(n,e){if(null==n)return{};var t,o,l={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var c=o.createContext({}),u=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):d(d({},e),n)),t},r=function(n){var e=u(n.components);return o.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,l=n.mdxType,i=n.originalType,c=n.parentName,r=a(n,["components","mdxType","originalType","parentName"]),p=u(t),m=l,y=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return t?o.createElement(y,d(d({ref:e},r),{},{components:t})):o.createElement(y,d({ref:e},r))}));function m(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var i=t.length,d=new Array(i);d[0]=p;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:l,d[1]=a;for(var u=2;u<i;u++)d[u]=t[u];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6046:(n,e,t)=>{t.r(e),t.d(e,{Badge:()=>p,Bullet:()=>r,Details:()=>y,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>a,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var o=t(87462),l=t(67294),i=t(3905);const d={id:"model-colony-funds-claim-condition-input",title:"ModelColonyFundsClaimConditionInput",hide_table_of_contents:!1},a=void 0,c={unversionedId:"graphql/inputs/model-colony-funds-claim-condition-input",id:"graphql/inputs/model-colony-funds-claim-condition-input",title:"ModelColonyFundsClaimConditionInput",description:"No description",source:"@site/colony/graphql/inputs/model-colony-funds-claim-condition-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-colony-funds-claim-condition-input",permalink:"/next/graphql/inputs/model-colony-funds-claim-condition-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-colony-funds-claim-condition-input.mdx",tags:[],version:"current",frontMatter:{id:"model-colony-funds-claim-condition-input",title:"ModelColonyFundsClaimConditionInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelColonyFilterInput",permalink:"/next/graphql/inputs/model-colony-filter-input"},next:{title:"ModelColonyFundsClaimFilterInput",permalink:"/next/graphql/inputs/model-colony-funds-claim-filter-input"}},u={},r=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=n=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:n.url,title:"Specified by "+n.url},"\u2398")),p=n=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+n.class},n.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFundsClaimConditionInput.<b>createdAtBlock</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbcreatedatblockbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFundsClaimConditionInput.<b>createdAt</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbcreatedatbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFundsClaimConditionInput.<b>amount</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbamountbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFundsClaimConditionInput.<b>and</b></code><Bullet /><code>[ModelColonyFundsClaimConditionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbandbcodemodelcolonyfundsclaimconditioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFundsClaimConditionInput.<b>or</b></code><Bullet /><code>[ModelColonyFundsClaimConditionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputborbcodemodelcolonyfundsclaimconditioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFundsClaimConditionInput.<b>not</b></code><Bullet /><code>ModelColonyFundsClaimConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbnotbcodemodelcolonyfundsclaimconditioninput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFundsClaimConditionInput.<b>colonyFundsClaimsId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbcolonyfundsclaimsidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyFundsClaimConditionInput.<b>colonyFundsClaimTokenId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbcolonyfundsclaimtokenidbcodemodelidinput-",level:4},{value:"Member of",id:"member-of",level:3}],y=n=>{let{dataOpen:e,dataClose:t,children:d,startOpen:a=!1}=n;const[c,u]=(0,l.useState)(a);return(0,i.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:n=>{n.preventDefault(),u((n=>!n))},style:{listStyle:"none"}},c?e:t),c&&d)},f={Bullet:r,SpecifiedBy:s,Badge:p,toc:m,Details:y};function k(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelColonyFundsClaimConditionInput {\n  createdAtBlock: ModelIntInput\n  createdAt: ModelStringInput\n  amount: ModelStringInput\n  and: [ModelColonyFundsClaimConditionInput]\n  or: [ModelColonyFundsClaimConditionInput]\n  not: ModelColonyFundsClaimConditionInput\n  colonyFundsClaimsId: ModelIDInput\n  colonyFundsClaimTokenId: ModelIDInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbcreatedatblockbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFundsClaimConditionInput.",(0,i.kt)("b",null,"createdAtBlock"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbcreatedatbcodemodelstringinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFundsClaimConditionInput.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbamountbcodemodelstringinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFundsClaimConditionInput.",(0,i.kt)("b",null,"amount"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbandbcodemodelcolonyfundsclaimconditioninput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFundsClaimConditionInput.",(0,i.kt)("b",null,"and"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-funds-claim-condition-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelColonyFundsClaimConditionInput]"))," ",(0,i.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputborbcodemodelcolonyfundsclaimconditioninput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFundsClaimConditionInput.",(0,i.kt)("b",null,"or"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-funds-claim-condition-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelColonyFundsClaimConditionInput]"))," ",(0,i.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbnotbcodemodelcolonyfundsclaimconditioninput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFundsClaimConditionInput.",(0,i.kt)("b",null,"not"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-funds-claim-condition-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelColonyFundsClaimConditionInput"))," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbcolonyfundsclaimsidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFundsClaimConditionInput.",(0,i.kt)("b",null,"colonyFundsClaimsId"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyfundsclaimconditioninputbcolonyfundsclaimtokenidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyFundsClaimConditionInput.",(0,i.kt)("b",null,"colonyFundsClaimTokenId"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/mutations/create-colony-funds-claim"},(0,i.kt)("inlineCode",{parentName:"a"},"createColonyFundsClaim")),"  ",(0,i.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/mutations/delete-colony-funds-claim"},(0,i.kt)("inlineCode",{parentName:"a"},"deleteColonyFundsClaim")),"  ",(0,i.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-colony-funds-claim-condition-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelColonyFundsClaimConditionInput")),"  ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/mutations/update-colony-funds-claim"},(0,i.kt)("inlineCode",{parentName:"a"},"updateColonyFundsClaim")),"  ",(0,i.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);