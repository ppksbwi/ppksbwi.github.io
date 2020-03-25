(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{2052:function(e,t,n){var content=n(2063);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("3f077036",content,!0,{sourceMap:!1})},2060:function(e,t,n){var content=n(2068);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("e72569da",content,!0,{sourceMap:!1})},2061:function(e,t,n){"use strict";var o={components:{ButtonIcon:n(2064).a},props:["previousUrl","nextUrl"],computed:{urlPrefix:function(){var e=this.$router.currentRoute.meta;return e.layout?"/"+e.layout:""}}},r=n(12),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex mt-auto"},[e.previousUrl?n("button-icon",{staticClass:" px-4",staticStyle:{"min-width":"110px"},attrs:{variant:"secondary",iconClass:"la la-angle-double-left",href:e.urlPrefix+e.previousUrl}},[e._v(" Previous ")]):e._e(),e._v(" "),e.nextUrl?n("button-icon",{staticClass:"ml-auto px-4",staticStyle:{"min-width":"110px"},attrs:{variant:"theme1",iconClass:"la la-angle-double-right",href:e.urlPrefix+e.nextUrl}},[e._v(" Next ")]):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},2062:function(e,t,n){"use strict";var o=n(2052);n.n(o).a},2063:function(e,t,n){(t=n(14)(!1)).push([e.i,".btn[data-v-2dddb347]{padding-right:10px;padding-left:8px}.btn[data-v-2dddb347],.btn i[data-v-2dddb347]{-webkit-box-align:center;align-items:center}.btn i[data-v-2dddb347]{margin-right:8px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}",""]),e.exports=t},2064:function(e,t,n){"use strict";var o={props:{variant:{default:"secondary"},iconClass:{default:"la la-comments"},textButton:{default:"Click Here"},size:{default:"md"},href:{default:null},btnClass:{default:"d-flex inverse"}}},r=(n(2062),n(12)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-button",{class:e.btnClass,attrs:{size:e.size,href:e.href,variant:e.variant},on:{click:function(t){t.preventDefault(),e.$emit("click"),e.$router.push(e.href)}}},[n("i",{class:e.iconClass}),e._v(" "),e._t("default",[e._v("\n        Button\n    ")])],2)}),[],!1,null,"2dddb347",null);t.a=component.exports},2065:function(e,t,n){"use strict";var o={components:{BottomBar:n(2061).a},props:["previousUrl","nextUrl"]},r=(n(2067),n(12)),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"section-page d-flex flex-column"},[this._t("default"),this._v(" "),t("bottom-bar",{staticClass:"btn-container py-4",attrs:{previousUrl:this.previousUrl,nextUrl:this.nextUrl}})],2)}),[],!1,null,"6def211a",null);t.a=component.exports},2067:function(e,t,n){"use strict";var o=n(2060);n.n(o).a},2068:function(e,t,n){(t=n(14)(!1)).push([e.i,".ig-content-view[data-v-6def211a]{height:auto!important}.btn-container[data-v-6def211a]{border-top:1px solid var(--theme1-mixed)}h2[data-v-6def211a]{color:var(--theme1);font-weight:600;font-size:30px;padding-bottom:1rem!important;padding-top:.25rem!important}ul.ig-list li[data-v-6def211a]{display:-webkit-box;display:flex;padding:8px}ul.ig-list li[data-v-6def211a]>:first-child{flex-basis:160px;flex-shrink:0;flex-wrap:0;background-color:var(--primary-mixed);color:var(--primary);margin-right:10px;padding:4px 4px 4px 14px;font-weight:600;border-radius:8px;min-height:62px}ul.ig-list li[data-v-6def211a]>:first-child,ul.ig-list li[data-v-6def211a]>:last-child{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}ul.ig-list li[data-v-6def211a]>:last-child{padding:4px}",""]),e.exports=t},2337:function(e,t,n){"use strict";n.r(t);var o=n(293),r=n(2061),l=n(2065),c={components:{TitlePage:o.a,BottomBar:r.a,SectionContainer:l.a},layout:"admin"},d=n(12),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section-container",{attrs:{previousUrl:"/admin/doc/client/new-component",nextUrl:"/admin/doc/server/new-micro-service"}},[n("title-page",{attrs:{title:"Why Feathers?"}},[n("div")]),e._v(" "),n("div",{staticClass:"section-body"},[n("p",[e._v("\n            This development kit can be used with any server technology, however, to make your life easier, we have embarked on our server framework solution that can enhance your entire development cycle.\n        ")]),e._v(" "),n("p",[e._v('\n            Feathers provides a lot of the things that you need for building modern web and mobile applications. Here are some of the things that you get out of the box with Feathers. All of them are optional so you can choose exactly what you need. No more, no less. We like to think of Feathers as a "batteries included but easily swappable" framework. ')]),n("p"),e._v(" "),n("p")]),e._v(" "),n("title-page",{attrs:{title:"Feathers Features"}},[n("div")]),e._v(" "),n("div",{staticClass:"section-body"},[n("div",{staticClass:"col col-12 col-8-tablet center-element"},[n("ul",{staticClass:"ig-list"},[n("li",[n("div",[e._v("Instant REST APIs")]),e._v(" "),n("div",[e._v("Feathers automatically provides REST APIs for all your services. This industry best practice makes it easy\n                        for mobile applications, a web front-end and other developers to communicate with your application.")])]),e._v(" "),n("li",[n("div",[e._v("Unparalleled Database Support")]),e._v(" "),n("div",[e._v("With Feathers service adapters you can connect to all of the most popular databases, and query them with a\n                        unified interface no matter which one you use. This makes it easy to swap databases and use entirely different\n                        DBs in the same app without changing your application code.")])]),e._v(" "),n("li",[n("div",[e._v("Real Time")]),e._v(" "),n("div",[e._v("Feathers services can notify clients when something has been created, updated or removed. To get even better\n                        performance, you can communicate with your services through websockets, by sending and receiving data directly.")])]),e._v(" "),n("li",[n("div",[e._v("Cross-Cutting Concerns")]),e._v(" "),n("div",[e._v('Using "hooks" you have an extremely flexible way to share common functionality or '),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-cutting_concern",target:"_blank"}},[e._v("concerns")]),e._v(". Keeping with the Unix philosophy, these hooks are small functions that do one\n                        thing and are easily tested but can be chained to create complex processes.")])]),e._v(" "),n("li",[n("div",[e._v("Universal Usage")]),e._v(" "),n("div",[e._v("Services and hooks are a powerful and flexible way to build full stack applications. In addition to the server,\n                        these constructs also work incredibly well on the client. That's why Feathers works the same in NodeJS, the\n                        browser and React Native.\n                    ")])]),e._v(" "),n("li",[n("div",[e._v("Authentication")]),e._v(" "),n("div",[e._v("Almost every app needs authentication so Feathers comes with support for email/password, OAuth and Token (JWT)\n                        authentication out of the box.")])]),e._v(" "),n("li",[n("div",[e._v("Pagination")]),e._v(" "),n("div",[e._v("Today's applications are very data rich so most of the time you cannot load all the data for a resource all\n                        at once. Therefore, Feathers gives you pagination for every service from the start.")])]),e._v(" "),n("li",[n("div",[e._v("Error Handling")]),e._v(" "),n("div",[e._v("Feathers removes the pain of defining errors and handling them. Feathers services automatically return appropriate\n                        errors, including validation errors, and return them to the client in an easily consumable format.")])])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);