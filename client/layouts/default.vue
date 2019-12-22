<template lang='pug'>
  #app.column
    header.column
      h1 moon
      span(aria-label='email') moon at moon dot fyi
      hr
      nav(aria-label='main'): Tabs(v-bind='{ routes }')
    nuxt
</template>

<script>
import Tabs from '@/components/Tabs'

export default {
  components: { Tabs },
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

<style scoped lang='stylus'>
#app
  padding 20px
  justify-content center

h1
  font-size 0
  &::before
    content ' '
    display inline-block
    width 20px
    height @width
    background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='%2300aaff' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E")
</style>
