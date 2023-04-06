"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62581:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>u,assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=n(67294),i=n(3905);const a={id:"email-permissions",title:"EmailPermissions",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/enums/email-permissions",id:"graphql/enums/email-permissions",title:"EmailPermissions",description:"??? Not really sure what this is. It's also not used anywhere ???",source:"@site/colony/graphql/enums/email-permissions.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/email-permissions",permalink:"/next/graphql/enums/email-permissions",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/enums/email-permissions.mdx",tags:[],version:"current",frontMatter:{id:"email-permissions",title:"EmailPermissions",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DomainColor",permalink:"/next/graphql/enums/domain-color"},next:{title:"ModelAttributeTypes",permalink:"/next/graphql/enums/model-attribute-types"}},m={},c=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>EmailPermissions.<b>sendNotifications</b></code>",id:"code-style-fontweight-normal-emailpermissionsbsendnotificationsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>EmailPermissions.<b>isHuman</b></code>",id:"code-style-fontweight-normal-emailpermissionsbishumanbcode",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:s=!1}=e;const[l,m]=(0,o.useState)(s);return(0,i.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&a)},y={Bullet:c,SpecifiedBy:u,Badge:p,toc:d,Details:f};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"??? Not really sure what this is. It's also not used anywhere ???"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum EmailPermissions {\n  sendNotifications\n  isHuman\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-emailpermissionsbsendnotificationsbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EmailPermissions.",(0,i.kt)("b",null,"sendNotifications")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Permission to send notifications to the user.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-emailpermissionsbishumanbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EmailPermissions.",(0,i.kt)("b",null,"isHuman")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Permission to identify the user as a human (??? as opposed to a contract ???).")))}b.isMDXComponent=!0}}]);