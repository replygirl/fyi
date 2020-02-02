<template lang='pug'>
  #app
    header
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

export default {
  name: 'app'
}
</script>

<style lang='stylus'>
@import 'assets/style/text'
@import 'assets/style/color'

// CONTAINER

:root
  min-height 100%
  padding 40px
  display flex
  flex-direction column
  justify-content center

body, #app
  height 100%

#app
  max-width 1080px
  margin 0 auto

// PAGE

header
  margin-bottom 40px

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

li
  display flex
  flex-wrap wrap
  span
    flex 1 1 auto
</style>
