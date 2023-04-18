"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(d,".").concat(p)]||u[p]||k[p]||r;return n?a.createElement(m,s(s({ref:t},i),{},{components:n})):a.createElement(m,s({ref:t},i))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43266:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>k,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(87462),o=n(67294),r=n(3905);const s={id:"user-tokens",title:"UserTokens",hide_table_of_contents:!1},l=void 0,d={unversionedId:"graphql/objects/user-tokens",id:"graphql/objects/user-tokens",title:"UserTokens",description:"No description",source:"@site/colony/graphql/objects/user-tokens.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/user-tokens",permalink:"/next/graphql/objects/user-tokens",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/user-tokens.mdx",tags:[],version:"current",frontMatter:{id:"user-tokens",title:"UserTokens",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserDomainReputation",permalink:"/next/graphql/objects/user-domain-reputation"},next:{title:"User",permalink:"/next/graphql/objects/user"}},c={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),k=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserTokens.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertokensbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserTokens.<b>tokenID</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertokensbtokenidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserTokens.<b>userID</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertokensbuseridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserTokens.<b>token</b></code><Bullet /><code>Token!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-usertokensbtokenbcodetoken--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserTokens.<b>user</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-usertokensbuserbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserTokens.<b>createdAt</b></code><Bullet /><code>AWSDateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertokensbcreatedatbcodeawsdatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserTokens.<b>updatedAt</b></code><Bullet /><code>AWSDateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertokensbupdatedatbcodeawsdatetime--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[d,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&s)},y={Bullet:i,SpecifiedBy:k,Badge:u,toc:p,Details:m};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserTokens {\n  id: ID!\n  tokenID: ID!\n  userID: ID!\n  token: Token!\n  user: User!\n  createdAt: AWSDateTime!\n  updatedAt: AWSDateTime!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usertokensbidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserTokens.",(0,r.kt)("b",null,"id"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usertokensbtokenidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserTokens.",(0,r.kt)("b",null,"tokenID"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usertokensbuseridbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserTokens.",(0,r.kt)("b",null,"userID"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usertokensbtokenbcodetoken--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserTokens.",(0,r.kt)("b",null,"token"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/token"},(0,r.kt)("inlineCode",{parentName:"a"},"Token!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usertokensbuserbcodeuser--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserTokens.",(0,r.kt)("b",null,"user"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usertokensbcreatedatbcodeawsdatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserTokens.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,r.kt)("inlineCode",{parentName:"a"},"AWSDateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usertokensbupdatedatbcodeawsdatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserTokens.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/scalars/awsdate-time"},(0,r.kt)("inlineCode",{parentName:"a"},"AWSDateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/mutations/create-user-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"createUserTokens")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/mutations/delete-user-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteUserTokens")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/get-user-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"getUserTokens")),"  ",(0,r.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-create-user-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"onCreateUserTokens")),"  ",(0,r.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-delete-user-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"onDeleteUserTokens")),"  ",(0,r.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-update-user-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"onUpdateUserTokens")),"  ",(0,r.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/mutations/update-user-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"updateUserTokens")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/objects/model-user-tokens-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelUserTokensConnection")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);