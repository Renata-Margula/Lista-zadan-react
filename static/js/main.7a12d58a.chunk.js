(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o,r,i,c,a,d,s,l,u,b,j,p,g,x,f,h,O=t(0),m=t.n(O),k=t(12),v=t.n(k),w=(t(21),t(16)),y=t(6),z=t(5),D=t(2),C=t(3),S=C.b.form(o||(o=Object(D.a)(["\n    display: grid;\n    grid-gap: 20px;\n    grid-template-columns: 1fr auto;\n    padding: 5px 15px;\n\n@media(max-width:767px) {\n    grid-template-columns: 1fr;\n}\n"]))),T=C.b.input(r||(r=Object(D.a)(["\n    border: 1px solid #eee;\n    height: 35px;\n    padding: 15px;\n    font-size: 15px;\n    margin-top: 5px;\n"]))),F=C.b.button(i||(i=Object(D.a)(["\n    background-color: teal;\n    color: white;\n    border-style: none;\n    font-weight: lighter;\n    height: 35px;\n    text-align: center;\n    font-size: 15px;\n    margin-top: 5px;\n    cursor: pointer;\n    transition: 1.5s;\n        &:hover {\n            transform: scale(1.2);\n            background-color: hsl(180, 100%, 30%);\n    }\n"]))),H=t(1),I=function(n){var e=n.addNewTask,t=Object(O.useState)(""),o=Object(z.a)(t,2),r=o[0],i=o[1],c=Object(O.useRef)(null);return Object(H.jsxs)(S,{onSubmit:function(n){n.preventDefault(),e(r.trim()),i("")},children:[Object(H.jsx)(T,{ref:c,value:r,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return i(e.value)}}),Object(H.jsx)(F,{onClick:function(){c.current.focus()},disabled:""===r.trim(),children:"Dodaj zadanie"})]})},J=C.b.ul(c||(c=Object(D.a)(["\n    list-style-type: none;\n    padding: 10px;\n    min-height: 15px;\n"]))),L=C.b.li(a||(a=Object(D.a)(["\n    word-break: break-all;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    padding: 10px;\n    grid-gap: 20px;\n    border-bottom: 1px solid #eee;\n    align-items: center;\n\n    ","\n"])),(function(n){return n.hidden&&Object(C.a)(d||(d=Object(D.a)(["\n        display: none;\n    "])))})),N=C.b.span(s||(s=Object(D.a)(["\n    ","\n"])),(function(n){return n.done&&Object(C.a)(l||(l=Object(D.a)(["\n        text-decoration: line-through;\n    "])))})),P=C.b.button(u||(u=Object(D.a)(["\n    grid-column: 1;\n    background-color: green;\n    border: none;\n    color: white;\n    width: 33px;\n    height: 33px;\n    align-content: center;\n    align-items: center;\n    justify-content: center;\n    transition: background 1s;\n    cursor: pointer;\n        &:hover {\n            background-color: hsl(120, 100%, 30%);\n        }\n\n    ","\n"])),(function(n){return n.remove&&Object(C.a)(b||(b=Object(D.a)(["\n        background-color: red;\n        color: white;\n        grid-column: 3;\n            &:hover {\n                background-color: hsl(0, 100%, 70%);\n        }\n    "])))})),A=function(n){var e=n.tasks,t=n.hideDone,o=n.removeTask,r=n.toggleTaskDone;return Object(H.jsx)(J,{children:e.map((function(n){return Object(H.jsxs)(L,{hidden:n.done&&t,children:[Object(H.jsx)(P,{onClick:function(){return r(n.id)},children:n.done?"\u2713":""}),Object(H.jsxs)(N,{done:n.done,children:[n.id," - ",n.content]}),Object(H.jsx)(P,{remove:!0,onClick:function(){return o(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},B=C.b.span(j||(j=Object(D.a)(["\n    display: flex;\n    float: right;\n    padding: 5px;\n    font-size: smaller;\n         \n@media (max-width: 767px) {\n        display: grid;\n        float: none;\n        flex-wrap: wrap;\n        margin-top: 5px;\n    }\n"]))),E=C.b.button(p||(p=Object(D.a)(["\n    cursor: pointer;\n    border: none;\n    background: none;\n    color: teal;\n    transition: 1s;\n        &:hover {\n            color: hsl(180, 100%, 35%);\n        }\n        &:disabled {\n            color: gray;\n            cursor: not-allowed;\n        }\n"]))),M=function(n){var e=n.tasks,t=n.hideDone,o=n.toggleHideDone,r=n.setAllDone;return e.length>0&&Object(H.jsxs)(B,{children:[Object(H.jsx)(E,{onClick:o,children:t?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"}),Object(H.jsx)(E,{onClick:r,disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})},U=C.b.section(g||(g=Object(D.a)(["\n    padding: 10px 0px 15px 0px;\n    margin: 10px 0;\n    margin-bottom: 15px;\n    background-color: white;\n"]))),R=C.b.header(x||(x=Object(D.a)(["\n    font-size: 20px;\n    font-weight: 700;\n    margin: 10px 0;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 15px;\n    padding-left: 10px;\n"]))),q=function(n){var e=n.title,t=n.body,o=n.extraHeaderContent;return Object(H.jsxs)(U,{children:[Object(H.jsxs)(R,{children:[e,o]}),Object(H.jsx)("div",{children:t})]})},G=C.b.header(f||(f=Object(D.a)(["\n    font-weight: 700;\n    font-size: 30px;\n    padding-left: 10px;\n"]))),K=function(n){var e=n.title;return Object(H.jsx)(G,{children:e})},Q=C.b.main(h||(h=Object(D.a)(["\n    font-family: 'Montserrat', sans-serif;\n    margin: 0 auto;\n    max-width: 800px;\n    background-color: #eee;\n"]))),V=function(n){return Object(H.jsx)(Q,{children:n.children})};var W=function(){var n=Object(O.useState)(!1),e=Object(z.a)(n,2),t=e[0],o=e[1],r=Object(O.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),i=Object(z.a)(r,2),c=i[0],a=i[1];return Object(O.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(c))}),[c]),Object(H.jsxs)(V,{children:[Object(H.jsx)(K,{title:"Lista zada\u0144"}),Object(H.jsx)(q,{title:"Dodaj nowe zadanie",body:Object(H.jsx)(I,{addNewTask:function(n){a((function(e){return[].concat(Object(w.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(H.jsx)(q,{title:"Lista zada\u0144",body:Object(H.jsx)(A,{tasks:c,hideDone:t,removeTask:function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){a((function(e){return e.map((function(e){return e.id===n?Object(y.a)(Object(y.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(H.jsx)(M,{tasks:c,hideDone:t,toggleHideDone:function(){o((function(n){return!n}))},setAllDone:function(){a((function(n){return n.map((function(n){return Object(y.a)(Object(y.a)({},n),{},{done:!0})}))}))}})})]})},X=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};v.a.render(Object(H.jsx)(m.a.StrictMode,{children:Object(H.jsx)(W,{})}),document.getElementById("root")),X()}},[[25,1,2]]]);
//# sourceMappingURL=main.7a12d58a.chunk.js.map