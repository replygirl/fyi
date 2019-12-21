<template lang='pug'>
  #app.column
    header.column
      h1 moon
      hr
      nav: Tabs(v-bind='{ routes }')
      button(tabindex='0') another focusable
    nuxt
</template>

<script>
import Tabs from '@/components/Tabs'

export default {
  components: {
    Tabs
  },
  data() {
    return {
      routes: [
        { label: 'web', name: 'index' },
        { label: 'music', name: 'music' },
        { label: 'info', name: 'fyi' }
      ]
    }
  }
}
</script>
