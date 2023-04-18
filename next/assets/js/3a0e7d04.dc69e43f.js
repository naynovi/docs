"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),g=i(n),p=r,b=g["".concat(s,".").concat(p)]||g[p]||u[p]||l;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16053:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=n(67294),l=n(3905);const o={id:"get-user-token-balance-return",title:"GetUserTokenBalanceReturn",hide_table_of_contents:!1},c=void 0,s={unversionedId:"graphql/objects/get-user-token-balance-return",id:"graphql/objects/get-user-token-balance-return",title:"GetUserTokenBalanceReturn",description:"No description",source:"@site/colony/graphql/objects/get-user-token-balance-return.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/get-user-token-balance-return",permalink:"/next/graphql/objects/get-user-token-balance-return",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/get-user-token-balance-return.mdx",tags:[],version:"current",frontMatter:{id:"get-user-token-balance-return",title:"GetUserTokenBalanceReturn",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"GetReputationForTopDomainsReturn",permalink:"/next/graphql/objects/get-reputation-for-top-domains-return"},next:{title:"MembersForColonyReturn",permalink:"/next/graphql/objects/members-for-colony-return"}},i={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GetUserTokenBalanceReturn.<b>balance</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getusertokenbalancereturnbbalancebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GetUserTokenBalanceReturn.<b>inactiveBalance</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getusertokenbalancereturnbinactivebalancebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GetUserTokenBalanceReturn.<b>lockedBalance</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getusertokenbalancereturnblockedbalancebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GetUserTokenBalanceReturn.<b>activeBalance</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getusertokenbalancereturnbactivebalancebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GetUserTokenBalanceReturn.<b>pendingBalance</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getusertokenbalancereturnbpendingbalancebcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[s,i]=(0,r.useState)(c);return(0,l.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&o)},k={Bullet:d,SpecifiedBy:u,Badge:g,toc:p,Details:b};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type GetUserTokenBalanceReturn {\n  balance: String\n  inactiveBalance: String\n  lockedBalance: String\n  activeBalance: String\n  pendingBalance: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-getusertokenbalancereturnbbalancebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"GetUserTokenBalanceReturn.",(0,l.kt)("b",null,"balance"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-getusertokenbalancereturnbinactivebalancebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"GetUserTokenBalanceReturn.",(0,l.kt)("b",null,"inactiveBalance"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-getusertokenbalancereturnblockedbalancebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"GetUserTokenBalanceReturn.",(0,l.kt)("b",null,"lockedBalance"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-getusertokenbalancereturnbactivebalancebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"GetUserTokenBalanceReturn.",(0,l.kt)("b",null,"activeBalance"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-getusertokenbalancereturnbpendingbalancebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"GetUserTokenBalanceReturn.",(0,l.kt)("b",null,"pendingBalance"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/queries/get-user-token-balance"},(0,l.kt)("inlineCode",{parentName:"a"},"getUserTokenBalance")),"  ",(0,l.kt)(g,{class:"secondary",text:"query",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);