(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{2128:function(t,n,e){var content=e(2400);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(15).default)("05940c56",content,!0,{sourceMap:!1})},2399:function(t,n,e){"use strict";var o=e(2128);e.n(o).a},2400:function(t,n,e){(n=e(14)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;padding-top:5vh;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=n},2876:function(t,n,e){"use strict";e.r(n);e(74);var o=e(22),r=e(41),c=e.n(r),l={layout:"admin",components:{},data:function(){return{show:!0,bannerList:[],bannerListLoading:!0,slide:0,sliding:null}},created:function(t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(n.apiUrl("banner/list"));case 2:e=t.sent,n.bannerListLoading=!1,n.bannerList=e.data.data;case 5:case"end":return t.stop()}}),t)})))()},methods:{testing:function(){this.printHelp(this.getConfiguration()),this.setConfiguration("smcc","smcchash")},onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},d=(e(2399),e(12)),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[t.bannerListLoading?e("content-loader",{attrs:{width:1024,height:768,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"}},[e("rect",{attrs:{x:"-2",y:"-2",rx:"5",ry:"5",width:"1024",height:"580"}})]):e("div",[t.checkPermission("master.notification.banner","BackendBanner.Index")?e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"768"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(n){t.slide=n},expression:"slide"}},t._l(t.bannerList,(function(n){return e("b-carousel-slide",{key:n.ID,attrs:{caption:n.Name,text:n.Content,"img-src":t.companyAsset(!1,"banner",n.Pic)}})})),1):t._e()],1),t._v(" "),e("button",{staticClass:"button--green",on:{click:t.testing}},[t._v("\n      testing\n    ")]),t._v(" "),e("h2",{staticClass:"subtitle mt-5"},[t._v("\n      My smashing Nuxt.js project with "+t._s(t.getConfiguration().user.Name)+"\n    ")])],1)])}),[],!1,null,null,null);n.default=component.exports}}]);