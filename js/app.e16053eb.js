(function(t){function e(e){for(var a,s,c=e[0],o=e[1],u=e[2],h=0,d=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0d25":function(t,e,n){},3190:function(t,e,n){"use strict";var a=n("ad22"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"chain",(function(){return Q}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand navbar-dark bg-primary"},[t._m(0),n("div",{staticClass:"collapse navbar-collapse navbar-toggable-sm",attrs:{id:"navbarColor01"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("router-link",{attrs:{to:"/"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.href,i=e.route,r=e.navigate,s=e.isActive,c=e.isExactActive;return[n("li",{class:[s&&"router-link-active",c&&"active","nav-item"]},[n("a",{staticClass:"nav-link",attrs:{href:a},on:{click:r}},[t._v(t._s(i.name))])])]}}])}),n("router-link",{attrs:{to:"/blockchain"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.href,i=e.route,r=e.navigate,s=e.isActive,c=e.isExactActive;return[n("li",{class:[s&&"router-link-active",c&&"active","nav-item"]},[n("a",{staticClass:"nav-link",attrs:{href:a},on:{click:r}},[t._v(t._s(i.name))])])]}}])})],1)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],o={name:"Navbar"},u=o,l=n("2877"),h=Object(l["a"])(u,s,c,!1,null,null,null),d=h.exports,p={name:"App",components:{Navbar:d}},f=p,g=(n("034f"),Object(l["a"])(f,i,r,!1,null,null,null)),v=g.exports,b=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container-fluid"},[n("h3",[t._v("ToDo-Liste")]),n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.taskInput,expression:"taskInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Aufgabe","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.taskInput},on:{input:function(e){e.target.composing||(t.taskInput=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.taskInput,type:"button",id:"button-addon2"},on:{click:t.create}},[t._v("Hinzufügen")])])]),n("p",[t._v("Unverifizierte Aktionen: "+t._s(t.pendingActions))]),n("button",{staticClass:"btn-primary btn",attrs:{disabled:t.pendingActions<1||t.mining},on:{click:t.mine}},[t.mining?n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" "+t._s(t.mining?"Minen...":"Mine")+" ")]),n("br"),t.parsing?n("p",{staticClass:"center"},[n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Parsen... ")]):t._e(),n("ul",{staticClass:"list-group",attrs:{id:"todo-list"}},t._l(t.list,(function(e){return n("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v(" "+t._s(e.text)+" "),n("span",{staticClass:"badge badge-danger badge-pill delete-btn",attrs:{id:e.id},on:{click:t.deleteItem}},[t._v("X")])])})),0)])])},k=[],y=(n("4de4"),n("0481"),n("4160"),n("caad"),n("d81d"),n("45fc"),n("a434"),n("4069"),n("2532"),n("159b"),n("2909")),w=(n("96cf"),n("1da1")),O=n("d4ec"),x=n("ec26"),S=["CREATE","DELETE"],_=function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now(),i=arguments.length>3?arguments[3]:void 0;if(Object(O["a"])(this,t),!S.includes(e))throw new Error("Aktion nicht vorhanden.");if(this.action=e,e===S[1]&&!n)throw new Error("Zum Löschen, die ID des zu löschenden Eintrages angeben.");this.id=n,e!==S[0]||n||(this.id=Object(x["a"])()),this.text=i,this.timestamp=a},j={name:"Todo",data:function(){return{taskInput:"",list:[],pendingActions:0,parseState:0,mining:!1,parsing:!1}},methods:{create:function(){Q.addPendingAction("CREATE",null,Date.now(),this.taskInput),this.taskInput="",this.pendingActions=Q.pendingActions.length},deleteItem:function(t){Q.pendingActions.some((function(e){return"DELETE"===e.action&&e.id===t.target.id}))||(Q.addPendingAction("DELETE",t.target.id),this.pendingActions=Q.pendingActions.length)},mine:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.mining=!0,e.next=3,Q.minePendingActions();case 3:t.mining=!1,t.pendingActions=Q.pendingActions.length,t.parseChain();case 6:case"end":return e.stop()}}),e)})))()},parseChain:function(){this.parsing=!0;var t=this,e=Object(y["a"])(Q.chain);e.splice(0,this.parseState);var n=e.map((function(e,n){if(t.parseState++,Array.isArray(e.body)){var a=Object(y["a"])(e.body).filter((function(t){return t instanceof _}));return a}return null})).flat().filter((function(t){return t instanceof _})).sort((function(t,e){return t.timestamp<e.timestamp?-1:t.timestamp>e.timestamp?0:t.timestamp===e.timestamp?(console.log("Zwei Aktionen haben den gleichen Timestamp, dies kann zu problemen Führen"),0):void 0}));n.forEach((function(e){t.action(e.action,e.id,e.text)})),this.parsing=!1},action:function(t,e,n){if(S.includes(t))switch(t){case"CREATE":this.list.push({text:n,id:e});break;case"DELETE":this.list=this.list.filter((function(t){return t.id!==e}));break}}},created:function(){this.pendingActions=Q.pendingActions.length,this.parseChain()}},C=j,A=(n("96ab"),Object(l["a"])(C,m,k,!1,null,"93155d3e",null)),E=A.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blockchain"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:t.validating},on:{click:t.validate}},[t.validating?n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" "+t._s(t.validating?"Verifizieren...":"Verifizieren")+" ")]),n("p",[t._v(" Blockchain Status: "),n("span",{class:["badge",t.valid?"badge-success":"badge-danger"]},[t._v(" "+t._s(t.valid?"Verifiziert":"Fehlerhaft")+" ")])]),n("br"),n("div",{staticClass:"btn-toolbar",attrs:{role:"toolbar","aria-label":"Blockchain bearbeiten"}},[n("div",{staticClass:"btn-group mr-2",attrs:{role:"group"}},[n("button",{staticClass:"btn btn-danger",attrs:{disabled:!t.changes},on:{click:t.saveChanges}},[t._v("Speichern")]),n("button",{staticClass:"btn btn-secondary",attrs:{disabled:!t.changes},on:{click:t.reloadJSON}},[t._v("Verwerfen")])]),n("div",{staticClass:"btn-group mr-2",attrs:{role:"group"}},[n("button",{staticClass:"btn btn-danger float right",attrs:{disabled:t.manipulating},on:{click:t.manipulate}},[t.manipulating?n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" "+t._s(t.manipulating?"Mine Block "+String(t.manipulationState+1):"Manipulieren")+" ")])])]),t.validJSON?t._e():n("p",{attrs:{id:"validityWarning"}},[t._v("Kein valides JSON")]),n("prism-editor",{attrs:{language:"js"},model:{value:t.chainString,callback:function(e){t.chainString=e},expression:"chainString"}})],1)},N=[],J=n("b85c"),T=(n("a630"),n("a15b"),n("ace4"),n("d3b7"),n("25f0"),n("3ca3"),n("4d90"),n("38cf"),n("2ca0"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("bee2")),D=n("ade3"),P=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3?arguments[3]:void 0;Object(O["a"])(this,t),Object(D["a"])(this,"nonce",0),Object(D["a"])(this,"hash",null),Object(D["a"])(this,"miningDuration",null),this.body=e,this.timestamp=n,this.previousHash=a,this.position=i}return Object(T["a"])(t,[{key:"calculateHash",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.sha256(JSON.stringify(this.body)+String(this.timestamp)+String(this.previousHash)+String(this.nonce));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()},{key:"mine",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.nonce=0,console.log("Mining..."),n=performance.now();case 3:if(String(this.hash).startsWith("0".repeat(e))){t.next=10;break}return this.nonce++,t.next=7,this.calculateHash();case 7:this.hash=t.sent,t.next=3;break;case 10:a=performance.now(),console.log(a-n),this.miningDuration=a-n;case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"assign",value:function(t){for(var e in console.log(t),t)this[e]=t[e]}}],[{key:"sha256",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var n,a,i,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new TextEncoder,new TextDecoder,a=n.encode(String(e)),t.next=5,crypto.subtle.digest("SHA-256",a);case 5:return i=t.sent,r=Array.from(new Uint8Array(i)),s=r.map((function(t){return t.toString(16).padStart(2,"0")})).join(""),t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),B=n("431a"),H=n.n(B),I={name:"Blockchain",components:{PrismEditor:H.a},data:function(){return{chainString:"",valid:!0,validating:!1,validJSON:!0,changes:!1,manipulating:!1,manipulationState:0}},methods:{validate:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.validating=!0,e.next=3,Q.validateChain();case 3:n=e.sent,t.valid=n,t.validating=!1;case 6:case"end":return e.stop()}}),e)})))()},reloadJSON:function(){this.chainString=JSON.stringify(Q.chain,void 0,2)},saveChanges:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var n,a,i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=JSON.parse(t.chainString),Q.length<n.length)for(a=0;a<Q.length-n.length;a++)i=new P,Q.chain.push(i);if(Q.length>n.length)for(r=0;r<Q.length-n.length;r++)Q.chain.pop();for(s=0;s<n.length;s++)JSON.stringify(n[s])!==JSON.stringify(Q.chain[s])&&(Array.isArray(n[s].body)&&(n[s].body=n[s].body.map((function(t){return t.action?new _(t.action,t.id,t.timestamp,t.text):t}))),Q.chain[s].assign(n[s]));return t.reloadJSON(),e.next=7,t.validate();case 7:case"end":return e.stop()}}),e)})))()},manipulate:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,!(Q.length<2)){e.next=3;break}return e.abrupt("return");case 3:t.manipulating=!0,a=Object(J["a"])(Q.chain),e.prev=5,a.s();case 7:if((i=a.n()).done){e.next=18;break}return r=i.value,r.hash=null,n.manipulationState=r.position,r.previousHash=r.position>0?Q.chain[r.position-1].hash:"",console.log(r.previousHash),console.log(Q.chain[r.position-1]),e.next=16,r.mine(Q.difficulty);case 16:e.next=7;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](5),a.e(e.t0);case 23:return e.prev=23,a.f(),e.finish(23);case 26:return t.manipulating=!1,t.reloadJSON(),e.next=31,t.validate();case 31:case"end":return e.stop()}}),e,null,[[5,20,23,26]])})))()},validateJSON:function(t){try{JSON.parse(t)}catch(e){return!1}return!0}},watch:{chainString:function(t,e){this.validJSON=this.validateJSON(t),this.changes=this.chainString!==JSON.stringify(Q.chain,void 0,2)}},created:function(){this.reloadJSON(),this.validate()}},M=I,z=(n("3190"),Object(l["a"])(M,R,N,!1,null,"2152720a",null)),L=z.exports;a["a"].use(b["a"]);var $=[{path:"/",name:"Todo",component:E},{path:"/blockchain",name:"Blockchain",component:L}],W=new b["a"]({routes:$}),G=W,K=n("2f62");a["a"].use(K["a"]);var V=new K["a"].Store({state:{chainParseState:0,list:[]},mutations:{},actions:{},modules:{}}),F=n("257e"),U=n("2caf"),Z=n("262e"),X=function(){function t(e){if(Object(O["a"])(this,t),Object(D["a"])(this,"chain",[]),"number"!==typeof e)throw new TypeError('Difficulty muss vom Typ "Number" sein.');if(e<1)throw new Error("Difficulty muss mindestens 1 sein.");this.difficulty=e,this.createGenesisBlock()}return Object(T["a"])(t,[{key:"createGenesisBlock",value:function(){if(this.chain.length>0)console.log("Kann Genesis Block nicht generieren, da die Kette bereits Blöcke enthält.");else{var t=new P({desc:"Genesis Block"},Date.now(),"",0);t.mine(this.difficulty),this.chain[0]=t}}},{key:"mineBlock",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new P(e,Date.now(),this.latestBlock.hash,this.length),t.next=3,n.mine(this.difficulty);case 3:this.chain.push(n);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"validateChain",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=!0,n=1;case 2:if(!(n<this.length)){t.next=19;break}return console.log(this.chain[n]),t.next=6,this.chain[n].calculateHash();case 6:return a=t.sent,t.next=9,this.chain[n-1].calculateHash();case 9:if(i=t.sent,a.startsWith("0".repeat(this.difficulty))&&i.startsWith("0".repeat(this.difficulty))){t.next=13;break}return e=!1,t.abrupt("break",19);case 13:if(this.chain[n].previousHash===i){t.next=16;break}return e=!1,t.abrupt("break",19);case 16:n++,t.next=2;break;case 19:return t.abrupt("return",e);case 20:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"length",get:function(){return this.chain.length}},{key:"latestBlock",get:function(){return this.chain[this.chain.length-1]}}]),t}(),q=function(t){Object(Z["a"])(n,t);var e=Object(U["a"])(n);function n(t){var a;return Object(O["a"])(this,n),a=e.call(this,t),Object(D["a"])(Object(F["a"])(a),"pendingActions",[]),a}return Object(T["a"])(n,[{key:"addPendingAction",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now(),a=arguments.length>3?arguments[3]:void 0;try{var i=new _(t,e,n,a);this.pendingActions.push(i)}catch(r){console.log(r)}}},{key:"minePendingActions",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.pendingActions.length>0)){t.next=6;break}return t.next=3,this.mineBlock(this.pendingActions);case 3:this.pendingActions=[],t.next=7;break;case 6:console.log("Keine Aktionen in der Warteschlange.");case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(X);a["a"].config.productionTip=!1;var Q=new q(3);new a["a"]({router:G,store:V,render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){},"96ab":function(t,e,n){"use strict";var a=n("0d25"),i=n.n(a);i.a},ad22:function(t,e,n){}});
//# sourceMappingURL=app.e16053eb.js.map