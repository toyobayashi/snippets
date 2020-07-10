这个仓库放一些平时可能经常用到的通用代码片段，复制粘贴一把梭。

## 为什么不是 npm install

下面这些场景可以选择复制粘贴而不是安装依赖库：

* 我的项目不用 Node.js

* 我的项目不用 Webpack / Rollup / Parcel 等各种打包器

* 库包含了很多我用不到的代码，会增加我的 bundle 体积，但是我只想用库的一小部分功能 （不要太指望 tree shaking

* 库会把我的 `node_modules` 搞得像垃圾堆，我有洁癖

* 这么点代码不值得我敲下 npm install 等待几十秒的时间

* 按 Ctrl C + Ctrl V 会让我有快感
