module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/bl-right","2":"components/copyright","3":"components/event-data","4":"components/event-form","5":"components/main-logo","6":"components/page-header","7":"pages/contact","8":"pages/event-progress","9":"pages/index","10":"pages/news","11":"pages/partner","12":"pages/portfolio/_item","13":"pages/portfolio/index","14":"pages/service","15":"pages/team","16":"pages/tenders"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("26a9005a", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sotrud1.6395fc8.png";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAOCAYAAADE84fzAAAB+klEQVQ4jX3Uy29NURTH8c85vTchUQ2KgdIqWi31GImhCQOMjJiRSEQkGHTQ+BcIAyZNGBiIRIwwIxIhIeItFU1aidajJFrPEq1rsNeJk7Zxk52bs/bZ37V+a/3OzkZM+9Whigpq+B2rFrFqvDMZ8UnkpTN/ijOVKeAqFqIdi/ETLzCIDEuwGg0Yw3OMYh46MR9f4sxQGV4Xm9twGOvxCscwHIA92I8m3EdPvLMTRyJ5P7rxOi/BG7AVRwP8HZfwAI0BPoBmvMcFfMKOOLMc4xHvR17A60vgLnxDL85Gkl04GBW/w3HcxOZQ2RKJTuIiRjCRYza2hKyN+IpzOIOP2B7g5hL4KjbgUFQ8htM4jzehoJZjAXZjU6i4g8sYCOA+rMBEQK9J7tiLNdKgr+NKJJ8o+pzjBx7G0EQlXdJwR3Ev/iuSIzokW94N+Znkrg7MjWdQ153s1h8Z10b/2vAZT/BIGnYbVmEZXuKG5LB2tIa6YbzFrwIuqh8MJe0B6IwhPcUzyYqtkaBF8vItzIp4a1Q/FIrGCzjJIQPSh9QmOaMZfXgc6hqjbSsxB7dj1Qe8BYsk+46UP6JaZO3FB6yTWpaFoj6cCIVLJYfk0YpT0jCbJKdUkWUz3C2V6GVxf2T+3ReVAFbiudjLYhXxHJMzwSlNfIqy/+1Ni/8FFZqImsONhy8AAAAASUVORK5CYII="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAOCAYAAADE84fzAAAB/ElEQVQ4jYXUzW+NQRQG8N/tbZMqQSWUpEWrqj4igoSwQGJHVwixsCBpLGwk+k/YIBGs2BELYcEGiaUQQjV63VBto5VclJRISW97LeZcfUPEJJN53zPnPOeZc56ZXImcv0fFv+3+s/d71MbMYxp1KIdjBTWxVu3TsdZl9vKYiln+EzyHzdiPWRjBdYxiDQ5hPt7hJvoibie6UI8XuIWh7Alq42cSG7ADY1iCc8F0ZYB8RRtO403EbcN6fMAiXAwSFcj3pI8f+IjVWI5WNOAx3oatPdZ56McAvmEtmmMfimGX70mGCbyPknQEw9Zgfg+vsCxO0RaJn6AXX9CJpVgVRIuYqILDT5RirsiwreA+XqMlErRHgqd4hu+ZmM7AKtTMYKtEXQuRuYImbJWaXohylNGILbF+lpo8GDjN2IiGLHit1Mgu7A7wl7gS5dmDveE3gMsYDsb7sD1wHuEaxqpSrJe6fQQnJOkN4DyeB+ipSD6MC7iDhTiOo5gTJTqLB5ioXqImHMRJSQ1DkhQfYlcGeCSAb2A2jqE7vvtwBneFWmriyB04LF2iwXC6jQVhXxyML+EqPmETDgRwbwZ4vFrnXCkxb5E0Pjca1C9JrBHrokzjkiRHox9tEVMvKawo3ZXJLDjprai+F+VwmJbejToz78dk7OcyMblMzJTM+AUTHpNtlO2B8wAAAABJRU5ErkJggg=="

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
module.exports = __webpack_require__(83);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("3d2a1428", content, true)

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(39);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(48);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&subset=latin,cyrillic);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"ImpactRegular\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");font-style:normal;font-weight:400}@font-face{font-family:\"RalewayRegular\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ")format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\");font-style:normal;font-weight:400}@font-face{font-family:\"RalewayLight\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"truetype\");font-style:normal;font-weight:400}@font-face{font-family:\"RalewayBold\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ")format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format(\"truetype\");font-style:normal;font-weight:400}@font-face{font-family:\"RalewayMedium\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ")format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format(\"truetype\");font-style:normal;font-weight:400}@font-face{font-family:\"RalewaySemiBold\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format(\"truetype\");font-style:normal;font-weight:400}@font-face{font-family:\"Intro\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");src:local(\"fonts/Intro/Intro Black\"),local(\"../css/fonts/Intro/Intro-Black\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format(\"truetype\");font-weight:900;font-style:normal}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ImpactRegular.f0d47c8.eot";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ImpactRegular.8eabcc9.woff";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/ImpactRegular.2a98d04.ttf";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayRegular.1ee328d.eot";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayRegular.ce5cc62.woff";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayRegular.0c4f82c.ttf";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayLight.5e6c442.eot";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayLight.edae1b6.woff";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayLight.c28dfdd.ttf";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayBold.895d439.eot";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayBold.630608d.woff";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayBold.2d5ba47.ttf";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayMedium.5ba7532.eot";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayMedium.df0dd0d.woff";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewayMedium.f42f013.ttf";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewaySemiBold.013ec6b.eot";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewaySemiBold.49707be.woff";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RalewaySemiBold.de2579e.ttf";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Intro-Black.0503127.eot";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Intro-Black.f025445.woff";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Intro-Black.0cce764.ttf";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("55469113", content, true)

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__slides,.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slide,.glide__slides--dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide--rtl{direction:rtl}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("670f4236", content, true)

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(53);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(54);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(55);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(56);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#lightcase" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"lightcase\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");font-weight:400;font-style:normal}[class*=lightcase-icon-]:before{font-family:\"lightcase\",sans-serif;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;text-align:center;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1em}.lightcase-icon-play:before{content:\"\\e800\"}.lightcase-icon-pause:before{content:\"\\e801\"}.lightcase-icon-close:before{content:\"\\e802\"}.lightcase-icon-prev:before{content:\"\\e803\"}.lightcase-icon-next:before{content:\"\\e804\"}.lightcase-icon-spin:before{content:\"\\e805\"}@-webkit-keyframes lightcase-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes lightcase-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}#lightcase-case{display:none;position:fixed;z-index:2002;top:50%;left:50%;font-family:arial,sans-serif;font-size:13px;line-height:1.5;text-align:left;text-shadow:0 0 10px rgba(0,0,0,.5)}@media screen and (max-width:640px){html[data-lc-type=ajax] #lightcase-case,html[data-lc-type=inline] #lightcase-case{position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;padding:55px 0 70px;width:100%!important;height:100%!important;overflow:auto!important}}@media screen and (min-width:641px){html:not([data-lc-type=error]) #lightcase-content{position:relative;z-index:1;text-shadow:none;background-color:#fff;-o-box-shadow:0 0 30px rgba(0,0,0,.5);box-shadow:0 0 30px rgba(0,0,0,.5);-webkit-backface-visibility:hidden}}@media screen and (min-width:641px){html[data-lc-type=image] #lightcase-content,html[data-lc-type=video] #lightcase-content{background-color:#333}}html[data-lc-type=ajax] #lightcase-content,html[data-lc-type=error] #lightcase-content,html[data-lc-type=inline] #lightcase-content{-o-box-shadow:none;box-shadow:none}@media screen and (max-width:640px){html[data-lc-type=ajax] #lightcase-content,html[data-lc-type=error] #lightcase-content,html[data-lc-type=inline] #lightcase-content{position:relative!important;top:auto!important;left:auto!important;width:auto!important;height:auto!important;margin:0!important;padding:0!important;border:none!important;background:none!important}}html[data-lc-type=ajax] #lightcase-content .lightcase-contentInner,html[data-lc-type=error] #lightcase-content .lightcase-contentInner,html[data-lc-type=inline] #lightcase-content .lightcase-contentInner{-o-box-sizing:border-box;box-sizing:border-box}@media screen and (max-width:640px){html[data-lc-type=ajax] #lightcase-content .lightcase-contentInner,html[data-lc-type=error] #lightcase-content .lightcase-contentInner,html[data-lc-type=inline] #lightcase-content .lightcase-contentInner{padding:15px}html[data-lc-type=ajax] #lightcase-content .lightcase-contentInner,html[data-lc-type=ajax] #lightcase-content .lightcase-contentInner>*,html[data-lc-type=error] #lightcase-content .lightcase-contentInner,html[data-lc-type=error] #lightcase-content .lightcase-contentInner>*,html[data-lc-type=inline] #lightcase-content .lightcase-contentInner,html[data-lc-type=inline] #lightcase-content .lightcase-contentInner>*{width:100%!important;max-width:none!important}html[data-lc-type=ajax] #lightcase-content .lightcase-contentInner>:not(iframe),html[data-lc-type=error] #lightcase-content .lightcase-contentInner>:not(iframe),html[data-lc-type=inline] #lightcase-content .lightcase-contentInner>:not(iframe){height:auto!important;max-height:none!important}}@media screen and (max-width:640px){html.lightcase-isMobileDevice[data-lc-type=iframe] #lightcase-content .lightcase-contentInner iframe{overflow:auto;-webkit-overflow-scrolling:touch}}@media screen and (max-width:640px) and (min-width:641px){html[data-lc-type=image] #lightcase-content .lightcase-contentInner,html[data-lc-type=video] #lightcase-content .lightcase-contentInner{line-height:.75}}html[data-lc-type=image] #lightcase-content .lightcase-contentInner{position:relative;overflow:hidden!important}@media screen and (max-width:640px){html[data-lc-type=ajax] #lightcase-content .lightcase-contentInner .lightcase-inlineWrap,html[data-lc-type=error] #lightcase-content .lightcase-contentInner .lightcase-inlineWrap,html[data-lc-type=inline] #lightcase-content .lightcase-contentInner .lightcase-inlineWrap{position:relative!important;top:auto!important;left:auto!important;width:auto!important;height:auto!important;margin:0!important;padding:0!important;border:none!important;background:none!important}}@media screen and (min-width:641px){html:not([data-lc-type=error]) #lightcase-content .lightcase-contentInner .lightcase-inlineWrap{padding:30px;overflow:auto;-o-box-sizing:border-box;box-sizing:border-box}}@media screen and (max-width:640px){#lightcase-content h1,#lightcase-content h2,#lightcase-content h3,#lightcase-content h4,#lightcase-content h5,#lightcase-content h6,#lightcase-content p{color:#aaa}}@media screen and (min-width:641px){#lightcase-content h1,#lightcase-content h2,#lightcase-content h3,#lightcase-content h4,#lightcase-content h5,#lightcase-content h6,#lightcase-content p{color:#333}}#lightcase-case p.lightcase-error{margin:0;font-size:17px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#aaa}@media screen and (max-width:640px){#lightcase-case p.lightcase-error{padding:30px 0}}@media screen and (min-width:641px){#lightcase-case p.lightcase-error{padding:0}}.lightcase-open body{overflow:hidden}.lightcase-isMobileDevice .lightcase-open body{max-width:100%;max-height:100%}#lightcase-info{position:absolute;padding-top:15px}#lightcase-info #lightcase-caption,#lightcase-info #lightcase-title{margin:0;padding:0;line-height:1.5;font-weight:400;text-overflow:ellipsis}#lightcase-info #lightcase-title{font-size:17px;color:#aaa}@media screen and (max-width:640px){#lightcase-info #lightcase-title{position:fixed;top:10px;left:0;max-width:87.5%;padding:5px 15px;background:#333}}#lightcase-info #lightcase-caption{clear:both;font-size:13px;color:#aaa}#lightcase-info #lightcase-sequenceInfo{font-size:11px;color:#aaa}@media screen and (max-width:640px){.lightcase-fullScreenMode #lightcase-info{padding-left:15px;padding-right:15px}html:not([data-lc-type=image]):not([data-lc-type=video]):not([data-lc-type=flash]):not([data-lc-type=error]) #lightcase-info{position:static}}#lightcase-loading{z-index:9999;width:1.123em;height:auto;font-size:38px;line-height:1;text-align:center;text-shadow:none;position:fixed;z-index:2001;top:50%;left:50%;margin-top:-.5em;margin-left:-.5em;opacity:1;font-size:32px;text-shadow:0 0 15px #fff;-moz-transform-origin:50% 53%;-webkit-animation:lightcase-spin .5s linear infinite;animation:lightcase-spin .5s linear infinite}#lightcase-loading,#lightcase-loading:focus{text-decoration:none;color:#fff;-webkit-tap-highlight-color:transparent;transition:color,opacity,.25s ease-in-out}#lightcase-loading>span{display:inline-block;text-indent:-9999px}a[class*=lightcase-icon-]{position:fixed;z-index:9999;width:1.123em;height:auto;font-size:38px;line-height:1;text-align:center;text-shadow:none;outline:none;cursor:pointer}a[class*=lightcase-icon-],a[class*=lightcase-icon-]:focus{text-decoration:none;color:hsla(0,0%,100%,.6);-webkit-tap-highlight-color:transparent;transition:color,opacity,.25s ease-in-out}a[class*=lightcase-icon-]>span{display:inline-block;text-indent:-9999px}a[class*=lightcase-icon-]:hover{color:#fff;text-shadow:0 0 15px #fff}.lightcase-isMobileDevice a[class*=lightcase-icon-]:hover{color:#aaa;text-shadow:none}a[class*=lightcase-icon-].lightcase-icon-close{position:fixed;top:15px;right:15px;bottom:auto;margin:0;opacity:0;outline:none}a[class*=lightcase-icon-].lightcase-icon-prev{left:15px}a[class*=lightcase-icon-].lightcase-icon-next{right:15px}a[class*=lightcase-icon-].lightcase-icon-pause,a[class*=lightcase-icon-].lightcase-icon-play{left:50%;margin-left:-.5em}@media screen and (min-width:641px){a[class*=lightcase-icon-].lightcase-icon-pause,a[class*=lightcase-icon-].lightcase-icon-play{opacity:0}}@media screen and (max-width:640px){a[class*=lightcase-icon-]{bottom:15px;font-size:24px}}@media screen and (min-width:641px){a[class*=lightcase-icon-]{bottom:50%;margin-bottom:-.5em}#lightcase-case:hover~a[class*=lightcase-icon-],a[class*=lightcase-icon-]:hover{opacity:1}}#lightcase-overlay{display:none;width:100%;min-height:100%;position:fixed;z-index:2000;top:-9999px;bottom:-9999px;left:0;background:#333}@media screen and (max-width:640px){#lightcase-overlay{opacity:1!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/lightcase.d0216a5.eot";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/lightcase.35778fd.woff";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/lightcase.d41de76.ttf";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightcase.28fe34e.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("e622d370", content, true)

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(59);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(60);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(61);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(63);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(64);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(65);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(67);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(68);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(69);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(70);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(17);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(71);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(72);
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(73);
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(74);
var ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(75);
var ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(76);
var ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(18);
var ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(19);
var ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(77);
var ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(78);
var ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(79);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{color:#fff;font-family:\"RalewayRegular\",sans-serif;background-color:#000}body,ul{margin:0}ul{list-style:none;padding:0}a{text-decoration:none;color:#fff}img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fadein-submit,.send-button{-webkit-appearance:none!important;border-radius:0!important;outline:0!important}.team .content-box.no-vertical-padding{padding-top:0;padding-bottom:0;height:25vh}.wrapper{display:flex;position:relative;height:100vh;width:100%;flex-direction:row;justify-content:space-between;background-repeat:no-repeat;background-size:cover;background-position:50%;box-sizing:border-box;overflow:hidden;-webkit-animation:opacity .4s ease-in-out;animation:opacity .4s ease-in-out}.main-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.service{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.portfolio{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.map-bg{width:500px;position:relative;-webkit-animation:opacity .5s ease-in-out;animation:opacity .5s ease-in-out}.office-i-block{position:absolute;top:0;left:0;display:none;width:350px;height:250px;padding:30px;box-sizing:border-box;background:#000}.title-office{font-size:30px;font-family:\"ImpactRegular\",sans-serif;margin:0}.button-box-main-callback{position:absolute;bottom:30px;left:30px;right:30px;text-align:center;cursor:pointer}.button-box-main-callback-title{font-size:16px;line-height:50px}.office-address-fadein{margin-top:30px}.contact{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}.news{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}.team{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ")}.partner{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ")}.events{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")}.header{display:flex;flex-direction:row;padding:0 4%;justify-content:space-between;align-items:center}.main{width:92.5%;padding:2% 0 5%;overflow:auto;direction:rtl}.news .main,.team .main{overflow:hidden}.main>*{direction:ltr}.event-p,.main.h-page,.tenders-main{overflow:auto}.footer{min-height:85px;height:5%;width:100%}.bl-l{width:7.5%;border-right:1px solid #6f6f6f;z-index:2}.bl-r{width:220px;position:fixed;top:0;right:0;bottom:0;margin:auto;border-left:1px solid #6f6f6f;z-index:2}.bl-m{width:81%}.city{width:800px}.overlay{overflow:auto;top:0;right:0;bottom:0;margin:auto;min-height:100%;z-index:9}.overlay,.scroll-locked{position:fixed;left:0;width:100%}.scroll-locked{height:100%;overflow:hidden}.fadein-form{position:relative;box-sizing:border-box;width:100%;padding:30px 50px;max-width:565px;margin:10% auto;background:#000;display:flex;flex-wrap:wrap}form[name=fadein_form]{width:100%;display:block;display:flex;flex-wrap:wrap}.fadein-close{position:absolute;top:10px;right:10px;width:20px;cursor:pointer}.fadein-close,.fadein-title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fadein-title{width:100%;display:block;font-size:36px;line-height:36px;text-align:center;font-family:\"ImpactRegular\",sans-serif;margin:30px 0}.fadein-box{position:relative;width:46.5%;margin-bottom:30px;margin-top:15px;text-align:center}.fadein-box:nth-child(2n){margin-right:7%}.fadein-input{height:45px;width:100%;background:transparent;border:none;outline:none;color:#fff;font-weight:200;font-size:14px;text-indent:15px;padding:0}.fadein-submit{cursor:pointer}.fadein-form input:hover{background-color:hsla(0,0%,100%,.2)}.fadein-form .fadein-submit:hover{background-color:#fb0000}.fadein-form .spy-left-input{background-color:#fff;height:25px}.fadein-form .spy-top-input{background-color:#fff;width:60%}.fadein-form .spy-right-input{background-color:#fff;height:25px}.fadein-form .spy-bottom-input{background-color:#fff;width:60%}.fadein-box-submit .spy-bottom-input,.fadein-box-submit .spy-left-input,.fadein-box-submit .spy-right-input,.fadein-box-submit .spy-top-input{background-color:#fb0000}.border-callback{position:absolute;background-color:#fff}.border-callback-left{top:15px;left:15px;width:1px;height:80px}.border-callback-top{top:15px;left:15px;width:390px;height:1px}.border-callback-right{bottom:15px;right:15px;width:1px;height:80px}.border-callback-bottom{bottom:15px;right:15px;width:390px;height:1px}.main-page .video{padding-right:275px;box-sizing:border-box}.main-page .agency-map{padding-top:5%;width:calc(100% - 900px)}.main-page .map-bg{width:900px;height:900px}.main-page .map{padding-right:0;padding-top:0}.main.h-page{direction:rtl}.main.h-page>*{direction:ltr}.main-page .video-box{width:50%}.main-page .main-description{width:46.5%}.to-services-w{padding-right:220px;box-sizing:border-box}.main-page .to-services{margin-top:-250px}.main-s{display:flex;flex-wrap:wrap;justify-content:space-between}.main-s__item{width:48.5%;position:relative}.main-services{display:flex}header{padding-right:220px;box-sizing:border-box}.go-back-span{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.content-box{display:flex;flex-direction:row;flex-wrap:wrap;height:auto;padding:0 275px 0 4%;justify-content:space-between;box-sizing:border-box}.tenders-wrapper{padding-top:5%}.event-wrapper{padding-top:7.5%}.content-box-arrows{position:relative}.content-block-w{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between}.video-box{width:55%;-webkit-animation:opacity 1s ease-in-out;animation:opacity 1s ease-in-out}.main-description{width:40%}.clearfix:after{content:\"\";clear:both;display:table}.content-container{display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:1.5% 0 2%;z-index:2}.contacts-wrapper{margin-top:7.5%}.main-page .contacts-wrapper{margin-top:3%}.bl-copyright{font-family:\"Roboto\",sans-serif;line-height:1;font-size:.8em}.menu-list{font-size:18px;font-family:\"RalewayLight\",sans-serif;font-weight:300;text-align:center;cursor:pointer;margin-top:120px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.bl-social{position:relative;padding:35px 33px;margin-bottom:30px;max-width:94px;box-sizing:border-box}.social-link:first-child{display:inline-block}.menu-item{position:relative;padding-top:5px;padding-bottom:5px;margin-bottom:14px}.menu-item,.menu-item a{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu-item a{padding:7px 15px;font-size:18px;line-height:20px}.main-logo-left{z-index:9}.menu-item:last-child{margin-bottom:0}.h1{width:100%;margin:40px 0 15px;font-size:3.5em;line-height:1;font-family:\"ImpactRegular\",sans-serif;letter-spacing:2px;font-weight:300}.h1-centered{display:inline-block}.centered-title{width:100%;display:flex;justify-content:space-around}.line,.line-no-fade{background-color:red;width:90px;border-radius:3px;box-shadow:0 0 3px 1px #e90000}.line-no-fade{height:5px}.bl-desc{margin:35px 0 0;font-size:1.3em;line-height:1.2em}.h2{margin:0;padding:0 0 20px;font-size:2em;line-height:.8;font-family:\"RalewayRegular\",sans-serif;font-weight:500}.video-container{position:relative;width:100%;height:410px;overflow:hidden;box-shadow:0 0 22px 5px rgba(53,185,249,.25);background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");background-size:cover;cursor:pointer}.bg-btn,.video-container{background-repeat:no-repeat;background-position:50%}.bg-btn{position:absolute;top:0;left:0;right:0;bottom:0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");background-size:25%;z-index:1}.tenders-send-span{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tenders-send-input{height:55px;width:100%;background:transparent;border:none;outline:none;color:#fff;font-weight:200;font-size:20px;line-height:55px;text-indent:15px;padding:0;cursor:pointer}.tenders-list-w{display:flex;justify-content:space-between;margin-top:3%}.tenders-list-first,.tenders-list-second{width:49%}.p-title{margin:6px 0 0;font-size:.9em;line-height:.8;font-weight:300}.bl-preview{position:relative;width:370px;margin:0 auto;padding:0 65px 20px}.bl-preview,.centered-block{text-align:center}.h-page .bl-preview{height:14%}.company-name{display:inline-block;font-family:\"RalewayLight\",sans-serif;text-transform:uppercase;font-size:22px;width:400px;text-align:center}.bl-pagination{margin-bottom:15%}.bl-menu-title,.bl-pagination{display:block;transform:rotate(-90deg)}.active-page{font-size:2.2em;font-family:\"Intro\",sans-serif}.bl-page{font-size:1.4em;font-weight:300;color:#525252;font-family:\"Roboto\",sans-serif}.fl-column{display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:2% 0}.btn,.btn-no-animate{display:inline-block;background-color:red;font-size:1em;line-height:.9;font-family:\"RalewaySemiBold\",sans-serif;color:#fff;padding:10px 19px;letter-spacing:.5px;box-shadow:0 0 22px 5px rgba(233,0,0,.5)}.btn-no-animate.nuxt-link-exact-active:before{display:none}.tel-btn{font-size:28px;font-family:\"RalewayLight\",sans-serif}.bl-search{position:relative;padding:15px 13px;display:flex;flex-direction:row;align-items:center;text-transform:uppercase;font-size:12px;justify-content:space-between;box-sizing:border-box;cursor:pointer}.img:after{position:absolute;content:\"\";width:10px;left:3px;height:10px;border:1px solid #fff;border-radius:6px;box-sizing:border-box}.bl-search .active .img:after,.bl-search .active .img:before{border-color:red}.img:before{position:absolute;content:\"\";width:17px;bottom:0;height:9px;left:0;border-radius:7px 7px 0 0;border:1px solid #fff;box-sizing:border-box}.btn-exit{display:flex;align-items:center}.btn-exit .img{position:relative;vertical-align:middle;margin-right:12px;height:20px;width:18px}.btn-search{margin-right:40px}.preview-container{position:relative;padding:20px 28px;display:flex;height:100%;box-sizing:border-box;justify-content:space-between;align-items:center}.sl-preview{position:relative;width:45%;height:100%;min-height:50px;cursor:pointer;opacity:.5}.slide-user-active{opacity:1}.arrow-left{left:0;transform:rotate(180deg)}.arrow-left,.arrow-right{position:absolute;top:25%;width:28px;height:28px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");background-repeat:no-repeat;background-size:contain;cursor:pointer}.arrow-right{right:0}.arrow-left-event{left:-300px;transform:rotate(180deg)}.arrow-left-event,.arrow-right-event{position:absolute;top:25%;width:45px;height:60px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");background-repeat:no-repeat;background-size:cover;cursor:pointer}.arrow-right-event{right:-300px}.arrow-left-m{left:0;transform:rotate(180deg)}.arrow-left-m,.arrow-right-m{position:absolute;top:25%;width:28px;height:28px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");background-repeat:no-repeat;background-size:contain;cursor:pointer}.arrow-right-m{right:0}.dop-arrow-left{left:120px}.dop-arrow-left,.dop-arrow-right{position:absolute;top:0;bottom:0;margin:auto}.dop-arrow-right{right:120px}.nuxt-link-exact-active:before{position:absolute;bottom:-5px;content:\" \";opacity:1!important;height:0;width:100%;box-shadow:0 0 5px 1px red;border-bottom:2px solid #e90000;border-radius:3px;transition:opacity .5s ease-in-out}.video{padding:7.5% 4% 0}.video-preview{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");background-size:cover}.map-pass,.video-preview{overflow:hidden;background-repeat:no-repeat;background-color:transparent;background-position:50%}.map-pass{position:relative}.spy-left{position:absolute;left:0;top:68%;bottom:0;height:auto;width:0;border-left:1px solid #7c7c7c}.spy-top{left:40%;height:0;width:auto;border-top:1px solid #7c7c7c}.spy-right,.spy-top{position:absolute;top:0;right:0}.spy-right{bottom:72%;height:auto;width:0;border-right:1px solid #7c7c7c}.spy-bottom{position:absolute;right:0;bottom:0;left:0;right:42%;height:0;width:auto;border-bottom:1px solid #7c7c7c}.bl-social .spy-left{bottom:32%;top:0}.bl-social .spy-top{right:60%;left:0}.bl-social .spy-right{top:28%;bottom:0}.bl-social .spy-bottom{left:58%;right:-1px}.map{padding-left:4%;padding-right:4%;overflow:visible}.agency-map{width:calc(100% - 500px)}.city-hover,.to-services{cursor:pointer}.to-services{height:60px;width:100%;max-width:320px;margin:60px auto;display:block;position:relative;color:#fff;text-align:center;font-weight:700;transition:background-color .2s}.to-services:hover{background-color:red;transition:background-color .2s}.go-to-services{font-size:18px;line-height:60px;font-weight:100}.city{position:absolute;top:0;left:0;right:0;bottom:0}.bl-info{display:flex;flex-direction:row;flex-wrap:wrap;margin:9% 0 0}.bl-info,.bl-info-wrapper{width:100%}.bl-info .glide__slides{width:100%;display:flex;flex-wrap:wrap}.bl-info .glide__slide{height:auto}.info-data-item{width:auto;margin-right:75px;margin-bottom:7%;color:red;text-align:center;font-size:18px}.glide__slides-a{font-size:0;line-height:0;letter-spacing:0}.info-data-item:after{position:absolute;content:\"\";top:0;left:0;right:0;bottom:0}.info-data-item p{color:#fff;font-size:16px;line-height:1.4;margin:10px 0 0;padding:0}.info-data-item span{font-size:48px;line-height:.9;font-family:\"RalewaySemiBold\",sans-serif}.gray-bg{background-color:rgba(0,0,0,.4)}.map-mini{position:absolute;top:0;right:0;left:0;bottom:0}.item-dots{padding:13px 0;width:122px;height:3px;overflow:hidden;position:relative}.dots-container{position:absolute;left:0;bottom:0;top:0;text-align:left;height:3px;width:10000px;transition:left .5s}.dots-container,.glide-b .glide__slides{font-size:0;line-height:0;letter-spacing:0}.glide-b .glide__slides,.glide-b .glide__track{overflow:visible}.glide-c{padding:0 20px;box-sizing:border-box;display:flex;align-items:center}.glide-c,.glide-c .glide__slides,.glide-c .glide__track{height:100%}.glide-c .glide__slide{display:none;align-items:center}.glide-c .glide__slide:nth-child(2){display:flex}.tr-bottom{width:34px;float:left;margin-right:10px;height:3px;border-radius:3px;background-color:#898989;box-sizing:border-box;cursor:pointer}.tr-bottom:last-child{margin-right:0}.glide-b .glide__slide--active+li .tr-bottom,.tr-active{background-color:red;box-shadow:0 0 15px 5px rgba(255,0,0,.4)}.service .arrow-left,.service .arrow-right{top:0}.events .arrow-left{left:-450px}.events .arrow-left,.events .arrow-right{position:absolute;top:120px;bottom:0;width:60px;height:60px}.events .arrow-right{right:-450px}.service-block{display:flex;justify-content:space-between;width:48%;height:-webkit-max-content;height:-moz-max-content;height:max-content;align-items:center;padding:3%;box-sizing:border-box;margin-top:6%;cursor:pointer}.main-page .service-block{margin-top:3%}.service-block-btns-w{width:48%;margin-top:3%;flex-direction:column}.service-block-btns,.service-block-btns-w{display:flex;justify-content:space-between}.service-block-btns{width:100%}.scrolling-item{display:block;flex-wrap:wrap;align-items:flex-start;transition:.5s ease-in-out}.service-block .h1{font-size:30px;margin-top:0}.service-block .bl-desc{margin-top:15px;font-size:1em;line-height:1;font-family:\"RalewayLight\",sans-serif}.img-wrapper{position:relative;width:250px;height:150px;margin-right:30px;overflow:hidden}.service-desc-w{width:calc(100% - 280px)}.service-img{position:absolute;width:100%;height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.content-main{margin:0 auto;padding:0 4%;max-width:2100px}.content-main.event-page{height:100%}.portfolio .content-main{margin:25px 0 auto;padding:7.5% 275px 0 4%;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;flex-direction:row}.content-box-main-portfolio{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:6%}.partners-main{margin-top:2%}.content-box-main-portfolio h1{margin-top:0}.main-portfolio-small{width:32%;margin-bottom:30px}.main-portfolio-s-block{padding-top:6%}.main-portfolio-big{width:66%;margin-bottom:30px}.slider{width:100%;margin:0 auto;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;box-sizing:border-box}.sl-box-1{width:66%}.sl-box-2{width:32%}.sl-card{display:none;position:relative;height:350px;background-color:#f0f0f0;margin-bottom:2%;box-sizing:border-box;cursor:pointer;background-position:50%;background-size:cover;background-repeat:no-repeat;box-shadow:0 0 10px 1px hsla(0,0%,100%,.3);transition:opacity .25s ease-in-out;transition:box-shadow .25s ease-in-out}.slider:after{flex-basis:32%;content:\"\"}.scrolling-portfolio-item{display:inline-block}.sl-card:hover{transition:box-shadow .2s;box-shadow:0 0 20px 5px #fb0000!important}.portfolio_in .bl-preview{height:auto;padding-bottom:0!important}.bg-hover{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;display:flex;align-items:flex-end;padding:10px;box-sizing:border-box;transition:.8s ease-in-out;background:linear-gradient(0deg,rgba(0,0,0,.9) 15%,rgba(36,50,74,0) 40%)}.sl-card:hover .bg-hover{opacity:1;-webkit-transition:opacity .8s ease-in-out;-o-transition:opacity ease-in-out .8s}.event-info{opacity:0;display:block;transition:.5s ease-in-out}.bg-hover .event-info,.inter-event-page .event-info{opacity:1}.go-back-to-prev{cursor:pointer;text-decoration:underline}@-webkit-keyframes hover{0%{left:0;transform:translate(0)}to{left:5%;transform:translate(0)}}@keyframes hover{0%{left:0;transform:translate(0)}to{left:5%;transform:translate(0)}}.event-name,.event-name-ins{display:inline-block;margin-bottom:5px;font-family:\"Impact\",sans-serif;font-size:28px;line-height:30px}.event-desc{margin-top:20px}.event-desc p{margin:.3em 0;padding:0;line-height:1;font-size:18px;font-family:\"RalewayLight\",sans-serif}.portfolio .main{position:relative;display:flex;flex-direction:column}.portfolio-block{margin-top:5%}.portfolio-block:after{content:\"\";width:32%}.portfolio .arrow-left{left:4%}.portfolio .arrow-left,.portfolio .arrow-right{position:absolute;top:50%;width:45px;height:60px;background-size:cover}.portfolio .arrow-right{right:4%}.portfolio .bl-preview{position:static;margin-top:3%}.h1-more{font-size:80px;font-family:\"Impact\",sans-serif;line-height:1.1;font-weight:400}.h1-manager-data,.h3-manager-data{text-transform:uppercase}.h3{font-size:1.5em;line-height:1;font-family:\"RalewayMedium\",sans-serif;font-weight:400;margin:20px 0}.sotrud-contact{display:inline-block;font-size:16px;line-height:1.5;margin-top:25px}.sotrud-img{max-height:100%;max-width:100%}.right-wth{width:40%;display:flex;flex-direction:column;justify-content:center}.team .content-box{justify-content:center;height:73vh;padding:2.5% 275px 4% 2.5%}.link-svg{transform:rotate(180deg)}.slide-user,.slide-user-next,.slide-user-preview{min-height:90px;background:linear-gradient(0deg,rgba(0,0,0,.9) 5%,rgba(36,50,74,0) 40%),url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");background-repeat:no-repeat;background-size:cover;background-position:top}.tenders{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ")}.tenders-info-p{font-size:15px;line-height:22px}.tenders-half-width{width:48.5%}.tenders-form{display:flex;justify-content:space-between;flex-wrap:wrap;padding-top:20px}.tenders-left{-webkit-animation:rights 1.3s linear;animation:rights 1.3s linear}.tenders-left,.tenders-right{width:47.5%;position:relative}.tenders-right{-webkit-animation:rights 1.6s linear;animation:rights 1.6s linear}.tenders-garanties{font-size:16px;line-height:20px;font-family:\"RalewayRegular\",sans-serif}.tenders-title-huge{font-size:80px;line-height:80px}.tenders-title-big,.tenders-title-huge{position:relative;margin:0 0 40px;min-height:80px;text-transform:uppercase;font-family:\"ImpactRegular\",sans-serif;font-weight:300;-webkit-animation:rights 1.6s linear;animation:rights 1.6s linear}.tenders-title-big{padding-top:34px;box-sizing:border-box;font-size:46px;line-height:46px}.tenders-input-block{width:100%;height:42px;cursor:pointer;position:relative;box-sizing:border-box;margin-bottom:40px}.spy-left-input{top:auto;height:15px;width:1px}.spy-bottom-input,.spy-left-input{position:absolute;bottom:0;left:0;background-color:#fff}.spy-bottom-input{height:1px;width:80%}.spy-right-input{height:12px;width:1px}.spy-right-input,.spy-top-input{position:absolute;top:0;right:0;background-color:red}.spy-top-input{height:1px;width:20px}.spy-left-textarea{top:auto;height:35px;width:1px}.spy-bottom-textarea,.spy-left-textarea{position:absolute;bottom:0;left:0;background-color:#fff}.spy-bottom-textarea{height:1px;width:70%}.spy-right-textarea{height:30px;width:1px}.spy-right-textarea,.spy-top-textarea{position:absolute;top:0;right:0;background-color:red}.spy-top-textarea{height:1px;width:75px}.tenders-input-block-decorated{position:absolute;right:0;bottom:0;left:0;right:42%;height:0;width:auto;border-bottom:1px solid #7c7c7c}.tenders-input{width:100%;height:40px;margin:0;border:0!important;outline:0!important;background-color:transparent;box-sizing:border-box;cursor:pointer;color:#fff;text-indent:15px}.tenders-input:hover{background-color:hsla(0,0%,100%,.2)}.tenders-input::-webkit-input-placeholder{font-size:16px;color:#fff}.tenders-input:-moz-placeholder,.tenders-input::-moz-placeholder{font-size:16px;color:#fff}.tenders-input:-ms-input-placeholder{font-size:16px;color:#fff}.tenders-input[placeholder]{font-size:16px;color:#fff}.tenders-field-arrow{position:absolute;top:11px;bottom:0;right:15px;cursor:pointer;width:18px;height:18px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");background-repeat:no-repeat;background-position:50%;background-size:18px;transition:transform .2s}.tenders-textarea-w{width:100%;position:relative}.tenders-textarea{width:100%;display:block;min-height:50px;padding:15px;box-sizing:border-box;outline:0!important;border:0!important;background-color:transparent;font-family:\"RalewayRegular\",sans-serif;resize:vertical}.tenders-textarea::-webkit-input-placeholder{font-size:16px;color:#fff}.tenders-textarea:-moz-placeholder,.tenders-textarea::-moz-placeholder{font-size:16px;color:#fff}.tenders-textarea:-ms-input-placeholder{font-size:16px;color:#fff}.tenders-textarea[placeholder]{font-size:16px;color:#fff}.tenders-item{padding:5px 10px 5px 25px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");background-repeat:no-repeat;background-position:left 6px;background-size:18px;font-size:16px;line-height:20px;font-family:\"RalewayRegular\",sans-serif}.tenders-main .tenders-item{margin-bottom:5px}.tenders-list{margin-top:-5px}.tenders-important{border:1px solid red;padding:20px 50px;margin:40px auto;box-sizing:border-box}.tenders-main .tenders-important{margin:40px auto 35px}.tenders-important-text{position:relative;margin:0;font-size:16px;line-height:26px;font-family:\"RalewayRegular\",sans-serif;font-weight:600}.tenders-important-text:before{top:0;left:-40px}.tenders-important-text:after,.tenders-important-text:before{position:absolute;display:block;content:\"\";width:20px;height:20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");background-repeat:no-repeat;background-size:20px}.tenders-important-text:after{bottom:0;right:-40px;transform:rotate(.5turn)}.main-page .tenders-important{border:0;position:relative}.send-info-btns{margin-top:50px;display:flex;justify-content:space-between;align-items:center}.warning-info{width:48.5%;font-size:13px;line-height:15px}.tenders-send-order{width:48.5%;position:relative;color:#fff;text-align:center;font-weight:700;cursor:pointer;transition:background-color .2s}.tenders-send-order:hover{background-color:red;transition:background-color .2s}.tenders-send-order span{font-size:18px;line-height:55px}.spy-left-btn{top:auto;height:35px;width:1px}.spy-bottom-btn,.spy-left-btn{position:absolute;bottom:0;left:0;background-color:red}.spy-bottom-btn{height:1px;width:65%}.spy-right-btn{height:35px;width:1px}.spy-right-btn,.spy-top-btn{position:absolute;top:0;right:0;background-color:red}.spy-top-btn{height:1px;width:65%}.team .preview-container{position:relative;display:block;overflow:hidden;padding:20px 30px;box-sizing:border-box;height:120px}.glide__slide{text-align:center}.team .sl-teammate{display:block;margin:0;width:105px;opacity:.5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;text-align:center}.team .slide-user-active{opacity:1}.team .sl-wrapper{width:100000px}.team .sl-wrapper-shadow{position:relative;width:112px;margin:0 auto;height:130px;display:block}.sl-wrapper-coverall{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;z-index:8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.sl-wrapper-leftbox{left:30px}.sl-wrapper-leftbox,.sl-wrapper-rightbox{position:absolute;top:20px;width:80px;height:80px;z-index:9;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.sl-wrapper-rightbox{right:30px}.h-page .item-dots{margin:20px auto;width:78px;height:3px;overflow:hidden;position:relative}.h-page .preview-container{position:relative;display:block;overflow:hidden;padding:20px 30px;box-sizing:border-box;height:120px;-webkit-animation:opacity 2s ease-in-out;animation:opacity 2s ease-in-out}.h-page .sl-teammate{display:block;margin:0 40px 0 0;width:135px;opacity:.5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.h-page .slide-user-active{opacity:1}.h-page .sl-wrapper-shadow{position:relative;height:130px;display:block}.h-page .arrow-left,.h-page .arrow-right{top:40%}.h-page .dop-arrow-right{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}@-webkit-keyframes show{0%{display:flex!important}to{opacity:1}}@keyframes show{0%{display:flex!important}to{opacity:1}}.hidden-screen-news{width:0!important;visibility:hidden!important;height:1px!important;overflow:hidden!important;min-height:auto!important;margin:0;padding:0}.item-service-dots{width:auto;display:flex;justify-content:center}.visible-screen{opacity:0;-webkit-animation:show .3s 1;animation:show .3s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sl-wrapper{position:absolute;left:0;transition:left .5s}.bl-partner,.sl-wrapper{box-sizing:border-box;display:flex}.bl-partner{position:relative;padding:0 20px;align-items:center;height:23vh;width:22%;margin-bottom:6%}.bl-partner-carousel-item{width:295px;height:165px;margin-bottom:0}.partner-wrapper{margin-top:9%}.partner-scrolling-item{display:flex;opacity:1;transition:.3s linear;transition:opacity .1s linear}.img-partner{width:80%;position:absolute;height:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.partner{text-align:center}.partner .bl-preview{width:auto;display:inline-block;padding:12px 65px}.partner .arrow-left,.partner .arrow-right{top:0}.partner .item-dots{padding:0}.partner-carousel{position:relative;width:100%;height:165px;margin:5% auto;padding:0 5%;box-sizing:border-box;overflow:hidden}.partner-carousel-wrap{position:relative;margin:0 auto;overflow:hidden}.partner-carousel-w{position:relative;width:10000px;height:165px;display:flex}.partner-link-arrow-left{right:0}.partner-link-arrow-left,.partner-link-arrow-right{position:absolute;display:block;width:40px;top:0;bottom:0;margin:auto;cursor:pointer}.partner-link-arrow-right{left:0}.news-box{width:100%;margin-top:3%;padding:0 275px 4% 2.5%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.news-box .line{height:6px}.bl-article{position:relative;display:block;width:90%;height:100%;margin:0 auto;transform:scaleX(-1);-ms-transform:scaleX(-1);-webkit-transform:scaleX(-1)}.bl-list{width:18%;height:80vh;box-sizing:border-box;overflow:hidden;position:relative}.slider-min:hover .news-line,.slider-min:hover .sl-img-backgound{box-shadow:0 0 10px 2px rgba(233,0,0,.6);transition:all .5s ease-in-out}.slider-min:hover .news-line{background-color:#e90000}.p-article{font-family:\"RalewayLight\",sans-serif;font-size:18px;margin-bottom:40px;padding-bottom:100px}.news-slider{flex-wrap:wrap;float:left;width:608px;margin-right:3%;min-height:300px;max-width:630px;z-index:5}.news-slider,.news-slides{display:flex;position:relative}.news-slides{width:auto;justify-content:center}.container-sl{overflow:hidden;width:100%;box-shadow:0 0 35px 1px rgba(53,185,249,.5);display:flex}.news-sldr-box{float:left;width:100%;height:auto;max-height:343px;overflow:hidden}.news-slider .arrow-left,.news-slider .arrow-left-m,.news-slider .arrow-right,.news-slider .arrow-right-m{display:block;top:calc(100% - 14px);z-index:2;cursor:pointer}.bl-article h1{font-size:46px;font-family:\"Impact\",sans-serif;margin:0;line-height:1;padding-bottom:10px;text-transform:uppercase;font-weight:300}.sl-search{position:absolute;top:0;left:0;right:0;bottom:0;width:30px;height:30px;margin:auto;z-index:3;cursor:pointer}.article-box{width:81%;margin:0 auto;height:85vh;overflow-y:scroll;transform:scaleX(-1);-ms-transform:scaleX(-1);-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1)}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px}::-webkit-scrollbar-thumb{border-radius:10px;background:#7c7c7c;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.5)}::-webkit-scrollbar-thumb:window-inactive{background:#7c7c7c}.article-box{display:none}.article-box:first-child{display:flex}.bottom-bg,.line-mob{display:none}.news-slider .tr-bottom{width:22px;height:2px;display:inline-block}.news-slider .item-service-dots{display:inline-block}.news-slider .bl-preview{position:unset}.news-slider .arrow-left,.news-slider .arrow-right{top:45%}.news-min{position:relative;display:flex;margin:45px 2%;box-sizing:border-box;height:calc(100% - 90px);overflow:auto;flex-direction:column}.news-slider-wrapper{padding:10px;transition:all .3s}.slider-min{position:relative;width:95%;padding-bottom:15px;cursor:pointer}.slider-min-wrap{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;z-index:2}*{scrollbar-width:thin;scrollbar-color:transparent}.news-line{width:36px;height:2px;border-radius:2px;background-color:#333;transition:all .5s ease-in-out}.slide-active .news-line,.slide-active .sl-img-backgound{background-color:#e90000;box-shadow:0 0 10px 2px rgba(233,0,0,.6)}.sl-text{font-size:14px;padding:0;margin:4px 0}.sl-img{width:32%;min-width:70px;min-height:45px;background-repeat:no-repeat;background-size:cover;background-position:50%;margin-right:3%;display:flex;flex-direction:column;justify-content:flex-end;box-shadow:0 0 0 0 transparent;transition:all .5s ease-in-out}.sl-box{display:flex;margin-bottom:10px}.arrow-top{position:absolute;left:40%;width:20px;height:20px;border-bottom:1px solid red;border-left:1px solid red;transform:rotate(135deg);top:7px;cursor:pointer}.team .arrow-left{left:0;transform:rotate(45deg)}.team .arrow-left,.team .arrow-right{position:absolute;width:20px;height:20px;border-bottom:1px solid red;border-left:1px solid red;background-image:none;top:50px;cursor:pointer}.team .arrow-right{right:0;transform:rotate(-135deg)}.arrow-bottom{position:absolute;left:40%;bottom:7px;width:28px;width:20px;height:20px;border-bottom:1px solid #b8b8b8;border-left:1px solid #b8b8b8;transform:rotate(-45deg);cursor:pointer}.contact-info{width:40%}.portfolio-form{width:100%}.contact-info .line{height:6px;background-color:red}.contact-map{width:58%;position:relative}.form-line{display:flex;justify-content:left}.input-box{position:relative;width:48%;float:left;max-width:180px;margin-right:34px}.portfolio-form .input-box{position:relative;width:47.5%;max-width:100%;margin-right:0}.portfolio-form .form-line .input-box:first-child{margin-right:5%}.contact-info input{height:35px;width:100%;background:transparent;border:none;outline:none;color:#fff;font-weight:200;font-size:16px;text-indent:15px;padding:0}.contact-info .send-button{text-indent:0}.contact-info .send-button:hover{background-color:red;transition:background-color .2s}.contact-info input:hover{background-color:hsla(0,0%,100%,.2)}.checkbox-style{position:relative;display:inline-block;vertical-align:middle;width:12px;height:12px;margin-right:8px;background-color:transparent;box-sizing:border-box}.input-check:checked+.checkbox-style:before{position:absolute;content:\" \";display:block;width:10px;height:8px;top:0;left:3px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");background-repeat:no-repeat}.input-check{display:none}.checkbox-block .spy-left{top:50%;left:0}.checkbox-block .spy-top{left:50%}.checkbox-block .spy-right{bottom:50%}.checkbox-block .spy-bottom{right:50%;bottom:0;left:0}.i-agree{font-size:12px;font-family:\"RalewayLight\",sans-serif;letter-spacing:1.2px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox-block{margin:15px 0 0;display:inline-block}.input-box .spy-left{top:50%;border-left:1px solid #fff}.input-box .spy-bottom{right:24%;border-bottom:1px solid #fff}.input-box .spy-right{bottom:72%;border-right:1px solid #b31d1d}.input-box .spy-top{left:98%;border-top:1px solid #b31d1d}.input-box-wrong.input-box .spy-left{border-left:1px solid #b31d1d}.input-box-wrong.input-box .spy-bottom{border-bottom:1px solid #b31d1d}.input-box-wrong{background-color:rgba(255,0,0,.2)!important}.contact-form{margin-top:20px}.contact-form .line{width:60px;margin-bottom:18px}.line{height:5px}.contact-form p{font-size:24px;letter-spacing:1.2px;line-height:1;margin:0;font-weight:700;padding:0 0 7px}.send-button{text-align:center;padding:0;font-family:\"RalewaySemiBold\",sans-serif;cursor:pointer}.button-box{position:relative;margin-top:25px;width:48%;max-width:180px;text-align:center;box-sizing:border-box}.button-box .spy-left{top:32%;border-left:1px solid #b31d1d}.button-box .spy-bottom{right:37%;border-bottom:1px solid #b31d1d}.button-box .spy-right{bottom:28%;border-right:1px solid #b31d1d}.button-box .spy-top{border-top:1px solid #b31d1d}.button-box-main{display:block;position:relative;margin-top:25px;width:48%;height:60px;text-align:center;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.button-box-main-title{font-size:16px;line-height:60px}.button-box-main .spy-left{top:32%;border-left:1px solid #b31d1d}.button-box-main .spy-bottom{right:37%;border-bottom:1px solid #b31d1d}.button-box-main .spy-right{bottom:28%;border-right:1px solid #b31d1d}.button-box-main .spy-top{border-top:1px solid #b31d1d}.button-box-main-red:hover{background:rgba(251,0,0,.3);transition:background .2s}.button-box-main-white:hover{background:hsla(0,0%,100%,.3);transition:background .2s}.main-page .button-box-main{width:100%;max-width:370px;display:inline-block;text-align:center}.main-page .button-box-main:first-child{margin-right:20px}.p-contact{font-size:20px;line-height:24px;font-weight:100;font-family:\"RalewayLight\",sans-serif}.p-contact b{font-weight:600}.contact-info .h1{font-size:72px;font-weight:400;margin:0 0 15px}.copy-coordinat{position:absolute;cursor:pointer;bottom:0;right:42px;font-size:14px;font-weight:100;font-family:\"RalewayLight\",sans-serif;vertical-align:middle}.copy-coordinat img{display:inline-block;vertical-align:middle;margin-right:7px}#map-block{padding:40px 42px;width:100%;height:100%;box-sizing:border-box}.contact-map .spy-bottom{right:59%}.footer-mob,.header-mob,.menu-wrapper{display:none}.event-box{display:flex;position:relative;flex-direction:column;height:90vh;align-items:center;justify-content:center;box-sizing:border-box}.progress-box{width:685px;height:530px;opacity:1;-webkit-animation:opacity 1.6s ease-in-out;animation:opacity 1.6s ease-in-out}.event-box .event-header{margin-bottom:20px}.event-box .event-header,.step{display:flex;justify-content:space-between;align-items:baseline}.step{width:100%}.event-box .h1{font-size:4.5em;text-transform:uppercase;margin:0}.event-step{font-size:1.3em;font-family:\"Roboto\",sans-serif;font-weight:100}.loader-line{position:relative;width:100%;background-color:#d8d8d8;overflow:hidden}.active-loader,.loader-line{height:1px;border-radius:1px}.active-loader{position:absolute;left:0;width:25%;background-color:red;transition:width .5s;max-width:687px}.event-checked{margin-top:70px;max-height:320px;justify-content:space-between}.event-check,.event-checked{width:100%;display:flex;flex-wrap:wrap}.event-check{flex-direction:column;max-height:240px}.event-footer{display:flex;width:100%;align-items:center;justify-content:space-between}.step-btn{width:45%;padding:20px 0;background-color:#f40000;border-radius:4px;text-align:center;font-weight:600;line-height:1}.status-text{display:inline-block;margin:0 auto;font-size:12px;font-weight:400;letter-spacing:1px}.active-save{color:#02ac15}.input-checkbox{display:none}.checkbox-span{position:relative;display:inline-block;vertical-align:middle;width:40px;height:40px;border-radius:5px;margin-right:5px;background-color:#fff}.event{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")}.event-progress-stripe{width:315px;height:15px;position:relative;display:none}.common-progress-text{right:0;padding:10px 0;text-align:center}.common-progress-text,.event-progress{position:absolute;top:0;left:0;bottom:0;margin:auto}.event-progress{background-color:red;width:25%;box-sizing:border-box;transition:width .5s}.event-text{position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;background-color:transparent;z-index:2}.checkbox-label{display:inline-block}.input-checkbox:checked+.checkbox-span:before{content:\"\";position:absolute;width:12px;height:5px;top:19px;left:8px;border-radius:3px 0 0 3px;background:#e70000;transform:rotate(45deg)}.input-checkbox:checked+.checkbox-span:after{content:\"\";position:absolute;width:26px;height:5px;top:16px;left:13px;border-radius:0 3px 3px 0;background:#e70000;transform:rotate(-45deg)}.event-calc{display:flex;flex-direction:column}.event-calc:after{content:\"\";display:table}.checkbox-label{margin:0 0 40px}#star-hall label{background-color:#fff;border-radius:5px}#star-hall input:checked~label,.input-checkbox:checked~.checkbox-span{background-color:#fff8db}#star-hall input:checked~label .star-box,#star-hall label .star-box,#star-hall label:hover .star-box,#star-hall label:hover~label .star-box{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") no-repeat;position:absolute;background-size:20px;width:20px;top:10px;left:10px;height:20px}#star-hall{overflow:hidden;*zoom:1;position:relative;display:inline-block;vertical-align:middle}#star-hall input{filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);opacity:0;width:43px;height:40px;position:absolute;top:0;z-index:0}#star-hall input:checked~label .star-box{background-position:0 -20px;height:40px;width:43px;margin-bottom:5px}#star-hall label{background-position:0 0;height:40px;width:43px;float:right;cursor:pointer;margin-right:10px;position:relative;margin-bottom:5px;z-index:1}#star-hall label:hover .star-box,#star-hall label:hover~label .star-box{background-position:0 -20px;height:40px;width:43px}#star-hall #star-0{left:0}#star-hall #star-1{left:53px}#star-hall #star-2{left:106px}#star-hall #star-3{left:159px}#star-hall #star-4{left:212px}#star-hall #star-5{left:265px}.get-order{position:absolute;right:4%;bottom:4%;color:#fff;text-decoration:underline}.event-preview{position:absolute;top:0;margin:0 auto;max-width:310px;width:100%;text-align:center}.event-title{display:inline-block;font-size:12px;color:#fff}.event-line{display:inline-block;height:3px;width:35px;border-radius:3px;margin-right:5px;background-color:#898989}.step-active{background-color:#e70101;box-shadow:0 0 3px 1px #e90000}.active{color:#e70101}.event-line:nth-child(4){margin-right:0}.prev-title{display:flex;margin-top:7px;justify-content:space-between}.event .btn{border:1px solid red;background-color:transparent;box-shadow:none;position:relative;overflow:hidden;z-index:2}.bta-hover{position:absolute!important;left:0;width:30%;top:0;bottom:0;background-color:red;z-index:-1}.bta-hover:before{content:\"\";position:absolute;right:-25px;bottom:0;border:25px solid red;transform:rotate(-65deg)}.event-arrow-left{left:4%;transform:rotate(-180deg)}.event-arrow-left,.event-arrow-right{position:absolute;top:50%;width:45px;height:60px;background-size:cover;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");background-repeat:no-repeat;background-size:contain}.event-arrow-right{right:4%}.step-1,.step-2,.step-3,.step-4{display:none}.next-step{display:flex}.login-block{display:none;position:absolute;right:1%;top:10%;padding:15px;max-width:190px;box-sizing:border-box;border-radius:5px;background-color:rgba(0,0,0,.7);box-shadow:0 0 20px 0 hsla(0,0%,100%,.3);z-index:99}.login-item{position:relative;margin-top:20px}.login-item:first-child{margin-top:0}.login-item input{border:none;outline:none;width:100%;box-sizing:border-box;padding:10px 0 10px 10px;color:#fff;font-family:\"RalewayRegular\",sans-serif;background-color:hsla(0,0%,100%,.1)}::-webkit-input-placeholder{color:#fff}::-ms-input-placeholder{color:#fff}::-moz-placeholder{color:#fff}.entry-btn{width:100%;line-height:.9;text-align:center;padding-left:0!important;cursor:pointer;background-color:#8e0608!important}.login-item .spy-bottom,.login-item .spy-left,.login-item .spy-right,.login-item .spy-top{border-color:#fff}.reg-btn{display:inline-block;margin-top:10px;font-style:italic;font-size:14px;line-height:1;text-decoration:underline;color:#7b7b7b;cursor:pointer}.event-page{overflow-y:scroll}.event-description{font-size:16px;color:#fff}.event-page-wrapper{width:100%;margin-top:50px;margin-bottom:30px;display:flex;flex-direction:row;justify-content:space-between}.event-page-sl{width:65%;max-height:548px;max-width:970px}.inter-event-page{width:32%}.event-page-sl .arrow-left{top:0;bottom:0;margin:auto;left:2%;width:30px;height:39px;z-index:2}.event-page-sl .slides-block{height:50vh;max-height:450px}.event-page-sl .arrow-right{top:0;bottom:0;margin:auto;right:2%;width:30px;height:39px;z-index:2}.event-page-sl .news-sldr-box{min-width:100vh}.event-page-sl .slides-block{width:100%}.slides-img{width:100%;height:100%;max-height:450px;background-size:cover;background-position:50%}.event-page .contact-info{width:auto;margin-top:0}.inter-event-page .event-info{position:relative;left:0;bottom:0;padding-bottom:12%}.slider-block{display:flex;flex-wrap:wrap;position:relative;width:100%;height:100%;overflow:hidden}.event-page .news-sldr-box{max-height:548px}.bl-other{position:relative;text-align:center;font-size:14px;display:none}.portfolio .bl-other,.portfolio_in .bl-other{width:100%;cursor:pointer;display:block}.portfolio .bl-other:hover .other-event,.portfolio_in .bl-other:hover .other-event{display:block}.more-portfolio{display:block;margin:0 auto 10px;position:relative;width:22px;height:22px}.more-portfolio span{position:absolute;border:1px solid;width:10px;height:10px;box-sizing:border-box}.more-portfolio span:first-child{left:0}.more-portfolio span:nth-child(2){right:0}.more-portfolio span:nth-child(3){bottom:0;left:0}.more-portfolio span:nth-child(4){right:0;bottom:0}.other-event{display:none;position:absolute;width:300px;max-height:300px;height:auto;flex-direction:column;overflow:auto;text-align:left;box-sizing:border-box;padding:12px 14px;right:90%;top:-100%;background-color:#000;box-shadow:0 0 20px 5px rgba(255,0,0,.4);z-index:99}.other-event-link{display:flex;align-items:center;z-index:5}.bl-small-event{display:flex;justify-content:left;align-items:center;margin-bottom:15px;position:relative;cursor:pointer}.bl-small-event img{display:block;width:50px;margin-right:15px}.bl-small-event span{font-family:\"Impact\",sans-serif}.current{background-color:transparent}.bl-small-event:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5)}.bl-small-event .nuxt-link-exact-active:before{box-shadow:none;border-bottom:0}.nuxt-link-exact-active span{border-bottom:1px solid #e90000}.bl-small-event:hover~.bl-small-event:after,.current:after{background-color:transparent}.slides-block{position:relative;display:flex;justify-content:center}.service-hover{position:absolute;top:1px;left:1px;right:1px;bottom:1px;opacity:0;background-color:rgba(0,0,0,.5);z-index:9}.service-block:hover .service-hover,.service-hover{display:flex;transition:.5s ease-in-out;justify-content:center;align-items:center}.service-block:hover .service-hover{opacity:1}.open-btn{line-height:.8;font-size:18px;padding:15px 30px;background-color:red;color:#fff;font-family:\"RalewayMedium\",sans-serif;box-shadow:0 0 20px 2px rgba(255,0,0,.75)}.line{-webkit-animation:opacity 3.2s ease-in-out;animation:opacity 3.2s ease-in-out}.h-page .bl-desc{position:relative;-webkit-animation:rights 1.6s ease-in-out;animation:rights 1.6s ease-in-out;margin:25px 0}.video .h1{position:relative;-webkit-animation:rights 1.8s ease-in-out;animation:rights 1.8s ease-in-out}.tel-btn{-webkit-animation:mig 2.2s ease-in-out;animation:mig 2.2s ease-in-out}.btn{-webkit-animation:mig 2.6s ease-in-out;animation:mig 2.6s ease-in-out}.bl-l,.bl-r{-webkit-animation:opacity 2.2s ease-in-out;animation:opacity 2.2s ease-in-out}.map .h1{position:relative;-webkit-animation:rights 1s ease-in-out;animation:rights 1s ease-in-out}.map .bl-info{-webkit-animation:opacity 2s ease-in-out;animation:opacity 2s ease-in-out}.bl-partner{-webkit-animation:top-bottom 1s linear;animation:top-bottom 1s linear}.news-slider{-webkit-animation:opacity 1.4s linear;animation:opacity 1.4s linear}@-webkit-keyframes fadeInfadeOut{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes fadeInfadeOut{0%{transform:translateX(0)}to{transform:translateX(100%)}}.p-article{position:relative;-webkit-animation:opacity 1.6s linear;animation:opacity 1.6s linear}.news-box h1{position:relative;-webkit-animation:rights 1s linear;animation:rights 1s linear}.p-subtitle{position:relative;-webkit-animation:rights 1.3s linear;animation:rights 1.3s linear;letter-spacing:.5px;margin-bottom:40px}.news-slider .arrow-left{left:2%}.news-slider .arrow-right{right:2%}.news-slider .arrow-left-m{left:2%}.news-slider .arrow-right-m{right:2%}.news-slider .bl-preview{padding:0 65px 10px}.news-slider .item-service-dots{padding:0}.bl-list{-webkit-animation:opacity 1.8s linear;animation:opacity 1.8s linear}.service-block{position:relative;-webkit-animation:rights 1.3s linear;animation:rights 1.3s linear}.sl-box-1,.sl-box-2{-webkit-animation:top-bottom 1.3s linear;animation:top-bottom 1.3s linear}.map-bg{-webkit-animation:rights 1.2s linear;animation:rights 1.2s linear}.contact-map{-webkit-animation:rights 1.5s linear;animation:rights 1.5s linear}.preview-container{-webkit-animation:opacity 1.6s ease-in-out;animation:opacity 1.6s ease-in-out}.item-dots{-webkit-animation:lefts 1.8s linear;animation:lefts 1.8s linear}.arrow-left{-webkit-animation:lefts-mig 2s linear;animation:lefts-mig 2s linear}.arrow-right{-webkit-animation:rights-mig 2.2s linear;animation:rights-mig 2.2s linear}.arrow-left-m{-webkit-animation:lefts-mig 2s linear;animation:lefts-mig 2s linear}.arrow-right-m{-webkit-animation:rights-mig 2.2s linear;animation:rights-mig 2.2s linear}.contact-info .h1{position:relative;-webkit-animation:lefts-slow 1s ease-in-out;animation:lefts-slow 1s ease-in-out}.p-contact{position:relative;-webkit-animation:lefts-slow 1.4s ease-in-out;animation:lefts-slow 1.4s ease-in-out}.contact-form{position:relative;-webkit-animation:lefts-slow 1.6s ease-in-out;animation:lefts-slow 1.6s ease-in-out}.team .h1-more{position:relative;margin:15px 0;-webkit-animation:rights 1.2s linear;animation:rights 1.2s linear}.h3{position:relative;-webkit-animation:rights 1s linear;animation:rights 1s linear}.sotrud-contact{position:relative;-webkit-animation:rights 1.2s linear;animation:rights 1.2s linear}.sotrud-img{position:relative;-webkit-animation:opacity .5s linear;animation:opacity .5s linear}.slides-block{-webkit-animation:lefts .7s ease-in-out;animation:lefts .7s ease-in-out}.event-info{-webkit-animation:lefts .5s ease-in-out;animation:lefts .5s ease-in-out}.event-description{-webkit-animation:opacity 1s ease-in-out;animation:opacity 1s ease-in-out}@-webkit-keyframes opacity{0%{opacity:0}to{opacity:1}}@keyframes opacity{0%{opacity:0}to{opacity:1}}@-webkit-keyframes rights{0%{opacity:0}70%{opacity:0;right:-2%}to{opacity:1;right:0}}@keyframes rights{0%{opacity:0}70%{opacity:0;right:-2%}to{opacity:1;right:0}}@-webkit-keyframes top-bottom{0%{opacity:0}50%{opacity:0;top:-2%}to{opacity:1;top:0}}@keyframes top-bottom{0%{opacity:0}50%{opacity:0;top:-2%}to{opacity:1;top:0}}@-webkit-keyframes lefts{0%{opacity:0}80%{opacity:0;left:-20px}to{opacity:1;left:0}}@keyframes lefts{0%{opacity:0}80%{opacity:0;left:-20px}to{opacity:1;left:0}}@-webkit-keyframes lefts-slow{0%{opacity:0}to{opacity:1}}@keyframes lefts-slow{0%{opacity:0}to{opacity:1}}@-webkit-keyframes lefts-mig{0%{opacity:0}90%{opacity:0;left:0}95%{opacity:1;left:-25px}to{opacity:1;left:0}}@keyframes lefts-mig{0%{opacity:0}90%{opacity:0;left:0}95%{opacity:1;left:-25px}to{opacity:1;left:0}}@-webkit-keyframes rights-mig{0%{opacity:0}90%{opacity:0;right:0}95%{opacity:1;right:-25px}to{opacity:1;right:0}}@keyframes rights-mig{0%{opacity:0}90%{opacity:0;right:0}95%{opacity:1;right:-25px}to{opacity:1;right:0}}@-webkit-keyframes right-s{0%{opacity:0}80%{opacity:0}to{opacity:1;left:35%}}@keyframes right-s{0%{opacity:0}80%{opacity:0}to{opacity:1;left:35%}}@-webkit-keyframes mig{0%{opacity:0;transform:scale(1)}85%{opacity:0;transform:scale(1)}92%{opacity:1;transform:scale(1.1)}to{transform:scale(1)}}@keyframes mig{0%{opacity:0;transform:scale(1)}85%{opacity:0;transform:scale(1)}92%{opacity:1;transform:scale(1.1)}to{transform:scale(1)}}.team .item-dots{padding:0;margin:20px auto}.bl-info-wrapper{display:flex;flex-wrap:wrap;height:100%}.style-hover{border-bottom:2px solid #e90000}.menu-item a{position:relative;transition:opacity .3s ease-in-out}.menu-item a:before{position:absolute;bottom:0;opacity:0;width:calc(100% - 30px);box-shadow:0 0 5px 1px red;border-bottom:2px solid #e90000;border-radius:3px}.menu-item:hover a:before,.menu-item a:before{content:\" \";height:0;transition:opacity .3s ease-in-out}.menu-item:hover a:before{opacity:1}.news-sldr-box a{display:inline-block;width:100%;height:100%}.service .main{display:flex;flex-direction:column;justify-content:space-between}.videos-title{color:#fff;font-size:70px;line-height:85px;font-family:ImpactRegular,sans-serif;font-weight:300;text-transform:uppercase;margin-bottom:10px;margin-top:0}.videos-examples{display:flex;justify-content:space-between;align-items:flex-start}.videos-info{font-size:20px;line-height:24px}.videos-example{display:block;position:relative;width:calc(50% - 25px);height:385px;margin-bottom:40px;background-size:cover;background:#000;z-index:2;background-repeat:no-repeat;background-position:50%;background-size:contain;cursor:pointer}@media screen and (min-width:1900px){.contact .contact-map{width:68%;min-height:60vh}.contact .contact-info{width:30%}.contact-info,.contact .main{display:flex;flex-direction:column}.event-page-sl{max-width:none}}@media screen and (max-width:1800px){.videos-title{font-size:60px;line-height:75px}.videos-example{margin-bottom:20px;height:350px}}@media screen and (max-width:1700px){.info-data-item{margin-right:50px}.main-page .to-services{margin-top:0}.video-container{height:350px}.img-wrapper{width:200px;height:120px}.service-desc-w{width:calc(100% - 230px)}.team .content-box{height:65vh}.team .h1-more{font-size:60px}}@media screen and (max-width:1480px){.h1{font-size:3.4em}.service-block .h1{font-size:24px}.h1-manager-data{font-size:60px}.service-block{padding:2%}.img-wrapper{width:170px;height:100px;margin-right:20px}.service-desc-w{width:calc(100% - 190px)}}@media screen and (max-width:1600px){.event-name,.event-name-ins{font-size:22px;line-height:24px}.videos-title{font-size:50px;line-height:65px}.videos-example{margin-bottom:20px;height:320px}}@media screen and (max-width:1390px){.h2{font-size:1.85em}.bl-desc{font-size:1.1em;line-height:1.1em}.video .h1{font-size:2.4em}.info-data-item span{font-size:38px;line-height:.9}.info-data-item p{font-size:16px;line-height:1.3}}@media screen and (max-width:1300px){.h1-more{font-size:78px;margin-bottom:18px}.h3{font-size:1.3em}.sotrud-contact{margin-top:5px}.h1{font-size:3em}.h2{font-size:1.6em}.contact-map{width:54%;max-height:460px}.contact-info{width:44%}#map-block{padding:12px 15px}.copy-coordinat{right:0;bottom:auto;text-align:right}.contact-form{margin-top:60px}.form-line{justify-content:space-between}.input-box{margin-right:0}.event-box .h1{font-size:3.5em}.progress-box{width:80%;max-width:600px}.event-checked{margin-top:40px}.checkbox-label{margin-bottom:30px}#star-hall label,.checkbox-span{transform:scale(.8)}.step-btn{width:40%;padding:16px 0}.bl-pagination{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-bottom:25%}.map .h1{margin:0 0 15px}.map .bl-info{margin-top:25px}.info-data-item{margin-bottom:5%}.info-data-item span{font-size:40px}.h1-manager-data{font-size:50px}.right-wth{width:50%}.news-slider{float:none;width:100%;margin-right:0}.news-slider,.news-slides .lightcase-news-pic img{max-width:100%}.news-sldr-box{max-height:100%}.news-slider .arrow-left,.news-slider .arrow-left-m,.news-slider .arrow-right,.news-slider .arrow-right-m{top:40%}.menu-list{font-size:16px}.menu-item{margin-bottom:10px}.event-name,.event-name-ins{font-size:18px;line-height:22px}.event-page-sl{width:50%}.inter-event-page{width:47%}.main-page .video-box{width:60%}.main-page .main-description{width:36.5%}.video .h1{font-size:2em;line-height:100%}.main-page .bl-desc{font-size:1em;line-height:1.2em}.map .h1{font-size:2em}.main-page .bl-r{width:150px}.main-page .video{padding-right:165px}.map,.video{padding-left:2.5%}.main-page .agency-map{width:calc(100% - 600px)}.main-page .map-bg{width:600px;height:600px}.img-wrapper{width:100%;height:200px;margin-right:0}.service-block{flex-wrap:wrap}.service-desc-w{width:100%}.service-desc{margin-top:20px}.bl-partner{width:47.5%;height:220px}.portfolio-form{width:100%;max-width:500px}.main-page .button-box-main:first-child{margin-right:0}.content-box{padding-left:2.5%}.main-portfolio-small{width:31%}.main-portfolio-big{width:65.6667%}.tenders-main .tenders-important{margin-top:0}.partner-carousel{padding:0 50px}.service-block-btns{flex-wrap:wrap}}@media screen and (max-width:1100px){.h1{font-size:2.4em;letter-spacing:1px}.h2{font-size:1.4em}.contact-map{max-height:360px}.contact-info .h1{font-size:60px}.h-page .bl-desc{font-size:1.1em;margin:20px 0 0}.news-slider-wrapper{padding:5px 0 0 5px}.sl-text{font-size:12px}.sl-card{height:42%}.agency-map{width:420px;overflow:hidden}.info-data-item span{font-size:30px}.info-data-item p{font-size:14px;line-height:1.2}.info-data-item{margin-right:5%;margin-bottom:3%}.bl-info-wrapper{width:auto}.bl-info .glide__slides{flex-wrap:nowrap}.glide__slides-a{overflow:visible}.info-data-item{margin-bottom:0}.glide-a{position:relative;width:140px;margin:0 auto}.glide-a .bl-info-wrapper,.map .bl-info{overflow:visible}.glide-a .glide__slide{opacity:.5;transition:transform .3s}.glide-a .glide__slide--active{opacity:1;transition:transform .3s;transform:scale(1.1)}.bg-hover{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;transition:.8s ease-in-out;background:linear-gradient(0deg,rgba(0,0,0,.9) 15%,rgba(36,50,74,0) 40%)}.sl-card .bg-hover{opacity:1;-webkit-transition:opacity .8s ease-in-out;-o-transition:opacity ease-in-out .8s}.event-name{font-size:14px;line-height:18px}.inter-event-page .event-info{padding-bottom:5%}.event-page .contact-info{max-width:450px}.event-name-ins{font-size:20px;line-height:24px}.event-page-wrapper{flex-wrap:wrap}.event-page-sl{width:100%;height:400px}.inter-event-page{width:100%;margin-top:30px}.service-block{width:100%}.img-wrapper{width:250px;height:150px;margin-right:30px}.service-desc-w{width:calc(100% - 280px)}.service-block .h1{font-size:22px;margin-bottom:15px}.service-block .bl-desc{margin-top:15px;font-size:1em}.bl-partner{height:150px}.news-box{flex-wrap:wrap}.main-portfolio-big,.main-portfolio-small{width:100%;margin-bottom:25px}.main-page .button-box-main{display:block;width:300px}}@media screen and (max-width:980px){.news-slider{width:100%}.bl-article h1{font-size:32px}.news-sldr-box{max-height:40vh}.tel-btn{font-size:22px}.menu-list{font-size:14px}.bl-pagination{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-bottom:30px}.bl-l img{width:80%;margin:0 auto;display:block}.event-footer{margin-top:5%}.bl-social{padding:15px 12px;max-width:70%;text-align:center}.progress-box{transform:scale(.7)}.event-checked{max-height:none}.event .btn{font-size:.8em}.button-box{width:100%;max-width:180px}.form-line .input-box{width:100%;margin-bottom:10px}.contact-form p{font-size:22px}.h1-more{font-size:30px}.contact-info .h1{font-size:48px}.contact-form{margin-top:15px}.bl-article{overflow:hidden}.videos-title{font-size:30px;line-height:40px}.videos-info{font-size:15px;line-height:18px}.videos-example{width:100%;display:block;margin-bottom:30px;background-size:contain}.videos-example:first-child{height:auto}}@media only screen and (max-width:850px){.content-block-w{display:flex;width:2820px;justify-content:flex-start;align-items:stretch}.centered-block{display:none}.h2{font-size:1.2em}.h-page .h1{font-size:2em}.h-page .bl-desc{font-size:1em}.bl-l{width:80px}.bl-r{width:120px}.main{width:calc(100% - 200px)}header .btn{font-size:.7em;line-height:.7}header .tel-btn{font-size:18px}.sl-card{width:47.5%;height:200px;display:flex;justify-content:space-between;margin-bottom:30px}.portfolio .content-main{display:block;overflow:auto}.slider{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;justify-content:flex-start}.partner .bl-preview{display:none}.bl-partner{display:flex;width:45%}.portfolio-block:after{content:\"\";width:0}}@media only screen and (max-width:800px){.agency-map{width:250px;overflow:hidden}.map .bl-info{margin-top:25px}}@media screen and (max-width:750px){.bl-preview{position:relative;width:70%;margin:0 auto;padding:0 54px 20px;text-align:center}.sl-wrapper{left:0;right:0}.h-page .preview-container{padding:10px 20px}.h-page .sl-teammate{width:45%}.h-page .sl-teammate:last-child{margin-right:0}.h-page .preview-container,.h-page .sl-wrapper-shadow{height:auto}.sl-wrapper{position:relative}.portfolio .bl-preview{position:relative;margin:30px auto;padding:0}.portfolio .arrow-left,.portfolio .arrow-right{top:0;width:24px;height:24px}.portfolio .item-dots{padding:11px 0;margin:30px auto}.portfolio .tr-bottom{width:20px}.team .preview-container{width:370px;margin:0 auto}.team .item-dots{padding:0;margin:20px auto}.h-page .h1{font-size:1.7em}.h-page .h2{font-size:.9em}.team .content-box{height:68vh}}@media screen and (max-width:630px){.tel-btn{font-size:18px}.event-arrow-left,.event-arrow-right{display:block;top:4%}.progress-box{width:-webkit-max-content;width:-moz-max-content;width:max-content}.menu-list{font-size:12px}.bl-l,.bl-r{display:none}.main{position:relative;margin:0 auto;width:90%}.team .preview-container{width:270px}.team .sl-teammate{width:70px;margin:0}.team .dop-arrow-left{width:16px;left:85px}.team .dop-arrow-right{width:16px;right:85px}.team .preview-container{height:auto}.contact,.partner,.portfolio,.service{min-height:100vh;height:auto;flex-direction:column}.partner .bl-partner,.portfolio .sl-card{width:100%;height:35vh;margin-bottom:6%}.partner .bl-partner{transform:scale(.8)}.portfolio .content-main{height:auto;padding:0}.contact .footer-mob,.partner .footer-mob,.portfolio .footer-mob,.service .footer-mob{display:flex;align-items:center}.bl-pagination{transform:none;margin-bottom:0}.bl-copyright{position:absolute;left:42%}.h2{font-size:1.4em;padding:20px 0}.btn{-webkit-animation:none;animation:none}.main-description,.video-box{width:100%}.video-container{max-height:252px;height:30vh}.contact-info .h1{font-size:30px}.contact-info,.contact-map{width:100%}.contact-form{margin-top:20px}.p-contact{display:inline-block;margin:10px 15px 0 0}.contact-map{margin-top:30px}#map-block{padding:14px;min-height:240px}.contact-info{margin-top:35px}.copy-coordinat{display:none}.service-desc{width:54%}.video{margin:20px 0}.service-block .h1{font-size:30px;margin-bottom:15px}.service-block .bl-desc{margin-top:15px;font-size:1.1em}.h-page .footer-mob{display:flex;align-items:center}.wrapper{background-position:50%;min-height:100vh;height:100%}.agency-map{width:90%;position:relative;z-index:1;overflow:hidden;margin:0 auto}.map-bg{z-index:0}.right-wth{width:100%;position:relative;bottom:35px}.team .content-box{position:relative;padding:32px 0 10px}.team .sl-wrapper-shadow{width:80px;height:55px}.team .sl-wrapper{justify-content:start;position:absolute;height:55px;width:100000px}.bl-info{position:relative;height:150px;margin-top:40px;display:block}.bl-info-wrapper{position:absolute;display:flex;transition:left .5s;box-sizing:border-box;width:100000px;align-items:center;justify-content:flex-start}.glide-b .glide__slides{height:100%}.info-data-item{position:relative;display:block;width:140px;margin:0 15px 0 0;opacity:.5;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.info-data{position:relative;margin:0 4%}.city{height:160%;width:150%}.info-left{left:20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ")}.info-left,.info-right{position:absolute;display:block;width:22px;height:14px;top:30%;background-repeat:no-repeat}.info-right{right:20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ")}.bl-article{overflow:visible}.inter-event-page .event-name{margin:10px 0 5px}.agency-map .h1{margin-top:30px}.right-wth{bottom:60%}.sotrud-img{display:block;margin:0 auto}header .btn{font-size:1em;line-height:1}header .tel-btn{font-size:22px}.content-block-w{width:100%}.service-block .bl-desc{font-size:.9em}.service-block .h1{font-size:24px}.slider{width:100%}.portfolio .sl-card{margin-right:0}.glide-c .glide__slide{display:block}.glide-c{width:100%;margin:0 auto;padding:0}.glide-c .glide__track{height:350px}.event-name{font-size:18px;line-height:22px}.event-page .bl-preview{display:none}.event-page-sl{height:300px}.img-wrapper{width:200px;height:120px;margin-right:30px}.service-desc-w{width:calc(100% - 230px)}.service-desc{width:100%}}@media screen and (max-width:480px){.header{padding:0}.header .tel-btn{display:none}.p-contact{margin:10px 0 0}.video{margin-top:60px}.header{display:none}.header-mob{display:flex;margin-top:3%;justify-content:space-between}.mob-menu{height:35px;width:35px;cursor:pointer}.map .h1{margin:50px 0 10px}.info-left{left:35%}.info-right{right:15%}.service-block .bl-desc{width:100%}.mob-menu{position:relative}.mob-menu span{position:absolute;width:9px;height:9px;background-color:#fff;-webkit-animation-delay:.5s;animation-delay:.5s;z-index:10}.mob-menu span:first-child,.mob-menu span:nth-child(4),.mob-menu span:nth-child(7){left:0}.mob-menu span:nth-child(2){left:13px}.mob-menu span:nth-child(3){right:0}.mob-menu span:nth-child(4){top:13px}.mob-menu span:nth-child(5){top:13px;left:13px}.mob-menu span:nth-child(6){top:13px;right:0}.mob-menu span:nth-child(7){bottom:0}.mob-menu span:nth-child(8){bottom:0;left:13px}.mob-menu span:nth-child(9){bottom:0;right:0}@-webkit-keyframes span-1{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@keyframes span-1{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@-webkit-keyframes span-2{0%{transform:translate(0)}to{transform:translate(-6px,6px) scale(.6)}}@keyframes span-2{0%{transform:translate(0)}to{transform:translate(-6px,6px) scale(.6)}}@-webkit-keyframes span-3{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@keyframes span-3{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@-webkit-keyframes span-4{0%{transform:translate(0)}to{transform:translate(6px,6px) scale(.6)}}@keyframes span-4{0%{transform:translate(0)}to{transform:translate(6px,6px) scale(.6)}}@-webkit-keyframes span-6{0%{transform:translate(0)}to{transform:translate(-6px,-6px) scale(.6)}}@keyframes span-6{0%{transform:translate(0)}to{transform:translate(-6px,-6px) scale(.6)}}@-webkit-keyframes span-7{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@keyframes span-7{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@-webkit-keyframes span-8{0%{transform:translate(0)}to{transform:translate(6px,-6px) scale(.6)}}@keyframes span-8{0%{transform:translate(0)}to{transform:translate(6px,-6px) scale(.6)}}@-webkit-keyframes span-9{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@keyframes span-9{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}.mob-menu.open span:first-child{-webkit-animation:span-1 .5s ease-in-out;animation:span-1 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(2){-webkit-animation:span-2 .5s ease-in-out;animation:span-2 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(3){-webkit-animation:span-3 .5s ease-in-out;animation:span-3 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(4){-webkit-animation:span-4 .5s ease-in-out;animation:span-4 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(6){-webkit-animation:span-6 .5s ease-in-out;animation:span-6 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(7){-webkit-animation:span-7 .5s ease-in-out;animation:span-7 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(8){-webkit-animation:span-8 .5s ease-in-out;animation:span-8 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(9){-webkit-animation:span-9 .5s ease-in-out;animation:span-9 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(5){background-color:red}.open-active{display:flex;position:fixed;width:94%;top:65px;left:3%;right:3%;padding:75px 0 40px;bottom:3%;flex-direction:column;justify-content:center;transition:.5s cubic-bezier(0,1,.5,1);transform:translateY(0);z-index:10;background-color:rgba(0,0,0,.9);box-sizing:border-box;overflow-y:scroll}.menu-wrapper .bl-social{margin:30px auto 0;padding:22px 40px;max-width:172px}.menu-wrapper .bl-search{position:absolute;top:3%;right:5%;padding:15px 20px;max-width:120px}.btn-search img{width:20px;height:20px}.header-mob{position:fixed;left:3%;right:3%;z-index:10}.menu-wrapper{box-shadow:0 0 25px 5px rgba(255,0,0,.35);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.contact,.partner,.portfolio,.service{min-height:100vh;height:auto;flex-direction:column}.partner .bl-partner,.portfolio .sl-card{width:100%;height:35vh;margin-bottom:6%}.partner .bl-partner{transform:scale(.8)}.portfolio .content-main{height:auto;padding:0;margin-top:75px}.contact .footer-mob,.partner .footer-mob,.portfolio .footer-mob,.service .footer-mob{display:flex;align-items:center}.h2{font-size:1.4em;padding:20px 0}.btn{-webkit-animation:none;animation:none}.main-description,.video-box{width:100%}.video-container{max-height:252px;height:30vh}.contact-info .h1{font-size:30px}.contact-info,.contact-map{width:100%}.contact-form{margin-top:20px}.p-contact{display:inline-block;margin:10px 15px 0 0}.contact-map{margin-top:30px}#map-block{padding:14px;min-height:240px}.contact-info{margin-top:35px}.map-bg{top:0}.h-page .footer-mob{display:flex;align-items:center}.agency-map{width:90%;position:relative;z-index:1;overflow:hidden;margin:0 auto}.map-bg{z-index:0}.team .sl-wrapper{position:absolute;height:55px;width:100000px}.wrapper{height:inherit;min-height:100vh}.wrapper.team{height:100vh}.bl-l,.bl-r{display:none}.main{padding:0 3%;box-sizing:border-box}.agency-map,.main,.main-description,.video-box{width:100%}.video-box .h2,.video-box .p-title{display:none}.h1{font-size:32px;margin:32px 0 15px;font-weight:400;letter-spacing:1px}.h-page .h1{font-size:24px;line-height:26px;margin-bottom:5px}.h-page .bl-desc{font-size:14px}.bl-desc{margin-top:15px;font-size:16px;line-height:1.2}.video-container{max-height:200px;height:25vh}.video{margin-top:50px;overflow:visible}.bl-preview{width:80%;margin-top:25px;box-sizing:border-box}.tr-bottom{width:25px;margin-top:0;border-radius:1.5px}.map-pass{background-size:contain}.bl-info{flex-wrap:nowrap;overflow:hidden}.map-bg{left:0;background-position:0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")}.city{height:160%;width:150%}.map{margin-top:75px}.fa-map-marker{font-size:26px}.map .h1{font-size:40px;letter-spacing:0;margin:0 0 10px}.info-data span{color:#9b0101;display:inline-block;margin-bottom:10px}.info-data,.info-data p{color:#717171}.img-wrapper{width:42%;padding-bottom:25%}.menu-item{margin-bottom:10px}.service{background-position:50%}.service .line{width:56px}.service-block .h1{margin:0 0 12px;font-size:20px}.service .tr-bottom{margin-top:0;display:inline-block;float:none}.footer-mob{min-height:50px;display:flex;position:relative;margin:3% 0;width:100%;align-items:center;z-index:1}.bl-pagination{transform:none;margin-bottom:0}.bl-copyright{position:absolute;left:42%}.h-page .bl-preview{height:auto}.contact-info{margin-top:25px}.copy-coordinat{display:none}.bl-partner{width:80%;padding:20px;margin:0 auto 6%}.img-partner{height:auto}.sotrud-img{display:block;max-width:290px;margin:0 auto}.h1-more{font-size:38px;margin-bottom:10px}.right-wth{width:100%;position:absolute;bottom:0}.h3{font-size:18px}.team .content-box{position:relative;padding:70px 0 10px}.team .bl-preview{box-sizing:content-box;max-width:360px;width:100%;padding:0 40px 20px}.team .preview-container{padding:20px 25px}.bl-list{display:none}.news-box{flex-direction:column}.article-box{display:block;width:100%;height:auto;overflow:visible}.bl-article{display:flex;flex-direction:column;width:100%}.news-slider{width:auto;margin:60px 0 20px;min-height:auto;overflow:visible;order:1}.news-sldr-box{max-height:252px}.bl-article h1{font-size:28px;order:2}.bl-article .line,.p-subtitle{display:none}.p-subtitle{order:4}.p-article{order:3;margin:0}.news-box .line-mob{display:block;width:100%;height:2px;margin:15px 0;background-color:red;border-radius:1px;box-shadow:0 0 3px 1px #e90000}.news-slider .tr-bottom{display:none}.news-slider .bl-preview{margin:0;padding:0}.bottom-bg{display:block;width:100%;position:fixed;height:20vh;bottom:0;left:0;right:0;background:linear-gradient(0deg,#000 5%,rgba(36,50,74,0));z-index:0}.progress-box{transform:scale(1);height:auto;width:auto}.event-box .h1{font-size:2em}.event-check{max-height:400px}.event-box{height:auto;margin-top:20px}.event-preview{position:relative;padding-bottom:15px}.get-order{position:relative;right:0;bottom:0;margin:50px 0 20px}.event-check{flex-direction:row}.event-check .checkbox-label{width:50%}.menu-list{font-size:16px;margin-bottom:50px}.event-page-wrapper{flex-direction:column}.event-page-sl,.inter-event-page{width:100%}.content-main{padding:0;height:auto}.event-page .news-sldr-box{max-height:300px}.news-sldr-box img{width:100vh}.event-page-sl{height:auto}.slider-block{min-height:auto}.event-name{font-size:24px;line-height:28px}.event-desc p{font-size:16px}.inter-event-page .event-info{padding-bottom:25px}.event-description{padding:20px 0;font-size:18px;font-family:\"RalewayLight\",sans-serif;overflow-y:scroll;height:40vh}.send-button{height:40px}.contact-info input{height:40px;font-size:14px}.sl-card{width:100%;height:35vh;margin-bottom:6%}.portfolio .slider{flex-direction:column}.sl-box-2{max-width:100%}.slider-block{height:45vh}.slides-block{height:35vh}.portfolio .bl-preview{margin-top:0}.h-page .preview-container{height:100px}.h-page .sl-teammate{margin:0 10% 0 0}.bl-preview{padding:0 40px 20px}.h-page .bl-preview{width:auto}.h-page .arrow-left,.h-page .arrow-right{top:20%}.sl-wrapper .sl-teammate:nth-child(2){margin-right:0}.h-page{height:100%}.h-page .item-dots{padding:0}.sl-wrapper{justify-content:space-between}.map .h1{font-size:38px;line-height:40px}.service .bl-preview{height:auto}.service .item-dots{padding:10px 0}.event-page{overflow-y:visible}.slider-block{height:40vh}.form-line{flex-direction:column;flex-wrap:wrap}.form-line .input-box{width:100%;max-width:400px;margin:15px auto}.h-page .preview-container{height:auto}.h-page .dop-arrow-right{width:15px}.arrow-left{left:3%;width:24px;height:24px}.arrow-right{right:3%;width:24px;height:24px}.arrow-left-m{left:3%;width:24px;height:24px}.arrow-right-m{right:3%;width:24px;height:24px}.team .preview-container{width:260px}.sl-wrapper .sl-teammate:nth-child(2){margin-right:10px}.team .bl-preview{width:260px;padding:0 20px}.team .arrow-left{left:-4%}.team .arrow-right{right:-4%}.team .tr-bottom{width:34px}.team .tr-bottom,.team .tr-bottom:last-child{margin-right:10px}.sl-wrapper{width:100%;justify-content:start}.partner .bl-partner{margin-bottom:0}.glide-a .glide__slide--active{transform:scale(1.15)}.info-left{left:-20px}.info-right{right:-20px}.event-page-wrapper{margin-top:75px}.img-wrapper{width:100%;height:80px;margin-right:0}.service-desc-w{width:100%;margin-top:10px}.service-desc{margin-top:0}.service-block .bl-desc{margin-top:10px}.services-main{margin-top:-200px}}@media screen and (max-width:400px){.bl-article h1{font-size:24px}.map .h1{font-size:30px}}@media screen and (max-width:320px){.h1,.map .h1{font-size:24px;letter-spacing:0}.h1-more{font-size:28px}.h3{font-size:14px;margin:10px 0}.sotrud-contact{font-size:13px}.menu-wrapper .bl-search,.menu-wrapper .bl-social{padding:10px 20px}.menu-wrapper .bl-social{margin-bottom:30px}}.glide__slide--active .sl-teammate{opacity:1}.lightcase-news-pic img{max-width:610px}#YoutubeVideo{visibility:hidden}#YoutubeVideo iframe,iframe{width:100%!important;height:100%!important}iframe{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto}.event-details{position:relative;width:685px;margin:0 auto;-webkit-animation:rights 1.3s linear;animation:rights 1.3s linear}.details-progress-mini{background-color:#fff;height:1px}.details-header-title{position:relative;display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:15px;-webkit-animation:rights 1.6s linear;animation:rights 1.6s linear}.details-half-filled{background-color:#e40000;height:1px;width:50%}.details-full-filled{background-color:#e40000;height:1px;width:100%}.details-text-span{font-size:70px;font-family:\"Impact\",sans-serif;font-weight:700}.details-step-span{font-size:20px;line-height:40px}.details-date-label{font-size:16px;line-height:20px;margin-bottom:5px;display:block;color:#fff;font-family:\"RalewayRegular\",sans-serif;cursor:pointer}.details-input-block{height:40px;position:relative;overflow:hidden}.details-input,.details-input-block{width:100%;cursor:pointer;box-sizing:border-box}.details-input{height:38px;margin:0;border:0!important;outline:0!important;background-color:transparent;color:#fff;text-indent:15px}.details-input:hover{background-color:hsla(0,0%,100%,.2)}.mx-input::-webkit-input-placeholder{font-size:15px;color:#a7a7a7}.mx-input:-moz-placeholder,.mx-input::-moz-placeholder{font-size:15px;color:#a7a7a7}.mx-input:-ms-input-placeholder{font-size:15px;color:#a7a7a7}.mx-input[placeholder]{font-size:15px;color:#a7a7a7}.details-input::-webkit-input-placeholder{font-size:15px;color:#a7a7a7}.details-input:-moz-placeholder,.details-input::-moz-placeholder{font-size:15px;color:#a7a7a7}.details-input:-ms-input-placeholder{font-size:15px;color:#a7a7a7}.details-input[placeholder]{font-size:15px;color:#a7a7a7}.field-arrow{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ")}.field-arrow,.field-datepicker{position:absolute;top:11px;bottom:0;right:15px;cursor:pointer;width:18px;height:18px;background-repeat:no-repeat;background-position:50%;background-size:18px;transition:transform .2s}.field-datepicker{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ")}.details-body{display:flex;justify-content:space-between;margin-top:40px;position:relative}.details-body-left,.details-body-right{width:47.5%}.details-body-field{position:relative;width:100%;display:flex;flex-wrap:wrap;min-height:40px;margin-bottom:40px}.details-half-width{position:relative;width:48.5%}.details-body-two-items{display:flex;justify-content:space-between}.details-body-field-w{width:100%;position:relative}.to-next-step{position:relative;height:55px;margin-top:40px;color:#fff;text-align:center;font-weight:700;cursor:pointer}.to-next-step:hover{background-color:red;transition:background-color .2s}.to-next-step span{font-size:17px;line-height:55px}.details-save-status{color:#01b917;font-size:13px;display:none}.details-body-field-status{display:flex;align-items:center;justify-content:center;margin-bottom:0;margin-top:30px}.events-form{display:flex;justify-content:space-between;flex-wrap:wrap}.events-form-div{position:relative;width:48.5%;margin-bottom:40px}.events-form-item-w{height:40px;position:relative;overflow:hidden}.events-form-item,.events-form-item-w{width:100%;cursor:pointer;box-sizing:border-box}.events-form-item{height:38px;margin:0;border:0!important;outline:0!important;background-color:transparent;color:#fff;text-indent:15px}.events-form-item:hover{background-color:hsla(0,0%,100%,.2)}.events-textarea-w{position:relative;width:100%;box-sizing:border-box}.events-textarea-border-w{position:relative}.events-textarea{width:100%;height:100px;padding:15px;box-sizing:border-box;outline:0;border:0;background-color:transparent;font-family:\"RalewayRegular\",sans-serif;resize:vertical}.events-file-block{width:100%;margin-top:40px;display:flex;align-items:center;justify-content:space-between}.field__file-input{visibility:hidden;height:0;width:0}.field__file-wrapper{padding:20px 10px 20px 50px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");background-repeat:no-repeat;background-size:30px;background-position:0;cursor:pointer}.events-add-brief{width:200px;cursor:pointer}.to-next-step-final{position:relative;width:310px;height:55px;color:#fff;text-align:center;font-weight:700;cursor:pointer}.to-next-step-final:hover{background-color:red;transition:background-color .2s}.to-next-step-final span{font-size:17px;line-height:55px}.to-next-step-final input{height:55px;width:100%;background:transparent;border:none;outline:none;color:#fff;font-weight:200;font-size:16px;text-indent:15px;padding:0}.events-form-item::-webkit-input-placeholder{font-size:15px;color:#a7a7a7}.events-form-item:-moz-placeholder,.events-form-item::-moz-placeholder{font-size:15px;color:#a7a7a7}.events-form-item:-ms-input-placeholder{font-size:15px;color:#a7a7a7}.events-form-item[placeholder]{font-size:15px;color:#a7a7a7}.events-textarea::-webkit-input-placeholder{font-size:15px;color:#a7a7a7}.events-textarea:-moz-placeholder,.events-textarea::-moz-placeholder{font-size:15px;color:#a7a7a7}.events-textarea:-ms-input-placeholder{font-size:15px;color:#a7a7a7}.events-textarea[placeholder]{font-size:15px;color:#a7a7a7}input[type=checkbox]:checked,input[type=checkbox]:not(:checked){position:absolute;visibility:hidden}input[type=checkbox]:checked+label,input[type=checkbox]:not(:checked)+label{display:inline-block;position:relative;padding-left:28px;line-height:20px;cursor:pointer}input[type=checkbox]:checked+label:before,input[type=checkbox]:not(:checked)+label:before{content:\"\";position:absolute;left:0;top:0;width:18px;height:18px;border:1px solid #ddd;background-color:transparent;border-radius:0}input[type=checkbox]:checked+label:after,input[type=checkbox]:not(:checked)+label:after{content:\"\";position:absolute;left:3px;top:4px;width:10px;height:5px;border-radius:1px;border-left:4px solid #f50c0a;border-bottom:4px solid #f50c0a;transform:rotate(-45deg)}input[type=checkbox]:not(:checked)+label:after{opacity:0}input[type=checkbox]:checked+label:after{opacity:1}.label-cb1{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.details-body-checkboxes{width:100%;height:100%;margin-top:14px}.mx-table-date .today{background-color:rgba(18,171,231,.2)}.details-body-field .mx-datepicker{width:100%}.mx-datepicker{position:relative;height:40px;box-sizing:border-box;text-indent:15px}.details-body-field .mx-input{display:block;height:40px;background-color:transparent;text-indent:15px;border:0;outline:0;padding:0;color:#fff;cursor:pointer}.details-body-field .mx-input:hover{background-color:hsla(0,0%,100%,.2)}.details-body-field .mx-icon-calendar{display:none}.details-inside-block{height:39px;width:100%;box-sizing:border-box;border-top:1px solid #fff}.details-inside-block:hover{background-color:hsla(0,0%,100%,.1)}.details-multiple-values{position:relative}.details-inputs-hidden{display:none;position:absolute;left:0;right:0;top:39px;border-left:1px solid #fff;border-right:1px solid #fff;border-bottom:1px solid #fff;background-color:#000;z-index:2}.details-multiple-values-opened .field-arrow{transform:rotate(.5turn);transition:transform .2s}.details-multiple-values-opened{height:auto;overflow:visible}.details-multiple-values-opened .details-inputs-hidden{display:block}@media screen and (max-width:1400px){.tenders-title-huge{font-size:60px;line-height:60px}.tenders-title-big,.tenders-title-huge{margin:0 0 30px;min-height:60px;font-weight:300}.tenders-title-big{padding-top:20px;box-sizing:border-box;font-size:40px;line-height:40px}.tenders-garanties,.tenders-item{font-size:15px;line-height:20px}.tenders-input-block{margin-bottom:30px}.tenders-input::-webkit-input-placeholder{font-size:14px;color:#fff}.tenders-input:-moz-placeholder,.tenders-input::-moz-placeholder{font-size:14px;color:#fff}.tenders-input:-ms-input-placeholder{font-size:14px;color:#fff}.tenders-input[placeholder]{font-size:14px;color:#fff}.tenders-send-order span{font-size:16px;line-height:45px}}@media screen and (max-width:1100px){.tenders-left,.tenders-right{width:100%}.details-body{flex-wrap:wrap}.details-body-left,.details-body-right{width:100%}.details-body-right{margin-bottom:50px}.event-details{width:100%}.details-body-field-status{display:none}.article-box,.bl-list{width:100%}}@media screen and (max-width:768px){.events-file-block{flex-wrap:wrap}.events-add-brief{width:70%}.to-next-step-final{width:100%;margin:50px 0}.details-text-span{font-size:40px}.details-step-span{font-size:18px;line-height:40px}.fadein-box{width:100%;margin-bottom:15px}.fadein-box,.fadein-box:nth-child(2n){margin-right:0}.fadein-form{width:96%;padding:30px;margin:100px auto}.border-callback-bottom,.border-callback-top{width:100px}.fadein-close{width:30px}.fadein-title{font-size:26px;line-height:26px}}@media screen and (max-width:480px){.tenders-title-huge{font-size:40px;line-height:40px}.tenders-title-big,.tenders-title-huge{margin:0 0 30px;min-height:40px;font-weight:300}.tenders-title-big{padding-top:20px;box-sizing:border-box;font-size:30px;line-height:30px}.tenders-important{border:1px solid red;padding:20px 25px;box-sizing:border-box}.tenders-important-text:before{top:5px;left:-22px}.tenders-important-text:after,.tenders-important-text:before{position:absolute;display:block;content:\"\";width:20px;height:20px;background-size:16px}.tenders-important-text:after{bottom:0;right:-22px;background-repeat:no-repeat}.tenders-important-text{font-size:14px;line-height:20px}.tenders-half-width{width:100%}.tenders-input::-webkit-input-placeholder{font-size:16px;color:#fff}.tenders-input:-moz-placeholder,.tenders-input::-moz-placeholder{font-size:16px;color:#fff}.tenders-input:-ms-input-placeholder{font-size:16px;color:#fff}.tenders-input[placeholder]{font-size:16px;color:#fff}.send-info-btns{flex-wrap:wrap}.warning-info{width:100%}.tenders-send-order{margin-top:30px;margin-bottom:50px;width:100%}.send-info-btns{margin-top:30px}.events-form-div{width:100%}.events-textarea{height:150px}.event-wrapper{margin:75px auto}.arrow-left-event,.arrow-right-event{display:none}}@media screen and (max-width:1500px){.main-page .bl-r{width:180px}.video-container{height:300px}.video .h2{font-size:1.5em}.main-page .video{padding-right:200px}.content-box{padding-right:250px}.main-page .bl-desc{font-size:14px;line-height:18px}.map .h1{font-size:3em}.main-page .agency-map{width:calc(100% - 700px)}.main-page .map-bg{width:700px;height:700px;background-size:cover}.to-services{height:60px;width:100%;max-width:320px}.sl-card{height:250px}.copy-coordinat{bottom:-30px}.bl-article{width:95%}.article-box{width:calc(100% - 250px)}.bl-list{width:250px}.news-slider{width:100%;margin-right:0;float:none}.lightcase-news-pic img,.news-slider{max-width:100%}.news-sldr-box{max-height:500px}.tenders-title-big{font-size:30px;line-height:30px;padding-top:45px}.main-s .service-block{padding:2%}.button-box-main-title{font-size:14px;line-height:60px}.main-portfolio-block-text{font-size:14px;line-height:18px}.videos-title{font-size:50px;line-height:65px}.videos-info{font-size:16px;line-height:20px}.videos-example{margin-bottom:20px;height:300px}}@media screen and (max-width:1400px){.tenders-title-big{font-size:30px;line-height:30px;padding-top:25px}.videos-example{margin-bottom:20px;height:260px}}@media screen and (max-width:1300px){.news-sldr-box{max-height:350px}.bl-article h1{font-size:30px}.news-slider-wrapper{padding:5px}.bl-list{width:220px}.article-box{width:calc(100% - 220px)}.p-article{font-size:16px}.news-box{padding:0 250px 4% 2.5%}.team .content-box{height:65vh}.team .h1-more{font-size:50px}.team .content-box.no-vertical-padding{height:30vh}.sotrud-img{max-width:280px}.button-box-main-title{font-size:12px;line-height:50px}.main-page .button-box-main{max-width:300px}.button-box-main{height:50px}.videos-title{font-size:30px;line-height:45px}.videos-info{font-size:15px;line-height:18px}}@media screen and (max-width:1200px){.videos-example{margin-bottom:20px;height:230px}}@media screen and (max-width:1100px){.article-box,.bl-list{width:100%}.bl-list{height:auto}.arrow-bottom,.arrow-top{display:none}.p-article{padding-bottom:50px}.news .main{overflow:auto}.news-slider-wrapper{display:flex}.news-min{height:auto}.slider-min{width:250px;margin-right:30px}.map .h1{font-size:2em}.main-page .agency-map{width:calc(100% - 600px)}.main-page .map-bg{width:600px;height:600px}.glide-c{padding:0 5px}.team .h1-more{font-size:40px}.team .content-box{flex-wrap:nowrap}.service-block-btns-w{width:100%}.content-box{padding-right:200px}.videos-title{font-size:30px;line-height:40px}.videos-info{font-size:15px;line-height:18px}.videos-example{margin-bottom:20px;height:400px}}@media screen and (max-width:900px){.main-page .main.h-page{width:100%}.bl-l,.bl-r{display:none}.menu-list{margin-top:0;margin-bottom:50px}header{padding:0 2.5%}.main-page .main-description,header{width:100%}.main-page .map{flex-wrap:wrap;padding:0 2.5%}.main-page .agency-map{width:100%}.main-page .map-bg{width:100%;height:640px}.main-page .header{padding:0}.main-page .video{padding-right:2.5%;flex-wrap:wrap}.main-page .video-box{width:100%}.to-services-w{padding-right:0;margin-top:-50px}.mob-menu{position:relative;height:35px;width:35px;cursor:pointer}.header{display:none}.header-mob{display:flex;justify-content:space-between}.mob-menu span{position:absolute;width:9px;height:9px;background-color:#fff;-webkit-animation-delay:.5s;animation-delay:.5s;z-index:10}.mob-menu span:first-child,.mob-menu span:nth-child(4),.mob-menu span:nth-child(7){left:0}.mob-menu span:nth-child(2){left:13px}.mob-menu span:nth-child(3){right:0}.mob-menu span:nth-child(4){top:13px}.mob-menu span:nth-child(5){top:13px;left:13px}.mob-menu span:nth-child(6){top:13px;right:0}.mob-menu span:nth-child(7){bottom:0}.mob-menu span:nth-child(8){bottom:0;left:13px}.mob-menu span:nth-child(9){bottom:0;right:0}@-webkit-keyframes span-1{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@keyframes span-1{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@-webkit-keyframes span-2{0%{transform:translate(0)}to{transform:translate(-6px,6px) scale(.6)}}@keyframes span-2{0%{transform:translate(0)}to{transform:translate(-6px,6px) scale(.6)}}@-webkit-keyframes span-3{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@keyframes span-3{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@-webkit-keyframes span-4{0%{transform:translate(0)}to{transform:translate(6px,6px) scale(.6)}}@keyframes span-4{0%{transform:translate(0)}to{transform:translate(6px,6px) scale(.6)}}@-webkit-keyframes span-6{0%{transform:translate(0)}to{transform:translate(-6px,-6px) scale(.6)}}@keyframes span-6{0%{transform:translate(0)}to{transform:translate(-6px,-6px) scale(.6)}}@-webkit-keyframes span-7{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@keyframes span-7{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@-webkit-keyframes span-8{0%{transform:translate(0)}to{transform:translate(6px,-6px) scale(.6)}}@keyframes span-8{0%{transform:translate(0)}to{transform:translate(6px,-6px) scale(.6)}}@-webkit-keyframes span-9{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}@keyframes span-9{0%{transform:translate(0)}to{transform:translate(0) scale(.8)}}.mob-menu.open span:first-child{-webkit-animation:span-1 .5s ease-in-out;animation:span-1 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(2){-webkit-animation:span-2 .5s ease-in-out;animation:span-2 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(3){-webkit-animation:span-3 .5s ease-in-out;animation:span-3 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(4){-webkit-animation:span-4 .5s ease-in-out;animation:span-4 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(6){-webkit-animation:span-6 .5s ease-in-out;animation:span-6 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(7){-webkit-animation:span-7 .5s ease-in-out;animation:span-7 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(8){-webkit-animation:span-8 .5s ease-in-out;animation:span-8 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(9){-webkit-animation:span-9 .5s ease-in-out;animation:span-9 .5s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:red}.mob-menu.open span:nth-child(5){background-color:red}.open-active{display:flex;position:fixed;width:94%;top:65px;left:3%;right:3%;padding:75px 0 40px;bottom:3%;flex-direction:column;justify-content:center;transition:.5s cubic-bezier(0,1,.5,1);transform:translateY(0);z-index:10;background-color:rgba(0,0,0,.9);box-sizing:border-box;overflow-y:scroll}.menu-wrapper .bl-social{margin:30px auto 0;padding:22px 40px;max-width:172px}.menu-wrapper .bl-search{position:absolute;top:3%;right:5%;padding:15px 20px;max-width:120px}.btn-search img{width:20px;height:20px}.header-mob{position:relative;z-index:10}.menu-wrapper{box-shadow:0 0 25px 5px rgba(255,0,0,.35)}.wrapper{height:auto}.content-box{padding:5% 2.5%}.main{width:100%}.news-box{padding:5% 0}.article-box{height:auto}.bl-article{overflow:auto}.news-slides{width:100%}.p-article{padding-bottom:0}.news-sldr-box{max-height:100%}.news-slides .lightcase-news-pic img{width:100%}.team .content-box{flex-wrap:nowrap;padding:0 3%}.partners-main,.tenders-main{margin-top:0;padding-top:0}.videos-examples{margin-top:100px}}@media screen and (max-width:768px){.main-page .map-bg{height:540px}.team .content-box,.tenders-list-w{flex-wrap:wrap}.tenders-list-first{width:100%}.tenders-list-second{width:100%;margin-top:30px}.videos-examples{margin-top:50px}}@media screen and (max-width:600px){.main-page .map-bg{height:450px}.videos-example{height:300px}}@media screen and (max-width:550px){.main-page .map-bg{height:400px}}@media screen and (max-width:480px){#map-desktop{display:none}.map{margin-top:25px}.main-page .map-bg{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");background-size:60%;background-position:100%;background-repeat:no-repeat;width:100%;height:620px;margin-top:0;background-size:contain}.main.h-page{overflow:hidden}.main-page .to-services{margin-top:-100px}.main-page .map,.main-page .video{padding:0}.map .h1,.video .h1{font-size:28px;line-height:32px}.header-mob{left:0;right:0}.main-page header{padding:0}.portfolio-form .form-line .input-box:first-child{margin-right:0}.team .content-box{padding:50px 0 10px;height:65vh}.glide-c .glide__track{margin:0 auto}.team .h1-more{font-size:38px}.team .content-box.no-vertical-padding{height:30vh}.team .arrow-left,.team .arrow-right{top:35px}.button-box,.main-page .button-box-main{width:100%;max-width:100%}.button-box-main-title{font-size:16px}header{padding:0}.videos-examples{margin-top:-180px;margin-bottom:180px}.videos-example{height:250px}}@media screen and (max-width:420px){.videos-example{height:200px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.9e02462.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-serv.9e91a5f.jpg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-portfolio.5953789.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-contact.20992de.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-news.cb4c918.jpg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-team.490d8e0.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-partner.d59a0b1.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-event.db2f0b7.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/video-wrapper.642cba5.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/youtube.01a7be4.png";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS45OTUgNTExLjk5NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk5NSA1MTEuOTk1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI2ZmMDAwMCIgZD0iTTM4MS4wMzksMjQ4LjYyTDE0Ni4zNzMsMy4yODdjLTQuMDgzLTQuMjI5LTEwLjgzMy00LjQxNy0xNS4wODMtMC4zMzNjLTQuMjUsNC4wNzMtNC4zOTYsMTAuODIzLTAuMzMzLDE1LjA4Mw0KCQkJTDM1OC41NiwyNTUuOTk1TDEzMC45NTYsNDkzLjk1NGMtNC4wNjMsNC4yNi0zLjkxNywxMS4wMSwwLjMzMywxNS4wODNjMi4wNjMsMS45NzksNC43MjksMi45NTgsNy4zNzUsMi45NTgNCgkJCWMyLjgxMywwLDUuNjA0LTEuMTA0LDcuNzA4LTMuMjkyTDM4MS4wMzksMjYzLjM3QzM4NC45NzcsMjU5LjI0NSwzODQuOTc3LDI1Mi43NDUsMzgxLjAzOSwyNDguNjJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plash.f8fe6c0.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tenders.c2156f5.jpg";

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI1NiAyNTYiIGhlaWdodD0iMjU2cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGZpbGwgPSAiI2ZmZiIgZD0iTTM4LjM5OSw3Ni44YzEuNjM3LDAsMy4yNzQsMC42MjUsNC41MjQsMS44NzVsODUuMDc1LDg1LjA3Nmw4NS4wNzUtODUuMDc2YzIuNS0yLjUsNi41NS0yLjUsOS4wNSwwczIuNSw2LjU1LDAsOS4wNSAgbC04OS42LDg5LjYwMWMtMi41LDIuNS02LjU1MSwyLjUtOS4wNTEsMGwtODkuNi04OS42MDFjLTIuNS0yLjUtMi41LTYuNTUsMC05LjA1QzM1LjEyNCw3Ny40MjUsMzYuNzYyLDc2LjgsMzguMzk5LDc2Ljh6Ii8+PC9zdmc+"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48ZyBkYXRhLW5hbWU9IjEiIGlkPSJfMSI+PHBhdGggZmlsbCA9ICIjQjgwMTAwIiBkPSJNMjAyLjEsNDUwYTE1LDE1LDAsMCwxLTEwLjYtMjUuNjFMMzY1Ljc5LDI1MC4xLDE5MS41LDc1LjgxQTE1LDE1LDAsMCwxLDIxMi43MSw1NC42bDE4NC45LDE4NC45YTE1LDE1LDAsMCwxLDAsMjEuMjFsLTE4NC45LDE4NC45QTE1LDE1LDAsMCwxLDIwMi4xLDQ1MFoiLz48L2c+PC9zdmc+"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbCA9ICIjRkYwMDAwIiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IkxheWVyXzFfMV8iPjxwb2x5Z29uIHBvaW50cz0iMzIuMDYxLDQ3LjI5MyA5Ljc2OCwyNSAzMi4wNjEsMi43MDcgMzAuNjQ2LDEuMjkzIDYuOTM5LDI1IDMwLjY0Niw0OC43MDcgICIvPjxwb2x5Z29uIHBvaW50cz0iNDEuNjQ2LDQ4LjcwNyA0My4wNjEsNDcuMjkzIDIwLjc2OCwyNSA0My4wNjEsMi43MDcgNDEuNjQ2LDEuMjkzIDE3LjkzOSwyNSAgIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAZklEQVQYlY3PsQmAQAyF4f9qV7IQcRut3cDWyhkcwN5xBJ9LPKuD4zgPA2mSD/ISbFOrJ4QdaLH92YJNYME/JBgRrIKjhmxDMjgFjWDJUYRDsrhLyDbxVJcAC6Y8c5qrF1yCufTcCwzfpYTX4lNeAAAAAElFTkSuQmCC"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMC42NTIzNDQgMTg1LjkwMjM0NGMtMy4zNTE1NjMtMTAuMzY3MTg4LTEyLjU0Njg3NS0xNy43MzA0NjktMjMuNDI1NzgyLTE4LjcxMDkzOGwtMTQ3Ljc3MzQzNy0xMy40MTc5NjgtNTguNDMzNTk0LTEzNi43Njk1MzJjLTQuMzA4NTkzLTEwLjAyMzQzNy0xNC4xMjEwOTMtMTYuNTExNzE4LTI1LjAyMzQzNy0xNi41MTE3MThzLTIwLjcxNDg0NCA2LjQ4ODI4MS0yNS4wMjM0MzggMTYuNTM1MTU2bC01OC40MzM1OTQgMTM2Ljc0NjA5NC0xNDcuNzk2ODc0IDEzLjQxNzk2OGMtMTAuODU5Mzc2IDEuMDAzOTA2LTIwLjAzMTI1IDguMzQzNzUtMjMuNDAyMzQ0IDE4LjcxMDkzOC0zLjM3MTA5NCAxMC4zNjcxODctLjI1NzgxMyAyMS43MzgyODEgNy45NTcwMzEgMjguOTA2MjVsMTExLjY5OTIxOSA5Ny45NjA5MzctMzIuOTM3NSAxNDUuMDg5ODQ0Yy0yLjQxMDE1NiAxMC42Njc5NjkgMS43MzA0NjggMjEuNjk1MzEzIDEwLjU4MjAzMSAyOC4wOTM3NSA0Ljc1NzgxMyAzLjQzNzUgMTAuMzI0MjE5IDUuMTg3NSAxNS45Mzc1IDUuMTg3NSA0LjgzOTg0NCAwIDkuNjQwNjI1LTEuMzA0Njg3IDEzLjk0OTIxOS0zLjg4MjgxM2wxMjcuNDY4NzUtNzYuMTgzNTkzIDEyNy40MjE4NzUgNzYuMTgzNTkzYzkuMzI0MjE5IDUuNjA5Mzc2IDIxLjA3ODEyNSA1LjA5NzY1NyAyOS45MTAxNTYtMS4zMDQ2ODcgOC44NTU0NjktNi40MTc5NjkgMTIuOTkyMTg3LTE3LjQ0OTIxOSAxMC41ODIwMzEtMjguMDkzNzVsLTMyLjkzNzUtMTQ1LjA4OTg0NCAxMTEuNjk5MjE5LTk3Ljk0MTQwNmM4LjIxNDg0NC03LjE4NzUgMTEuMzUxNTYzLTE4LjUzOTA2MyA3Ljk4MDQ2OS0yOC45MjU3ODF6bTAgMCIgZmlsbD0iI2ZmYzEwNyIvPjwvc3ZnPg=="

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/map-mob.4b5d362.svg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/calendar.7c915fe.svg";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/notes.3d8174c.svg";

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_54d9e6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_54d9e6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_54d9e6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_54d9e6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_54d9e6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".body-error[data-v-54d9e6ec]{background-color:#fff!important}.error-info-text[data-v-54d9e6ec]{color:#000!important}.go-to-main[data-v-54d9e6ec]{text-decoration:underline;color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  eventForm: [],
  portfolioData: [{
    id: 0,
    title: 'КРОК',
    picsFolder: 'krok',
    pics: [1, 2, 3],
    dateData: '<b>30.12.2020 г.</b>',
    membersData: '40 чел.',
    spectators: '',
    details: `
        <p>Место проведения: <b>Лес Арт Резорт</b></p>
        <p>Формат мероприятия: <b>Клиентское мероприятие</b></p>
        <p><b>Цели/задачи:</b></p>
        <p>Задача от КРОК - Организовать мероприятие для своих клиентов. 
        Отель должен быть хорошего уровня и иметь много развлечений, т.к. они приглашают своих клиентов
        чтобы они отдохнули. Банкет должен быть каждый вечер, т.е. 1й день - открытие, 2й день - закрытие.</p>`
  }, {
    id: 1,
    title: 'Борк/Технопарк',
    picsFolder: 'bork_tehnopark',
    pics: [1, 2],
    dateData: '<b>29.04 - 30.04.21 г.</b>',
    membersData: '65 чел.',
    spectators: '',
    details: `
        <p>Место проведения: <b>Лес Арт Резорт</b></p>
        <p>Формат мероприятия: <b>Корпоратив для сотрудников</b></p>
        <p><b>Цели/задачи:</b></p>
        <p>Нужно было организовать обучение и корпоратив для некоторых сотрудников компании. Организовали обучение сотрудников, игру в лазертаг и вечерний банкет с ведущим и кавер-группой.</p>
        `
  }, {
    id: 2,
    title: 'GEA',
    picsFolder: 'gea',
    pics: [1, 2],
    dateData: '<b>07.10-10.10.21 г.</b>',
    membersData: '100 чел.',
    spectators: '',
    details: `
        <p>Место проведения: <b>Mercure Калининград</b></p>
        <p>Формат мероприятия: <b>Встреча дилеров</b></p>
        <p><b>Цели/задачи:</b></p>
        <p>Было необходимо организовать встречу дилеров на побережье
        Калининградской области. В связи с тем, что на побережье
        не оказалось отеля с большим номерным фондом и конференц-залом 
        мы организовали мероприятие  в самом городе Калининград. Нужно
        было организовать выезд на производство, экскурсию, ужин с
        блюдами из охотничьей кухни, конференцию и гала-ужин.</p>
        `
  }, {
    id: 3,
    title: 'AT Consulting',
    picsFolder: 'at_consulting',
    pics: [1, 2],
    dateData: '<b>12.11-14.11.21 г.</b>',
    membersData: '210 чел.',
    spectators: '',
    details: `
        <p>Место проведения: <b>Ареал</b></p>
        <p>Формат мероприятия: <b>Стратегическая сессия</b></p>
        <p><b>Цели/задачи:</b></p>
        <p>Была поставлена задача организовать
        обучение новых сотрудников, а также организовать
        стратегическую сессию с участием руководителей компании 
        и приглашенных спикеров. В качестве развлекательной программы
        было проведено командообразующее мероприятие и вечерний гала-ужин
        с ведущим и кавер-группой.</p>
        `
  }, {
    id: 4,
    title: 'Nexters Global',
    picsFolder: 'nexters_summer',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    dateData: '<b>18-20.06.2021 г.</b>',
    membersData: '<b>Количество участников</b> – 550',
    spectators: '',
    details: `
        <p><b>Поставленные задачи:</b></p>
        <p>Организация и проведение фестиваля под открытым небом с уличной едой, развлечениями и выступлениями артистов</p>

        <p><b>Предложенные решения поставленных задач:</b></p>
        <p> Для размещения группы в 550 человек был выбран отель Рэдиссон Завидово.
        Были выбраны локации на территории отеля и на пляже рядом. Были застроены 2 сцены, одна на
        первый вечер мероприятия, вторая - основная - на второй. Накануне мероприятия был осуществлена
        выдача welcome-подарков для участников мероприятия. Для проведения мероприятия были приглашены подрядчики
        по организации активностей на земле и воде, VR-комната, привезены аппараты с мороженым, с кукурузой и сладкой ватой.
        Зона фестиваля была ограждена фан-барьерами, периметр был огорожен постами охраны, на территорию пропускали только участников
        с браслетами фестиваля. На воде дежурили спасатели, а реанимация сопровождала мероприятие 24/7.  В первый день фестиваля гостям
        предлагали разливное крафтовое пиво, легкие алкогольные коктейли, линии с уличной едой. Гостей развлекала известная кавер-группа и ведущий.
        Во второй день фестиваля работали различные зоны развлечений в течении всего дня.
        Хедлайнером фестиваля выступила группа Little Big, а вечер закрывал праздничный салют.</p>`
  }, {
    id: 5,
    title: 'Nexters Global',
    picsFolder: 'nexter_new_year',
    pics: [1, 2, 3, 4, 5, 6, 7],
    dateData: '<b>30.12.2020 г.</b>',
    membersData: 'Онлайн-мероприятие',
    spectators: '',
    details: `<p><b>Поставленные задачи:</b></p>
        <p>Организовать проведение онлайн-корпоратива для сотрудников компании для празднования Нового Года</p>

        <p><b>Предложенные решения поставленных задач:</b></p>
        <p> После инспекции ряда площадок в Москве и ближайшем Подмосковье было принято решение организовать
        импровизированную студию в офисе заказчика. Был выбран и предложен подрядчик, который отвечал за техническую 
        часть - завоз необходимого оборудования, подготовка и написание веб-страницы мероприятия, доступной только для 
        сотрудинков компании (вход по логину-паролю), застройка студии и связь ее с передвижной студией в помещении кулинарной
        мастерской. Одной из частей мероприятия был кулинарный мастер-класс со звездным ведущим - Константином Ивлевым. Под 
        эту часть корпоратива участникам мероприятия были доставлены продукты для приготовления традиционных новогодних блюд.
        В основной студии в офисе заказчика был подготовлен сценарий мероприятия в формате "Вечернего Урганта". Так же было 
        отведено отдельное помещение под кейтеринг, где приглашенные подрядчики готовили блюда для звезд вечера, исходя из их
        бытового райдера. Написанием сценария вечера занимались профессиональные сценаристы, работающие с Первым каналом. Во
        время вечерней части мероприятия гостям развозили новогодние подарки силами службы "Дед-мороз на дом". Участники имели 
        возможность писать в прямой эфир, некоторые их вопросы и комментарии зачитывали ведущие с Первого канала, также 
        был осуществлен выход участников из разных точек России в прямой эфир. Закончился вечер розыгрышем главного приза 
        - PS5 и музыкальной программой от группы "Фрукты"</p>`
  }, {
    id: 6,
    title: 'NSP Будапешт',
    picsFolder: 'nsp_budapesht',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    dateData: '<b>01-06.04.2019 г.</b>',
    membersData: '<b>Количество участников</b> – 220',
    spectators: '',
    details: `<p><b>Поставленные задачи:</b></p>
        <p>Организовать проведения международной конференции: визовая поддержка, размещение, питание, трансферы, экскурсии,
        торжественный гала-ужин. Реализация программы мероприятия в основные дни проведения конференции.</p>
        <p><b>Предложенные решения поставленных задач:</b></p>
        <p>Для размещения группы были выбраны 2 отеля Будапешта, так как один отель не мог принять всю группу сразу. 
        Основной отель был выбран исходя из расположения, цены и наличия конференц-зала, способного принять программу конференции и зала под закрывающий гала-ужин в последний день.
        В первый день заезда была организована обзорная экскурсия по Будапашету. Во второй - конференция с приглашенным VIP-спикером из Москвы, для которой были заказаны отдельные бизнес-машины. После завершения научной части проходил банкет на корабле. 
        Для этого был арендован причал на Дунае и корабль. Во время гала-ужина на корабле играли местные фолк-ансамбли, а гостям предлагали традиционные Венгерские блюда и напитки. 
        Во время второго дня конференции были подведены итоги прошедшего года, награждены лучшие сотрудники компании, проведен КВН с участием сотрудников компании и лотерея. Были разыграны и подарены сувениры, разработанные специально под Венгрию - в цветах флага и с писпользованием национальных символов. На закрытие конференции был подан торт с логотипом компании, который стал финальным аккордом научной части.
        На закрывающий гала-ужин был переоборудован зал, приглашен ведущий из России и диджей из Венгрии, которые весь вечер сочетали любимые русские песни с хитами Венгреской эстрады. 
        На следующий день был организован выезд во всемирноизвестные термальные источники Сечень - для этого баня была выкуплена под закрытие под наших участников.
        Оттуда гостей на нескольких автобусах вывезли в ресторан национальной кухни на обед, который так же был выкуплен для нашей группы.</p>`
  }, {
    id: 7,
    title: 'NSP Турция',
    picsFolder: 'nsp_turkey',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    dateData: '12-17.04.2021 г.',
    membersData: '<b>Количество участников</b> – 130',
    spectators: '',
    details: `
        <p><b>Поставленные задачи:</b></p>
        <p>Организовать проведение международной конференции в честь открытия турецкого филиала компании: размещения, питание, трансферы, торжественное открытие офиса</p>
        <p><b>Предложенные решения поставленных задач:</b></p>
        <p>
        Для размещения группы был выбран отель 5*, работающий по системе Ultra all-inclusive,
        Calista Luxury Resort, входящая в топ-5 отелей на Средиземноморском побережье. Отель выбирали,
        исходя из пожеланий заказчика по бюджету, расположению и доп.услуг. Плюс было необходимо наличие конференц-зала
        с определенными требованиями под официальную часть программы. Всем участникам мероприятия были подготовлены
        и вручены пакеты участника, включащие в себя раздаточные материалы с символикой мероприятия и символические
        турецкие сувениры - рахат-лукум и фески. За 2 дня конференции были подведены итоги прошедшего финансового года,
        награждены лучшие сотрудники, опробованы в игровом формате новые методики и способы увеличения уровня продаж.
        Торжественная часть в офисе включала в себя приветственное шампанское, речь владельцев компании и символическое
        разрезание красной ленты, означающее открытие филиала в Анталье.</p>`
  }, {
    id: 8,
    title: 'ВТБ-Регистратор',
    picsFolder: 'vtb_kazan',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    dateData: '28.07.2020 г.',
    membersData: '<b>Количество участников</b> – 80',
    spectators: '',
    details: `<p><b>Поставленные задачи:</b></p>
        <p>Организация и проведение корпоративного мероприятия в Казани.</p>
        <p><b>Предложенные решения поставленных задач:</b></p>
        <p> Для размещения группы был выбран один из лучших отелей Казани - Казанская Ривьера. 
        Накануне мероприятия была осуществлен выдача welcome-подарков для участников мероприятия. 
        Кроме официальной части гостей мероприятия ждала обзорная экскурсия по Казани, которая закончилась
        в национальном музее Туган Авалым, где гости разделились на несколько групп и принимали участие в
        различных творческих мастер-классах. После их ждал обед, во время которого выступали фольклорные 
        исполнители: музыканты, певцы, танцоры. Гости могли принять участие в различных интерактивных номерах и примерить на себя национальные костюмы. 
        На следующий день, после проведения конференции, программа мероприятия завершалась торжественным 
        гала-ужином с приглашенным ведущим из Москвы - Александром Касаткиным, актером театра и кино. Тематический вечер 
        в стиле кругосветного путешествия включал в себя также и  заранее подготовленные выступления участникаов из разных
        регионов РФ и позволял гостям необычно и интереснее всего презентовать свой регион.</p>`
  }, {
    id: 9,
    title: 'Ресо Гарантия',
    dateData: '',
    picsFolder: 'reso',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    membersData: '<b>Количество участников</b> – 1500',
    spectators: '',
    details: `Перед нами стояла задача провести обучение более тысчи региональных сотрудников
        Компании в рамках Ежегодного Мегафеста. Было необходимо полностью обеспечить проживание 1200 человек,
        обеспечить логистику траспортного обслуживания, полное
        техническое обеспечение мероприятия. Составить полный сценарий мероприятия.`
  }, {
    id: 10,
    title: 'Компания Треолан',
    dateData: '',
    picsFolder: 'treolan',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    membersData: '<b>Количество участников</b> – 1500',
    spectators: '',
    details: `Была задача организовать барбекю, с элементами тимбилдинга. 
        Предложили заказчику провести такое мероприятие на природе, на берег Пироговского водохранилища. 
        На площадку были привезены спортивные сооружения, батуты, спортивный инвентарь. Также для желающих орагнизовали кулинарное шоу. 
        Само мероприятие длилось на протяжении 8 часов.`
  }, {
    id: 11,
    title: 'Компания Пропеллер',
    dateData: '',
    picsFolder: 'propeller',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    membersData: '<b>Количество участников</b> – 250',
    spectators: '',
    details: `Была поставлена цель провести юбилей компании. Необходимо было задействовать звезд эстрады.
        Была произведена масштабная застройка свободного пространства отеля. Организовали полный цикл развлекательной
        программы включая шоу Ходулистов, несколько станций фудкорта, полный дизайн отеля под фирменный стиль Компании
        заказчика, звезд эстрады и прочее.`
  }, {
    id: 12,
    title: 'Италкосметика',
    dateData: '',
    picsFolder: 'polix_beauty',
    pics: [1, 2, 3, 4, 5, 6, 7],
    membersData: '<b>Количество участников</b> – 250',
    spectators: '',
    details: `Помимо празднования юбилея Компания было необходимо провести презентацию нового продукта. 
        Так как деловая программа была в одном отеле, а развлекательная часть в другом отеле, нами была выстроена 
        грамотная логистика. Необходимо было разделить людей на потоки, перевести их с завода производителя в отель для
        продолжения деловой программы и затем организовать доставку гостей в другой отель, где кроме банкетной и развлекательной
        программы, гости также проводили рабочие встречи и конференции.`
  }, {
    id: 13,
    title: 'Открытая пленарная дискуссия ATOM SKILLS',
    picsFolder: 'atom_skills_discussion',
    pics: [1, 2, 3, 4, 5, 6, 7, 8],
    dateData: '<b>24.07.2020 г.</b>',
    membersData: '<b>На площадке</b> – 18 в кадре, 27 за кадром',
    spectators: '<b>Посмотрели онлайн</b> – 4000+',
    details: `
        <ul>
            <li>Пленарное заседание онлайн</li>
            <li>Один съемочный день</li>
            <li>Дизайн и профессиональная застройка студии</li>
            <li>Полное техническое сопровождение</li>
            <li>Подключение удаленных спикеров</li>
            <li>Синхронный перевод на два языка в прямой эфир</li>
            <li>Графическое оформление эфира: заставки, плашки, титры</li>
            <li>Кейтеринг и гример</li>
        </ul>`
  }, {
    id: 14,
    title: 'Второй Молодежный Слет дивизиона «Электроэнергетический»',
    picsFolder: 'elektroenergeticheskiy',
    pics: [1, 2, 3, 4, 5, 6, 7],
    dateData: '16 - 17.07.2020 г.',
    membersData: 'На площадке – 18 в кадре, 27 за кадром',
    spectators: 'Посмотрели онлайн – 1400+ человек',
    details: `
        <ul>
            <li>Два съемочных дня</li>
            <li>Две оборудованных студии</li>
            <li>Полное техническое сопровождение</li>
            <li>Дизайн и застройка двух студий под молодежную тематику</li>
            <li>Графическое оформление эфира: заставки, плашки, титры</li>
            <li>Прямой эфир с подключением удаленных спикеров</li>
            <li>Брендированный сайт мероприятия</li>
            <li>Закрытая трансляция, доступ по регистрации</li>
            <li>Адаптивный интерфейс плеера, просмотр на любом устройстве</li>
            <li>Интерактив для зрителей: чат, опросы, голосование</li>
            <li>Развлекательная зона: онлайн-бар и диджей</li>
            <li>Кейтеринг и гример</li>
        </ul>`
  }, {
    id: 15,
    title: 'Церемония открытия чемпионата ATOM SKILLS',
    picsFolder: 'atom_skills_open',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    dateData: '24.07.2020 г.',
    membersData: 'На площадке – 26 в кадре, 32 за кадром',
    spectators: 'Посмотрели онлайн – 9000+',
    details: `
        <ul>
            <li>Церемония открытия онлайн</li>
            <li>Один съемочный день</li>
            <li>Профессиональное оборудование</li>
            <li>Дизайн и застройка студии</li>
            <li>Сценарный план и сборка эфира</li>
            <li>Графическое оформление эфира: заставки, плашки, титры</li>
            <li>Приглашенные артисты и шоу-программа</li>
            <li>Кейтеринг и гример</li>
        </ul>`
  }, {
    id: 16,
    title: 'Деловая программа ATOM SKILLS',
    picsFolder: 'atoms_skills_business',
    pics: [1, 2, 3, 4, 5, 6, 7, 8],
    dateData: '19.08.2020 г.',
    membersData: 'Было в студии - 6 в кадре, 19 за кадром',
    spectators: 'Посмотрели онлайн - 1000+',
    details: `
        <ul>
            <li>Две оборудованные студии</li>
            <li>Полное техническое сопровождение</li>
            <li>Дизайн и застройка студии под формат мероприятия</li>
            <li>Развлекательная зона: онлайн-бар и диджей</li>
            <li>Графическое оформление эфира: заставки, плашки, титры</li>
            <li>Подключение удаленных спикеров</li>
            <li>Брендированный сайт мероприятия</li>
            <li>Закрытая трансляция, доступ по регистрации</li>
            <li>Адаптивный интерфейс плеера, просмотр на любом устройстве</li>
            <li>Интерактив для зрителей: чат, опросы, голосование</li>
            <li>Кейтеринг и гример</li>
        </ul>`
  }, {
    id: 17,
    title: 'Бизнес-завтрак «кухня» инноваций ATOM SKILLS',
    picsFolder: 'atom_skills_breakfast',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    dateData: '28.07.2020 г.',
    membersData: 'На площадке – 14 в кадре, 38 за кадром',
    spectators: 'Посмотрели онлайн – 3500+',
    details: `
            <ul>
                <li>Бизнес-завтрак в онлайн формате</li>
                <li>Один съемочный день</li>
                <li>Две оборудованные кулинарные студии</li>
                <li>Телемост между двумя городами: Москва - Екатеринбург</li>
                <li>Приглашенные шеф-повара</li>
                <li>Коллаборация телешоу и бизнес-встречи</li>
                <li>Сценарный план и сборка эфира</li>
                <li>Графическое оформление эфира: заставки, плашки, титры</li>
                <li>Кейтеринг и гример</li>
            </ul>
        `
  }, {
    id: 18,
    title: 'Мероприятие по развитию направления «Каракури»',
    dateData: '18.08.2020 г',
    picsFolder: 'karakuri',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    membersData: 'Было в студии - 7 в кадре, 22 за кадром',
    spectators: 'Посмотрели онлайн - 1000+',
    details: `
            <ul>
                <li>Одна оборудованная студия</li>
                <li>Полное техническое сопровождение</li>
                <li>Дизайн и застройка студии под формат мероприятия</li>
                <li>Графическое оформление эфира: заставки, плашки, титры</li>
                <li>Подключение удаленных спикеров</li>
                <li>Брендированный сайт мероприятия</li>
                <li>Закрытая трансляция, доступ по регистрации</li>
                <li>Адаптивный интерфейс плеера, просмотр на любом устройстве</li>
                <li>Интерактив для зрителей: чат, опросы, голосование</li>
                <li>Кейтеринг и гример</li>
            </ul>
        `
  }, {
    id: 19,
    title: 'Опен Майнд Консалтинг (Тренинг Александра Палиенко)',
    picsFolder: 'open_mind_consulting',
    pics: [1, 2, 3],
    dateData: '',
    membersData: '50-60 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Radisson Rosa Khutor, 2020 и Гранд Отель Поляна</b></p>
            <p>Формат мероприятия: <b>Тренинг</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Перед нами стояла задача организовать площадку для тренинга,
            настроить систему бронирования по промокоду для участников мероприятия,
            так же организовать и подобрать площадку для тренинга, обеспечить индивидуальное
            бронирование каждого гостя.
            </p>
        `
  }, {
    id: 20,
    title: 'АО Медицина (клиника академика Ройтберга) – многопрофильный медицинский центр',
    picsFolder: 'ao_medicina',
    pics: [1, 2, 3],
    dateData: '',
    membersData: '20 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Этномир, Radisson Zavidovo</b></p>
            <p>Формат мероприятия: <b>Ежегодная конференция ведущих специалистов</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Задача провести мероприятие на площадке, которую заказчик подобрал сам. Подбор отеля, организация конференции, банкета.</p>
        `
  }, {
    id: 21,
    title: 'Суши Даром',
    picsFolder: 'sushi_darom',
    pics: [1, 2, 3, 4],
    dateData: '',
    membersData: '75 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Панорама by Mercure</b></p>
            <p>Формат мероприятия: <b>Обучение владельцев ресторанов сети Суши Даром</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Организация тренинга, нараждение лучших владельцев ресторанов.</p>
        `
  }, {
    id: 22,
    title: 'ООО «Сканди-Финлэнд»',
    picsFolder: 'skandi_finland',
    pics: [1, 2, 3],
    dateData: '',
    membersData: '70 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Bridge Resort</b></p>
            <p>Формат мероприятия: <b>Показ новой коллекции</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Задача подобрать площадку для показа новой коллекции, сделать застройку.</p>
        `
  }, {
    id: 23,
    title: 'Школа продюсера Татьяны Маричевой',
    picsFolder: 'shkola_t_marichevoy',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dateData: '',
    membersData: '300 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Radisson Rosa Khutor</b></p>
            <p>Формат мероприятия: <b>Мероприятие для продюссеров</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Оранизовать площадку для тренинга, 
            настроить систему бронирования в 4х
             отелях курорта Розы Хутор, организация 
             2 вечеринок в разных локациях, организовать
              закрытое мероприятие в аквапарке, массовый 
              спуск на сноубордах, лыжах, хождение по углям.</p>
        `
  }, {
    id: 24,
    title: 'S.T.I. Dent',
    picsFolder: 'sti_dent',
    pics: [1, 2, 3, 4],
    dateData: '',
    membersData: '120 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Хаятт Сочи</b></p>
            <p>Формат мероприятия: <b>Презентация</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Организация мероприятия под ключ - конференция, презентация нового продукта, банкет, кавер-группа, ведущий.</p>
        `
  }, {
    id: 25,
    title: 'LUSH RUSSIA',
    picsFolder: 'lush_russia',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    dateData: '',
    membersData: '63 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Имеретинский Отель</b></p>
            <p>Формат мероприятия: <b>Презентация нового продукта для дикторов магазинов</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Видео конференция с главным европейским офисом, организация мероприятия 
            с учетом бережного отношения к природе - отсутствие пластиковой посуды, заменили
             стеклом, отсутствие пластиковых бутылок, вегетарианское меню.</p>
        `
  }, {
    id: 26,
    title: 'Салон на миллион',
    picsFolder: 'salon_na_million',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    dateData: '',
    membersData: '100 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Бархатные Сезоны</b></p>
            <p>Формат мероприятия: <b>Фитнес-тренинг</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Организация конференции для теоретической части, площадок на улице для спортивных тренировок, фуршет.</p>
        `
  }, {
    id: 27,
    title: 'АКТР',
    picsFolder: 'aktr',
    pics: [1, 2, 3, 4],
    dateData: '',
    membersData: '250 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Ареал</b></p>
            <p>Формат мероприятия: <b>Ежегодное мероприятие представителей сферы кабельного телевидения</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Наладить систему бронирования для индивидуального бронирования, выстроить программу, чтобы все вечерние мероприятия (банкет, фуршет) проходили в разных залах. Обеспечение рекламной продукцией, брендинг отеля.</p>
        `
  }, {
    id: 28,
    title: 'PHYSICAL TRANSFORMATION',
    picsFolder: 'physical_transformation',
    pics: [1, 2, 3, 4],
    dateData: '',
    membersData: '180 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Riders Lodge</b></p>
            <p>Формат мероприятия: <b>Спортивное мероприятие</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Подбор отеля на территории Розы Хутор с доступом к открытой спортивной площадке.</p>
        `
  }, {
    id: 29,
    title: 'ПЛАУТ КОНСАЛТИНГ',
    picsFolder: 'plaut_consulting',
    pics: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    dateData: '',
    membersData: '120 чел.',
    spectators: '',
    details: `
            <p>Место проведения: <b>Меркюр Сочи Центр</b></p>
            <p>Формат мероприятия: <b>Внутреннее мероприятие для сотрудников</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Организация мероприятия под ключ: проживание, конференция, брендирование, трансфер, экскурсионная программа, квест на территории олимпийского парка, квиз.</p>
        `
  }]
});
const mutations = {
  changeEventData(state, data) {
    state.eventForm = data;
  }

};
const actions = {
  changeEventData({
    state
  }, data) {
    this.commit('changeEventData', data.data);
  }

};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(14);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(15);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(9);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(10);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _011e3b0a = () => interopDefault(__webpack_require__.e(/* import() | pages/contact */ 7).then(__webpack_require__.bind(null, 444)));

