const webpack = require('webpack')
const path = require('path')

webpack({
  mode: 'development',
  entry: {
    main: [path.join(__dirname, 'index.js')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'none'
}, (err, stat) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stat.toString({ colors: true }))
})
