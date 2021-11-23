(this["webpackJsonpoti-trivia-client"]=this["webpackJsonpoti-trivia-client"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},127:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(36),i=n.n(s),l=(n(101),n(38)),r=n(15),o=n(10),d=(n(102),"http://184.72.145.192:3000/"),j="ws://184.72.145.192:3000/",b=n(1);var u=function(e){var t=Object(r.g)().gameId,n=Object(a.useState)({banned:!1,canPush:!0}),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(a.useState)(null),d=Object(o.a)(l,2),u=d[0],O=d[1];return Object(a.useEffect)((function(){var e=new WebSocket(j+"websocket?gameId="+t+"&player="+localStorage.getItem(t+"player"));e.onopen=function(){},e.onmessage=function(e){var n=JSON.parse(e.data),a=!1;if(n&&n.body){var c=!1;if(n.body.banned.length)n.body.banned.find((function(e){return e===localStorage.getItem(t+"player")}))&&(c=!0);if(n.body.answerOrder.length)n.body.answerOrder.find((function(e){return e===localStorage.getItem(t+"player")}))&&(a=!0);i({banned:c,canPush:!a})}},e.onclose=function(){console.log("disconnected")},O(e)}),[t]),Object(b.jsx)("div",{className:"player-pannel",children:Object(b.jsx)("div",{className:"center-button",children:Object(b.jsx)("button",{title:"PUSH",className:"button",disabled:!s.canPush||s.banned,onClick:function(){!function(){try{u.send(JSON.stringify({type:"push"}))}catch(e){console.log(e)}}()},children:"PUSH"})})})},O=n(22),h=n.n(O),v=n(169),m=n(167),x=n(168),g=n(165),f=n(173);n(127);var p=function(e){var t,n=Object(r.g)().gameId,c=Object(a.useState)({}),s=Object(o.a)(c,2),i=s[0],l=s[1],j=Object(a.useState)(1),u=Object(o.a)(j,2),O=u[0],p=u[1],N=Object(a.useState)(1),y=Object(o.a)(N,2),C=y[0],w=y[1];return Object(a.useEffect)((function(){h.a.get(d+"game/"+n).then((function(e){l(e.data)}))}),[n]),Object(b.jsx)(b.Fragment,{children:1===O?Object(b.jsxs)("div",{className:"host-pannel",children:[Object(b.jsxs)(x.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(b.jsx)(v.a,{id:"demo-simple-select-standard-label",children:"Category"}),Object(b.jsx)(g.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:C,onChange:function(e){w(e.target.value)},label:"Categoria",children:null===i||void 0===i||null===(t=i.categories)||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(m.a,{value:e,children:e},e)}))})]}),Object(b.jsx)("div",{className:"center-button",children:Object(b.jsx)(f.a,{title:"Word Pass",onClick:function(){h.a.put(d+"game/"+n+"/answer",{category:C}).then((function(e){})),p(2)},children:"Go"})})]}):Object(b.jsxs)("div",{className:"host-pannel",children:[Object(b.jsxs)("div",{className:"buttons-row",children:[Object(b.jsx)(f.a,{variant:"contained",onClick:function(){h.a.put(d+"game/"+n+"/start",{}).then((function(e){}))},children:"Start"}),Object(b.jsx)(f.a,{variant:"contained",onClick:function(){h.a.put(d+"game/"+n+"/reset",{}).then((function(e){}))},children:"Reset"})]}),Object(b.jsxs)("div",{className:"buttons-row",children:[Object(b.jsx)(f.a,{variant:"contained",onClick:function(){h.a.put(d+"game/"+n+"/correct",{}).then((function(e){})),p(1)},children:"C"}),Object(b.jsx)(f.a,{variant:"contained",onClick:function(){h.a.put(d+"game/"+n+"/wrong",{}).then((function(e){}))},children:"W"})]}),Object(b.jsx)("div",{className:"buttons-row",children:Object(b.jsx)(f.a,{variant:"contained",onClick:function(){h.a.put(d+"game/"+n+"/skip",{}).then((function(e){})),p(1)},children:"Skip"})})]})})},N=(n(129),n(170));var y=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(r.g)().gameId,l=Object(r.f)();return Object(b.jsxs)("div",{className:"join-pannel",children:[Object(b.jsx)(N.a,{id:"player-name",label:"Name",type:"text",variant:"standard",value:c,onChange:function(e){s(e.target.value)}}),Object(b.jsx)("div",{className:"center-button",children:Object(b.jsx)(f.a,{title:"Join",onClick:function(){h.a.post(d+"join/"+i,{player:c}).then((function(e){localStorage.setItem("".concat(i,"player"),c),l.push("/player/".concat(i))}))},children:"Join"})})]})},C=n(33);n(130);var w=function(e){var t=Object(a.useState)({name:"",totalCategories:1,totalQuestions:1,categories:["example"]}),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(r.f)();return Object(b.jsxs)("div",{className:"admin-pannel",children:[Object(b.jsx)(N.a,{id:"player-name",className:"form-element",label:"Name",type:"text",variant:"standard",value:c.name,onChange:function(e){s(Object(C.a)(Object(C.a)({},c),{},{name:e.target.value}))}}),Object(b.jsxs)(x.a,{children:[Object(b.jsx)(v.a,{id:"demo-simple-select-label",children:"# Categories"}),Object(b.jsxs)(g.a,{labelId:"select-categories-label",id:"select-categories",className:"form-element",value:c.totalCategories,label:"Categories",onChange:function(e){for(var t=[],n=0;n<e.target.value;n++)t.push("");s(Object(C.a)(Object(C.a)({},c),{},{totalCategories:e.target.value,categories:t}))},children:[Object(b.jsx)(m.a,{value:1,children:"1"}),Object(b.jsx)(m.a,{value:2,children:"2"}),Object(b.jsx)(m.a,{value:3,children:"3"}),Object(b.jsx)(m.a,{value:4,children:"4"}),Object(b.jsx)(m.a,{value:5,children:"5"}),Object(b.jsx)(m.a,{value:6,children:"6"}),Object(b.jsx)(m.a,{value:7,children:"7"}),Object(b.jsx)(m.a,{value:8,children:"8"}),Object(b.jsx)(m.a,{value:9,children:"9"})]})]}),Object(b.jsxs)(x.a,{children:[Object(b.jsx)(v.a,{id:"demo-simple-select-label",children:"# Questions"}),Object(b.jsxs)(g.a,{labelId:"select-questions-label",id:"select-questions",className:"form-element",value:c.totalQuestions,label:"Questions",onChange:function(e){s(Object(C.a)(Object(C.a)({},c),{},{totalQuestions:e.target.value}))},children:[Object(b.jsx)(m.a,{value:1,children:"1"}),Object(b.jsx)(m.a,{value:2,children:"2"}),Object(b.jsx)(m.a,{value:3,children:"3"}),Object(b.jsx)(m.a,{value:4,children:"4"}),Object(b.jsx)(m.a,{value:5,children:"5"}),Object(b.jsx)(m.a,{value:6,children:"6"}),Object(b.jsx)(m.a,{value:7,children:"7"}),Object(b.jsx)(m.a,{value:8,children:"8"}),Object(b.jsx)(m.a,{value:9,children:"9"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Categories"}),function(){for(var e=[],t=function(t){e.push(Object(b.jsx)(N.a,{id:"category-"+(t+1),className:"form-element",label:"Category "+(t+1),type:"text",variant:"standard",value:c.categories[t],onChange:function(e){return function(e,t){var n=c.categories;n[e]=t.target.value,s(Object(C.a)(Object(C.a)({},c),{},{categories:n}))}(t,e)}},"category-"+(t+1)))},n=0;n<c.totalCategories;n++)t(n);return e}()]}),Object(b.jsx)("div",{className:"center-button",children:Object(b.jsx)(f.a,{title:"Create",onClick:function(){h.a.post(d+"game",c).then((function(e){i.push("game/".concat(e.data.id))}))},children:"Create"})})]})},S=(n(131),n.p+"static/media/otilogo.9c0bbbd7.png"),I=n.p+"static/media/trivial-bg.1e3b1823.jpg";var k=function(e){var t,n,c,s,i=Object(r.g)().gameId,l=Object(a.useState)({}),u=Object(o.a)(l,2),O=u[0],v=u[1];return Object(a.useEffect)((function(){var e=new WebSocket(j+"websocket?gameId="+i);e.onopen=function(){},e.onmessage=function(e){var t=JSON.parse(e.data);t.body&&v(t.body)},e.onclose=function(){},h.a.get(d+"game/"+i).then((function(e){v(e.data)}))}),[i]),Object(b.jsxs)("main",{className:"control-pannel",style:{backgroundImage:"url(".concat(I,")")},children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{alt:"Oti\xb4s Dev Week Trivia",src:S})}),Object(b.jsx)("div",{className:"main-box",children:Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsxs)("div",{className:"principal-info",children:[Object(b.jsx)("section",{className:"board",children:null===O||void 0===O||null===(t=O.pointsTable)||void 0===t?void 0:t.map((function(e,t){return Object(b.jsxs)("div",{className:"column",children:[Object(b.jsx)("div",{className:"category cat-"+t,children:e.category}),Object(b.jsx)("div",{className:"points-column",children:e.questions.map((function(t,n){var a,c;return Object(b.jsx)("div",{className:"points points-"+t.points+" "+(t.answered?"answered":"pending")+" "+(e.category===(null===O||void 0===O||null===(a=O.nextQuestion)||void 0===a?void 0:a.category)&&t.points===(null===O||void 0===O||null===(c=O.nextQuestion)||void 0===c?void 0:c.points)&&"focus"),children:t.points},n)}))})]},t)}))}),Object(b.jsxs)("section",{className:"score-table",children:[Object(b.jsx)("h2",{children:"Score "}),Object(b.jsx)("div",{className:"row",children:null===O||void 0===O||null===(n=O.scoreBoard)||void 0===n?void 0:n.map((function(e){return Object(b.jsxs)("div",{className:"score-box",children:[Object(b.jsx)("div",{className:"box-player",children:e.name}),Object(b.jsx)("div",{className:"box-points",children:e.points})]},e.name)}))})]})]}),Object(b.jsxs)("section",{className:"answers "+((null===O||void 0===O?void 0:O.canAnswer)&&"can"),children:[Object(b.jsxs)("article",{className:"answers-box",children:[Object(b.jsx)("h3",{children:"Answer order"}),null===O||void 0===O||null===(c=O.answerOrder)||void 0===c?void 0:c.map((function(e,t){return Object(b.jsx)("div",{className:"answer-item "+(e===O.answering&&"answering"),children:e},t)}))]}),Object(b.jsxs)("article",{className:"answers-box",children:[Object(b.jsx)("h3",{children:"Banned"}),null===O||void 0===O||null===(s=O.banned)||void 0===s?void 0:s.map((function(e,t){return Object(b.jsx)("div",{className:"answer-item",children:e},t)}))]})]})]})})]})};var P=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/game/:gameId",children:Object(b.jsx)(k,{})}),Object(b.jsx)(r.a,{path:"/join/:gameId",children:Object(b.jsx)(y,{})}),Object(b.jsx)(r.a,{path:"/secrethost/:gameId",children:Object(b.jsx)(p,{})}),Object(b.jsx)(r.a,{path:"/player/:gameId",children:Object(b.jsx)(u,{})}),Object(b.jsx)(r.a,{path:"/",children:Object(b.jsx)(w,{})})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,176)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),J()}},[[132,1,2]]]);
//# sourceMappingURL=main.d663757a.chunk.js.map