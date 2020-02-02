<template lang='pug'>
  #app
    header
      svg.moon(viewBox='0 0 2 2' xmlns='http://www.w3.org/2000/svg')
        circle(cx='1' cy='1' r='1')
      section
        h1 Imogen Moon
        | she/they
      section
        span moon at moon dot fyi
        a(href='https://soundcloud.com/halfsister') soundcloud.com/halfsister
    main
      section
        ul
          li copy a
          li copy b
          li copy c
      section
        h6 Past
        ul
          li
            span role a
            a(href='') team a
          li
            span role b
            a(href='') team b
          li
            span role c
            a(href='') team c
      section
        h6 Present
        ul
          li
            span role a
            a(href='') team a
          li
            span role b
            a(href='') team b
          li
            span role c
            a(href='') team c
          li thing d
          li thing e
</template>

<script>
import 'destyle.css'
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      intro: [],
      roles: [],
      errors: []
    }
  },
  async created() {
    try {
      const { data: { intro, roles }} = await axios.get('/api/copy')
      Object.assign(this, { intro, roles })
    } catch (error) { this.errors.push({ from: 'App/created', ...error }) }
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

li, h6
  border-bottom 0.5px solid var(--color)
  padding 10px 0

span
  display block

li
  display flex
  flex-wrap wrap
  span
    flex 1 1 auto

.moon
  min-width 24px
  min-height @min-width
  circle
    fill var(--color)
</style>
