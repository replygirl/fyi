<template lang='pug'>
  span.copyable
    a(v-if='!copied' @click='copy' v-text='label')
    span(v-else) copied!
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  name: 'Copyable',
  data() {return {
    copied: false
  }},
  props: {
    label: String,
    value: String
  },
  methods: {
    copy() {
      this.copied = copy(this.value)
    }
  }
}
</script>
