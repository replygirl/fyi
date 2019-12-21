<template lang='pug'>
  #app
    header
      h1 Imogen Moon
      p She/they
      ul
        li Product management
        li Urban & labor studies
    main: ul
      li Community art infrastructure
      li Tools for better documentation
      li Green product architecture
    footer: ul
      li Music: half sister (dot) bandcamp (dot) com
      li Email: moon (at) moon (dot) fyi
</template>

<script>
import heap from '@/vendor/heap.js'
import 'reset-css'

export default {
  name: `app`,
  mounted() {
    heap(process.env.VUE_APP_HEAP_ID)
  }
}
</script>

<style lang='stylus'>
@font-face
  font-family 'Public Sans'
  font-weight bold
  src url('assets/fonts/PublicSans-Bold.woff2') format('woff2')

*, *::before, *::after
  box-sizing border-box

html, body, #app
  height 100%

:root
  -webkit-text-size-adjust 100%
  font-family 'Public Sans', Helvetica, Arial, sans-serif
  font-weight bold
  font-size 34px
  line-height 40px
  letter-spacing -0.06em
  text-transform uppercase
  text-align center
  background-color #d7d4ac
  color #10b4d9

#app
  padding 20px
  display flex
  flex-direction column
  justify-content center
  *:not(:last-child)
    margin-bottom 20px
</style>
