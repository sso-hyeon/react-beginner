(this["webpackJsonpreact-beginner"]=this["webpackJsonpreact-beginner"]||[]).push([[0],{41:function(n,e,t){"use strict";t.r(e);t(0);var o,i=t(17),r=t.n(i),c=t(9),a=t(8),l=t(11),s=t(21),d=t(1),b=t(4),u=localStorage.getItem("toDoList"),j=JSON.parse(u);!function(n){n.TO_DO="TO_DO",n.DOING="DOING",n.DONE="DONE"}(o||(o={}));var h,f=Object(c.b)({key:"category",default:o.TO_DO}),O=Object(c.b)({key:"toDo",default:j||[]}),p=Object(c.c)({key:"toDoSelector",get:function(n){var e=n.get,t=e(O);localStorage.setItem("toDoList",JSON.stringify(t));var o=e(f);return t.filter((function(n){return n.category===o}))}}),x=t(5),g=t(27),m=t(3),v=a.c.button(h||(h=Object(l.a)(["\n    background-color: transparent;\n    font-size: 30px;\n    width: 40px;\n    color: white;\n    border: 1px solid white;\n    &:hover {\n        color: #55d8c1;\n        border: 1px solid #55d8c1;\n    }\n"])));var y,D,w=function(){var n=Object(c.f)(O),e=Object(c.e)(f),t=Object(g.a)(),o=t.register,i=t.handleSubmit,r=t.setValue;return Object(m.jsxs)("form",{onSubmit:i((function(t){var o=t.toDo;n((function(n){return[{text:o,id:Date.now(),category:e}].concat(Object(x.a)(n))})),r("toDo","")})),children:[Object(m.jsx)("input",Object(d.a)(Object(d.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(m.jsx)(v,{children:"+"})]})},k=a.c.li(y||(y=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    line-height: 50px;\n    span {\n        text-indent: 20px;\n    }\n"]))),T=a.c.div(D||(D=Object(l.a)(['\n    display: inline-block;\n    button {\n        font-size: 18px;\n        font-family: "Mali", cursive, sans-serif;\n        margin: 0;\n        padding: 0 5px;\n        border: none;\n        outline: none;\n        line-height: 50px;\n        margin-left: 5px;\n        vertical-align: middle;\n        background-color: transparent;\n        color: white;\n        cursor: pointer;\n        transition: transform 0.1s linear;\n    }\n    button:hover {\n        color: #55d8c1;\n        transform: scale(1.1);\n    }\n'])));var I,N,C,q,S=function(n){var e=n.text,t=n.category,i=n.id,r=Object(c.f)(O),a=function(n){var t=n.currentTarget.name;r((function(n){var o=n.findIndex((function(n){return n.id===i})),r={text:e,id:i,category:t};return[].concat(Object(x.a)(n.slice(0,o)),[r],Object(x.a)(n.slice(o+1)))}))};return Object(m.jsxs)(k,{children:[Object(m.jsx)("span",{children:e}),Object(m.jsxs)(T,{children:[t!==o.DOING&&Object(m.jsx)("button",{name:o.DOING,onClick:a,children:"Doing\ud83c\udf1e"}),t!==o.TO_DO&&Object(m.jsx)("button",{name:o.TO_DO,onClick:a,children:"To Do\ud83d\udcdd"}),t!==o.DONE&&Object(m.jsx)("button",{name:o.DONE,onClick:a,children:"Done\ud83c\udf08"}),Object(m.jsx)("button",{onClick:function(){r((function(n){var e=n.findIndex((function(n){return n.id===i}));return[].concat(Object(x.a)(n.slice(0,e)),Object(x.a)(n.slice(e+1)))}))},children:"\u274c"})]})]})},z=a.c.div(I||(I=Object(l.a)(["\n    width: 700px;\n    margin: 0 auto;\n"]))),M=a.c.h1(N||(N=Object(l.a)(["\n    text-align: center;\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 20vh;\n    border-bottom: 1px solid white;\n"]))),E=a.c.div(C||(C=Object(l.a)(['\n    display: flex;\n    justify-content: center;\n    margin: 40px 0;\n    input,\n    select,\n    button {\n        outline: none;\n        margin: 0 10px;\n        box-sizing: border-box;\n        vertical-align: middle;\n        line-height: 40px;\n        padding: 0;\n    }\n    input {\n        text-indent: 10px;\n        font-size: 20px;\n        width: 400px;\n        font-family: "Mali", cursive;\n    }\n    select {\n        text-indent: 10px;\n        font-size: 20px;\n        width: 120px;\n        font-family: "Mali", cursive;\n    }\n']))),L=a.c.ul(q||(q=Object(l.a)(["\n    text-align: center;\n    li {\n        border-bottom: 1px solid #eee;\n    }\n    li:last-child {\n        border-bottom: 0;\n    }\n"])));var _,G=function(){var n=Object(c.e)(p),e=Object(c.d)(f),t=Object(b.a)(e,2),i=t[0],r=t[1];return Object(m.jsxs)(z,{children:[Object(m.jsx)(M,{children:"To Do List"}),Object(m.jsxs)(E,{children:[Object(m.jsxs)("select",{value:i,onInput:function(n){r(n.currentTarget.value)},children:[Object(m.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(m.jsx)("option",{value:o.DOING,children:"Doing"}),Object(m.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(m.jsx)(w,{})]}),Object(m.jsx)(L,{children:null===n||void 0===n?void 0:n.map((function(n){return Object(m.jsx)(S,Object(d.a)({},n),n.id)}))})]})},J=Object(a.b)(_||(_=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-weight: 300;\n    font-family: 'Mali', cursive ,sans-serif;\n    background-color:",";\n    color:",";\n    line-height: 1.2;\n  }\n  body::-webkit-scrollbar {\n    width:5px;\n    background-color:#eee\n  }\n  body::-webkit-scrollbar-thumb {\n    background-color: #55D8C1;\n  }\n  a {\n    text-decoration:none;\n    color:inherit;}"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var F=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(s.a,{children:[Object(m.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Mali:wght@300;400;500;600&display=swap",rel:"stylesheet"}),Object(m.jsx)("title",{children:"TO DO LIST"})]}),Object(m.jsx)(J,{}),Object(m.jsx)(G,{})]})};r.a.render(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(c.a,{children:Object(m.jsx)(a.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(m.jsx)(F,{})})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8b5f287d.chunk.js.map