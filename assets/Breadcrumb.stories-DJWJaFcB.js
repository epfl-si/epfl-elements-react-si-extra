import{j as e}from"./jsx-runtime-B-NFhw8F.js";import"./iframe-CE4dqkwZ.js";import"./preload-helper-BJiQSKF8.js";const s=({children:c,homeUrl:l,target:t})=>e.jsx("div",{className:"breadcrumb-container",children:e.jsx("nav",{"aria-label":"breadcrumb",className:"breadcrumb-wrapper",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",style:{marginRight:"0.4em"},children:e.jsx("a",{href:l??"https://www.epfl.ch/",target:t??"_blanc",rel:"noopener noreferrer",children:e.jsx("svg",{className:"icon","aria-hidden":"true",children:e.jsx("use",{xlinkHref:"#icon-home",children:e.jsx("svg",{id:"icon-home",viewBox:"0 0 11 12",children:e.jsx("path",{d:"M0 5l5.25-5 5.25 5v7H0z",fillRule:"evenodd"})})})})})}),c]})})});s.__docgenInfo={description:"A Breadcrumb",methods:[],displayName:"Breadcrumb",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},homeUrl:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"union",raw:"'_blanc' | '_top'",elements:[{name:"literal",value:"'_blanc'"},{name:"literal",value:"'_top'"}]},description:""}}};const d={title:"Molecules/Breadcrumb",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{children:[e.jsx("li",{className:"breadcrumb-item",children:"Campus"}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"https://www.google.com",children:"Google"})})]}},a={args:{homeUrl:"https://www.google.ch",target:"_top",children:[e.jsx("li",{className:"breadcrumb-item",children:"Campus"}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"https://www.google.com",children:"Google"})})]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<li className="breadcrumb-item">Campus</li>, <li className='breadcrumb-item'>
        <a href='https://www.google.com'>Google</a>
      </li>]
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    homeUrl: "https://www.google.ch",
    target: "_top",
    children: [<li className="breadcrumb-item">Campus</li>, <li className='breadcrumb-item'>
        <a href='https://www.google.com'>Google</a>
      </li>]
  }
}`,...a.parameters?.docs?.source}}};const n=["Default","CustomURL"];export{a as CustomURL,r as Default,n as __namedExportsOrder,d as default};
