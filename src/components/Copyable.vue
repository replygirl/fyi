<template lang='pug'>
  span.copyable
    a(v-if='!copied' @click='copy') copy {{label}}
    span(v-else) {{label}} copied
    | .
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  name: 'Copyable',
  data: function() { return {
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
