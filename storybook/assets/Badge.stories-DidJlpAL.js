import{j}from"./jsx-runtime-D_zvdyIk.js";const w=({label:S,variant:N="neutral",className:B=""})=>{const _={primary:"bg-blue-100 text-blue-800",success:"bg-green-100 text-green-800",warning:"bg-yellow-100 text-yellow-800",danger:"bg-red-100 text-red-800",neutral:"bg-gray-100 text-gray-800"};return j.jsx("span",{className:`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${_[N]} ${B}`,children:S})};w.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const T={title:"Atoms/Badge",component:w,tags:["autodocs"],args:{label:"Badge"}},e={args:{variant:"primary"}},a={args:{variant:"success"}},r={args:{variant:"warning"}},s={args:{variant:"danger"}},n={args:{variant:"neutral"}};var t,o,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,l,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var p,v,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,f,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const h=["Primary","Success","Warning","Danger","Neutral"];export{s as Danger,n as Neutral,e as Primary,a as Success,r as Warning,h as __namedExportsOrder,T as default};
