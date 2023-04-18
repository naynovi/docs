"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,y=c["".concat(a,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(y,l(l({ref:t},s),{},{components:n})):o.createElement(y,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66739:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>a,toc:()=>m});var o=n(87462),i=n(67294),r=n(3905);const l={id:"model-user-condition-input",title:"ModelUserConditionInput",hide_table_of_contents:!1},d=void 0,a={unversionedId:"graphql/inputs/model-user-condition-input",id:"graphql/inputs/model-user-condition-input",title:"ModelUserConditionInput",description:"No description",source:"@site/colony/graphql/inputs/model-user-condition-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-user-condition-input",permalink:"/next/graphql/inputs/model-user-condition-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-user-condition-input.mdx",tags:[],version:"current",frontMatter:{id:"model-user-condition-input",title:"ModelUserConditionInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelTokenTypeInput",permalink:"/next/graphql/inputs/model-token-type-input"},next:{title:"ModelUserFilterInput",permalink:"/next/graphql/inputs/model-user-filter-input"}},p={},s=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserConditionInput.<b>name</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeluserconditioninputbnamebcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserConditionInput.<b>profileId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeluserconditioninputbprofileidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserConditionInput.<b>and</b></code><Bullet /><code>[ModelUserConditionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeluserconditioninputbandbcodemodeluserconditioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserConditionInput.<b>or</b></code><Bullet /><code>[ModelUserConditionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeluserconditioninputborbcodemodeluserconditioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelUserConditionInput.<b>not</b></code><Bullet /><code>ModelUserConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeluserconditioninputbnotbcodemodeluserconditioninput-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:d=!1}=e;const[a,p]=(0,i.useState)(d);return(0,r.kt)("details",(0,o.Z)({},a?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},a?t:n),a&&l)},f={Bullet:s,SpecifiedBy:u,Badge:c,toc:m,Details:y};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelUserConditionInput {\n  name: ModelStringInput\n  profileId: ModelIDInput\n  and: [ModelUserConditionInput]\n  or: [ModelUserConditionInput]\n  not: ModelUserConditionInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeluserconditioninputbnamebcodemodelstringinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserConditionInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeluserconditioninputbprofileidbcodemodelidinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserConditionInput.",(0,r.kt)("b",null,"profileId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeluserconditioninputbandbcodemodeluserconditioninput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserConditionInput.",(0,r.kt)("b",null,"and"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-condition-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModelUserConditionInput]"))," ",(0,r.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeluserconditioninputborbcodemodeluserconditioninput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserConditionInput.",(0,r.kt)("b",null,"or"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-condition-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModelUserConditionInput]"))," ",(0,r.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeluserconditioninputbnotbcodemodeluserconditioninput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelUserConditionInput.",(0,r.kt)("b",null,"not"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-condition-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelUserConditionInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/mutations/create-user"},(0,r.kt)("inlineCode",{parentName:"a"},"createUser")),"  ",(0,r.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/mutations/delete-user"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteUser")),"  ",(0,r.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/inputs/model-user-condition-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelUserConditionInput")),"  ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/mutations/update-user"},(0,r.kt)("inlineCode",{parentName:"a"},"updateUser")),"  ",(0,r.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);