## 描述

快速查看 Webpack 打包结果

## 运行环境

近期版本的 Node.js 。

### 依赖

* webpack 4+

## 代码

``` js
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
```
