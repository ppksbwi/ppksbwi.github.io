(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{2810:function(r,e,o){"use strict";o.r(e);o(30),o(74);var t=o(22),n=o(41),m=o.n(n),f={data:function(){return{user:{},form:{Email:"",Name:"",Password:"",Phone1:""},show:!0}},methods:{onRegister:function(r){var e=this;return Object(t.a)(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.preventDefault(),e.form.password==e.form.repassword){o.next=6;break}e.form.password="",e.form.repassword="",o.next=10;break;case 6:return o.next=8,m.a.post(e.apiUrl("user"),{Email:e.form.email,Name:e.form.username,Password:e.form.password,Phone1:e.form.phone});case 8:0==(t=o.sent).data.success?alert(t.data.message):e.$router.push("/login");case 10:case"end":return o.stop()}}),o)})))()},onReset:function(r){var e=this;r.preventDefault(),this.form.username="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){e.show=!0}))}}},l=o(12),component=Object(l.a)(f,(function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",[o("b-container",[o("h2",[r._v(" SIGN UP ")]),r._v(" "),r.show?o("b-form",{attrs:{"pt-50":""},on:{submit:r.onRegister,reset:r.onReset}},[o("b-form-group",{attrs:{id:"input-group-1","label-for":"input-1"}},[o("b-form-input",{attrs:{id:"input-1",required:"",placeholder:"Enter Your Name"},model:{value:r.form.username,callback:function(e){r.$set(r.form,"username",e)},expression:"form.username"}}),r._v(" "),o("br"),r._v(" "),o("b-form-input",{attrs:{id:"input-4",required:"",placeholder:"Enter Your Email"},model:{value:r.form.email,callback:function(e){r.$set(r.form,"email",e)},expression:"form.email"}})],1),r._v(" "),o("b-form-group",{attrs:{id:"input-group-2","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter Your Password"},model:{value:r.form.password,callback:function(e){r.$set(r.form,"password",e)},expression:"form.password"}}),r._v(" "),o("br"),r._v(" "),o("b-form-input",{attrs:{id:"input-3",type:"password",required:"",placeholder:"Confirm Password"},model:{value:r.form.repassword,callback:function(e){r.$set(r.form,"repassword",e)},expression:"form.repassword"}}),r._v(" "),o("br"),r._v(" "),o("b-form-input",{attrs:{id:"input-5",required:"",placeholder:"Enter Phone Number"},model:{value:r.form.phone,callback:function(e){r.$set(r.form,"phone",e)},expression:"form.phone"}})],1),r._v(" "),o("b-form-group",{attrs:{id:"input-group-3","label-for":"input-3"}},[o("b-button",{attrs:{size:"lg",type:"submit",block:"",variant:"warning"}},[r._v("Create New Account")])],1)],1):r._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);