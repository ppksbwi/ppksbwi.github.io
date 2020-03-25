(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{2049:function(t,e,r){var content=r(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(t,e,r){var content=r(2058);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(t,e,r){"use strict";var o={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},n=(r(2053),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex w-100"},[r("div",{staticClass:"mr-auto"},[r("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),r("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),r("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[r("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),r("b-dropdown-item",[t._v("First Action")]),t._v(" "),r("b-dropdown-item",[t._v("Second Action")]),t._v(" "),r("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);e.a=component.exports},2053:function(t,e,r){"use strict";var o=r(2049);r.n(o).a},2054:function(t,e,r){(e=r(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=e},2057:function(t,e,r){"use strict";var o=r(2050);r.n(o).a},2058:function(t,e,r){(e=r(14)(!1)).push([t.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),t.exports=e},2059:function(t,e,r){"use strict";var o={components:{CardTitle:r(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},n=(r(2057),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":""}},[r("b-card-header",{staticClass:"d-flex"},[r("card-title",{attrs:{title:t.title?t.title:"Preview",subTitle:t.subTitle?t.subTitle:"Result:"}},[r("b-button-group",[r("b-button",{staticClass:"inverse",class:0==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=0}}},[t._v("Preview")]),t._v(" "),r("b-button",{staticClass:"inverse",class:1==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=1}}},[t._v("Source")])],1),t._v(" "),r("div",[r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-code"})]),t._v(" "),r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-chevron-down"})]),t._v(" "),r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-cross"})])],1)],1)],1),t._v(" "),r("b-card-body",[t._t("default")],2)],1)}),[],!1,null,"2d341bba",null);e.a=component.exports},2827:function(t,e,r){"use strict";r.r(e);var o=r(293),n=r(2059),l={components:{TitlePage:o.a,CardComponent:n.a},layout:"admin",meta:{component:{tag:"b-form-textarea",bsLink:"https://bootstrap-vue.js.org/docs/components/form-textarea/#component-reference"}},data:function(){return{text:"",text2:"This is some text.\nIt is read only and doesn't look like an input."}}},c=r(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("title-page",{attrs:{title:"Basic Textarea"}},[t._v("\n        Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states.\n    ")]),t._v(" "),r("card-component",[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),r("pre",{staticClass:"mt-3 mb-0"},[t._v(t._s(t.text))])],1),t._v(" "),r("title-page",{attrs:{title:"Control sizing"}},[r("p",[t._v("Set text height using the "),r("code",[t._v("size")]),t._v(" prop to "),r("code",[t._v("sm")]),t._v(" or "),r("code",[t._v("lg")]),t._v(" for small or large respectively.")])]),t._v(" "),r("card-component",[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"textarea-small"}},[t._v("Small:")])]),t._v(" "),r("b-col",{attrs:{sm:"10"}},[r("b-form-textarea",{attrs:{id:"textarea-small",size:"sm",placeholder:"Small textarea"}})],1)],1),t._v(" "),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"textarea-default"}},[t._v("Default:")])]),t._v(" "),r("b-col",{attrs:{sm:"10"}},[r("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"Default textarea"}})],1)],1),t._v(" "),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"textarea-large"}},[t._v("Large:")])]),t._v(" "),r("b-col",{attrs:{sm:"10"}},[r("b-form-textarea",{attrs:{id:"textarea-large",size:"lg",placeholder:"Large textarea"}})],1)],1)],1)],1),t._v(" "),r("title-page",{attrs:{title:"Displayed rows"}},[r("p",[t._v("To set the height of "),r("code",[t._v("<b-form-textarea>")]),t._v(", set the "),r("code",[t._v("rows")]),t._v(" prop to the desired number of rows. If no\n            value is provided to "),r("code",[t._v("rows")]),t._v(", then it will default to "),r("code",[t._v("2")]),t._v(" (the browser default and minimum acceptable\n            value). Setting it to null or a value below 2 will result in the default of "),r("code",[t._v("2")]),t._v(" being used.")])]),t._v(" "),r("card-component",[r("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"Tall textarea",rows:"8"}})],1),t._v(" "),r("title-page",{attrs:{title:"Disable resize handle"}},[r("p",[t._v("Some web browsers will allow the user to re-size the height of the textarea. To disable this\n            feature, set the "),r("code",[t._v("no-resize")]),t._v(" prop to "),r("code",[t._v("true")]),t._v(".")])]),t._v(" "),r("card-component",[r("b-form-textarea",{attrs:{id:"textarea-no-resize",placeholder:"Fixed height textarea",rows:"3","no-resize":""}})],1),t._v(" "),r("title-page",{attrs:{title:"Auto height"}},[r("p",[r("code",[t._v("<b-form-textarea>")]),t._v(" can also automatically adjust its height (text rows) to fit the content, even as\n            the user enters or deletes text. The height of the textarea will either grow or shrink to fit the\n            content (grow to a maximum of "),r("code",[t._v("max-rows")]),t._v(" or shrink to a minimum of "),r("code",[t._v("rows")]),t._v(").")])]),t._v(" "),r("card-component",[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"textarea-auto-height"}},[t._v("Auto height:")])]),t._v(" "),r("b-col",{attrs:{sm:"10"}},[r("b-form-textarea",{attrs:{id:"textarea-auto-height",placeholder:"Auto height textarea",rows:"3","max-rows":"8"}})],1)],1),t._v(" "),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"textarea-no-auto-shrink"}},[t._v("No auto-shrink:")])]),t._v(" "),r("b-col",{attrs:{sm:"10"}},[r("b-form-textarea",{attrs:{id:"textarea-no-auto-shrink",placeholder:"Auto height (no-shrink) textarea",rows:"3","max-rows":"8","no-auto-shrink":""}})],1)],1)],1)],1),t._v(" "),r("title-page",{attrs:{title:"Contextual states"}},[r("p",[t._v("Bootstrap includes validation styles for "),r("code",[t._v("valid")]),t._v(" and "),r("code",[t._v("invalid")]),t._v(" states on most form controls.")])]),t._v(" "),r("card-component",[r("b-form-textarea",{attrs:{id:"textarea-state",state:t.text.length>=10,placeholder:"Enter at least 10 characters",rows:"3"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),r("title-page",{attrs:{title:"Readonly plain text"}},[r("p",[t._v("If you want to have "),r("code",[t._v("<b-form-textarea readonly>")]),t._v(" elements in your form styled as plain text, set the\n            "),r("code",[t._v("plaintext")]),t._v(" prop (no need to set "),r("code",[t._v("readonly")]),t._v(" as it will be set automatically) to remove the default\n            form field styling and preserve the correct text size, margin, padding and height.")])]),t._v(" "),r("card-component",[r("b-form-textarea",{attrs:{id:"textarea-plaintext",plaintext:"",value:t.text2}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);