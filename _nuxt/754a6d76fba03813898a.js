(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2069:function(t,e,n){var content=n(2079);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("00a18ce9",content,!0,{sourceMap:!1})},2076:function(t,e,n){"use strict";n(30);var r=n(45),o=n.n(r),c={props:{height:{default:40},width:{default:40},offset:{default:-25},insetBorder:{default:1},variant:{default:"theme3"},unit:{default:"px"},users:{default:function(){return[]}}},mounted:function(){o.a.seed(4)},methods:{getNoImgBg:function(t){if(!t){var e=o.a.random.number({min:1,max:this.variants.length-1});return"inverse bg-"+this.variants[e]+" text-"+this.variants[e]}return t},currentUsers:function(){return 0===this.users.length?this.getRandomUsers():this.users},getRandomUsers:function(t){for(var e=[],n=o.a.random.number({min:1,max:3}),i=0;i<n;i++)e.push(this.getRandomUser(i));return e},getRandomUser:function(t){var e=t%10,n=t%this.variants.length;return{id:t,firstName:o.a.name.firstName(),lastName:o.a.name.lastName(),bgVariant:"inverse bg-"+this.variants[n],img:t%3==0?null:"/img/user/".concat(e,".jpg")}},getInitials:function(t){var e=t.firstName+" "+t.lastName,n=e[0].substring(0,1).toUpperCase();return e.length>1&&(n+=e[e.length-1].substring(0,1).toUpperCase()),n}},data:function(){return{variants:["primary","warning","danger","secondary","secondary","info"]}},computed:{spanStyle:function(){return{height:this.height+this.unit,width:this.width+this.unit,marginLeft:this.offset+this.unit}},imageStyle:function(){return{lineHeight:"inherit",height:this.height-2*this.insetBorder+this.unit,width:this.width-2*this.insetBorder+this.unit}}}},d=(n(2078),n(12)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatars"},t._l(t.currentUsers(),(function(e,i){return n("span",{key:i,style:t.spanStyle},[e.img?n("img",{staticClass:"avatar",style:t.imageStyle,attrs:{title:e.firstName+" "+e.lastName,src:e.img}}):n("div",{staticClass:"avatar avatar-text text-theme1inv h6",class:t.getNoImgBg(e.bgVariant),style:t.imageStyle,attrs:{title:e.firstName+" "+e.lastName}},[n("span",[t._v(t._s(t.getInitials(e))+"\n            ")])])])})),0)}),[],!1,null,"b4fa192e",null);e.a=component.exports},2078:function(t,e,n){"use strict";var r=n(2069);n.n(r).a},2079:function(t,e,n){(e=n(14)(!1)).push([t.i,".avatar-text[data-v-b4fa192e]{font-size:.6rem;font-weight:700;text-align:center;border:3px solid var(--theme1inv)!important}.avatar[data-v-b4fa192e]{border:3px solid var(--theme1inv)}.avatar span[data-v-b4fa192e]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""]),t.exports=e},2129:function(t,e,n){var content=n(2402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0236a43b",content,!0,{sourceMap:!1})},2130:function(t,e,n){var content=n(2404);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("340762f8",content,!0,{sourceMap:!1})},2401:function(t,e,n){"use strict";var r=n(2129);n.n(r).a},2402:function(t,e,n){(e=n(14)(!1)).push([t.i,'[data-v-047a10c2] ::v-deep .cv-header{border:none;padding-bottom:4px}[data-v-047a10c2] ::v-deep .cv-header .cv-header-nav{display:-webkit-box;display:flex}[data-v-047a10c2] ::v-deep .cv-header button{background-color:var(--theme1-mixed);font-size:.8rem;color:var(--theme1);border-style:none;margin:0 2px;padding:10px;line-height:20px}[data-v-047a10c2] ::v-deep .cv-header button.nextYear,[data-v-047a10c2] ::v-deep .cv-header button.previousYear{display:none}[data-v-047a10c2] ::v-deep .cv-header button.nextPeriod,[data-v-047a10c2] ::v-deep .cv-header button.previousPeriod{font-weight:800;font-size:18px}[data-v-047a10c2] .cv-wrapper{padding:5px}[data-v-047a10c2] .cv-day-number{font-weight:700;font-size:120%}[data-v-047a10c2] .cv-event{background-color:var(--theme1-mixed);color:var(--theme1)}[data-v-047a10c2] .cv-day,[data-v-047a10c2] .cv-event,[data-v-047a10c2] .cv-header-day,[data-v-047a10c2] .cv-header-days,[data-v-047a10c2] .cv-week,[data-v-047a10c2] .cv-weeks{border-color:var(--theme1-mixed)}.calendar-parent[data-v-047a10c2]{width:100%;height:100%}.cv-wrapper.period-month.periodCount-2 .cv-week[data-v-047a10c2],.cv-wrapper.period-month.periodCount-3 .cv-week[data-v-047a10c2],.cv-wrapper.period-year .cv-week[data-v-047a10c2]{min-height:6rem}.theme-default .cv-event.birthday[data-v-047a10c2]{background-color:#e0f0e0;border-color:#d7e7d7}.theme-default .cv-event.birthday[data-v-047a10c2]:before{content:"🎂";margin-right:.5em}.cv-wrapper.holiday-us-traditional .d2015-04-05 .cv-day-number[data-v-047a10c2]:before,.cv-wrapper.holiday-us-traditional .d2016-03-27 .cv-day-number[data-v-047a10c2]:before,.cv-wrapper.holiday-us-traditional .d2017-04-16 .cv-day-number[data-v-047a10c2]:before,.cv-wrapper.holiday-us-traditional .d2018-04-01 .cv-day-number[data-v-047a10c2]:before,.cv-wrapper.holiday-us-traditional .d2019-04-21 .cv-day-number[data-v-047a10c2]:before,.cv-wrapper.holiday-us-traditional .d2020-04-12 .cv-day-number[data-v-047a10c2]:before,.cv-wrapper.holiday-us-traditional .d2021-04-04 .cv-day-number[data-v-047a10c2]:before,.cv-wrapper.holiday-us-traditional .d2022-04-17 .cv-day-number[data-v-047a10c2]:before,.cv-wrapper.holiday-us-traditional .d2023-04-09 .cv-day-number[data-v-047a10c2]:before{content:"✝"}.cv-wrapper.holiday-us-traditional .d05-05 .cv-day-number[data-v-047a10c2]:before{content:"🇲🇽"}.cv-wrapper.holiday-us-traditional .d10-31 .cv-day-number[data-v-047a10c2]:before{content:"🎃"}.cv-wrapper.holiday-us-official .d01-01 .cv-day-number[data-v-047a10c2]:before{content:"🍾"}.cv-wrapper.holiday-us-official .d07-04 .cv-day-number[data-v-047a10c2]:before{content:"🇺🇸"}.cv-wrapper.holiday-us-official .d11-11 .cv-day-number[data-v-047a10c2]:before{content:"🎖"}.cv-wrapper.holiday-us-official .d12-25 .cv-day-number[data-v-047a10c2]:before{content:"🎄"}.cv-wrapper.holiday-us-official.m01 .day.dow1.instance3 .cv-day-number[data-v-047a10c2]:before{content:"✌🏾"}.cv-wrapper.holiday-us-official.m02 .day.dow1.instance3 .cv-day-number[data-v-047a10c2]:before{content:"🍎"}.cv-wrapper.holiday-us-official.m05 .day.dow1.lastInstance .cv-day-number[data-v-047a10c2]:before{content:"🇺🇸"}.cv-wrapper.holiday-us-official.m09 .day.dow1.instance1 .cv-day-number[data-v-047a10c2]:before{content:"💪"}.cv-wrapper.holiday-us-official.m10 .day.dow1.instance2 .cv-day-number[data-v-047a10c2]:before{content:"⎈"}.cv-wrapper.holiday-us-official.m11 .day.dow4.instance4 .cv-day-number[data-v-047a10c2]:before{content:"🙏"}',""]),t.exports=e},2403:function(t,e,n){"use strict";var r=n(2130);n.n(r).a},2404:function(t,e,n){(e=n(14)(!1)).push([t.i,".calendar-container[data-v-2e07db71]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch;-webkit-box-pack:stretch;justify-content:stretch}#app[data-v-2e07db71]{-webkit-box-flex:1;flex-grow:1;height:100%}[data-v-2e07db71] .avatars{min-width:40px}",""]),t.exports=e},2793:function(t,e,n){"use strict";n.r(e);n(9),n(7),n(6),n(5),n(8);var r=n(0),o=(n(74),n(22)),c=n(52),d=n(295),l=n(2076),h=n(357),f=n(37),v=(n(17),n(42),n(133),n(223),{methods:{today:function(){return this.dateOnly(new Date)},beginningOfPeriod:function(t,e,n){switch(e){case"year":return new Date(t.getFullYear(),0);case"month":return new Date(t.getFullYear(),t.getMonth());case"week":return this.beginningOfWeek(t,n);default:return null}},daysOfWeek:function(t){var e=this;return Array(7).fill().map((function(n,i){return e.addDays(t,i)}))},addDays:function(t,e){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+e,t.getHours(),t.getMinutes(),t.getSeconds())},beginningOfWeek:function(t,e){return this.addDays(t,(e-t.getDay()-7)%-7)},endOfWeek:function(t,e){return this.addDays(this.beginningOfWeek(t,e),7)},beginningOfMonth:function(t){return new Date(t.getFullYear(),t.getMonth())},instanceOfMonth:function(t){return Math.ceil(t.getDate()/7)},incrementPeriod:function(t,e,n){return new Date(t.getFullYear()+("year"==e?n:0),t.getMonth()+("month"==e?n:0),t.getDate()+("week"==e?7*n:0))},paddedMonth:function(t){return("0"+String(t.getMonth()+1)).slice(-2)},paddedDay:function(t){return("0"+String(t.getDate())).slice(-2)},isoYearMonth:function(t){return t.getFullYear()+"-"+this.paddedMonth(t)},isoYearMonthDay:function(t){return this.isoYearMonth(t)+"-"+this.paddedDay(t)},isoMonthDay:function(t){return this.paddedMonth(t)+"-"+this.paddedDay(t)},formattedTime:function(t,e,n){if(0===t.getHours()&&0===t.getMinutes()&&0===t.getSeconds())return"";if(!this.supportsIntl()){var r=6e4*(new Date).getTimezoneOffset();return new Date(t-r).toISOString().slice(11,16)}return t.toLocaleTimeString(e,n)},formattedPeriod:function(t,e,n,r){var o=t.getFullYear()===e.getFullYear(),c=this.isSameMonth(t,e),d=!("year"===n)&&!("month"===n),s=[];return s.push(r[t.getMonth()]),d&&(s.push(" "),s.push(t.getDate())),o||(s.push(d?", ":" "),s.push(t.getFullYear())),c&&o?d&&s.push(" – "):(s.push(" – "),c||s.push(r[e.getMonth()]),d&&s.push(" ")),d?(s.push(e.getDate()),s.push(", ")):s.push(" "),s.push(e.getFullYear()),s.join("")},dayDiff:function(t,e){var n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=new Date(t.getFullYear(),t.getMonth(),t.getDate());return n.setUTCHours(0,0,0,0),r.setUTCHours(0,0,0,0),(n-r)/864e5},isSameDate:function(t,e){return 0===this.dayDiff(t,e)},isSameDateTime:function(t,e){return t.getTime()===e.getTime()},isSameMonth:function(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()},isPastMonth:function(t){return this.beginningOfMonth(t)<this.beginningOfMonth(this.today())},isFutureMonth:function(t){return this.beginningOfMonth(t)>this.beginningOfMonth(this.today())},isInFuture:function(t){return this.dateOnly(t)>this.today()},isInPast:function(t){return this.dateOnly(t)<this.today()},isLastInstanceOfMonth:function(t){return t.getMonth()!==this.addDays(t,7).getMonth()},isLastDayOfMonth:function(t){return t.getMonth()!==this.addDays(t,1).getMonth()},isSelectedDay:function(t){var e=this,n=Object.keys(this.dateClasses).find((function(n){return e.isSameDate(e.fromIsoStringToLocalDate(n),t)}));return n?this.dateClasses[n]:void 0},fromIsoStringToLocalDate:function(s){var t=s.split(/\D/).map((function(s){return Number(s)}));return t[1]--,Object(h.a)(Date,Object(f.a)(t))},toLocalDate:function(t){return"string"==typeof t?this.fromIsoStringToLocalDate(t):new Date(t)},dateOnly:function(t){var e=new Date(t);return e.setHours(0,0,0,0),e},languageCode:function(t){return t.substring(0,2)},supportsIntl:function(){return"undefined"!=typeof Intl},getFormattedMonthNames:function(t,e){if(!this.supportsIntl())return Array(12).fill("");var n=new Intl.DateTimeFormat(t,{month:e});return Array(12).fill().map((function(t,i){return n.format(new Date(2017,i,1))}))},getFormattedWeekdayNames:function(t,e,n){if(!this.supportsIntl())return Array(7).fill("");var r=new Intl.DateTimeFormat(t,{weekday:e});return Array(7).fill().map((function(t,i){return r.format(new Date(2017,0,(i+1+n)%7))}))},getDefaultBrowserLocale:function(){return"undefined"==typeof navigator?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language||navigator.browserLanguage).toLowerCase()},normalizeEvent:function(t,e){var n=t.classes?Array.isArray(t.classes)?Object(f.a)(t.classes):[t.classes]:[];return e&&n.push("isHovered"),{originalEvent:t,startDate:this.toLocalDate(t.startDate),endDate:this.toLocalDate(t.endDate||t.startDate),classes:n,title:t.title||"Untitled",id:t.id}}}});function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={components:{AvatarList:l.a},layout:"admin",mixins:[v],props:{events:Array},data:function(){return{showDate:this.thisMonth(1),message:"",startingDayOfWeek:0,disablePast:!1,disableFuture:!1,displayPeriodUom:"month",displayPeriodCount:1,showEventTimes:!0,newEventTitle:"",newEventStartDate:"",newEventEndDate:"",useDefaultTheme:!0,useHolidayTheme:!0,useTodayIcons:!1}},fetch:function(t){var e=t.store;t.params;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={query:{$sort:{startDate:-1},$limit:50}},t.next=3,e.dispatch("events/find",n);case 3:case"end":return t.stop()}}),t)})))()},computed:{},mounted:function(){this.newEventStartDate=this.isoYearMonthDay(this.today()),this.newEventEndDate=this.isoYearMonthDay(this.today())},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("events",{patchEvent:"patch"}),{getStyleTop:function(t){return{top:"calc( "+34*(t+1)+"px + 2px)"}},periodChanged:function(t,e){},thisMonth:function(t,e,n){var r=new Date;return new Date(r.getFullYear(),r.getMonth(),t,e||0,n||0)},onClickDay:function(t){this.message="You clicked: ".concat(t.toLocaleDateString())},onClickEvent:function(t){this.message="You clicked: ".concat(t.title)},setShowDate:function(t){this.message="Changing calendar view to ".concat(t.toLocaleDateString()),this.showDate=t},onDrop:function(t,e){this.message="You dropped ".concat(t.id," on ").concat(e.toLocaleDateString());var n=this.dayDiff(t.startDate,e);this.patchEvent([t.originalEvent._id,{startDate:this.addDays(t.startDate,n),endDate:this.addDays(t.endDate,n)}])}})},w=(n(2401),n(12)),D=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar-parent bg-theme1inv text-theme2"},[n("client-only",[n("calendar-view",{attrs:{events:t.events,"show-date":t.showDate,"time-format-options":{hour:"numeric",minute:"2-digit"},"enable-drag-drop":!0,"disable-past":t.disablePast,"disable-future":t.disableFuture,"show-event-times":t.showEventTimes,"display-period-uom":t.displayPeriodUom,"display-period-count":t.displayPeriodCount,"starting-day-of-week":t.startingDayOfWeek,"period-changed-callback":t.periodChanged,"current-period-label":t.useTodayIcons?"icons":""},on:{"drop-on-date":t.onDrop,"click-date":t.onClickDay,"click-event":t.onClickEvent},scopedSlots:t._u([{key:"header",fn:function(e){var r=e.headerProps;return n("calendar-view-header",{attrs:{"header-props":r},on:{input:t.setShowDate}})}},{key:"event",fn:function(e){var r=e.event;return n("div",{staticClass:"cv-event",class:r.classes,style:t.getStyleTop(r.eventRow),attrs:{title:"Multi-day event",draggable:"true"}},[t._v("\n\n                "+t._s(r.title)+"\n\n                "),n("avatar-list",{staticStyle:{float:"right",top:"4px"},attrs:{offset:-5,height:"28",width:"28"}})],1)}}])})],1)],1)}),[],!1,null,"047a10c2",null).exports;function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x={components:{TitleTop:d.a,Calendar:D},layout:"admin",fetch:function(t){var e=t.store;t.params;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={query:{$sort:{startDate:-1},$limit:50}},t.next=3,e.dispatch("events/find",n);case 3:case"end":return t.stop()}}),t)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("events",{findEventsInStore:"find"}),{events:function(){return this.findEventsInStore({}).data}}),meta:{page:{contentCentered:!0}}},k=(n(2403),Object(w.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"calendar-container"},[e("title-top",{attrs:{icon:"calendar",title:"Calendar (w/ real database access)",subTitle:"Test"}}),this._v(" "),e("div",{staticClass:"section-page",attrs:{id:"app"}},[e("calendar",{attrs:{events:this.events}})],1)],1)}),[],!1,null,"2e07db71",null));e.default=k.exports}}]);