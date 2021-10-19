(window.webpackJsonp=window.webpackJsonp||[]).push([[19,16],{322:function(t,e,c){"use strict";c.r(e);var o={props:["chance"]},n=c(59),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("b-row",[c("b-col",{attrs:{cols:"12"}},[c("h3",[t._v("Chances:")])]),t._v(" "),t.chance.exampleDice?c("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[c("h4",[t._v("Example Dice:")]),t._v(" "),c("b-row",t._l(t.chance.exampleDice,(function(t){return c("b-col",{key:t.uuid,attrs:{cols:"auto"}},[c("DiceButton",{attrs:{dice:t}})],1)})),1)],1):t._e(),t._v(" "),t.chance.exampleTetra?c("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[c("h4",[t._v("Example Tetra:")]),t._v(" "),c("b-row",t._l(t.chance.exampleTetra,(function(t){return c("b-col",{key:t.uuid,attrs:{cols:"auto"}},[c("TetraButton",{attrs:{tetra:t}})],1)})),1)],1):t._e(),t._v(" "),c("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[c("h4",[t._v("Chances & Costs")]),t._v(" "),c("pre",[t._v(t._s(JSON.stringify(t.chance,null,2)))])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DiceButton:c(321).default,TetraButton:c(318).default})},336:function(t,e,c){"use strict";c.r(e);var o=c(27),n=(c(3),c(99),c(2),c(98),c(35)),l=function(t){var e=0,c=0;return t.cubes.forEach((function(t){t.dice&&(e++,c+=t.dice.level)})),c/e},r=function(a,b){var t=["normal","rare","legendary"].indexOf(a.rarity),e=["normal","rare","legendary"].indexOf(b.rarity);return t-e!=0?e-t:l(b)-l(a)},h={props:["selection","draggable","exclude"],computed:{user:function(){return n.a.user()},tetrasBase:function(){return this.user?Object(o.a)(this.user.tetras).sort(r):[]},tetras:function(){var t=this;return this.exclude?this.tetrasBase.filter((function(e){return t.exclude.indexOf(e.uuid)<0})):this.tetrasBase}},methods:{clearSelection:function(){this.selection&&this.selection.splice(0,this.selection.length)}}},f=c(59),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("b-row",[c("b-col",{attrs:{cols:"12"}},[t.selection&&t.selection.length?c("b-button",{on:{click:t.clearSelection}},[t._v("\n      Clear Selection\n    ")]):c("h4",[t._v("\n      "+t._s(t.draggable?"Drag and drop":"Click to Select")+"\n    ")])],1),t._v(" "),t._l(t.tetras,(function(e){return c("b-col",{key:e.uuid,attrs:{cols:"auto"}},[c("TetraButton",{attrs:{tetra:e,selection:t.selection,draggable:t.draggable}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TetraButton:c(318).default})},340:function(t,e,c){"use strict";c.r(e);c(98);var o=c(113),n={props:["selection"],data:function(){return{showChance:null,counter:0,craftResult:null,tooltip:{craft:o.a.craftTooltip,breed:o.a.breedTooltip,merge:o.a.mergeTooltip,recycle:o.a.recycleTooltip}}},methods:{craft:function(){this.craftResult=o.a.craft(),this.clearSelection()},breed:function(){this.craftResult=o.a.breed(this.selection),this.clearSelection()},merge:function(){this.craftResult=o.a.merge(this.selection),this.clearSelection()},inject:function(){this.craftResult=o.a.inject(this.selection),this.clearSelection()},recycle:function(){this.craftResult=o.a.recycle(this.selection),this.clearSelection()},remove:function(){o.a.remove(this.selection),this.clearSelection()},clearSelection:function(){console.log("clear selection"),this.selection.splice(0,this.selection.length)}},computed:{chance:function(){return this.counter,this.showChance&&o.a[this.showChance]?o.a[this.showChance](this.selection):{}}}},l=c(59),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("b-row",[c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:t.tooltip.craft,expression:"tooltip.craft",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:t.craft}},[t._v("Craft Tetra")]),t._v(" "),c("b-button",{on:{click:function(e){t.showChance="getCraftChance",t.counter++}}},[t._v("Show Chance")])],1),t._v(" "),c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:t.tooltip.breed,expression:"tooltip.breed",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:t.breed}},[t._v("Breed Tetras")]),t._v(" "),c("b-button",{on:{click:function(e){t.showChance="getBreedChances",t.counter++}}},[t._v("Show Chance")])],1),t._v(" "),c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:t.tooltip.merge,expression:"tooltip.merge",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:t.merge}},[t._v("Merge Tetras")]),t._v(" "),c("b-button",{on:{click:function(e){t.showChance="getMergeChances",t.counter++}}},[t._v("Show Chance")])],1),t._v(" "),c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:t.tooltip.recycle,expression:"tooltip.recycle",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:t.recycle}},[t._v("Recycle Tetras")]),t._v(" "),c("b-button",{on:{click:function(e){t.showChance="getRecycleChances",t.counter++}}},[t._v("Show Chance")])],1),t._v(" "),t.craftResult?c("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[c("CraftResult",{attrs:{craftResult:t.craftResult}})],1):t._e(),t._v(" "),t.chance?c("b-col",{attrs:{cols:"12"}},[c("ChanceResult",{attrs:{chance:t.chance}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CraftResult:c(335).default,ChanceResult:c(322).default})},350:function(t,e,c){"use strict";c.r(e);var o=c(35),n={data:function(){return{selection:[]}},watch:{user:function(){this.selection=[]}},computed:{user:function(){return o.a.user()}}},l=c(59),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("b-container",[c("h3",[t._v("Tetras")]),t._v(" "),c("b-row",[c("b-col",{attrs:{cols:"4"}},[c("TetraActions",{attrs:{selection:t.selection}})],1),t._v(" "),c("b-col",{attrs:{cols:"8"}},[c("TetraList",{attrs:{selection:t.selection}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TetraActions:c(340).default,TetraList:c(336).default})}}]);