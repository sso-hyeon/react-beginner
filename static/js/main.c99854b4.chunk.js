(this["webpackJsonpreact-beginner"]=this["webpackJsonpreact-beginner"]||[]).push([[0],{34:function(e,n,t){"use strict";t.r(n);t(0);var o,r=t(13),c=t.n(r),i=t(7),a=t(14),l=t(19),s=t(1),b=t(3),d=localStorage.getItem("toDoList"),u=JSON.parse(d);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(o||(o={}));var j=Object(i.b)({key:"category",default:o.TO_DO}),O=Object(i.b)({key:"toDo",default:u||[]}),f=Object(i.c)({key:"toDoSelector",get:function(e){var n=e.get,t=n(O);localStorage.setItem("toDoList",JSON.stringify(t));var o=n(j);return t.filter((function(e){return e.category===o}))}}),h=t(5),g=t(20),m=t(4);var p=function(){var e=Object(i.f)(O),n=Object(i.e)(j),t=Object(g.a)(),o=t.register,r=t.handleSubmit,c=t.setValue;return Object(m.jsxs)("form",{onSubmit:r((function(t){var o=t.toDo;e((function(e){return[{text:o,id:Date.now(),category:n}].concat(Object(h.a)(e))})),c("toDo","")})),children:[Object(m.jsx)("input",Object(s.a)(Object(s.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(m.jsx)("button",{children:"Add"})]})};var x=function(e){var n=e.text,t=e.category,r=e.id,c=Object(i.f)(O),a=function(e){var t=e.currentTarget.name;c((function(e){var o=e.findIndex((function(e){return e.id===r})),c={text:n,id:r,category:t};return[].concat(Object(h.a)(e.slice(0,o)),[c],Object(h.a)(e.slice(o+1)))}))};return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:n}),t!==o.DOING&&Object(m.jsx)("button",{name:o.DOING,onClick:a,children:"Doing"}),t!==o.TO_DO&&Object(m.jsx)("button",{name:o.TO_DO,onClick:a,children:"To Do"}),t!==o.DONE&&Object(m.jsx)("button",{name:o.DONE,onClick:a,children:"Done"}),Object(m.jsx)("button",{onClick:function(){c((function(e){var n=e.findIndex((function(e){return e.id===r}));return[].concat(Object(h.a)(e.slice(0,n)),Object(h.a)(e.slice(n+1)))}))},children:"\u274c"})]})};var D,v=function(){var e=Object(i.e)(f),n=Object(i.d)(j),t=Object(b.a)(n,2),r=t[0],c=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"To Dos"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("select",{value:r,onInput:function(e){c(e.currentTarget.value)},children:[Object(m.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(m.jsx)("option",{value:o.DOING,children:"Doing"}),Object(m.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(m.jsx)(p,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(m.jsx)(x,Object(s.a)({},e),e.id)}))]})},y=Object(a.b)(D||(D=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-weight: 300;\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color:",";\n    color:",";\n    line-height: 1.2;\n  }\n  a {\n    text-decoration:none;\n    color:inherit;}"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var k=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(v,{})]})};c.a.render(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(a.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(m.jsx)(k,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c99854b4.chunk.js.map