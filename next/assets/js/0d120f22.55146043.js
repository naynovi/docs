"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1138],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,m=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),k=o(n),s=i,h=k["".concat(m,".").concat(s)]||k[s]||p[s]||l;return n?a.createElement(h,r(r({ref:e},u),{},{components:n})):a.createElement(h,r({ref:e},u))}));function s(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,r=new Array(l);r[0]=k;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:i,r[1]=d;for(var o=2;o<l;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71153:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const l={},r="Streaming Payments / Salaries (StreamingPayments)",d={unversionedId:"interfaces/extensions/streamingpayments",id:"interfaces/extensions/streamingpayments",title:"Streaming Payments / Salaries (StreamingPayments)",description:'This expenditure enables ongoing "streaming" payments, useful for implementing',source:"@site/vendor/colonyNetwork/docs/interfaces/extensions/streamingpayments.md",sourceDirName:"interfaces/extensions",slug:"/interfaces/extensions/streamingpayments",permalink:"/next/colonynetwork/interfaces/extensions/streamingpayments",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Staked Expenditure (StakedExpenditure)",permalink:"/next/colonynetwork/interfaces/extensions/stakedexpenditure"},next:{title:"Token Supplier (TokenSupplier)",permalink:"/next/colonynetwork/interfaces/extensions/tokensupplier"}},m={},o=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>addToken(uint256 _fundingPermissionDomainId, uint256 _fundingChildSkillIndex, uint256 _id, address _token, uint256 _amount)</code>",id:"-addtokenuint256-_fundingpermissiondomainid-uint256-_fundingchildskillindex-uint256-_id-address-_token-uint256-_amount",level:3},{value:"\u25b8 <code>cancel(uint256 _adminPermissionDomainId, uint256 _adminChildSkillIndex, uint256 _id)</code>",id:"-canceluint256-_adminpermissiondomainid-uint256-_adminchildskillindex-uint256-_id",level:3},{value:"\u25b8 <code>cancelAndWaive(uint256 _id, address[] memory _tokens)</code>",id:"-cancelandwaiveuint256-_id-address-memory-_tokens",level:3},{value:"\u25b8 <code>claim(uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _fromChildSkillIndex, uint256 _toChildSkillIndex, uint256 _id, address[] memory _tokens)</code>",id:"-claimuint256-_permissiondomainid-uint256-_childskillindex-uint256-_fromchildskillindex-uint256-_tochildskillindex-uint256-_id-address-memory-_tokens",level:3},{value:"\u25b8 <code>create(uint256 _fundingPermissionDomainId, uint256 _fundingChildSkillIndex, uint256 _adminPermissionDomainId, uint256 _adminChildSkillIndex, uint256 _domainId, uint256 _startTime, uint256 _endTime, uint256 _interval, address _recipient, address[] memory _tokens, uint256[] memory _amounts)</code>",id:"-createuint256-_fundingpermissiondomainid-uint256-_fundingchildskillindex-uint256-_adminpermissiondomainid-uint256-_adminchildskillindex-uint256-_domainid-uint256-_starttime-uint256-_endtime-uint256-_interval-address-_recipient-address-memory-_tokens-uint256-memory-_amounts",level:3},{value:"\u25b8 <code>deprecate(bool _deprecated)</code>",id:"-deprecatebool-_deprecated",level:3},{value:"\u25b8 <code>finishUpgrade()</code>",id:"-finishupgrade",level:3},{value:"\u25b8 <code>getAmountEntitledFromStart(uint256 _id, address _token):uint256 amount</code>",id:"-getamountentitledfromstartuint256-_id-address-_tokenuint256-amount",level:3},{value:"\u25b8 <code>getNumStreamingPayments():uint256 numPayments</code>",id:"-getnumstreamingpaymentsuint256-numpayments",level:3},{value:"\u25b8 <code>getPaymentToken(uint256 _id, address _token):PaymentToken paymentToken</code>",id:"-getpaymenttokenuint256-_id-address-_tokenpaymenttoken-paymenttoken",level:3},{value:"\u25b8 <code>getStreamingPayment(uint256 _id):StreamingPayment streamingPayment</code>",id:"-getstreamingpaymentuint256-_idstreamingpayment-streamingpayment",level:3},{value:"\u25b8 <code>identifier():bytes32 _identifier</code>",id:"-identifierbytes32-_identifier",level:3},{value:"\u25b8 <code>install(address _colony)</code>",id:"-installaddress-_colony",level:3},{value:"\u25b8 <code>setEndTime(uint256 _adminPermissionDomainId, uint256 _adminChildSkillIndex, uint256 _id, uint256 _endTime)</code>",id:"-setendtimeuint256-_adminpermissiondomainid-uint256-_adminchildskillindex-uint256-_id-uint256-_endtime",level:3},{value:"\u25b8 <code>setStartTime(uint256 _adminPermissionDomainId, uint256 _adminChildSkillIndex, uint256 _id, uint256 _startTime)</code>",id:"-setstarttimeuint256-_adminpermissiondomainid-uint256-_adminchildskillindex-uint256-_id-uint256-_starttime",level:3},{value:"\u25b8 <code>setTokenAmount(uint256 _fundingPermissionDomainId, uint256 _fundingChildSkillIndex, uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _fromChildSkillIndex, uint256 _toChildSkillIndex, uint256 _id, address _token, uint256 _amount)</code>",id:"-settokenamountuint256-_fundingpermissiondomainid-uint256-_fundingchildskillindex-uint256-_permissiondomainid-uint256-_childskillindex-uint256-_fromchildskillindex-uint256-_tochildskillindex-uint256-_id-address-_token-uint256-_amount",level:3},{value:"\u25b8 <code>uninstall()</code>",id:"-uninstall",level:3},{value:"\u25b8 <code>version():uint256 _version</code>",id:"-versionuint256-_version",level:3}],u={toc:o};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"streaming-payments--salaries-streamingpayments"},"Streaming Payments / Salaries (",(0,i.kt)("inlineCode",{parentName:"h1"},"StreamingPayments"),")"),(0,i.kt)("p",null,'This expenditure enables ongoing "streaming" payments, useful for implementing\nsalaries. Users with the Administration and Funding permissions can create\nstreaming payments, indicating the tokens and amounts to be transferred\nover a given interval of time. Users can then claim tokens continually, at\nwhatever frequency they choose.'),(0,i.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,i.kt)("h3",{id:"-addtokenuint256-_fundingpermissiondomainid-uint256-_fundingchildskillindex-uint256-_id-address-_token-uint256-_amount"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"addToken(uint256 _fundingPermissionDomainId, uint256 _fundingChildSkillIndex, uint256 _id, address _token, uint256 _amount)")),(0,i.kt)("p",null,"Add a new token/amount pair"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_fundingPermissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the caller holds the funding permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_fundingChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the fundingPermissionDomainId to the domainId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_token"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_amount"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount to pay out")))),(0,i.kt)("h3",{id:"-canceluint256-_adminpermissiondomainid-uint256-_adminchildskillindex-uint256-_id"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"cancel(uint256 _adminPermissionDomainId, uint256 _adminChildSkillIndex, uint256 _id)")),(0,i.kt)("p",null,"Cancel the streaming payment, specifically by setting endTime to block.timestamp"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_adminPermissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the caller holds the admin permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_adminChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the adminPermissionDomainId to the domainId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")))),(0,i.kt)("h3",{id:"-cancelandwaiveuint256-_id-address-memory-_tokens"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"cancelAndWaive(uint256 _id, address[] memory _tokens)")),(0,i.kt)("p",null,"Cancel the streaming payment, specifically by setting endTime to block.timestamp, and waive claim to specified tokens already earned. Only callable by the recipient."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"address[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The tokens to waive any claims to.")))),(0,i.kt)("h3",{id:"-claimuint256-_permissiondomainid-uint256-_childskillindex-uint256-_fromchildskillindex-uint256-_tochildskillindex-uint256-_id-address-memory-_tokens"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"claim(uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _fromChildSkillIndex, uint256 _toChildSkillIndex, uint256 _id, address[] memory _tokens)")),(0,i.kt)("p",null,"Claim a streaming payment"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_permissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the extension holds the funding & admin permissions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_childSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the permissionDomainId to the domainId the payment is in")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_fromChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The linking the domainId to the fromPot domain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_toChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The linking the domainId to the toPot domain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"address[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The tokens to be paid out")))),(0,i.kt)("h3",{id:"-createuint256-_fundingpermissiondomainid-uint256-_fundingchildskillindex-uint256-_adminpermissiondomainid-uint256-_adminchildskillindex-uint256-_domainid-uint256-_starttime-uint256-_endtime-uint256-_interval-address-_recipient-address-memory-_tokens-uint256-memory-_amounts"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"create(uint256 _fundingPermissionDomainId, uint256 _fundingChildSkillIndex, uint256 _adminPermissionDomainId, uint256 _adminChildSkillIndex, uint256 _domainId, uint256 _startTime, uint256 _endTime, uint256 _interval, address _recipient, address[] memory _tokens, uint256[] memory _amounts)")),(0,i.kt)("p",null,"Creates a new streaming payment"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_fundingPermissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the caller holds the funding permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_fundingChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the fundingPermissionDomainId to the domainId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_adminPermissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the caller holds the admin permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_adminChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the adminPermissionDomainId to the domainId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_domainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain out of which the streaming payment will be paid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_startTime"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The time at which the payment begins paying out")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_endTime"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The time at which the payment ends paying out")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_interval"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The period of time over which _amounts are paid out")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_recipient"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The recipient of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"address[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The tokens to be paid out")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_amounts"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The amounts to be paid out (per _interval of time)")))),(0,i.kt)("h3",{id:"-deprecatebool-_deprecated"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"deprecate(bool _deprecated)")),(0,i.kt)("p",null,"Called when deprecating (or undeprecating) the extension"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_deprecated"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the extension should be deprecated or undeprecated")))),(0,i.kt)("h3",{id:"-finishupgrade"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"finishUpgrade()")),(0,i.kt)("p",null,"Called when upgrading the extension"),(0,i.kt)("h3",{id:"-getamountentitledfromstartuint256-_id-address-_tokenuint256-amount"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"getAmountEntitledFromStart(uint256 _id, address _token):uint256 amount")),(0,i.kt)("p",null,"Get the amount entitled to claim from the start of the stream"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_token"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the token")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"amount"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount entitled")))),(0,i.kt)("h3",{id:"-getnumstreamingpaymentsuint256-numpayments"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"getNumStreamingPayments():uint256 numPayments")),(0,i.kt)("p",null,"Get the total number of streaming payments"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"numPayments"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The total number of streaming payments")))),(0,i.kt)("h3",{id:"-getpaymenttokenuint256-_id-address-_tokenpaymenttoken-paymenttoken"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"getPaymentToken(uint256 _id, address _token):PaymentToken paymentToken")),(0,i.kt)("p",null,"Get the payment token struct by Id and token"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_token"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the token")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"paymentToken"),(0,i.kt)("td",{parentName:"tr",align:null},"PaymentToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The payment token struct")))),(0,i.kt)("h3",{id:"-getstreamingpaymentuint256-_idstreamingpayment-streamingpayment"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"getStreamingPayment(uint256 _id):StreamingPayment streamingPayment")),(0,i.kt)("p",null,"Get the streaming payment struct by Id"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"streamingPayment"),(0,i.kt)("td",{parentName:"tr",align:null},"StreamingPayment"),(0,i.kt)("td",{parentName:"tr",align:null},"The streaming payment struct")))),(0,i.kt)("h3",{id:"-identifierbytes32-_identifier"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"identifier():bytes32 _identifier")),(0,i.kt)("p",null,"Returns the identifier of the extension"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_identifier"),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The extension's identifier")))),(0,i.kt)("h3",{id:"-installaddress-_colony"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"install(address _colony)")),(0,i.kt)("p",null,"Configures the extension"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_colony"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The colony in which the extension holds permissions")))),(0,i.kt)("h3",{id:"-setendtimeuint256-_adminpermissiondomainid-uint256-_adminchildskillindex-uint256-_id-uint256-_endtime"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"setEndTime(uint256 _adminPermissionDomainId, uint256 _adminChildSkillIndex, uint256 _id, uint256 _endTime)")),(0,i.kt)("p",null,"Update the endTime, only if the new endTime is in the future"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_adminPermissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the caller holds the admin permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_adminChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the adminPermissionDomainId to the domainId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_endTime"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The new endTime to set")))),(0,i.kt)("h3",{id:"-setstarttimeuint256-_adminpermissiondomainid-uint256-_adminchildskillindex-uint256-_id-uint256-_starttime"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"setStartTime(uint256 _adminPermissionDomainId, uint256 _adminChildSkillIndex, uint256 _id, uint256 _startTime)")),(0,i.kt)("p",null,"Update the startTime, only if the current startTime is in the future"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_adminPermissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the caller holds the admin permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_adminChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the adminPermissionDomainId to the domainId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_startTime"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The new startTime to set")))),(0,i.kt)("h3",{id:"-settokenamountuint256-_fundingpermissiondomainid-uint256-_fundingchildskillindex-uint256-_permissiondomainid-uint256-_childskillindex-uint256-_fromchildskillindex-uint256-_tochildskillindex-uint256-_id-address-_token-uint256-_amount"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"setTokenAmount(uint256 _fundingPermissionDomainId, uint256 _fundingChildSkillIndex, uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _fromChildSkillIndex, uint256 _toChildSkillIndex, uint256 _id, address _token, uint256 _amount)")),(0,i.kt)("p",null,"Update the token amount to be paid out. Claims existing payout prior to the change"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_fundingPermissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the caller holds the funding permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_fundingChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the fundingPermissionDomainId to the domainId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_permissionDomainId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain in which the extension holds the funding & admin permissions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_childSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The index linking the permissionDomainId to the domainId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_fromChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The linking the domainId to the fromPot domain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_toChildSkillIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The linking the domainId to the toPot domain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the streaming payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_token"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_amount"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The new amount to pay out")))),(0,i.kt)("h3",{id:"-uninstall"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"uninstall()")),(0,i.kt)("p",null,"Called when uninstalling the extension"),(0,i.kt)("h3",{id:"-versionuint256-_version"},"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"h3"},"version():uint256 _version")),(0,i.kt)("p",null,"Returns the version of the extension"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_version"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The extension's version number")))))}p.isMDXComponent=!0}}]);