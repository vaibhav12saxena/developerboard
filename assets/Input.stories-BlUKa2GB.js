import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DmM0KDA7.js";import{c as V}from"./clsx-B-dksMZM.js";const x=({label:r,error:a,fullWidth:t=!1,className:pe,leftIcon:b,rightIcon:y,prefix:v,suffix:I,debounceTime:N=0,onChange:w,onDebouncedChange:j,value:S,defaultValue:T,...me})=>{const[he,ge]=o.useState(T!==void 0?String(T):""),C=S!==void 0,fe=C?S:he,s=o.useRef(null),xe=R=>{const D=R.target.value;C||ge(D),w&&w(R),N>0&&j&&(s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{j(D)},N))};return o.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),e.jsxs("div",{className:V("flex flex-col gap-1",t&&"w-full"),children:[r&&e.jsx("label",{className:"text-sm text-gray-700 font-medium",children:r}),e.jsxs("div",{className:V("flex items-center border rounded-lg px-3 py-2 bg-white transition-all",a?"border-red-500":"border-gray-300",t&&"w-full",pe),children:[b&&e.jsx("div",{className:"mr-2  flex-shrink-0 w-4 h-4 text-gray-500",children:b}),v&&e.jsx("div",{className:"mr-2 text-gray-500",children:v}),e.jsx("input",{className:"flex-1 outline-none bg-transparent text-sm text-gray-800 placeholder:text-gray-400",value:fe,onChange:xe,...me}),I&&e.jsx("div",{className:"ml-2 text-gray-500",children:I}),y&&e.jsx("div",{className:"ml-2  flex-shrink-0 w-4 h-4 text-gray-500",children:y})]}),a&&e.jsx("p",{className:"text-xs text-red-500",children:a})]})};x.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},debounceTime:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onDebouncedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["NativeInputProps"]};const ie=({size:r=24})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,height:r,width:r,children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4h16v16H4z"}),e.jsx("path",{d:"M4 4l8 8 8-8"})]});ie.__docgenInfo={description:"",methods:[],displayName:"MailIcon",props:{size:{defaultValue:{value:"24",computed:!1},required:!1}}};const ue=({size:r=24})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,height:r,width:r,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})});ue.__docgenInfo={description:"",methods:[],displayName:"CheckIcon",props:{size:{defaultValue:{value:"24",computed:!1},required:!1}}};const Ie={title:"Atoms/Input",component:x,tags:["autodocs"]},n={args:{label:"Name",placeholder:"Enter your name"}},l={args:{label:"Email",leftIcon:e.jsx(ie,{size:16}),rightIcon:e.jsx(ue,{size:16}),placeholder:"you@example.com"}},c={args:{label:"Amount",prefix:"$",suffix:"USD",placeholder:"Enter amount"}},d={args:{label:"Username",error:"Username is required",placeholder:"Enter username"}},i={render:()=>{const[r,a]=o.useState("");return e.jsx(x,{label:"Controlled",value:r,onChange:t=>a(t.target.value),placeholder:"Type something"})}},u={args:{label:"Uncontrolled",defaultValue:"John Doe",placeholder:"Type here"}},p={render:()=>{const[r,a]=o.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(x,{label:"Debounced",placeholder:"Start typing...",debounceTime:1e3,onDebouncedChange:t=>a(t)}),e.jsxs("p",{className:"text-sm mt-2",children:["Debounced Value: ",r]})]})}},m={args:{label:"Full Width Input",placeholder:"I stretch full width",fullWidth:!0}},h={args:{placeholder:"Type something..."}},g={args:{label:"Disabled",placeholder:"Can’t type here",disabled:!0}},f={args:{label:"Phone Number",prefix:e.jsx("div",{className:"text-sm font-medium text-gray-500 border-r pr-2 mr-2",children:"+91"}),placeholder:"98765 43210"}};var q,E,k;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
}`,...(k=(E=n.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var W,U,P;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    leftIcon: <MailIcon size={16} />,
    rightIcon: <CheckIcon size={16} />,
    placeholder: 'you@example.com'
  }
}`,...(P=(U=l.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var _,M,z;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    prefix: '$',
    suffix: 'USD',
    placeholder: 'Enter amount'
  }
}`,...(z=(M=c.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var F,L,B;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    error: 'Username is required',
    placeholder: 'Enter username'
  }
}`,...(B=(L=d.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var A,O,J;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Input label="Controlled" value={val} onChange={e => setVal(e.target.value)} placeholder="Type something" />;
  }
}`,...(J=(O=i.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var $,H,G;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled',
    defaultValue: 'John Doe',
    placeholder: 'Type here'
  }
}`,...(G=(H=u.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <>
        <Input label="Debounced" placeholder="Start typing..." debounceTime={1000} onDebouncedChange={v => setVal(v)} />
        <p className="text-sm mt-2">Debounced Value: {val}</p>
      </>;
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'I stretch full width',
    fullWidth: true
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...'
  }
}`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,ne;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Can’t type here',
    disabled: true
  }
}`,...(ne=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ce,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    prefix: <div className="text-sm font-medium text-gray-500 border-r pr-2 mr-2">
        +91
      </div>,
    placeholder: '98765 43210'
  }
}`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Ne=["Basic","WithIcons","WithPrefixSuffix","ErrorState","ControlledInput","UncontrolledInput","DebouncedInput","FullWidth","OnlyPlaceholder","DisabledInput","CustomPrefixComponent"];export{n as Basic,i as ControlledInput,f as CustomPrefixComponent,p as DebouncedInput,g as DisabledInput,d as ErrorState,m as FullWidth,h as OnlyPlaceholder,u as UncontrolledInput,l as WithIcons,c as WithPrefixSuffix,Ne as __namedExportsOrder,Ie as default};
