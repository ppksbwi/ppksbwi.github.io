(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{2282:function(e,t,n){var content=n(2669);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("1df864f6",content,!0,{sourceMap:!1})},2668:function(e,t,n){"use strict";var r=n(2282);n.n(r).a},2669:function(e,t,n){(t=n(14)(!1)).push([e.i,".container{margin:0 auto;min-height:100vh;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),e.exports=t},2880:function(e,t,n){"use strict";n.r(t);n(298),n(112),n(7),n(6),n(74);var r=n(22),c=n(41),o=n.n(c),d={layout:"admin",components:{},data:function(){return{item:{},attendanceList:[],circleList:[],items:[],isLoading:!1,model:null,search:null}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(e.apiUrl("event/"+e.$route.params.id+"/id-encrypt"));case 2:return n=t.sent,e.item=n.data.data,e.getAttendanceList(),e.checkAttendance(e.getConfiguration().user.ID)&&alert("You're going to attend this Event"),t.next=8,o.a.get(e.apiUrl("event/"+e.$route.params.id+"/id-encrypt","&with[0]=Circle.Childs.Members&with[1]=Circle.Members"));case 8:r=t.sent,e.circleList=r.data.data.Circle.Members;case 10:case"end":return t.stop()}}),t)})))()},methods:{getAttendanceList:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.attendanceList=[],t.next=3,o.a.get(e.apiUrl("attendance/list","with[0]=User&filters[]=event_id|=|"+e.item.ID+"|and|god"));case 3:n=t.sent,e.attendanceList=n.data.data,console.log(e.attendanceList);case 6:case"end":return t.stop()}}),t)})))()},checkAttendance:function(e){var t,n=!0,r=!1,c=void 0;try{for(var o,d=this.attendanceList[Symbol.iterator]();!(n=(o=d.next()).done);n=!0)if(t=o.value,console.log(t.UserID+" = "+t.Status),e==t.UserID&&1==t.Status)return!0}catch(e){r=!0,c=e}finally{try{n||null==d.return||d.return()}finally{if(r)throw c}}return!1},addAttendance:function(e,t,n){var c=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!=n){r.next=10;break}if(0!=c.checkAttendance(e.ID)){r.next=5;break}t=2,r.next=10;break;case 5:return t=-2,r.next=8,o.a.patch(c.apiUrl("attendance/"+e.IDEncrypt,"delete=1"),{eventID:c.item.IDEncrypt,userID:e.IDEncrypt});case 8:d=r.sent,c.checkApiResponse(d.data);case 10:if(-2==t){r.next=15;break}return r.next=13,o.a.post(c.apiUrl("attendance"),{eventID:c.item.IDEncrypt,userID:e.IDEncrypt,status:t});case 13:l=r.sent,c.checkApiResponse(l.data);case 15:c.getAttendanceList(),0==n&&(c.model=null,c.$bvModal.hide("addAttendance"));case 17:case"end":return r.stop()}}),r)})))()},edit:function(){this.$router.push({name:"event-form",params:{id:this.$route.params.id}})},addGuest:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post(e.apiUrl("user","guest=true"),{Name:e.search,CircleID:e.getConfiguration().user.CircleID});case 2:n=t.sent,e.checkApiResponse(n.data),e.$bvModal.hide("addAttendance");case 5:case"end":return t.stop()}}),t)})))()}},watch:{search:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.items.length>0&&(t.items=null),!t.isLoading){n.next=3;break}return n.abrupt("return");case 3:return t.isLoading=!0,n.next=6,o.a.get(t.apiUrl("user/list","/&guest=true&key="+e+"&with[0]=Circles"));case 6:r=n.sent,console.log(r.data.data),t.items=r.data.data,t.isLoading=!1;case 10:case"end":return n.stop()}}),n)})))()}}},l=(n(2668),n(12)),m=n(2670),v=n.n(m),f=n(2781),h=n(2783),_=n(2353),A=n(2324),k=n(2322),w=n(2881),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-img",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{src:e.companyAsset(!1,"event",e.item.Pic),"img-alt":"Image","img-top":"",tag:"article"}}),e._v(" "),n("br"),e._v(" "),n("b",[e._v(" "+e._s(e.item.Name)+" ")]),e._v(" "),n("br"),e._v("\n  Date : "+e._s(e.compareDateBetween(e.item.StartAt,e.item.EndAt))+" "),n("br"),e._v("\n  Time : "+e._s(e.timeBetween(e.item.StartAt,e.item.EndAt))+" "),n("br"),e._v("\n  Place : "+e._s(e.item.Place)+" "),n("br"),e._v("\n  Description : "+e._s(e.item.Content)+" "),n("br"),e._v("\n  Will you join this event?\n  "),n("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:function(t){e.addAttendance(e.getConfiguration().user,1,1)}}},[e._v("Yes")]),e._v(" "),n("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:function(t){e.addAttendance(e.getConfiguration().user,0,1)}}},[e._v("No")]),e._v(" "),n("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:function(t){e.addAttendance(e.getConfiguration().user,-1,1)}}},[e._v("Maybe")]),e._v(" "),n("br"),e._v("\n\n  Attendance :\n  "),e.item.AttendeeCount>0?n("span",[e._v(e._s(e.item.AttendeeCount)+"\n    "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.attendance",modifiers:{attendance:!0}}],attrs:{pill:"",variant:"outline-secondary"}},[e._v("Show")])],1):n("span",[e._v("0")]),e._v(" "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.addAttendance",modifiers:{addAttendance:!0}}],attrs:{pill:"",variant:"outline-secondary"}},[e._v("Add Attendance")]),e._v(" "),n("br"),e._v("\n\n  Services :\n  "),e.item.Services?n("span",[e._v(e._s(e.item.Services))]):n("span",[e._v("0")]),n("br"),e._v(" "),n("b-button",{attrs:{variant:"warning"},on:{click:function(t){return e.edit()}}},[e._v("Edit")]),e._v(" "),n("b-modal",{attrs:{id:"attendance",title:"Attendance List"}},e._l(e.attendanceList,(function(t){return n("li",{key:t.ID},[(t.Status=1)?n("span",[n("b",[e._v(e._s(t.Name)+" ")])]):e._e()])})),0),e._v(" "),n("b-modal",{attrs:{id:"addAttendance",title:"Add Attendance"}},[n("v-app",[n("v-card",[n("v-card-text",[n("v-autocomplete",{attrs:{items:e.items,loading:e.isLoading,"search-input":e.search,"cache-items":"","hide-selected":"","item-text":"Name","item-value":"Member",label:"Search Member",placeholder:"Start typing to Search","prepend-icon":"mdi-magnify","return-object":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([null!=e.search?{key:"no-data",fn:function(){return[e._v("\n              No User Found "),n("br"),e._v(" "),n("b-button",{attrs:{pill:"",variant:"outline-primary"},on:{click:function(t){return e.addGuest()}}},[e._v("Add "+e._s(e.search)+" as Guest")])]},proxy:!0}:null],null,!0),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1),e._v(" "),n("v-divider"),e._v(" "),e.model?n("div",[e._v("\n          "+e._s(e.model.Name)+"\n          "),n("v-switch",{attrs:{"input-value":e.checkAttendance(e.model.ID)},on:{change:function(t){return e.addAttendance(e.model,-1,0)}}})],1):n("div",e._l(e.circleList,(function(t){return n("li",{key:t.ID},[e.checkAttendance(t.ID)?n("span",[n("b",[e._v(e._s(t.Name)+" ")])]):n("span",[e._v("\n              "+e._s(t.Name)+"\n          ")]),e._v(" "),n("v-switch",{attrs:{"input-value":e.checkAttendance(t.ID)},on:{change:function(n){return e.addAttendance(t,-1,0)}}})],1)})),0)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VApp:f.a,VAutocomplete:h.a,VCard:_.a,VCardText:A.a,VDivider:k.a,VSwitch:w.a})}}]);