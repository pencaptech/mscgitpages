(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1214:function(e,t,a){"use strict";a.r(t);var r=a(40),n=a(41),c=a(43),l=a(42),o=a(44),s=a(1),i=a.n(s),m=(a(124),a(3)),p=a(1210),u=a(58),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,email:"",resetError:""},a.validateOnChange=function(e){var t=e.target.value;console.log(t),a.setState({email:t})},a.onSubmit=function(e){e.preventDefault(),a.state.email.length<0||(fetch(u.i+u.d+"forgot-password?userName="+a.state.email,{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){200===e.status||a.setState({resetError:e.message})}).catch(function(e){a.setState({loginError:"Error while processing"})}),console.log("asas"))},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"block-center"},i.a.createElement("style",null,".wrapper{background: #2b3eb7} .card {min-height: 400px; max-width: 400px; margin: calc(50vh - 200px) auto 0 !important;} .card img {height: 75px} .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:focus {color: #fff !important; background-color: #2b3eb7 !important; border-color: #2b3eb7 !important; box-shadow: none !important;}"),i.a.createElement("div",{className:"card card-flat"},i.a.createElement("div",{className:"card-header text-center bg-default"},i.a.createElement(p.a,{to:""},i.a.createElement("img",{className:"block-center rounded",src:"img/logo-dark.png",alt:"Logo"}))),i.a.createElement("div",{className:"card-body"},i.a.createElement("p",{className:"text-center py-2"},"PASSWORD RESET"),i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("p",{className:"text-center"},"Fill with your mail to receive instructions on how to reset your password."),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"input-group with-focus"},i.a.createElement(m.n,{type:"text",name:"email",className:"border-right-0",placeholder:"Enter email",onChange:function(t){return e.validateOnChange(t)},"data-validate":'["required", "email"]',value:this.state.email,minLength:"5",maxLength:"100"}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},i.a.createElement("em",{className:"fa fa-envelope"}))))),i.a.createElement("span",{className:"invalid-feedback"}," ",this.state.resetError),i.a.createElement("button",{className:"btn btn-raised btn-primary btn-block",type:"submit"},"Reset"))),i.a.createElement("div",{className:"card-footer text-center"},i.a.createElement(p.a,{to:"login",className:"text-muted"},"Back to Login"))),i.a.createElement("div",{className:"p-3 text-center"},i.a.createElement("span",{className:"mr-2"},"\xa9"),i.a.createElement("span",null,"2019"),i.a.createElement("span",{className:"mx-2"},"-"),i.a.createElement("span",null,"MSC Chemicals")))}}]),t}(s.Component);t.default=d}}]);
//# sourceMappingURL=9.ad3af27a.chunk.js.map