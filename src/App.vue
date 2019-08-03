<template lang='pug'>
  #app
</template>

<script>
import heap from '@/vendor/heap.js'
import 'reset-css'

export default {
  name: 'app',
  mounted() {
    heap(process.env.VUE_APP_HEAP_ID)
  }
}
</script>

<style lang="stylus">
@import url('//api.fontstore.com/webfonts/53b2ac8b-d49b-452a-812a-68efd57593aa')

*
  box-sizing border-box

html
  --font-size 34px
  --line-height 40px
  --background-color white
  --color black
  font-family 'Clash Moon', Helvetica, Arial, sans-serif
  -webkit-text-size-adjust 100%
  font-size var(--font-size)
  line-height var(--line-height)
  background-color var(--background-color)
  color var(--color)

html, body, #app
  width 100%
  height @width
</style>
