"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},l="Ether Router (`IEtherRouter`)",s={unversionedId:"colonynetwork/interfaces/ietherrouter",id:"colonynetwork/interfaces/ietherrouter",title:"Ether Router (`IEtherRouter`)",description:"Interface Methods",source:"@site/docs/colonynetwork/interfaces/ietherrouter.md",sourceDirName:"colonynetwork/interfaces",slug:"/colonynetwork/interfaces/ietherrouter",permalink:"/docs/docs/colonynetwork/interfaces/ietherrouter",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/interfaces/ietherrouter.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Colony Network (`IColonyNetwork`)",permalink:"/docs/docs/colonynetwork/interfaces/icolonynetwork"},next:{title:"Meta Colony (`IMetaColony`)",permalink:"/docs/docs/colonynetwork/interfaces/imetacolony"}},i={},d=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <strong><code>setAuthority(address authority_)</code></strong>",id:"-setauthorityaddress-authority_",level:3},{value:"\u25b8 <strong><code>setOwner(address owner_)</code></strong>",id:"-setowneraddress-owner_",level:3},{value:"\u25b8 <strong><code>setResolver(address _resolver)</code></strong>",id:"-setresolveraddress-_resolver",level:3}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ether-router-ietherrouter"},"Ether Router (",(0,a.kt)("inlineCode",{parentName:"h1"},"IEtherRouter"),")"),(0,a.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,a.kt)("h3",{id:"-setauthorityaddress-authority_"},"\u25b8 ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"setAuthority(address authority_)"))),(0,a.kt)("p",null,"Sets the EtherRouter authority. Inherited from DSAuth."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority_"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the new DSAuthority instance")))),(0,a.kt)("h3",{id:"-setowneraddress-owner_"},"\u25b8 ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"setOwner(address owner_)"))),(0,a.kt)("p",null,"Sets the EtherRouter owner. Inherited from DSAuth."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner_"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the new owner")))),(0,a.kt)("h3",{id:"-setresolveraddress-_resolver"},"\u25b8 ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"setResolver(address _resolver)"))),(0,a.kt)("p",null,"Sets the resolver address. This is used in the routing of all delegatecalls by the EtherRouter."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_resolver"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the new Resolver")))))}c.isMDXComponent=!0}}]);