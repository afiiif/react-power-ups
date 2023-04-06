"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=s(n),p=a,d=f["".concat(c,".").concat(p)]||f[p]||m[p]||l;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7462),a=n(7294),l=n(6010),o=n(2466),u=n(6550),c=n(1980),s=n(7392),i=n(12);function f(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??f(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,s]=d({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var v=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function E(e){let{className:t,block:n,selectedValue:u,selectValue:c,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=i.indexOf(t),r=s[n].value;r!==u&&(f(t),c(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(E,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},8286:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{children:t,className:n="p-4",url:a="http://localhost:3000/"}=e;return r.createElement("div",{className:"custom-browser-window border-[3px] border-[--ifm-color-emphasis-200] border-solid rounded-[--ifm-global-radius] mb-4"},r.createElement("div",{className:"py-2 px-4 bg-[--ifm-color-emphasis-200] flex items-center"},r.createElement("div",{className:"flex gap-1.5"},r.createElement("div",{className:"w-3 h-3 rounded-full bg-[--ifm-color-danger]"}),r.createElement("div",{className:"w-3 h-3 rounded-full bg-[--ifm-color-warning]"}),r.createElement("div",{className:"w-3 h-3 rounded-full bg-[--ifm-color-success]"})),r.createElement("div",{className:"bg-[--ifm-background-color] rounded-full text-sm py-1 px-4 flex-1 mx-4"},a),r.createElement("div",null,r.createElement("div",{className:"h-[3px] w-[18px] bg-slate-400"}),r.createElement("div",{className:"h-[3px] w-[18px] bg-slate-400 my-[3px]"}),r.createElement("div",{className:"h-[3px] w-[18px] bg-slate-400"}))),r.createElement("div",{className:n},t))}},9045:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{name:t,type:n,isRequired:a}=e;return r.createElement(r.Fragment,null,r.createElement("code",{className:"mr-2"},r.createElement("strong",null,t),!1===a&&"?",": ",n),a&&r.createElement("span",{className:"text-[--ifm-color-danger] font-semibold"},"(Required)"))}},283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>b,toc:()=>h});var r=n(7462),a=n(7294),l=n(3905),o=n(4866),u=n(5162),c=n(9045),s=n(8286),i=n(9457);function f(){const[e,t]=(0,a.useState)(0);return(0,a.useEffect)((()=>{console.log("Hello from useEffect")}),[e]),(0,i.Z)((()=>{console.log("Hello from useUpdateEffect")}),[e]),a.createElement(a.Fragment,null,a.createElement("div",null,"Count: ",e),a.createElement("div",{className:"flex items-center pt-3 gap-4"},a.createElement("button",{className:"btn",onClick:()=>t((e=>e+1))},"Increment"),a.createElement("div",null,"\u2139\ufe0f ",a.createElement("i",{className:"text-[--ifm-color-emphasis-700]"},"Check the console"))))}const m=(0,a.memo)(f),p={},d="useUpdateEffect",b={unversionedId:"use-update-effect",id:"use-update-effect",title:"useUpdateEffect",description:"Like useEffect hook, but skip on first render.",source:"@site/docs/use-update-effect.mdx",sourceDirName:".",slug:"/use-update-effect",permalink:"/docs/use-update-effect",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"usePreviousDistinct",permalink:"/docs/use-previous-distinct"},next:{title:"useIsomorphicLayoutEffect",permalink:"/docs/use-isomorphic-layout-effect"}},v={},h=[{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:2}],E={toc:h},y="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"useupdateeffect"},"useUpdateEffect"),(0,l.kt)("p",null,"Like ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, but skip on first render."),(0,l.kt)("hr",{className:"custom-hr"}),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"useUpdateEffect(effect, deps);\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useEffect"},"https://react.dev/reference/react/useEffect")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(c.Z,{name:"effect",type:"EffectCallback",isRequired:!0,mdxType:"Param"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Effect callback just like in ",(0,l.kt)("inlineCode",{parentName:"li"},"useEffect")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(c.Z,{name:"deps",type:"DependencyList",isRequired:!1,mdxType:"Param"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Dependency list just like in ",(0,l.kt)("inlineCode",{parentName:"li"},"useEffect"))))),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"No return")),(0,l.kt)("hr",{className:"custom-hr"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{mdxType:"BrowserWindow"},(0,l.kt)(m,{mdxType:"Demo"})),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"JS",label:"JS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useUpdateEffect } from 'react-power-ups';\n\nexport function Demo() {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount((prev) => prev + 1);\n\n  useEffect(() => {\n    console.log('Hello from useEffect');\n  }, [count]);\n\n  useUpdateEffect(() => {\n    // This only called when count updated\n    console.log('Hello from useUpdateEffect');\n  }, [count]);\n\n  return (\n    <>\n      <div>Count: {count}</div>\n      <button onClick={increment}>Increment</button>\n    </>\n  );\n}\n"))),(0,l.kt)(u.Z,{value:"TS",label:"TS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useUpdateEffect } from 'react-power-ups';\n\nexport function Demo() {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount((prev) => prev + 1);\n\n  useEffect(() => {\n    console.log('Hello from useEffect');\n  }, [count]);\n\n  useUpdateEffect(() => {\n    // This only called when count updated\n    console.log('Hello from useUpdateEffect');\n  }, [count]);\n\n  return (\n    <>\n      <div>Count: {count}</div>\n      <button onClick={increment}>Increment</button>\n    </>\n  );\n}\n")))))}g.isMDXComponent=!0},8121:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(){var e=(0,r.useRef)(!0);return!!e.current&&(e.current=!1,!0)}},9457:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(8121);function l(e,t){var n=(0,a.Z)();(0,r.useEffect)((function(){if(!n)return e()}),t)}}}]);