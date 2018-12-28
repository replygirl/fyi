<template lang='pug'>
  #index
    h1#moon(@click='locate' :style='`cursor: ${cursor}`') moon
    main
      p i'm a pm, designer, and developer
      p working as a design director
      Copyable(label='copy my email' value='moon@moon.fyi')
    aside#meta
      a(href='//github.com/imogennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn/fyi' v-text='v')
    section#work
      Job(v-for='j in jobs' :key='Object.values(j)[0]' :job='j')
      .projects: p(v-for='p in projects' :key='p' v-text='p')
</template>

<script>
import { mapState } from 'vuex'
import Copyable from '@/components/Copyable.vue'
import Job      from '@/components/Job.vue'
import {jobs, projects} from '@/data/work'

export default {
  name: 'Index',
  components: {Copyable, Job},
  data() {return {
    jobs: jobs,
    projects: projects
  }},
  computed: {
    ...mapState('location', {cursor: s => s.locatable ? 'pointer' : 'initial'})
  },
  methods: {
    locate() {this.$store.dispatch('location/locate')}
  }
}
</script>

<style lang="stylus" scoped="true">
#index
  --gap 20px
  @media (min-width 512px) and (min-height 512px)
    --gap 40px

  position fixed
  overflow hidden
  height 100%
  width 100%
  display grid
  grid-template:
    'moon main psa  void' 1fr\
    'work work work work' auto\
    / 32px 1fr auto auto
  grid-gap var(--gap)
  padding:
    var(--gap)\
    calc(var(--gap) + env(safe-area-inset-right))\
    var(--gap)\
    calc(var(--gap) + env(safe-area-inset-left))

#moon
  grid-area moon
  font-size 0px
  width 32px
  height @width
  background-image url('../../public/img/moon.svg')
  background-size contain
  position relative
  &:hover::after
    display block
    font-size var(--font-size)
    position absolute
    top calc(100% + var(--line-height) / 2)
    width 56px
    display block
    content 'match yr sky'
    color #fb9f89

main
  grid-area main
  display flex
  flex-direction column
  > p:nth-last-child(2)
    margin-bottom 20px
  .copyable
    color #d0cd94
    margin-top auto

#more
  color #fb9f89

#meta
  @media (max-width 414px)
    display none
  color #facfad

#work
  grid-area work
  position relative
  display flex
  align-items flex-start
  overflow-x scroll
  scroll-snap-type mandatory
  scroll-padding calc(var(--gap) * 2 + 32px + env(safe-area-inset-left))
  -webkit-overflow-scrolling touch
  margin:
    0\
    calc(calc(var(--gap) + env(safe-area-inset-right)) * -1)\
    calc(var(--gap) * -1)\
    calc(calc(var(--gap) + env(safe-area-inset-left)) * -1)
  padding:
    0\
    calc(var(--gap) + env(safe-area-inset-right))\
    0\
    calc(var(--gap) * 2 + 32px + env(safe-area-inset-left))
  background-color #f4d58d
  color black

  > *
    position relative
    display inline-block
    scroll-snap-align start
    min-width 280px
    max-width 336px
    padding var(--gap) 0
    &:not(:last-child)
      margin-right var(--gap)
    &:last-child::after
      content: ' '
      position: absolute
      right: calc(var(--gap) * -1)
      bottom: calc(var(--gap) * -1)
      width: var(--gap)
      height: 1px
</style>
