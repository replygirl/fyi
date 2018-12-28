<template lang='pug'>
  #app: Index(v='6.1')
</template>

<script>
import { mapState } from 'vuex'
import { getSunrise, getSunset } from 'sunrise-sunset-js'
import Index from '@/components/Index.vue'
import heap  from '@/vendor/heap.js'

export default {
  name:       'app',
  components: {Index},
  computed: {
    ...mapState('time', ['now']),
    ...mapState('location', ['location']),
    offset()  {return this.now.getTimezoneOffset()/60},
    sunrise() {return this.shift(getSunrise(...this.location))},
    sunset()  {return this.shift(getSunset(...this.location))},
    daytime() {return !(this.now<this.sunrise || this.sunset<this.now)}
  },
  watch: {daytime(cur, prev) {if (cur!==prev) this.paint()}},
  methods: {
    shift(date) {
      date.setHours(date.getHours()-this.offset)
      date.setDate(this.now.getDate())
      return date
    },
    paint() {
      document.documentElement.setAttribute('style', `--bg: ${
        this.daytime ? '#51bae9' : 'black'
      }`)
    }
  },
  mounted() {
    heap()
    this.paint()
  }
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
h1, h2, h3, h4, h5, h6
  font-size inherit

html
  --bg black
  --font-size 14px
  --line-height 20px

  font-family 'Gothic725', Helvetica, Arial, sans-serif
  font-weight bold
  font-size var(--font-size)
  line-height var(--line-height)
  -webkit-text-size-adjust 100%

  background-color var(--bg)
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
