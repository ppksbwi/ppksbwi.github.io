(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{2049:function(t,e,r){var content=r(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(t,e,r){var content=r(2058);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(t,e,r){"use strict";var o={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},n=(r(2053),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex w-100"},[r("div",{staticClass:"mr-auto"},[r("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),r("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),r("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[r("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),r("b-dropdown-item",[t._v("First Action")]),t._v(" "),r("b-dropdown-item",[t._v("Second Action")]),t._v(" "),r("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);e.a=component.exports},2053:function(t,e,r){"use strict";var o=r(2049);r.n(o).a},2054:function(t,e,r){(e=r(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=e},2057:function(t,e,r){"use strict";var o=r(2050);r.n(o).a},2058:function(t,e,r){(e=r(14)(!1)).push([t.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),t.exports=e},2059:function(t,e,r){"use strict";var o={components:{CardTitle:r(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},n=(r(2057),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":""}},[r("b-card-header",{staticClass:"d-flex"},[r("card-title",{attrs:{title:t.title?t.title:"Preview",subTitle:t.subTitle?t.subTitle:"Result:"}},[r("b-button-group",[r("b-button",{staticClass:"inverse",class:0==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=0}}},[t._v("Preview")]),t._v(" "),r("b-button",{staticClass:"inverse",class:1==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=1}}},[t._v("Source")])],1),t._v(" "),r("div",[r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-code"})]),t._v(" "),r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-chevron-down"})]),t._v(" "),r("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[r("i",{staticClass:"dripicons-cross"})])],1)],1)],1),t._v(" "),r("b-card-body",[t._t("default")],2)],1)}),[],!1,null,"2d341bba",null);e.a=component.exports},2851:function(t,e,r){"use strict";r.r(e);var o=r(293),n=r(295),l=r(2059),c={components:{TitlePage:o.a,TitleTop:n.a,CardComponent:l.a},layout:"admin",meta:{component:{tag:"b-list-group",bsLink:"https://bootstrap-vue.js.org/docs/components/list-group/#component-reference"}}},v=r(12),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("title-page",{attrs:{title:"Basic Group"}},[t._v("List groups are a flexible and powerful component for displaying a series of content. List group items can be modified to support just about any content within. They can also be used as navigation via various props.\n\n    ")]),t._v(" "),r("card-component",[r("b-list-group",[r("b-list-group-item",[t._v("Cras justo odio")]),t._v(" "),r("b-list-group-item",[t._v("Dapibus ac facilisis in")]),t._v(" "),r("b-list-group-item",[t._v("Morbi leo risus")]),t._v(" "),r("b-list-group-item",[t._v("Porta ac consectetur ac")]),t._v(" "),r("b-list-group-item",[t._v("Vestibulum at eros")])],1)],1),t._v(" "),r("title-page",{attrs:{title:"Active items"}},[r("p",[t._v("Set the "),r("code",[t._v("active")]),t._v(" prop on a "),r("code",[t._v("<b-list-group-item>")]),t._v(" to indicate the current active selection.")])]),t._v(" "),r("card-component",[r("b-list-group",[r("b-list-group-item",[t._v("Cras justo odio")]),t._v(" "),r("b-list-group-item",{attrs:{active:""}},[t._v("Dapibus ac facilisis in")]),t._v(" "),r("b-list-group-item",[t._v("Morbi leo risus")]),t._v(" "),r("b-list-group-item",[t._v("Porta ac consectetur ac")]),t._v(" "),r("b-list-group-item",[t._v("Vestibulum at eros")])],1)],1),t._v(" "),r("title-page",{attrs:{title:"Disabled items"}},[r("p",[t._v("Set the "),r("code",[t._v("disabled")]),t._v(" prop on a "),r("code",[t._v("<b-list-group-item>")]),t._v(" to make it appear disabled (also works with\n            actionalable items. see below).")])]),t._v(" "),r("card-component",[r("b-list-group",[r("b-list-group-item",{attrs:{disabled:""}},[t._v("Cras justo odio")]),t._v(" "),r("b-list-group-item",[t._v("Dapibus ac facilisis in")]),t._v(" "),r("b-list-group-item",[t._v("Morbi leo risus")]),t._v(" "),r("b-list-group-item",{attrs:{disabled:""}},[t._v("Porta ac consectetur ac")]),t._v(" "),r("b-list-group-item",[t._v("Vestibulum at eros")])],1)],1),t._v(" "),r("title-page",{attrs:{title:"Actionable list group items"}},[r("p",[t._v("Turn a "),r("code",[t._v("<b-list-group-item>")]),t._v(" into an actionable link by specifying either an "),r("code",[t._v("href")]),t._v(" prop or\n            "),r("a",{attrs:{href:"/docs/reference/router-links"}},[t._v("router-link")]),t._v(" "),r("code",[t._v("to")]),t._v(" prop.")])]),t._v(" "),r("card-component",[r("b-list-group",[r("b-list-group-item",{attrs:{href:"#some-link"}},[t._v("Awesome link")]),t._v(" "),r("b-list-group-item",{attrs:{href:"#",active:""}},[t._v("Link with active state")]),t._v(" "),r("b-list-group-item",{attrs:{href:"#"}},[t._v("Action links are easy")]),t._v(" "),r("b-list-group-item",{attrs:{href:"#foobar",disabled:""}},[t._v("Disabled link")])],1)],1),t._v(" "),r("title-page",{attrs:{title:"Contextual variants"}},[r("p",[t._v("Use contextual variants to style list items with a stateful background and color, via the "),r("code",[t._v("variant")]),t._v("\n            prop.")])]),t._v(" "),r("card-component",[r("b-list-group",[r("b-list-group-item",[t._v("Default list group item")]),t._v(" "),r("b-list-group-item",{attrs:{variant:"primary"}},[t._v("Primary list group item")]),t._v(" "),r("b-list-group-item",{attrs:{variant:"secondary"}},[t._v("Secondary list group item")]),t._v(" "),r("b-list-group-item",{attrs:{variant:"success"}},[t._v("Success list group item")]),t._v(" "),r("b-list-group-item",{attrs:{variant:"danger"}},[t._v("Danger list group item")]),t._v(" "),r("b-list-group-item",{attrs:{variant:"warning"}},[t._v("Warning list group item")]),t._v(" "),r("b-list-group-item",{attrs:{variant:"info"}},[t._v("Info list group item")]),t._v(" "),r("b-list-group-item",{attrs:{variant:"light"}},[t._v("Light list group item")]),t._v(" "),r("b-list-group-item",{attrs:{variant:"dark"}},[t._v("Dark list group item")])],1)],1),t._v(" "),r("title-page",{attrs:{title:"With badges"}},[r("p",[t._v("Add badges to any list group item to show unread counts, activity, and\n            more with the help of some "),r("a",{attrs:{href:"http://getbootstrap.com/docs/4.0/utilities/flex/"}},[t._v("utility classes")]),t._v(".")])]),t._v(" "),r("card-component",[r("b-list-group",[r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v("\n                Cras justo odio\n                "),r("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("14")])],1),t._v(" "),r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v("\n                Dapibus ac facilisis in\n                "),r("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("2")])],1),t._v(" "),r("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v("\n                Morbi leo risus\n                "),r("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1)],1)],1),t._v(" "),r("title-page",{attrs:{title:"List groups inside cards"}},[r("p",[t._v("Incorporate list groups into "),r("a",{attrs:{href:"/docs/components/card"}},[t._v("cards")]),t._v(". Use the "),r("code",[t._v("<b-list-group>")]),t._v(" prop "),r("code",[t._v("flush")]),t._v("\n            prop when using cards with "),r("code",[t._v("no-body")]),t._v(" to make the sides of the list group flush with the card.")])]),t._v(" "),r("card-component",[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{header:"<b>Card with list group</b>"}},[r("b-list-group",[r("b-list-group-item",{attrs:{href:"#"}},[t._v("Cras justo odio")]),t._v(" "),r("b-list-group-item",{attrs:{href:"#"}},[t._v("Dapibus ac facilisis in")]),t._v(" "),r("b-list-group-item",{attrs:{href:"#"}},[t._v("Vestibulum at eros")])],1),t._v(" "),r("p",{staticClass:"card-text mt-2"},[t._v("\n                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum\n                    consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur\n                    mollit voluptate est in duis laboris ad sit ipsum anim Lorem.\n                ")])],1),t._v(" "),r("b-card",{attrs:{"no-body":"",header:"<b>Card with flush list group</b>"}},[r("b-list-group",{attrs:{flush:""}},[r("b-list-group-item",{attrs:{href:"#"}},[t._v("Cras justo odio")]),t._v(" "),r("b-list-group-item",{attrs:{href:"#"}},[t._v("Dapibus ac facilisis in")]),t._v(" "),r("b-list-group-item",{attrs:{href:"#"}},[t._v("Vestibulum at eros")])],1),t._v(" "),r("b-card-body",[t._v("\n                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum\n                    consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur\n                    mollit voluptate est in duis laboris ad sit ipsum anim Lorem.\n                ")])],1)],1)],1),t._v(" "),r("title-page",{attrs:{title:"Horizontal list groups"}},[r("p",[t._v("Set the prop "),r("code",[t._v("horizontal")]),t._v(" to "),r("code",[t._v("true")]),t._v(" to change the layout of list group items from vertical to\n            horizontal across all breakpoints. Alternatively, set "),r("code",[t._v("horizontal")]),t._v(" to a responsive breakpoint ("),r("code",[t._v("sm")]),t._v(",\n            "),r("code",[t._v("md")]),t._v(", "),r("code",[t._v("lg")]),t._v(" or "),r("code",[t._v("xl")]),t._v(") to make a list group horizontal starting at that breakpoint’s min-width.\n            Currently horizontal list groups cannot be combined with "),r("code",[t._v("flush")]),t._v(" list groups.")])]),t._v(" "),r("card-component",[r("div",[r("b-list-group",{attrs:{horizontal:""}},[r("b-list-group-item",[t._v("Cras justo odio")]),t._v(" "),r("b-list-group-item",[t._v("Dapibus ac facilisis in")]),t._v(" "),r("b-list-group-item",[t._v("Morbi leo risus")])],1)],1)]),t._v(" "),r("title-page",{attrs:{title:"Custom content"}},[r("p",[t._v("Add nearly any HTML or component within, even for linked list groups like the one below, with the\n            help of "),r("a",{attrs:{href:"http://getbootstrap.com/docs/4.0/utilities/flex/"}},[t._v("flexbox utility classes")]),t._v(".")])]),t._v(" "),r("card-component",[r("b-list-group",[r("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#",active:""}},[r("div",{staticClass:"d-flex w-100 justify-content-between"},[r("h5",{staticClass:"mb-1"},[t._v("List group item heading")]),t._v(" "),r("small",[t._v("3 days ago")])]),t._v(" "),r("p",{staticClass:"mb-1"},[t._v("\n                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n                ")]),t._v(" "),r("small",[t._v("Donec id elit non mi porta.")])]),t._v(" "),r("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"}},[r("div",{staticClass:"d-flex w-100 justify-content-between"},[r("h5",{staticClass:"mb-1"},[t._v("List group item heading")]),t._v(" "),r("small",{staticClass:"text-muted"},[t._v("3 days ago")])]),t._v(" "),r("p",{staticClass:"mb-1"},[t._v("\n                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n                ")]),t._v(" "),r("small",{staticClass:"text-muted"},[t._v("Donec id elit non mi porta.")])]),t._v(" "),r("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#",disabled:""}},[r("div",{staticClass:"d-flex w-100 justify-content-between"},[r("h5",{staticClass:"mb-1"},[t._v("Disabled List group item")]),t._v(" "),r("small",{staticClass:"text-muted"},[t._v("3 days ago")])]),t._v(" "),r("p",{staticClass:"mb-1"},[t._v("\n                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n                ")]),t._v(" "),r("small",{staticClass:"text-muted"},[t._v("Donec id elit non mi porta.")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);