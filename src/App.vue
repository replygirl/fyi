<template lang='pug'>
  #app
    header
      h1 Moon
      p Process & product manager
    main
    footer
      a(:href='soundcloud') I also make music
      p moon (at) moon (dot) fyi
</template>

<script>
import heap from '@/vendor/heap.js'
import 'reset-css'

export default {
  name: 'app',
  data() {
    return {
      soundcloud: 'https://soundcloud.com/halfsister'
    }
  },
  mounted() {
    heap(process.env.VUE_APP_HEAP_ID)
  }
}
</script>

<style lang="stylus">
@import url('//api.fontstore.com/webfonts/53b2ac8b-d49b-452a-812a-68efd57593aa')

button()
  --color black
  display inline-block
  position relative
  margin 0 -10px
  padding 0 10px
  line-height 30px
  height @line-height
  border 0.5px solid var(--color)
  box-shadow 2px 2px var(--color)
  background-color white
  color var(--color)
  text-decoration none
  transition all 100ms ease-in
  @media (hover: hover)
    &:hover
      transform translateX(1px)
      box-shadow 0px 0px var(--color)

*
  box-sizing border-box

:root, body, #app
  width 100%
  height 100%

:root
  --color-primary #dfeaea
  --color-secondary #eae0df
  font-family 'Clash Moon', Helvetica, Arial, sans-serif
  -webkit-text-size-adjust 100%
  font-size 15px
  line-height 10px
  background-color white
  color black

#app
  display flex
  flex-direction column

main
  flex 1
  background-color var(--color-secondary)

header, footer
  padding 20px
  background-image embedurl('assets/zigzag.svg', 'utf8')
  > *:not(:first-child)
    margin-top 10px
  h1, p
    display block
    margin 0 -20px
    padding 0 20px
    background-color var(--color-primary)
  h1
    font-size 30px
    line-height 20px
    height @line-height
  p
    height 10px

header
  padding-bottom 40px

footer
  padding-top 40px
  display flex
  flex-direction column
  a
    button()
    --color #f30
    align-self flex-end
</style>
