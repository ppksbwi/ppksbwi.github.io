(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{2052:function(e,t,r){var content=r(2063);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("3f077036",content,!0,{sourceMap:!1})},2060:function(e,t,r){var content=r(2068);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("e72569da",content,!0,{sourceMap:!1})},2061:function(e,t,r){"use strict";var n={components:{ButtonIcon:r(2064).a},props:["previousUrl","nextUrl"],computed:{urlPrefix:function(){var e=this.$router.currentRoute.meta;return e.layout?"/"+e.layout:""}}},o=r(12),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex mt-auto"},[e.previousUrl?r("button-icon",{staticClass:" px-4",staticStyle:{"min-width":"110px"},attrs:{variant:"secondary",iconClass:"la la-angle-double-left",href:e.urlPrefix+e.previousUrl}},[e._v(" Previous ")]):e._e(),e._v(" "),e.nextUrl?r("button-icon",{staticClass:"ml-auto px-4",staticStyle:{"min-width":"110px"},attrs:{variant:"theme1",iconClass:"la la-angle-double-right",href:e.urlPrefix+e.nextUrl}},[e._v(" Next ")]):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},2062:function(e,t,r){"use strict";var n=r(2052);r.n(n).a},2063:function(e,t,r){(t=r(14)(!1)).push([e.i,".btn[data-v-2dddb347]{padding-right:10px;padding-left:8px}.btn[data-v-2dddb347],.btn i[data-v-2dddb347]{-webkit-box-align:center;align-items:center}.btn i[data-v-2dddb347]{margin-right:8px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}",""]),e.exports=t},2064:function(e,t,r){"use strict";var n={props:{variant:{default:"secondary"},iconClass:{default:"la la-comments"},textButton:{default:"Click Here"},size:{default:"md"},href:{default:null},btnClass:{default:"d-flex inverse"}}},o=(r(2062),r(12)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-button",{class:e.btnClass,attrs:{size:e.size,href:e.href,variant:e.variant},on:{click:function(t){t.preventDefault(),e.$emit("click"),e.$router.push(e.href)}}},[r("i",{class:e.iconClass}),e._v(" "),e._t("default",[e._v("\n        Button\n    ")])],2)}),[],!1,null,"2dddb347",null);t.a=component.exports},2065:function(e,t,r){"use strict";var n={components:{BottomBar:r(2061).a},props:["previousUrl","nextUrl"]},o=(r(2067),r(12)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"section-page d-flex flex-column"},[this._t("default"),this._v(" "),t("bottom-bar",{staticClass:"btn-container py-4",attrs:{previousUrl:this.previousUrl,nextUrl:this.nextUrl}})],2)}),[],!1,null,"6def211a",null);t.a=component.exports},2067:function(e,t,r){"use strict";var n=r(2060);r.n(n).a},2068:function(e,t,r){(t=r(14)(!1)).push([e.i,".ig-content-view[data-v-6def211a]{height:auto!important}.btn-container[data-v-6def211a]{border-top:1px solid var(--theme1-mixed)}h2[data-v-6def211a]{color:var(--theme1);font-weight:600;font-size:30px;padding-bottom:1rem!important;padding-top:.25rem!important}ul.ig-list li[data-v-6def211a]{display:-webkit-box;display:flex;padding:8px}ul.ig-list li[data-v-6def211a]>:first-child{flex-basis:160px;flex-shrink:0;flex-wrap:0;background-color:var(--primary-mixed);color:var(--primary);margin-right:10px;padding:4px 4px 4px 14px;font-weight:600;border-radius:8px;min-height:62px}ul.ig-list li[data-v-6def211a]>:first-child,ul.ig-list li[data-v-6def211a]>:last-child{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}ul.ig-list li[data-v-6def211a]>:last-child{padding:4px}",""]),e.exports=t},2336:function(e,t,r){"use strict";r.r(t);var n=r(293),o=r(2061),l=r(2065),c={components:{TitlePage:n.a,BottomBar:o.a,SectionContainer:l.a},layout:"admin"},d=r(12),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section-container",{attrs:{previousUrl:"/admin/doc/server/why-feathers",nextUrl:"/admin/doc/other/what-is"}},[r("title-page",{attrs:{title:"Creating New Service"}},[r("div")]),e._v(" "),r("div",{staticClass:"section-body"},[r("p",[e._v("\n            In Feathers any API endpoint is represented as a service, which we already learned about in the basics guide.\n            To generate a new service, we can run the following command from the project root using the command line: ")]),r("p"),e._v(" "),r("pre",[r("code",[e._v("feathers generate service\n")])]),e._v(" "),r("p"),e._v(" "),r("p",[e._v("A series of questions will be asked in order for you to define the basic data of the service.")]),e._v(" "),r("p",[e._v("First we have to choose what kind of service we'd like to create. You can choose amongst many databases and ORMs but for this guide we will go with the default "),r("a",{attrs:{href:"https://github.com/louischatriot/nedb",target:"_blank"}},[e._v("NeDB")]),e._v(". NeDB is a database that stores its data locally in a file and requires no additional configuration or database server.")]),e._v(" "),r("p",[e._v("Next, when asked for the name of the service, enter "),r("code",[e._v("messages")]),e._v(". Then keep the default path ("),r("code",[e._v("/messages")]),e._v(") by pressing enter.")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("database connection string")]),e._v(" can also be answered with the default. (In this case of NeDB, this is the path where it should store its database files.)")])]),e._v(" "),r("title-page",{attrs:{title:"The generated files"}},[r("div")]),e._v(" "),r("div",{staticClass:"section-body"},[r("p",[e._v("As we can see, several files were created:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("src/services/messages/messages.service.js")]),e._v(" - The service setup file which registers the service in a "),r("a",{attrs:{href:"../basics/generator.html"}},[e._v("configure function")])]),e._v(" "),r("li",[r("code",[e._v("src/services/messages/messages.hooks.js")]),e._v(" - A file that returns an "),r("a",{attrs:{href:"../basics/hooks.html"}},[e._v("object with all hooks")]),e._v(" that should be registered on the service.")]),e._v(" "),r("li",[r("code",[e._v("src/models/messages.model.js")]),e._v(" - The model for our messages. Since we are using NeDB, this will simply instantiate the filesystem database.")]),e._v(" "),r("li",[r("code",[e._v("test/services/messages.test.js")]),e._v(" - A Mocha test for the service. Initially, it only tests that the service exists.")])])]),e._v(" "),r("title-page",{attrs:{title:"Learn More"}},[r("div")]),e._v(" "),r("div",{staticClass:"section-body"},[r("p",[e._v("If you are interested in going deeper into our optional backend, we strongly suggest that you read the official project documentation in the following external link:")]),e._v(" "),r("b-button",{staticClass:"inverse",attrs:{variant:"primary",target:"_blank",href:"https://docs.feathersjs.com/"}},[e._v("Feathers Backend\n        ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);