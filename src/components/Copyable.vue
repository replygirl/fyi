<template lang='pug'>
  a(@click='copy' :aria-disabled='copied') {{label}}
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
  computed: {
    label() {
      return this.copied ? this.labelAfter : this.labelBefore
    }
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

a[aria-disabled='true']
  pointer-events none
  cursor not-allowed
  text-decoration none
  color currentColor
</style>
