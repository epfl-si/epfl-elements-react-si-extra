import{j as e}from"./jsx-runtime-JREzBMnd.js";import{r as n}from"./iframe-DGdu2PBg.js";import"./preload-helper-BJiQSKF8.js";const p=({children:x,cardStyle:T})=>{const o=n.Children.toArray(x||[]).filter(s=>s.type===a.Tab),[d,u]=n.useState(0);function t(s){return s.props.id}function m(s){return n.Children.toArray(s||[]).find(r=>r.type===a.Tab.Title).props.children}function b(s){return n.Children.toArray(s||[]).find(r=>r.type===a.Tab.Content).props.children}return e.jsxs("div",{className:"responsive-tabs",children:[e.jsx("ul",{className:"nav nav-tabs-light align-items-center tabs",role:"tablist",children:o.map((s,l)=>e.jsx("li",{className:"nav-item",children:e.jsx("a",{className:`nav-link ${l===d?"active":""}`,id:t(s).concat("-tab"),"data-toggle":"tab",href:"#".concat(t(s)),role:"tab","aria-controls":t(s),"aria-selected":"true",onClick:r=>{r.preventDefault(),u(l)},children:m(s.props.children)})},t(s).concat("-li")))}),e.jsx("div",{className:"tab-content p-3 tabs",children:o.map((s,l)=>e.jsx("div",{className:`tab-pane fade ${l===d?"show active":""}`,id:t(s),role:"tabpanel",style:{width:"100%"},"aria-labelledby":t(s).concat("-tab"),children:b(s.props.children)},t(s)))}),e.jsx("div",{className:"flex-row justify-content-between box-container",children:o.map(s=>e.jsx("div",{className:"box card col-lg-4 d-flex align-items-stretch",id:t(s),"aria-labelledby":t(s).concat("-tab"),style:T,children:e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"card-title",children:m(s.props.children)}),e.jsxs("div",{className:"card-text",children:[e.jsx("hr",{}),b(s.props.children)]})]})},t(s)))})]})},a=Object.assign(p,{Tab:Object.assign(()=>e.jsx(e.Fragment,{}),{Title:(()=>e.jsx(e.Fragment,{})),Content:(()=>e.jsx(e.Fragment,{}))})});p.__docgenInfo={description:"",methods:[],displayName:"ResponsiveTabsFC",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cardStyle:{required:!1,tsType:{name:"Style"},description:""}}};const R={title:"Molecules/ResponsiveTabs",component:a,parameters:{layout:"centered"},tags:["autodocs"]},c=a;c.Tab.displayName="ResponsiveTabs.Tab";c.Tab.Title.displayName="ResponsiveTabs.Tab.Title";c.Tab.Content.displayName="ResponsiveTabs.Tab.Content";const i={args:{cardStyle:{background:"white",fontSize:"small"},children:[e.jsxs(a.Tab,{id:"1",children:[e.jsxs(a.Tab.Title,{children:["test title 1",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Mauro Rossi 1"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Mauro Rossi 2"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Mauro Rossi 3"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Mauro Rossi 4"})]}),e.jsxs(a.Tab.Content,{children:[e.jsx("strong",{children:"VPO-SI 1"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Caval, Ivo Steiner 1"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Mauro Rossi 1"})]})]}),e.jsxs(a.Tab,{id:"2",children:[e.jsx(a.Tab.Title,{children:"test title 2"}),e.jsxs(a.Tab.Content,{children:[e.jsx("strong",{children:"VPO-SI 2"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Caval, Ivo Steiner 2"}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Mauro Rossi 2"})]})]})]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cardStyle: {
      background: 'white',
      fontSize: 'small'
    },
    children: [<ResponsiveTabs.Tab id={"1"}>
        <ResponsiveTabs.Tab.Title>
          test title 1
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
          <br />
          <small className="text-muted">Mauro Rossi 2</small>
          <br />
          <small className="text-muted">Mauro Rossi 3</small>
          <br />
          <small className="text-muted">Mauro Rossi 4</small>
        </ResponsiveTabs.Tab.Title>
        <ResponsiveTabs.Tab.Content>
          <strong>VPO-SI 1</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 1</small>
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
        </ResponsiveTabs.Tab.Content>
      </ResponsiveTabs.Tab>, <ResponsiveTabs.Tab id={"2"}>
        <ResponsiveTabs.Tab.Title>
          test title 2
        </ResponsiveTabs.Tab.Title>
        <ResponsiveTabs.Tab.Content>
          <strong>VPO-SI 2</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 2</small>
          <br />
          <small className="text-muted">Mauro Rossi 2</small>
        </ResponsiveTabs.Tab.Content>
      </ResponsiveTabs.Tab>]
  }
}`,...i.parameters?.docs?.source}}};const N=["Default"];export{i as Default,N as __namedExportsOrder,R as default};
