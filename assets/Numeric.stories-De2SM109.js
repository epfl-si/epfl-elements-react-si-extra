import{j as r}from"./jsx-runtime-JREzBMnd.js";import"./iframe-DGdu2PBg.js";import"./preload-helper-BJiQSKF8.js";const p=({size:g="medium",isReadonly:f=!1,val:y,placeholder:b,min:h,max:q,label:i,isRequired:m=!1,id:u,name:T,help:c,validationErrorMessage:v,onChange:d})=>{let a="form-control";switch(g){case"small":a=a.concat(" form-control-sm");break;case"large":a=a.concat(" form-control-lg");break}const x=m?"form-group required":"form-group";return r.jsxs("div",{className:x,children:[i?r.jsx("label",{className:"control-label",htmlFor:u,children:i}):r.jsx(r.Fragment,{}),r.jsxs("div",{className:"input-group has-validation",children:[r.jsx("input",{className:a,type:"number",id:u,name:T,min:h,max:q,placeholder:b,value:y,readOnly:f,required:m,onChange:D=>{d&&d(parseInt(D.target.value,10))}}),r.jsx("div",{className:"invalid-feedback",children:v})]}),c?r.jsx("small",{className:"form-text text-muted",children:c}):r.jsx(r.Fragment,{})]})};p.__docgenInfo={description:"A numeric field.",methods:[],displayName:"Numeric",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},isReadonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},val:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},help:{required:!1,tsType:{name:"string"},description:""},validationErrorMessage:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: number) => void",signature:{arguments:[{type:{name:"number"},name:"newValue"}],return:{name:"void"}}},description:""}}};const S={title:"Molecules/Inputs/Numeric",component:p,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{name:"test_Name",id:"test_primary"}},s={...e,args:{...e.args,isRequired:!0}},t={...e,args:{...e.args,isReadonly:!0}},n={...e,args:{...e.args,label:"Test label"}},l={...e,args:{...e.args,help:"Test label"}},o={...e,args:{...e.args,placeholder:"Test label"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const _=["Default","Required","Readonly","WithLabel","WithHelp","WithPlaceholder"];export{e as Default,t as Readonly,s as Required,l as WithHelp,n as WithLabel,o as WithPlaceholder,_ as __namedExportsOrder,S as default};
