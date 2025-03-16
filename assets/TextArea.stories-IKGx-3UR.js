import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{c as v}from"./clsx-B-dksMZM.js";const p=({className:m,variant:b="default",...f})=>{const g="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none transition-colors resize-none",x={default:"border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200",error:"border-red-500 focus:border-red-500 focus:ring-red-200",disabled:"bg-gray-100 cursor-not-allowed text-gray-500"};return y.jsx("textarea",{className:v(g,x[b],m),...f})};p.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}},composes:["TextareaHTMLAttributes"]};const D={title:"Atoms/Textarea",component:p,tags:["autodocs"]},e={args:{placeholder:"Type your message...",rows:4}},r={args:{placeholder:"There is an error...",variant:"error"}},a={args:{placeholder:"Disabled textarea",variant:"disabled",disabled:!0}};var s,o,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message...',
    rows: 4
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var l,n,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'There is an error...',
    variant: 'error'
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,i,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled textarea',
    variant: 'disabled',
    disabled: true
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const w=["Default","Error","Disabled"];export{e as Default,a as Disabled,r as Error,w as __namedExportsOrder,D as default};
