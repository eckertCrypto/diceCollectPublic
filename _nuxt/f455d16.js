(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{324:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));r(113);var n,o=r(164),l=r(11),c=r(304),d=function(t,e,r,n){for(var o=[],l=0;l<r;l++){for(var d=[],h=0;h<e;h++)d.push(-1);o.push(d)}return{name:t,type:n,width:e,height:r,fields:o,uuid:Object(c.a)(),created_at:(new Date).toGMTString()}},h=function(t){t.areaUuid&&t.areas.length||(t.area=null);var area=t.areas.find((function(area){return area.uuid==t.areaUuid}));area!=t.area&&(t.area=area),window.area=t.area},v={fieldTypes:[-2,-1,0,1],COLORS:{"-2":"transparent","-1":"red",0:"black",1:"black"},BORDER_COLORS:{"-2":"transparent","-1":"red",0:"green",1:"blue"},state:(n=new l.default({data:function(){return{areas:[],areaUuid:null,area:null,loaded:!1}},methods:{onAreaChanged:function(area){var t=this,e=this.areas.indexOf(area);console.log("onAreaChanged",area,e),this.areasDoc.transact((function(){e>=0&&t.yAreas.delete(e,1),t.yAreas.push([area]),console.log("area pushed",area)}))}},watch:{area:{deep:!0,handler:function(a,b){console.log("area changed",a,b,a==b,JSON.stringify(a)!=JSON.stringify(b)),a&&b&&a==b&&this.onAreaChanged(a)}}}}),n.localDataDoc=o.a.create("localDataFieldArea",!1),n.areasDoc=o.a.create("areas"),n.yAreas=n.areasDoc.getArray("areas"),n.yAreas.observe((function(){n.areas=n.yAreas.toArray(),h(n)})),n.yLocalState=n.localDataDoc.getMap("state"),n.yLocalState.observe((function(){n.areaUuid=n.yLocalState.get("areaUuid"),h(n)})),n),areas:function(){return this.state.areas},area:function(){return this.state.area},loadArea:function(area){this.state.yLocalState.set("areaUuid",area.uuid)},createArea:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,n=arguments.length>3?arguments[3]:void 0,o=d(t,e,r,n);this.state.yAreas.push([o]),this.loadArea(o)},remove:function(area){var t=this.state.areas.indexOf(this.state.areas.find((function(u){return u.uuid==area.uuid})));t>=0&&this.state.yAreas.delete(t,1)},removeAll:function(){this.state.yAreas.delete(0,this.state.yAreas.length)},getTetra:function(t){return this.state.area?this.state.area.tetras.find((function(e){return e.uuid==t})):null}}},343:function(t,e,r){"use strict";r.r(e);var n=r(324),o={data:function(){return{width:8,height:6,type:"mine",types:["mine","enemy"]}},methods:{load:function(area){n.a.loadArea(area),this.$emit("input",area)},create:function(){var t=prompt("please enter a name for the area");t&&n.a.createArea(t,this.width,this.height,this.type)},remove:function(area){n.a.remove(area)},removeAll:function(){n.a.removeAll()}},computed:{areas:function(){return n.a.areas()},area:function(){return n.a.area()}}},l=r(56),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("h3",[t._v("Areas")]),t._v(" "),r("b-row",{staticClass:"my-3"},[r("b-col",{attrs:{cols:"auto"}},[r("b-button",{attrs:{variant:"success"},on:{click:t.create}},[t._v("\n        Create New Area\n      ")])],1),t._v(" "),r("b-col",{attrs:{cols:"auto"}},[r("label",[t._v("Size:")])]),t._v(" "),r("b-col",{attrs:{cols:"1"}},[r("b-input",{attrs:{type:"number",title:"Width"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),r("b-col",{attrs:{cols:"auto"}},[r("label",[t._v("x")])]),t._v(" "),r("b-col",{attrs:{cols:"1"}},[r("b-input",{attrs:{type:"number",title:"Height"},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}})],1),t._v(" "),r("b-col",{attrs:{cols:"auto"}},[r("label",[t._v("Type:")])]),t._v(" "),r("b-col",{attrs:{cols:"2"}},[r("b-select",{attrs:{options:t.types},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)],1),t._v(" "),t._l(t.areas,(function(area){return r("b-row",{key:area.name,staticClass:"mb-1"},[r("b-col",{staticClass:"ml-auto",attrs:{cols:"auto"}},[r("b-button",{on:{click:function(e){return t.load(area)}}},[t._v("Edit")])],1),t._v(" "),r("b-col",{staticClass:"my-auto"},[t._v(t._s(area.type)+" "+t._s(area.width)+"x"+t._s(area.height)+": "+t._s(area.name)+"\n    ")]),t._v(" "),r("b-col",{staticClass:"my-auto",staticStyle:{color:"gray","font-size":"smaller"}},[t._v(t._s(area.created_at)+"\n    ")]),t._v(" "),r("b-col",{staticClass:"ml-auto",attrs:{cols:"auto"}},[r("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.remove(area)}}},[t._v("Remove")])],1)],1)})),t._v(" "),t.areas.length?r("b-row",{staticClass:"mt-3"},[r("b-col",{staticClass:"ml-auto",attrs:{cols:"auto"}},[r("b-button",{attrs:{variant:"danger"},on:{click:t.removeAll}},[t._v("Remove All Areas")])],1)],1):t._e()],2)}),[],!1,null,null,null);e.default=component.exports}}]);