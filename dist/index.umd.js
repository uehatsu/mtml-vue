(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global.MTMLVue = {}, global.Vue));
}(this, (function (exports, Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  var options = {
      props: {
          websites: {
              type: Array,
              required: true,
          },
      },
      mounted: function () {
          console.log(this);
          console.log(this.computedWebsites);
      },
      methods: {
          getWebsites: function (websites) {
              var filteredWebsites = this.filterWebsites(websites)
                  .map(function (website) {
                  delete website.websites;
                  return website;
              })
                  .sort(function (a, b) {
                  return a.id - b.id;
              });
              return filteredWebsites;
          },
          filterWebsites: function (inputObject) {
              var result = [];
              if (inputObject instanceof Array) {
                  for (var i = 0; i < inputObject.length; i++) {
                      var tmpObject = this.filterWebsites(inputObject[i]);
                      if (tmpObject.length > 0) {
                          for (var j = 0; j < tmpObject.length; j++) {
                              result.push(tmpObject[j]);
                          }
                      }
                  }
              }
              else {
                  for (var prop in inputObject) {
                      if (prop === 'type' && inputObject['type'] === 'website') {
                          result.push(inputObject);
                      }
                      if (prop === 'websites' && inputObject['websites'] instanceof Array) {
                          var tmpObject = this.filterWebsites(inputObject['websites']);
                          if (tmpObject.length > 0) {
                              for (var j = 0; j < tmpObject.length; j++) {
                                  result.push(tmpObject[j]);
                              }
                          }
                      }
                  }
              }
              return result;
          }
      },
      computed: {
          computedWebsites: function () {
              return this.getWebsites(this.$props.websites);
          },
      },
  };
  var script = Vue.extend(options);

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  var isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _vm._v("\n  MTWebsites\n  "),
        _vm._l(_vm.computedWebsites, function(website, index) {
          return _vm._t("default", null, {
            website: website,
            index: index,
            length: _vm.computedWebsites.length
          })
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  var options$1 = {
      props: {
          website: Object,
      },
      mounted: function () {
          console.log('attrs', this.$attrs);
          console.log('props', this.$props);
          console.log('scopedSlots', this.$scopedSlots);
          console.log('this', this);
      }
  };
  var script$1 = Vue.extend(options$1);

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", [_vm._v(_vm._s(_vm.website.name))])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = undefined;
    /* scoped */
    var __vue_scope_id__$1 = undefined;
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$1 = normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  function install(Vue, options) {
      Vue.component('MTWebsiteName', __vue_component__$1);
      Vue.component('MTWebsites', __vue_component__);
  }

  exports.default = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
