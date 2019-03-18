<template lang='pug'>
  #app(@mousemove='move')
    Index(:style='{transform: `translate(${x}px, ${y}px)`}')
    Stripes
</template>

<script>
import Index from '@/components/Index.vue'
import Stripes from '@/components/Stripes.vue'
import heap  from '@/vendor/heap.js'

export default {
  name: 'app',
  components: {
    Index,
    Stripes
  },
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    move(e) {
      this.x = -(e.clientX - window.innerWidth/2)*(20/window.innerWidth)
      this.y = -(e.clientY - window.innerHeight/2)*(20/window.innerHeight)
    }
  },
  mounted() {
    heap()
  }
}
</script>

<style lang="stylus">
@import url('//api.fontstore.com/webfonts/53b2ac8b-d49b-452a-812a-68efd57593aa')

@font-face
  font-family 'Associate Sans'
  src local('AssociateSans-Medium')
  font-weight bold

*
  box-sizing border-box
  margin 0
  padding 0
ul
  list-style-type none
* + p, p + *
  //margin-top 10px
h1, h2, h3, h4, h5, h6
  font-weight inherit
  font-size inherit
a
  display inline-block
  transform scale(1)
  transform-origin bottom left
  transition transform 75ms ease
  &, &:link, &:visited, &:hover, &:active
    text-decoration underline
    color inherit
    cursor pointer
  @media (hover hover)
    &:hover
      transform scale(1.05)

html
  --bg #7159a5
  --fg #fff4d9
  --font-size 34px
  --line-height 40px

  font-family 'Associate Sans', Helvetica, Arial, sans-serif
  font-weight bold
  font-size var(--font-size)
  line-height var(--line-height)
  -webkit-text-size-adjust 100%

  background-color var(--bg)
  color var(--fg)

  perspective 100px

html, body, #app
  width 100%
  height 100%
  overflow-x hidden
  overflow-y hidden

#app
  overflow-y scroll
  -webkit-overflow-scrolling touch
  padding 56px 20px
  @media (min-width 640px)
    padding 56px 32px
  @media (min-width 840px)
    padding 56px
</style>
