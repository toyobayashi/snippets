## 描述

获取全局对象。

## 运行环境

不限。

## 代码

``` js
/**
 * Get global object
 * @param {any=} defaultValue - default value
 * @returns {typeof globalThis | undefined} Global object or undefined
 */
function getGlobal (defaultValue) {
  var g;
  g = (function () { return this; })(); // non-strict mode

  try {
    g = g || new Function('return this')(); // allow eval
  } catch (_) {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof __webpack_modules__ === 'undefined') {
      if (typeof global !== 'undefined') return global;
    }
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
  }

  return g || defaultValue;
}
```
