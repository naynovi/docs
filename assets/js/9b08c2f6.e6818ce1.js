"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[906],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=r,g=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6467:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={},i="Coin Machine Extension (`CoinMachine`)",o={unversionedId:"colonynetwork/interfaces/coinmachine",id:"colonynetwork/interfaces/coinmachine",title:"Coin Machine Extension (`CoinMachine`)",description:"Coin Machine is a mechanism to sell tokens within a colony, simplifying the process for all participants involved. It introduces the functionality to sell limited amounts of tokens in fixed-price batches, adjusting prices up or down in between sale periods based on recent demand. Coin Machine sacrifices continual availability and real-time price adjustment for the simplicity of fixed price and fixed supply, thereby also sidestepping the challenges of price manipulation, volatility, and front-running.",source:"@site/docs/colonynetwork/interfaces/coinmachine.md",sourceDirName:"colonynetwork/interfaces",slug:"/colonynetwork/interfaces/coinmachine",permalink:"/docs/docs/colonynetwork/interfaces/coinmachine",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/interfaces/coinmachine.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interfaces",permalink:"/docs/docs/colonynetwork/interfaces/"},next:{title:"Colony (`IColony`)",permalink:"/docs/docs/colonynetwork/interfaces/icolony"}},p={},d=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <strong><code>buyTokens(uint256 _numTokens)</code></strong>",id:"-buytokensuint256-_numtokens",level:3},{value:"\u25b8 <strong><code>deprecate(bool _deprecated)</code></strong>",id:"-deprecatebool-_deprecated",level:3},{value:"\u25b8 <strong><code>finishUpgrade()</code></strong>",id:"-finishupgrade",level:3},{value:"\u25b8 <strong><code>getActiveIntake():uint256 intake</code></strong>",id:"-getactiveintakeuint256-intake",level:3},{value:"\u25b8 <strong><code>getActivePeriod():uint256 period</code></strong>",id:"-getactiveperioduint256-period",level:3},{value:"\u25b8 <strong><code>getActiveSold():uint256 sold</code></strong>",id:"-getactivesolduint256-sold",level:3},{value:"\u25b8 <strong><code>getCurrentPrice():uint256 price</code></strong>",id:"-getcurrentpriceuint256-price",level:3},{value:"\u25b8 <strong><code>getEMAIntake():uint256 amount</code></strong>",id:"-getemaintakeuint256-amount",level:3},{value:"\u25b8 <strong><code>getEvolvePrice():bool evolve</code></strong>",id:"-getevolvepricebool-evolve",level:3},{value:"\u25b8 <strong><code>getMaxPerPeriod():uint256 max</code></strong>",id:"-getmaxperperioduint256-max",level:3},{value:"\u25b8 <strong><code>getMaxPurchase(address _user):uint256 max</code></strong>",id:"-getmaxpurchaseaddress-_useruint256-max",level:3},{value:"\u25b8 <strong><code>getMetatransactionNonce(address userAddress):uint256 nonce</code></strong>",id:"-getmetatransactionnonceaddress-useraddressuint256-nonce",level:3},{value:"\u25b8 <strong><code>getPeriodLength():uint256 length</code></strong>",id:"-getperiodlengthuint256-length",level:3},{value:"\u25b8 <strong><code>getPurchaseToken():address token</code></strong>",id:"-getpurchasetokenaddress-token",level:3},{value:"\u25b8 <strong><code>getSellableTokens():uint256 remaining</code></strong>",id:"-getsellabletokensuint256-remaining",level:3},{value:"\u25b8 <strong><code>getTargetPerPeriod():uint256 target</code></strong>",id:"-gettargetperperioduint256-target",level:3},{value:"\u25b8 <strong><code>getToken():address token</code></strong>",id:"-gettokenaddress-token",level:3},{value:"\u25b8 <strong><code>getTokenBalance():uint256 balance</code></strong>",id:"-gettokenbalanceuint256-balance",level:3},{value:"\u25b8 <strong><code>getUserLimit(address _user):uint256 max</code></strong>",id:"-getuserlimitaddress-_useruint256-max",level:3},{value:"\u25b8 <strong><code>getWhitelist():address whitelist</code></strong>",id:"-getwhitelistaddress-whitelist",level:3},{value:"\u25b8 <strong><code>getWindowSize():uint256 size</code></strong>",id:"-getwindowsizeuint256-size",level:3},{value:"\u25b8 <strong><code>identifier():bytes32 identifier</code></strong>",id:"-identifierbytes32-identifier",level:3},{value:"\u25b8 <strong><code>initialise(address _token, address _purchaseToken, uint256 _periodLength, uint256 _windowSize, uint256 _targetPerPeriod, uint256 _maxPerPeriod, uint256 _userLimitFraction, uint256 _startingPrice, address _whitelist)</code></strong>",id:"-initialiseaddress-_token-address-_purchasetoken-uint256-_periodlength-uint256-_windowsize-uint256-_targetperperiod-uint256-_maxperperiod-uint256-_userlimitfraction-uint256-_startingprice-address-_whitelist",level:3},{value:"\u25b8 <strong><code>install(address _colony)</code></strong>",id:"-installaddress-_colony",level:3},{value:"\u25b8 <strong><code>setWhitelist(address _whitelist)</code></strong>",id:"-setwhitelistaddress-_whitelist",level:3},{value:"\u25b8 <strong><code>uninstall()</code></strong>",id:"-uninstall",level:3},{value:"\u25b8 <strong><code>updatePeriod()</code></strong>",id:"-updateperiod",level:3},{value:"\u25b8 <strong><code>version():uint256 version</code></strong>",id:"-versionuint256-version",level:3}],s={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coin-machine-extension-coinmachine"},"Coin Machine Extension (",(0,r.kt)("inlineCode",{parentName:"h1"},"CoinMachine"),")"),(0,r.kt)("p",null,"Coin Machine is a mechanism to sell tokens within a colony, simplifying the process for all participants involved. It introduces the functionality to sell limited amounts of tokens in fixed-price batches, adjusting prices up or down in between sale periods based on recent demand. Coin Machine sacrifices continual availability and real-time price adjustment for the simplicity of fixed price and fixed supply, thereby also sidestepping the challenges of price manipulation, volatility, and front-running."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/extensions/coin-machine"},"here")," for more information."),(0,r.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,r.kt)("h3",{id:"-buytokensuint256-_numtokens"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"buyTokens(uint256 _numTokens)"))),(0,r.kt)("p",null,"Purchase tokens from Coin Machine."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_numTokens"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of tokens to purchase")))),(0,r.kt)("h3",{id:"-deprecatebool-_deprecated"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"deprecate(bool _deprecated)"))),(0,r.kt)("p",null,"Called when deprecating (or undeprecating) the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_deprecated"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the extension should be deprecated or undeprecated")))),(0,r.kt)("h3",{id:"-finishupgrade"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"finishUpgrade()"))),(0,r.kt)("p",null,"Called when upgrading the extension"),(0,r.kt)("h3",{id:"-getactiveintakeuint256-intake"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getActiveIntake():uint256 intake"))),(0,r.kt)("p",null,"Get the number of tokens received in the period that the price was last updated for or a purchase was made"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intake"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of tokens received")))),(0,r.kt)("h3",{id:"-getactiveperioduint256-period"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getActivePeriod():uint256 period"))),(0,r.kt)("p",null,"Get the period that the price was last updated for or a purchase was made"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The active period")))),(0,r.kt)("h3",{id:"-getactivesolduint256-sold"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getActiveSold():uint256 sold"))),(0,r.kt)("p",null,"Get the number of tokens sold in the period that the price was last updated for or a purchase was made"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sold"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of tokens sold")))),(0,r.kt)("h3",{id:"-getcurrentpriceuint256-price"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getCurrentPrice():uint256 price"))),(0,r.kt)("p",null,"Get the current price per token"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Current price")))),(0,r.kt)("h3",{id:"-getemaintakeuint256-amount"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getEMAIntake():uint256 amount"))),(0,r.kt)("p",null,"Get the EMA of the number of tokens received each period"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of tokens received")))),(0,r.kt)("h3",{id:"-getevolvepricebool-evolve"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getEvolvePrice():bool evolve"))),(0,r.kt)("p",null,"Get the evolvePrice boolean"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"evolve"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"The evolvePrice boolean")))),(0,r.kt)("h3",{id:"-getmaxperperioduint256-max"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getMaxPerPeriod():uint256 max"))),(0,r.kt)("p",null,"Get the maximum number of tokens to sell per period"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of tokens")))),(0,r.kt)("h3",{id:"-getmaxpurchaseaddress-_useruint256-max"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getMaxPurchase(address _user):uint256 max"))),(0,r.kt)("p",null,"Get the maximum amount of tokens a user can purchase in a period"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_user"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's address")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum amount of tokens")))),(0,r.kt)("h3",{id:"-getmetatransactionnonceaddress-useraddressuint256-nonce"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getMetatransactionNonce(address userAddress):uint256 nonce"))),(0,r.kt)("p",null,"Gets the next nonce for a meta-transaction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's address")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The nonce")))),(0,r.kt)("h3",{id:"-getperiodlengthuint256-length"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getPeriodLength():uint256 length"))),(0,r.kt)("p",null,"Get the length of the sale period"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"length"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Length of the sale period")))),(0,r.kt)("h3",{id:"-getpurchasetokenaddress-token"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getPurchaseToken():address token"))),(0,r.kt)("p",null,"Get the address of the token being used to make purchases"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The token's address")))),(0,r.kt)("h3",{id:"-getsellabletokensuint256-remaining"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getSellableTokens():uint256 remaining"))),(0,r.kt)("p",null,"Get the number of remaining tokens for sale this period"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remaining"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Tokens remaining")))),(0,r.kt)("h3",{id:"-gettargetperperioduint256-target"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getTargetPerPeriod():uint256 target"))),(0,r.kt)("p",null,"Get the target number of tokens to sell per period"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Target number of tokens")))),(0,r.kt)("h3",{id:"-gettokenaddress-token"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getToken():address token"))),(0,r.kt)("p",null,"Get the address of the token being sold"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The token's address")))),(0,r.kt)("h3",{id:"-gettokenbalanceuint256-balance"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getTokenBalance():uint256 balance"))),(0,r.kt)("p",null,"Get the remaining balance of tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balance"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Remaining token balance")))),(0,r.kt)("h3",{id:"-getuserlimitaddress-_useruint256-max"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getUserLimit(address _user):uint256 max"))),(0,r.kt)("p",null,"Get the maximum amount of tokens a user can purchase in total"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_user"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's address")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum amount of tokens")))),(0,r.kt)("h3",{id:"-getwhitelistaddress-whitelist"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getWhitelist():address whitelist"))),(0,r.kt)("p",null,"Get the address of the whitelist (if exists)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of Whitelist contract")))),(0,r.kt)("h3",{id:"-getwindowsizeuint256-size"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getWindowSize():uint256 size"))),(0,r.kt)("p",null,"Get the size of the averaging window"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the averaging window")))),(0,r.kt)("h3",{id:"-identifierbytes32-identifier"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"identifier():bytes32 identifier"))),(0,r.kt)("p",null,"Returns the identifier of the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"The extension's identifier")))),(0,r.kt)("h3",{id:"-initialiseaddress-_token-address-_purchasetoken-uint256-_periodlength-uint256-_windowsize-uint256-_targetperperiod-uint256-_maxperperiod-uint256-_userlimitfraction-uint256-_startingprice-address-_whitelist"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"initialise(address _token, address _purchaseToken, uint256 _periodLength, uint256 _windowSize, uint256 _targetPerPeriod, uint256 _maxPerPeriod, uint256 _userLimitFraction, uint256 _startingPrice, address _whitelist)"))),(0,r.kt)("p",null,"Must be called before any sales can be made"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_token"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The token we are selling. Cannot be ether")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_purchaseToken"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The token to receive payments in. Use 0x0 for ether")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_periodLength"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"How long in seconds each period of the sale should last")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_windowSize"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Characteristic number of periods that should be used for the moving average. In the long-term, 86% of the weighting will be in this window size. The higher the number, the slower the price will be to adjust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_targetPerPeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of tokens to aim to sell per period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_maxPerPeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of tokens that can be sold per period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_userLimitFraction"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The fraction of the total sale that a single user can buy (in WAD)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_startingPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The sale price to start at, expressed in units of _purchaseToken per token being sold, as a WAD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Optionally an address of a whitelist contract to use can be provided. Pass 0x0 if no whitelist being used")))),(0,r.kt)("h3",{id:"-installaddress-_colony"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"install(address _colony)"))),(0,r.kt)("p",null,"Configures the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_colony"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The colony in which the extension holds permissions")))),(0,r.kt)("h3",{id:"-setwhitelistaddress-_whitelist"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"setWhitelist(address _whitelist)"))),(0,r.kt)("p",null,"Set the address for an (optional) whitelist"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the whitelist")))),(0,r.kt)("h3",{id:"-uninstall"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"uninstall()"))),(0,r.kt)("p",null,"Called when uninstalling the extension"),(0,r.kt)("h3",{id:"-updateperiod"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"updatePeriod()"))),(0,r.kt)("p",null,"Bring the token accounting current"),(0,r.kt)("h3",{id:"-versionuint256-version"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"version():uint256 version"))),(0,r.kt)("p",null,"Returns the version of the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The extension's version number")))))}u.isMDXComponent=!0}}]);