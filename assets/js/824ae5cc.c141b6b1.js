"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),u=r(6550),s=r(1980),c=r(7392),i=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:r,groupId:n}),[d,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var b=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=i.indexOf(t),n=c[r].value;n!==u&&(d(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function g(e){const t=(0,b.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},8286:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(e){let{children:t,className:r="p-4",url:a="http://localhost:3000/"}=e;return n.createElement("div",{className:"custom-browser-window border-[3px] border-[--ifm-color-emphasis-200] border-solid rounded-[--ifm-global-radius] mb-4"},n.createElement("div",{className:"py-2 px-4 bg-[--ifm-color-emphasis-200] flex items-center"},n.createElement("div",{className:"flex gap-1.5"},n.createElement("div",{className:"w-3 h-3 rounded-full bg-[--ifm-color-danger]"}),n.createElement("div",{className:"w-3 h-3 rounded-full bg-[--ifm-color-warning]"}),n.createElement("div",{className:"w-3 h-3 rounded-full bg-[--ifm-color-success]"})),n.createElement("div",{className:"bg-[--ifm-background-color] rounded-full text-sm py-1 px-4 flex-1 mx-4"},a),n.createElement("div",null,n.createElement("div",{className:"h-[3px] w-[18px] bg-slate-400"}),n.createElement("div",{className:"h-[3px] w-[18px] bg-slate-400 my-[3px]"}),n.createElement("div",{className:"h-[3px] w-[18px] bg-slate-400"}))),n.createElement("div",{className:r},t))}},9045:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(e){let{name:t,type:r,isRequired:a}=e;return n.createElement(n.Fragment,null,n.createElement("code",{className:"mr-2"},n.createElement("strong",null,t),!1===a&&"?",": ",r),a&&n.createElement("span",{className:"text-[--ifm-color-danger] font-semibold"},"(Required)"))}},6826:(e,t,r)=>{r.d(t,{H:()=>l,w:()=>u});var n=r(7294),a=r(9457),o=r(7192);function l(){const[e,t]=(0,n.useState)(""),r=function(e,t,r){void 0===r&&(r=o.ZT);var l=(0,n.useState)(e),u=l[0],s=l[1],c=(0,n.useRef)(r);return(0,n.useEffect)((function(){c.current=r}),[r]),(0,a.Z)((function(){var r=setTimeout((function(){s(e),c.current(e)}),t);return function(){clearTimeout(r)}}),[e,t]),u}(e,1e3);return n.createElement("section",{className:"p-4 shadow-lg rounded-xl border border-[--ifm-color-emphasis-400] border-solid"},n.createElement("h3",{className:"mb-2"},"Debounce 1 second"),n.createElement("input",{className:"input",type:"text",value:e,onChange:e=>t(e.target.value)}),n.createElement("div",null,"Keyword: ",e),n.createElement("div",null,"Debounced keyword: ",r))}function u(){const[e,t]=(0,n.useState)(""),r=function(e,t,r){void 0===r&&(r=o.ZT);var l=(0,n.useState)(e),u=l[0],s=l[1],c=(0,n.useRef)(),i=(0,n.useRef)(e),d=(0,n.useRef)(r);return(0,n.useEffect)((function(){d.current=r}),[r]),(0,a.Z)((function(){i.current=e,c.current||(c.current=setTimeout((function(){s(i.current),d.current(i.current),c.current=void 0}),t))}),[e,t]),(0,n.useEffect)((function(){return function(){clearTimeout(c.current),c.current=void 0}}),[]),u}(e,1e3);return n.createElement("section",{className:"p-4 shadow-lg rounded-xl border border-[--ifm-color-emphasis-400] border-solid"},n.createElement("h3",{className:"mb-2"},"Throttle 1 second"),n.createElement("input",{className:"input",type:"text",value:e,onChange:e=>t(e.target.value)}),n.createElement("div",null,"Keyword: ",e),n.createElement("div",null,"Throttled keyword: ",r))}},2418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>f});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162),u=r(9045),s=r(8286),c=r(6826);const i={},d="useThrottle",m={unversionedId:"use-throttle",id:"use-throttle",title:"useThrottle",description:"Get throttled value.",source:"@site/docs/use-throttle.mdx",sourceDirName:".",slug:"/use-throttle",permalink:"/react-power-ups/docs/use-throttle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"useDebounceFn",permalink:"/react-power-ups/docs/use-debounce-fn"},next:{title:"useThrottleFn",permalink:"/react-power-ups/docs/use-throttle-fn"}},p={},f=[{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:2}],v={toc:f},b="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usethrottle"},"useThrottle"),(0,a.kt)("p",null,"Get throttled value."),(0,a.kt)("hr",{className:"custom-hr"}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const throttledValue = useThrottle(value, delay, callbackFn);\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(u.Z,{name:"value",type:"any",isRequired:!0,mdxType:"Param"}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The value to be throttled"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(u.Z,{name:"delay",type:"number",isRequired:!0,mdxType:"Param"}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Delay in miliseconds"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(u.Z,{name:"callbackFn",type:"(value: any) => void",isRequired:!1,mdxType:"Param"}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Callback function after throttled")))),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(u.Z,{name:"throttledValue",type:"any",mdxType:"Param"}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The throttled value")))),(0,a.kt)("hr",{className:"custom-hr"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(s.Z,{mdxType:"BrowserWindow"},(0,a.kt)(c.w,{mdxType:"DemoThrottle"}),(0,a.kt)("div",{className:"h-4"}),(0,a.kt)(c.H,{mdxType:"DemoDebounce"})),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"JS",label:"JS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport { useThrottle, useDebounce } from 'react-power-ups';\n\nexport function DemoThrottle() {\n  const [keyword, setKeyword] = useState('');\n  const throttledKeyword = useThrottle(keyword, 1000);\n\n  return (\n    <>\n      <h3>Throttle 1 second</h3>\n      <input type=\"text\" value={keyword} onChange={(e) => setKeyword(e.target.value)} />\n      <div>Keyword: {keyword}</div>\n      <div>Throttled keyword: {throttledKeyword}</div>\n    </>\n  );\n}\n\nexport function DemoDebounce() {\n  const [keyword, setKeyword] = useState('');\n  const debouncedKeyword = useDebounce(keyword, 1000);\n\n  return (\n    <>\n      <h3>Debounce 1 second</h3>\n      <input type=\"text\" value={keyword} onChange={(e) => setKeyword(e.target.value)} />\n      <div>Keyword: {keyword}</div>\n      <div>Debounced keyword: {debouncedKeyword}</div>\n    </>\n  );\n}\n"))),(0,a.kt)(l.Z,{value:"TS",label:"TS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport { useThrottle, useDebounce } from 'react-power-ups';\n\nexport function DemoThrottle() {\n  const [keyword, setKeyword] = useState('');\n  const throttledKeyword = useThrottle(keyword, 1000);\n\n  return (\n    <>\n      <h3>Throttle 1 second</h3>\n      <input type=\"text\" value={keyword} onChange={(e) => setKeyword(e.target.value)} />\n      <div>Keyword: {keyword}</div>\n      <div>Throttled keyword: {throttledKeyword}</div>\n    </>\n  );\n}\n\nexport function DemoDebounce() {\n  const [keyword, setKeyword] = useState('');\n  const debouncedKeyword = useDebounce(keyword, 1000);\n\n  return (\n    <>\n      <h3>Debounce 1 second</h3>\n      <input type=\"text\" value={keyword} onChange={(e) => setKeyword(e.target.value)} />\n      <div>Keyword: {keyword}</div>\n      <div>Debounced keyword: {debouncedKeyword}</div>\n    </>\n  );\n}\n")))))}h.isMDXComponent=!0},8121:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(){var e=(0,n.useRef)(!0);return!!e.current&&(e.current=!1,!0)}},9457:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(8121);function o(e,t){var r=(0,a.Z)();(0,n.useEffect)((function(){if(!r)return e()}),t)}},7192:(e,t,r)=>{r.d(t,{RF:()=>l,ZT:()=>n,ht:()=>o,jU:()=>a});var n=function(){},a="undefined"!=typeof window,o=function(e,t){return e===t},l=function(e){return e}}}]);