(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{2049:function(e,t,n){var content=n(2054);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2050:function(e,t,n){var content=n(2058);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("0fa2dc69",content,!0,{sourceMap:!1})},2051:function(e,t,n){"use strict";var o={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},l=(n(2053),n(12)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex w-100"},[n("div",{staticClass:"mr-auto"},[n("h4",{staticClass:"card-title text-theme1 "},[e._v(e._s(e.title))]),e._v(" "),n("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[e._v(e._s(e.subTitle))])]),e._v(" "),n("div",{staticClass:"right-bar my-auto text-theme1"},[e._t("default",[n("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[e._v(" "),n("b-dropdown-item",[e._v("First Action")]),e._v(" "),n("b-dropdown-item",[e._v("Second Action")]),e._v(" "),n("b-dropdown-item",[e._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);t.a=component.exports},2053:function(e,t,n){"use strict";var o=n(2049);n.n(o).a},2054:function(e,t,n){(t=n(14)(!1)).push([e.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),e.exports=t},2057:function(e,t,n){"use strict";var o=n(2050);n.n(o).a},2058:function(e,t,n){(t=n(14)(!1)).push([e.i,".card[data-v-2d341bba]{margin-bottom:2rem}.card-body[data-v-2d341bba]{padding-bottom:2rem}",""]),e.exports=t},2059:function(e,t,n){"use strict";var o={components:{CardTitle:n(2051).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},l=(n(2057),n(12)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{attrs:{"no-body":""}},[n("b-card-header",{staticClass:"d-flex"},[n("card-title",{attrs:{title:e.title?e.title:"Preview",subTitle:e.subTitle?e.subTitle:"Result:"}},[n("b-button-group",[n("b-button",{staticClass:"inverse",class:0==e.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(t){e.currentIdx=0}}},[e._v("Preview")]),e._v(" "),n("b-button",{staticClass:"inverse",class:1==e.currentIdx?"":"ig-ghost",attrs:{variant:"secondary"},on:{click:function(t){e.currentIdx=1}}},[e._v("Source")])],1),e._v(" "),n("div",[n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-code"})]),e._v(" "),n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-chevron-down"})]),e._v(" "),n("b-btn",{staticClass:"inverse  btn-square",attrs:{variant:"secondary"}},[n("i",{staticClass:"dripicons-cross"})])],1)],1)],1),e._v(" "),n("b-card-body",[e._t("default")],2)],1)}),[],!1,null,"2d341bba",null);t.a=component.exports},2877:function(e,t,n){"use strict";n.r(t);var o=n(293),l=n(2059),r={components:{TitlePage:o.a,CardComponent:l.a},layout:"admin",meta:{component:{tag:"b-table",bsLink:"https://bootstrap-vue.js.org/docs/components/table/#component-reference"}},methods:{rowClass:function(e,t){if(e)return"awesome"===e.status?"table-success":void 0},fullName:function(e){return"".concat(e.first," ").concat(e.last)},info:function(e,t,button){this.modalInfo.title="Row index: ".concat(t),this.modalInfo.content=JSON.stringify(e,null,2),this.$root.$emit("bv::show::modal","modalInfo",button)},resetModal:function(){this.modalInfo.title="",this.modalInfo.content=""},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1}},mounted:function(){this.totalRows=this.items.length},computed:{sortOptions:function(){return this.fields9.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},data:function(){return{fields3:["first_name","last_name","age"],items3:[{age:40,first_name:"Dickerson",last_name:"Macdonald"},{age:21,first_name:"Larsen",last_name:"Shaw"},{age:89,first_name:"Geneva",last_name:"Wilson"}],striped:!1,bordered:!1,borderless:!1,outlined:!1,small:!1,hover:!1,dark:!1,fixed:!1,footClone:!1,items9:[{isActive:!0,age:40,name:{first:"Dickerson",last:"Macdonald"}},{isActive:!1,age:21,name:{first:"Larsen",last:"Shaw"}},{isActive:!1,age:9,name:{first:"Mini",last:"Navarro"},_rowVariant:"success"},{isActive:!1,age:89,name:{first:"Geneva",last:"Wilson"}},{isActive:!0,age:38,name:{first:"Jami",last:"Carney"}},{isActive:!1,age:27,name:{first:"Essie",last:"Dunlap"}},{isActive:!0,age:40,name:{first:"Thor",last:"Macdonald"}},{isActive:!0,age:87,name:{first:"Larsen",last:"Shaw"},_cellVariants:{age:"danger",isActive:"warning"}},{isActive:!1,age:26,name:{first:"Mitzi",last:"Navarro"}},{isActive:!1,age:22,name:{first:"Genevieve",last:"Wilson"}},{isActive:!0,age:38,name:{first:"John",last:"Carney"}},{isActive:!1,age:29,name:{first:"Dick",last:"Dunlap"}}],fields9:[{key:"name",label:"Person Full name",sortable:!0,sortDirection:"desc"},{key:"age",label:"Person age",sortable:!0,class:"text-center"},{key:"isActive",label:"is Active"},{key:"actions",label:"Actions"}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null,modalInfo:{title:"",content:""},items8:[{name:"Stephen Hawking",id:1,type1:!1,type2a:!0,type2b:!1,type2c:!1,type3:!1},{name:"Johnny Appleseed",id:2,type1:!1,type2a:!0,type2b:!0,type2c:!1,type3:!1},{name:"George Washington",id:3,type1:!1,type2a:!1,type2b:!1,type2c:!1,type3:!0},{name:"Albert Einstein",id:4,type1:!0,type2a:!1,type2b:!1,type2c:!0,type3:!1},{name:"Isaac Newton",id:5,type1:!0,type2a:!0,type2b:!1,type2c:!0,type3:!1}],fields8:["name",{key:"id",label:"ID"},{key:"type1",label:"Type 1"},{key:"type2a",label:"Type 2A"},{key:"type2b",label:"Type 2B"},{key:"type2c",label:"Type 2C"},{key:"type3",label:"Type 3"}],fields7:[{key:"name",label:"Full Name",formatter:"fullName"},"age",{key:"sex",formatter:function(e){return e.charAt(0).toUpperCase()}},{key:"birthYear",label:"Calculated Birth Year",formatter:function(e,t,n){return(new Date).getFullYear()-n.age}}],items7:[{name:{first:"John",last:"Doe"},sex:"Male",age:42},{name:{first:"Jane",last:"Doe"},sex:"Female",age:36},{name:{first:"Rubin",last:"Kincade"},sex:"male",age:73},{name:{first:"Shirley",last:"Partridge"},sex:"female",age:62}],items6:[{text:"This is <i>escaped</i> content",html:'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>'}],items:[{age:40,first_name:"Dickerson",last_name:"Macdonald"},{age:21,first_name:"Larsen",last_name:"Shaw"},{age:89,first_name:"Geneva",last_name:"Wilson"},{age:38,first_name:"Jami",last_name:"Carney"}],fields5:["index",{key:"name",label:"Full Name"},"age","sex",{key:"nameage",label:"First name and age"}],items5:[{name:{first:"John",last:"Doe"},sex:"Male",age:42},{name:{first:"Jane",last:"Doe"},sex:"Female",age:36},{name:{first:"Rubin",last:"Kincade"},sex:"Male",age:73},{name:{first:"Shirley",last:"Partridge"},sex:"Female",age:62}],items4:[{"heading 1":"table cell","heading 2":"table cell","heading 3":"table cell","heading 4":"table cell","heading 5":"table cell","heading 6":"table cell","heading 7":"table cell","heading 8":"table cell","heading 9":"table cell","heading 10":"table cell"},{"heading 1":"table cell","heading 2":"table cell","heading 3":"table cell","heading 4":"table cell","heading 5":"table cell","heading 6":"table cell","heading 7":"table cell","heading 8":"table cell","heading 9":"table cell","heading 10":"table cell"},{"heading 1":"table cell","heading 2":"table cell","heading 3":"table cell","heading 4":"table cell","heading 5":"table cell","heading 6":"table cell","heading 7":"table cell","heading 8":"table cell","heading 9":"table cell","heading 10":"table cell"}],fields:{last_name:{label:"Person last name",sortable:!0},first_name:{label:"Person first name",sortable:!1},city:{key:"address.city",label:"City",sortable:!0},"address.country":{label:"Country",sortable:!0}},items2:[{age:40,first_name:"Dickerson",last_name:"Macdonald",address:{country:"USA",city:"New York"}},{age:21,first_name:"Larsen",last_name:"Shaw",address:{country:"Canada",city:"Toronto"}},{age:89,first_name:"Geneva",last_name:"Wilson",address:{country:"Australia",city:"Sydney"}},{age:38,first_name:"Jami",last_name:"Carney",address:{country:"England",city:"London"}}]}}},c=n(12),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("title-page",{attrs:{title:"Tables"}},[n("p",{staticClass:"bd-lead"},[e._v("For displaying tabular data, "),n("code",[e._v("<b-table>")]),e._v(" supports pagination, filtering, sorting, custom\n            rendering, various style options, events, and asynchronous data.")])]),e._v(" "),n("card-component",[n("b-table",{attrs:{striped:"",hover:"",items:e.items}})],1),e._v(" "),n("title-page",{attrs:{title:"Fields as an object"}},[n("p",[e._v("Also, fields can be a an object providing similar control over the fields as the "),n("em",[e._v("array of objects")]),e._v("\n            above does. Only columns listed in the fields object will be shown. The order of the fields will\n            typically be in the order they were defined in the object, although "),n("strong",[e._v("field order is not guaranteed\n                (this may cause issues with Server Side Rendering and client rehydration)")]),e._v(".")])]),e._v(" "),n("card-component",[n("div",[n("b-table",{attrs:{striped:"",hover:"",small:"",items:e.items2,fields:e.fields}})],1)]),e._v(" "),n("title-page",{attrs:{title:"Basic table styles"}}),e._v(" "),n("card-component",[n("b-form-group",{attrs:{label:"Table Options"}},[n("b-form-checkbox",{attrs:{inline:""},model:{value:e.striped,callback:function(t){e.striped=t},expression:"striped"}},[e._v("Striped")]),e._v(" "),n("b-form-checkbox",{attrs:{inline:""},model:{value:e.bordered,callback:function(t){e.bordered=t},expression:"bordered"}},[e._v("Bordered")]),e._v(" "),n("b-form-checkbox",{attrs:{inline:""},model:{value:e.borderless,callback:function(t){e.borderless=t},expression:"borderless"}},[e._v("Borderless")]),e._v(" "),n("b-form-checkbox",{attrs:{inline:""},model:{value:e.outlined,callback:function(t){e.outlined=t},expression:"outlined"}},[e._v("Outlined")]),e._v(" "),n("b-form-checkbox",{attrs:{inline:""},model:{value:e.small,callback:function(t){e.small=t},expression:"small"}},[e._v("Small")]),e._v(" "),n("b-form-checkbox",{attrs:{inline:""},model:{value:e.hover,callback:function(t){e.hover=t},expression:"hover"}},[e._v("Hover")]),e._v(" "),n("b-form-checkbox",{attrs:{inline:""},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}},[e._v("Dark")]),e._v(" "),n("b-form-checkbox",{attrs:{inline:""},model:{value:e.fixed,callback:function(t){e.fixed=t},expression:"fixed"}},[e._v("Fixed")]),e._v(" "),n("b-form-checkbox",{attrs:{inline:""},model:{value:e.footClone,callback:function(t){e.footClone=t},expression:"footClone"}},[e._v("Foot Clone")])],1),e._v(" "),n("b-table",{attrs:{striped:e.striped,bordered:e.bordered,borderless:e.borderless,outlined:e.outlined,small:e.small,hover:e.hover,dark:e.dark,fixed:e.fixed,"foot-clone":e.footClone,items:e.items3,fields:e.fields3}})],1),e._v(" "),n("title-page",{attrs:{title:"Row Styling"}},[n("p",[e._v("You can also style every row using the "),n("code",[e._v("tbody-tr-class")]),e._v(" prop")])]),e._v(" "),n("card-component",[n("b-table",{attrs:{items:e.items,fields:e.fields,"tbody-tr-class":e.rowClass}})],1),e._v(" "),n("title-page",{attrs:{title:"Responsive tables"}},[n("p",[e._v("Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive\n            across all viewports by setting the prop "),n("code",[e._v("responsive")]),e._v(" to "),n("code",[e._v("true")]),e._v(". Or, pick a maximum breakpoint with\n            which to have a responsive table up to by setting the prop "),n("code",[e._v("responsive")]),e._v(" to one of the breakpoint\n            values: "),n("code",[e._v("sm")]),e._v(", "),n("code",[e._v("md")]),e._v(", "),n("code",[e._v("lg")]),e._v(", or "),n("code",[e._v("xl")]),e._v(".")])]),e._v(" "),n("card-component",[n("b-table",{attrs:{responsive:"",items:e.items4}})],1),e._v(" "),n("title-page",{attrs:{title:"Stacked tables"}}),e._v(" "),n("card-component",[n("b-table",{attrs:{stacked:"",items:e.items}})],1),e._v(" "),n("title-page",{attrs:{title:"Scoped Field Slots"}},[n("p",[e._v("Scoped slots give you greater control over how the record data appears. If you want to add an extra\n            field which does not exist in the records, just add it to the "),n("code",[e._v("fields")]),e._v(" array, And then reference the\n            field(s) in the scoped slot(s).")])]),e._v(" "),n("card-component",[n("b-table",{attrs:{small:"",fields:e.fields5,items:e.items5},scopedSlots:e._u([{key:"index",fn:function(data){return[e._v("\n                "+e._s(data.index+1)+"\n            ")]}},{key:"name",fn:function(data){return[e._v("\n                "+e._s(data.value.first)+" "+e._s(data.value.last)+"\n            ")]}},{key:"nameage",fn:function(data){return[e._v("\n                "+e._s(data.item.name.first)+" is "+e._s(data.item.age)+" years old\n            ")]}}])})],1),e._v(" "),n("title-page",{attrs:{title:"Displaying raw HTML"}},[n("p",[e._v("By default "),n("code",[e._v("b-table")]),e._v(" escapes HTML tags in items data and results of formatter functions, if you need\n            to display raw HTML code in "),n("code",[e._v("b-table")]),e._v(", you should use "),n("code",[e._v("v-html")]),e._v(" directive on an element in a in\n            scoped field slot")])]),e._v(" "),n("card-component",[n("b-table",{attrs:{items:e.items6},scopedSlots:e._u([{key:"html",fn:function(data){return n("span",{domProps:{innerHTML:e._s(data.value)}})}}])})],1),e._v(" "),n("title-page",{attrs:{title:"Formatter callback"}},[n("p",[e._v("One more option to customize field output is to use formatter callback function. To enable this\n            field's property "),n("code",[e._v("formatter")]),e._v(" is used. Value of this property may be String or function reference. In\n            case of a String value, the function must be defined at the parent component's methods. Providing\n            formatter as a "),n("code",[e._v("Function")]),e._v(", it must be declared at global scope (window or as global mixin at Vue),\n            unless it has been bound to a "),n("code",[e._v("this")]),e._v(" context.")])]),e._v(" "),n("card-component",[n("b-table",{attrs:{fields:e.fields7,items:e.items7},scopedSlots:e._u([{key:"name",fn:function(data){return[n("a",{attrs:{href:"#"+data.value.replace(/[^a-z]+/i,"-").toLowerCase()}},[e._v(e._s(data.value))])]}}])})],1),e._v(" "),n("title-page",{attrs:{title:"Custom empty/emptyfiltered rendering via slots"}},[n("p",[e._v("Aside from using "),n("code",[e._v("empty-text")]),e._v(", "),n("code",[e._v("empty-filtered-text")]),e._v(", "),n("code",[e._v("empty-html")]),e._v(", and "),n("code",[e._v("empty-filtered-html")]),e._v(", it is\n            also possible to provide custom rendering for tables that have no data to display using named slots.")])]),e._v(" "),n("card-component",[n("b-table",{attrs:{fields:e.fields,items:e.items,"show-empty":""},scopedSlots:e._u([{key:"empty",fn:function(t){return[n("h4",[e._v(e._s(t.emptyText))])]}},{key:"emptyfiltered",fn:function(t){return[n("h4",[e._v(e._s(t.emptyFilteredText))])]}}])})],1),e._v(" "),n("title-page",{attrs:{title:"Adding additional rows to the header"}},[n("p",[e._v("If you wish to add additional rows to the header you may do so via the "),n("code",[e._v("thead-top")]),e._v(" slot. This slot\n            is inserted before the header cells row, and is not encapsulated by "),n("code",[e._v("<tr>..</tr>")]),e._v(" tags.")])]),e._v(" "),n("card-component",[n("b-table",{attrs:{items:e.items8,fields:e.fields8,responsive:"sm"},scopedSlots:e._u([{key:"thead-top",fn:function(data){return[n("tr",[n("th",{attrs:{colspan:"2"}},[e._v(" ")]),e._v(" "),n("th",[e._v("Type 1")]),e._v(" "),n("th",{attrs:{colspan:"3"}},[e._v("Type 2")]),e._v(" "),n("th",[e._v("Type 3")])])]}}])})],1),e._v(" "),n("title-page",{attrs:{title:"Complete Example"}},[n("div")]),e._v(" "),n("card-component",[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Filter"}},[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),e._v(" "),n("b-input-group-append",[n("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Clear")])],1)],1)],1)],1),e._v(" "),n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Sort"}},[n("b-input-group",[n("b-form-select",{attrs:{options:e.sortOptions},model:{value:e.sortBy,callback:function(t){e.sortBy=t},expression:"sortBy"}},[n("option",{attrs:{slot:"first"},domProps:{value:null},slot:"first"},[e._v("-- none --")])]),e._v(" "),n("b-form-select",{attrs:{slot:"append",disabled:!e.sortBy},slot:"append",model:{value:e.sortDesc,callback:function(t){e.sortDesc=t},expression:"sortDesc"}},[n("option",{domProps:{value:!1}},[e._v("Asc")]),e._v(" "),n("option",{domProps:{value:!0}},[e._v("Desc")])])],1)],1)],1),e._v(" "),n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Sort direction"}},[n("b-input-group",[n("b-form-select",{attrs:{slot:"append"},slot:"append",model:{value:e.sortDirection,callback:function(t){e.sortDirection=t},expression:"sortDirection"}},[n("option",{attrs:{value:"asc"}},[e._v("Asc")]),e._v(" "),n("option",{attrs:{value:"desc"}},[e._v("Desc")]),e._v(" "),n("option",{attrs:{value:"last"}},[e._v("Last")])])],1)],1)],1),e._v(" "),n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Per page"}},[n("b-form-select",{attrs:{options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1)],1),e._v(" "),n("b-table",{attrs:{"show-empty":"",stacked:"md",items:e.items9,fields:e.fields9,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"name",fn:function(t){return[e._v("\n                    "+e._s(t.value.first)+" "+e._s(t.value.last)+"\n                ")]}},{key:"isActive",fn:function(t){return[e._v("\n                    "+e._s(t.value?"Yes :)":"No :(")+"\n                ")]}},{key:"actions",fn:function(t){return[n("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(n){return e.info(t.item,t.index,n.target)}}},[e._v("\n                        Info modal\n                    ")]),e._v(" "),n("b-button",{attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v("\n                        "+e._s(t.detailsShowing?"Hide":"Show")+" Details\n                    ")])]}},{key:"row-details",fn:function(t){return[n("b-card",[n("ul",e._l(t.item,(function(t,o){return n("li",{key:o},[e._v(e._s(o)+": "+e._s(t))])})),0)])]}}])}),e._v(" "),n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1),e._v(" "),n("b-modal",{attrs:{id:"modal-info",title:e.modalInfo.title,"ok-only":""},on:{hide:e.resetModal}},[n("pre",[e._v(e._s(e.modalInfo.content))])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);