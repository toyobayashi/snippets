## 描述

生成唯一 Object ID 字符串。

## 运行环境

不限。

## 代码

``` js
/** @type {{ generate: (time?: number) => string; isValid: (id: string) => boolean; reset: () => void }} */
var oidUtil = (function () {
  var index = 0;
  var PROCESS_UNIQUE = [];
  var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');

  /**
   * Reset index and PROCESS_UNIQUE
   */
  function reset () {
    index = ~~(Math.random() * 0xffffff);
    for (var i = 0; i < 5; i++) PROCESS_UNIQUE[i] = Math.floor(Math.random() * 256);
  }

  /**
   * Object ID hex string generator
   * @param {number=} time - Optional timestamp
   * @returns {string} Hex string
   */
  function generate (time) {
    if ('number' !== typeof time) {
      time = ~~(Date.now() / 1000);
    }

    index = (index + 1) % 0xffffff;
    var inc = index;
    var buffer = [];

    buffer[3] = time & 0xff;
    buffer[2] = (time >> 8) & 0xff;
    buffer[1] = (time >> 16) & 0xff;
    buffer[0] = (time >> 24) & 0xff;

    buffer[4] = PROCESS_UNIQUE[0];
    buffer[5] = PROCESS_UNIQUE[1];
    buffer[6] = PROCESS_UNIQUE[2];
    buffer[7] = PROCESS_UNIQUE[3];
    buffer[8] = PROCESS_UNIQUE[4];

    buffer[11] = inc & 0xff;
    buffer[10] = (inc >> 8) & 0xff;
    buffer[9] = (inc >> 16) & 0xff;

    var res = '';
    for (var i = 0; i < buffer.length; i++) {
      var hex = buffer[i].toString(16);
      res += (hex.length === 1 ? ('0' + hex) : hex);
    }
    return res;
  }

  /**
   * Determine whether given string is a valid object ID
   * @param {string} id - The string which need to be determined
   * @returns {boolean} True if given string is a valid object ID
   */
  function isValid (id) {
    return (typeof id === 'string' && id.length === 24 && checkForHexRegExp.test(id));
  }

  reset();

  return {
    generate: generate,
    isValid: isValid,
    reset: reset
  };
})();
```
