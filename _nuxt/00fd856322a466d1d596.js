(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{2070:function(t,n,e){var content=e(2081);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(15).default)("4c1c4fd6",content,!0,{sourceMap:!1})},2077:function(t,n,e){"use strict";var o={name:"ButtonGroup",props:{icon:{type:String,default:"dripicons-menu"},borderClass:{type:String,default:""},isCollapsed:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},buttonVariant:{type:String,default:"secondary"},buttonSize:{type:String,default:"sm"},buttonList:{type:Array,default:function(){return[{icon:"la la-phone",variant:"primary"},{icon:"la la-envelope ",variant:"warning"},{icon:"la la-comments",variant:"danger"}]}}},data:function(){return{isShowActions:!1}},methods:{showActions:function(){this.isShowActions=!0},hide:function(){this.isShowActions=!1}}},r=(e(2080),e(12)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.isCollapsed?t._e():e("b-button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hide,expression:"hide"}],staticClass:"inverse btn-action",attrs:{variant:"secondary"},on:{click:t.showActions}},[e("i",{staticClass:"btn-icon",class:t.icon,staticStyle:{"font-size":"14px"}})]),t._v(" "),t.isShowActions||t.isCollapsed?e("b-button-group",{staticClass:"bg-theme1inv  p-2 container-actions shadow ig-rounded",class:{"position-absolute":!t.isCollapsed,shadow:!t.isCollapsed},attrs:{vertical:t.vertical}},t._l(t.buttonList,(function(button,n){return e("b-button",{key:n,staticClass:"inverse from-middle mx-1",class:t.borderClass,attrs:{size2:t.buttonSize,variant:button.variant?button.variant:"secondary"}},[e("i",{class:button.icon})])})),1):t._e()],1)}),[],!1,null,"1b38174f",null);n.a=component.exports},2080:function(t,n,e){"use strict";var o=e(2070);e.n(o).a},2081:function(t,n,e){(n=e(14)(!1)).push([t.i,".btn-action[data-v-1b38174f]{width:36px;height:36px}.btn-icon[data-v-1b38174f]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.container-actions[data-v-1b38174f]{z-index:2}.btn-group[data-v-1b38174f]{position:absolute;right:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}",""]),t.exports=n},2291:function(t,n,e){var content=e(2759);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(15).default)("cd549e1a",content,!0,{sourceMap:!1})},2758:function(t,n,e){"use strict";var o=e(2291);e.n(o).a},2759:function(t,n,e){(n=e(14)(!1)).push([t.i,".context-title{font-size:13px;font-weight:500;padding-left:15px}",""]),t.exports=n},2890:function(t,n,e){"use strict";e.r(n);var o=e(2327),r=e(2077),c={components:{RelevantComponents:o.a,ButtonGroup:r.a},methods:{},data:function(){return{actions:[{icon:"la la-phone text-primary"},{icon:"la la-envelope text-primary"},{icon:"la la-comments text-primary"},{icon:"la la-calendar text-primary"}]}}},l=(e(2758),e(12)),component=Object(l.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{},[n("nav",{staticClass:"sidebar-wrapper",attrs:{id:"sidebar"}},[n("div",{staticClass:"sidebar-content"},[n("relevant-components")],1)]),this._v(" "),n("div",{staticClass:"text-center"},[n("button-group",{attrs:{buttonList:this.actions}})],1)])}),[],!1,null,null,null);n.default=component.exports}}]);