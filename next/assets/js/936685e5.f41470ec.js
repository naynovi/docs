"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={description:"How to punish undesirable behaviour by deducting Reputation points."},a="Smite Reputation",u={unversionedId:"use/reputation/smite-reputation",id:"use/reputation/smite-reputation",title:"Smite Reputation",description:"How to punish undesirable behaviour by deducting Reputation points.",source:"@site/colony/use/reputation/smite-reputation.md",sourceDirName:"use/reputation",slug:"/use/reputation/smite-reputation",permalink:"/next/use/reputation/smite-reputation",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/reputation/smite-reputation.md",tags:[],version:"current",frontMatter:{description:"How to punish undesirable behaviour by deducting Reputation points."},sidebar:"use",previous:{title:"Award Reputation",permalink:"/next/use/reputation/award-reputation"},next:{title:"Advanced Features",permalink:"/next/use/advanced-features/"}},s={},p=[{value:"Why deduct reputation manually?",id:"why-deduct-reputation-manually",level:3},{value:"Smiting reputation",id:"smiting-reputation",level:3}],c={toc:p};function l(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smite-reputation"},"Smite Reputation"),(0,r.kt)("h3",{id:"why-deduct-reputation-manually"},"Why deduct reputation manually?"),(0,r.kt)("p",null,"A fundamental principle of Colony's reputation system is ",(0,r.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/key-concepts/reputation#reputation-decay"},"reputation decay")," which ensures that recent contributions result in higher reputation than older contributions by constantly deducting reputation points from all accounts. However, there may be instances where a colony wishes to deduct reputation points manually, such as malicious behaviour. You can use the Smite feature to deduct any number of reputation points from any account."),(0,r.kt)("h3",{id:"smiting-reputation"},"Smiting reputation"),(0,r.kt)("p",null,"1","."," On the main page of your colony, navigate to ",(0,r.kt)("strong",{parentName:"p"},"New Action > Manage Reputation > Smite Reputation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1679).Z,width:"672",height:"389"})),(0,r.kt)("p",null,"2","."," Choose the recipient. This can be any member of the colony, including yourself."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8593).Z,width:"840",height:"486"})),(0,r.kt)("p",null,"3","."," Choose the team. You can smite reputation at Root level, however it is typically appropriate to do so on a team level. See ",(0,r.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/teams/create-team"},"here for more information on teams"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2228).Z,width:"840",height:"486"})),(0,r.kt)("p",null,"4","."," Specify the amount of reputation points."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4997).Z,width:"840",height:"486"})),(0,r.kt)("p",null,"5",".",' Optionally, add a comment or toggle the "Force" button if you wish to perform this action immediately without creating a Motion.'),(0,r.kt)("p",null,"6",".",' After clicking "Confirm" and confirm the transaction in MetaMask, you should see a screen confirming that reputation was successfully deducted from the account you specified.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9095).Z,width:"840",height:"486"})),(0,r.kt)("p",null,"If too many reputation points have been deducted from an account, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/key-concepts/reputation/award-reputation"},"Award feature")," to increase them again."))}l.isMDXComponent=!0},1679:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/smite-reputation-1_AdobeCreativeCloudExpress-d70b89ec76ede5a7e5325b646ba94822.gif"},8593:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/smite-reputation-2_AdobeCreativeCloudExpress-1827dc90a8c40e00240dd3775c17ab2d.gif"},2228:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/smite-reputation-3_AdobeCreativeCloudExpress-291360674c2bd22ea0f5c9e6868e258c.gif"},4997:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/smite-reputation-4_AdobeCreativeCloudExpress-1472a5f4ae37beb5a5cadd6b69c2f413.gif"},9095:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/smite-reputation-5_AdobeCreativeCloudExpress-d24b9c8978e504555909584d95eb36ae.gif"}}]);