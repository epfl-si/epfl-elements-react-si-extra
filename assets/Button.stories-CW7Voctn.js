import{j as t}from"./jsx-runtime-Cwe5b5DN.js";import{B as c}from"./Button-DvfYA4Wi.js";import"./iframe-tNL3OPq1.js";import"./preload-helper-BJiQSKF8.js";import"./feather-sprite-BJeC_hki.js";const d={title:"Molecules/Button",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"clicked"},label:{type:"string"}}},r={args:{primary:!0,label:"Click me",iconName:"#save"}},e={...r,args:{...r.args,primary:!1}},a={...r,args:{...r.args,size:"large"}},s={...r,args:{...r.args,size:"small"}},n={args:{size:"icon",iconName:"#save"}},o={args:{primary:!0,label:"Click me",iconName:"#save"},render(m){return t.jsx(c,{...m,children:t.jsx("div",{children:t.jsx("span",{style:{marginLeft:"5px"},children:"Test Button"},"label")})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Click me',
    iconName: \`#save\`
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    primary: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    size: 'large'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    iconName: \`#save\`
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Click me',
    iconName: \`#save\`
  },
  render(args) {
    // prop in the “Show code” area.
    return <Button {...args}>
      <div>
        <span key="label" style={{
          marginLeft: '5px'
        }}>Test Button</span>
      </div>
    </Button>;
  }
}`,...o.parameters?.docs?.source}}};const y=["Primary","Secondary","Large","Small","Icon","WithArguments"];export{n as Icon,a as Large,r as Primary,e as Secondary,s as Small,o as WithArguments,y as __namedExportsOrder,d as default};
