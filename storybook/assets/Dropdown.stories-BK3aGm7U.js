import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DmM0KDA7.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D=(...e)=>e.filter((s,n,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===n).join(" ").trim();/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=c.forwardRef(({color:e="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:u="",children:i,iconNode:r,...d},p)=>c.createElement("svg",{ref:p,...L,width:s,height:s,stroke:e,strokeWidth:o?Number(n)*24/Number(s):n,className:D("lucide",u),...d},[...r.map(([g,f])=>c.createElement(g,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(e,s)=>{const n=c.forwardRef(({className:o,...u},i)=>c.createElement($,{ref:i,iconNode:s,className:D(`lucide-${M(e)}`,o),...u}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],T=h("Bell",R);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],I=h("ChevronDown",q);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],B=h("Mail",z);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],V=h("User",P),w=({options:e,onSelect:s,placeholder:n="Select",multiselect:o=!1})=>{const[u,i]=c.useState(!1),[r,d]=c.useState(null),p=c.useRef(null),g=t=>o&&Array.isArray(r)?r.some(l=>l.value===t.value):!o&&r&&"value"in r?r.value===t.value:!1,f=t=>{if(o){let l=Array.isArray(r)?[...r]:[];l.some(v=>v.value===t.value)?l=l.filter(v=>v.value!==t.value):l.push(t),d(l),s(l)}else d(t),s(t),i(!1)},O=()=>{Array.isArray(r)&&r.length===e.length?(d([]),s([])):(d(e),s(e))},_=Array.isArray(r)&&r.length===e.length,x=t=>{p.current&&!p.current.contains(t.target)&&i(!1)};c.useEffect(()=>(document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)),[]);const E=()=>o&&Array.isArray(r)?r.length>0?r.map(t=>t.label).join(", "):n:!o&&r&&"label"in r?r.label:n;return a.jsxs("div",{className:"relative inline-block w-60",ref:p,children:[a.jsxs("button",{className:"w-full px-4 py-2 border rounded-md text-left bg-white shadow-sm flex items-center justify-between",onClick:()=>i(t=>!t),children:[a.jsx("span",{children:E()}),a.jsx(I,{size:16,className:"ml-2 text-gray-500"})]}),u&&a.jsxs("div",{className:"absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-64 overflow-auto",children:[o&&a.jsx("div",{className:"px-4 py-2 border-b text-sm text-blue-600 cursor-pointer hover:bg-gray-100 font-medium",onClick:O,children:_?"Deselect All":"Select All"}),e.map(t=>{const l=g(t);return a.jsxs("div",{onClick:()=>f(t),className:`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${l?"bg-gray-100 font-medium":""}`,children:[o&&a.jsx("input",{type:"checkbox",checked:l,readOnly:!0,className:"accent-blue-600"}),t.icon&&a.jsx("span",{children:t.icon}),a.jsx("span",{children:t.label})]},t.value)})]})]})};w.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selected: DropdownOption[] | DropdownOption) => void",signature:{arguments:[{type:{name:"union",raw:"DropdownOption[] | DropdownOption",elements:[{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},{name:"DropdownOption"}]},name:"selected"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select'",computed:!1}},multiselect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const K={title:"Molecules/Dropdown",component:w,tags:["autodocs"]},C=e=>{const[s,n]=c.useState(null);return a.jsxs("div",{className:"p-6",children:[a.jsx(w,{...e,onSelect:o=>{n(o),e.onSelect(o)}}),a.jsxs("p",{className:"mt-4 text-sm text-gray-600",children:["Selected:"," ",Array.isArray(s)?s.map(o=>o.label).join(", "):s==null?void 0:s.label]})]})},m=C.bind({});m.args={placeholder:"Choose a service",options:[{label:"Profile",value:"profile",icon:a.jsx(V,{size:16})},{label:"Notifications",value:"notifications",icon:a.jsx(T,{size:16})},{label:"Messages",value:"messages",icon:a.jsx(B,{size:16})}],onSelect:e=>console.log(e)};const y=C.bind({});y.args={placeholder:"Choose items",multiselect:!0,options:[{label:"React",value:"react",icon:a.jsx("span",{children:"⚛️"})},{label:"Vue",value:"vue",icon:a.jsx("span",{children:"🟢"})},{label:"Svelte",value:"svelte",icon:a.jsx("span",{children:"🔥"})}],onSelect:e=>console.log(e)};var b,S,A;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`(args: DropdownProps) => {
  const [selected, setSelected] = useState<any>(null);
  return <div className="p-6">
      <Dropdown {...args} onSelect={option => {
      setSelected(option);
      args.onSelect(option); // pass back to Storybook logs
    }} />
      <p className="mt-4 text-sm text-gray-600">
        Selected:{' '}
        {Array.isArray(selected) ? selected.map(s => s.label).join(', ') : selected?.label}
      </p>
    </div>;
}`,...(A=(S=m.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var j,k,N;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`(args: DropdownProps) => {
  const [selected, setSelected] = useState<any>(null);
  return <div className="p-6">
      <Dropdown {...args} onSelect={option => {
      setSelected(option);
      args.onSelect(option); // pass back to Storybook logs
    }} />
      <p className="mt-4 text-sm text-gray-600">
        Selected:{' '}
        {Array.isArray(selected) ? selected.map(s => s.label).join(', ') : selected?.label}
      </p>
    </div>;
}`,...(N=(k=y.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const Z=["WithIcons","MultiSelect"];export{y as MultiSelect,m as WithIcons,Z as __namedExportsOrder,K as default};
