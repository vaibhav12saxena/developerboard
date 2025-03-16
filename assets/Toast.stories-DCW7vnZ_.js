import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-DmM0KDA7.js";const C={success:"bg-green-100 text-green-800 border-green-300",error:"bg-red-100 text-red-800 border-red-300",info:"bg-blue-100 text-blue-800 border-blue-300",warning:"bg-yellow-100 text-yellow-800 border-yellow-300"},i=({type:c,message:t,onClose:l})=>s.jsxs("div",{className:`border rounded-lg px-4 py-2 shadow-md flex justify-between items-center space-x-4 ${C[c]}`,children:[s.jsx("span",{children:t}),l&&s.jsx("button",{onClick:l,className:"text-sm text-gray-600 hover:text-black","aria-label":"Close toast",children:"✖"})]});i.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{type:{required:!0,tsType:{name:"union",raw:"'success' | 'error' | 'info' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:""},message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"Molecules/Toast",component:i,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","error","info","warning"],description:"Type of the toast"},message:{control:"text",description:"Message to display in the toast"},onClose:{action:"clicked",description:"Callback for close button"}},parameters:{docs:{description:{component:"This is the **visual-only Toast** component. Use `addToast()` from context in real usage. This version is for documenting props clearly in Storybook."}}}},r={args:{type:"success",message:"This is a success toast!"}},o={args:{type:"error",message:"Something went wrong!"}},a={args:{type:"info",message:"This is an informational toast."}},n={args:{type:"warning",message:"Be careful!"}},e=()=>{const[c,t]=k.useState(!1);return s.jsxs("div",{className:"space-y-4",children:[s.jsx("button",{onClick:()=>t(!0),className:"bg-blue-600 text-white px-4 py-2 rounded-md",children:"Show Toast"}),c&&s.jsx(i,{type:"success",message:"This toast appears on click!",onClose:()=>t(!1)})]})};e.storyName="Interactive Example";e.parameters={docs:{description:{story:"Click the button to trigger the toast. This is just a simulation — real usage should go through `ToastContext`."}}};e.__docgenInfo={description:"",methods:[],displayName:"InteractiveToast"};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'This is a success toast!'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: 'Something went wrong!'
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,f,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is an informational toast.'
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,b,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'Be careful!'
  }
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var S,v,j;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(false);
  return <div className="space-y-4">
      <button onClick={() => setShow(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Show Toast
      </button>

      {show && <Toast type="success" message="This toast appears on click!" onClose={() => setShow(false)} />}
    </div>;
}`,...(j=(v=e.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const _=["Success","Error","Info","Warning","InteractiveToast"];export{o as Error,a as Info,e as InteractiveToast,r as Success,n as Warning,_ as __namedExportsOrder,E as default};
