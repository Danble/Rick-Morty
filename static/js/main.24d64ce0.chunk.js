(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{37:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(14),s=c.n(a),i=c(22),o=(c(37),c(9)),l=c(17),d=c.n(l),j="CHARACTERS_REQUEST",u="CHARACTERS_DEFAULT",h="CHARACTERS_SUCCESS",b="CHARACTERS_ERROR",p=function(e){return{type:b,payload:e}},m=function(e,t){return function(c){e?(c({type:j}),d.a.get("https://rickandmortyapi.com/api/character/?name=".concat(e)).then((function(e){var n;c((n=e.data.results,{type:h,payload:n})),t.push("/Rick-Morty/characters")})).catch((function(e){e.response?404===e.response.status&&c(p("No hay personajes con ese nombre")):c(p("Problema de conexi\xf3n"))}))):c({type:u})}},O=c(3),x=c(1);function g(){var e=Object(o.c)((function(e){return e.search})),t=Object(O.f)(),c=Object(o.b)(),r=Object(n.useState)(null),a=Object(i.a)(r,2),s=a[0],l=a[1],d=Object(n.useState)(window.innerWidth),j=Object(i.a)(d,2),u=j[0],h=j[1];return Object(n.useEffect)((function(){function e(){h(window.innerWidth)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(x.jsxs)("main",{children:[!e.error&&!e.loading&&Object(x.jsxs)("form",{className:"d-flex search-bar",children:[Object(x.jsx)("input",{className:"form-control me-2 round",type:"search",onChange:function(e){return l(e.target.value)},placeholder:"Rick Sanchez","aria-label":"Search"}),Object(x.jsx)("button",{onClick:function(e){return function(e,t,c,n){e.preventDefault(),t(m(c,n))}(e,c,s,t)},className:"btn btn-outline-success search-btn",type:"submit",children:u>425?"Buscar personajes":"Buscar"})]}),e.loading&&Object(x.jsx)("div",{className:"sprite",children:Object(x.jsx)("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/97424/sprite-spinner.png",alt:"loading"})}),!e.loading&&e.error&&Object(x.jsxs)("div",{className:"error",children:[Object(x.jsx)("p",{children:Object(x.jsx)("b",{children:e.error})}),Object(x.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){c(m(null,t))},children:"Regresar"})]})]})}var f="CHARACTER_REQUEST",v="CHARACTER_SUCCESS",y="CHARACTER_ERROR",R=function(e,t){return function(c){c({type:f}),d.a.get("https://rickandmortyapi.com/api/character/".concat(e)).then((function(n){var r;c((r=n.data,{type:v,payload:r})),t.push("/Rick-Morty/".concat(e))})).catch((function(e){console.log(e),c({type:y,payload:"Ha habido un error inesperado"})}))}};function C(){var e=Object(o.c)((function(e){return e.search})),t=Object(o.b)(),c=Object(O.f)(),n=e.characters.map((function(n){return Object(x.jsx)("div",{onClick:function(){return t(R(n.id,c))},className:"card char-card mb-3 col-sm-12 col-lg-6 col-xl-4",style:{maxWidth:"540px"},children:Object(x.jsxs)("div",{className:"row g-0",children:[Object(x.jsx)("div",{className:"col-md-4",children:Object(x.jsx)("img",{src:n.image,className:"img-fluid rounded-start",alt:n.name})}),Object(x.jsx)("div",{className:"col-md-8",children:e.loading?"Loading...":Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:n.name}),Object(x.jsxs)("p",{className:"card-text",children:["Species: ",Object(x.jsx)("small",{className:"text-muted",children:n.species})]}),Object(x.jsxs)("p",{className:"card-text",children:["Status: ",Object(x.jsx)("small",{className:"text-muted",children:n.status})]}),Object(x.jsxs)("p",{className:"card-text",children:["Gender: ",Object(x.jsx)("small",{className:"text-muted",children:n.gender})]})]})})]})},n.id)}));return Object(x.jsx)("div",{className:"container characters row",children:n})}function N(e){var t=e.image,c=e.title;return Object(x.jsxs)("div",{className:"photo",children:[Object(x.jsx)("img",{src:t,alt:c}),Object(x.jsx)("p",{children:Object(x.jsx)("b",{children:c})})]})}function S(e){var t=e.species,c=e.status,n=e.type,r=e.gender;return Object(x.jsxs)("div",{className:"main-data",children:[Object(x.jsxs)("p",{children:["Species: ",t]}),Object(x.jsxs)("p",{children:["Status: ",c]}),Object(x.jsxs)("p",{children:["Type: ",n]}),Object(x.jsxs)("p",{children:["Gender: ",r]})]})}function E(){var e=Object(o.c)((function(e){return e.getChar})).character;return Object(x.jsxs)("div",{className:"canvas row",children:[Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)(N,{image:e.image,title:e.name}),Object(x.jsx)(S,{species:e.species,status:e.status,type:e.type,gender:e.gender})]}),Object(x.jsxs)("div",{className:"bonus",children:[Object(x.jsxs)("p",{children:["Origin: ",Object(x.jsx)("b",{children:e.origin.name})]}),Object(x.jsxs)("p",{children:["Location: ",Object(x.jsx)("b",{children:e.location.name})]}),Object(x.jsxs)("p",{children:["Episodes appearances: ",e.episode.length]})]})]})}var w=c(16);var k=function(){return Object(x.jsx)(w.a,{children:Object(x.jsxs)(O.c,{children:[Object(x.jsx)(O.a,{exact:!0,path:"/Rick-Morty/",component:g}),Object(x.jsx)(O.a,{exact:!0,path:"/Rick-Morty/characters",component:C}),Object(x.jsx)(O.a,{exact:!0,path:"/Rick-Morty/:character",component:E})]})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))},T=(c(62),c(11)),H=c(12),L={loading:!1,characters:[],error:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(H.a)(Object(H.a)({},e),{},{loading:!0});case u:return{loading:!1,characters:[],error:null};case h:return{loading:!1,characters:t.payload,error:null};case b:return{loading:!1,characters:[],error:t.payload};default:return e}},_={loading:!1,character:{},error:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(H.a)(Object(H.a)({},e),{},{loading:!0});case y:return{loading:!1,character:{},error:t.payload};case v:return{loading:!1,character:t.payload,error:null};default:return e}},U=Object(T.combineReducers)({search:M,getChar:F}),z=c(31),B=c(32),D=Object(T.createStore)(U,Object(z.composeWithDevTools)(Object(T.applyMiddleware)(B.a)));s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(o.a,{store:D,children:Object(x.jsx)(k,{})})}),document.getElementById("root")),A()}},[[63,1,2]]]);
//# sourceMappingURL=main.24d64ce0.chunk.js.map