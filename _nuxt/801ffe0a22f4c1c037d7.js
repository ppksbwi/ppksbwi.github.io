(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{2049:function(t,e,n){var content=n(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(t,e,n){var content=n(2058);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(t,e,n){"use strict";var r={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},l=(n(2053),n(12)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex w-100"},[n("div",{staticClass:"mr-auto"},[n("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),n("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),n("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[n("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",[t._v("First Action")]),t._v(" "),n("b-dropdown-item",[t._v("Second Action")]),t._v(" "),n("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);e.a=component.exports},2053:function(t,e,n){"use strict";var r=n(2049);n.n(r).a},2054:function(t,e,n){(e=n(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=e},2057:function(t,e,n){"use strict";var r=n(2050);n.n(r).a},2058:function(t,e,n){(e=n(14)(!1)).push([t.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),t.exports=e},2059:function(t,e,n){"use strict";var r={components:{CardTitle:n(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},l=(n(2057),n(12)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"no-body":""}},[n("b-card-header",{staticClass:"d-flex"},[n("card-title",{attrs:{title:t.title?t.title:"Preview",subTitle:t.subTitle?t.subTitle:"Result:"}},[n("b-button-group",[n("b-button",{staticClass:"inverse",class:0==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=0}}},[t._v("Preview")]),t._v(" "),n("b-button",{staticClass:"inverse",class:1==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=1}}},[t._v("Source")])],1),t._v(" "),n("div",[n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-code"})]),t._v(" "),n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-chevron-down"})]),t._v(" "),n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-cross"})])],1)],1)],1),t._v(" "),n("b-card-body",[t._t("default")],2)],1)}),[],!1,null,"2d341bba",null);e.a=component.exports},2804:function(t,e,n){"use strict";n.r(e);n(30);var r=n(293),l=n(2059),o={components:{TitlePage:r.a,CardComponent:l.a},layout:"admin",meta:{component:{tag:"b-form-file",bsLink:"https://bootstrap-vue.js.org/docs/components/form-file/#component-reference"}},data:function(){return{file:null,file2:null}},methods:{clearFiles:function(){this.$refs["file-input"].reset()},formatNames:function(t){return 1===t.length?t[0].name:"".concat(t.length," files selected")}}},c=n(12),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("title-page",{attrs:{title:"Form File Input"}},[t._v("\n\n        Customized, cross-browser consistent, file input control that supports single file, multiple files, and directory upload (for browsers that support directory mode)\n    ")]),t._v(" "),n("card-component",[n("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),n("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.file?t.file.name:""))]),t._v(" "),n("b-form-file",{staticClass:"mt-3",attrs:{plain:""},model:{value:t.file2,callback:function(e){t.file2=e},expression:"file2"}}),t._v(" "),n("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.file2?t.file2.name:""))])],1),t._v(" "),n("title-page",{attrs:{title:"Limiting to certain file types"}},[n("p",[t._v("You can limit the file types by setting the "),n("code",[t._v("accept")]),t._v(" prop to a string containing the allowed file\n            type(s). To specify more than one type, separate the values with a comma.")])]),t._v(" "),n("card-component",[n("b-form-file",{attrs:{accept:"image/*"}}),t._v(" "),n("b-form-file",{attrs:{accept:"image/jpeg, image/png, image/gif"}}),t._v(" "),n("b-form-file",{attrs:{accept:".jpg, .png, .gif"}})],1),t._v(" "),n("title-page",{attrs:{title:"File name formatter function"}},[n("p",[t._v("Set the prop "),n("code",[t._v("file-name-formatter")]),t._v(" to a function that accepts a single argument which is an array of\n            "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/File"}},[n("code",[t._v("File")])]),t._v(" objects. The function should return\n            a single formatted string (HTML is not supported). The formatter will not be called if no files are\n            selected.")])]),t._v(" "),n("card-component",[n("b-form-file",{attrs:{multiple:"","file-name-formatter":t.formatNames}})],1),t._v(" "),n("title-page",{attrs:{title:"File name formatting via scoped slot"}},[n("p",[t._v("Alternatively, you can use the scoped slot "),n("code",[t._v("file-name")]),t._v(" to render the file names. The scoped slot\n            will receive the following properties:")])]),t._v(" "),n("card-component",[n("b-form-file",{attrs:{multiple:""},scopedSlots:t._u([{key:"file-name",fn:function(e){var r=e.names;return[n("b-badge",{attrs:{variant:"dark"}},[t._v(t._s(r[0]))]),t._v(" "),r.length>1?n("b-badge",{staticClass:"ml-1",attrs:{variant:"dark"}},[t._v("\n                    + "+t._s(r.length-1)+" More files\n                ")]):t._e()]}}])})],1),t._v(" "),n("title-page",{attrs:{title:"Clearing the file selection"}},[n("p",[t._v("With inputs of type file, normally the "),n("code",[t._v("v-model")]),t._v(" is uni-directional (meaning you cannot pre-set the\n            selected files). However, you can clear the file input's selected files by setting the "),n("code",[t._v("v-model")]),t._v(" to\n            either "),n("code",[t._v("null")]),t._v(", an empty string, or an empty array).")])]),t._v(" "),n("card-component",[n("b-form-file",{ref:"file-input",staticClass:"mb-2",model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),n("b-button",{staticClass:"mr-2",on:{click:t.clearFiles}},[t._v("Reset via method")]),t._v(" "),n("b-button",{on:{click:function(e){t.file=null}}},[t._v("Reset via v-model")]),t._v(" "),n("p",{staticClass:"mt-2"},[t._v("Selected file: "),n("b",[t._v(t._s(t.file?t.file.name:""))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);