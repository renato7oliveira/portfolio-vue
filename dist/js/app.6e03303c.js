(function(e){function t(t){for(var o,r,c=t[0],l=t[1],s=t[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0acf8194":"97d00d73","chunk-1e66fd68":"8298e652","chunk-532a5de0":"4d094bdd","chunk-56b8775e":"8d73cd28"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0acf8194":1,"chunk-1e66fd68":1,"chunk-532a5de0":1,"chunk-56b8775e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0acf8194":"e79d3b41","chunk-1e66fd68":"9a18bccf","chunk-532a5de0":"8fc2259a","chunk-56b8775e":"9c052164"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"427c":function(e,t,n){"use strict";var o=n("7b22"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("Contact"),n("i",{staticClass:"material-icons-round md-brightness_2",attrs:{id:"switch",title:"Click!"}}),n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("nav",[n("div",{staticClass:"overlay"}),n("div",{staticClass:"sidebar"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("home")])],1),n("li",[n("router-link",{attrs:{to:"/sobre"}},[e._v("sobre")])],1),n("li",[n("router-link",{attrs:{to:"/portfolio"}},[e._v("portfolio")])],1),n("li",{staticClass:"contact"},[n("a",{on:{click:function(t){e.modalShow=!0}}},[e._v("contato")])])])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"nav"},[n("i",{staticClass:"material-icons-outline md-menu"})]),n("div",[n("h1",[e._v("renato7oliveira")])])])}],l=(n("9401"),n("2877")),s={},u=Object(l["a"])(s,i,c,!1,null,"184352a5",null),d=u.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.modalShow,expression:"modalShow"}],staticClass:"form-overlay",on:{click:function(t){e.modalShow=!1}}},[n("iframe",{attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSfvreM17QyS421n90WYUp9cP0Sl9o8zcNXtvxPdFuw4aAQTaA/viewform?embedded=true",frameborder:"0",marginheight:"0",marginwidth:"0"}},[e._v("Carregando…")])])]),n("footer",[n("i",{staticClass:"material-icons-outline md-message",attrs:{title:"Contato"},on:{click:function(t){e.modalShow=!0}}})])],1)},m=[],h={data:function(){return{modalShow:!1}}},p=h,v=(n("7a5a"),Object(l["a"])(p,f,m,!1,null,null,null)),b=v.exports,g={components:{Nav:d,Contact:b}},k=g,y=(n("5c0b"),Object(l["a"])(k,r,a,!1,null,null,null)),w=y.exports,_=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"home"},[n("article",[n("figure",[n("router-link",{attrs:{to:"/sobre"}})],1),n("h2",[e._v("renato7oliveira")]),n("p",[e._v("frontend · webdesign")]),n("router-link",{staticClass:"btn",attrs:{to:"/sobre"}},[n("i",{staticClass:"material-icons-outline md-account_circle"}),e._v(" Sobre")])],1)])])},C=[],E=(n("427c"),{}),O=Object(l["a"])(E,S,C,!1,null,"b0f247f8",null),j=O.exports;o["a"].use(_["a"]);var x="renato7oliveira · ",L=[{path:"/",name:"Home",meta:{title:x+"frontend · webdesign",description:"renato7oliveira · frontend · webdesign"},component:j},{path:"/sobre",name:"sobre",meta:{title:x+"sobre"},component:function(){return n.e("chunk-56b8775e").then(n.bind(null,"f820"))}},{path:"/portfolio",name:"Portfolio",meta:{title:x+"portfolio"},component:function(){return n.e("chunk-0acf8194").then(n.bind(null,"6cd1"))}},{path:"/portfolio-detalhe",name:"PortfolioDetalhe",meta:{title:x+"portfolio · detalhe"},component:function(){return n.e("chunk-532a5de0").then(n.bind(null,"fe45"))}},{path:"/*",name:"NotFound",meta:{title:x+"página não encontrada"},component:function(){return n.e("chunk-1e66fd68").then(n.bind(null,"9703"))}}],P=new _["a"]({linkExactActiveClass:"link_active",routes:L});P.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var A=P,N=n("d5e8"),T=n.n(N),q=n("05b9"),$=n.n(q),M=n("1f54"),F=n.n(M);o["a"].config.productionTip=!1,T.a,$.a,F.a,new o["a"]({router:A,render:function(e){return e(w)}}).$mount("#app");var B=document.querySelector(".sidebar"),D=document.querySelector(".overlay");function Q(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector(".nav").onclick=function(){B.classList.toggle("active"),D.classList.toggle("ds_block")},document.querySelector(".sidebar").onclick=function(){B.classList.toggle("active"),D.classList.toggle("ds_block"),Q()},document.querySelector(".overlay").onclick=function(){B.classList.toggle("active"),D.classList.toggle("ds_block")};var H=document.querySelector("html"),I=document.querySelector("#switch");I.addEventListener("click",(function(){H.classList.toggle("dark-mode")}))},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"7a5a":function(e,t,n){"use strict";var o=n("ebf5"),r=n.n(o);r.a},"7b22":function(e,t,n){},9401:function(e,t,n){"use strict";var o=n("bb4b"),r=n.n(o);r.a},"9c0c":function(e,t,n){},bb4b:function(e,t,n){},ebf5:function(e,t,n){}});
//# sourceMappingURL=app.6e03303c.js.map