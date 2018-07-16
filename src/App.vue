<template lang='pug'>
  mixin section(title)
    span.title= title + '. '
    if block
      block
      | &#32;
  #app
    +section('imogen')
      Copyable(label='email' value='im@imogen.fyi')
    +section('music')
      | sound design. arrangement. engineering.&#32;
      a(href='//soundcloud.com/imogennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn') soundcloud
      | .&#32;
    +section('tech')
      | RRRRRRRRRRRRRRRRpm. design. dev. medical provider directory for queer people. campus management & geospatial analytics for schools. low-bandwidth messaging for support teams. program & professor directory for science & engineering students. ai-based canvassing for grassroots campaigns. bespoke cms for a national newsroom. reporting, dispatch, & content sales for amateur photojournalists & broadcast newsrooms. personal cms for art dealers & collectors. social restaurant reviews for picky eaters. markdown editor with syntax extensions for technical writers. morse code sms for the vision- and motor-impaired.
</template>

<script>
import Copyable from './components/Copyable.vue'
import heap     from './vendor/heap.js'

export default {
  name: 'app',
  components: {
    Copyable
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

html, body
  width 100%
  height 100%
  overflow hidden

body
  margin 0

#app
  --line-height 28px
  font-family 'BasicCommercialLTCom-Bold', Helvetica, Arial, sans-serif
  font-weight bold
  font-size 24px
  line-height var(--line-height)

  height: calc(100% + calc(2 * var(--line-height)))
  max-width 640px
  margin-top calc(-1 * var(--line-height))
  padding var(--line-height) 0 calc(2 * var(--line-height))
  transform-origin right top
  transform rotate(-2.5deg)
  overflow-y scroll

.title
  color magenta

a
  &, &:link, &:visited, &:hover, &:active
    text-decoration underline
    color inherit
    cursor pointer
</style>
