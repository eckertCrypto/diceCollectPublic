(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{326:function(e,t,r){"use strict";r.r(t);var n={props:["chance"]},c=r(56),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h3",[e._v("Chances:")])]),e._v(" "),e.chance.exampleDice?r("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[r("h4",[e._v("Example Dice:")]),e._v(" "),r("b-row",e._l(e.chance.exampleDice,(function(e){return r("b-col",{key:e.uuid,attrs:{cols:"auto"}},[r("DiceButton",{attrs:{dice:e}})],1)})),1)],1):e._e(),e._v(" "),e.chance.exampleTetra?r("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[r("h4",[e._v("Example Tetra:")]),e._v(" "),r("b-row",e._l(e.chance.exampleTetra,(function(e){return r("b-col",{key:e.uuid,attrs:{cols:"auto"}},[r("TetraButton",{attrs:{tetra:e}})],1)})),1)],1):e._e(),e._v(" "),r("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[r("h4",[e._v("Chances & Costs")]),e._v(" "),r("pre",[e._v(e._s(JSON.stringify(e.chance,null,2)))])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DiceButton:r(318).default,TetraButton:r(319).default})},328:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));r(6),r(5),r(2),r(7),r(8);var n=r(35),c=r(33),o=r(0),f=(r(3),r(17),r(113),r(174),r(335)),l=r(73),d=r(305),h=r(329);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E=function(e){var t=[],r=[],n={dice:0,tetra:0};return e.forEach((function(e){e.dice&&t.push(e.dice),e.dices&&e.dices.forEach((function(e){return t.push(e)})),e.tetra&&r.push(e.tetra),e.tetras&&e.tetras.forEach((function(e){return r.push(e)})),e.mats&&e.mats.dice&&(n.dice+=e.mats.dice),e.mats&&e.mats.tetra&&(n.tetra+=e.mats.tetra)})),{dices:t.length>1?t:void 0,dice:1==t.length?t[0]:void 0,tetras:r.length>1?r:void 0,tetra:1==r.length?r[0]:void 0,mats:{dice:n.dice?n.dice:void 0,tetra:n.tetra?n.tetra:void 0}}},C=["red","green","blue","purple"],O=[["normal",80],["rare",15],["legendary",5]],y=[1,2,3,4,5,6],x={createDice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v(v({color:f.a.get(e.COLORS||C),rarity:f.a.get(e.RARITY||O),level:f.a.get(e.LEVELS||y),maxBreeds:3,breeds:0,uuid:Object(d.a)(),created_at:(new Date).toGMTString()},e),{},{COLORS:void 0,LEVELS:void 0,RARITY:void 0,exampleDice:void 0,mats:void 0})},createExamples:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],r=0;r<10;r++)t.push(this.createDice(e));return t},craftTooltip:"create new dice from diceMats",getCraftChance:function(){var e={mats:{dice:-10},maxBreeds:3,COLORS:C,RARITY:O,LEVELS:y};return e.exampleDice=this.createExamples(e),e},craft:function(){var e=l.a.state.user;if(e){var t=this.createDice(this.getCraftChance());return e.dices.push(t),e.mats.dice-=10,{dice:t,mats:{dice:-10}}}},breedTooltip:"select some dices and create new one with chance to mutate level and color",getBreedChances:function(e){var t=e.reduce((function(e,t){return Math.min(e,t.maxBreeds)}),3),r=e.map((function(e){return[e.color,50]}));C.forEach((function(e){r.push([e,10])}));var o=e.map((function(e){return e.rarity})),f=e.map((function(e){return[e.level,50]}));Object(c.a)(f).forEach((function(e){var t=Object(n.a)(e,1)[0];f.push([t+1,10]),t>1&&f.push([t-1,10])}));var l={mats:{dice:-10},maxBreeds:t,COLORS:r,RARITY:o,LEVELS:f};return l.exampleDice=this.createExamples(l),l},breed:function(e){var t=l.a.state.user;if(t&&e.length){if(!e.find((function(e){return e.breeds>=e.maxBreeds}))){e.forEach((function(e){return e.breeds++}));var r=this.createDice(this.getBreedChances(e));return t.dices.push(r),t.mats.dice-=10,{dice:r,mats:{dice:-10}}}console.log("already max breeded")}},mergeTooltip:"remove some dices and create new one with chance to mutate rarity",getMergeChances:function(e){var t=e.reduce((function(e,t){return Math.min(e,t.maxBreeds)}),3),r=e.map((function(e){return e.color})),n=e.map((function(e){return[e.rarity,100]}));O.forEach((function(e){n.push(e)}));var c=e.map((function(e){return e.level})),o={mats:{dice:-10},maxBreeds:t,COLORS:r,RARITY:n,LEVELS:c};return o.exampleDice=this.createExamples(o),o},merge:function(e){var t=l.a.state.user;if(t&&e.length){e.forEach(this.remove);var r=this.createDice(this.getMergeChances(e));return t.dices.push(r),t.mats.dice-=10,{dice:r,mats:{dice:-10}}}},combineTooltip:"select & remove some dices and create tetra from it",getCombineChances:function(e){var t=h.a.getCraftFromDicesChances(e);return v(v({},t),{},{mats:v(v({},t.mats),{},{dice:-10})})},combine:function(e){var t=l.a.state.user;if(t){e.forEach(this.remove);var r=h.a.craftTetraFromDices(e);return tetra&&(t.mats.dice-=10),E([r,{mats:{dice:-10}}])}},recycleTooltip:"remove dice and receive some dice mats",getRecycleChances:function(e){var t=this;return Array.isArray(e)?e.map((function(e){return t.getRecycleChances(e)})):{mats:{dice:5}}},recycle:function(e){var t=this,r=l.a.state.user;if(r)return Array.isArray(e)?E(e.map((function(e){return t.recycle(e)}))):this.remove(e)?(r.mats.dice+=5,{mats:{dice:5}}):void 0},remove:function(e){var t=this,r=l.a.state.user;if(!r)return!1;if(Array.isArray(e))return e.map((function(e){return t.remove(e)}));var n=r.dices.indexOf(e);return n>=0&&(r.dices.splice(n,1),!0)}}},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return B}));r(6),r(5),r(7),r(8);var n=r(0),c=r(33),o=r(35),f=(r(3),r(113),r(174),r(17),r(338),r(340),r(2),r(335)),l=r(73),d=r(305),h=r(328);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E=function(e,t,r,n){[[-1,0],[1,0],[0,-1],[0,1]].forEach((function(c){var f=Object(o.a)(c,2),l=f[0],d=f[1],h=[e[0]+l,e[1]+d];r.find((function(e){return e[0]==h[0]&&e[1]==h[1]}))||t.find((function(e){return e[0]==h[0]&&e[1]==h[1]}))||n.length&&!n.find((function(e){return e[0]==h[0]&&e[1]==h[1]}))||t.push(h)}))},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[0,0],n=[],c=[r];e[0].position=r;for(var l=t.cubePositions||[],d=1;d<e.length;d++){E(e[d-1].position,n,c,l);var h=e[d],m=f.a.int(n.length),v=n.splice(m,1),C=Object(o.a)(v,1),O=C[0];c.push(O),h.position=O}return e},O=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=f.a.get(e.CUBE_COUNT||x),r=[],n=Object(c.a)(e.dices||[]),o=0;o<t;o++){var l=f.a.get(e.CUBE_TYPE||R),d={type:l,dice:null};if("normal"==d.type){var m=f.a.get(e.DICE_SELECTION||_);"old"==m&&n&&n.length?d.dice=f.a.pull(n):d.dice=h.a.createDice()}r.push(d)}return C(r,e)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({cubes:O(e),special:f.a.get(e.SPECIALS||T),rarity:f.a.get(e.RARITY||j),maxBreeds:D,breeds:0,uuid:Object(d.a)(),created_at:(new Date).toGMTString()},e)},x=[3,4,5],T=["red","green","blue","purple"],j=[["normal",80],["rare",15],["legendary",5]],R=[["normal",90],["empty",10]],D=5,_=["new"],w=[["new",20],["old",80]],A=[["new",30],["old",70]],B={createExamples:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],r=0;r<10;r++)t.push(y(e));return t},craftTooltip:"create new tetra from tetraMats",getCraftChance:function(){var e={mats:{tetra:-10},maxBreeds:D,SPECIALS:T,RARITY:j,CUBE_COUNT:x,CUBE_TYPE:R};return e.exampleTetra=this.createExamples(e),e},craft:function(){var e=l.a.state.user;if(e){var t=y(this.getCraftChance());return e.tetras.push(t),e.mats.tetra-=10,{tetra:t,mats:{tetra:-10}}}},getCraftFromDicesChances:function(e){var t={mats:{tetra:-10},DICE_SELECTION:A,dices:Object(c.a)(e)};return t.exampleTetra=this.createExamples(t),t},craftTetraFromDices:function(e){var t=l.a.state.user;if(t){var r=y(this.getCraftFromDicesChances(e));return t.tetras.push(r),t.mats.tetra-=10,{tetra:r,mats:{tetra:-10}}}},breedTooltip:"select some tetras and create new one with chance to mutate special, rarity, cubeCount and structure",getBreedChances:function(e){var t=e.reduce((function(e,t){return Math.min(e,t.maxBreeds)}),D),r=e.map((function(e){return[e.special,100]}));T.forEach((function(e){r.push([e,10])}));var n=e.map((function(e){return[e.rarity,100]}));j.forEach((function(e){n.push(e)}));var f=e.flatMap((function(e){return e.cubes.map((function(e){return e.dice})).filter((function(e){return!!e}))})),l=e.map((function(e){return[e.cubes.length,100]}));Object(c.a)(l).forEach((function(e){var t=Object(o.a)(e,2),r=t[0];t[1];r>1&&l.push([r-1,20]),r<15&&l.push([r+1,20])}));var d={mats:{tetra:-10},maxBreeds:t,SPECIALS:r,RARITY:n,DICE_SELECTION:w,CUBE_COUNT:l,dices:f};return d.exampleTetra=this.createExamples(d),d},breed:function(e){if(e.length){if(!e.find((function(e){return e.breeds>=e.maxBreeds}))){e.forEach((function(e){return e.breeds++}));var t=y(this.getBreedChances(e));return user.tetras.push(t),user.mats.tetra-=10,{tetra:t,mats:{tetra:-10}}}console.log("already max breeded")}},mergeTooltip:"remove some tetras and use random stats of parents",getMergeChances:function(e){var t=e.reduce((function(e,t){return Math.min(e,t.maxBreeds)}),D),r=e.map((function(e){return[e.special,100]})),n=e.map((function(e){return[e.rarity,100]})),c=e.flatMap((function(e){return e.cubes.map((function(e){return e.dice})).filter((function(e){return!!e}))})),o={mats:{tetra:-10},maxBreeds:t,SPECIALS:r,RARITY:n,DICE_SELECTION:["old"],CUBE_COUNT:e.map((function(e){return[e.cubes.length,100]})),dices:c,cubePositions:e.flatMap((function(e){return e.cubes.map((function(e){return e.position}))}))};return o.exampleTetra=this.createExamples(o),o},merge:function(e){if(e.length){e.forEach(this.remove);var t=y(this.getMergeChances(e));return user.tetras.push(t),user.mats.tetra-=10,{tetra:t,mats:{tetra:-10}}}},getInjectChances:function(e){var t={mats:{tetra:-10},maxBreeds:D,SPECIALS:T,RARITY:j,CUBE_COUNT:x,CUBE_TYPE:R};return t.exampleTetra=this.createExamples(t),t},inject:function(e){if(e.length){e.forEach(this.remove);var t=y(this.getInjectChance(e));return user.tetras.push(t),user.mats.tetra-=10,{tetra:t,mats:{tetra:-10}}}},recycleTooltip:"remove tetras and receive some tetraMats and dices",getRecycleChances:function(e){var t=this;return Array.isArray(e)?e.map((function(e){return t.getRecycleChances(e)})):{mats:{tetra:5},EARN_DICE_COUNT:[[1,80],[2,20]],dices:e.cubes.map((function(e){return e.dice})).filter((function(e){return!!e}))}},recycle:function(e){var t=this,r=l.a.state.user;if(r){if(Array.isArray(e))return function(e){var t=[],r=[],n={dice:0,tetra:0};return e.forEach((function(e){e.dice&&t.push(e.dice),e.dices&&e.dices.forEach((function(e){return t.push(e)})),e.tetra&&r.push(e.tetra),e.tetras&&e.tetras.forEach((function(e){return r.push(e)})),e.mats&&e.mats.dice&&(n.dice+=e.mats.dice),e.mats&&e.mats.tetra&&(n.tetra+=e.mats.tetra)})),{dices:t.length>1?t:void 0,dice:1==t.length?t[0]:void 0,tetras:r.length>1?r:void 0,tetra:1==r.length?r[0]:void 0,mats:{dice:n.dice?n.dice:void 0,tetra:n.tetra?n.tetra:void 0}}}(e.map((function(e){return t.recycle(e)})));if(this.remove(e)){r.mats.tetra+=5;for(var n=this.getRecycleChances(e),c=f.a.get(n.EARN_DICE_COUNT),o=[],d=0;d<c;d++)n.dices.length&&o.push(f.a.pull(n.dices));return{dices:o,mats:{tetra:5}}}}},remove:function(e){var t=this,r=l.a.state.user;if(!r)return!1;if(Array.isArray(e))return e.map((function(e){return t.remove(e)}));var n=r.tetras.indexOf(e);return n>=0&&(r.tetras.splice(n,1),!0)}}},335:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(174),r(113);var n={int:function(e){return parseInt(Math.random()*e)},pull:function(e){if(!e.length)return null;if(Array.isArray(e[0])){var t=this.getRandomWithChance(e),r=e.indexOf(t);return r>=0&&e.splice(r,1),t[0]}var n=this.getRandom(e),c=e.indexOf(n);return c>=0&&e.splice(c,1),n},get:function(e){if(!e.length)return null;if(Array.isArray(e[0])){var t=this.getRandomWithChance(e);return t?t[0]:null}return this.getRandom(e)},getRandom:function(e){return e[Math.min(Math.floor(Math.random()*e.length),e.length-1)]},getRandomWithChance:function(e){var t=e.reduce((function(e,t){return e+t[1]}),0),r=Math.min(Math.floor(Math.random()*t),t-1);return e.find((function(a){return(r-=a[1])<0}))}}},338:function(e,t,r){"use strict";var n=r(14),c=r(339),o=r(74),f=r(43),l=r(57),d=r(141);n({target:"Array",proto:!0},{flatMap:function(e){var t,r=f(this),n=l(r);return o(e),(t=d(r,0)).length=c(t,r,r,n,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},339:function(e,t,r){"use strict";var n=r(114),c=r(57),o=r(95),f=function(e,t,source,r,l,d,h,m){for(var element,v,E=l,C=0,O=!!h&&o(h,m,3);C<r;){if(C in source){if(element=O?O(source[C],C,t):source[C],d>0&&n(element))v=c(element),E=f(e,t,element,v,E,d-1)-1;else{if(E>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[E]=element}E++}C++}return E};e.exports=f},340:function(e,t,r){r(96)("flatMap")}}]);