<template lang='pug'>
  #index
    .head
      h1 i'm moon,
      span a product manager
      span specializing in design & architecture
      span for b2b2c platforms
    .lately
      h2 lately i've worked on
      ul
        li local elections
        li sustainable arts
        li coat drives
    .availability
      h2 i'm available for
      ul
        li product consulting
        li: del design direction
        li: del hands-on design
    .contact
      h2 to say hi,
      ul
        li: Copyable(
          value='moon@moon.fyi'
          label-before='copy my email'
          label-after='paste my email'
        )
        //li: del get my portfolio
</template>

<script>
import Copyable from '@/components/Copyable.vue'

export default {
  name: 'Index',
  components: {Copyable}
}
</script>

<style scoped lang='stylus'>
/* CONTENT */

li:not(:last-of-type)::after
  content ' &'
.contact li:not(:last-of-type)::after
  content ' or'

/* STYLE */

span,
h2,
li:not(:last-of-type)::after
  opacity 0.5

del
  opacity 0.25

span
  display block
  &:first-of-type
    opacity 0.75
  &:last-of-type
    opacity 0.25

/* LAYOUT */

#index
  min-height 100%
  display grid
  gap 56px

@media (min-width 768px)
  #index
    grid-template:
      'head head' auto\
      'lately availability' auto\
      'lately contact' 1fr\
      / auto 1fr

  for class in head lately availability contact
    .{class}
      grid-area class
</style>
