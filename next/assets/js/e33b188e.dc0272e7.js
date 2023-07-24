"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=s(n),f=a,u=y["".concat(p,".").concat(f)]||y[f]||d[f]||o;return n?r.createElement(u,l(l({ref:t},c),{},{components:n})):r.createElement(u,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},22581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="Interface: ColonyData",i={unversionedId:"api/interfaces/ColonyData",id:"api/interfaces/ColonyData",title:"Interface: ColonyData",description:"Properties",source:"@site/vendor/colonyJS/packages/sdk/docs/api/interfaces/ColonyData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ColonyData",permalink:"/next/colonysdk/api/interfaces/ColonyData",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: BaseContract",permalink:"/next/colonysdk/api/interfaces/BaseContract"},next:{title:"Interface: ColonyEvent<M\\>",permalink:"/next/colonysdk/api/interfaces/ColonyEvent"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"colonyAvatarHash",id:"colonyavatarhash",level:3},{value:"colonyDisplayName",id:"colonydisplayname",level:3},{value:"colonyName",id:"colonyname",level:3},{value:"colonySafes",id:"colonysafes",level:3},{value:"colonyTokens",id:"colonytokens",level:3},{value:"isWhitelistActivated",id:"iswhitelistactivated",level:3},{value:"verifiedAddresses",id:"verifiedaddresses",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-colonydata"},"Interface: ColonyData"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"colonyavatarhash"},"colonyAvatarHash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"colonyAvatarHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"colonydisplayname"},"colonyDisplayName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"colonyDisplayName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"colonyname"},"colonyName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"colonyName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"colonysafes"},"colonySafes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"colonySafes"),": ",(0,a.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/SafeInfo"},(0,a.kt)("inlineCode",{parentName:"a"},"SafeInfo")),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"colonytokens"},"colonyTokens"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"colonyTokens"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"iswhitelistactivated"},"isWhitelistActivated"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"isWhitelistActivated"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verifiedaddresses"},"verifiedAddresses"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"verifiedAddresses"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"))}d.isMDXComponent=!0}}]);