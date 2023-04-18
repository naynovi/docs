"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82746],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var o=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=o.createContext({}),s=function(e){var n=o.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),y=l,m=u["".concat(r,".").concat(y)]||u[y]||p[y]||i;return t?o.createElement(m,d(d({ref:n},c),{},{components:t})):o.createElement(m,d({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,d=new Array(i);d[0]=u;var a={};for(var r in n)hasOwnProperty.call(n,r)&&(a[r]=n[r]);a.originalType=e,a.mdxType="string"==typeof e?e:l,d[1]=a;for(var s=2;s<i;s++)d[s]=t[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77474:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>y});var o=t(87462),l=t(67294),i=t(3905);const d={id:"model-colony-extension-condition-input",title:"ModelColonyExtensionConditionInput",hide_table_of_contents:!1},a=void 0,r={unversionedId:"graphql/inputs/model-colony-extension-condition-input",id:"graphql/inputs/model-colony-extension-condition-input",title:"ModelColonyExtensionConditionInput",description:"No description",source:"@site/colony/graphql/inputs/model-colony-extension-condition-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-colony-extension-condition-input",permalink:"/next/graphql/inputs/model-colony-extension-condition-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-colony-extension-condition-input.mdx",tags:[],version:"current",frontMatter:{id:"model-colony-extension-condition-input",title:"ModelColonyExtensionConditionInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelColonyConditionInput",permalink:"/next/graphql/inputs/model-colony-condition-input"},next:{title:"ModelColonyExtensionFilterInput",permalink:"/next/graphql/inputs/model-colony-extension-filter-input"}},s={},c=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>colonyId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbcolonyidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>hash</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbhashbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>installedBy</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbinstalledbybcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>installedAt</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbinstalledatbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>isDeprecated</b></code><Bullet /><code>ModelBooleanInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbisdeprecatedbcodemodelbooleaninput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>isDeleted</b></code><Bullet /><code>ModelBooleanInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbisdeletedbcodemodelbooleaninput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>isInitialized</b></code><Bullet /><code>ModelBooleanInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbisinitializedbcodemodelbooleaninput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>version</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbversionbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>and</b></code><Bullet /><code>[ModelColonyExtensionConditionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbandbcodemodelcolonyextensionconditioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>or</b></code><Bullet /><code>[ModelColonyExtensionConditionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputborbcodemodelcolonyextensionconditioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyExtensionConditionInput.<b>not</b></code><Bullet /><code>ModelColonyExtensionConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbnotbcodemodelcolonyextensionconditioninput-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:n,dataClose:t,children:d,startOpen:a=!1}=e;const[r,s]=(0,l.useState)(a);return(0,i.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},r?n:t),r&&d)},x={Bullet:c,SpecifiedBy:p,Badge:u,toc:y,Details:m};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelColonyExtensionConditionInput {\n  colonyId: ModelIDInput\n  hash: ModelStringInput\n  installedBy: ModelStringInput\n  installedAt: ModelIntInput\n  isDeprecated: ModelBooleanInput\n  isDeleted: ModelBooleanInput\n  isInitialized: ModelBooleanInput\n  version: ModelIntInput\n  and: [ModelColonyExtensionConditionInput]\n  or: [ModelColonyExtensionConditionInput]\n  not: ModelColonyExtensionConditionInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbcolonyidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"colonyId"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbhashbcodemodelstringinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"hash"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbinstalledbybcodemodelstringinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"installedBy"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbinstalledatbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"installedAt"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbisdeprecatedbcodemodelbooleaninput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"isDeprecated"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-boolean-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelBooleanInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbisdeletedbcodemodelbooleaninput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"isDeleted"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-boolean-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelBooleanInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbisinitializedbcodemodelbooleaninput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"isInitialized"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-boolean-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelBooleanInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbversionbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"version"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbandbcodemodelcolonyextensionconditioninput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"and"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-extension-condition-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelColonyExtensionConditionInput]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputborbcodemodelcolonyextensionconditioninput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"or"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-extension-condition-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelColonyExtensionConditionInput]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyextensionconditioninputbnotbcodemodelcolonyextensionconditioninput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyExtensionConditionInput.",(0,i.kt)("b",null,"not"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-extension-condition-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelColonyExtensionConditionInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/mutations/create-colony-extension"},(0,i.kt)("inlineCode",{parentName:"a"},"createColonyExtension")),"  ",(0,i.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/mutations/delete-colony-extension"},(0,i.kt)("inlineCode",{parentName:"a"},"deleteColonyExtension")),"  ",(0,i.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-colony-extension-condition-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelColonyExtensionConditionInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/mutations/update-colony-extension"},(0,i.kt)("inlineCode",{parentName:"a"},"updateColonyExtension")),"  ",(0,i.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);