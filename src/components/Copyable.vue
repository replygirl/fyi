<template lang='pug'>
  .copyable
    a(v-if='!copied' @click='copy' v-text='labelBefore')
    span(v-else v-text='labelAfter')
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  name: 'Copyable',
  data() {return {
    copied: false
  }},
  props: {
    value: String,
    labelBefore: String,
    labelAfter: String
  },
  methods: {
    copy() {
      this.copied = copy(this.value)
    }
  }
}
</script>

<style scoped lang='stylus'>
.copyable
  display inline

a
  text-decoration underline
  cursor pointer
</style>
