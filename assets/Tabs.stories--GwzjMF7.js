import{j as e}from"./jsx-runtime-Dv12yplo.js";import{r as l}from"./iframe-n7kJe_nf.js";import{f as u}from"./feather-sprite-BJeC_hki.js";import"./preload-helper-BJiQSKF8.js";const d=({children:m})=>{const c=l.Children.toArray(m||[]).filter(a=>a.type===t.Tab),[b,T]=l.useState(0);function s(a){return a.props.id}function p(a){return l.Children.toArray(a||[]).find(r=>r.type===t.Tab.Title).props.children}function x(a){return l.Children.toArray(a||[]).find(r=>r.type===t.Tab.Content).props.children}return e.jsxs("div",{className:"tabs-div",children:[e.jsx("ul",{className:"nav nav-tabs-light nav-fill",role:"tablist",children:c.map((a,n)=>e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:`text-center nav-link text-muted ${n===b?"active":""}`,id:s(a).concat("-tab"),"data-toggle":"tab",href:"#".concat(s(a)),role:"tab","aria-controls":s(a),"aria-selected":"true",onClick:r=>{r.preventDefault(),T(n)},children:p(a.props.children)})},s(a)))}),e.jsx("div",{className:"tab-content p-3",children:c.map((a,n)=>e.jsx("div",{className:`tab-pane fade ${n===b?"show active":""}`,id:s(a),role:"tabpanel","aria-labelledby":s(a).concat("-tab"),children:x(a.props.children)},s(a)))})]})},t=Object.assign(d,{Tab:Object.assign(()=>e.jsx(e.Fragment,{}),{Title:(()=>e.jsx(e.Fragment,{})),Content:(()=>e.jsx(e.Fragment,{}))})});d.__docgenInfo={description:"",methods:[],displayName:"TabsFC",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g={title:"Molecules/Tabs",component:t,parameters:{layout:"centered"},tags:["autodocs"]},o=t;o.Tab.displayName="Tabs.Tab";o.Tab.Title.displayName="Tabs.Tab.Title";o.Tab.Content.displayName="Tabs.Tab.Content";const i={args:{children:[e.jsxs(t.Tab,{id:"1",children:[e.jsxs(t.Tab.Title,{children:[e.jsx("svg",{"aria-hidden":"true",className:"icon feather",children:e.jsx("use",{xlinkHref:`${u}#user`})}),"People"]}),e.jsxs(t.Tab.Content,{children:[e.jsx("strong",{children:"VPO-SI 1"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Caval, Ivo Steiner 1"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Mauro Rossi 1"})]})]}),e.jsxs(t.Tab,{id:"2",children:[e.jsx(t.Tab.Title,{children:"Unit"}),e.jsxs(t.Tab.Content,{children:[e.jsx("strong",{children:"VPO-SI 2"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Caval, Ivo Steiner 2"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Mauro Rossi 2"})]})]})]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.Tab id={"1"}>
        <Tabs.Tab.Title>
          <svg aria-hidden="true" className="icon feather">
            <use xlinkHref={\`\${featherIcons}#user\`}></use>
          </svg>
          People
        </Tabs.Tab.Title>
        <Tabs.Tab.Content>
          <strong>VPO-SI 1</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 1</small>
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
        </Tabs.Tab.Content>
      </Tabs.Tab>, <Tabs.Tab id={"2"}>
        <Tabs.Tab.Title>
          Unit
        </Tabs.Tab.Title>
        <Tabs.Tab.Content>
          <strong>VPO-SI 2</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 2</small>
          <br />
          <small className="text-muted">Mauro Rossi 2</small>
        </Tabs.Tab.Content>
      </Tabs.Tab>]
  }
}`,...i.parameters?.docs?.source}}};const N=["Default"];export{i as Default,N as __namedExportsOrder,g as default};
