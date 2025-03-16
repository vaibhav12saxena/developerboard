import{j as l}from"./jsx-runtime-D_zvdyIk.js";const b=({src:t,alt:j="Avatar",size:n="md",name:i,className:o=""})=>{const m={sm:"w-8 h-8 text-sm",md:"w-12 h-12 text-base",lg:"w-16 h-16 text-lg"},z=i?i.split(" ").map(A=>A[0]).join("").toUpperCase():"?";return t?l.jsx("img",{src:t,alt:j,className:`rounded-full object-cover ${m[n]} ${o}`}):l.jsx("div",{className:`rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-semibold ${m[n]} ${o}`,children:z})};b.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const I={title:"Atoms/Avatar",component:b,tags:["autodocs"],args:{size:"md"}},e={args:{src:"https://i.pravatar.cc/150?img=3",alt:"User avatar"}},a={args:{name:"Vaibhav Saxena"}},s={args:{name:"VS",size:"sm"}},r={args:{name:"Vaibhav Saxena",size:"lg"}};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User avatar'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'Vaibhav Saxena'
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'VS',
    size: 'sm'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,y,V;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'Vaibhav Saxena',
    size: 'lg'
  }
}`,...(V=(y=r.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};const T=["WithImage","WithInitials","Small","Large"];export{r as Large,s as Small,e as WithImage,a as WithInitials,T as __namedExportsOrder,I as default};
