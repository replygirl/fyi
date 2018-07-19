<template lang='pug'>
  #app
    Body
    a#ecommerce.hide-text(href='//gumroad.com/l/MWThS') badass ecommerce shirt
</template>

<script>
import Body from './components/Body.vue'
import heap from './vendor/heap.js'

export default {
  name: 'app',
  components: {
    Body
  },
  mounted () {
    heap()
  }
}
</script>

<style lang="stylus">
@import url("//hello.myfonts.net/count/3710bb");

path = '../public/webfonts/'
@font-face
  font-family 'BasicCommercialLTCom-Bold'
  src url(path + '3710BB_0_0.eot');
  src url(path + '3710BB_0_0.eot?#iefix') format('embedded-opentype'),
      url(path + '3710BB_0_0.woff2') format('woff2'),
      url(path + '3710BB_0_0.woff') format('woff'),
      url(path + '3710BB_0_0.ttf') format('truetype')
  font-weight bold
  font-style normal
*
  box-sizing border-box

html
  background-color yellow

html, body, #app
  width 100%
  height 100%
  overflow hidden

body
  margin 0

.title
  color magenta

a
  &, &:link, &:visited, &:hover, &:active
    text-decoration underline
    color inherit
    cursor pointer

.hide-text
  line-height 0
  font-size 0
  color transparent

#ecommerce
  position fixed
  bottom 56px
  right -6px
  transform-origin right center
  transform rotate(1.5deg)
  width 168px
  height 81px
  background-image url('../public/img/ecommerce.svg')
  background-size contain
  @media (min-width: 480px)
    right -10px
    width 252px
    height 121px
  @media (min-width: 1024px)
    right -12px
    width 504px
    height 242px
</style>
