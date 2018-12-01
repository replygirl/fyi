<template lang='pug'>
  #app: Index(v='7.0-beta')
</template>

<script>
import Index from './components/Index.vue'
import heap  from './vendor/heap.js'

export default {
  name:       'app',
  components: {Index},
  mounted()   {heap()}
}
</script>

<style lang="stylus">
@import url("//hello.myfonts.net/count/382c02");
path = '../public/webfonts/382C02'

@font-face
  font-family 'Gothic725'
  font-weight normal
  font-style normal
  src url(path + '_0_0.eot')
  src url(path + '_0_0.eot?#iefix') format('embedded-opentype'),
      url(path + '_0_0.woff2') format('woff2'),
      url(path + '_0_0.woff') format('woff'),
      url(path + '_0_0.ttf') format('truetype')

@font-face
  font-family 'Gothic725'
  font-weight bold
  font-style normal
  src url(path + '_1_0.eot')
  src url(path + '_1_0.eot?#iefix') format('embedded-opentype'),
      url(path + '_1_0.woff2') format('woff2'),
      url(path + '_1_0.woff') format('woff'),
      url(path + '_1_0.ttf') format('truetype')

*
  box-sizing border-box
  margin 0
  padding 0
  list-style-type none
  text-decoration none
* + p, p + *
  margin-top 20px

html
  --line-height 20px

  font-family 'Gothic725', Helvetica, Arial, sans-serif
  font-weight bold
  font-size 14px
  line-height var(--line-height)

  background-color black
  color white

html, body, #app
  width 100%
  height 100%
  overflow hidden

a
  &, &:link, &:visited, &:hover, &:active
    color inherit
    cursor pointer
</style>
