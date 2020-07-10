/**
 * 复制字符串到剪贴板
 * @param {string} str - 要复制的字符串
 * @returns {boolean}
 */
function copy (str) {
  var i = document.createElement('input');
  i.value = str;
  document.body.appendChild(i);
  i.select();
  var r;
  try {
    r = document.execCommand('copy');
  } catch (_) {
    r = false;
  }
  document.body.removeChild(i);
  return r;
}