const _31d98575 = () => interopDefault(__webpack_require__.e(/* import() | pages/event-progress */ 8).then(__webpack_require__.bind(null, 445)));

const _2cfccf08 = () => interopDefault(__webpack_require__.e(/* import() | pages/news */ 10).then(__webpack_require__.bind(null, 454)));

const _371a0723 = () => interopDefault(__webpack_require__.e(/* import() | pages/partner */ 11).then(__webpack_require__.bind(null, 446)));

const _69a3d43f = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/index */ 13).then(__webpack_require__.bind(null, 447)));

const _ebdf9ae0 = () => interopDefault(__webpack_require__.e(/* import() | pages/service */ 14).then(__webpack_require__.bind(null, 448)));

const _7664b192 = () => interopDefault(__webpack_require__.e(/* import() | pages/team */ 15).then(__webpack_require__.bind(null, 449)));

const _7259e20c = () => interopDefault(__webpack_require__.e(/* import() | pages/tenders */ 16).then(__webpack_require__.bind(null, 450)));

const _354b6142 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/_item */ 12).then(__webpack_require__.bind(null, 451)));

const _332952ed = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 9).then(__webpack_require__.bind(null, 452)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'menu-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/contact",
    component: _011e3b0a,
    name: "contact"
  }, {
    path: "/event-progress",
    component: _31d98575,
    name: "event-progress"
  }, {
    path: "/news",
    component: _2cfccf08,
    name: "news"
  }, {
    path: "/partner",
    component: _371a0723,
    name: "partner"
  }, {
    path: "/portfolio",
    component: _69a3d43f,
    name: "portfolio"
  }, {
    path: "/service",
    component: _ebdf9ae0,
    name: "service"
  }, {
    path: "/team",
    component: _7664b192,
    name: "team"
  }, {
    path: "/tenders",
    component: _7259e20c,
    name: "tenders"
  }, {
    path: "/portfolio/:item",
    component: _354b6142,
    name: "portfolio-item"
  }, {
    path: "/",
    component: _332952ed,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
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
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(22)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "148dbbb2"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "c336d734"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/fontstyle.css
var fontstyle = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@glidejs/glide/dist/css/glide.core.css
var glide_core = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/lightcase/src/css/lightcase.css
var lightcase = __webpack_require__(51);

// EXTERNAL MODULE: ./assets/css/style.css
var style = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/404.vue?vue&type=template&id=54d9e6ec&scoped=true&
var _404vue_type_template_id_54d9e6ec_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('center',[(_vm.error.statusCode === 404)?_c('p',{staticClass:"error-info-text"},[_vm._v("404 - Страница не найдена")]):_c('p',{staticClass:"error-info-text"},[_vm._v("Ошибка")]),_vm._v(" "),_c('NuxtLink',{staticClass:"go-to-main",attrs:{"to":"/"}},[_vm._v("Перейти на главную")])],1)],1)}
var _404vue_type_template_id_54d9e6ec_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/404.vue?vue&type=template&id=54d9e6ec&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/404.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _404vue_type_script_lang_js_ = ({
  head() {
    return {
      bodyAttrs: {
        class: 'body-error'
      }
    };
  },

  props: ['error']
});
// CONCATENATED MODULE: ./layouts/404.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_404vue_type_script_lang_js_ = (_404vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/404.vue



