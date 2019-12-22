<template lang='pug'>
  main#fyi.column(role='tabpanel')
    span moon dot fyi version 9
    span content updated today
    hr
    h3 analytics:
    ul.column
      li
        a(href) heap
        span for traffic & engagement
      li
        a(href) sentry
        span for error logging
      li: button disable sentry
    hr
    span
      | built with
      ul
        li: a(href) nuxt
        li: a(href) airtable
        li: a(href) now
    span

</template>

<style scoped lang='stylus'>
.column > li > a + span::before
  content ' '

span
  ul
    display inline
    &::before
      content ' '
    li
      display inline
      &:not(:first-child)::before
        content ', '
      &:not(:first-child) ~ *:last-child::before
        content ', and '
      &:last-child::before
        content ' and '
</style>
