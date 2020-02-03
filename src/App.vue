<template lang='pug'>
  #app
    header
      svg.moon(viewBox='0 0 2 2' xmlns='http://www.w3.org/2000/svg')
        circle(cx='1' cy='1' r='1')
      section
        h1 Imogen Moon
        span she/they
      section
        span moon at moon dot fyi
        a(href='https://soundcloud.com/halfsister') soundcloud.com/halfsister
    main
      section
        ul
          li(v-for='{ text, url } in intro' :key='text')
            a(v-if='url' :href='url' v-text='text')
            span(v-else v-text='text')
      section(v-for='era in eras' :key='era')
        h6(v-text='era')
        ul
          li(
            v-for='({ role, project: { name, url }}, i) in rolesFrom(era)' :key='`${era}-${i}`'
          )
            span(v-text='role')
            template(v-if='name')
              a(v-if='url' :href='url' v-text='name')
              span(v-else v-text='name')
</template>

<script>
import 'destyle.css'
import axios from 'axios'
import heap from '@/vendor/heap'

export default {
  name: 'app',
  data() {
    return {
      intro: [],
      roles: [],
      errors: []
    }
  },
  computed: {
    eras() {
      return this.roles.reduce((eras, { era }) =>
        eras.includes(era) ? eras : [...eras, era],
        []
      )
    },
  },
  created() { this.fetchCopy() },
  mounted() { this.initHeap() },
  methods: {
    async fetchCopy() {
      try {
        const { data: { intro, roles }} = await axios.get('/api/copy')
        Object.assign(this, { intro, roles })
      } catch (error) { this.errors.push({ from: 'App/created', ...error }) }
    },
    initHeap() { (id => id && heap(id))(process.env.VUE_APP_HEAP_APP_ID) },
    rolesFrom(era) { return this.roles.filter(r => r.era===era) }
  }
}
</script>

<style lang='stylus'>
@import 'assets/style/text'
@import 'assets/style/color'

// CONTAINER

:root
  min-height 100%
  display flex
  flex-direction column
  justify-content center
  padding 20px
  @media (min-width 360px)
    padding 40px

body, #app
  height 100%

#app
  max-width 1080px
  margin 0 auto

// PAGE

header
  margin-bottom 40px
  display flex
  section:first-of-type
    flex 1
  section:last-of-type
    text-align right
  .moon
    display none
    @media (min-width 320px)
      display initial
      margin-right 20px
    @media (min-width 408px)
      margin-right 40px

main
  display grid
  gap 40px
  grid-template-columns repeat(2, 1fr)
  @media (min-width 720px)
    grid-template-columns repeat(3, 1fr)

  section:first-child
    grid-column 1 / span 2
    @media (min-width 720px)
      grid-column initial

// ELEMENTS

span
  display block

li, h6
  border-bottom 0.5px solid var(--color)
  padding 10px 0

li
  display flex
  flex-wrap wrap
  *:first-child
    flex 1 1 auto
  *:not(:last-child)::after
    content '\00a0\00a0' //non-breaking spaces

.moon
  min-width 24px
  min-height @min-width
  circle
    fill var(--color)
</style>
