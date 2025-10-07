import{j as t}from"./jsx-runtime-Dfctr4nr.js";import{B as m}from"./Button-DM_clGtO.js";import{f as c}from"./feather-sprite-BJeC_hki.js";import"./iframe-CIibmClz.js";import"./preload-helper-BJiQSKF8.js";const y={title:"Molecules/Button",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"clicked"},label:{type:"string"}}},r={args:{primary:!0,label:"Click me",iconName:`${c}#save`}},e={...r,args:{...r.args,primary:!1}},a={...r,args:{...r.args,size:"large"}},s={...r,args:{...r.args,size:"small"}},n={args:{size:"icon",iconName:`${c}#save`}},o={args:{primary:!0,label:"Click me",iconName:`${c}#save`},render(i){return t.jsx(m,{...i,children:t.jsx("div",{children:t.jsx("span",{style:{marginLeft:"5px"},children:"Test Button"},"label")})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Click me',
    iconName: \`\${featherIcons}#save\`
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
    iconName: \`\${featherIcons}#save\`
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Click me',
    iconName: \`\${featherIcons}#save\`
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
}`,...o.parameters?.docs?.source}}};const f=["Primary","Secondary","Large","Small","Icon","WithArguments"];export{n as Icon,a as Large,r as Primary,e as Secondary,s as Small,o as WithArguments,f as __namedExportsOrder,y as default};
