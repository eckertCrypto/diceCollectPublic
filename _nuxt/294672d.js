(window.webpackJsonp=window.webpackJsonp||[]).push([[20,16],{334:function(t,e,r){"use strict";r.r(e);var n=r(73),o={methods:{load:function(t){n.a.loadUser(t)},create:function(){var t=prompt("please enter your name");t&&n.a.createUser(t)},remove:function(t){n.a.remove(t)},removeAll:function(){n.a.removeAll()}},computed:{users:function(){return n.a.users()},user:function(){return n.a.user()}}},l=r(56),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("h3",[t._v("Users")]),t._v(" "),r("b-row",{staticClass:"my-3"},[r("b-col",{attrs:{cols:"auto"}},[r("b-button",{attrs:{variant:"success"},on:{click:t.create}},[t._v("\n        Create New User\n      ")])],1)],1),t._v(" "),t._l(t.users,(function(e){return r("b-row",{key:e.name,staticClass:"mb-1"},[r("b-col",{staticClass:"ml-auto",attrs:{cols:"auto"}},[r("b-button",{on:{click:function(r){return t.load(e)}}},[t._v("Load")])],1),t._v(" "),r("b-col",{staticClass:"my-auto"},[t._v(t._s(e.name)+" ")]),t._v(" "),r("b-col",{staticClass:"my-auto",staticStyle:{color:"gray","font-size":"smaller"}},[t._v(t._s(e.created_at)+"\n    ")]),t._v(" "),r("b-col",{staticClass:"ml-auto",attrs:{cols:"auto"}},[r("b-button",{attrs:{variant:"danger"},on:{click:function(r){return t.remove(e)}}},[t._v("Remove")])],1)],1)})),t._v(" "),t.users.length?r("b-row",{staticClass:"mt-3"},[r("b-col",{staticClass:"ml-auto",attrs:{cols:"auto"}},[r("b-button",{attrs:{variant:"danger"},on:{click:t.removeAll}},[t._v("Remove All Users")])],1)],1):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,r){"use strict";r.r(e);var n=r(56),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("UserManager")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UserManager:r(334).default})}}]);