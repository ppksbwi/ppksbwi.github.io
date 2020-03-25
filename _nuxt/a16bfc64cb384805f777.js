(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{2049:function(t,e,o){var content=o(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(t,e,o){var content=o(2058);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(t,e,o){"use strict";var r={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},n=(o(2053),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex w-100"},[o("div",{staticClass:"mr-auto"},[o("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),o("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),o("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[o("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),o("b-dropdown-item",[t._v("First Action")]),t._v(" "),o("b-dropdown-item",[t._v("Second Action")]),t._v(" "),o("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);e.a=component.exports},2053:function(t,e,o){"use strict";var r=o(2049);o.n(r).a},2054:function(t,e,o){(e=o(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=e},2057:function(t,e,o){"use strict";var r=o(2050);o.n(r).a},2058:function(t,e,o){(e=o(14)(!1)).push([t.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),t.exports=e},2059:function(t,e,o){"use strict";var r={components:{CardTitle:o(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},n=(o(2057),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{attrs:{"no-body":""}},[o("b-card-header",{staticClass:"d-flex"},[o("card-title",{attrs:{title:t.title?t.title:"Preview",subTitle:t.subTitle?t.subTitle:"Result:"}},[o("b-button-group",[o("b-button",{staticClass:"inverse",class:0==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=0}}},[t._v("Preview")]),t._v(" "),o("b-button",{staticClass:"inverse",class:1==t.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(e){t.currentIdx=1}}},[t._v("Source")])],1),t._v(" "),o("div",[o("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[o("i",{staticClass:"dripicons-code"})]),t._v(" "),o("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[o("i",{staticClass:"dripicons-chevron-down"})]),t._v(" "),o("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[o("i",{staticClass:"dripicons-cross"})])],1)],1)],1),t._v(" "),o("b-card-body",[t._t("default")],2)],1)}),[],!1,null,"2d341bba",null);e.a=component.exports},2828:function(t,e,o){"use strict";o.r(e);var r=o(293),n=o(2059),l={components:{TitlePage:r.a,CardComponent:n.a},layout:"admin",meta:{component:{tag:"b-img",bsLink:"https://bootstrap-vue.js.org/docs/components/image/#component-reference"}},data:function(){return{mainProps2:{center:!0,fluidGrow:!0,blank:!0,blankColor:"#bbb",width:600,height:400,class:"my-5"},mainProps:{blank:!0,blankColor:"#777",width:75,height:75,class:"m1"}}},methods:{getImageUrl:function(t){var e=this.mainProps,o=e.width,r=e.height;return"https://picsum.photos/".concat(o,"/").concat(r,"/?image=").concat(t)}}},c=o(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("title-page",{attrs:{title:"Basic Image"}},[o("p",[t._v("BootstrapVue's image components support rounded images, thumbnail styling, alignment, and even the\n            ability to create blank images with an optional solid background color. Support for lazy loaded\n            images is available via the "),o("code",[t._v("<b-img-lazy>")]),t._v(" complimentary component.")])]),t._v(" "),o("title-page",{attrs:{title:"Responsive images"}},[o("p",[t._v("Bootstrap includes validation styles for "),o("code",[t._v("valid")]),t._v(" and "),o("code",[t._v("invalid")]),t._v(" states on most form controls.")])]),t._v(" "),o("card-component",[o("b-img",{attrs:{src:"https://picsum.photos/1024/400/?image=41",fluid:"",alt:"Responsive image"}})],1),t._v(" "),o("title-page",{attrs:{title:""}},[o("p",[t._v("To make a fluid image that will grow to fill the width of it's container, use the "),o("code",[t._v("fluid-grow")]),t._v(" prop.\n            Note this may cause blurring on small bitmap images.")])]),t._v(" "),o("card-component",[o("h5",[t._v("Small image with "),o("code",[t._v("fluid")]),t._v(":")]),t._v(" "),o("b-img",{attrs:{src:"https://picsum.photos/300/150/?image=41",fluid:"",alt:"Fluid image"}}),t._v(" "),o("h5",{staticClass:"my-3"},[t._v("Small image with "),o("code",[t._v("fluid-grow")]),t._v(":")]),t._v(" "),o("b-img",{attrs:{src:"https://picsum.photos/300/150/?image=41","fluid-grow":"",alt:"Fluid-grow image"}})],1),t._v(" "),o("title-page",{attrs:{title:"Image thumbnails"}},[o("p",[t._v("You can use prop "),o("code",[t._v("thumbnail")]),t._v(" to give an image a rounded light border appearance.")])]),t._v(" "),o("card-component",[o("b-container",{staticClass:"p-4 bg-dark",attrs:{fluid:""}},[o("b-row",[o("b-col",[o("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://picsum.photos/250/250/?image=54",alt:"Image 1"}})],1),t._v(" "),o("b-col",[o("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://picsum.photos/250/250/?image=58",alt:"Image 2"}})],1),t._v(" "),o("b-col",[o("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://picsum.photos/250/250/?image=59",alt:"Image 3"}})],1)],1)],1)],1),t._v(" "),o("title-page",{attrs:{title:"Rounded corners"}},[o("p",[t._v("You can control which corners are rounded by setting the rounded prop to one of the following\n            values:")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("true")]),t._v(" (or prop present with no value): round all corners")]),t._v(" "),o("li",[o("code",[t._v("false")]),t._v(" (or prop not present): no explicit rounding or corners (default)")]),t._v(" "),o("li",[o("code",[t._v("'top'")]),t._v(": round the top corners")]),t._v(" "),o("li",[o("code",[t._v("'right'")]),t._v(": round the right corners")]),t._v(" "),o("li",[o("code",[t._v("'bottom'")]),t._v(": round the bottom corners")]),t._v(" "),o("li",[o("code",[t._v("'left'")]),t._v(": round the left corners")]),t._v(" "),o("li",[o("code",[t._v("'circle'")]),t._v(": make a circle (if square image) or oval (if not square) border")]),t._v(" "),o("li",[o("code",[t._v("'0'")]),t._v(": explicitly turn off rounding of corners")])])]),t._v(" "),o("card-component",[o("b-img",t._b({attrs:{rounded:"",alt:"Rounded image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{rounded:"top",alt:"Top-rounded image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{rounded:"right",alt:"Right-rounded image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{rounded:"bottom",alt:"Bottom-rounded image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{rounded:"left",alt:"Left-rounded image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{rounded:"circle",alt:"Circle image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{rounded:"0",alt:"Not rounded image"}},"b-img",t.mainProps,!1))],1),t._v(" "),o("title-page",{attrs:{title:"Aligning images"}},[o("p",[t._v("Align images with the boolean props "),o("code",[t._v("left")]),t._v(" (floats left) "),o("code",[t._v("right")]),t._v("(floats right), and "),o("code",[t._v("center")]),t._v(" (auto\n            left+right margins). You can also center images by placing them in a container that has the class\n            "),o("code",[t._v("text-center")]),t._v(".")])]),t._v(" "),o("card-component",[o("div",{staticClass:"clearfix"},[o("b-img",{attrs:{left:"",src:"https://picsum.photos/125/125/?image=58",alt:"Left image"}}),t._v(" "),o("b-img",{attrs:{right:"",src:"https://picsum.photos/125/125/?image=58",alt:"Right image"}})],1)]),t._v(" "),o("title-page",{attrs:{title:"Blank (or solid color) Images"}},[o("p",[o("code",[t._v("<b-img>")]),t._v(" provides built-in support for generating blank images (transparent by default) of any\n            width and height, by setting the "),o("code",[t._v("blank")]),t._v(" prop, and specifying "),o("code",[t._v("width")]),t._v(" and "),o("code",[t._v("height")]),t._v(" values (in\n            pixels). You can apply any of the other "),o("code",[t._v("<b-img>")]),t._v(" props to change the style/behavior of the\n            generated image.")])]),t._v(" "),o("card-component",[o("b-img",t._b({attrs:{alt:"Transparent image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{"blank-color":"#777",alt:"HEX shorthand color image (#777)"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{"blank-color":"red",alt:"Named color image (red)"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{"blank-color":"black",alt:"Named color image (black)"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{"blank-color":"#338833",alt:"HEX color image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{"blank-color":"rgba(128, 255, 255, 0.5)",alt:"RGBa color image"}},"b-img",t.mainProps,!1)),t._v(" "),o("b-img",t._b({attrs:{"blank-color":"#88f",alt:"HEX shorthand color (#88f)"}},"b-img",t.mainProps,!1))],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);