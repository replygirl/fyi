<template lang='pug'>
  main#fyi.column(role='tabpanel')
    span moon dot fyi version 9
    span content updated today
    hr
    h3 analytics:
    ul.column
      li
        a(href='https://docs.heap.io') heap
        span for traffic & engagement
      li
        a(href='https://docs.sentry.io') sentry
        span for error logging
      li: button disable heap & sentry
    hr
    span
      | built with
      ul
        li: a(href='https://nuxtjs.org/guide') nuxt
        li: a(href='https://airtable.com/api') airtable
        li: a(href='https://zeit.co/docs') now
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
