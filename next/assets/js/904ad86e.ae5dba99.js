"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,p=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(p,i(i({ref:t},d),{},{components:n})):r.createElement(p,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(2991);const i={description:"Colony Extensions - MOAR POWER!",sidebar_position:8},c="Extensions",s={unversionedId:"advanced-features/extensions/index",id:"advanced-features/extensions/index",title:"Extensions",description:"Colony Extensions - MOAR POWER!",source:"@site/colony/craft/advanced-features/extensions/index.md",sourceDirName:"advanced-features/extensions",slug:"/advanced-features/extensions/",permalink:"/next/craft/advanced-features/extensions/",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/advanced-features/extensions/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Colony Extensions - MOAR POWER!",sidebar_position:8},sidebar:"sidebar",previous:{title:"Advanced Payments",permalink:"/next/craft/advanced-features/advanced-payments"},next:{title:"\ud83d\udc69\u2696 Governance (Reputation Weighted)",permalink:"/next/craft/advanced-features/extensions/governance/"}},l={},d=[],u={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extensions"},"Extensions"),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0},2991:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7294),a=n(6010),o=n(3438),i=n(9960),c=n(3919),s=n(5999);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function f(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},n)}function m(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",u),title:i},i))}function p(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:n}=e;const a=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:a,title:n.label,description:null==i?void 0:i.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}}}]);