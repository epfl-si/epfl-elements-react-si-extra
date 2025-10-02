import{j as a}from"./jsx-runtime-Dv12yplo.js";import"./iframe-n7kJe_nf.js";import"./preload-helper-BJiQSKF8.js";const T=({size:x="medium",isReadonly:q=!1,value:b,placeholder:v,label:d,isRequired:p=!1,id:g,name:D,help:f,validationErrorMessage:y,type:w,minlength:S,maxlength:j,pattern:R,style:N={},onChange:h})=>{let r="form-control";switch(x){case"small":r=r.concat(" form-control-sm");break;case"large":r=r.concat(" form-control-lg");break}const _=p?"form-group required":"form-group";return a.jsxs("div",{className:_,style:N,children:[d?a.jsx("label",{className:"control-label",htmlFor:g,children:d}):a.jsx(a.Fragment,{}),a.jsxs("div",{className:"input-group has-validation",children:[a.jsx("input",{className:r,type:w,id:g,name:D,minLength:S,maxLength:j,pattern:R,placeholder:v,value:b,readOnly:q,required:p,onChange:V=>{h&&h(V.target.value)}}),y?a.jsx("div",{className:"invalid-feedback",children:y}):a.jsx(a.Fragment,{})]}),f?a.jsx("small",{className:"form-text text-muted",children:f}):a.jsx(a.Fragment,{})]})};T.__docgenInfo={description:`A text field.
It could be a simple text, a telephone number, an email address, a password, an url`,methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},isReadonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'text' | 'tel' | 'email' | 'password' | 'url'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'url'"}]},description:""},minlength:{required:!1,tsType:{name:"number"},description:""},maxlength:{required:!1,tsType:{name:"number"},description:""},pattern:{required:!1,tsType:{name:"string"},description:""},validationErrorMessage:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"newValue"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"Style"},description:"",defaultValue:{value:"{}",computed:!1}}}};const L={title:"Molecules/Inputs/Text",component:T,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{name:"test_Name",id:"test_primary",type:"text"}},s={...e,args:{...e.args,isRequired:!0}},t={...e,args:{...e.args,isReadonly:!0}},n={...e,args:{...e.args,label:"Test label"}},l={...e,args:{...e.args,help:"Test label"}},o={...e,args:{...e.args,placeholder:"Test label"}},i={...e,args:{...e.args,type:"password"}},u={...e,args:{...e.args,type:"email"}},m={...e,args:{...e.args,type:"tel"}},c={...e,args:{...e.args,type:"url"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test_Name',
    id: 'test_primary',
    type: 'text'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isReadonly: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: 'Test label'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    help: 'Test label'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    placeholder: 'Test label'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    type: 'password'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    type: 'email'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    type: 'tel'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    type: 'url'
  }
}`,...c.parameters?.docs?.source}}};const P=["Default","Required","Readonly","WithLabel","WithHelp","WithPlaceholder","Password","Email","Telephone","Url"];export{e as Default,u as Email,i as Password,t as Readonly,s as Required,m as Telephone,c as Url,l as WithHelp,n as WithLabel,o as WithPlaceholder,P as __namedExportsOrder,L as default};
