(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{2049:function(t,e,n){var content=n(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(t,e,n){var content=n(2058);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(t,e,n){"use strict";var r={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},o=(n(2053),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex w-100"},[n("div",{staticClass:"mr-auto"},[n("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),n("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),n("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[n("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",[t._v("First Action")]),t._v(" "),n("b-dropdown-item",[t._v("Second Action")]),t._v(" "),n("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);e.a=component.exports},2053:function(t,e,n){"use strict";var r=n(2049);n.n(r).a},2054:function(t,e,n){(e=n(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=e},2057:function(t,e,n){"use strict";var r=n(2050);n.n(r).a},2058:function(t,e,n){(e=n(14)(!1)).push([t.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),t.exports=e},2059:function(t,e,n){"use strict";var r={components:{CardTitle:n(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},o=(n(2057),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"no-body":""}},[n("b-card-header",{staticClass:"d-flex"},[n("card-title",{attrs:{title:t.title?t.title:"Preview",subTitle:t.subTitle?t.subTitle:"Result:"}},[n("b-button-group",[n("b-button",{staticClass:"inverse",class:0==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=0}}},[t._v("Preview")]),t._v(" "),n("b-button",{staticClass:"inverse",class:1==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=1}}},[t._v("Source")])],1),t._v(" "),n("div",[n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-code"})]),t._v(" "),n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-chevron-down"})]),t._v(" "),n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-cross"})])],1)],1)],1),t._v(" "),n("b-card-body",[t._t("default")],2)],1)}),[],!1,null,"2d341bba",null);e.a=component.exports},2875:function(t,e,n){"use strict";n.r(e);var r=n(293),o=n(2059),l={components:{TitlePage:r.a,CardComponent:o.a},layout:"admin",meta:{component:{tag:"b-spinner",bsLink:"https://bootstrap-vue.js.org/docs/components/spinner/#component-reference"}},data:function(){return{variants:["primary","secondary","danger","warning","success","info","light","dark"]}}},c=n(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("title-page",{attrs:{title:"Spinners"}},[n("p",{staticClass:"bd-lead"},[t._v("The "),n("code",[t._v("<b-spinner>")]),t._v(" component can be used to show the loading state in your projects. They're\n            rendered only with basic HTML and CSS as a lightweight Vue functional component. Their appearance,\n            alignment, and sizing can be easily customized with a few built-in props and/or Bootstrap V4\n            utility classes.")])]),t._v(" "),n("card-component",[n("b-spinner",{attrs:{label:"Spinning"}}),t._v(" "),n("b-spinner",{attrs:{type:"grow",label:"Spinning"}}),t._v(" "),n("b-spinner",{attrs:{variant:"primary",label:"Spinning"}}),t._v(" "),n("b-spinner",{attrs:{variant:"primary",type:"grow",label:"Spinning"}}),t._v(" "),n("b-spinner",{attrs:{variant:"success",label:"Spinning"}}),t._v(" "),n("b-spinner",{attrs:{variant:"success",type:"grow",label:"Spinning"}})],1),t._v(" "),n("title-page",{attrs:{title:"Border spinner"}},[n("p",[t._v("Use the default "),n("code",[t._v("border")]),t._v(" type spinners for a lightweight loading indicator.")])]),t._v(" "),n("card-component",[n("b-spinner",{attrs:{label:"Loading..."}})],1),t._v(" "),n("title-page",{attrs:{title:"Grow spinner"}},[n("p",[t._v("If you don't fancy a "),n("code",[t._v("border")]),t._v(" spinner, switch to the "),n("code",[t._v("grow")]),t._v(" spinner by setting the prop "),n("code",[t._v("type")]),t._v(" to\n            "),n("code",[t._v("'grow'")]),t._v(". While it doesn't technically spin, it does repeatedly grow!")])]),t._v(" "),n("card-component",[n("b-spinner",{attrs:{type:"grow",label:"Loading..."}})],1),t._v(" "),n("title-page",{attrs:{title:"Spinner color variants"}},[n("p",[t._v("Spinners use "),n("code",[t._v("currentColor")]),t._v(" for their color, meaning it inherits the current font color. You can\n            customize the color using the standard text color variants using the "),n("code",[t._v("variant")]),t._v(" prop, or place\n            classes or styles on the component to change it's color.")])]),t._v(" "),n("card-component",[n("div",{staticClass:"text-center mb-3 d-flex justify-content-between"},t._l(t.variants,(function(t){return n("b-spinner",{key:t,attrs:{variant:t}})})),1),t._v(" "),n("div",{staticClass:"text-center d-flex justify-content-between"},t._l(t.variants,(function(t){return n("b-spinner",{key:t,attrs:{variant:t,type:"grow"}})})),1)]),t._v(" "),n("title-page",{attrs:{title:"Size"}},[n("p",[t._v("Set the prop "),n("code",[t._v("small")]),t._v(" to "),n("code",[t._v("true")]),t._v(" to make a smaller spinner that can quickly be used within other\n            components.")])]),t._v(" "),n("card-component",[n("b-spinner",{attrs:{small:"",label:"Small Spinner"}}),t._v(" "),n("b-spinner",{attrs:{small:"",label:"Small Spinner",type:"grow"}})],1),t._v(" "),n("title-page",{attrs:{title:"Margin"}},[n("p",[t._v("Use margin utilities like "),n("code",[t._v(".m-5")]),t._v(" for easy spacing.")])]),t._v(" "),n("card-component",[n("b-spinner",{staticClass:"m-5",attrs:{label:"Busy"}})],1),t._v(" "),n("title-page",{attrs:{title:"Flex"}},[t._v("\n        Using flex utility classes:\n    ")]),t._v(" "),n("card-component",[n("div",{staticClass:"d-flex justify-content-center mb-3"},[n("b-spinner",{attrs:{label:"Loading..."}})],1),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("strong",[t._v("Loading...")]),t._v(" "),n("b-spinner",{staticClass:"ml-auto"})],1)]),t._v(" "),n("title-page",{attrs:{title:"Floats"}},[t._v("\n        Using float utility classes:\n    ")]),t._v(" "),n("card-component",[t._v("\n        Floated Right\n        "),n("div",{staticClass:"clearfix"},[n("b-spinner",{staticClass:"float-right",attrs:{label:"Floated Right"}})],1)]),t._v(" "),n("title-page",{attrs:{title:"Text align"}},[t._v("\n        Using text alignment utility classes:\n    ")]),t._v(" "),n("card-component",[n("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1),t._v(" "),n("title-page",{attrs:{title:"Spinners in buttons"}},[t._v("\n        Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the label text out of the spinner element and utilize button text as needed.\n    ")]),t._v(" "),n("card-component",[n("b-button",{attrs:{variant:"primary",disabled:""}},[n("b-spinner",{attrs:{small:""}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Loading...")])],1),t._v(" "),n("b-button",{attrs:{variant:"primary",disabled:""}},[n("b-spinner",{attrs:{small:"",type:"grow"}}),t._v("\n            Loading...\n        ")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);