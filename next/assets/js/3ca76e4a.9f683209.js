"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),k=i(n),u=r,y=k["".concat(s,".").concat(u)]||k[u]||p[u]||a;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=k;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var i=2;i<a;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12333:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=n(87462),r=n(67294),a=n(3905);const l={id:"get-token-by-address",title:"getTokenByAddress",hide_table_of_contents:!1},d=void 0,s={unversionedId:"graphql/queries/get-token-by-address",id:"graphql/queries/get-token-by-address",title:"getTokenByAddress",description:"No description",source:"@site/colony/graphql/queries/get-token-by-address.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-token-by-address",permalink:"/next/graphql/queries/get-token-by-address",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/queries/get-token-by-address.mdx",tags:[],version:"current",frontMatter:{id:"get-token-by-address",title:"getTokenByAddress",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"getReputationForTopDomains",permalink:"/next/graphql/queries/get-reputation-for-top-domains"},next:{title:"getTokenFromEverywhere",permalink:"/next/graphql/queries/get-token-from-everywhere"}},i={},c=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>getTokenByAddress.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-gettokenbyaddressbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getTokenByAddress.<b>sortDirection</b></code><Bullet /><code>ModelSortDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-gettokenbyaddressbsortdirectionbcodemodelsortdirection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getTokenByAddress.<b>filter</b></code><Bullet /><code>ModelTokenFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-gettokenbyaddressbfilterbcodemodeltokenfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getTokenByAddress.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-gettokenbyaddressblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>getTokenByAddress.<b>nextToken</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-gettokenbyaddressbnexttokenbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ModelTokenConnection</code> <Badge class="secondary" text="object"/>',id:"modeltokenconnection-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:d=!1}=e;const[s,i]=(0,r.useState)(d);return(0,a.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&l)},g={Bullet:c,SpecifiedBy:p,Badge:k,toc:u,Details:y};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"getTokenByAddress(\n  id: ID!\n  sortDirection: ModelSortDirection\n  filter: ModelTokenFilterInput\n  limit: Int\n  nextToken: String\n): ModelTokenConnection\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-gettokenbyaddressbidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"getTokenByAddress.",(0,a.kt)("b",null,"id"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-gettokenbyaddressbsortdirectionbcodemodelsortdirection-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"getTokenByAddress.",(0,a.kt)("b",null,"sortDirection"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/enums/model-sort-direction"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelSortDirection"))," ",(0,a.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-gettokenbyaddressbfilterbcodemodeltokenfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"getTokenByAddress.",(0,a.kt)("b",null,"filter"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-token-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelTokenFilterInput"))," ",(0,a.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-gettokenbyaddressblimitbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"getTokenByAddress.",(0,a.kt)("b",null,"limit"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-gettokenbyaddressbnexttokenbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"getTokenByAddress.",(0,a.kt)("b",null,"nextToken"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"modeltokenconnection-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/objects/model-token-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelTokenConnection"))," ",(0,a.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}m.isMDXComponent=!0}}]);