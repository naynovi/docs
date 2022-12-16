"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1533],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,f=d["".concat(s,".").concat(u)]||d[u]||l[u]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6784:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const o={description:"How to create teams in Colony.",sidebar_position:4},i="Create & Edit Teams",c={unversionedId:"craft/teams/create-team",id:"craft/teams/create-team",title:"Create & Edit Teams",description:"How to create teams in Colony.",source:"@site/colony/craft/teams/create-team.md",sourceDirName:"craft/teams",slug:"/craft/teams/create-team",permalink:"/craft/teams/create-team",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/teams/create-team.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"How to create teams in Colony.",sidebar_position:4},sidebar:"craft",previous:{title:"Browse Teams & Members",permalink:"/craft/teams/browse-teams"},next:{title:"Reputation",permalink:"/craft/reputation/"}},s={},m=[{value:"Create New Team",id:"create-new-team",level:3},{value:"<strong>Edit Team</strong>",id:"edit-team",level:3}],p={toc:m};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create--edit-teams"},"Create & Edit Teams"),(0,n.kt)("p",null,"A colony is structured like a traditional organization: in ",(0,n.kt)("strong",{parentName:"p"},"Teams"),"."),(0,n.kt)("p",null,"You'll always find ",(0,n.kt)("strong",{parentName:"p"},"Root"),', which is the "colony-wide team". You can decide to create as many teams as you wish, each representing a different area of your organization.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Currently, you cannot create sub-teams, or delete teams.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example of a Colony structure.",src:a(2298).Z,width:"374",height:"512"})),(0,n.kt)("h3",{id:"create-new-team"},"Create New Team"),(0,n.kt)("p",null,"To create a new Team, navigate to ",(0,n.kt)("strong",{parentName:"p"},"New Action > Manage Teams > Create New Team")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How to create a new team in Colony.",src:a(3367).Z,width:"2878",height:"1634"})),(0,n.kt)("p",null,"You can decide the ",(0,n.kt)("strong",{parentName:"p"},"Team")," name, define its purpose, and explain why you are creating it. You can change a Team's details later, but ",(0,n.kt)("strong",{parentName:"p"},"you cannot delete a Team.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/craft/advanced-features/permissions#architecture"},"Architecture")," or ",(0,n.kt)("a",{parentName:"p",href:"/craft/advanced-features/permissions#root"},"Root")," permissions are needed to create teams.")),(0,n.kt)("h3",{id:"edit-team"},(0,n.kt)("strong",{parentName:"h3"},"Edit Team")),(0,n.kt)("p",null,"To make changes to a Team name & description, navigate to ",(0,n.kt)("strong",{parentName:"p"},"New Action > Manage Teams > Edit Teams")," to change the Team name & description."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How to edit teams in Colony.",src:a(6991).Z,width:"2878",height:"1636"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/craft/advanced-features/permissions#architecture"},"Architecture")," or ",(0,n.kt)("a",{parentName:"p",href:"/craft/advanced-features/permissions#root"},"Root")," permissions are needed to edit teams.")))}l.isMDXComponent=!0},2298:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Domains-2-1-12b0d7f80efd3ed83e2383452d46cc4c.png"},6991:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/EditTeam-c6ebab6f15f1b0760d9c309fdc898c10.gif"},3367:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/NewTeam-53f3d6458b47da0a4b85954e0ab424f8.gif"}}]);