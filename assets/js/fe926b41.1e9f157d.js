"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5665],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>p});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(a),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||r;return a?t.createElement(m,s(s({ref:n},u),{},{components:a})):t.createElement(m,s({ref:n},u))}));function p(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},72083:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(87462),o=(a(67294),a(3905));const r={description:"Control a Safe (formerly Gnosis Safe) on another chain using your Colony\u2019s governance mechanisms.",sidebar_position:6},s="Safe Control (Gnosis Safe)",i={unversionedId:"use/managing-funds/gnosis-safe-control/index",id:"use/managing-funds/gnosis-safe-control/index",title:"Safe Control (Gnosis Safe)",description:"Control a Safe (formerly Gnosis Safe) on another chain using your Colony\u2019s governance mechanisms.",source:"@site/colony/use/managing-funds/gnosis-safe-control/index.md",sourceDirName:"use/managing-funds/gnosis-safe-control",slug:"/use/managing-funds/gnosis-safe-control/",permalink:"/use/managing-funds/gnosis-safe-control/",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/managing-funds/gnosis-safe-control/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Control a Safe (formerly Gnosis Safe) on another chain using your Colony\u2019s governance mechanisms.",sidebar_position:6},sidebar:"use",previous:{title:"Sending and Claiming Funds",permalink:"/use/managing-funds/sending-funds-to-a-colony"},next:{title:"Adding a Safe",permalink:"/use/managing-funds/gnosis-safe-control/adding-a-safe"}},l={},c=[{value:"Why Colony and Safe?",id:"why-colony-and-safe",level:2},{value:"How can it be used?",id:"how-can-it-be-used",level:3},{value:"How it all works",id:"how-it-all-works",level:3},{value:"Next step",id:"next-step",level:3}],u={toc:c};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"safe-control-gnosis-safe"},"Safe Control (Gnosis Safe)"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently supported chains are ",(0,o.kt)("strong",{parentName:"p"},"Ethereum Mainnet")," and ",(0,o.kt)("strong",{parentName:"p"},"Binance Smart Chain")," (BSC/BNB). More chains will be added as suitable bridges are made available.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Colony Safe Integration",src:a(61897).Z,width:"778",height:"143"})),(0,o.kt)("h2",{id:"why-colony-and-safe"},"Why Colony and Safe?"),(0,o.kt)("p",null,"Safe (formerly Gnosis Safe) has established itself as a secure way to store and manage crypto assets for individuals and organizations. Safe provides a multi-signature framework, whereby in order for transactions to be made within a Safe, a set number of on-chain signatures are required to approve it. This makes self-custodial fund management more secure, especially for DAOs with large treasuries."),(0,o.kt)("p",null,"Integrating a Safe with your colony unlocks the ability to use DAO governance mechanisms to manage assets held within a Safe. This makes for a more decentralized, scalable, and trustless fund management system."),(0,o.kt)("h3",{id:"how-can-it-be-used"},"How can it be used?"),(0,o.kt)("p",null,"Essentially, all actions you would like to perform from your Safe can now be controlled by a colony using Colony's governance mechanisms\u2014most notably the ",(0,o.kt)("a",{parentName:"p",href:"../../governance/motions-and-disputes/"},"Motions")," process."),(0,o.kt)("p",null,"These actions include basic features such as transferring tokens and managing NFTs, to advanced capabilities such as arbitrary contract interactions. In the past, DAO treasury Safes have relied on a trusted band of multi-sig holders (usually core team members or elected treasury managers). Now, DAOs can decentralize the management of treasury Safes by utilizing Colony's governance processes and giving every DAO contributor a seat at the table."),(0,o.kt)("p",null,"This integration also works across chains, so colonies hosted on the Gnosis Chain can manage Safes on Ethereum Mainnet or BSC."),(0,o.kt)("h3",{id:"how-it-all-works"},"How it all works"),(0,o.kt)("p",null,"This integration works using an Arbitrary Message Bridge (AMB) for cross-chain communication and a Safe feature called Modules."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arbitrary Message Bridge (AMB):")," The purpose of an AMB is to transfer arbitrary data between two networks, for example between Ethereum and Gnosis Chain. This data can be used to send a message to a contract on the other network and execute a transaction. You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tokenbridge.net/amb-bridge/about-amb-bridge"},"read more about AMBs here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Safe Modules"),": Modules allow for external contracts to interact with a Safe and initiate transactions which can skip the need for the required number of signatures to approve the transaction. This elevates the functionality of a Safe to work with more scalable governance mechanisms."),(0,o.kt)("h3",{id:"next-step"},"Next step"),(0,o.kt)("p",null,"The following pages will detail the steps required to set up a Safe to be controlled by your colony."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/use/managing-funds/gnosis-safe-control/adding-a-safe"},(0,o.kt)("strong",{parentName:"a"},"adding a Safe."))))}d.isMDXComponent=!0},61897:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/colony-safe-integration-903a477900276f0e5c4a5dfa3a116401.png"}}]);