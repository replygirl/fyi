<template lang='pug'>
  #app
    header
      h1 moon
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

<style lang='stylus'>
#app
  text-align center

nav
  display inline-block

button:focus
  color red
</style>
