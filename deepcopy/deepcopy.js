/**
 * @template T
 * @param {T} obj 
 * @param {{ original: any; copy: any }[]=} cache 
 * @returns {T}
 */
function deepCopy (obj, cache = []) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  try {
    if (obj instanceof Promise) return new Promise(function (resolve, reject) {
      obj.then(resolve).catch(reject);
    });
  } catch (_) {
    if (typeof obj.then === 'function' && typeof obj['catch'] === 'function') return obj;
  }

  var hit = cache.filter(c => c.original === obj)[0];
  if (hit) {
    return hit.copy;
  }

  var copy = Array.isArray(obj) ? [] : {};

  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
}
