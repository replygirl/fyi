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
      a(href='soundcloud.com/imogennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn') soundcloud
      | .&#32;
    +section('tech')
      | pm. design. dev. medical provider directory for queer people. campus management & geospatial analytics for schools. low-bandwidth messaging for support teams. program & professor directory for science & engineering students. ai-based canvassing for grassroots campaigns. if your mother could change the world, what would she change? bespoke cms for a national newsroom. reporting, dispatch, & content sales for amateur photojournalists & broadcast newsrooms. personal cms for art dealers & collectors. social restaurant reviews for picky eaters. did you know americans underspend on food relative to their income? markdown editor with syntax extensions for technical writers. morse code sms for the vision- and motor-impaired. restaurant recommendation app for the indecisive. robots that play fake sports.
</template>

<script>
import Copyable from './components/Copyable.vue'

export default {
  name: 'app',
  components: {
    Copyable
  }
}
</script>

<style lang="stylus">
*
  box-sizing border-box

html, body
  width 100%
  height 100%
  margin 0
  padding 0
  overflow hidden
  background-color black

#app
  --line-height 28px
  font-family Helvetica, Arial, sans-serif
  font-weight 300
  font-size 24px
  line-height var(--line-height)
  color white

  height: calc(100% + calc(2 * var(--line-height)))
  max-width 640px
  margin-top calc(-1 * var(--line-height))
  padding var(--line-height) 0 calc(2 * var(--line-height))
  transform-origin right top
  transform rotate(-2.5deg)
  overflow-y scroll

.title
  color yellow

a
  &, &:link, &:visited, &:hover, &:active
    text-decoration underline
    color inherit
    cursor pointer
</style>
