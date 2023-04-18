"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?l.createElement(b,a(a({ref:t},d),{},{components:n})):l.createElement(b,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var c=2;c<i;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95337:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var l=n(87462),o=n(67294),i=n(3905);const a={id:"model-subscription-int-input",title:"ModelSubscriptionIntInput",hide_table_of_contents:!1},r=void 0,s={unversionedId:"graphql/inputs/model-subscription-int-input",id:"graphql/inputs/model-subscription-int-input",title:"ModelSubscriptionIntInput",description:"No description",source:"@site/colony/graphql/inputs/model-subscription-int-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-subscription-int-input",permalink:"/next/graphql/inputs/model-subscription-int-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-subscription-int-input.mdx",tags:[],version:"current",frontMatter:{id:"model-subscription-int-input",title:"ModelSubscriptionIntInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelSubscriptionIDInput",permalink:"/next/graphql/inputs/model-subscription-idinput"},next:{title:"ModelSubscriptionProfileFilterInput",permalink:"/next/graphql/inputs/model-subscription-profile-filter-input"}},c={},d=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>ne</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputbnebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>eq</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputbeqbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>le</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputblebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>lt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputbltbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>ge</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputbgebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>gt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputbgtbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>between</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputbbetweenbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputbinbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionIntInput.<b>notIn</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-modelsubscriptionintinputbnotinbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:r=!1}=e;const[s,c]=(0,o.useState)(r);return(0,i.kt)("details",(0,l.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&a)},y={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:b};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelSubscriptionIntInput {\n  ne: Int\n  eq: Int\n  le: Int\n  lt: Int\n  ge: Int\n  gt: Int\n  between: [Int]\n  in: [Int]\n  notIn: [Int]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputbnebcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"ne"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputbeqbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"eq"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputblebcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"le"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputbltbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"lt"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputbgebcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"ge"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputbgtbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"gt"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputbbetweenbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"between"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputbinbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"in"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionintinputbnotinbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionIntInput.",(0,i.kt)("b",null,"notIn"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-colony-action-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionColonyActionFilterInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-colony-extension-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionColonyExtensionFilterInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-colony-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionColonyFilterInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-colony-funds-claim-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionColonyFundsClaimFilterInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-current-version-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionCurrentVersionFilterInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-domain-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionDomainFilterInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-token-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionTokenFilterInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);