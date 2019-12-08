(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.MTMLVue = {}));
}(this, (function (exports) { 'use strict';

  function install(Vue, options) {
      console.log('mtml-vue plugin');
  }

  exports.default = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
