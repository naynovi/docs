"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),s=l,y=m["".concat(i,".").concat(s)]||m[s]||u[s]||o;return n?a.createElement(y,d(d({ref:t},c),{},{components:n})):a.createElement(y,d({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,d=new Array(o);d[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:l,d[1]=r;for(var p=2;p<o;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66744:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var a=n(87462),l=n(67294),o=n(3905);const d={id:"model-colony-metadata-filter-input",title:"ModelColonyMetadataFilterInput",hide_table_of_contents:!1},r=void 0,i={unversionedId:"graphql/inputs/model-colony-metadata-filter-input",id:"graphql/inputs/model-colony-metadata-filter-input",title:"ModelColonyMetadataFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-colony-metadata-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-colony-metadata-filter-input",permalink:"/next/graphql/inputs/model-colony-metadata-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-colony-metadata-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-colony-metadata-filter-input",title:"ModelColonyMetadataFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelColonyMetadataConditionInput",permalink:"/next/graphql/inputs/model-colony-metadata-condition-input"},next:{title:"ModelColonyTokensConditionInput",permalink:"/next/graphql/inputs/model-colony-tokens-condition-input"}},p={},c=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyMetadataFilterInput.<b>id</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyMetadataFilterInput.<b>displayName</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbdisplaynamebcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyMetadataFilterInput.<b>avatar</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbavatarbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyMetadataFilterInput.<b>thumbnail</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbthumbnailbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyMetadataFilterInput.<b>and</b></code><Bullet /><code>[ModelColonyMetadataFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbandbcodemodelcolonymetadatafilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyMetadataFilterInput.<b>or</b></code><Bullet /><code>[ModelColonyMetadataFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonymetadatafilterinputborbcodemodelcolonymetadatafilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyMetadataFilterInput.<b>not</b></code><Bullet /><code>ModelColonyMetadataFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbnotbcodemodelcolonymetadatafilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:r=!1}=e;const[i,p]=(0,l.useState)(r);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&d)},f={Bullet:c,SpecifiedBy:u,Badge:m,toc:s,Details:y};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelColonyMetadataFilterInput {\n  id: ModelIDInput\n  displayName: ModelStringInput\n  avatar: ModelStringInput\n  thumbnail: ModelStringInput\n  and: [ModelColonyMetadataFilterInput]\n  or: [ModelColonyMetadataFilterInput]\n  not: ModelColonyMetadataFilterInput\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbidbcodemodelidinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyMetadataFilterInput.",(0,o.kt)("b",null,"id"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbdisplaynamebcodemodelstringinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyMetadataFilterInput.",(0,o.kt)("b",null,"displayName"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbavatarbcodemodelstringinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyMetadataFilterInput.",(0,o.kt)("b",null,"avatar"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbthumbnailbcodemodelstringinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyMetadataFilterInput.",(0,o.kt)("b",null,"thumbnail"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbandbcodemodelcolonymetadatafilterinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyMetadataFilterInput.",(0,o.kt)("b",null,"and"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-metadata-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[ModelColonyMetadataFilterInput]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-modelcolonymetadatafilterinputborbcodemodelcolonymetadatafilterinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyMetadataFilterInput.",(0,o.kt)("b",null,"or"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-metadata-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[ModelColonyMetadataFilterInput]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-modelcolonymetadatafilterinputbnotbcodemodelcolonymetadatafilterinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyMetadataFilterInput.",(0,o.kt)("b",null,"not"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-metadata-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelColonyMetadataFilterInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/queries/list-colony-metadata"},(0,o.kt)("inlineCode",{parentName:"a"},"listColonyMetadata")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/inputs/model-colony-metadata-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelColonyMetadataFilterInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);