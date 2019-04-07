<template lang='pug'>
.shredder(@click.stop :class="open ? 'open' : ''")
  a(@click='toggle' v-text="open ? 'Cool thanks' : 'Hello friend'")
  .hello(v-if='open')
    ul Availability
      li Product consulting
      li: del Design direction
      li: del Hands-on design
      li: del Hands-on engineering
    Copyable(
      label-before='Copy my email'
      label-after='Paste it somewhere'
      value='moon@moon.fyi'
      )

</template>

<script>
import Copyable from '@/components/Copyable.vue'

export default {
  name: 'Shredder',
  components: {Copyable},
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {this.open = !this.open}
  }
}
</script>

<style scoped lang='stylus'>
.shredder
  position fixed
  top 20px
  right 20px
  width 179px
  height 40px
  transition all 300ms
  background linear-gradient(102.8deg, #00FFC2 0%, #00FFFF 100%)
  font-size 24px
  @media (min-width 375px)
    top 136px
    right 56px
  @media (min-width 768px)
    font-size inherit
    line-height inherit
  &:not(.open)
    font-size inherit
    line-height inherit
  &.open
    width 296px
    height 194px
    @media (min-width 375px)
      width 304px
      height 194px
    @media (min-width 768px)
      width 480px
      height 240px

a
  position absolute
  top -17px
  right -11px
  display block
  text-transform initial
  text-decoration underline
  cursor pointer
  transform-origin top right
  transform translate(0, 0) rotate()
  transition transform 150ms ease-out
  @media(hover hover)
    &:hover
      transform translate(2px, -2px)
  .open &
    transform translate(-32px, -2px) rotate(-90deg)
    @media(hover hover)
      &:hover
        transform translate(-32px, -2px) rotate(-90deg)

li
  margin-left 20px

del
  opacity 0.3

.copyable
  margin 32px 0 -12px -12px
  display inline-block
</style>