function _404_injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _404_component = Object(componentNormalizer["a" /* default */])(
  layouts_404vue_type_script_lang_js_,
  _404vue_type_template_id_54d9e6ec_scoped_true_render,
  _404vue_type_template_id_54d9e6ec_scoped_true_staticRenderFns,
  false,
  _404_injectStyles,
  "54d9e6ec",
  "7491bb3e"
  
)

/* harmony default export */ var _404 = (_404_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=9de13e8a&
var defaultvue_type_template_id_9de13e8a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Nuxt')}
var defaultvue_type_template_id_9de13e8a_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=9de13e8a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_9de13e8a_render,
  defaultvue_type_template_id_9de13e8a_staticRenderFns,
  false,
  null,
  null,
  "16c49672"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js











const layouts = {
  "_404": sanitizeComponent(_404),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(82), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  BlRight: () => __webpack_require__.e(/* import() | components/bl-right */ 1).then(__webpack_require__.bind(null, 388)).then(c => wrapFunctional(c.default || c)),
  Copyright: () => __webpack_require__.e(/* import() | components/copyright */ 2).then(__webpack_require__.bind(null, 387)).then(c => wrapFunctional(c.default || c)),
  EventData: () => __webpack_require__.e(/* import() | components/event-data */ 3).then(__webpack_require__.bind(null, 409)).then(c => wrapFunctional(c.default || c)),
  EventForm: () => __webpack_require__.e(/* import() | components/event-form */ 4).then(__webpack_require__.bind(null, 453)).then(c => wrapFunctional(c.default || c)),
  MainLogo: () => __webpack_require__.e(/* import() | components/main-logo */ 5).then(__webpack_require__.bind(null, 389)).then(c => wrapFunctional(c.default || c)),
  PageHeader: () => __webpack_require__.e(/* import() | components/page-header */ 6).then(__webpack_require__.bind(null, 390)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(8);

// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\nuxtjs-yandex-metrika.plugin.5e2565d3.js (mode: 'client')

 // Source: ..\\plugins\\inputmask.js (mode: 'client')

 // Source: ..\\plugins\\lightcase.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "systemice",
      "htmlAttrs": {
        "lang": "ru"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0"
      }, {
        "hid": "description",
        "name": "keywords",
        "content": ""
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fuse.fontawesome.com\u002Fbccb4e85ab.css"
      }, {
        "href": "https:\u002F\u002Fmc.yandex.ru\u002Fmetrika\u002Fwatch.js",
        "rel": "preload",
        "as": "script"
      }],
      "style": [],
      "script": [{
        "src": "https:\u002F\u002Fmc.yandex.ru\u002Fmetrika\u002Fwatch.js",
        "async": "true"
      }]
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state; // Stop recording store mutations

      ssrContext.unsetMutationObserver();
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Record store mutations for full-static after nuxtServerInit and Middleware


  ssrContext.nuxt.mutations = [];
  ssrContext.unsetMutationObserver = store.subscribe(m => {
    ssrContext.nuxt.mutations.push([m.type, m.payload]);
  });
  /*
  ** Set layout
  */

  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("inputmask");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("clipboard");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("ymaps");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("vue2-datepicker");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("vue2-datepicker/locale/ru");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map