(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{2049:function(t,r,e){var content=e(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(t,r,e){var content=e(2058);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(t,r,e){"use strict";var o={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},n=(e(2053),e(12)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"d-flex w-100"},[e("div",{staticClass:"mr-auto"},[e("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),e("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),e("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[e("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),e("b-dropdown-item",[t._v("First Action")]),t._v(" "),e("b-dropdown-item",[t._v("Second Action")]),t._v(" "),e("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);r.a=component.exports},2053:function(t,r,e){"use strict";var o=e(2049);e.n(o).a},2054:function(t,r,e){(r=e(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=r},2057:function(t,r,e){"use strict";var o=e(2050);e.n(o).a},2058:function(t,r,e){(r=e(14)(!1)).push([t.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),t.exports=r},2059:function(t,r,e){"use strict";var o={components:{CardTitle:e(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},n=(e(2057),e(12)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",{staticClass:"d-flex"},[e("card-title",{attrs:{title:t.title?t.title:"Preview",subTitle:t.subTitle?t.subTitle:"Result:"}},[e("b-button-group",[e("b-button",{staticClass:"inverse",class:0==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(r){t.currentIdx=0}}},[t._v("Preview")]),t._v(" "),e("b-button",{staticClass:"inverse",class:1==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(r){t.currentIdx=1}}},[t._v("Source")])],1),t._v(" "),e("div",[e("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[e("i",{staticClass:"dripicons-code"})]),t._v(" "),e("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[e("i",{staticClass:"dripicons-chevron-down"})]),t._v(" "),e("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[e("i",{staticClass:"dripicons-cross"})])],1)],1)],1),t._v(" "),e("b-card-body",[t._t("default")],2)],1)}),[],!1,null,"2d341bba",null);r.a=component.exports},2872:function(t,r,e){"use strict";e.r(r);var o=e(293),n=e(2059),v={components:{TitlePage:o.a,CardComponent:n.a},layout:"admin",meta:{component:{tag:"b-progress",bsLink:"https://bootstrap-vue.js.org/docs/components/progress/#component-reference"}},data:function(){return{counter:45,max:100,value:33.333333333,values:[15,30,20],bars:[{variant:"success",value:75},{variant:"info",value:75},{variant:"warning",value:75},{variant:"danger",value:75},{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"dark",value:75}],timer:null,striped:!0,animate:!0}},mounted:function(){var t=this;this.timer=setInterval((function(){t.bars.forEach((function(t){return t.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{clicked:function(){this.counter=Math.random()*this.max}}},l=e(12),component=Object(l.a)(v,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("title-page",{attrs:{title:"Basic Bar"}},[t._v("\n        Use our custom progress component for displaying simple or complex progress bars, featuring support for horizontally stacked bars, animated backgrounds, and text labels.\n    ")]),t._v(" "),e("card-component",[e("div",[e("b-progress",{attrs:{value:t.counter,max:t.max,"show-progress":"",animated:""}}),t._v(" "),e("b-progress",{staticClass:"mt-2",attrs:{max:t.max,"show-value":""}},[e("b-progress-bar",{attrs:{value:.6*t.counter,variant:"success"}}),t._v(" "),e("b-progress-bar",{attrs:{value:.25*t.counter,variant:"warning"}}),t._v(" "),e("b-progress-bar",{attrs:{value:.15*t.counter,variant:"danger"}})],1),t._v(" "),e("b-button",{staticClass:"mt-3",on:{click:t.clicked}},[t._v("Click me")])],1)]),t._v(" "),e("title-page",{attrs:{title:"Labels"}},[e("p",[t._v("Add labels to your progress bars by either enabling "),e("code",[t._v("show-progress")]),t._v(" (percentage of max) or\n            "),e("code",[t._v("show-value")]),t._v("for the current absolute value. You may also set the precision (number of digits after\n            the decimal) via the "),e("code",[t._v("precision")]),t._v(" prop (default is "),e("code",[t._v("0")]),t._v("digits after the decimal).")])]),t._v(" "),e("card-component",[e("h5",[t._v("No label")]),t._v(" "),e("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max}}),t._v(" "),e("h5",[t._v("Value label")]),t._v(" "),e("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,"show-value":""}}),t._v(" "),e("h5",[t._v("Progress label")]),t._v(" "),e("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,"show-progress":""}}),t._v(" "),e("h5",[t._v("Value label with precision")]),t._v(" "),e("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,precision:2,"show-value":""}}),t._v(" "),e("h5",[t._v("Progress label with precision")]),t._v(" "),e("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,precision:2,"show-progress":""}})],1),t._v(" "),e("title-page",{attrs:{title:"Custom progress label"}},[e("p",[t._v("Need more control over the label? Provide your own label by using the default slot within a\n            "),e("code",[t._v("<b-progress-bar>")]),t._v(" sub-component, or by using the "),e("code",[t._v("label")]),t._v(" prop on "),e("code",[t._v("<b-progress-bar>")]),t._v(" (HTML\n            supported):")])]),t._v(" "),e("card-component",[e("h5",[t._v("Custom Label via Default Slot")]),t._v(" "),e("b-progress",{attrs:{max:t.max,height:"2rem"}},[e("b-progress-bar",{attrs:{value:t.value}},[t._v("\n                Progress: "),e("strong",[t._v(t._s(t.value.toFixed(3))+" / "+t._s(t.max))])])],1),t._v(" "),e("h5",{staticClass:"mt-3"},[t._v("Custom Label via Prop")]),t._v(" "),e("b-progress",{attrs:{max:t.max}},[e("b-progress-bar",{attrs:{value:t.value,label:"<"+t.value.toFixed(0)+">"}})],1)],1),t._v(" "),e("title-page",{attrs:{title:"Width and Height"}},[e("p",[e("code",[t._v("<b-progress>")]),t._v(" will always expand to the maximum with of it's parent container. To change the width,\n            place "),e("code",[t._v("<b-progress>")]),t._v(" in a standard Bootstrap column or apply one of the standard Bootstrap width\n            classes.")])]),t._v(" "),e("card-component",[e("h5",[t._v("Default width")]),t._v(" "),e("b-progress",{staticClass:"mb-3",attrs:{value:t.value}}),t._v(" "),e("h5",[t._v("Custom widths")]),t._v(" "),e("b-progress",{staticClass:"w-75 mb-2",attrs:{value:t.value}}),t._v(" "),e("b-progress",{staticClass:"w-50 mb-2",attrs:{value:t.value}}),t._v(" "),e("b-progress",{staticClass:"w-25",attrs:{value:t.value}})],1),t._v(" "),e("title-page",{attrs:{title:"Backgrounds"}},[e("p",[t._v("Use background variants to change the appearance of individual progress bars. The default variant is\n            "),e("code",[t._v("primary")]),t._v(".")])]),t._v(" "),e("card-component",t._l(t.bars,(function(r){return e("div",{staticClass:"row mb-1"},[e("div",{staticClass:"col-sm-2"},[t._v(t._s(r.variant)+":")]),t._v(" "),e("div",{staticClass:"col-sm-10 pt-1"},[e("b-progress",{key:r.variant,attrs:{value:r.value,variant:r.variant}})],1)])})),0),t._v(" "),e("title-page",{attrs:{title:"Striped backgrounds"}},[e("p",[t._v("Set "),e("code",[t._v("striped")]),t._v(" to apply a stripe via CSS gradient over the progress bar’s background variant.")])]),t._v(" "),e("card-component",[e("b-progress",{attrs:{value:25,variant:"success",striped:t.striped}}),t._v(" "),e("b-progress",{staticClass:"mt-2",attrs:{value:50,variant:"info",striped:t.striped}}),t._v(" "),e("b-progress",{staticClass:"mt-2",attrs:{value:75,variant:"warning",striped:t.striped}}),t._v(" "),e("b-progress",{staticClass:"mt-2",attrs:{value:100,variant:"danger",striped:t.striped}}),t._v(" "),e("b-button",{staticClass:"mt-3",attrs:{variant:"secondary"},on:{click:function(r){t.striped=!t.striped}}},[t._v("\n            "+t._s(t.striped?"Remove":"Add")+" Striped\n        ")])],1),t._v(" "),e("title-page",{attrs:{title:"Animated backgrounds"}},[e("p",[t._v("The striped gradient can also be animated by setting the "),e("code",[t._v("animated")]),t._v("prop.")])]),t._v(" "),e("card-component",[e("b-progress",{attrs:{value:25,variant:"success",striped:"",animated:t.animate}}),t._v(" "),e("b-progress",{staticClass:"mt-2",attrs:{value:50,variant:"info",striped:"",animated:t.animate}}),t._v(" "),e("b-progress",{staticClass:"mt-2",attrs:{value:75,variant:"warning",striped:"",animated:t.animate}}),t._v(" "),e("b-progress",{staticClass:"mt-3",attrs:{value:100,variant:"danger",animated:t.animate}}),t._v(" "),e("b-button",{staticClass:"mt-3",attrs:{variant:"secondary"},on:{click:function(r){t.animate=!t.animate}}},[t._v("\n            "+t._s(t.animate?"Stop":"Start")+" Animation\n        ")])],1),t._v(" "),e("title-page",{attrs:{title:"Multiple bars"}},[e("p",[t._v("Include multiple "),e("code",[t._v("<b-progress-bar>")]),t._v(" sub-components in a "),e("code",[t._v("<b-progress>")]),t._v(" component to build a\n            horizontally stacked set of progress bars.")])]),t._v(" "),e("card-component",[e("b-progress",{staticClass:"mb-3",attrs:{max:t.max}},[e("b-progress-bar",{attrs:{variant:"primary",value:t.values[0]}}),t._v(" "),e("b-progress-bar",{attrs:{variant:"success",value:t.values[1]}}),t._v(" "),e("b-progress-bar",{attrs:{variant:"info",value:t.values[2]}})],1),t._v(" "),e("b-progress",{staticClass:"mb-3",attrs:{"show-progress":"",max:t.max}},[e("b-progress-bar",{attrs:{variant:"primary",value:t.values[0]}}),t._v(" "),e("b-progress-bar",{attrs:{variant:"success",value:t.values[1]}}),t._v(" "),e("b-progress-bar",{attrs:{variant:"info",value:t.values[2]}})],1),t._v(" "),e("b-progress",{staticClass:"mb-3",attrs:{"show-value":"",striped:"",max:t.max}},[e("b-progress-bar",{attrs:{variant:"primary",value:t.values[0]}}),t._v(" "),e("b-progress-bar",{attrs:{variant:"success",value:t.values[1]}}),t._v(" "),e("b-progress-bar",{attrs:{variant:"info",value:t.values[2]}})],1),t._v(" "),e("b-progress",{attrs:{max:t.max}},[e("b-progress-bar",{attrs:{variant:"primary",value:t.values[0],"show-progress":""}}),t._v(" "),e("b-progress-bar",{attrs:{variant:"success",value:t.values[1],animated:"","show-progress":""}}),t._v(" "),e("b-progress-bar",{attrs:{variant:"info",value:t.values[2],striped:"","show-progress":""}})],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);