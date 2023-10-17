"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=l,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),l=n(6010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),l=n(7294),a=n(6010),o=n(2466),s=n(6550),u=n(1980),i=n(7392),c=n(12);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,i]=f({queryString:n,groupId:r}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:a})?e:null})();(0,l.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),k(e)}),[i,k,a]),tabValues:a}}var h=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==s&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,a.Z)("tabs-container",v.tabList)},l.createElement(b,(0,r.Z)({},e,t)),l.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return l.createElement(y,(0,r.Z)({key:String(t)},e))}},4826:(e,t,n)=>{n.r(t),n.d(t,{HookList:()=>d,assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905)),a=n(4866),o=n(5162);const s={description:"React Power-Ups is a collection of simple React hooks to speed-up your React app development."},u="Overview",i={unversionedId:"overview",id:"overview",title:"Overview",description:"React Power-Ups is a collection of simple React hooks to speed-up your React app development.",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/react-power-ups/docs/overview",draft:!1,tags:[],version:"current",frontMatter:{description:"React Power-Ups is a collection of simple React hooks to speed-up your React app development."},sidebar:"docs",next:{title:"useToggle",permalink:"/react-power-ups/docs/use-toggle"}},c={},p=[{value:"TL;DR",id:"tldr",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hook List",id:"hook-list",level:2},{value:"State \ud83d\udea5",id:"state-",level:3},{value:"Event \ud83d\uddd3",id:"event-",level:3},{value:"Optimization \ud83d\ude80",id:"optimization-",level:3},{value:"Storage \ud83d\uddc4",id:"storage-",level:3},{value:"Changelog",id:"changelog",level:2}],d=e=>{let{items:t}=e;return(0,l.kt)("ul",{className:"list-none pl-0"},t.map((e=>{let{name:t,href:n,desc:r,usecase:a}=e;return(0,l.kt)("li",{key:t,className:"mb-5"},(0,l.kt)("a",{href:`/docs/${n}`,className:"block hover:no-underline shadow-md border border-solid border-[--ifm-color-gray-200] rounded-lg hover:border-[--ifm-color-primary] relative left-0 hover:left-3 transition-all overflow-hidden group"},(0,l.kt)("h4",{className:"p-4 pb-0 mb-1 text-lg text-[--ifm-color-primary-darker]"},t),(0,l.kt)("div",{className:"px-4 pb-3 text-[--ifm-font-color-base]",dangerouslySetInnerHTML:{__html:r}}),a&&(0,l.kt)("p",{className:"mb-0 px-4 py-2 text-[--ifm-color-gray-700] bg-[--ifm-color-gray-100] text-sm group-hover:bg-[--ifm-color-primary] group-hover:text-[--ifm-color-secondary] dark:group-hover:text-[--ifm-color-gray-800]"},"\ud83d\udca1 ",a)))})))},m={toc:p,HookList:d},f="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"overview"},"Overview"),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("ul",{className:"text-xl pb-4 [&>li]:pb-3 [&>li>ul]:text-lg"},(0,l.kt)("li",null,"It is a collection of React hooks"),(0,l.kt)("li",null,"Motivations:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Make common tasks easier"),(0,l.kt)("li",{className:"italic"},"Why create these hooks on every project? \ud83d\udc0c",(0,l.kt)("br",null),"Just install this package \ud83d\ude80"))),(0,l.kt)("li",null,"Why choose this package?",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Simple, no over-abstraction"),(0,l.kt)("li",null,"Only 1.6 kB in size"),(0,l.kt)("li",null,(0,l.kt)("strong",null,"Tree-shakeable")," to remove unused modules from production builds"),(0,l.kt)("li",null,"TypeScript \ud83d\udfe6"),(0,l.kt)("li",null,"SSR-friendly \ud83c\udf10"),(0,l.kt)("li",null,"Unit tested \ud83e\uddea")))),(0,l.kt)("section",{className:"shadow-md border border-solid border-[--ifm-color-gray-200] rounded-lg overflow-hidden"},(0,l.kt)("div",{className:"px-4 py-2.5 bg-[--ifm-color-emphasis-100]"},(0,l.kt)("a",{href:"https://bundlephobia.com/package/react-power-ups",target:"_blank",rel:"noopener noreferrer"},"https://bundlephobia.com/package/react-power-ups")),(0,l.kt)("hr",{className:"my-0"}),(0,l.kt)("ul",{className:"list-none bundle-size px-4 py-2.5"},(0,l.kt)("li",null,(0,l.kt)("span",null,"557.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useCountDown")),(0,l.kt)("li",null,(0,l.kt)("span",null,"445.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useDebounce")),(0,l.kt)("li",null,(0,l.kt)("span",null,"283.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useDebounceFn")),(0,l.kt)("li",null,(0,l.kt)("span",null,"244.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useFirstRender")),(0,l.kt)("li",null,(0,l.kt)("span",null,"574.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useInView")),(0,l.kt)("li",null,(0,l.kt)("span",null,"498.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useIntersection")),(0,l.kt)("li",null,(0,l.kt)("span",null,"295.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useIsomorphicLayoutEffect")),(0,l.kt)("li",null,(0,l.kt)("span",null,"658.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useLocalStorage")),(0,l.kt)("li",null,(0,l.kt)("span",null,"220.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"usePrevious")),(0,l.kt)("li",null,(0,l.kt)("span",null,"362.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"usePreviousDistinct")),(0,l.kt)("li",null,(0,l.kt)("span",null,"563.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useSessionStorage")),(0,l.kt)("li",null,(0,l.kt)("span",null,"477.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useThrottle")),(0,l.kt)("li",null,(0,l.kt)("span",null,"301.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useThrottleFn")),(0,l.kt)("li",null,(0,l.kt)("span",null,"227.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useToggle")),(0,l.kt)("li",null,(0,l.kt)("span",null,"297.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useUpdateEffect")),(0,l.kt)("li",null,(0,l.kt)("span",null,"295.0",(0,l.kt)("span",null,"B")),(0,l.kt)("div",null,"useWindowEvent")))),(0,l.kt)("hr",{className:"custom-hr"}),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)(a.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i react-power-ups\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"yarn",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-power-ups\n"))),(0,l.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i react-power-ups\n")))),(0,l.kt)("hr",{className:"custom-hr"}),(0,l.kt)("h2",{id:"hook-list"},"Hook List"),(0,l.kt)("h3",{id:"state-"},"State \ud83d\udea5"),(0,l.kt)(d,{items:[{name:"useToggle",href:"use-toggle",desc:"Easily toggle or set a boolean state.",usecase:"show/hide modal, show/hide password"},{name:"useCountDown",href:"use-count-down",desc:"Start, pause, resume, and reset a countdown timer.",usecase:"display a countdown timer, limit certain action within a time frame like resend OTP"},{name:"useFirstRender",href:"use-first-render",desc:"Check if component is on first render (just mounted).",usecase:"do something only on first render or vice versa"},{name:"usePrevious",href:"use-previous",desc:"Get the previous state or prop based on the value from previous render.",usecase:"when you need the value of the previous state/prop"},{name:"usePreviousDistinct",href:"use-previous-distinct",desc:"Get the previous state or prop based on the comparation with current value.",usecase:"when you need the value of the previous state/prop"},{name:"useUpdateEffect",href:"use-update-effect",desc:"Like useEffect hook, but skip on first render.",usecase:"do something when a state updated"},{name:"useIsomorphicLayoutEffect",href:"use-isomorphic-layout-effect",desc:"Same as useLayoutEffect, but will not show warning in Next.js (SSR).",usecase:""}],mdxType:"HookList"}),(0,l.kt)("h3",{id:"event-"},"Event \ud83d\uddd3"),(0,l.kt)(d,{items:[{name:"useIntersection",href:"use-intersection",desc:"Tracks an HTML element's intersection.",usecase:"detect if user has reached the bottom of page to load more data (infinite scroll)"},{name:"useInView",href:"use-in-view",desc:"Tracks an HTML element's visibility on screen or a specified element.",usecase:"display something differently depending on whether an element is visible on screen or not"},{name:"useWindowEvent",href:"use-window-event",desc:"Add event listener to window.",usecase:"do something when window received a post-message, user switch tab (window blur event), and many more"}],mdxType:"HookList"}),(0,l.kt)("h3",{id:"optimization-"},"Optimization \ud83d\ude80"),(0,l.kt)(d,{items:[{name:"useDebounce",href:"use-debounce",desc:"Get debounced value.",usecase:"limit state update to prevent calling API multiple times"},{name:"useDebounceFn",href:"use-debounce-fn",desc:"Debounces a function.",usecase:"limit the times a function is called, like limiting API call function when user is typing"},{name:"useThrottle",href:"use-throttle",desc:"Get throttled value.",usecase:"limit state update to prevent calling API multiple times"},{name:"useThrottleFn",href:"use-throttle-fn",desc:"Throttles a function.",usecase:"limit the times a function is called, like limiting API call function when user is typing"}],mdxType:"HookList"}),(0,l.kt)("h3",{id:"storage-"},"Storage \ud83d\uddc4"),(0,l.kt)(d,{items:[{name:"useLocalStorage",href:"use-local-storage",desc:"Like <code>useState</code> but persisted on <code>localStorage</code>, SSG/SSR-friendly.",usecase:"manage theme, language, etc."},{name:"useSessionStorage",href:"use-session-storage",desc:"Like <code>useState</code> but persisted on <code>sessionStorage</code>, SSG/SSR-friendly.",usecase:"manage temporary value"}],mdxType:"HookList"}),(0,l.kt)("hr",{className:"custom-hr"}),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/afiiif/react-power-ups/releases"},"https://github.com/afiiif/react-power-ups/releases")))}k.isMDXComponent=!0}}]);