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
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i,700&display=swap')

:root
  font-family 'IBM Plex Mono', monospace
</style>
