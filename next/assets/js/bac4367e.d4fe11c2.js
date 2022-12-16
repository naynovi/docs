"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(n),N=r,c=k["".concat(l,".").concat(N)]||k[N]||s[N]||i;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o="Class: TxCreator<C, M, E, MD>",p={unversionedId:"api/classes/TxCreator",id:"api/classes/TxCreator",title:"Class: TxCreator<C, M, E, MD\\>",description:"An umbrella API for all kinds of transactions",source:"@site/vendor/colonySDK/docs/api/classes/TxCreator.md",sourceDirName:"api/classes",slug:"/api/classes/TxCreator",permalink:"/next/colonysdk/api/classes/TxCreator",draft:!1,editUrl:"https://github.com/JoinColony/api/classes/TxCreator.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: PinataAdapter",permalink:"/next/colonysdk/api/classes/PinataAdapter"},next:{title:"Class: VotingReputation",permalink:"/next/colonysdk/api/classes/VotingReputation"}},l={},d=[{value:"Force a transaction",id:"force-a-transaction",level:2},{value:"Create a motion to trigger an action once it passes",id:"create-a-motion-to-trigger-an-action-once-it-passes",level:2},{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Methods",id:"methods",level:2},{value:"force",id:"force",level:3},{value:"Returns",id:"returns",level:4},{value:"forceMeta",id:"forcemeta",level:3},{value:"Returns",id:"returns-1",level:4},{value:"motion",id:"motion",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"motionMeta",id:"motionmeta",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-txcreatorc-m-e-md"},"Class: TxCreator<C, M, E, MD",">"),(0,r.kt)("p",null,"An umbrella API for all kinds of transactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TxCreator")," allows for a simple API to cover all the different cases of transactions within Colony. Once a ",(0,r.kt)("inlineCode",{parentName:"p"},"TxCreator")," is created using a method on the base contracts (e.g. ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},"Colony")," or extensions like ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/VotingReputation"},"VotingReputation"),"), there are four options available:"),(0,r.kt)("h2",{id:"force-a-transaction"},"Force a transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/colonysdk/api/classes/TxCreator#force"},"TxCreator.force"),": force a Colony transaction, knowing you have the permissions to do so"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/colonysdk/api/classes/TxCreator#forcemeta"},"TxCreator.forceMeta"),": same as ",(0,r.kt)("inlineCode",{parentName:"li"},"force()"),", but send as a gasless metatransaction")),(0,r.kt)("h2",{id:"create-a-motion-to-trigger-an-action-once-it-passes"},"Create a motion to trigger an action once it passes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/colonysdk/api/classes/TxCreator#motion"},"TxCreator.motion"),": create a motion (needs the motion's domain as a parameter)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/colonysdk/api/classes/TxCreator#motionmeta"},"TxCreator.motionMeta"),": same as ",(0,r.kt)("inlineCode",{parentName:"li"},"motion()"),", but sends a gasless metatransaction")),(0,r.kt)("p",null,"Learn more about these functions in their individual documentation"),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"BaseContract"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"C"),"[",(0,r.kt)("inlineCode",{parentName:"td"},'"functions"'),"]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"EventData"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new TxCreator"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"__namedParameters"),")"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"BaseContract"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"EventData"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[] ","|"," () => ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[]",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.colony?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.colonyNetwork")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/classes/ColonyNetwork"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyNetwork")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.contract")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.eventData?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"receipt"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"ContractReceipt"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"E"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.metadataType?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.method")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.permissionConfig?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PermissionConfig"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.txConfig?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TxConfig"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"MD"),">")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"force"},"force"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"force"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," = getColonyMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"DecisionMetadata")," = getDecisionDetailsFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," = getDomainMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),"]",">",">","] ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"Forces an action"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony ",(0,r.kt)("a",{parentName:"p",href:"/develop/dev-learning/permissions"},"here"),"."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," = getColonyMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"DecisionMetadata")," = getDecisionDetailsFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," = getDomainMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),"]",">",">","] ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"forcemeta"},"forceMeta"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"forceMeta"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," = getColonyMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"DecisionMetadata")," = getDecisionDetailsFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," = getDomainMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),"]",">",">","] ","|"," [",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),"]",">"),(0,r.kt)("p",null,"Forces an action using a gasless metatransaction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony ",(0,r.kt)("a",{parentName:"p",href:"/develop/dev-learning/permissions"},"here"),"."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," = getColonyMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"DecisionMetadata")," = getDecisionDetailsFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," = getDomainMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),"]",">",">","] ","|"," [",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),"]",">"),(0,r.kt)("p",null,"A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"motion"},"motion"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"motion"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"motionDomain?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"creator?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"domainId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"motionId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"Creates a motion for an action"),(0,r.kt)("p",null,"You can specify a team (domain) this motion should be created in. It will be created in the Root team by default."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This will only work if the ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/VotingReputation"},"VotingReputation")," extension is installed for the Colony that's being acted on"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"motionDomain")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Id.RootDomain"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"creator?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"domainId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"motionId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"A tupel of motion event data and contract receipt"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"motionmeta"},"motionMeta"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"motionMeta"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"motionDomain?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"creator?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"domainId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"motionId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),"]",">"),(0,r.kt)("p",null,"Creates a motion for an action"),(0,r.kt)("p",null,"You can specify a team (domain) this motion should be created in. It will be created in the Root team by default."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This will only work if the ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/VotingReputation"},"VotingReputation")," extension is installed for the Colony that's being acted on"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"motionDomain")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Id.RootDomain"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[{ ",(0,r.kt)("inlineCode",{parentName:"p"},"creator?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"domainId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"motionId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),"]",">"),(0,r.kt)("p",null,"A tupel of motion event data and contract receipt"))}s.isMDXComponent=!0}}]);