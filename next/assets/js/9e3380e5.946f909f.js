"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3341],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={description:"What are Native Tokens in Colony, and how do they work?"},i="Native Tokens",s={unversionedId:"use/managing-funds/native-tokens",id:"use/managing-funds/native-tokens",title:"Native Tokens",description:"What are Native Tokens in Colony, and how do they work?",source:"@site/colony/use/managing-funds/native-tokens.md",sourceDirName:"use/managing-funds",slug:"/use/managing-funds/native-tokens",permalink:"/next/use/managing-funds/native-tokens",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/managing-funds/native-tokens.md",tags:[],version:"current",frontMatter:{description:"What are Native Tokens in Colony, and how do they work?"},sidebar:"use",previous:{title:"Move Funds Between Teams",permalink:"/next/use/managing-funds/move-funds"},next:{title:"Sending Funds to a Colony",permalink:"/next/use/managing-funds/sending-funds-to-a-colony"}},c={},l=[],u={toc:l};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"native-tokens"},"Native Tokens"),(0,o.kt)("p",null,"Every colony has its own native token that complements its reputation. Payment in a colony\u2019s native token confers ",(0,o.kt)("strong",{parentName:"p"},"reputation")," ",(0,o.kt)("strong",{parentName:"p"},"in the team from which it was received, as well as all parent Teams, including Root.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"They do not earn any reputation in child Teams, as well as siblings Teams.")),(0,o.kt)("p",null,"Both internal tokens and reputation are required to create motions, raise disputes, and vote."),(0,o.kt)("p",null,"Users can decide to adopt an ",(0,o.kt)("a",{parentName:"p",href:"/next/use/launch-a-colony#step-2b-using-an-existing-token"},"existing ERC20 token")," as their native token (i.e. DAI or ",(0,o.kt)("em",{parentName:"p"},"USDC"),"), or to ",(0,o.kt)("a",{parentName:"p",href:"/next/use/launch-a-colony#step-2a-creating-a-new-token"},"create a new one"),". Native Tokens are a key aspect when creating a new colony."),(0,o.kt)("p",null,"You can also check the Native Token contract address and add it to your Metamask."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(9931).Z,width:"2878",height:"1634"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A colony native tokens are locked and non-transferrable by default. They can be ",(0,o.kt)("a",{parentName:"p",href:"/next/use/managing-funds/unlock-token"},"unlocked")," anytime, so that they may be freely transferred between accounts. **** This action is irreversible and only applies to new tokens created with Colony.")))}p.isMDXComponent=!0},9931:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/AddTokenMetamask-7c4b09d200dabc4acc9826d78e4c1343.gif"}}]);