(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(5),r=(n(18),n(19),n(20),n(2)),a=n(1),j=n(0),i=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},o=n(4);function l(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(22);var b=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},d=n(6),h=n.n(d),x=function(e){var t=e.person;return Object(j.jsx)(s.b,{to:"../".concat(t.slug),className:h()({"has-text-danger":"f"===t.sex}),children:t.name})},O=function(e){var t=e.person,n=e.personMother,c=e.personFather,s=e.isSelected;return Object(j.jsxs)("tr",{"data-cy":"person",className:h()({"has-background-warning":s(t)}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(x,{person:t})}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:n?Object(j.jsx)(x,{person:n}):t.motherName||"-"}),Object(j.jsx)("td",{children:c?Object(j.jsx)(x,{person:c}):t.fatherName||"-"})]},t.name)},u=function(e){var t=e.people,n=e.selectedPerson,c=function(e){return e.slug===n},s=function(e){return t.find((function(t){return t.name===e}))};return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(O,{person:e,personMother:s(e.motherName),personFather:s(e.fatherName),isSelected:c},e.name)}))})]})},p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),d=i[0],h=i[1],x=Object(a.useState)(!1),O=Object(o.a)(x,2),p=O[0],m=O[1],f=Object(r.h)().slug,v=void 0===f?"":f;return Object(a.useEffect)((function(){h(!0),m(!1),l().then(c).catch((function(){return m(!0)})).finally((function(){return h(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[d&&Object(j.jsx)(b,{}),p&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!p&&!d&&!n.length&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!d&&n.length>0&&Object(j.jsx)(u,{people:n,selectedPerson:v})]})})]})},m=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},f=function(e){var t=e.to,n=e.text;return Object(j.jsx)(s.c,{className:function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:n})},v=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(f,{to:"/",text:"Home"}),Object(j.jsx)(f,{to:"people",text:"People"})]})})})},g=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(v,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(r.b,{path:"home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(m,{})}),Object(j.jsxs)(r.b,{path:"people",children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(p,{})}),Object(j.jsx)(r.b,{path:":slug",element:Object(j.jsx)(p,{})})]})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(s.a,{children:Object(j.jsx)(g,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.c07ab821.chunk.js.map