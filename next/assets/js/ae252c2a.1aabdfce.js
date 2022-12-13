"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),y=l,h=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),l=(n(7294),n(3905));const a={description:"The DAO that helps build DAOs.",sidebar_position:5},r="The Metacolony and CLNY",i={unversionedId:"learn/dao-builders-toolkit/the-metacolony-clny",id:"learn/dao-builders-toolkit/the-metacolony-clny",title:"The Metacolony and CLNY",description:"The DAO that helps build DAOs.",source:"@site/colony/learn/dao-builders-toolkit/the-metacolony-clny.md",sourceDirName:"learn/dao-builders-toolkit",slug:"/learn/dao-builders-toolkit/the-metacolony-clny",permalink:"/next/learn/dao-builders-toolkit/the-metacolony-clny",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/learn/dao-builders-toolkit/the-metacolony-clny.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"The DAO that helps build DAOs.",sidebar_position:5},sidebar:"learn",previous:{title:"Simple Decisions",permalink:"/next/learn/dao-builders-toolkit/simple-decisions"},next:{title:"The Theory of the Firm",permalink:"/next/learn/dao-builders-toolkit/theory-of-the-firm"}},s={},c=[{value:"CLNY",id:"clny",level:2},{value:"Revenue and Rewards",id:"revenue-and-rewards",level:2},{value:"Global Skills",id:"global-skills",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-metacolony-and-clny"},"The Metacolony and CLNY"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Colony is built differently.")," "),(0,l.kt)("p",null,"While many platforms are ran by a small cadre of token-hoarding founders, Colony is developed and maintained by a DAO known as the ",(0,l.kt)("em",{parentName:"p"},"Metacolony"),"."),(0,l.kt)("p",null,"The Metacolony is \u201cthe Colony colony\u201d \u2014 its remit is to develop, support, and grow the Colony Network."),(0,l.kt)("p",null,"Every colony on the public network needs the Metacolony, and everyone may become a member."),(0,l.kt)("p",null,"The Metacolony has special permissions, including the ability to add, remove, or modify the skill tags used by all colonies on the Colony Network."),(0,l.kt)("h2",{id:"clny"},"CLNY"),(0,l.kt)("p",null,"CLNY is the Token of the Metacolony."),(0,l.kt)("p",null,'Just like in a "normal" colony, accounts holding both CLNY and Reputation in the Metacolony may claim a share of the revenue of the Metacolony proportional to combined Reputation and CLNY holdings.'),(0,l.kt)("p",null,"CNLY is required as a stake to participate in Reputation Mining. Miners earn a reward in CLNY, as well as reputation within the Metacolony tagged with a special 'mining' skill."),(0,l.kt)("h2",{id:"revenue-and-rewards"},"Revenue and Rewards"),(0,l.kt)("p",null,"The Metacolony, as custodian of the Colony Network, collects a small fee every time a user claims a payout from a task. If the task payout is in a token other than whitelisted currencies such as ETH or DAI, the token is sent to an auction contract, and sold off for CLNY, which is burned."),(0,l.kt)("p",null,"This idea of a fee is a little unusual for such a decentralized system. One of the appeals of Ethereum is that other than gas costs, platforms do not generally seek rent and are free to use. However, the Network Fee is vital in ensuring the game theoretic security of the Colony Network\u2019s reputation mining and governance processes by providing underlying value to the CLNY held by Metacolony members."),(0,l.kt)("p",null,"Importantly, this fee is not payable to any centrally controlled entity, but rather to the Metacolony. Anybody may contribute to the Metacolony and claim a share of these fees proportional to their contribution. We believe that the benefit of being part of a secure, well supported network will ultimately be appealing enough that a small fee to pay for its existence will be acceptable."),(0,l.kt)("h2",{id:"global-skills"},"Global Skills"),(0,l.kt)("p",null,"The Metacolony also curates a global list of skill tags, used by ",(0,l.kt)("em",{parentName:"p"},"all colonies")," on the Colony Network. This hierarchy of global skill provides a clear and consistent reference for skill organization, facilitating fluid comparisons of skill for individuals working within multiple colonies."),(0,l.kt)("p",null,"Even though the skill hierarchy is universal, reputation earned in the skill hierarchy is unique to each colony. Earning reputation in a skill in one colony has no effect on the user\u2019s reputation in that skill in any other colonies."),(0,l.kt)("p",null,"For information about querying skills and specific implementation details, see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.colony.io/colonyjs/api/interfaces/ColonyNetworkClient"},"ColonyJS ",(0,l.kt)("inlineCode",{parentName:"a"},"colonyNetworkClient"))," API."))}p.isMDXComponent=!0}}]);