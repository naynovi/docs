"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[289],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?i.createElement(h,a(a({ref:n},d),{},{components:t})):i.createElement(h,a({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const r={description:"Permissions and Roles",sidebar_position:6},a="Modular Permissions",l={unversionedId:"tldr/permissions",id:"tldr/permissions",title:"Modular Permissions",description:"Permissions and Roles",source:"@site/vendor/colonyNetwork/docs/tldr/permissions.md",sourceDirName:"tldr",slug:"/tldr/permissions",permalink:"/colonynetwork/tldr/permissions",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/tldr/permissions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Permissions and Roles",sidebar_position:6},sidebar:"sidebar",previous:{title:"Tasks and Payments",permalink:"/colonynetwork/tldr/tasks"},next:{title:"Reputation",permalink:"/colonynetwork/tldr/reputation"}},s={},p=[{value:"Domain permission transitivity",id:"domain-permission-transitivity",level:2},{value:"Using permissioned functions",id:"using-permissioned-functions",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modular-permissions"},"Modular Permissions"),(0,o.kt)("p",null,"In the full implementation of the Colony protocol, decision making will be determined by the reputation score of an account. Actions that are currently permissioned, such as moving shared funds and creating a task, will be allowed proportionate to an account's reputation score. This functionality is planned for later releases."),(0,o.kt)("p",null,"In the current ",(0,o.kt)("inlineCode",{parentName:"p"},"glider"),' release, network state changes are authorized by dedicated "authority" contracts e.g. ',(0,o.kt)("inlineCode",{parentName:"p"},"ColonyAuthority.sol"),". These are based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"DSRoles")," implementation from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dapphub/dappsys-monolithic"},"dappsys"),". Functions decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"authDomain")," modifiers will perform an authorization check via the authority contracts before granting access. In future releases, this pattern will also allow us to switch to a reputation-mediated authority in colonies."),(0,o.kt)("p",null,"Roles are defined within ",(0,o.kt)("inlineCode",{parentName:"p"},"ColonyRole")," struct and grant permission to call certain functions within a specific domain of the colony. These are initialized in ",(0,o.kt)("inlineCode",{parentName:"p"},"ColonyAuthority.sol"),". An account may be given one or more of the available pre-defined roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Administration"),(0,o.kt)("li",{parentName:"ul"},"Funding"),(0,o.kt)("li",{parentName:"ul"},"Architecture"),(0,o.kt)("li",{parentName:"ul"},"Arbitration"),(0,o.kt)("li",{parentName:"ul"},"Root (only exists in the top-level domain)")),(0,o.kt)("p",null,"Note: Currently, the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," modifier is preserved and checks for permissions in the root domain."),(0,o.kt)("p",null,"Note: Currently ",(0,o.kt)("inlineCode",{parentName:"p"},"Arbitration")," role grants permission for no functions. It is a placeholder for the dispute resolution system, to be implemented in later releases."),(0,o.kt)("h2",{id:"domain-permission-transitivity"},"Domain permission transitivity"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: Domains are currently restricted to one level below the root domain. This restriction will be removed after release.")),(0,o.kt)("p",null,"Domain permissions extend from the root domain. Permissions held in a domain are held in all child sub-domains, but not in parent domains."),(0,o.kt)("p",null,"As an example, consider this tree of domains in a colony (using domainIds as identifiers):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      1\n   /  |  \\\n  2   4   6\n / \\  \n3   5\n")),(0,o.kt)("p",null,"Authority in domain ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," to call a permissioned function is valid in domains ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),", but not ",(0,o.kt)("inlineCode",{parentName:"p"},"6"),". Authority in domain ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," to call a permissioned function is valid in all subdomains."),(0,o.kt)("h2",{id:"using-permissioned-functions"},"Using permissioned functions"),(0,o.kt)("p",null,"Permissioned functions check two arguments, which are by convention the first and second ones expected in all permissioned functions:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"_permissionDomainId"),": The domain that gives the caller the authority to execute an action\n",(0,o.kt)("inlineCode",{parentName:"p"},"_childSkillIndex"),": an index that specifies where to find the domain in which the action occurs."),(0,o.kt)("p",null,"New domains are given a unique skillId upon creation, so a colony with the following domain structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      1\n   /  |  \\\n  2   4   6\n / \\  \n3   5\n")),(0,o.kt)("p",null,"might have local skillIds assigned as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"       142\n    /   |   \\\n  147  254  696\n  / \\  \n159  307\n")),(0,o.kt)("p",null,"In this example,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Skill ",(0,o.kt)("inlineCode",{parentName:"li"},"142")," has children: ",(0,o.kt)("inlineCode",{parentName:"li"},"[147, 159, 254, 307, 696]")),(0,o.kt)("li",{parentName:"ul"},"Skill ",(0,o.kt)("inlineCode",{parentName:"li"},"147")," has children: ",(0,o.kt)("inlineCode",{parentName:"li"},"[159, 307]")),(0,o.kt)("li",{parentName:"ul"},"Skill ",(0,o.kt)("inlineCode",{parentName:"li"},"254")," has children: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"))),(0,o.kt)("p",null,'If a user with "Admininstration" authority in domain ',(0,o.kt)("inlineCode",{parentName:"p"},"2")," wants to finalize a payment in domain ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),", they would call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"colony.finalizePayment(2, 1, _paymentId);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"authDomain")," modifier performs the following checks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Whether ",(0,o.kt)("inlineCode",{parentName:"li"},"msg.sender"),' has the "Administration" or "Root" permission in domain ',(0,o.kt)("inlineCode",{parentName:"li"},"2")),(0,o.kt)("li",{parentName:"ul"},"Whether the domain of action (in this case domain ",(0,o.kt)("inlineCode",{parentName:"li"},"5"),") is indeed a child of the permission domain ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),", by checking that the second item in the ",(0,o.kt)("inlineCode",{parentName:"li"},"childSkillIndex")," matches the local skill associated with the domain, whatever that may be.   ")),(0,o.kt)("p",null,'Note: Functions authorized by the "Architecture" role check to see that the domain is strictly a child of the permission domain exclusively (not the permission domain itself).'),(0,o.kt)("p",null,"Within ",(0,o.kt)("inlineCode",{parentName:"p"},"ColonyAuthority.sol")," you will see this role implemented as both",(0,o.kt)("inlineCode",{parentName:"p"},"Architecture")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ArchitectureSubdomain")," roles. This is in order to prohibit an architect from modifying the domain in which the role was given (which would allow them to, for example, remove their co-architect's role). Architects may alter permissions in sub-domains only."))}m.isMDXComponent=!0}}]);