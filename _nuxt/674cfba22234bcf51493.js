(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{2049:function(t,e,r){var content=r(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(t,e,r){var content=r(2058);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(t,e,r){"use strict";var n={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},v=(r(2053),r(12)),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex w-100"},[r("div",{staticClass:"mr-auto"},[r("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),r("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),r("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[r("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),r("b-dropdown-item",[t._v("First Action")]),t._v(" "),r("b-dropdown-item",[t._v("Second Action")]),t._v(" "),r("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);e.a=component.exports},2053:function(t,e,r){"use strict";var n=r(2049);r.n(n).a},2054:function(t,e,r){(e=r(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=e},2057:function(t,e,r){"use strict";var n=r(2050);r.n(n).a},2058:function(t,e,r){(e=r(14)(!1)).push([t.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),t.exports=e},2059:function(t,e,r){"use strict";var n={components:{CardTitle:r(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},v=(r(2057),r(12)),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":""}},[r("b-card-header",{staticClass:"d-flex"},[r("card-title",{attrs:{title:t.title?t.title:"Preview",subTitle:t.subTitle?t.subTitle:"Result:"}},[r("b-button-group",[r("b-button",{staticClass:"inverse",class:0==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=0}}},[t._v("Preview")]),t._v(" "),r("b-button",{staticClass:"inverse",class:1==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=1}}},[t._v("Source")])],1),t._v(" "),r("div",[r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-code"})]),t._v(" "),r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-chevron-down"})]),t._v(" "),r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-cross"})])],1)],1)],1),t._v(" "),r("b-card-body",[t._t("default")],2)],1)}),[],!1,null,"2d341bba",null);e.a=component.exports},2833:function(t,e,r){"use strict";r.r(e);var n=r(293),v=r(295),o=r(2059),d={components:{TitlePage:n.a,TitleTop:v.a,CardComponent:o.a},meta:{component:{tag:"b-badge",bsLink:"https://bootstrap-vue.js.org/docs/components/badge/#component-reference"}},layout:"admin"},c=r(12),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("title-page",{attrs:{title:"Basic Badges"}},[t._v("\n        Small and adaptive tag for adding context to just about any content.\n    ")]),t._v(" "),r("card-component",[r("h2",[t._v("Example heading "),r("b-badge",{staticClass:"inverse",attrs:{variant:"primary"}},[t._v("New")])],1),t._v(" "),r("h3",[t._v("Example heading "),r("b-badge",{staticClass:"inverse",attrs:{variant:"primary"}},[t._v("New")])],1),t._v(" "),r("h4",[t._v("Example heading "),r("b-badge",{staticClass:"inverse",attrs:{variant:"primary"}},[t._v("New")])],1),t._v(" "),r("h5",[t._v("Example heading "),r("b-badge",{staticClass:"inverse",attrs:{variant:"primary"}},[t._v("New")])],1),t._v(" "),r("h6",[t._v("Example heading "),r("b-badge",{staticClass:"inverse",attrs:{variant:"primary"}},[t._v("New")])],1)]),t._v(" "),r("title-page",{attrs:{title:"Badges w/ Buttons"}},[[r("span",[t._v("Badges used as part of links or buttons to provide a counter. ")])]],2),t._v(" "),r("card-component",[r("b-button",{staticClass:"inverse",attrs:{variant:"primary"}},[t._v("\n            Notifications "),r("b-badge",{staticClass:"inverse",attrs:{variant:"primary"}},[t._v("4")])],1),t._v(" "),r("b-button",{staticClass:"inverse",attrs:{variant:"secondary"}},[t._v("\n            Notifications "),r("b-badge",{staticClass:"inverse",attrs:{variant:"theme1"}},[t._v("4")])],1),t._v(" "),r("b-button",{staticClass:"inverse",attrs:{variant:"info"}},[t._v("\n            Notifications "),r("b-badge",{staticClass:"inverse",attrs:{variant:"info"}},[t._v("4")])],1),t._v(" "),r("b-button",{staticClass:"inverse",attrs:{variant:"info"}},[t._v("\n            Notifications "),r("b-badge",{staticClass:"inverse",attrs:{variant:"light"}},[t._v("4")])],1)],1),t._v(" "),r("title-page",{attrs:{title:"Contextual Variations"}},[r("span",[t._v("Add any of the following variants via the "),r("code",[t._v("variant")]),t._v(" prop to change the appearance of a "),r("code",[t._v("<b-badge>")]),t._v(":\n            "),r("code",[t._v("default")]),t._v(", "),r("code",[t._v("primary")]),t._v(", "),r("code",[t._v("success")]),t._v(", "),r("code",[t._v("warning")]),t._v(", "),r("code",[t._v("info")]),t._v(", and "),r("code",[t._v("danger")]),t._v(". If no variant is specified\n            "),r("code",[t._v("default")]),t._v(" will be used.\n        ")])]),t._v(" "),r("card-component",[r("b-badge",{attrs:{variant:"primary"}},[t._v("Primary")]),t._v(" "),r("b-badge",{attrs:{variant:"secondary"}},[t._v("Secondary")]),t._v(" "),r("b-badge",{attrs:{variant:"success"}},[t._v("Success")]),t._v(" "),r("b-badge",{attrs:{variant:"danger"}},[t._v("Danger")]),t._v(" "),r("b-badge",{attrs:{variant:"warning"}},[t._v("Warning")]),t._v(" "),r("b-badge",{attrs:{variant:"info"}},[t._v("Info")]),t._v(" "),r("b-badge",{attrs:{variant:"light"}},[t._v("Light")]),t._v(" "),r("b-badge",{attrs:{variant:"dark"}},[t._v("Dark")])],1),t._v(" "),r("title-page",{attrs:{title:"Inverse Variations"}},[r("span",[t._v("Add any of the following variants via the "),r("code",[t._v("variant")]),t._v(" prop to change the appearance of a "),r("code",[t._v("<b-badge>")]),t._v(":\n            "),r("code",[t._v("default")]),t._v(", "),r("code",[t._v("primary")]),t._v(", "),r("code",[t._v("success")]),t._v(", "),r("code",[t._v("warning")]),t._v(", "),r("code",[t._v("info")]),t._v(", and "),r("code",[t._v("danger")]),t._v(". If no variant is specified\n            "),r("code",[t._v("default")]),t._v(" will be used.\n        ")])]),t._v(" "),r("card-component",[r("b-badge",{staticClass:"inverse",attrs:{variant:"primary"}},[t._v("Primary")]),t._v(" "),r("b-badge",{staticClass:"inverse",attrs:{variant:"secondary"}},[t._v("Secondary")]),t._v(" "),r("b-badge",{staticClass:"inverse",attrs:{variant:"success"}},[t._v("Success")]),t._v(" "),r("b-badge",{staticClass:"inverse",attrs:{variant:"danger"}},[t._v("Danger")]),t._v(" "),r("b-badge",{staticClass:"inverse",attrs:{variant:"warning"}},[t._v("Warning")]),t._v(" "),r("b-badge",{staticClass:"inverse",attrs:{variant:"info"}},[t._v("Info")]),t._v(" "),r("b-badge",{staticClass:"inverse",attrs:{variant:"light"}},[t._v("Light")]),t._v(" "),r("b-badge",{staticClass:"inverse",attrs:{variant:"dark"}},[t._v("Dark")])],1),t._v(" "),r("title-page",{attrs:{title:"Pill badges"}},[r("div",[t._v("Use the "),r("code",[t._v("pill")]),t._v(" prop to make badges more rounded (with a larger border-radius and additional\n            horizontal padding). Useful if you miss the badges from Bootstrap v3.")])]),t._v(" "),r("card-component",[r("b-badge",{attrs:{pill:"",variant:"primary"}},[t._v("Primary")]),t._v(" "),r("b-badge",{attrs:{pill:"",variant:"secondary"}},[t._v("Secondary")]),t._v(" "),r("b-badge",{attrs:{pill:"",variant:"success"}},[t._v("Success")]),t._v(" "),r("b-badge",{attrs:{pill:"",variant:"danger"}},[t._v("Danger")]),t._v(" "),r("b-badge",{attrs:{pill:"",variant:"warning"}},[t._v("Warning")]),t._v(" "),r("b-badge",{attrs:{pill:"",variant:"info"}},[t._v("Info")]),t._v(" "),r("b-badge",{attrs:{pill:"",variant:"light"}},[t._v("Light")]),t._v(" "),r("b-badge",{attrs:{pill:"",variant:"dark"}},[t._v("Dark")])],1),t._v(" "),r("title-page",{attrs:{title:"Actionable badges"}},[r("p",[t._v("Quickly provide actionable badges with hover and focus states by specifying either the "),r("code",[t._v("href")]),t._v(" prop\n            (links) or "),r("code",[t._v("to")]),t._v(" prop (router-links):")])]),t._v(" "),r("card-component",[r("b-badge",{attrs:{href:"#",variant:"primary"}},[t._v("Primary")]),t._v(" "),r("b-badge",{attrs:{href:"#",variant:"secondary"}},[t._v("Secondary")]),t._v(" "),r("b-badge",{attrs:{href:"#",variant:"success"}},[t._v("Success")]),t._v(" "),r("b-badge",{attrs:{href:"#",variant:"danger"}},[t._v("Danger")]),t._v(" "),r("b-badge",{attrs:{href:"#",variant:"warning"}},[t._v("Warning")]),t._v(" "),r("b-badge",{attrs:{href:"#",variant:"info"}},[t._v("Info")]),t._v(" "),r("b-badge",{attrs:{href:"#",variant:"light"}},[t._v("Light")]),t._v(" "),r("b-badge",{attrs:{href:"#",variant:"dark"}},[t._v("Dark")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);