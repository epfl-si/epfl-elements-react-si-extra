import{j as e}from"./jsx-runtime-C1OX_lr1.js";import{B as p}from"./Button-DPfKPpfp.js";import"./iframe-BgVyHs0z.js";import"./preload-helper-BJiQSKF8.js";import"./feather-sprite-BJeC_hki.js";const n=({title:a,children:c,icon:r,onClickIcon:l,onClickItem:d,style:m,className:i,keyValue:s,tooltip:u})=>{let o="flex-fill";return r&&(o="form-flex-item-body"),e.jsxs("div",{className:"form-card ".concat(i||""),style:m,children:[e.jsxs("div",{className:o,onClick:d,children:[a?e.jsx("h5",{className:"card-text",children:a}):e.jsx(e.Fragment,{}),c]}),r?e.jsx("div",{className:"form-flex-item-icon",children:e.jsx(p,{size:"icon",iconName:r,onClick:l,title:u,id:s.concat("button")},s.concat("button"))}):e.jsx(e.Fragment,{})]},s)};n.__docgenInfo={description:"A card  with title, children for the body and a button for an action",methods:[],displayName:"FormCard",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},onClickIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickItem:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"Style"},description:""},className:{required:!1,tsType:{name:"string"},description:""},keyValue:{required:!0,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Molecules/FormCard",component:n,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{title:"Test default",icon:"#trash-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"VPO-SI"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Cosec: Tonfio Caval, Ivo Steiner"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Prof: Lorezo Ciccio"})]})],keyValue:"test"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Test default',
    icon: '#trash-2',
    children: [<div>
                <strong>VPO-SI</strong>
                <br />
                <small className="text-muted">Cosec: Tonfio Caval, Ivo Steiner</small>
                <br />
                <small className="text-muted">Prof: Lorezo Ciccio</small>
            </div>],
    keyValue: 'test'
  }
}`,...t.parameters?.docs?.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,j as default};
