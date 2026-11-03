import{c as t,u as p,j as e,B as m,P as u,A as k,a as x,b as j,I as y,C as g,r as b}from"./index-zIORyU6w.js";import{b as f,L as v}from"./react-CpatxueG.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],M=t("heart-handshake",N);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],_=t("landmark",C);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],h=t("leaf",R);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],$=t("user-round",A);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],L=t("users",E);function d({legend:c,options:o,value:a,onChange:l,name:i}){return e.jsxs("fieldset",{className:"choice-field",children:[e.jsx("legend",{children:c}),e.jsx("div",{className:"choice-options",children:o.map(({id:n,label:s,icon:r})=>e.jsxs("label",{className:`choice-option ${a===n?"selected":""}`,children:[e.jsx("input",{type:"radio",name:i,value:n,checked:a===n,onChange:()=>l(n)}),r&&e.jsx(r,{size:23}),e.jsx("span",{children:s}),a===n&&e.jsx(g,{className:"choice-check",size:14})]},n))})]})}function P(){const{state:c,dispatch:o,t:a}=p(),l=f(),i=(s,r)=>o({type:"PREFERENCE",key:s,value:r});function n(s){s.preventDefault(),o({type:"PREPARE"}),l(`/rutas/${b(c).id}`)}return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("div",{className:"onboarding-layout",children:[e.jsxs("div",{className:"onboarding-content",children:[e.jsx(u,{title:a("prepareTitle"),description:a("prepareDesc")}),e.jsxs("form",{onSubmit:n,className:"prepare-form",children:[e.jsx(d,{legend:a("withWhom"),name:"company",value:c.company,onChange:s=>i("company",s),options:[{id:"family",label:a("family"),icon:L},{id:"friends",label:a("friends"),icon:M},{id:"solo",label:a("solo"),icon:$}]}),e.jsx(d,{legend:a("howLong"),name:"time",value:c.time,onChange:s=>i("time",s),options:["30","60","120"].map(s=>({id:s,label:`${s} ${a("min")}`}))}),e.jsx(d,{legend:a("interests"),name:"interest",value:c.interest,onChange:s=>i("interest",s),options:[{id:"science",label:a("science"),icon:k},{id:"architecture",label:a("architecture"),icon:_},{id:"nature",label:a("nature"),icon:h}]}),e.jsxs(x,{size:"lg",type:"submit",children:[a("findRoute"),e.jsx(j,{"data-icon":"inline-end"})]}),e.jsx(v,{className:"text-link skip-link",to:"/descubrir",children:a("skip")})]})]}),e.jsxs("div",{className:"onboarding-photo",children:[e.jsx(y,{src:"/images/umbracle.jpg",alt:"Umbracle"}),e.jsxs("div",{children:[e.jsx(h,{size:28}),e.jsx("p",{children:a("noAccount")})]})]})]})]})}export{d as ChoiceField,P as default};
