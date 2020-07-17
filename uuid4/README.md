## 描述

生成 UUID 4。

## 运行环境

原生 ES5+。

## 代码

``` js
/** @type {{ generate: () => string; validate: (id: string) => boolean }} */
var uuid4 = (function () {
  var UUID_RE = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', 'i');

  /**
   * Generate a UUID v4
   * @returns {string} UUID
   */
  function generate () {
    var rnds = [];
    for (var i = 0; i < 16; i++) rnds[i] = Math.floor(Math.random() * 256);
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    var bits = rnds.map(function (bit) {
      var s = bit.toString(16);
      return bit < 0x10 ? '0' + s : s;
    });
    var hyphen = ['-'];
    return bits.slice(0, 4)
      .concat(hyphen)
      .concat(bits.slice(4, 6))
      .concat(hyphen)
      .concat(bits.slice(6, 8))
      .concat(hyphen)
      .concat(bits.slice(8, 10))
      .concat(hyphen)
      .concat(bits.slice(10, 16)).join('');
  }

  /**
   * Determine whether given string is a valid UUID
   * @param {string} id - The string which need to be determined
   * @returns {boolean} True if given string is a valid UUID
   */
  function validate (id) {
    return UUID_RE.test(id);
  }

  return {
    generate: generate,
    validate: validate
  };
})();
```
