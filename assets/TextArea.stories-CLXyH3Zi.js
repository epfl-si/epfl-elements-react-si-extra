import{j as a}from"./jsx-runtime-Cwe5b5DN.js";import"./iframe-tNL3OPq1.js";import"./preload-helper-BJiQSKF8.js";const p=({size:g="medium",isReadonly:f=!1,value:y,placeholder:h,label:m,isRequired:u=!1,id:i,name:T,help:d,validationErrorMessage:b,rows:q,cols:x,minlength:v,maxlength:D,onChange:c})=>{let r="form-control";switch(g){case"small":r=r.concat(" form-control-sm");break;case"large":r=r.concat(" form-control-lg");break}const j=u?"form-group required":"form-group";return a.jsxs("div",{className:j,children:[m?a.jsx("label",{className:"control-label",htmlFor:i,children:m}):a.jsx(a.Fragment,{}),a.jsxs("div",{className:"input-group has-validation",children:[a.jsx("textarea",{className:r,id:i,name:T,minLength:v,maxLength:D,placeholder:h,value:y,readOnly:f,required:u,rows:q,cols:x,style:{resize:"both"},onChange:R=>{c&&c(R.target.value)}},i),a.jsx("div",{className:"invalid-feedback",children:b})]}),d?a.jsx("small",{className:"form-text text-muted",children:d}):a.jsx(a.Fragment,{})]})};p.__docgenInfo={description:"A textarea field.",methods:[],displayName:"TextArea",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},isReadonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"string"},description:""},minlength:{required:!1,tsType:{name:"number"},description:""},maxlength:{required:!1,tsType:{name:"number"},description:""},rows:{required:!1,tsType:{name:"number"},description:""},cols:{required:!1,tsType:{name:"number"},description:""},validationErrorMessage:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"newValue"}],return:{name:"void"}}},description:""}}};const w={title:"Molecules/Inputs/TextArea",component:p,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{name:"test_Name",id:"test_primary"}},s={...e,args:{...e.args,isRequired:!0}},t={...e,args:{...e.args,isReadonly:!0}},n={...e,args:{...e.args,label:"Test label"}},l={...e,args:{...e.args,help:"Test label"}},o={...e,args:{...e.args,placeholder:"Test label"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test_Name',
    id: 'test_primary'
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
}`,...o.parameters?.docs?.source}}};const W=["Default","Required","Readonly","WithLabel","WithHelp","WithPlaceholder"];export{e as Default,t as Readonly,s as Required,l as WithHelp,n as WithLabel,o as WithPlaceholder,W as __namedExportsOrder,w as default};
