(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10],{322:function(e,t,c){"use strict";c.r(t);var o={props:["chance"]},l=c(59),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("b-row",[c("b-col",{attrs:{cols:"12"}},[c("h3",[e._v("Chances:")])]),e._v(" "),e.chance.exampleDice?c("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[c("h4",[e._v("Example Dice:")]),e._v(" "),c("b-row",e._l(e.chance.exampleDice,(function(e){return c("b-col",{key:e.uuid,attrs:{cols:"auto"}},[c("DiceButton",{attrs:{dice:e}})],1)})),1)],1):e._e(),e._v(" "),e.chance.exampleTetra?c("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[c("h4",[e._v("Example Tetra:")]),e._v(" "),c("b-row",e._l(e.chance.exampleTetra,(function(e){return c("b-col",{key:e.uuid,attrs:{cols:"auto"}},[c("TetraButton",{attrs:{tetra:e}})],1)})),1)],1):e._e(),e._v(" "),c("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[c("h4",[e._v("Chances & Costs")]),e._v(" "),c("pre",[e._v(e._s(JSON.stringify(e.chance,null,2)))])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DiceButton:c(321).default,TetraButton:c(318).default})},338:function(e,t,c){"use strict";c.r(t);c(98);var o=c(118),l={props:["selection"],data:function(){return{showChance:null,counter:0,craftResult:null,tooltip:{craft:o.a.craftTooltip,breed:o.a.breedTooltip,merge:o.a.mergeTooltip,combine:o.a.combineTooltip,recycle:o.a.recycleTooltip}}},methods:{craft:function(){this.craftResult=o.a.craft(),this.clearSelection()},breed:function(){this.craftResult=o.a.breed(this.selection),this.clearSelection()},merge:function(){this.craftResult=o.a.merge(this.selection),this.clearSelection()},combine:function(){this.craftResult=o.a.combine(this.selection),this.clearSelection()},recycle:function(){this.craftResult=o.a.recycle(this.selection),this.clearSelection()},remove:function(){o.a.remove(this.selection),this.clearSelection()},clearSelection:function(){console.log("clear selection"),this.selection.splice(0,this.selection.length)}},computed:{chance:function(){return this.counter,this.showChance&&o.a[this.showChance]?o.a[this.showChance](this.selection):{}}}},n=c(59),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("b-row",[c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:e.tooltip.craft,expression:"tooltip.craft",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:e.craft}},[e._v("Craft Dice")]),e._v(" "),c("b-button",{on:{click:function(t){e.showChance="getCraftChance",e.counter++}}},[e._v("Show Chance")])],1),e._v(" "),c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:e.tooltip.breed,expression:"tooltip.breed",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:e.breed}},[e._v("Breed Dices")]),e._v(" "),c("b-button",{on:{click:function(t){e.showChance="getBreedChances",e.counter++}}},[e._v("Show Chance")])],1),e._v(" "),c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:e.tooltip.merge,expression:"tooltip.merge",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:e.merge}},[e._v("Merge Dices")]),e._v(" "),c("b-button",{on:{click:function(t){e.showChance="getMergeChances",e.counter++}}},[e._v("Show Chance")])],1),e._v(" "),c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:e.tooltip.combine,expression:"tooltip.combine",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:e.combine}},[e._v("Combine Dices")]),e._v(" "),c("b-button",{on:{click:function(t){e.showChance="getCombineChances",e.counter++}}},[e._v("Show Chance")])],1),e._v(" "),c("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:e.tooltip.recycle,expression:"tooltip.recycle",modifiers:{hover:!0,left:!0}}],staticClass:"mb-2",attrs:{cols:"12"}},[c("b-button",{on:{click:e.recycle}},[e._v("Recycle Dices")]),e._v(" "),c("b-button",{on:{click:function(t){e.showChance="getRecycleChances",e.counter++}}},[e._v("Show Chance")])],1),e._v(" "),e.craftResult?c("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[c("CraftResult",{attrs:{craftResult:e.craftResult}})],1):e._e(),e._v(" "),e.chance?c("b-col",{attrs:{cols:"12"}},[c("ChanceResult",{attrs:{chance:e.chance}})],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CraftResult:c(335).default,ChanceResult:c(322).default})},339:function(e,t,c){"use strict";c.r(t);var o=c(27),l=(c(99),c(98),c(35)),n=function(a,b){var e=["normal","rare","legendary"].indexOf(a.rarity),t=["normal","rare","legendary"].indexOf(b.rarity);return e-t!=0?t-e:b.level-a.level},r={props:["selection"],computed:{user:function(){return l.a.user()},dices:function(){return this.user?Object(o.a)(this.user.dices).sort(n):[]}},methods:{clearSelection:function(){console.log("clear selection"),this.selection.splice(0,this.selection.length)}}},h=c(59),component=Object(h.a)(r,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("b-row",[c("b-col",{attrs:{cols:"12"}},[c("b-row",[c("b-col",{attrs:{cols:"auto"}},[e.selection.length?c("b-button",{on:{click:e.clearSelection}},[e._v("\n          Clear Selection\n        ")]):c("h4",[e._v("Click to Select")])],1)],1)],1),e._v(" "),e._l(e.dices,(function(t){return c("b-col",{key:t.uuid,attrs:{cols:"auto"}},[c("DiceButton",{attrs:{dice:t,selection:e.selection}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DiceButton:c(321).default})},349:function(e,t,c){"use strict";c.r(t);var o=c(35),l={data:function(){return{selection:[]}},watch:{user:function(){console.log("clear selection"),this.selection=[]}},computed:{user:function(){return o.a.user()}}},n=c(59),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("b-container",[c("h3",[e._v("Dices")]),e._v(" "),c("b-row",[c("b-col",{attrs:{cols:"4"}},[c("DiceActions",{attrs:{selection:e.selection}})],1),e._v(" "),c("b-col",{attrs:{cols:"8"}},[c("DiceList",{attrs:{selection:e.selection}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DiceActions:c(338).default,DiceList:c(339).default})}}]);