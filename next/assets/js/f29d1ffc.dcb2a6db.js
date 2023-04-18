"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),k=o,m=p["".concat(i,".").concat(k)]||p[k]||u[k]||l;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36306:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>k});var r=n(87462),o=n(67294),l=n(3905);const s={id:"list-user-tokens",title:"listUserTokens",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/queries/list-user-tokens",id:"graphql/queries/list-user-tokens",title:"listUserTokens",description:"No description",source:"@site/colony/graphql/queries/list-user-tokens.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/list-user-tokens",permalink:"/next/graphql/queries/list-user-tokens",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/queries/list-user-tokens.mdx",tags:[],version:"current",frontMatter:{id:"list-user-tokens",title:"listUserTokens",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"listTokens",permalink:"/next/graphql/queries/list-tokens"},next:{title:"listUsers",permalink:"/next/graphql/queries/list-users"}},c={},d=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>listUserTokens.<b>filter</b></code><Bullet /><code>ModelUserTokensFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-listusertokensbfilterbcodemodelusertokensfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listUserTokens.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listusertokensblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>listUserTokens.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listusertokensbnexttokenbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ModelUserTokensConnection</code> <Badge class="secondary" text="object"/>',id:"modelusertokensconnection-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:a=!1}=e;const[i,c]=(0,o.useState)(a);return(0,l.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&s)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:k,Details:m};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"listUserTokens(\n  filter: ModelUserTokensFilterInput\n  limit: Int\n  nextToken: String\n): ModelUserTokensConnection\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-listusertokensbfilterbcodemodelusertokensfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"listUserTokens.",(0,l.kt)("b",null,"filter"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-tokens-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelUserTokensFilterInput"))," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-listusertokensblimitbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"listUserTokens.",(0,l.kt)("b",null,"limit"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-listusertokensbnexttokenbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"listUserTokens.",(0,l.kt)("b",null,"nextToken"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"modelusertokensconnection-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/model-user-tokens-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelUserTokensConnection"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}g.isMDXComponent=!0}}]);