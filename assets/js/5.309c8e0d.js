(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{343:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(78),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(184),core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(57),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80),core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(37),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(74),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(407),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(107),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(121),_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(122),_dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(357),_books_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(390),prismjs__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(391),prismjs__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_12__),prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(392),prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_13__),vue_codemirror__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(393),vue_codemirror__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(vue_codemirror__WEBPACK_IMPORTED_MODULE_14__),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(394),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_15__),codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(395),codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_16__),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(396),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17__),keys=[];for(var key in _dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__.a.config)"function"!=typeof _dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__.a.config[key]&&"keys"!==key&&keys.push(key);var codify=function(_){return"const options = {\n".concat(keys.map((function(_){return"  // ".concat(_,": ").concat(_dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__.a.config[_],",")})).join("\n"),'\n  keys: [\n    "title",\n    "author.firstName"\n  ]\n};\n\nconst fuse = new Fuse(list, options);\n\n// Change the pattern\nconst pattern = "').concat(_,'"\n\nreturn fuse.search(pattern)')},DemoFuse=function(_){Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__.a)(s,_);var e=Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__.a)(s);function s(_,t,r){return Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.a)(this,s),e.call(this,_,t,r)}return Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.a)(s,[{key:"search",value:function(_){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1},t=Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_kiro_Workspace_fuse_lib_fuse_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(s.prototype),"search",this).call(this,_,e);return{pattern:_,results:t}}}]),s}(_dist_fuse_esm_js__WEBPACK_IMPORTED_MODULE_10__.a);__webpack_exports__.a={name:"Demo",components:{codemirror:vue_codemirror__WEBPACK_IMPORTED_MODULE_14__.codemirror},data:function(){return{listJSON:JSON.stringify(_books_js__WEBPACK_IMPORTED_MODULE_11__.a,null,2),list:_books_js__WEBPACK_IMPORTED_MODULE_11__.a,code:codify(""),result:"",outputHtml:"",count:0,searchTime:0,listErrorMessage:"",codeErrorMessage:"",hasErrors:!1,pattern:"",showCode:!0,listOptions:{tabSize:2,mode:"text/javascript",theme:"default",lineNumbers:!0,line:!0},cmOptions:{tabSize:2,mode:"text/javascript",theme:"default",lineNumbers:!0,line:!0}}},methods:{toggleCode:function(){this.showCode=!this.showCode},onCmCodeChange:function(_){this.code=_;try{this.parse(),this.update()}catch(_){}},onCmListChange:function onCmListChange(newCode){try{this.list=eval(newCode),this.listErrorMessage=null,this.hasErrors=!!this.codeErrorMessage,this.update()}catch(_){throw this.listErrorMessage=_,this.hasErrors=!0,this.outputHtml="",_}},parse:function parse(){try{var func=eval("[function (Fuse, list){".concat(this.code,"}][0]")),start=(new Date).getTime(),_func=func(DemoFuse,this.list),pattern=_func.pattern,results=_func.results;this.result=results,this.pattern=pattern;var end=(new Date).getTime();this.searchTime=end-start+" ms",this.codeErrorMessage=null,this.hasErrors=!!this.listErrorMessage}catch(_){throw this.codeErrorMessage=_,this.hasErrors=!0,this.outputHtml="",_}},update:function(){if(!this.hasErrors){var _=prismjs__WEBPACK_IMPORTED_MODULE_12___default.a.highlight(JSON.stringify(this.result,null,2),prismjs__WEBPACK_IMPORTED_MODULE_12___default.a.languages.json,"json");this.count=this.result.length,this.outputHtml=_}},onPatternKeyUp:function(){this.code=codify(this.pattern)}},mounted:function(){this.parse(),this.update()}}},350:function(_,e,s){},390:function(_,e,s){"use strict";e.a=[{title:"Old Man's War",author:{firstName:"John",lastName:"Scalzi"}},{title:"The Lock Artist",author:{firstName:"Steve",lastName:"Hamilton"}},{title:"HTML5",author:{firstName:"Remy",lastName:"Sharp"}},{title:"Right Ho Jeeves",author:{firstName:"P.D",lastName:"Woodhouse"}},{title:"The Code of the Wooster",author:{firstName:"P.D",lastName:"Woodhouse"}},{title:"Thank You Jeeves",author:{firstName:"P.D",lastName:"Woodhouse"}},{title:"The DaVinci Code",author:{firstName:"Dan",lastName:"Brown"}},{title:"Angels & Demons",author:{firstName:"Dan",lastName:"Brown"}},{title:"The Silmarillion",author:{firstName:"J.R.R",lastName:"Tolkien"}},{title:"Syrup",author:{firstName:"Max",lastName:"Barry"}},{title:"The Lost Symbol",author:{firstName:"Dan",lastName:"Brown"}},{title:"The Book of Lies",author:{firstName:"Brad",lastName:"Meltzer"}},{title:"Lamb",author:{firstName:"Christopher",lastName:"Moore"}},{title:"Fool",author:{firstName:"Christopher",lastName:"Moore"}},{title:"Incompetence",author:{firstName:"Rob",lastName:"Grant"}},{title:"Fat",author:{firstName:"Rob",lastName:"Grant"}},{title:"Colony",author:{firstName:"Rob",lastName:"Grant"}},{title:"Backwards, Red Dwarf",author:{firstName:"Rob",lastName:"Grant"}},{title:"The Grand Design",author:{firstName:"Stephen",lastName:"Hawking"}},{title:"The Book of Samson",author:{firstName:"David",lastName:"Maine"}},{title:"The Preservationist",author:{firstName:"David",lastName:"Maine"}},{title:"Fallen",author:{firstName:"David",lastName:"Maine"}},{title:"Monster 1959",author:{firstName:"David",lastName:"Maine"}}]},397:function(_,e,s){"use strict";var t=s(350);s.n(t).a},413:function(_,e,s){"use strict";s.r(e);var t=s(343).a,r=(s(397),s(10)),a=Object(r.a)(t,(function(){var _=this,e=_.$createElement,s=_._self._c||e;return s("div",{staticClass:"live-demo"},[s("article",{staticClass:"code-container"},[_._m(0),_._v(" "),s("codemirror",{ref:"listEditor",staticClass:"cm-list-editor",attrs:{value:_.listJSON,options:_.listOptions},on:{input:_.onCmListChange}})],1),_._v(" "),_.listErrorMessage?s("span",{staticClass:"error-msg"},[_._v("\n    "+_._s(_.listErrorMessage)+"\n  ")]):_._e(),_._v(" "),s("section",{staticClass:"search-section"},[s("input",{directives:[{name:"model",rawName:"v-model",value:_.pattern,expression:"pattern"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:_.pattern},on:{keyup:_.onPatternKeyUp,input:function(e){e.target.composing||(_.pattern=e.target.value)}}})]),_._v(" "),s("div",{staticClass:"code-container-wrapper"},[s("Content",{attrs:{"slot-key":"middle"}}),_._v(" "),s("article",{staticClass:"code-container"},[_._m(1),_._v(" "),s("codemirror",{ref:"cmEditor",staticClass:"cm-code-editor",attrs:{value:_.code,options:_.cmOptions},on:{input:_.onCmCodeChange}})],1),_._v(" "),_.codeErrorMessage?s("span",{staticClass:"error-msg"},[_._v("\n      "+_._s(_.codeErrorMessage)+"\n    ")]):_._e()],1),_._v(" "),s("article",{staticClass:"code-container"},[s("span",{staticClass:"header"},[_.hasErrors?s("span",[_._v("--")]):s("span",[s("b",[_._v("Results:")]),_._v(" found "+_._s(_.count)+" items in "+_._s(_.searchTime)+"\n      ")])]),_._v(" "),s("pre",{staticClass:"output"},[s("code",{domProps:{innerHTML:_._s(_.outputHtml)}})])])])}),[function(){var _=this.$createElement,e=this._self._c||_;return e("span",{staticClass:"header"},[e("span",[this._v("list.json")]),this._v(" "),e("span",{staticClass:"instruction"},[this._v("(list of items to search)")])])},function(){var _=this.$createElement,e=this._self._c||_;return e("span",{staticClass:"header"},[e("span",[this._v("main.js")]),this._v(" "),e("span",{staticClass:"instruction"},[this._v("(entry module)")])])}],!1,null,null,null);e.default=a.exports}}]);