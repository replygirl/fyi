<template lang='pug'>
  - var tag = 'Product workflow, architecture, & design'
  #app(@mousemove='findCursor($event)' @touchmove='findCursor($event)')
    header(:style='`transform:translateY(${pos.y}px)`')
      h1 Moon
      .squish
        span #{tag}
        span / tools & docs for a better web
    main(:style='`transform:translate(${-10*pos.x}px, ${-10*pos.y}px)`')
      Swatch(
        v-for='(projects, d) in work' :key='d'
        :class='d'
        :style="`\
          --img:url('img/${d}.jpg');\
          transform:translate(${4*d.length*pos.x}px, ${4*d.length*pos.y}px)`"
        ) {{d}}
        template(v-slot:after): ul: li(v-for='p in projects' v-text='p')
    Shredder
    aside
      span Moon
      span Product workflow, architecture, & design
      span.ticker(content=tag) #{tag}
</template>

<script>
import Swatch from '@/components/Swatch.vue'
import Shredder from '@/components/Shredder.vue'
import heap   from '@/vendor/heap.js'
import 'reset-css'

export default {
  name: 'app',
  components: {
    Swatch,
    Shredder
  },
  data() {
    return {
      pos: {
        x: 0,
        y: 0
      },
      work: {
        'well-being': [
          'community coat drive',
          'queer-specializing provider directory'
        ],
        elections: [
          'grassroots campaign management platform',
          'ai canvassing toolkit'
        ],
        arts: [
          'cultural movement incubation platform',
          'mobile-first art inventory management system'
        ],
        media: [
          'task-oriented cms',
          'citizen photojournalism reporting platform & content marketplace'
        ]
      }
    }
  },
  methods: {
    findCursor(e) {
      this.pos.x = e.clientX / window.innerWidth
      this.pos.y = e.clientY / window.innerHeight
    },
    getPos(f) {
      console.log('it me')
      const pos = [this.pos.x, this.pos.y].map(x => `${x * f}px`)
      console.log(pos)
      return pos
    }
  },
  mounted() {
    heap()
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
  font-family 'AssociateSans-Regular', Helvetica, Arial, sans-serif
  font-size var(--font-size)
  line-height var(--line-height)
  -webkit-text-size-adjust 100%
  text-transform uppercase

  --bg #eae1df
  --fg black
  background-color var(--bg)
  color var(--fg)
html, body, #app
  width 100%
  height @width
  overflow hidden

#app
  display flex
  flex-direction column

  header
    display flex
    justify-content flex-start
    h1
      margin-top 12px
      @media (min-width 480px)
        margin-top 32px
    .squish
      display none
      @media(min-width 480px)
        display initial
        flex 1
        margin-top 8px
        margin-left 56px
        padding-bottom 17px
        position relative
        :last-child
          position absolute
          bottom 0
          left 10px

  main
    flex 1
    padding 20px
    display grid
    grid-template:
      '.          elections .    .    ' 1fr\
      '.          elections arts .    ' 2fr\
      '.          elections arts media' 2fr\
      'well-being elections arts media' max-content
    grid-template-columns minmax(0, 9fr) minmax(0, 6fr) minmax(0, 8fr) min-content
    @media (min-width 768px)
      padding 32px 56px

    .swatch
      mix-blend-mode hard-light
      &:not(:last-child)
        margin-right -100%
      .inner
        background-color black
        background-blend-mode hard-light
        background-size cover

      &.well-being
        grid-area well-being
        .inner
            background-size cover
            background-color #ff006b
      &.elections
        grid-area elections
        .inner
          background-color rgba(0,0,0,0.5)
      &.arts
        grid-area arts
        z-index 10
        .inner
          background-size initial
      &.media
        grid-area media
        .inner
          background-position center
          background-size 300%

  aside
    height 0
    overflow hidden
    @media (min-width 480px)
      height initial
      margin-right 104px
      margin-bottom -12px
      align-self flex-end
      display flex
    span
      white-space nowrap
      animation bob 8s ease-in-out -1s*math(0, 'random') infinite alternate
      &:first-child
        margin 13px 6px 0 0
        animation-duration 7s
        animation-delay -1s * math(0, 'random')

  .ticker
    $duration = 10s
    grid-area side
    position fixed
    top 50%
    left calc(100% + 20px)
    transform-origin top left
    transform rotate(90deg) translateX(-50%)
    animation marquee $duration linear reverse infinite
    &::before, &::after
      content attr(content)
      position absolute
      top 0
    &::before
      animation fade $duration ease reverse infinite
      left calc(-100% - 168px)
    &::after
      animation fade $duration ease infinite
      left calc(100% + 168px)

@keyframes bob
  from
    transform translateY(0)
  to
    transform translateY(4px)
@keyframes fade
  0%
    opacity 0
  10%
    opacity 1
  100%
    opacity 1
@keyframes marquee
  from
    transform rotate(90deg) translateX(calc(-100% - 84px))
  to
    transform rotate(90deg) translateX(calc(84px))
</style>
