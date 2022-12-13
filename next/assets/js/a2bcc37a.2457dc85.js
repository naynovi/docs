"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9461],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>f});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var d=o.createContext({}),u=function(n){var e=o.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=u(n.components);return o.createElement(d.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,d=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(d,".").concat(f)]||p[f]||c[f]||a;return t?o.createElement(m,i(i({ref:e},l),{},{components:t})):o.createElement(m,i({ref:e},l))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s.mdxType="string"==typeof n?n:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9436:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={description:"How to send and claim an ERC20 token to your colony."},i="Sending Funds to a Colony",s={unversionedId:"use/managing-funds/sending-funds-to-a-colony",id:"use/managing-funds/sending-funds-to-a-colony",title:"Sending Funds to a Colony",description:"How to send and claim an ERC20 token to your colony.",source:"@site/colony/use/managing-funds/sending-funds-to-a-colony.md",sourceDirName:"use/managing-funds",slug:"/use/managing-funds/sending-funds-to-a-colony",permalink:"/next/use/managing-funds/sending-funds-to-a-colony",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/managing-funds/sending-funds-to-a-colony.md",tags:[],version:"current",frontMatter:{description:"How to send and claim an ERC20 token to your colony."},sidebar:"use",previous:{title:"Native Tokens",permalink:"/next/use/managing-funds/native-tokens"},next:{title:"Token Activation",permalink:"/next/use/managing-funds/token-activation"}},d={},u=[{value:"Sending Funds",id:"sending-funds",level:3},{value:"Claiming Funds",id:"claiming-funds",level:3}],l={toc:u};function c(n){let{components:e,...a}=n;return(0,r.kt)("wrapper",(0,o.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sending-funds-to-a-colony"},"Sending Funds to a Colony"),(0,r.kt)("h3",{id:"sending-funds"},"Sending Funds"),(0,r.kt)("p",null,"To send funds to your colony, you need to send them to the colony's address you find in the top-left corner of your Dashboard."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to only send ",(0,r.kt)("strong",{parentName:"p"},"ERC20 tokens on xDai")," to your colony.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"Do ",(0,r.kt)("strong",{parentName:"em"},"not")," send ETH or any ERC20 tokens from Ethereum directly to your colony.")," If your funds are currently on any other chain than xDai, such as Ethereum mainnet, you will first need to bridge them through ",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/for-users/bridges/omnibridge"},"OmniBridge")," before sending them to your colony. Otherwise your funds will be lost irreversibly. Before sending a significant amount of funds, it is advisable to send a small amount for testing purposes first. In case of doubt, please reach out on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/Qjupxvg"},"Discord"),"."," ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sending 0.01 xDai to a colony using Metamask",src:t(4682).Z,width:"2878",height:"1636"})),(0,r.kt)("h3",{id:"claiming-funds"},"Claiming Funds"),(0,r.kt)("p",null,"Funds sent to a colony address will not appear in the colony's treasury until they are claimed by a member of the colony."),(0,r.kt)("p",null,"To claim funds, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Events"),', wait for the token transfers to load, and click "',(0,r.kt)("strong",{parentName:"p"},"Claim"),'".'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5865).Z,width:"2878",height:"1636"})),(0,r.kt)("p",null,"Claimed funds will appear in the ",(0,r.kt)("strong",{parentName:"p"},"Root")," balance",(0,r.kt)("strong",{parentName:"p"},",")," and can be later transferred to any other Team using a motion, or by anyone who has the ",(0,r.kt)("a",{parentName:"p",href:"/next/use/advanced-features/permissions#funding"},"Funding")," permission in Root."))}c.isMDXComponent=!0},5865:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/ClaimFunds-34dc67585e8515ff25c2a7536edb8861.gif"},4682:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/SendTokens-79f30dfc8b57b2256abeb7f34afe82b4.gif"}}]);