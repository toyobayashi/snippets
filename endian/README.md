## 描述

检测运行时内存大小端存储方式。

## 运行环境

支持 TypedArray 系列 API 的环境。

## 代码

``` js
/**
 * @returns {boolean}
 */
function isBigEndian () {
  var float32Array = new Float32Array(1)
  var uInt8Float32Array = new Uint8Array(float32Array.buffer)

  float32Array[0] = -1 // 0xBF800000
  return uInt8Float32Array[3] === 0
}
```
