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
