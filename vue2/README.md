## 描述

Vue 2.x 组件模板。

## 运行环境

Webpack 带 `vue-loader`

## 代码

``` vue
<template>
  <div class="component">

  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,
  name: 'Component',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  mounted () {
    this.$nextTick(() => {})
  },
  beforeDestroy () {}
})
</script>

<style lang="scss" scoped>
.component {}
</style>
```
