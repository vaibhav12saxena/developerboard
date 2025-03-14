import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DmM0KDA7.js";function ue(e){var a,t,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(a=0;a<n;a++)e[a]&&(t=ue(e[a]))&&(s&&(s+=" "),s+=t)}else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function q(){for(var e,a,t=0,s="",n=arguments.length;t<n;t++)(e=arguments[t])&&(a=ue(e))&&(s&&(s+=" "),s+=a);return s}const y=({label:e,error:a,fullWidth:t=!1,className:s,leftIcon:n,rightIcon:v,prefix:I,suffix:N,debounceTime:j=0,onChange:w,onDebouncedChange:S,value:C,defaultValue:T,...he})=>{const[ge,fe]=l.useState(T!==void 0?String(T):""),R=C!==void 0,xe=R?C:ge,o=l.useRef(null),be=D=>{const V=D.target.value;R||fe(V),w&&w(D),j>0&&S&&(o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{S(V)},j))};return l.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]),r.jsxs("div",{className:q("flex flex-col gap-1",t&&"w-full"),children:[e&&r.jsx("label",{className:"text-sm text-gray-700 font-medium",children:e}),r.jsxs("div",{className:q("flex items-center border rounded-lg px-3 py-2 bg-white transition-all",a?"border-red-500":"border-gray-300",t&&"w-full",s),children:[n&&r.jsx("div",{className:"mr-2  flex-shrink-0 w-4 h-4 text-gray-500",children:n}),I&&r.jsx("div",{className:"mr-2 text-gray-500",children:I}),r.jsx("input",{className:"flex-1 outline-none bg-transparent text-sm text-gray-800 placeholder:text-gray-400",value:xe,onChange:be,...he}),N&&r.jsx("div",{className:"ml-2 text-gray-500",children:N}),v&&r.jsx("div",{className:"ml-2  flex-shrink-0 w-4 h-4 text-gray-500",children:v})]}),a&&r.jsx("p",{className:"text-xs text-red-500",children:a})]})};y.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},debounceTime:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onDebouncedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["NativeInputProps"]};const pe=({size:e=24})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,height:e,width:e,children:[r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4h16v16H4z"}),r.jsx("path",{d:"M4 4l8 8 8-8"})]});pe.__docgenInfo={description:"",methods:[],displayName:"MailIcon",props:{size:{defaultValue:{value:"24",computed:!1},required:!1}}};const me=({size:e=24})=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,height:e,width:e,children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})});me.__docgenInfo={description:"",methods:[],displayName:"CheckIcon",props:{size:{defaultValue:{value:"24",computed:!1},required:!1}}};const Ie={title:"Components/Input",component:y,tags:["autodocs"]},c={args:{label:"Name",placeholder:"Enter your name"}},d={args:{label:"Email",leftIcon:r.jsx(pe,{size:16}),rightIcon:r.jsx(me,{size:16}),placeholder:"you@example.com"}},i={args:{label:"Amount",prefix:"$",suffix:"USD",placeholder:"Enter amount"}},u={args:{label:"Username",error:"Username is required",placeholder:"Enter username"}},p={render:()=>{const[e,a]=l.useState("");return r.jsx(y,{label:"Controlled",value:e,onChange:t=>a(t.target.value),placeholder:"Type something"})}},m={args:{label:"Uncontrolled",defaultValue:"John Doe",placeholder:"Type here"}},h={render:()=>{const[e,a]=l.useState("");return r.jsxs(r.Fragment,{children:[r.jsx(y,{label:"Debounced",placeholder:"Start typing...",debounceTime:1e3,onDebouncedChange:t=>a(t)}),r.jsxs("p",{className:"text-sm mt-2",children:["Debounced Value: ",e]})]})}},g={args:{label:"Full Width Input",placeholder:"I stretch full width",fullWidth:!0}},f={args:{placeholder:"Type something..."}},x={args:{label:"Disabled",placeholder:"Can’t type here",disabled:!0}},b={args:{label:"Phone Number",prefix:r.jsx("div",{className:"text-sm font-medium text-gray-500 border-r pr-2 mr-2",children:"+91"}),placeholder:"98765 43210"}};var E,k,W;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
}`,...(W=(k=c.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var U,P,_;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    leftIcon: <MailIcon size={16} />,
    rightIcon: <CheckIcon size={16} />,
    placeholder: 'you@example.com'
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var M,z,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    prefix: '$',
    suffix: 'USD',
    placeholder: 'Enter amount'
  }
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var L,A,B;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    error: 'Username is required',
    placeholder: 'Enter username'
  }
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var O,J,$;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Input label="Controlled" value={val} onChange={e => setVal(e.target.value)} placeholder="Type something" />;
  }
}`,...($=(J=p.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var H,G,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled',
    defaultValue: 'John Doe',
    placeholder: 'Type here'
  }
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <>
        <Input label="Debounced" placeholder="Start typing..." debounceTime={1000} onDebouncedChange={v => setVal(v)} />
        <p className="text-sm mt-2">Debounced Value: {val}</p>
      </>;
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'I stretch full width',
    fullWidth: true
  }
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...'
  }
}`,...(se=(te=f.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,le;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Can’t type here',
    disabled: true
  }
}`,...(le=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,ie;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    prefix: <div className="text-sm font-medium text-gray-500 border-r pr-2 mr-2">
        +91
      </div>,
    placeholder: '98765 43210'
  }
}`,...(ie=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};const Ne=["Basic","WithIcons","WithPrefixSuffix","ErrorState","ControlledInput","UncontrolledInput","DebouncedInput","FullWidth","OnlyPlaceholder","DisabledInput","CustomPrefixComponent"];export{c as Basic,p as ControlledInput,b as CustomPrefixComponent,h as DebouncedInput,x as DisabledInput,u as ErrorState,g as FullWidth,f as OnlyPlaceholder,m as UncontrolledInput,d as WithIcons,i as WithPrefixSuffix,Ne as __namedExportsOrder,Ie as default};
