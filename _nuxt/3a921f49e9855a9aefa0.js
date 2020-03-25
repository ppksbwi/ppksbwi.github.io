(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2049:function(t,e,n){var content=n(2054);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4b9d3112",content,!0,{sourceMap:!1})},2051:function(t,e,n){"use strict";var r={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},o=(n(2053),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex w-100"},[n("div",{staticClass:"mr-auto"},[n("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),n("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),n("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[n("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",[t._v("First Action")]),t._v(" "),n("b-dropdown-item",[t._v("Second Action")]),t._v(" "),n("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);e.a=component.exports},2053:function(t,e,n){"use strict";var r=n(2049);n.n(r).a},2054:function(t,e,n){(e=n(14)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:-webkit-box;display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=e},2055:function(t,e,n){"use strict";var r={index:0};e.a={props:{title:{type:String,default:function(){return r.index++,"Chart Title "+r.index}},subtitle:{type:String,default:""},height:{type:String,default:"300px"},width:{type:String,default:"100%"}}}},2056:function(t,e,n){"use strict";var r={components:{},methods:{dispatchAction:function(data){this.$refs.chartEl.dispatchAction(data)},finished:function(t){this.$emit("finished",t)}},props:{options:{type:Object},height:{type:String,default:"400px"},width:{type:String,default:"100%"}}},o=n(12),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("v-chart",{ref:"chartEl",style:{height:this.height,width:this.width},attrs:{autoresize:"",theme:"default",options:this.options},on:{finished:this.finished}})],1)}),[],!1,null,null,null);e.a=component.exports},2070:function(t,e,n){var content=n(2081);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4c1c4fd6",content,!0,{sourceMap:!1})},2074:function(t,e,n){var content=n(2100);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("6fb725c2",content,!0,{sourceMap:!1})},2077:function(t,e,n){"use strict";var r={name:"ButtonGroup",props:{icon:{type:String,default:"dripicons-menu"},borderClass:{type:String,default:""},isCollapsed:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},buttonVariant:{type:String,default:"secondary"},buttonSize:{type:String,default:"sm"},buttonList:{type:Array,default:function(){return[{icon:"la la-phone",variant:"primary"},{icon:"la la-envelope ",variant:"warning"},{icon:"la la-comments",variant:"danger"}]}}},data:function(){return{isShowActions:!1}},methods:{showActions:function(){this.isShowActions=!0},hide:function(){this.isShowActions=!1}}},o=(n(2080),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isCollapsed?t._e():n("b-button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hide,expression:"hide"}],staticClass:"inverse btn-action",attrs:{variant:"secondary"},on:{click:t.showActions}},[n("i",{staticClass:"btn-icon",class:t.icon,staticStyle:{"font-size":"14px"}})]),t._v(" "),t.isShowActions||t.isCollapsed?n("b-button-group",{staticClass:"bg-theme1inv  p-2 container-actions shadow ig-rounded",class:{"position-absolute":!t.isCollapsed,shadow:!t.isCollapsed},attrs:{vertical:t.vertical}},t._l(t.buttonList,(function(button,e){return n("b-button",{key:e,staticClass:"inverse from-middle mx-1",class:t.borderClass,attrs:{size2:t.buttonSize,variant:button.variant?button.variant:"secondary"}},[n("i",{class:button.icon})])})),1):t._e()],1)}),[],!1,null,"1b38174f",null);e.a=component.exports},2080:function(t,e,n){"use strict";var r=n(2070);n.n(r).a},2081:function(t,e,n){(e=n(14)(!1)).push([t.i,".btn-action[data-v-1b38174f]{width:36px;height:36px}.btn-icon[data-v-1b38174f]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.container-actions[data-v-1b38174f]{z-index:2}.btn-group[data-v-1b38174f]{position:absolute;right:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}",""]),t.exports=e},2097:function(t,e,n){"use strict";var r={components:{SvgIcon:n(55).a}},o=(n(2099),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-theme1inv py-4 ig-p-1 ig-rounded shadow-1 mb-2 text-secondary"},[n("div",{staticClass:"d-flex"},[n("a",{attrs:{title:"Sanbox",target:"_blank",href:"https://www.sandbox.com/"}},[n("i",[n("svg-icon",{staticClass:"img-footer",attrs:{variant:"secondary",lighten:!1,icon:"html5"}})],1)]),t._v(" "),n("a",{attrs:{title:"Gitlab",target:"_blank",href:"https://gitlab.com/"}},[n("i",[n("svg-icon",{staticClass:"img-footer",attrs:{lighten:!1,variant:"secondary",icon:"git"}})],1)]),t._v(" "),n("a",{attrs:{title:"Github",target:"_blank",href:"https://github.com/"}},[n("i",[n("svg-icon",{staticClass:"img-footer",attrs:{lighten:!1,variant:"secondary",icon:"vue"}})],1)]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"ml-auto"},[t._v("Made it with "),n("i",{staticClass:"anticon anticon-heart",attrs:{"aria-label":"icon: heart"}},[n("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"heart",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}})])]),t._v(" by\n            "),t._m(1),t._v(" 2019")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-2"},[e("strong",[this._v("Version")]),this._v(" 1.01")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"text-secondary",attrs:{href:"http://ignity.co"}},[e("strong",[this._v("Ignity.co")])])}],!1,null,"b52c9a14",null);e.a=component.exports},2098:function(t,e,n){"use strict";var r={data:function(){return{rows:30,perPage:10,currentPage:1}},props:{align:{type:String,default:"right"},size:{type:String,default:"md"}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.rows,"per-page":t.perPage,"hide-goto-end-buttons":"",size:t.size,align:t.align},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}},[n("span",{attrs:{slot:"prev-text"},slot:"prev-text"},[n("i",{staticClass:"la la-angle-left"})]),t._v(" "),n("span",{attrs:{slot:"next-text"},slot:"next-text"},[n("i",{staticClass:"la la-angle-right"})])])}),[],!1,null,null,null);e.a=component.exports},2099:function(t,e,n){"use strict";var r=n(2074);n.n(r).a},2100:function(t,e,n){(e=n(14)(!1)).push([t.i,".img-footer[data-v-b52c9a14]{height:30px;width:30px;margin-right:5px}",""]),t.exports=e},2133:function(t,e,n){var content=n(2410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("b5184e8e",content,!0,{sourceMap:!1})},2134:function(t,e,n){var content=n(2412);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("203c8010",content,!0,{sourceMap:!1})},2331:function(t,e,n){"use strict";n(30);var r=n(45),o=n.n(r),c=n(2077),l=n(2051),d=n(2098),f=n(445),v=(n(17),{props:{maxValue:{type:Number,default:5},value:{type:Number,default:3}}}),h=(n(2409),n(12)),m=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.maxValue,(function(i){return n("span",{key:i,staticClass:"star fa fa-star",class:i<t.value?"checked":""})})),0)}),[],!1,null,"5411bc25",null).exports,x=n(55),w={components:{ButtonGroup:c.a,CardTitle:l.a,CardPagination:d.a,AvatarIcon:f.a,Rating:m,SvgIcon:x.a},methods:{classValue:function(t){return"text-"+(t>49?"success":"danger")}},data:function(){var t=[];o.a.seed(1);for(var e=["secondary","secondary","secondary","primary","primary","info","info"],n=["mobile","chat","flame","envelope","card"],i=0;i<5;i++)t.push({i:i+2,name:o.a.name.firstName(),mail:o.a.internet.email(),class:"text-"+e[i],variant:e[i],value:100*o.a.random.number({min:1,max:10}),icon:n[i]});return{contacts:t}}},y=(n(2411),Object(h.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"no-body":""}},[n("b-card-header",[n("card-title",{attrs:{title:"Latest Leads",subTitle:"Check Here"}},[n("b-button",{staticClass:"inverse",attrs:{icon:"",variant:"primary"}},[t._v(" New Lead\n            ")])],1)],1),t._v(" "),n("b-card-body",[n("div",{staticClass:"contact-widget"},t._l(t.contacts,(function(e,i){return n("a",{key:i,staticClass:"flex-wrap flex-sm-nowrap",attrs:{href:"#"}},[n("div",{staticClass:"item-1 user-img  text-primary img-container overlay avatar-container"},[n("avatar-icon",{staticClass:"opacity-7",attrs:{variant2:e.variant,icon:e.i+""}}),t._v(" "),n("div",{staticClass:"avatar-min-icon"},[n("svg-icon",{staticClass:"mixed-2",attrs:{icon:e.icon,height:"15px",width:"15px",lighten:!1,variant:"primary"}})],1)],1),t._v(" "),n("div",{staticClass:"item-2 mail-contnet"},[n("div",{staticClass:"name"},[t._v(t._s(e.name)+"\n\n                    ")]),t._v(" "),n("span",{staticClass:"mail-desc text-lowercase text-theme1 mixed-1"},[t._v("\n                        "+t._s(e.name)+"@gmail.com\n                    ")])]),t._v(" "),n("div",{staticClass:"item-3 d-flex flex-wrap my-2 my-sm-3"},[n("div",{},[n("b-badge",{staticClass:"ig-badge inverse",attrs:{variant:e.variant,pill:""}},[t._v("\n                            $"+t._s(e.value)+"+\n                        ")])],1),t._v(" "),n("div",{staticClass:"ml-3"},[n("rating",{attrs:{value:e.i%4+2}})],1)])])})),0)]),t._v(" "),n("b-card-footer",[n("card-pagination")],1)],1)}),[],!1,null,"33fbbcf6",null));e.a=y.exports},2409:function(t,e,n){"use strict";var r=n(2133);n.n(r).a},2410:function(t,e,n){(e=n(14)(!1)).push([t.i,".star[data-v-5411bc25]{color:var(--secondary-mixed-1)}.star.checked[data-v-5411bc25]{color:var(--primary)}",""]),t.exports=e},2411:function(t,e,n){"use strict";var r=n(2134);n.n(r).a},2412:function(t,e,n){(e=n(14)(!1)).push([t.i,".item-1[data-v-33fbbcf6]{-webkit-box-flex:0;flex-grow:0}.item-2[data-v-33fbbcf6]{-webkit-box-flex:4;flex-grow:4}.item-2[data-v-33fbbcf6],.item-3[data-v-33fbbcf6]{flex-basis:140px}.item-3[data-v-33fbbcf6]{-webkit-box-flex:0;flex-grow:0;-webkit-box-pack:end;justify-content:flex-end;flex-shrink:0}.name[data-v-33fbbcf6]{font-size:.9rem;font-weight:500}.avatar-min-icon[data-v-33fbbcf6]{right:-2px;bottom:-2px;width:22px;height:22px;position:absolute;background-color:var(--theme1-mixed);border-radius:100%;border:2px solid var(--theme1inv)}.avatar-min-icon>div[data-v-33fbbcf6]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:.8}.contact-widget a .user-img img[data-v-33fbbcf6]{width:100%}.contact-widget a .user-img .online[data-v-33fbbcf6]{background:currentColor}.contact-widget a .user-img .profile-status[data-v-33fbbcf6]{border:2px solid #fff;border-radius:50%;display:inline-block;height:10px;left:28px;position:absolute;top:38px;width:10px}.contact-widget>a .user-img[data-v-33fbbcf6]{margin-bottom:0!important}.contact-widget a .user-img[data-v-33fbbcf6]{width:45px;position:relative;display:inline-block;margin:0 10px 15px 0}.contact-widget a div[data-v-33fbbcf6]{white-space:normal}.contact-widget a[data-v-33fbbcf6]{border-bottom:1px solid var(--theme-border-color);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;text-decoration:none;padding:.75rem}.contact-widget a[data-v-33fbbcf6]:last-child{border-bottom:0}.add-ct-btn[data-v-33fbbcf6]{position:absolute;right:14px;top:14px}.contact-widget[data-v-33fbbcf6]{position:relative}.contact-widget a .mail-contnet[data-v-33fbbcf6]{display:inline-block;font-size:12px;vertical-align:middle}",""]),t.exports=e}}]);