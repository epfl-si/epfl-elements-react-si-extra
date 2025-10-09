import{j as o}from"./jsx-runtime-Cwe5b5DN.js";import"./iframe-tNL3OPq1.js";import"./preload-helper-BJiQSKF8.js";const s=({logoUrl:r,alt:a,target:l})=>o.jsx("a",{className:"logo",href:r??"https://www.epfl.ch/",target:l??"_top",children:o.jsx("img",{src:"https://www.epfl.ch/campus/services/website/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg?refresh=now",alt:a??"EPFL, École polytechnique fédérale de Lausanne",className:"img-fluid"})});s.__docgenInfo={description:`The EPFL logo.
By default, the logo link redirects to the EPFL website, but it’s possible to configure the following:
- the placeholder comment
- the URL to open when the logo is clicked
- whether the page opens in the current tab or in a new tab`,methods:[],displayName:"Logo",props:{logoUrl:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"union",raw:"'_blanc' | '_top'",elements:[{name:"literal",value:"'_blanc'"},{name:"literal",value:"'_top'"}]},description:""}}};const m={title:"Molecules/Logo",component:s,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{}},t={args:{logoUrl:"https://www.google.com/",alt:"EPFL",target:"_blanc"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    logoUrl: 'https://www.google.com/',
    alt: "EPFL",
    target: '_blanc'
  }
}`,...t.parameters?.docs?.source}}};const g=["Default","WithParams"];export{e as Default,t as WithParams,g as __namedExportsOrder,m as default};
