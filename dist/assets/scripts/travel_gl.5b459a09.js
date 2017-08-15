webpackJsonp([1],{

/***/ 2:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/travel/gl/app.vue
//
//
//
//
//
//
//
//
//

/* harmony default export */ var app_defaultExport = ({
    data() {
        return {
            journeys: [{
                date: '2017-8-20',
                list: [
                    {
                        time: '9:30',
                        location: '广州南',
                        description: '搭乘动车D2962次8车7c,7d前往桂林北',
                        duration: '2.5h'
                    },
                    {
                        time: '12:30',
                        location: '桂林北附近',
                        description: '吃午饭',
                        duration: '1h'
                    },
                    {
                        time: '14:00左右',
                        location: '精通大酒店',
                        description: '办理入住手续',
                        duration: '1h',
                        warn: '需买漓江票和两江四湖的票'
                    }, {
                        time: '16:30',
                        location: '精通大酒店附近',
                        description: '吃晚饭',
                        duration: '1h',
                    }, {
                        time: '18:40/19:30',
                        location: '两江四湖',
                        description: '游览两江四湖',
                        duration: '3h',
                        warn: '尚未买票'
                    }
                ]
            }, {
                date: '2017-8-21',
                list: [{
                    time: '8:00',
                    location: '精通大酒店',
                    description: '吃酒店早餐',
                    duration: '1h'
                }, {
                    time: '9:30',
                    location: '象山公园',
                    description: '去看大象山',
                    duration: '2.5h',
                    warn: '尚未买票'
                }, {
                    time: '12:00',
                    location: '未知',
                    description: '吃午饭',
                    duration: '1h'
                }, {
                    time: '14:00',
                    location: '靖江王府 + 独秀峰',
                    description: '游览靖江王府和爬独秀峰',
                    duration: '3h'
                }, {
                    time: '17:00',
                    location: '正阳步行街',
                    description: '逛街+吃晚饭',
                    duration: '1h'
                }, {
                    time: '18:30',
                    location: '日月双塔',
                    description: '沿湖走',
                    duration: '1.5h'
                }]
            }, {
                date: '2017-8-22',
                list: [{
                    time: '06:00',
                    location: '精通大酒店',
                    description: '退房 + 漓江一日游',
                    duration: '11h',
                    warn: '需要买票'
                }, {
                    time: '19:00',
                    location: '汉普顿度假酒店',
                    description: '办理入住手续'
                },{
                    time:'20:00',
                    location:'西街',
                    description:'逛街+吃'
                }]
            },{
                date:'2017-8-23',
                list:[{
                    time:'9:00',
                    location:'遇龙河',
                    description:'搭车前往金龙桥码头，参加金龙桥-旧县漂流',
                    warn:'已买票，飞猪订单编号45534044113030941,联系电话：18207735815',
                    duration:'3h'
                },{
                    time:'12:00',
                    location:'旧县',
                    description:'吃饭'
                },{
                    time:'13:30',
                    location:'十里画廊',
                    description:'旧县骑行经十里画廊回阳朔',
                    duration:'4h'
                },{
                    time:'20:00',
                    location:'刘三姐印象',
                    description:'观看刘三姐演出',
                    duration:'1h',
                    warn:'未买票'
                }]
            },{
                date:'2017-8-24'
            }]
        }
    }
});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-16faef21","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/travel/gl/app.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "journeys"
    }
  }, _vm._l((_vm.journeys), function(journey) {
    return _c('journey', {
      key: journey.date,
      attrs: {
        "date": journey.date
      }
    }, [_c('div', {
      staticClass: "list-group"
    }, _vm._l((journey.list), function(todo) {
      return _c('todo', {
        key: todo.time,
        attrs: {
          "todo": todo
        }
      })
    }))])
  }))
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var gl_app_defaultExport = (esExports);
// CONCATENATED MODULE: ./src/app/travel/gl/app.vue
function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  app_defaultExport,
  gl_app_defaultExport,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var travel_gl_app_defaultExport = (Component.exports);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/travel/gl/journey.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var journey_defaultExport = ({
    props: {
        date: {
            type: String,
            required: true
        }
    }
});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-37548940","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/travel/gl/journey.vue
var journey_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n        " + _vm._s(_vm.date) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "list-group"
  }, [_vm._t("default")], 2)])])
}
var journey_staticRenderFns = []
var journey_esExports = { render: journey_render, staticRenderFns: journey_staticRenderFns }
/* harmony default export */ var gl_journey_defaultExport = (journey_esExports);
// CONCATENATED MODULE: ./src/app/travel/gl/journey.vue
var journey_normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var journey___vue_styles__ = null
/* scopeId */
var journey___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var journey___vue_module_identifier__ = null
var journey_Component = journey_normalizeComponent(
  journey_defaultExport,
  gl_journey_defaultExport,
  journey___vue_styles__,
  journey___vue_scopeId__,
  journey___vue_module_identifier__
)

/* harmony default export */ var travel_gl_journey_defaultExport = (journey_Component.exports);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/travel/gl/todo.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var todo_defaultExport = ({
    props:{
        todo: {
            type: Object,
        }
    }
});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-382c29f6","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/travel/gl/todo.vue
var todo_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "panel panel-success"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-3"
  }, [_vm._v("\n                    时间:" + _vm._s(_vm.todo.time) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-3"
  }, [_vm._v("\n                    地点:" + _vm._s(_vm.todo.location) + "\n                ")]), _vm._v(" "), (_vm.todo.duration) ? _c('div', {
    staticClass: "col-xs-3"
  }, [_vm._v("\n                    预花费时间:" + _vm._s(_vm.todo.duration) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n            " + _vm._s(_vm.todo.description) + "\n        ")]), _vm._v(" "), (_vm.todo.warn) ? _c('div', {
    staticClass: "panel-footer text-danger"
  }, [_vm._v("\n            " + _vm._s(_vm.todo.warn) + "\n        ")]) : _vm._e()])])
}
var todo_staticRenderFns = []
var todo_esExports = { render: todo_render, staticRenderFns: todo_staticRenderFns }
/* harmony default export */ var gl_todo_defaultExport = (todo_esExports);
// CONCATENATED MODULE: ./src/app/travel/gl/todo.vue
var todo_normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var todo___vue_styles__ = null
/* scopeId */
var todo___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var todo___vue_module_identifier__ = null
var todo_Component = todo_normalizeComponent(
  todo_defaultExport,
  gl_todo_defaultExport,
  todo___vue_styles__,
  todo___vue_scopeId__,
  todo___vue_module_identifier__
)

/* harmony default export */ var travel_gl_todo_defaultExport = (todo_Component.exports);

// CONCATENATED MODULE: ./src/app/travel/gl?__webpack__
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_less__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(8);
/**
 * @author chenjiancai
 * @time 2017-08-14
 */







__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component('journey', travel_gl_journey_defaultExport);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component('todo', travel_gl_todo_defaultExport);

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
    el: "#app",
    render(h) {
        return h(travel_gl_app_defaultExport);
    }
});

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("256446d7", content, true);

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(41)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

},[35]);