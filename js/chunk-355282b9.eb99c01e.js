(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-355282b9"],{"057f":function(t,e,r){var o=r("c6b6"),n=r("fc6a"),i=r("241c").f,s=r("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s(c)}};t.exports.f=function(t){return c&&"Window"==o(t)?a(t):i(n(t))}},"0b42":function(t,e,r){var o=r("da84"),n=r("e8b5"),i=r("68ee"),s=r("861d"),c=r("b622"),a=c("species"),f=o.Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,i(e)&&(e===f||n(e.prototype))?e=void 0:s(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?f:e}},"159b":function(t,e,r){var o=r("da84"),n=r("fdbc"),i=r("785a"),s=r("17c2"),c=r("9112"),a=function(t){if(t&&t.forEach!==s)try{c(t,"forEach",s)}catch(e){t.forEach=s}};for(var f in n)n[f]&&a(o[f]&&o[f].prototype);a(i)},"17c2":function(t,e,r){"use strict";var o=r("b727").forEach,n=r("a640"),i=n("forEach");t.exports=i?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var o=r("d039"),n=r("b622"),i=r("2d00"),s=n("species");t.exports=function(t){return i>=51||!o((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"408a":function(t,e,r){var o=r("e330");t.exports=o(1..valueOf)},"428f":function(t,e,r){var o=r("da84");t.exports=o},"4dae":function(t,e,r){var o=r("da84"),n=r("23cb"),i=r("07fa"),s=r("8418"),c=o.Array,a=Math.max;t.exports=function(t,e,r){for(var o=i(t),f=n(e,o),u=n(void 0===r?o:r,o),d=c(a(u-f,0)),l=0;f<u;f++,l++)s(d,l,t[f]);return d.length=l,d}},"4de4":function(t,e,r){"use strict";var o=r("23e7"),n=r("b727").filter,i=r("1dde"),s=i("filter");o({target:"Array",proto:!0,forced:!s},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"5ced":function(t,e,r){},"65f0":function(t,e,r){var o=r("0b42");t.exports=function(t,e){return new(o(t))(0===e?0:e)}},"746f":function(t,e,r){var o=r("428f"),n=r("1a2d"),i=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});n(e,t)||s(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var o=r("a04b"),n=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var s=o(e);s in t?n.f(t,s,i(0,r)):t[s]=r}},"85eb":function(t,e,r){},"8a89":function(t,e,r){"use strict";r("ad3e")},"99af":function(t,e,r){"use strict";var o=r("23e7"),n=r("da84"),i=r("d039"),s=r("e8b5"),c=r("861d"),a=r("7b0b"),f=r("07fa"),u=r("8418"),d=r("65f0"),l=r("1dde"),p=r("b622"),b=r("2d00"),h=p("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",y=n.TypeError,g=b>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=l("concat"),O=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:s(t)},w=!g||!_;o({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,o,n,i,s=a(this),c=d(s,0),l=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?s:arguments[e],O(i)){if(n=f(i),l+n>v)throw y(m);for(r=0;r<n;r++,l++)r in i&&u(c,l,i[r])}else{if(l>=v)throw y(m);u(c,l++,i)}return c.length=l,c}})},a00c:function(t,e,r){"use strict";r("85eb")},a4d3:function(t,e,r){"use strict";var o=r("23e7"),n=r("da84"),i=r("d066"),s=r("2ba4"),c=r("c65b"),a=r("e330"),f=r("c430"),u=r("83ab"),d=r("4930"),l=r("d039"),p=r("1a2d"),b=r("e8b5"),h=r("1626"),v=r("861d"),m=r("3a9b"),y=r("d9b5"),g=r("825a"),_=r("7b0b"),O=r("fc6a"),w=r("a04b"),T=r("577e"),C=r("5c6c"),L=r("7c73"),E=r("df75"),j=r("241c"),F=r("057f"),x=r("7418"),S=r("06cf"),N=r("9bf2"),P=r("37e8"),I=r("d1e7"),A=r("f36a"),k=r("6eeb"),M=r("5692"),D=r("f772"),$=r("d012"),B=r("90e3"),H=r("b622"),W=r("e538"),J=r("746f"),V=r("d44e"),G=r("69f3"),R=r("b727").forEach,U=D("hidden"),X="Symbol",Y="prototype",z=H("toPrimitive"),Q=G.set,q=G.getterFor(X),K=Object[Y],Z=n.Symbol,tt=Z&&Z[Y],et=n.TypeError,rt=n.QObject,ot=i("JSON","stringify"),nt=S.f,it=N.f,st=F.f,ct=I.f,at=a([].push),ft=M("symbols"),ut=M("op-symbols"),dt=M("string-to-symbol-registry"),lt=M("symbol-to-string-registry"),pt=M("wks"),bt=!rt||!rt[Y]||!rt[Y].findChild,ht=u&&l((function(){return 7!=L(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,r){var o=nt(K,e);o&&delete K[e],it(t,e,r),o&&t!==K&&it(K,e,o)}:it,vt=function(t,e){var r=ft[t]=L(tt);return Q(r,{type:X,tag:t,description:e}),u||(r.description=e),r},mt=function(t,e,r){t===K&&mt(ut,e,r),g(t);var o=w(e);return g(r),p(ft,o)?(r.enumerable?(p(t,U)&&t[U][o]&&(t[U][o]=!1),r=L(r,{enumerable:C(0,!1)})):(p(t,U)||it(t,U,C(1,{})),t[U][o]=!0),ht(t,o,r)):it(t,o,r)},yt=function(t,e){g(t);var r=O(e),o=E(r).concat(Tt(r));return R(o,(function(e){u&&!c(_t,r,e)||mt(t,e,r[e])})),t},gt=function(t,e){return void 0===e?L(t):yt(L(t),e)},_t=function(t){var e=w(t),r=c(ct,this,e);return!(this===K&&p(ft,e)&&!p(ut,e))&&(!(r||!p(this,e)||!p(ft,e)||p(this,U)&&this[U][e])||r)},Ot=function(t,e){var r=O(t),o=w(e);if(r!==K||!p(ft,o)||p(ut,o)){var n=nt(r,o);return!n||!p(ft,o)||p(r,U)&&r[U][o]||(n.enumerable=!0),n}},wt=function(t){var e=st(O(t)),r=[];return R(e,(function(t){p(ft,t)||p($,t)||at(r,t)})),r},Tt=function(t){var e=t===K,r=st(e?ut:O(t)),o=[];return R(r,(function(t){!p(ft,t)||e&&!p(K,t)||at(o,ft[t])})),o};if(d||(Z=function(){if(m(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?T(arguments[0]):void 0,e=B(t),r=function(t){this===K&&c(r,ut,t),p(this,U)&&p(this[U],e)&&(this[U][e]=!1),ht(this,e,C(1,t))};return u&&bt&&ht(K,e,{configurable:!0,set:r}),vt(e,t)},tt=Z[Y],k(tt,"toString",(function(){return q(this).tag})),k(Z,"withoutSetter",(function(t){return vt(B(t),t)})),I.f=_t,N.f=mt,P.f=yt,S.f=Ot,j.f=F.f=wt,x.f=Tt,W.f=function(t){return vt(H(t),t)},u&&(it(tt,"description",{configurable:!0,get:function(){return q(this).description}}),f||k(K,"propertyIsEnumerable",_t,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),R(E(pt),(function(t){J(t)})),o({target:X,stat:!0,forced:!d},{for:function(t){var e=T(t);if(p(dt,e))return dt[e];var r=Z(e);return dt[e]=r,lt[r]=e,r},keyFor:function(t){if(!y(t))throw et(t+" is not a symbol");if(p(lt,t))return lt[t]},useSetter:function(){bt=!0},useSimple:function(){bt=!1}}),o({target:"Object",stat:!0,forced:!d,sham:!u},{create:gt,defineProperty:mt,defineProperties:yt,getOwnPropertyDescriptor:Ot}),o({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:Tt}),o({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(_(t))}}),ot){var Ct=!d||l((function(){var t=Z();return"[null]"!=ot([t])||"{}"!=ot({a:t})||"{}"!=ot(Object(t))}));o({target:"JSON",stat:!0,forced:Ct},{stringify:function(t,e,r){var o=A(arguments),n=e;if((v(e)||void 0!==t)&&!y(t))return b(e)||(e=function(t,e){if(h(n)&&(e=c(n,this,t,e)),!y(e))return e}),o[1]=e,s(ot,null,o)}})}if(!tt[z]){var Lt=tt.valueOf;k(tt,z,(function(t){return c(Lt,this)}))}V(Z,X),$[U]=!0},a640:function(t,e,r){"use strict";var o=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&o((function(){r.call(null,e||function(){return 1},1)}))}},a9e3:function(t,e,r){"use strict";var o=r("83ab"),n=r("da84"),i=r("e330"),s=r("94ca"),c=r("6eeb"),a=r("1a2d"),f=r("7156"),u=r("3a9b"),d=r("d9b5"),l=r("c04e"),p=r("d039"),b=r("241c").f,h=r("06cf").f,v=r("9bf2").f,m=r("408a"),y=r("58a8").trim,g="Number",_=n[g],O=_.prototype,w=n.TypeError,T=i("".slice),C=i("".charCodeAt),L=function(t){var e=l(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,r,o,n,i,s,c,a,f=l(t,"number");if(d(f))throw w("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=y(f),e=C(f,0),43===e||45===e){if(r=C(f,2),88===r||120===r)return NaN}else if(48===e){switch(C(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(i=T(f,2),s=i.length,c=0;c<s;c++)if(a=C(i,c),a<48||a>n)return NaN;return parseInt(i,o)}return+f};if(s(g,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var j,F=function(t){var e=arguments.length<1?0:_(L(t)),r=this;return u(O,r)&&p((function(){m(r)}))?f(Object(e),r,F):e},x=o?b(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;x.length>S;S++)a(_,j=x[S])&&!a(F,j)&&v(F,j,h(_,j));F.prototype=O,O.constructor=F,c(n,g,F)}},ad3e:function(t,e,r){},b64b:function(t,e,r){var o=r("23e7"),n=r("7b0b"),i=r("df75"),s=r("d039"),c=s((function(){i(1)}));o({target:"Object",stat:!0,forced:c},{keys:function(t){return i(n(t))}})},b727:function(t,e,r){var o=r("0366"),n=r("e330"),i=r("44ad"),s=r("7b0b"),c=r("07fa"),a=r("65f0"),f=n([].push),u=function(t){var e=1==t,r=2==t,n=3==t,u=4==t,d=6==t,l=7==t,p=5==t||d;return function(b,h,v,m){for(var y,g,_=s(b),O=i(_),w=o(h,v),T=c(O),C=0,L=m||a,E=e?L(b,T):r||l?L(b,0):void 0;T>C;C++)if((p||C in O)&&(y=O[C],g=w(y,C,_),t))if(e)E[C]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return C;case 2:f(E,y)}else switch(t){case 4:return!1;case 7:f(E,y)}return d?-1:n||u?u:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bb51:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("TheTodosManager",{style:{height:t.appHeight},attrs:{todosFiltred:t.todosFiltred,todoFilterType:t.todoFilterType,filtersTypesList:t.filtersTypesList,todosActiveLength:t.todosActiveLength,todosCompletedLength:t.todosCompletedLength},on:{addTodo:t.addTodo,switchCompleteStatusTodoById:t.switchCompleteStatusTodoById,setTodoFilterType:t.setTodoFilterType,clearCompleted:t.clearCompletedTodos}})],1)},n=[];r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"todos__container"},[r("form",{staticClass:"todos__header",on:{submit:function(e){e.preventDefault(),t.$emit("addTodo",t.todo)&&(t.todo="")}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],staticClass:"todos__header_input",attrs:{type:"text",placeholder:"Whats needs to be done?"},domProps:{value:t.todo},on:{input:function(e){e.target.composing||(t.todo=e.target.value)}}}),t._m(0)]),r("ul",{staticClass:"todos__body"},[t.todosActiveLength+t.todosCompletedLength?[r("div",{staticClass:"todos__body_scroll"},t._l(t.todosFiltred,(function(e){return r("li",{key:e.id},[r("button",{staticClass:"todos__body_item todos__button",class:{"todos__body_item-active":e.isComplete},domProps:{textContent:t._s(e.text)},on:{click:function(r){return r.preventDefault(),t.$emit("switchCompleteStatusTodoById",e.id)}}})])})),0)]:r("div",{staticClass:"todos__body_empty"},[r("img",{attrs:{src:"img/rain.svg"}}),r("span",[t._v("Todos list is empty")])])],2),r("div",{staticClass:"todos__footer"},[r("span",{staticClass:"todos__footer_counter",domProps:{textContent:t._s(t.todosFooterCounterText)}}),r("div",{ref:"filtersList",staticClass:"todos__footer_filters",class:{"todos__footer_filters-open":t.isOpenFiltersList}},t._l(t.filtersTypesList,(function(e,o){return r("button",{key:o,staticClass:"todos__footer_filters_item todos__button",class:{"todos__button-active":t.todoFilterType===e},domProps:{textContent:t._s(e)},on:{click:function(r){return t.$emit("setTodoFilterType",e)}}})})),0),r("div",{ref:"filtersSwitchButton",staticClass:"todos__footer_filters-switch",on:{click:function(e){t.isOpenFiltersList=!t.isOpenFiltersList}}},[r("img",{attrs:{src:"img/filter.svg"}})]),r("button",{staticClass:"todos__footer_clear todos__button",attrs:{disabled:!t.todosCompletedLength},domProps:{textContent:t._s("Clear completed")},on:{click:function(e){t.todosCompletedLength&&t.$emit("clearCompleted")}}})])])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"todos__header_submit",attrs:{type:"submit"}},[r("img",{attrs:{src:"img/plus.svg"}})])}],u=(r("caad"),r("2532"),r("a9e3"),r("99af"),r("2ef0")),d=r.n(u),l={name:"TheTodosManager",props:{todosFiltred:{type:Object,default:function(){return{}}},filtersTypesList:{type:Array,default:function(){return[]}},todoFilterType:{type:String,default:function(){var t=d.a.includes(this.filtersTypesList,"all");return t?"all":d.a.first(this.filtersTypesList)}},todosActiveLength:{type:Number,default:function(){return 0}},todosCompletedLength:{type:Number,default:function(){return 0}}},data:function(){return{todo:null,isOpenFiltersList:!1}},computed:{todosFooterCounterText:function(){var t=this.todosActiveLength;return t?"".concat(t," ").concat(1==t?"item":"items"," left"):"all items completed"}},beforeMount:function(){document.addEventListener("click",this.closeFiltersListEvent)},beforeDestroy:function(){document.removeEventListener("click",this.closeFiltersListEvent)},methods:{closeFiltersListEvent:function(t){var e=this.$refs.filtersSwitchButton,r=this.$refs.filtersList,o=t.target===r||d.a.includes(r.children,t.target),n=t.target===e||d.a.includes(e.children,t.target);o||n||(this.isOpenFiltersList=!1)}}},p=l,b=(r("8a89"),r("2877")),h=Object(b["a"])(p,a,f,!1,null,"44f3eb4a",null),v=h.exports,m=r("2f62"),y={name:"Home",components:{TheTodosManager:v},data:function(){return{isWidthLess768:!1,innerHeight:0}},computed:c(c(c({},Object(m["d"])(["todoFilterType","filtersTypesList"])),Object(m["b"])(["todosFiltred","todosActiveLength","todosCompletedLength"])),{},{appHeight:function(){return this.isWidthLess768?"".concat(this.innerHeight,"px"):"100%"}}),beforeMount:function(){var t=this,e=function(){document.body.offsetWidth&&(t.isWidthLess768=document.body.offsetWidth<=768,t.innerHeight=innerHeight)};e(),window.addEventListener("resize",e)},methods:c({},Object(m["c"])(["addTodo","switchCompleteStatusTodoById","setTodoFilterType","clearCompletedTodos"]))},g=y,_=(r("cccb"),r("a00c"),Object(b["a"])(g,o,n,!1,null,"0770d5a7",null));e["default"]=_.exports},cccb:function(t,e,r){"use strict";r("5ced")},dbb4:function(t,e,r){var o=r("23e7"),n=r("83ab"),i=r("56ef"),s=r("fc6a"),c=r("06cf"),a=r("8418");o({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,o=s(t),n=c.f,f=i(o),u={},d=0;while(f.length>d)r=n(o,e=f[d++]),void 0!==r&&a(u,e,r);return u}})},e439:function(t,e,r){var o=r("23e7"),n=r("d039"),i=r("fc6a"),s=r("06cf").f,c=r("83ab"),a=n((function(){s(1)})),f=!c||a;o({target:"Object",stat:!0,forced:f,sham:!c},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})},e538:function(t,e,r){var o=r("b622");e.f=o},e8b5:function(t,e,r){var o=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-355282b9.eb99c01e.js.map