(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{2049:function(t,o,e){var content=e(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(t,o,e){var content=e(2058);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(t,o,e){"use strict";var r={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},l=(e(2053),e(12)),component=Object(l.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"d-flex w-100"},[e("div",{staticClass:"mr-auto"},[e("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),e("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),e("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[e("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),e("b-dropdown-item",[t._v("First Action")]),t._v(" "),e("b-dropdown-item",[t._v("Second Action")]),t._v(" "),e("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);o.a=component.exports},2053:function(t,o,e){"use strict";var r=e(2049);e.n(r).a},2054:function(t,o,e){(o=e(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=o},2057:function(t,o,e){"use strict";var r=e(2050);e.n(r).a},2058:function(t,o,e){(o=e(14)(!1)).push([t.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),t.exports=o},2059:function(t,o,e){"use strict";var r={components:{CardTitle:e(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},l=(e(2057),e(12)),component=Object(l.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",{staticClass:"d-flex"},[e("card-title",{attrs:{title:t.title?t.title:"Preview",subTitle:t.subTitle?t.subTitle:"Result:"}},[e("b-button-group",[e("b-button",{staticClass:"inverse",class:0==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(o){t.currentIdx=0}}},[t._v("Preview")]),t._v(" "),e("b-button",{staticClass:"inverse",class:1==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(o){t.currentIdx=1}}},[t._v("Source")])],1),t._v(" "),e("div",[e("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[e("i",{staticClass:"dripicons-code"})]),t._v(" "),e("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[e("i",{staticClass:"dripicons-chevron-down"})]),t._v(" "),e("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[e("i",{staticClass:"dripicons-cross"})])],1)],1)],1),t._v(" "),e("b-card-body",[t._t("default")],2)],1)}),[],!1,null,"2d341bba",null);o.a=component.exports},2855:function(t,o,e){"use strict";e.r(o);var r=e(293),l=e(2059),n={components:{TitlePage:r.a,CardComponent:l.a},layout:"admin",meta:{component:{tag:"b-modal",bsLink:"https://bootstrap-vue.js.org/docs/components/modal/#component-reference"}},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},toggleModal:function(){this.$refs["my-modal"].toggle("#toggle-btn")}},data:function(){return{modalShow:!1,show:!1,variants:["primary","secondary","success","warning","danger","info","light","dark"],headerBgVariant:"dark",headerTextVariant:"light",bodyBgVariant:"light",bodyTextVariant:"dark",footerBgVariant:"warning",footerTextVariant:"dark"}}},d=e(12),component=Object(d.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("title-page",{attrs:{title:"Basic Modal"}},[t._v("\n        Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS. They support a number of use cases from user notification to completely custom content and feature a handful of helpful sub-components, sizes, variants, accessibility, and more.\n    ")]),t._v(" "),e("card-component",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Launch demo modal")]),t._v(" "),e("b-modal",{attrs:{id:"modal-1",title:"BootstrapVue"}},[e("p",{staticClass:"my-4"},[t._v("Hello from modal!")])])],1),t._v(" "),e("title-page",{attrs:{title:"Using show(), hide(), and toggle() component methods"}},[e("p",[t._v("You can access modal using "),e("code",[t._v("ref")]),t._v(" attribute and then call the "),e("code",[t._v("show()")]),t._v(", "),e("code",[t._v("hide()")]),t._v(" or "),e("code",[t._v("toggle()")]),t._v("\n            methods.")])]),t._v(" "),e("card-component",[e("b-button",{attrs:{id:"show-btn"},on:{click:t.showModal}},[t._v("Open Modal")]),t._v(" "),e("b-button",{attrs:{id:"toggle-btn"},on:{click:t.toggleModal}},[t._v("Toggle Modal")]),t._v(" "),e("b-modal",{ref:"my-modal",attrs:{"hide-footer":"",title:"Using Component Methods"}},[e("div",{staticClass:"d-block text-center"},[e("h3",[t._v("Hello From My Modal!")])]),t._v(" "),e("b-button",{staticClass:"mt-3",attrs:{variant:"outline-danger",block:""},on:{click:t.hideModal}},[t._v("Close Me")]),t._v(" "),e("b-button",{staticClass:"mt-2",attrs:{variant:"outline-warning",block:""},on:{click:t.toggleModal}},[t._v("Toggle Me")])],1)],1),t._v(" "),e("title-page",{attrs:{title:"Using v-model property"}},[e("p",[e("code",[t._v("v-model")]),t._v(" property is always automatically synced with "),e("code",[t._v("<b-modal>")]),t._v(" visible state and you can\n            show/hide using "),e("code",[t._v("v-model")]),t._v(".")])]),t._v(" "),e("card-component",[e("b-button",{on:{click:function(o){t.modalShow=!t.modalShow}}},[t._v("Open Modal")]),t._v(" "),e("b-modal",{model:{value:t.modalShow,callback:function(o){t.modalShow=o},expression:"modalShow"}},[t._v("Hello From Modal!")])],1),t._v(" "),e("title-page",{attrs:{title:"Modal sizing"}},[e("p",[t._v("Modals have three optional sizes, available via the prop "),e("code",[t._v("size")]),t._v(". These sizes kick in at certain\n            breakpoints to avoid horizontal scrollbars on narrower viewports. Valid optional sizes are "),e("code",[t._v("sm")]),t._v(",\n            "),e("code",[t._v("lg")]),t._v(", and "),e("code",[t._v("xl")])])]),t._v(" "),e("card-component",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-xl",modifiers:{"modal-xl":!0}}],attrs:{variant:"primary"}},[t._v("xl modal")]),t._v(" "),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{variant:"primary"}},[t._v("lg modal")]),t._v(" "),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-sm",modifiers:{"modal-sm":!0}}],attrs:{variant:"primary"}},[t._v("sm modal")]),t._v(" "),e("b-modal",{attrs:{id:"modal-xl",size:"xl",title:"Extra Large Modal"}},[t._v("Hello Extra Large Modal!")]),t._v(" "),e("b-modal",{attrs:{id:"modal-lg",size:"lg",title:"Large Modal"}},[t._v("Hello Large Modal!")]),t._v(" "),e("b-modal",{attrs:{id:"modal-sm",size:"sm",title:"Small Modal"}},[t._v("Hello Small Modal!")])],1),t._v(" "),e("title-page",{attrs:{title:"Scrolling long content"}},[t._v("\n        When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.\n    ")]),t._v(" "),e("card-component",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-tall",modifiers:{"modal-tall":!0}}]},[t._v("Launch overflowing modal")]),t._v(" "),e("b-modal",{attrs:{id:"modal-tall",title:"Overflowing Content"}},t._l(20,(function(i){return e("p",{key:i,staticClass:"my-4"},[t._v("\n                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis\n                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n            ")])})),0)],1),t._v(" "),e("title-page",{attrs:{title:"Vertically centered modal"}},[e("p",[t._v("Vertically center your modal in the viewport by setting the "),e("code",[t._v("centered")]),t._v(" prop.")])]),t._v(" "),e("card-component",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}]},[t._v("Launch centered modal")]),t._v(" "),e("b-modal",{attrs:{id:"modal-center",centered:"",title:"BootstrapVue"}},[e("p",{staticClass:"my-4"},[t._v("Vertically centered modal!")])])],1),t._v(" "),e("title-page",{attrs:{title:"Tooltips and popovers"}},[t._v("\n        Tooltips and popovers can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed. Tooltips and popovers are automatically appended to the modal element (to ensure correct z-indexing), although you can override where they are appended by specifying a container ID (refer to tooltip and popover docs for details).\n    ")]),t._v(" "),e("card-component",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalPopover",modifiers:{modalPopover:!0}}]},[t._v("Show Modal")]),t._v(" "),e("b-modal",{attrs:{id:"modalPopover",title:"Modal with Popover","ok-only":""}},[e("p",[t._v("\n                This\n                "),e("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover",value:"Popover inside a modal!",expression:"'Popover inside a modal!'"}],attrs:{title:"Popover"}},[t._v("Button")]),t._v("\n                triggers a popover on click.\n            ")],1),t._v(" "),e("p",[t._v("\n                This "),e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],attrs:{href:"#",title:"Tooltip in a modal!"}},[t._v("Link")]),t._v(" will show a tooltip on\n                hover.\n            ")])])],1),t._v(" "),e("title-page",{attrs:{title:"Variants"}},[t._v("\n        Customize with Bootstrap state variants.\n    ")]),t._v(" "),e("card-component",[e("div",[e("b-button",{attrs:{variant:"primary"},on:{click:function(o){t.show=!0}}},[t._v("Show Modal")]),t._v(" "),e("b-modal",{attrs:{title:"Modal Variants","header-bg-variant":t.headerBgVariant,"header-text-variant":t.headerTextVariant,"body-bg-variant":t.bodyBgVariant,"body-text-variant":t.bodyTextVariant,"footer-bg-variant":t.footerBgVariant,"footer-text-variant":t.footerTextVariant},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"mb-1 text-center"},[e("b-col",{attrs:{cols:"3"}}),t._v(" "),e("b-col",[t._v("Background")]),t._v(" "),e("b-col",[t._v("Text")])],1),t._v(" "),e("b-row",{staticClass:"mb-1"},[e("b-col",{attrs:{cols:"3"}},[t._v("Header")]),t._v(" "),e("b-col",[e("b-form-select",{attrs:{options:t.variants},model:{value:t.headerBgVariant,callback:function(o){t.headerBgVariant=o},expression:"headerBgVariant"}})],1),t._v(" "),e("b-col",[e("b-form-select",{attrs:{options:t.variants},model:{value:t.headerTextVariant,callback:function(o){t.headerTextVariant=o},expression:"headerTextVariant"}})],1)],1),t._v(" "),e("b-row",{staticClass:"mb-1"},[e("b-col",{attrs:{cols:"3"}},[t._v("Body")]),t._v(" "),e("b-col",[e("b-form-select",{attrs:{options:t.variants},model:{value:t.bodyBgVariant,callback:function(o){t.bodyBgVariant=o},expression:"bodyBgVariant"}})],1),t._v(" "),e("b-col",[e("b-form-select",{attrs:{options:t.variants},model:{value:t.bodyTextVariant,callback:function(o){t.bodyTextVariant=o},expression:"bodyTextVariant"}})],1)],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"3"}},[t._v("Footer")]),t._v(" "),e("b-col",[e("b-form-select",{attrs:{options:t.variants},model:{value:t.footerBgVariant,callback:function(o){t.footerBgVariant=o},expression:"footerBgVariant"}})],1),t._v(" "),e("b-col",[e("b-form-select",{attrs:{options:t.variants},model:{value:t.footerTextVariant,callback:function(o){t.footerTextVariant=o},expression:"footerTextVariant"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[e("p",{staticClass:"float-left"},[t._v("Modal Footer Content")]),t._v(" "),e("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:function(o){t.show=!1}}},[t._v("\n                        Close\n                    ")])],1)],1)],1)]),t._v(" "),e("title-page",{attrs:{title:"Multiple modal support"}},[e("p",[t._v("To disable stacking for a specific modal, just set the prop "),e("code",[t._v("no-stacking")]),t._v(" on the "),e("code",[t._v("<b-modal>")]),t._v("\n            component. This will hide the modal before another modal is shown.")])]),t._v(" "),e("card-component",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-multi-1",modifiers:{"modal-multi-1":!0}}]},[t._v("Open First Modal")]),t._v(" "),e("b-modal",{attrs:{id:"modal-multi-1",size:"lg",title:"First Modal","ok-only":"","no-stacking":""}},[e("p",{staticClass:"my-2"},[t._v("First Modal")]),t._v(" "),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-multi-2",modifiers:{"modal-multi-2":!0}}]},[t._v("Open Second Modal")])],1),t._v(" "),e("b-modal",{attrs:{id:"modal-multi-2",title:"Second Modal","ok-only":""}},[e("p",{staticClass:"my-2"},[t._v("Second Modal")]),t._v(" "),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-multi-3",modifiers:{"modal-multi-3":!0}}],attrs:{size:"sm"}},[t._v("Open Third Modal")])],1),t._v(" "),e("b-modal",{attrs:{id:"modal-multi-3",size:"sm",title:"Third Modal","ok-only":""}},[e("p",{staticClass:"my-1"},[t._v("Third Modal")])])],1)],1)}),[],!1,null,null,null);o.default=component.exports}}]);