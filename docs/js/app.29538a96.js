(function(e){function t(t){for(var o,c,l=t[0],s=t[1],i=t[2],u=0,d=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f1050076","chunk-2d0c1642":"e8e87d3e"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"14edd9b5","chunk-2d0c1642":"31d6cfe0"}[e]+".css",r=s.p+o,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var i=a[l],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){i=d[l],u=i.getAttribute("data-href");if(u===o||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2788:function(e,t,n){},"3a9f":function(e,t,n){},4055:function(e,t,n){"use strict";n("3a9f")},"487d":function(e,t,n){},"4c0a":function(e,t,n){"use strict";n("db1e")},5463:function(e,t,n){},5984:function(e,t,n){},7624:function(e,t,n){"use strict";n("5984")},7772:function(e,t,n){"use strict";n("c2b5")},"7aeb":function(e,t,n){"use strict";n("487d")},"87b8":function(e,t,n){},c281:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var o=function(e,t){return~~(Math.random()*t)+e},c=function(e){return e.sort((function(){return Math.random()-.5}))},r=function(e){var t=document.getElementById(e),n=t.offsetTop-100;window.scrollTo({top:n,behavior:"smooth"})}},c2b5:function(e,t,n){},c4cb:function(e,t,n){e.exports=n.p+"img/iphone.b9c9b955.png"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={class:"flex text-gray-800 justify-center min-h-screen-inner h-full w-screen bg-gradient-to-t from-gray-100 to-gray-50"};function r(e,t){var n=Object(o["B"])("router-view");return Object(o["t"])(),Object(o["f"])("div",c,[Object(o["j"])(n,null,{default:Object(o["J"])((function(e){var t=e.Component;return[Object(o["j"])(o["c"],{duration:{enter:500,leave:800},name:"fade",mode:"out-in"},{default:Object(o["J"])((function(){return[(Object(o["t"])(),Object(o["f"])(Object(o["C"])(t)))]})),_:2},1024)]})),_:1})])}n("4c0a");var a=n("d959"),l=n.n(a);const s={},i=l()(s,[["render",r]]);var u=i,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("5502"),b=Object(f["a"])({state:{},mutations:{},actions:{},modules:{}}),m=function(){return document.documentElement.style.setProperty("--vh","".concat(.01*window.innerHeight,"px"))},j=(n("87b8"),n("5463"),n("2788"),n("def6"),n("d3b7"),n("6c02")),p={key:"Home",class:"flex flex-col min-h-screen h-full w-full justify-start"};function g(e,t,n,c,r,a){var l=Object(o["B"])("logo"),s=Object(o["B"])("banner"),i=Object(o["B"])("share-info"),u=Object(o["B"])("challenges"),d=Object(o["B"])("home-footer");return Object(o["t"])(),Object(o["f"])("div",p,[Object(o["j"])(l,{class:"hidden sm:block mt-10 px-10"}),Object(o["j"])(s),Object(o["j"])(i),Object(o["j"])(u),Object(o["j"])(d)])}var O=Object(o["K"])("data-v-0e9719fa");Object(o["w"])("data-v-0e9719fa");var v={class:"justify-between items-center"},h=Object(o["j"])("h1",{id:"brand","data-testid":"title",class:"flex text-xl w-full font-bold text-left italic"},[Object(o["j"])("div",{id:"logo-wrapper",class:"w-11 h-11 gradient-1 rounded-full"},[Object(o["j"])("svg",{id:"logo",class:"w-full h-full",width:"700pt",height:"700pt",version:"1.1",viewBox:"0 0 700 700",xmlns:"http://www.w3.org/2000/svg"},[Object(o["j"])("g",null,[Object(o["j"])("path",{fill:"rgba(255, 255, 255, 1)",d:"m200.04 404.26c0 10.309 8.3594 18.668 18.668 18.668h313.14c10.309 0 18.668-8.3594 18.668-18.668l-0.003906-329.59c0-10.309-8.3594-18.668-18.668-18.668h-310.8c-39.457 0-71.551 32.094-71.551 71.551v304.9c0 39.453 32.094 71.547 71.551 71.547h310.81c10.309 0 18.668-8.3594 18.668-18.668 0-10.309-8.3594-18.668-18.668-18.668l-310.81 0.003907c-18.867 0-34.215-15.348-34.215-34.215l-0.003907-304.9c0-18.867 15.352-34.219 34.219-34.219h292.14v292.26l-294.48 0.003906c-10.309 0-18.664 8.3555-18.664 18.664z"}),Object(o["j"])("path",{fill:"rgba(255, 255, 255, 1)",d:"m350 115.36c-10.309 0-18.668 8.3594-18.668 18.668v56.539h-49.137c-10.309 0-18.668 8.3594-18.668 18.668 0 10.309 8.3594 18.668 18.668 18.668l49.137-0.003906v120.31c0 10.309 8.3594 18.668 18.668 18.668s18.668-8.3594 18.668-18.668v-120.31h49.137c10.309 0 18.668-8.3594 18.668-18.668s-8.3594-18.668-18.668-18.668h-49.137v-56.535c0-10.309-8.3594-18.668-18.668-18.668z"})])])]),Object(o["i"])(" BIBLOS App ")],-1);Object(o["u"])();var x=O((function(e,t){return Object(o["t"])(),Object(o["f"])("header",v,[h])}));n("eb75");const w={},y=l()(w,[["render",x],["__scopeId","data-v-0e9719fa"]]);var k=y,B=n("c4cb"),_=n.n(B),C=Object(o["K"])("data-v-1cea211b");Object(o["w"])("data-v-1cea211b");var S={class:"banner gradient-3 flex justify-between flex-col flex-grow sm:mx-10 sm:mt-10 sm:bg-center"},E={class:"background-dotted-pattern w-full h-full flex items-center relative"},A={class:"px-10 lg:px-20 flex flex-col text-center lg:text-left items-center lg:items-start w-full"},T=Object(o["j"])("h1",{"data-testid":"title",class:"text-4xl lg:text-5xl w-full max-w-xl xl:max-w-2xl font-bold leading-11"}," Como conhecer melhor a Bíblia? ",-1),L=Object(o["j"])("p",{"data-testid":"description-title",class:"text-white w-full max-w-xl md:w-9/12 text-lg font-normal mt-7 m:leading-8"}," Memorize textos, referências e eventos bíblicos que irão abençoar profundamente a sua vida. ",-1),P=Object(o["i"])(" Aprenda mais sobre a Bíblia! "),N=Object(o["j"])("img",{class:"mockup absolute hidden lg:block",src:_.a,alt:"iphone mockup"},null,-1);Object(o["u"])();var M=C((function(e,t,n,c,r,a){var l=Object(o["B"])("logo"),s=Object(o["B"])("orange-button");return Object(o["t"])(),Object(o["f"])("section",S,[Object(o["j"])("div",E,[Object(o["j"])("div",A,[Object(o["j"])(l,{class:"block sm:hidden mb-10 px-10"}),T,L,Object(o["j"])(s,{class:"mt-10",onClick:t[1]||(t[1]=function(t){return e.goto("challenges")})},{default:C((function(){return[P]})),_:1})]),N])])})),q=n("c281"),J={class:"gradient-0 text-white text-md font-bold rounded-md px-5 py-2 flex-grow-0"};function H(e,t){return Object(o["t"])(),Object(o["f"])("button",J,[Object(o["A"])(e.$slots,"default")])}const I={},z=l()(I,[["render",H]]);var F=z,K=Object(o["k"])({components:{Logo:k,OrangeButton:F},methods:{goto:q["a"]}});n("7aeb");const V=l()(K,[["render",M],["__scopeId","data-v-1cea211b"]]);var D=V,W=Object(o["K"])("data-v-5a84c52f");Object(o["w"])("data-v-5a84c52f");var U={class:"flex md:flex-row flex-col items-center justify-center w-full mt-44 px-10"},$=Object(o["j"])("div",{class:"mockup-wrapper w-5/6 md:w-96 md:mr-10 mb-10"},[Object(o["j"])("img",{class:"mockup relative w-full rounded-md",src:"https://assets.startbootstrap.com/img/screenshots-product-pages/sb-ui-kit-pro/landing-portfolio.png",alt:"..."})],-1),G={class:"flex flex-col text-center md:text-left items-center md:items-start justify-center max-w-md lg:max-w-xl md:ml-10 mt-10 md:mt-0"},Q=Object(o["j"])("h2",{class:"gradient-text font-bold text-3xl w-auto"}," Compartilhe seus resultados ",-1),R=Object(o["j"])("p",{class:"text-gray-700 text-md mt-5"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus magni deserunt optio, doloremque obcaecati soluta omnis quaerat illo facilis, ut ullam quidem ipsum maiores eaque quam dicta laboriosam? Assumenda. ",-1),X=Object(o["i"])(" Aprenda mais sobre a Bíblia! ");Object(o["u"])();var Y=W((function(e,t,n,c,r,a){var l=Object(o["B"])("orange-button");return Object(o["t"])(),Object(o["f"])("section",U,[$,Object(o["j"])("article",G,[Q,R,Object(o["j"])(l,{class:"mt-8",onClick:t[1]||(t[1]=function(t){return e.goto("challenges")})},{default:W((function(){return[X]})),_:1})])])})),Z=Object(o["k"])({components:{OrangeButton:F},methods:{goto:q["a"]}});n("4055");const ee=l()(Z,[["render",Y],["__scopeId","data-v-5a84c52f"]]);var te=ee,ne={id:"challenges",class:"flex flex-col mt-40 items-center"},oe=Object(o["j"])("h2",{class:"gradient-text font-bold text-3xl w-auto"}," Desafios disponíveis ",-1),ce={class:"w-full flex flex-col items-center max-w-6xl mt-10 mb-52"},re=Object(o["j"])("div",{class:"gradient-1 w-full max-w-4xl h-44 shadow-none -mb-40 opacity-70"},[Object(o["j"])("div",{class:"background-dotted-pattern w-full h-full"})],-1),ae={class:"card-link flex flex-col items-center justify-between w-full h-60 bg-white rounded-md shadow-lg my-10 mx-5 md:mx-10 p-5 outline-none"},le={class:"\n                    font-extrabold text-xl text-gray-700 leading-5\n                  "},se={key:0,class:"w-full flex"},ie=Object(o["i"])(" Começar o desafio! ");function ue(e,t,n,c,r,a){var l=Object(o["B"])("orange-button"),s=Object(o["B"])("router-link"),i=Object(o["B"])("Slide"),u=Object(o["B"])("pagination"),d=Object(o["B"])("Carousel");return Object(o["t"])(),Object(o["f"])("section",ne,[oe,Object(o["j"])("section",ce,[re,Object(o["j"])(d,{modelValue:e.currentSlide,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.currentSlide=t}),class:"w-full","items-to-show":e.smallWindow?1.3:3},{addons:Object(o["J"])((function(){return[e.smallWindow?(Object(o["t"])(),Object(o["f"])(u,{key:0})):Object(o["g"])("",!0)]})),default:Object(o["J"])((function(){return[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(e.games,(function(e){return Object(o["t"])(),Object(o["f"])(i,{key:e},{default:Object(o["J"])((function(){return[Object(o["j"])("article",ae,[Object(o["j"])("header",{class:"w-full pt-2 flex flex-col items-start text-left whitespace-pre-wrap ".concat(e.active?"opacity-80":"opacity-50")},[Object(o["j"])("h2",le,Object(o["E"])(e.title),1),Object(o["j"])("span",{class:"text-sm text-gray-600 leading-4 mt-3",innerHTML:e.subtitle},null,8,["innerHTML"])],2),e.active?(Object(o["t"])(),Object(o["f"])("footer",se,[Object(o["j"])(s,{to:e.route,class:"card-link w-full"},{default:Object(o["J"])((function(){return[Object(o["j"])(l,{class:"mt-10 text-sm w-full"},{default:Object(o["J"])((function(){return[ie]})),_:1})]})),_:2},1032,["to"])])):Object(o["g"])("",!0)])]})),_:2},1024)})),128))]})),_:1},8,["modelValue","items-to-show"])])])}var de=n("0b81"),fe=(n("4001"),Object(o["k"])({components:{Slide:de["c"],Carousel:de["a"],Pagination:de["b"],OrangeButton:F},setup:function(){var e=Object(o["y"])([{title:"Antigo Testamento",subtitle:"Em breve",route:"/",active:!1},{title:"Versículos do Novo Testamento",subtitle:"Acerte o máximo de <strong>referências bíblicas</strong> que conseguir no <strong>Novo Testamento</strong>.",route:"/multipla-escolha/novo-testamento",active:!0},{title:"Perguntas Bíblicas",subtitle:"Em breve",route:"/",active:!1}]),t=Object(o["y"])(void 0);return Object(o["r"])((function(){t.value=1})),{games:e,currentSlide:t,smallWindow:window.innerWidth<777}}}));n("7772");const be=l()(fe,[["render",ue]]);var me=be,je=Object(o["K"])("data-v-56f8db34");Object(o["w"])("data-v-56f8db34");var pe={class:"footer text-sm h-96 w-full"},ge={class:"background-dotted-pattern w-full h-full flex flex-col justify-center items-center"},Oe=Object(o["j"])("a",{class:"mt-5",href:"mailto:filipesmerker@gmail.com",target:"_blank"}," filipesmerker@gmail.com ",-1),ve=Object(o["j"])("span",null,"Made with ♥️ by Filipe Merker",-1);Object(o["u"])();var he=je((function(e,t,n,c,r,a){var l=Object(o["B"])("logo");return Object(o["t"])(),Object(o["f"])("footer",pe,[Object(o["j"])("div",ge,[Object(o["j"])(l,{class:"w-auto"}),Oe,ve])])})),xe=Object(o["k"])({components:{Logo:k}});n("7624");const we=l()(xe,[["render",he],["__scopeId","data-v-56f8db34"]]);var ye=we,ke=Object(o["k"])({components:{Logo:k,Banner:D,ShareInfo:te,Challenges:me,HomeFooter:ye}});const Be=l()(ke,[["render",g]]);var _e=Be,Ce={key:"Success",class:"flex flex-col min-h-screen h-full w-full justify-center items-center"},Se={class:"gradient-1 h-auto w-10/12 md:w-6/12 my-5 flex justify-between flex-col sm:bg-center rounded-3xl"},Ee={class:"background-dotted-pattern w-full h-full py-10 flex items-center relative"},Ae={class:"px-5 lg:px-20 flex flex-col text-center items-center w-full"},Te={"data-testid":"title",class:"text-3xl lg:text-5xl w-full max-w-xl xl:max-w-2xl font-bold leading-11"},Le=Object(o["h"])('<p data-testid="description-title" class="text-white w-full text-md sm:text-xl font-normal mt-7 m:leading-8"> Habite, ricamente, em vós a palavra de Cristo; instruí-vos e aconselhai-vos mutuamente em toda a sabedoria, louvando a Deus, com salmos, e hinos, e cânticos espirituais, com gratidão, em vosso coração. <br><br><strong>Colossenses 3:16</strong></p><div id="badge" class="text-8xl mt-14">🏆</div><div class="flex w-full justify-around mt-10 font-bold"><a href="/">Voltar</a><a href="javascript:history.back()">Jogar Novamente</a></div>',3);function Pe(e,t,n,c,r,a){var l=Object(o["B"])("logo");return Object(o["t"])(),Object(o["f"])("div",Ce,[Object(o["j"])("section",Se,[Object(o["j"])("div",Ee,[Object(o["j"])("div",Ae,[Object(o["j"])(l,{class:"block mb-14 px-0"}),Object(o["j"])("h1",Te," Parabéns, você fez "+Object(o["E"])(e.params.id)+" pontos! ",1),Le])])])])}var Ne=Object(o["k"])({name:"Success",components:{Logo:k},props:{},setup:function(){var e=Object(j["c"])(),t=e.params;return{params:t}}});const Me=l()(Ne,[["render",Pe]]);var qe=Me,Je=[{path:"/",name:"Home",component:_e},{path:"/multipla-escolha/novo-testamento",name:"NewTestamentChallenge",component:function(){return n.e("about").then(n.bind(null,"a4c6"))}},{path:"/sucesso/:id",name:"Success",component:qe,props:!0}],He=Object(j["a"])({history:Object(j["b"])("/"),routes:Je}),Ie=He;m(),window.addEventListener("resize",m),Object(o["e"])(u).use(Ie).use(b).mount("#app")},db1e:function(e,t,n){},def6:function(e,t,n){},eb75:function(e,t,n){"use strict";n("f91b")},f91b:function(e,t,n){}});
//# sourceMappingURL=app.29538a96.js.map