(function(e){function t(t){for(var r,c,s=t[0],i=t[1],l=t[2],u=0,f=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4716981a":"5f55657c","chunk-d5be48a0":"cf023264"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-d5be48a0":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4716981a":"31d6cfe0","chunk-d5be48a0":"cbba6aff"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],b.parentNode.removeChild(b),n(a)},b.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/miner/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var b=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19b7":function(e,t,n){"use strict";n("ac71")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=n("bc3a"),o=n.n(c),a=n("130e");function s(e,t){const n=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])(n)}n("19b7");var i=n("6b0d"),l=n.n(i);const u={},f=l()(u,[["render",s]]);var b=f,d=n("6605");const h=Object(r["g"])('<div class="nav"><div class="container"><div class="row"><div class="col-md-2"><h1 class="mt-3 text-light">Miners</h1></div></div></div></div>',1),p={class:"table p-3"},m={class:"table table-dark table-hover"},O=Object(r["f"])("th",{scope:"col",row:"2"},"PROJECT Name",-1),g=Object(r["f"])("th",{scope:"col"},"Token",-1),j=Object(r["f"])("th",{scope:"col"},"Fees",-1),v={scope:"col",class:"d-flex align-items-center"},y={class:"sort d-flex flex-column me-2"},k=Object(r["f"])("i",{class:"bi bi-caret-up-fill"},null,-1),w=[k],x=Object(r["f"])("i",{class:"bi bi-caret-down-fill"},null,-1),A=[x],P=Object(r["h"])("Age"),_=Object(r["f"])("th",{scope:"col"},"Daily ROI",-1),C=Object(r["f"])("th",{scope:"col"},"Risk Warning",-1),E={scope:"row"},S=["href"],T={class:"d-flex align-items-center"},N=["href"],L=["src"],M={class:"text-success"},B={class:"text-warning"},D={class:"text-danger"};function H(e,t,n,c,o,a){return Object(r["r"])(),Object(r["e"])(r["a"],null,[h,Object(r["f"])("div",p,[Object(r["f"])("table",m,[Object(r["f"])("thead",null,[Object(r["f"])("tr",null,[O,g,j,Object(r["f"])("th",v,[Object(r["f"])("div",y,[Object(r["f"])("button",{type:"button",class:"btn btn-sm btn-light mb-1",onClick:t[0]||(t[0]=(...e)=>a.sortAgeadd&&a.sortAgeadd(...e))},w),Object(r["f"])("button",{type:"button",class:"btn btn-sm btn-light",onClick:t[1]||(t[1]=(...e)=>a.sortAgereduce&&a.sortAgereduce(...e))},A)]),P]),_,C])]),Object(r["f"])("tbody",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(o.miners,e=>(Object(r["r"])(),Object(r["e"])("tr",{key:e.id},[Object(r["f"])("th",E,[Object(r["f"])("a",{href:e.contentUrl,target:"_blank"},Object(r["y"])(e.content),9,S)]),Object(r["f"])("td",T,[Object(r["f"])("a",{href:e.coinHref,target:"_blank"},[Object(r["f"])("img",{src:e.coinImgUrl,alt:"",class:"icon me-2"},null,8,L)],8,N),Object(r["h"])(Object(r["y"])(e.coin),1)]),Object(r["f"])("td",M,Object(r["y"])(e.fees),1),Object(r["f"])("td",B,Object(r["y"])(e.age)+"d",1),Object(r["f"])("td",D,Object(r["y"])(e.daily)+"%",1),Object(r["f"])("td",null,Object(r["y"])(e.risk),1)]))),128))])])])],64)}var I={data(){return{miners:[]}},methods:{sortAgeadd(){this.miners.sort((function(e,t){return e.age-t.age}))},sortAgereduce(){this.miners.sort((function(e,t){return t.age-e.age}))}},mounted(){this.axios.get("https://enigmatic-stream-43395.herokuapp.com/posts").then(e=>{console.log(e),this.miners=e.data.post})}};n("bc5a");const J=l()(I,[["render",H]]);var R=J;const U=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:()=>n.e("chunk-d5be48a0").then(n.bind(null,"f820"))},{path:"/miners",component:()=>n.e("chunk-4716981a").then(n.bind(null,"7a74"))}],q=Object(d["a"])({history:Object(d["b"])(),routes:U});var F=q;n("cd74");const K=Object(r["c"])(b);K.use(a["a"],o.a),K.use(F),K.mount("#app")},"9ee4":function(e,t,n){},ac71:function(e,t,n){},bc5a:function(e,t,n){"use strict";n("9ee4")}});
//# sourceMappingURL=app.b174d54f.js.map