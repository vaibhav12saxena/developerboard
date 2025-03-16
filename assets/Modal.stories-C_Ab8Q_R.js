import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-DmM0KDA7.js";import{h as j}from"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";const g=({isOpen:r,onClose:t,title:o,children:f,showCloseIcon:O=!0})=>{if(!r)return null;const C=e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",onClick:t,children:e.jsxs("div",{className:"bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative z-60",onClick:v=>v.stopPropagation(),children:[O&&e.jsx("button",{className:"absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold",onClick:t,children:"×"}),o&&e.jsx("h3",{className:"text-lg font-semibold mb-4",children:o}),f]})});return typeof window<"u"?j.createPortal(C,document.body):null},N={title:"Atoms/Modal",component:g,tags:["autodocs"],argTypes:{isOpen:{table:{disable:!0}},onClose:{table:{disable:!0}}}},l=r=>{const[t,o]=w.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-blue-600 text-white rounded-md",children:"Open Modal"}),e.jsx(g,{...r,isOpen:t,onClose:()=>o(!1)})]})},s=l.bind({});s.args={title:"Hello Modal",children:"This is a modal content.",showCloseIcon:!0};const n=l.bind({});n.args={title:"No Close Icon",children:"This modal has no close icon.",showCloseIcon:!1};const a=l.bind({});a.args={title:"Scrollable Modal",children:e.jsx("div",{style:{maxHeight:"300px",overflowY:"auto"},children:Array.from({length:30},(r,t)=>e.jsxs("p",{children:["Line ",t+1]},t))})};var d,c,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Open Modal
      </button>
      <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
    </div>;
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Open Modal
      </button>
      <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
    </div>;
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,x,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Open Modal
      </button>
      <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
    </div>;
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const I=["Default","WithoutCloseIcon","ScrollableContent"];export{s as Default,a as ScrollableContent,n as WithoutCloseIcon,I as __namedExportsOrder,N as default};
