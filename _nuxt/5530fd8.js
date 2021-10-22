(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9,16,18,19],{317:function(e,t,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(78).default)("3d31b164",content,!0,{sourceMap:!1})},318:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(16),r(13),{props:["cubes","hideReflection","smallGlow"],data:function(){return{hasRefs:!1,distance:[1,1],cubeSize:42}},mounted:function(){var e=document;e.addEventListener("mousemove",this.onMouseMove,!1),e.addEventListener("mouseenter",this.onMouseEnter,!1),e.addEventListener("mouseleave",this.onMouseLeave,!1),this.setHeight()},beforeDestroy:function(){var e=document;e.removeEventListener("mousemove",this.onMouseMove,!1),e.removeEventListener("mouseenter",this.onMouseEnter,!1),e.removeEventListener("mouseleave",this.onMouseLeave,!1)},methods:{setHeight:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!(t&&(new Date).getTime()-t>1e4)){if(0==this.$refs.scene.clientWidth)return t=t||(new Date).getTime(),void this.$nextTick((function(){return e.setHeight(t)}));this.$refs.scene.style.height=2*this.$refs.scene.clientWidth/3+"px",this.hasRefs=!0}},onMouseMove:function(e){var rect=this.$refs.scene.getBoundingClientRect(),t=e.clientX-rect.left,r=e.clientY-rect.top,n=-(rect.width/2-t)/35,o=(rect.height/2-r)/35;this.$refs.cube.style.transform="translateZ(-21px) rotateY(".concat(n,"deg) rotateX(").concat(o,"deg)")},onMouseEnter:function(e){this.$refs.cube.style.transition="none"},onMouseLeave:function(e){this.$refs.cube.style.transition="transform 0.5s ease",this.$refs.cube.style.transform="translateZ(-21px) rotateY(0deg) rotateX(0deg)"},diceClass:function(e){return e?Object(n.a)({rare:"rare"==e.rarity,legendary:"legendary"==e.rarity},e.color,!0):{white:!0}}},computed:{middle:function(){if(!this.hasRefs)return[0,0];var rect=this.$refs.scene.getBoundingClientRect();return[rect.width/2-this.cubeSize/2,rect.height/2-this.cubeSize/2]},stones:function(){var e=this;if(!this.hasRefs)return[];var t=this.middle,r=this.cubes.reduce((function(e,t){return{minX:Math.min(e.minX,t.position[0]),maxX:Math.max(e.maxX,t.position[0]),minY:Math.min(e.minY,t.position[1]),maxY:Math.max(e.maxY,t.position[1])}}),{minX:0,maxX:0,minY:0,maxY:0});return this.distance=[r.maxX-r.minX,r.maxY-r.minY],r=[(r.maxX+r.minX)/2,(r.maxY+r.minY)/2],this.cubes.map((function(n){return{cube:n,text:n.dice?n.dice.level:"",class:e.diceClass(n.dice),style:"left:"+(t[0]+(-r[0]+n.position[0])*(e.cubeSize+4))+"px; top: "+(t[1]+(-r[1]+n.position[1])*(e.cubeSize+4))+"px;"}}))},scalerStyle:function(){if(!this.hasRefs)return"";var rect=this.$refs.scene.getBoundingClientRect(),e=.8*rect.width/(this.cubeSize*(this.distance[0]+1)),t=.8*rect.height/(this.cubeSize*(this.distance[1]+1));return"transform: scale("+Math.min(e,t)+")"}}}),l=o,c=(r(319),r(59)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"scene",class:{scene:!0,reflection:!e.hideReflection,smallGlow:e.smallGlow}},[r("div",{ref:"scaler",staticClass:"scaler",style:e.scalerStyle},[r("div",{ref:"cube",staticClass:"cube"},[e.stones?e._l(e.stones,(function(t,n){return r("div",{key:n,staticClass:"stone",class:t.class,style:t.style},[r("div",{staticClass:"cube__face glowing cube__face--front"},[e._v("\n            "+e._s(t.text)+"\n          ")]),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--back"}),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--right"}),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--left"}),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--top"}),e._v(" "),r("div",{staticClass:"cube__face glowing cube__face--bottom"})])})):[r("div",{staticClass:"circle glowing",style:"left:"+e.middle[0]+"px; top:"+e.middle[1]+"px"})]],2)])])}),[],!1,null,"387d7287",null);t.default=component.exports},319:function(e,t,r){"use strict";r(317)},320:function(e,t,r){var n=r(77)(!1);n.push([e.i,'.glowing[data-v-387d7287]:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border:0 solid #fff;box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0;background-color:rgba(0,0,0,.7);z-index:-1}.cube .rare .glowing[data-v-387d7287]:before{background-color:hsla(0,0%,75.3%,.7)}.cube .legendary .glowing[data-v-387d7287]:before{background-color:rgba(255,215,0,.7)}.red .glowing[data-v-387d7287]:before{box-shadow:0 0 10px red,inset 0 0 5px red}.blue .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #003cff,inset 0 0 5px #003cff}.green .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}.yellow .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #e5ff00,inset 0 0 5px #e5ff00}.orange .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #f60,inset 0 0 5px #f60}.purple .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #90f,inset 0 0 5px #90f}.white .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #fff,inset 0 0 5px #fff}.gray .glowing[data-v-387d7287]:before{box-shadow:0 0 10px #777,inset 0 0 5px #777}.circle.glowing[data-v-387d7287]{position:absolute;width:42px;height:42px}.circle.glowing[data-v-387d7287]:before{border-radius:50%}.smallGlow .red .glowing[data-v-387d7287]:before{box-shadow:0 0 4px red,inset 0 0 5px red}.smallGlow .blue .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #003cff,inset 0 0 5px #003cff}.smallGlow .green .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #0f0,inset 0 0 5px #0f0}.smallGlow .yellow .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #e5ff00,inset 0 0 5px #e5ff00}.smallGlow .orange .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #f60,inset 0 0 5px #f60}.smallGlow .purple .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #90f,inset 0 0 5px #90f}.smallGlow .white .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #fff,inset 0 0 5px #fff}.smallGlow .gray .glowing[data-v-387d7287]:before{box-shadow:0 0 4px #777,inset 0 0 5px #777}@-webkit-keyframes glowAnimation-data-v-387d7287{0%{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}20%{box-shadow:0 0 15px #0f0,inset 0 0 10px #0f0}40%{box-shadow:0 0 12px #0f0,inset 0 0 8px #0f0}60%{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}80%{box-shadow:0 0 8px #0f0,inset 0 0 3px #0f0}to{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}}@keyframes glowAnimation-data-v-387d7287{0%{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}20%{box-shadow:0 0 15px #0f0,inset 0 0 10px #0f0}40%{box-shadow:0 0 12px #0f0,inset 0 0 8px #0f0}60%{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}80%{box-shadow:0 0 8px #0f0,inset 0 0 3px #0f0}to{box-shadow:0 0 10px #0f0,inset 0 0 5px #0f0}}.scene[data-v-387d7287]{width:100%;height:100%;perspective:600px;overflow:hidden}.reflection[data-v-387d7287]{-webkit-box-reflect:below 0 linear-gradient(transparent,transparent,rgba(0,0,0,.411))}.scaler[data-v-387d7287]{transform-style:preserve-3d;transition:transform .5s ease}.cube[data-v-387d7287],.scaler[data-v-387d7287]{width:100%;height:100%}.cube[data-v-387d7287]{position:relative;transform-style:preserve-3d;transform:translateZ(-21px)}.stone[data-v-387d7287]{transform-style:preserve-3d}.cube__face[data-v-387d7287],.stone[data-v-387d7287]{position:absolute;width:42px;height:42px}.cube__face[data-v-387d7287]{color:#fff;text-align:center;font-size:27px}.cube .legendary .cube__face[data-v-387d7287],.cube .rare .cube__face[data-v-387d7287]{color:#000}.draggable .cube__face--front[data-v-387d7287]{cursor:move}.cube__face--front[data-v-387d7287]{transform:rotateY(0deg) translateZ(21px)}.cube__face--right[data-v-387d7287]{transform:rotateY(90deg) translateZ(21px)}.cube__face--back[data-v-387d7287]{transform:rotateY(180deg) translateZ(21px)}.cube__face--left[data-v-387d7287]{transform:rotateY(-90deg) translateZ(21px)}.cube__face--top[data-v-387d7287]{transform:rotateX(90deg) translateZ(21px)}.cube__face--bottom[data-v-387d7287]{transform:rotateX(-90deg) translateZ(21px)}.cube.show-front[data-v-387d7287]{transform:translateZ(-21px) rotateY(0deg)}.cube.show-right[data-v-387d7287]{transform:translateZ(-21px) rotateY(-90deg)}.cube.show-back[data-v-387d7287]{transform:translateZ(-21px) rotateY(-180deg)}.cube.show-left[data-v-387d7287]{transform:translateZ(-21px) rotateY(90deg)}.cube.show-top[data-v-387d7287]{transform:translateZ(-21px) rotateX(-90deg)}.cube.show-bottom[data-v-387d7287]{transform:translateZ(-21px) rotateX(90deg)}svg[data-v-387d7287]{width:0;height:0}',""]),e.exports=n},321:function(e,t,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(78).default)("2cb2ab20",content,!0,{sourceMap:!1})},322:function(e,t,r){"use strict";r.r(t);r(86);var n={props:["tetra","selection","draggable"],data:function(){return{showJSON:!1}},methods:{select:function(){if(this.selection)if(this.selected){var e=this.selection.indexOf(this.tetra);e>=0&&this.selection.splice(e,1)}else this.selection.push(this.tetra)}},computed:{selected:function(){return this.selection&&this.selection.indexOf(this.tetra)>=0}}},o=(r(331),r(59)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tetra-button p-2",class:{selected:e.selected,pointer:!e.draggable},on:{click:e.select}},[r("div",{staticClass:"toggle-json-button border shadow rounded p-1",on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.showJSON=!e.showJSON}}},[e._v("\n    JSON\n  ")]),e._v(" "),e.showJSON?r("pre",{staticClass:"p-2"},[e._v(e._s(JSON.stringify(e.tetra,null,2)))]):r("Tetra",{class:{draggable:e.draggable},attrs:{tetra:e.tetra,"data-id":e.tetra.uuid}})],1)}),[],!1,null,"e109839a",null);t.default=component.exports;installComponents(component,{Tetra:r(328).default})},323:function(e,t,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(78).default)("56c04016",content,!0,{sourceMap:!1})},326:function(e,t,r){"use strict";r(321)},327:function(e,t,r){var n=r(77)(!1);n.push([e.i,".tetra[data-v-12a59173]{width:120px;height:80px}.tetra.rare[data-v-12a59173]{background-color:silver}.tetra.legendary[data-v-12a59173]{background-color:gold}",""]),e.exports=n},328:function(e,t,r){"use strict";r.r(t);var n={props:["tetra"],computed:{style:function(){return{border:"3px solid "+this.tetra.special}},rarityClass:function(){return{rare:"rare"==this.tetra.rarity,legendary:"legendary"==this.tetra.rarity}}}},o=(r(326),r(59)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tetra",class:e.rarityClass,style:e.style},[r("Cubes",{attrs:{cubes:e.tetra.cubes,hideReflection:!0,smallGlow:!1}})],1)}),[],!1,null,"12a59173",null);t.default=component.exports;installComponents(component,{Cubes:r(318).default})},331:function(e,t,r){"use strict";r(323)},332:function(e,t,r){var n=r(77)(!1);n.push([e.i,".tetra-button[data-v-e109839a]{position:relative}.pointer[data-v-e109839a]{cursor:pointer}.tetra-button.selected[data-v-e109839a]{border:2px solid grey}.toggle-json-button[data-v-e109839a]{font-size:5px;position:absolute;top:0;right:0;cursor:pointer;background:#000}",""]),e.exports=n},336:function(e,t,r){"use strict";r.r(t);var n=r(28),o=(r(3),r(103),r(2),r(86),r(27)),l=function(e){var t=0,r=0;return e.cubes.forEach((function(e){e.dice&&(t++,r+=e.dice.level)})),r/t},c=function(a,b){var e=["normal","rare","legendary"].indexOf(a.rarity),t=["normal","rare","legendary"].indexOf(b.rarity);return e-t!=0?t-e:l(b)-l(a)},d={props:["selection","draggable","exclude"],computed:{user:function(){return o.a.user()},tetrasBase:function(){return this.user?Object(n.a)(this.user.tetras).sort(c):[]},tetras:function(){var e=this;return this.exclude?this.tetrasBase.filter((function(t){return e.exclude.indexOf(t.uuid)<0})):this.tetrasBase}},methods:{clearSelection:function(){this.selection&&this.selection.splice(0,this.selection.length)}}},f=r(59),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[e.selection&&e.selection.length?r("b-button",{on:{click:e.clearSelection}},[e._v("\n      Clear Selection\n    ")]):r("h4",[e._v("\n      "+e._s(e.draggable?"Drag and drop":"Click to Select")+"\n    ")])],1),e._v(" "),e._l(e.tetras,(function(t){return r("b-col",{key:t.uuid,attrs:{cols:"auto"}},[r("TetraButton",{attrs:{tetra:t,selection:e.selection,draggable:e.draggable}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TetraButton:r(322).default})},357:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(2),r(13),r(47),r(5),r(4),r(6),r(3),r(7),r(184)),l=r(41),c=r(27);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={data:function(){return{showArea:!0,showMessageModal:!1,messageTitle:"",messageInfo:null}},computed:{user:function(){return c.a.user()},userUuid:function(){return this.user?this.user.uuid:null},areas:function(){return o.a.areas().filter((function(a){return"mine"==a.type}))},area:function(){var area=o.a.area();return this.areas.indexOf(area)>=0?area:null},fields:function(){return this.area?this.area.fields:[[]]},userArea:function(){return this.area?c.a.getArea(this.area.uuid):null},tetrasWithOffset:function(){return this.userArea?this.userArea.tetrasWithOffset:[]},tetrasUuids:function(){return this.tetrasWithOffset.map((function(e){return e.tetraUuid}))},isOwner:function(){return!(!this.area||!this.user)&&this.area.owner.uuid==this.user.uuid},mineResources:function(){return this.area?o.a.getNewMats(this.area):null},mineResourcesOnFight:function(){return this.area?o.a.getNewMatsOnFight(this.area):null}},methods:{showMessage:function(e,t){this.showMessageModal=!0,this.messageTitle=e,this.messageInfo=t},loadArea:function(area){var e=this;o.a.loadArea(area),this.showArea=!1,setTimeout((function(){return e.showArea=!0}),100)},getResources:function(){var e=o.a.getResources(this.area);this.showMessage("Gratulation you earned some mats from the mine",e)},fight:function(){var e=o.a.attack(this.area,this.user,this.tetrasWithOffset.map((function(e){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e)})));e.success?this.showMessage("Gratulation you won the fight and own the mine now",e):this.showMessage("Sorry you lost, please try again",e)},showFightRolls:function(e){var t=e.userArea,r=e.enemyArea,n=e.enemyDiceRolls,o=e.userDiceRolls;o&&this.showFightRollsOnArea(t,o),n&&this.showFightRollsOnArea(r,n)},showFightRollsOnArea:function(area,e){var t=this;if(e.length){var r=l.a.pull(e);area[r.y][r.x].cube.dice=null,setTimeout((function(){area[r.y][r.x].cube.dice=r.dice}),500),setTimeout((function(){t.showFightRollsOnArea(area,e)}),l.a.int(500))}}}},h=f,v=r(59),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h3",[e._v("Mine "+e._s(e.area?e.area.name:""))]),e._v(" "),e.areas?r("b-row",{staticClass:"mb-3"},e._l(e.areas,(function(area){return r("b-col",{key:area.uuid,attrs:{cols:"auto"}},[r("b-button",{on:{click:function(t){return e.loadArea(area)}}},[e._v(e._s(area.name))])],1)})),1):e._e(),e._v(" "),e.user&&e.area&&e.userArea&&e.showArea?r("b-row",[r("b-col",{attrs:{cols:"auto"}},[r("h4",{staticClass:"mb-3"},[e._v("Drop your tetras here")]),e._v(" "),r("TetraDropField",{attrs:{fields:e.fields,userUuid:e.userUuid,tetrasWithOffset:e.tetrasWithOffset,showResult:!0}}),e._v(" "),(e.isOwner,[r("b-button",{on:{click:e.fight}},[e._v("Fight")]),e._v(" "),r("h4",[e._v("Resources on fight win:")]),e._v(" "),r("pre",[e._v(e._s(JSON.stringify(e.mineResourcesOnFight,null,2)))])]),e._v(" "),e.isOwner&&e.mineResources?[r("b-button",{on:{click:e.getResources}},[e._v("Get Resources")]),e._v(" "),r("h4",[e._v("Resources:")]),e._v(" "),r("pre",[e._v(e._s(JSON.stringify(e.mineResources,null,2)))])]:e._e(),e._v(" "),e.area.owner?[r("h4",{staticClass:"my-3"},[e._v("\n          Current Owner: "+e._s(e.area.owner.name)+" "),r("br"),e._v("since\n          "+e._s(e.area.owner.created_at)+"\n        ")]),e._v(" "),r("TetraDropField",{attrs:{fields:e.fields,userUuid:e.area.owner.uuid,tetrasWithOffset:e.area.owner.tetrasWithOffset,readOnly:!0,showResult:!0}})]:e._e()],2),e._v(" "),r("b-col",[r("TetraList",{attrs:{draggable:!0,exclude:e.tetrasUuids}})],1)],1):e._e(),e._v(" "),e.messageInfo?r("b-modal",{attrs:{title:e.messageTitle,"ok-only":"",scrollable:"",size:"lg",centered:""},model:{value:e.showMessageModal,callback:function(t){e.showMessageModal=t},expression:"showMessageModal"}},[e.messageInfo.userDicedArea?[r("h3",[e._v("Your Team")]),e._v(" "),r("TetraDropField",{staticClass:"mb-2",attrs:{fields:e.messageInfo.userDicedArea,readOnly:!0,showResult:!0}})]:e._e(),e._v(" "),e.messageInfo.enemyDicedArea?[r("h3",[e._v("Enemy")]),e._v(" "),r("TetraDropField",{staticClass:"mb-2",attrs:{fields:e.messageInfo.enemyDicedArea,readOnly:!0,showResult:!0}})]:e._e(),e._v(" "),r("pre",[e._v(e._s(JSON.stringify(e.messageInfo,null,2)))])],2):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TetraDropField:r(341).default,TetraList:r(336).default})}}]);