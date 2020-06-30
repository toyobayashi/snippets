const filename = require('path').join(__dirname, '../require.js')
const code = require('fs').readFileSync(filename, 'utf8')
const getRequireFunction = (new Function('require', `return (${code})`))(require('module').createRequire(filename))

const r = getRequireFunction(module)
console.log(r('./index.js') === exports)
console.log(r.main === require.main)
