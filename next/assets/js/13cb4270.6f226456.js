"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={description:"In this guide we look at a more involved example. We create a team within a colony and inspect the results of this transaction.",sidebar_position:0},i="Creating your first transaction",s={unversionedId:"getting-started/your-first-transaction",id:"getting-started/your-first-transaction",title:"Creating your first transaction",description:"In this guide we look at a more involved example. We create a team within a colony and inspect the results of this transaction.",source:"@site/vendor/colonySDK/docs/getting-started/your-first-transaction.md",sourceDirName:"getting-started",slug:"/getting-started/your-first-transaction",permalink:"/next/colonysdk/getting-started/your-first-transaction",draft:!1,editUrl:"https://github.com/JoinColony/colonySDK/edit/main/docs/getting-started/your-first-transaction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"In this guide we look at a more involved example. We create a team within a colony and inspect the results of this transaction.",sidebar_position:0},sidebar:"sidebar",previous:{title:"Start Building",permalink:"/next/colonysdk/getting-started/"},next:{title:"Guides",permalink:"/next/colonysdk/guides/"}},c={},l=[{value:"Connecting to an existing colony",id:"connecting-to-an-existing-colony",level:2},{value:"Creating the team&#39;s metadata object",id:"creating-the-teams-metadata-object",level:2},{value:"Creating the team",id:"creating-the-team",level:2},{value:"Event data",id:"event-data",level:3},{value:"Contract receipt",id:"contract-receipt",level:3},{value:"Metadata getter function",id:"metadata-getter-function",level:3},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-your-first-transaction"},"Creating your first transaction"),(0,o.kt)("p",null,"In this example we're going through the process of creating a team (domain) within a colony using only Colony SDK. It is meant to run inside a browser with the MetaMask extension installed. If you need a template (with build system) to start from, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyStarter"},"colonyStarter"),"."),(0,o.kt)("h2",{id:"connecting-to-an-existing-colony"},"Connecting to an existing colony"),(0,o.kt)("p",null,"For this example we assume that you want to connect to a Colony that already exists and the MetaMask account we are using has the appropriate permissions (",(0,o.kt)("em",{parentName:"p"},"Architecture")," role in the Root team)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { providers } from 'ethers';\nimport { ColonyNetwork } from '@colony/sdk';\n\n// If MetaMask is installed there will be an `ethereum` object on the `window`\n// NOTE: Make sure MetaMask is connected to Gnosis chain (see https://docs.gnosischain.com/tools/wallets/metamask)\nconst provider = new providers.Web3Provider(window.ethereum);\n\n// We are calling a bunch of async functions so we are creating this wrapper function\nconst start = async () => {\n  // This will try to connect the page to MetaMask\n  await provider.send('eth_requestAccounts', []);\n  // Create a new connection to the Colony Network contracts using the MetaMask \"wallet\"\n  const colonyNetwork = await ColonyNetwork.init(provider.getSigner());\n  // Connect to a colony (replace the address with the address of the colony you'd like to use)\n  // This is the devdemo colony (https://xdai.colony.io/colony/devdemo)\n  const colony = await colonyNetwork.getColony('0x364B3153A24bb9ECa28B8c7aCeB15E3942eb4fc5');\n};\n\nstart();\n")),(0,o.kt)("h2",{id:"creating-the-teams-metadata-object"},"Creating the team's metadata object"),(0,o.kt)("p",null,"Let's prepare some metadata for the colony details. We created a ",(0,o.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,o.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," object and stored it under the IPFS hash ",(0,o.kt)("a",{parentName:"p",href:"https://gateway.pinata.cloud/ipfs/QmTwksWE2Zn4icTvk5E7QZb1vucGNuu5GUCFZ361r8gKXM"},(0,o.kt)("inlineCode",{parentName:"a"},"QmTwksWE2Zn4icTvk5E7QZb1vucGNuu5GUCFZ361r8gKXM")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 2,\n  "name": "domain",\n  "data": {\n    "domainName": "A-Team",\n    "domainColor": 0,\n    "domainPurpose": "Pass Butter"\n  }\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Storing data on chain is expensive. Metadata is stored on IPFS and our solution to enrich on-chain data with additional information and only used in very few methods around Colony. ",(0,o.kt)("strong",{parentName:"p"},"We also provide ways to automatically create and store metadata for your transaction.")," See ",(0,o.kt)("a",{parentName:"p",href:"/next/colonysdk/guides/metadata"},"Metadata")," for more information.")),(0,o.kt)("h2",{id:"creating-the-team"},"Creating the team"),(0,o.kt)("p",null,"Let's imagine we continue in our async function ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," from above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const [{ domainId }, receipt, getMetadata] = await colony.createTeam('QmTwksWE2Zn4icTvk5E7QZb1vucGNuu5GUCFZ361r8gKXM').tx();\n")),(0,o.kt)("p",null,"You can see that calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"tx()")," function on the ",(0,o.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator"},(0,o.kt)("inlineCode",{parentName:"a"},"TxCreator"))," returns a tuple with three entries:"),(0,o.kt)("h3",{id:"event-data"},"Event data"),(0,o.kt)("p",null,"The first entry is the Ethereum event data, emitted by the contract transaction, already parsed by ethers, so that you can directly access it on the object. To find out what event data is returned by a transaction you can either rely on the TypeScript types or look up the relevant ",(0,o.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony#event-data-3"},"Event data")," section in the documentation of the corresponding method. This entry exists on all methods that emit events on contracts (almost all of them)."),(0,o.kt)("h3",{id:"contract-receipt"},"Contract receipt"),(0,o.kt)("p",null,"The second entry is a receipt object. This is the ",(0,o.kt)("inlineCode",{parentName:"p"},"ethers")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractReceipt")," (see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/api/providers/types/#providers-TransactionReceipt"},"the ethers docs"),") that was issues during the transaction."),(0,o.kt)("h3",{id:"metadata-getter-function"},"Metadata getter function"),(0,o.kt)("p",null,"The third entry is a function that can be called to get that metadata that was created or attached to the transaction events. This is usually not very interesting in this context as we just stored the metadata. Note that this is only available in very few functions that have metadata attached to them. Here's how you'd use this function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { domainName, domainColor, domainPurpose } = await getMetadata();\n")),(0,o.kt)("p",null,"Read more about metadata within Colony ",(0,o.kt)("a",{parentName:"p",href:"/next/colonysdk/guides/metadata"},"here"),"."),(0,o.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,o.kt)("p",null,"Congrats on creating your first transaction with Colony SDK! This is just the beginning!"),(0,o.kt)("p",null,"Make sure you're making yourself familiar with ",(0,o.kt)("a",{parentName:"p",href:"/next/colonysdk/guides/transactions"},"how transactions work in Colony SDK")," and then feel free to check out the ",(0,o.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},"Colony API docs"),". There's lots to explore there!"),(0,o.kt)("admonition",{title:"Examples! Examples! Examples!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Yes, we have plenty of examples for you to explore on how to do all sorts of things in Colony SDK. Want to create a motion or decision? Want to see how reputation works? Check out our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonySDK/tree/main/examples/browser/src"},"browser examples")," or if you prefer to run things on the server side, we also have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonySDK/tree/main/examples/node"},"NodeJS based examples"),". By the way, we have deployed the browser based examples ",(0,o.kt)("a",{parentName:"p",href:"https://joincolony.github.io/colonySDK/"},"here")," for you to try them immediately.")))}p.isMDXComponent=!0}}]);