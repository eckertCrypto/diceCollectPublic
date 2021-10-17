(window.webpackJsonp=window.webpackJsonp||[]).push([[25,8,14,16,18,19],{307:function(e,t,r){var content=r(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("3d31b164",content,!0,{sourceMap:!1})},308:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(15),r(17),{props:["cubes","hideReflection","smallGlow"],data:function(){return{hasRefs:!1,distance:[1,1],cubeSize:42}},mounted:function(){var e=document;e.addEventListener("mousemove",this.onMouseMove,!1),e.addEventListener("mouseenter",this.onMouseEnter,!1),e.addEventListener("mouseleave",this.onMouseLeave,!1),this.setHeight()},beforeDestroy:function(){var e=document;e.removeEventListener("mousemove",this.onMouseMove,!1),e.removeEventListener("mouseenter",this.onMouseEnter,!1),e.removeEventListener("mouseleave",this.onMouseLeave,!1)},methods:{setHeight:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!(t&&(new Date).getTime()-t>1e4)){if(0==this.$refs.scene.clientWidth)return t=t||(new Date).getTime(),void this.$nextTick((function(){return e.setHeight(t)}));this.$refs.scene.style.height=2*this.$refs.scene.clientWidth/3+"px",this.hasRefs=!0}},onMouseMove:function(e){var rect=this.$refs.scene.getBoundingClientRect(),t=e.clientX-rect.left,r=e.clientY-rect.top,n=-(rect.width/2-t)/35,o=(rect.height/2-r)/35;this.$refs.cube.style.transform="translateZ(-21px) rotateY(".concat(n,"deg) rotateX(").concat(o,"deg)")},onMouseEnter:function(e){this.$refs.cube.style.transition="none"},onMouseLeave:function(e){this.$refs.cube.style.transition="transform 0.5s ease",this.$refs.cube.style.transform="translateZ(-21px) rotateY(0deg) rotateX(0deg)"},diceClass:function(e){return e?Object(n.a)({rare:"rare"==e.rarity,legendary:"legendary"==e.rarity},e.color,!0):{white:!0}}},computed:{middle:function(){if(!this.hasRefs)return[0,0];var rect=this.$refs.scene.getBoundingClientRect();return[rect.width/2-this.cubeSize/2,rect.height/2-this.cubeSize/2]},stones:function(){var e=this;if(!this.hasRefs)return[];var t=this.middle,r=this.cubes.reduce((function(e,t){return{minX:Math.min(e.minX,t.position[0]),maxX:Math.max(e.maxX,t.position[0]),minY:Math.min(e.minY,t.position[1]),maxY:Math.max(e.maxY,t.position[1])}}),{minX:0,maxX:0,minY:0,maxY:0});return this.distance=[r.maxX-r.minX,r.maxY-r.minY],r=[(r.maxX+r.minX)/2,(r.maxY+r.minY)/2],this.cubes.map((function(n){return{cube:n,text:n.dice?n.dice.level:"",class:e.diceClass(n.dice),style:"left:"+(t[0]+(-r[0]+n.position[0])*(e.cubeSize+4))+"px; top: "+(t[1]+(-r[1]+n.position[1])*(e.cubeSize+4))+"px;"}}))},scalerStyle:function(){if(!this.hasRefs)return"";var rect=this.$refs.scene.getBoundingClientRect(),e=.8*rect.width/(this.cubeSize*(this.distance[0]+1)),t=.8*rect.height/(this.cubeSize*(this.distance[1]+1));return"transform: scale("+Math.min(e,t)+")"}}}),l=o,c=(r(309),r(56)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"scene",class:{scene:!0,reflection:!e.hideReflection,smallGlow:e.smallGlow}},[r("div",{ref:"scaler",staticClass:"scaler",style:e.scalerStyle},[r("div",{ref:"cube",staticClass:"cube"},[e.stones?e._l(e.stones,(function(t,n){return r("div",{key:n,staticClass:"stone",class:t.class,style:t.style},[r("div",{staticClass:"cube__face glowing cube__face--front"},[e._v("\n            "+e._s(t.text)+"\n          ")]),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--back"}),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--right"}),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--left"}),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--top"}),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--bottom"})])})):[r("div",{staticClass:"circle glowing",style:"left:"+e.middle[0]+"px; top:"+e.middle[1]+"px"})]],2)])])}),[],!1,null,"387d7287",null);t.default=component.exports},309:function(e,t,r){"use strict";r(307)},310:function(e,t,r){var n=r(71)(!1);n.push([e.i,'.glowing[data-v-387d7287]:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border:0 solid #fff;box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0;background-color:rgba(0,0,0,.7);z-index:-1}.cube .rare .glowing[data-v-387d7287]:before{background-color:hsla(0,0%,75.3%,.7)}.cube .legendary .glowing[data-v-387d7287]:before{background-color:rgba(255,215,0,.7)}.red .glowing[data-v-387d7287]:before{box-shadow:0 0 10px red,inset 0 0 5px red}.blue .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #003cff,inset 0 0 5px #003cff}.green .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}.yellow .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #e5ff00,inset 0 0 5px #e5ff00}.orange .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #f60,inset 0 0 5px #f60}.purple .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #90f,inset 0 0 5px #90f}.white .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #fff,inset 0 0 5px #fff}.gray .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #777,inset 0 0 5px #777}.circle.glowing[data-v-387d7287]{position:absolute;width:42px;height:42px}.circle.glowing[data-v-387d7287]:before{border-radius:50%}.smallGlow .red .glowing[data-v-387d7287]:before{box-shadow:0 0 4px red,inset 0 0 5px red}.smallGlow .blue .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #003cff,inset 0 0 5px #003cff}.smallGlow .green .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #0f0,inset 0 0 5px #0f0}.smallGlow .yellow .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #e5ff00,inset 0 0 5px #e5ff00}.smallGlow .orange .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #f60,inset 0 0 5px #f60}.smallGlow .purple .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #90f,inset 0 0 5px #90f}.smallGlow .white .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #fff,inset 0 0 5px #fff}.smallGlow .gray .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #777,inset 0 0 5px #777}@-webkit-keyframes glowAnimation-data-v-387d7287{0%{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}20%{box-shadow:0 0 15px #0f0,inset 0 0 10px #0f0}40%{box-shadow:0 0 12px #0f0,inset 0 0 8px #0f0}60%{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}80%{box-shadow:0 0 8px #0f0,inset 0 0 3px #0f0}to{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}}@keyframes glowAnimation-data-v-387d7287{0%{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}20%{box-shadow:0 0 15px #0f0,inset 0 0 10px #0f0}40%{box-shadow:0 0 12px #0f0,inset 0 0 8px #0f0}60%{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}80%{box-shadow:0 0 8px #0f0,inset 0 0 3px #0f0}to{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}}.scene[data-v-387d7287]{width:100%;height:100%;perspective:600px;overflow:hidden}.reflection[data-v-387d7287]{-webkit-box-reflect:below 0 linear-gradient(transparent,transparent,rgba(0,0,0,.411))}.scaler[data-v-387d7287]{transform-style:preserve-3d;transition:transform .5s ease}.cube[data-v-387d7287],.scaler[data-v-387d7287]{width:100%;height:100%}.cube[data-v-387d7287]{position:relative;transform-style:preserve-3d;transform:translateZ(-21px)}.stone[data-v-387d7287]{transform-style:preserve-3d}.cube__face[data-v-387d7287],.stone[data-v-387d7287]{position:absolute;width:42px;height:42px}.cube__face[data-v-387d7287]{color:#fff;text-align:center;font-size:27px}.cube .legendary .cube__face[data-v-387d7287],.cube .rare .cube__face[data-v-387d7287]{color:#000}.draggable .cube__face--front[data-v-387d7287]{cursor:move}.cube__face--front[data-v-387d7287]{transform:rotateY(0deg) translateZ(21px)}.cube__face--right[data-v-387d7287]{transform:rotateY(90deg) translateZ(21px)}.cube__face--back[data-v-387d7287]{transform:rotateY(180deg) translateZ(21px)}.cube__face--left[data-v-387d7287]{transform:rotateY(-90deg) translateZ(21px)}.cube__face--top[data-v-387d7287]{transform:rotateX(90deg) translateZ(21px)}.cube__face--bottom[data-v-387d7287]{transform:rotateX(-90deg) translateZ(21px)}.cube.show-front[data-v-387d7287]{transform:translateZ(-21px) rotateY(0deg)}.cube.show-right[data-v-387d7287]{transform:translateZ(-21px) rotateY(-90deg)}.cube.show-back[data-v-387d7287]{transform:translateZ(-21px) rotateY(-180deg)}.cube.show-left[data-v-387d7287]{transform:translateZ(-21px) rotateY(90deg)}.cube.show-top[data-v-387d7287]{transform:translateZ(-21px) rotateX(-90deg)}.cube.show-bottom[data-v-387d7287]{transform:translateZ(-21px) rotateX(90deg)}svg[data-v-387d7287]{width:0;height:0}',""]),e.exports=n},311:function(e,t,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("2cb2ab20",content,!0,{sourceMap:!1})},312:function(e,t,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("56c04016",content,!0,{sourceMap:!1})},314:function(e,t,r){"use strict";r(311)},315:function(e,t,r){var n=r(71)(!1);n.push([e.i,".tetra[data-v-12a59173]{width:120px;height:80px}.tetra.rare[data-v-12a59173]{background-color:silver}.tetra.legendary[data-v-12a59173]{background-color:gold}",""]),e.exports=n},316:function(e,t,r){"use strict";r.r(t);r(175);var n={props:["tetra","selection","draggable"],data:function(){return{showJSON:!1}},methods:{select:function(){if(this.selection)if(this.selected){var e=this.selection.indexOf(this.tetra);e>=0&&this.selection.splice(e,1)}else this.selection.push(this.tetra)}},computed:{selected:function(){return this.selection&&this.selection.indexOf(this.tetra)>=0}}},o=(r(319),r(56)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tetra-button p-2",class:{selected:e.selected,pointer:!e.draggable},on:{click:e.select}},[r("div",{staticClass:"toggle-json-button border shadow rounded p-1",on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.showJSON=!e.showJSON}}},[e._v("\n    JSON\n  ")]),e._v(" "),e.showJSON?r("pre",{staticClass:"p-2"},[e._v(e._s(JSON.stringify(e.tetra,null,2)))]):r("Tetra",{class:{draggable:e.draggable},attrs:{tetra:e.tetra,"data-id":e.tetra.uuid}})],1)}),[],!1,null,"e109839a",null);t.default=component.exports;installComponents(component,{Tetra:r(317).default})},317:function(e,t,r){"use strict";r.r(t);var n={props:["tetra"],computed:{style:function(){return{border:"3px solid "+this.tetra.special}},rarityClass:function(){return{rare:"rare"==this.tetra.rarity,legendary:"legendary"==this.tetra.rarity}}}},o=(r(314),r(56)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tetra",class:e.rarityClass,style:e.style},[r("Cubes",{attrs:{cubes:e.tetra.cubes,hideReflection:!0,smallGlow:!1}})],1)}),[],!1,null,"12a59173",null);t.default=component.exports;installComponents(component,{Cubes:r(308).default})},319:function(e,t,r){"use strict";r(312)},320:function(e,t,r){var n=r(71)(!1);n.push([e.i,".tetra-button[data-v-e109839a]{position:relative}.pointer[data-v-e109839a]{cursor:pointer}.tetra-button.selected[data-v-e109839a]{border:2px solid grey}.toggle-json-button[data-v-e109839a]{font-size:5px;position:absolute;top:0;right:0;cursor:pointer;background:#000}",""]),e.exports=n},326:function(e,t,r){"use strict";r.r(t);r(3),r(94),r(2),r(175);var n=r(73),o=function(e){var t=0,r=0;return e.cubes.forEach((function(e){e.dice&&(t++,r+=e.dice.level)})),r/t},l=function(a,b){var e=["normal","rare","legendary"].indexOf(a.rarity),t=["normal","rare","legendary"].indexOf(b.rarity);return e-t!=0?t-e:o(b)-o(a)},c={props:["selection","draggable","exclude"],computed:{user:function(){return n.a.user()},tetrasBase:function(){return this.user?this.user.tetras.sort(l):[]},tetras:function(){var e=this;return this.exclude?this.tetrasBase.filter((function(t){return e.exclude.indexOf(t.uuid)<0})):this.tetrasBase}},methods:{clearSelection:function(){this.selection&&this.selection.splice(0,this.selection.length)}}},d=r(56),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[e.selection&&e.selection.length?r("b-button",{on:{click:e.clearSelection}},[e._v("\n      Clear Selection\n    ")]):r("h4",[e._v("\n      "+e._s(e.draggable?"Drag and drop":"Click to Select")+"\n    ")])],1),e._v(" "),e._l(e.tetras,(function(t){return r("b-col",{key:t.uuid,attrs:{cols:"auto"}},[r("TetraButton",{attrs:{tetra:t,selection:e.selection,draggable:e.draggable}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TetraButton:r(316).default})},347:function(e,t,r){"use strict";r.r(t);r(2),r(17),r(43);var n=r(324),o=r(73),l={data:function(){return{showArea:!0}},computed:{user:function(){return o.a.user()},userUuid:function(){return this.user?this.user.uuid:null},areas:function(){return n.a.areas().filter((function(a){return"mine"==a.type}))},area:function(){return n.a.area()},fields:function(){return this.area?this.area.fields:[[]]},userArea:function(){return this.area?o.a.getArea(this.area.uuid):null},tetrasWithOffset:function(){return this.userArea?this.userArea.tetrasWithOffset:[]},tetrasUuids:function(){return this.tetrasWithOffset.map((function(e){return e.tetraUuid}))}},methods:{loadArea:function(area){var e=this;n.a.loadArea(area),this.showArea=!1,setTimeout((function(){return e.showArea=!0}),100)}}},c=r(56),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h3",[e._v("Mine")]),e._v(" "),e.areas?r("b-row",{staticClass:"mb-3"},e._l(e.areas,(function(area){return r("b-col",{key:area.uuid,attrs:{cols:"auto"}},[r("b-button",{on:{click:function(t){return e.loadArea(area)}}},[e._v(e._s(area.name))])],1)})),1):e._e(),e._v(" "),e.user&&e.area&&e.userArea&&e.showArea?r("b-row",[r("b-col",{attrs:{cols:"auto"}},[r("h4",{staticClass:"mb-3"},[e._v("Drop your tetras here")]),e._v(" "),r("TetraDropField",{attrs:{fields:e.fields,userUuid:e.userUuid,tetrasWithOffset:e.tetrasWithOffset}})],1),e._v(" "),r("b-col",[r("TetraList",{attrs:{draggable:!0,exclude:e.tetrasUuids}})],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TetraDropField:r(334).default,TetraList:r(326).default})},356:function(e,t,r){"use strict";r.r(t);var n={},o=r(56),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("MineManager")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MineManager:r(347).default})}}]);