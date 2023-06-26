"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={description:"What is Reputation in Colony, and how does it work?",sidebar_position:2},i="Reputation",s={unversionedId:"learn/governance/reputation",id:"learn/governance/reputation",title:"Reputation",description:"What is Reputation in Colony, and how does it work?",source:"@site/colony/learn/governance/reputation.md",sourceDirName:"learn/governance",slug:"/learn/governance/reputation",permalink:"/next/learn/governance/reputation",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/learn/governance/reputation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"What is Reputation in Colony, and how does it work?",sidebar_position:2},sidebar:"learn",previous:{title:"Governance",permalink:"/next/learn/governance/"},next:{title:"Lazy Consensus",permalink:"/next/learn/governance/lazy-consensus"}},p={},l=[{value:"What is Reputation?",id:"what-is-reputation",level:3},{value:"Can Reputation be Transferred?",id:"can-reputation-be-transferred",level:3},{value:"Earning Reputation in a Colony",id:"earning-reputation-in-a-colony",level:3},{value:"Reputation Decay",id:"reputation-decay",level:3}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reputation"},"Reputation"),(0,o.kt)("h3",{id:"what-is-reputation"},"What is Reputation?"),(0,o.kt)("p",null,"Most DAO frameworks in the past have used token-based governance systems: the more tokens you have, the more voting power you have. This system may work out for whales, but not for everyday DAO contributors that want to participate in the future of work. "),(0,o.kt)("p",null,"In a Colony, governance power is determined by ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Reputation")),", not the size of someone's native token bags. "),(0,o.kt)("p",null,"Reputation is an off-chain attribute that is calculated through on-chain data and verified by ",(0,o.kt)("strong",{parentName:"p"},"Reputation Miners"),", that stake ",(0,o.kt)("strong",{parentName:"p"},"CLNY")," to provide network updates."),(0,o.kt)("p",null,"Reputation is an attribute that quantifies a particular individual\u2019s influence and is calculated from the sum of work that has been completed within the colony. Both ",(0,o.kt)("strong",{parentName:"p"},"native tokens")," and ",(0,o.kt)("strong",{parentName:"p"},"reputation")," are required to create motions, raise disputes, and vote."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20346).Z,width:"434",height:"343"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reputation confers influence in a colony by mediating a member's ability to adjust various aspects of the organization.")," Whether it is the ability to move funds, create new teams, or settle disputes, reputation determines influence by degrees."),(0,o.kt)("h3",{id:"can-reputation-be-transferred"},"Can Reputation be Transferred?"),(0,o.kt)("p",null,"Unlike tokens, reputation cannot be transferred between accounts and can only be gained or lost through receiving a colony's native token ",(0,o.kt)("strong",{parentName:"p"},"(contributions)")," or resolving disputes (",(0,o.kt)("strong",{parentName:"p"},"participating in the colony governance"),")."),(0,o.kt)("h3",{id:"earning-reputation-in-a-colony"},"Earning Reputation in a Colony"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After you ",(0,o.kt)("a",{parentName:"strong",href:"/next/use/join-a-colony"},"join a colony"),", you'll need to earn some reputation before you can participate in governance.")),(0,o.kt)("p",null,"The most common way of earning reputation is by ",(0,o.kt)("a",{parentName:"p",href:"/next/use/making-payments/payments"},"getting paid")," in the colony's native token. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Payments in stablecoins will not provide reputation. You can use stablecoin payments to adjust for cost-of-living requirements for contributors, or any other situation where making a payment without giving additional reputation is appropriate. ")),(0,o.kt)("p",null,"Reputation can also be ",(0,o.kt)("a",{parentName:"p",href:"/next/use/reputation/award-reputation"},"manually awarded")," in special circumstances, such as when launching a new colony with an existing team."),(0,o.kt)("p",null,"Each colony will have its own rationale for paying contributors. Some colonies may pay contributors for approved content or codebase contributions, while other colonies may send you some native tokens just for asking nicely."),(0,o.kt)("h1",{id:"earning-reputation-in-the-metacolony"},"Earning Reputation in the Metacolony"),(0,o.kt)("p",null,"Are you interested in helping build the Colony ecosystem? You can earn CLNY and reputation by contributing to the Metacolony. Drop a line in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/feVZWwysqM"},"Colony Discord")," to find out the latest ways you can contribute.  "),(0,o.kt)("p",null,"When a member of a colony receives a payment in the colony native tokens, they earn Reputation in that Team as well as all parent Teams, including Root."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"They do not earn any reputation in child Teams or sibling Teams.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example of a colony structure.",src:n(27906).Z,width:"1200",height:"917"})),(0,o.kt)("p",null,"To make an example, earning reputation as a result of an internal token payment in ",(0,o.kt)("strong",{parentName:"p"},"Backend"),", will earn reputation in ",(0,o.kt)("strong",{parentName:"p"},"Backend"),", ",(0,o.kt)("strong",{parentName:"p"},"Development,")," and in ",(0,o.kt)("strong",{parentName:"p"},"Root.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No reputation")," will be earned in child Teams (",(0,o.kt)("strong",{parentName:"p"},"Ruby"),", ",(0,o.kt)("strong",{parentName:"p"},"Node.js)"),", or in sibling or uncle teams (",(0,o.kt)("strong",{parentName:"p"},"Frontend")," & ",(0,o.kt)("strong",{parentName:"p"},"Design)"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Currently, Colony allows ",(0,o.kt)("strong",{parentName:"p"},"only one layer of Teams"),". Nested Teams are forthcoming.")),(0,o.kt)("h3",{id:"reputation-decay"},"Reputation Decay"),(0,o.kt)("p",null,"One of the unique characteristics of reputation is that it ",(0,o.kt)("strong",{parentName:"p"},"decays over time"),". This ",(0,o.kt)("strong",{parentName:"p"},"incentivizes consistent contribution")," to a colony, and maintains decentralization by ensuring that reputation represents ",(0,o.kt)("em",{parentName:"p"},"recent")," contributions."),(0,o.kt)("p",null,"Every 600000 blocks, a user\u2019s reputation in every team decays by a factor of 2. ",(0,o.kt)("strong",{parentName:"p"},"This implies a 'reputation half-life' of about 3.5 months.")," Reputation slowly decays on a per-block basis."),(0,o.kt)("p",null,"To know more about ",(0,o.kt)("strong",{parentName:"p"},"Reputation Decay"),", ",(0,o.kt)("strong",{parentName:"p"},"Reputation Mining"),", and ",(0,o.kt)("strong",{parentName:"p"},"how it's calculated"),", please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"Whitepaper"),"."))}c.isMDXComponent=!0},20346:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Frame-40-96d4541de6ee6ef52da70d45c47f0aca.png"},27906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/domains_1-fcfb92e273169bc60b983c3a4f765839-1d97fe2ef8b2a9dd0315369f7b4855fe.png"}}]);