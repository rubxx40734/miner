(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b744d44"],{4530:function(e,s,t){},"5f9a":function(e,s,t){"use strict";t("4530")},f820:function(e,s,t){"use strict";t.r(s);var o=t("7a23");const n=Object(o["g"])('<div class="nav bg-setting"><div class="container"><div class="row"><div class="col-md-2"><h1 class="mt-3 text-light">後台管理</h1></div></div></div></div>',1),a={class:"container border mt-5"},c={class:"row justify-content-center"},r=Object(o["f"])("h1",{class:"h3 mb-3 font-weight-normal text-center"}," 請先登入 ",-1),l={class:"col-8"},i={id:"form",class:"form-signin"},d={class:"form-floating mb-3"},u=Object(o["f"])("label",{for:"username"},"Email address",-1),f={class:"form-floating"},m=Object(o["f"])("label",{for:"password"},"Password",-1);function b(e,s,t,b,p,w){return Object(o["r"])(),Object(o["e"])(o["a"],null,[n,Object(o["f"])("div",a,[Object(o["f"])("div",c,[r,Object(o["f"])("div",l,[Object(o["f"])("form",i,[Object(o["f"])("div",d,[Object(o["C"])(Object(o["f"])("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=e=>p.user.email=e)},null,512),[[o["A"],p.user.email]]),u]),Object(o["f"])("div",f,[Object(o["C"])(Object(o["f"])("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=e=>p.user.password=e)},null,512),[[o["A"],p.user.password]]),m]),Object(o["f"])("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"button",onClick:s[2]||(s[2]=(...e)=>w.login&&w.login(...e))}," 登入 ")])])])])],64)}var p={data(){return{user:{email:"",password:""}}},methods:{login(){const e="https://enigmatic-stream-43395.herokuapp.com/users/sign_in";this.axios.post(e,this.user).then(e=>{console.log(e);const s=e.data.user.token;console.log(s),window.localStorage.setItem("userToken",s),this.$router.push("/miners")}).catch(e=>{console.log(e)})}},mounted(){}},w=(t("5f9a"),t("6b0d")),h=t.n(w);const g=h()(p,[["render",b]]);s["default"]=g}}]);
//# sourceMappingURL=chunk-6b744d44.e8f566ad.js.map