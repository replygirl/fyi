<template lang='pug'>
  mixin section(title)
    span.title= title + '. '
    if block
      block
      | &#32;
  #body
    +section('imogen')
      Copyable(label='email' value='im@imogen.fyi')
    +section('music')
      | sound design. arrangement. engineering.&#32;
      a(href='//soundcloud.com/imogennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn') soundcloud
      | .&#32;
    +section('tech')
      | pm. design. dev. medical provider directory for queer people. campus management & geospatial analytics for schools. low-bandwidth messaging for support teams. program & professor directory for science & engineering students. ai-based canvassing for grassroots campaigns. bespoke cms for a national newsroom. reporting, dispatch, & content sales for amateur photojournalists & broadcast newsrooms. personal cms for art dealers & collectors. social restaurant reviews for picky eaters. markdown editor with syntax extensions for technical writers. morse code sms for the vision- and motor-impaired.
</template>

<script>
import Copyable from './Copyable.vue'

export default {
  name: 'Body',
  components: {
    Copyable
  }
}
</script>

<style lang="stylus" scoped="true">
#body
  --line-height 28px
  --two-line-height calc(2 * var(--line-height))

  font-family 'BasicCommercialLTCom-Bold', Helvetica, Arial, sans-serif
  font-weight bold
  font-size 24px
  line-height var(--line-height)

  height: calc(100% + calc(2 * var(--line-height)))
  max-width 640px
  margin-top calc(-1 * var(--line-height))
  padding var(--line-height) var(--two-line-height) calc(112px + var(--two-line-height)) 0
  @media (min-width: 960px)
    --line-height 40px
    font-size 34px
    max-width 960px
    padding-bottom 0
  @media (min-width: 1680px)
    --line-height 48px
    font-size 48px
    max-width 1280px
  transform-origin right top
  transform rotate(-2.5deg)
  overflow-y scroll
</style>
