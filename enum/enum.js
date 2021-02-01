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
  if (typeof obj !== 'object' || obj === null) throw new TypeError('makeEnum() type error');
  var e = {};
  var keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    var k = keys[i];
    var v = obj[k];
    var t = typeof v;
    if (t !== 'number' && t !== 'string') {
      throw new TypeError('Only number or string can be enum value, but recieve type "' + t + '"');
    }
    e[k] = v;
    if (typeof v === 'number') {
      e[v] = k;
    }
  }
  return e;
}
