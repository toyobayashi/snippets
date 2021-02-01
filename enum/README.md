## 描述

将 JS 对象转换成 TypeScript 枚举。

## 运行环境

不限

## 代码

``` js
/**
 * @template {Record<keyof T, T[keyof T]>} T
 * @typedef {T & { [V in Extract<T[keyof T], number>]: { [K in keyof T]: T[K] extends V ? K : never }[keyof T] }} ToEnum
 */

/**
 * @template {Record<string, string | number>} T
 * @param {T} obj 
 * @returns {ToEnum<T>}
 */
function makeEnum (obj) {
  const e = {}
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    const v = obj[k]
    const t = typeof v
    if (t !== 'number' && t !== 'string') {
      throw new TypeError('Only number or string can be enum value, but recieve type "' + t + '"')
    }
    e[k] = v
    if (typeof v === 'number') {
      e[v] = k
    }
  }
  return e
}
```
