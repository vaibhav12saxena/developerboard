import{j as x}from"./jsx-runtime-D_zvdyIk.js";const h=({children:f,variant:n="primary",className:B="",...s})=>{const S="px-4 py-2 rounded font-medium transition-colors duration-200",C=n==="primary"?"bg-blue-600 text-white hover:bg-blue-700":n==="secondary"?"bg-gray-100 text-black border hover:bg-gray-200":"border border-blue-600 text-blue-600 hover:bg-blue-50";return x.jsx("button",{className:`${S} ${C} ${B}`,...s,children:f||s.text})};h.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const j={title:"Atoms/Button",component:h,tags:["autodocs"],args:{variant:"primary",text:"Click Me"}},e={args:{variant:"primary"}},r={args:{variant:"secondary",text:"Secondary Button"}},a={args:{variant:"outline",text:"Outline Button"}},t={args:{variant:"primary",children:x.jsx("span",{children:"Custom Content"})}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,l,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    text: 'Secondary Button'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    text: 'Outline Button'
  }
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,b,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: <span>Custom Content</span>
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const _=["Primary","Secondary","Outline","WithChildren"];export{a as Outline,e as Primary,r as Secondary,t as WithChildren,_ as __namedExportsOrder,j as default};
