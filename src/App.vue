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
            | role a
            a(href='') team a
          li
            | role b
            a(href='') team b
          li
            | role c
            a(href='') team c
      section
        h6 Present
        ul
          li
            | role a
            a(href='') team a
          li
            | role b
            a(href='') team b
          li
            | role c
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

li, h6
  border-bottom 0.5px solid var(--color)
  padding 10px 0
</style>
