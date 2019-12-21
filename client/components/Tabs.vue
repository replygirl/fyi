<template lang='pug'>
  ul.tabs(
    role='tablist'
    aria-label='pages'
    tabindex='0'
    @focus='focused = true'
    @keydown.tab='focused = false'
    @keyup.left='prev'
    @keyup.right='next'
  )
    li(
      v-for='(r, i) in routes'
      :key='r.name'
      :class='{ active: active===r.name }'
    )
      button(
        @click='activate(r.name)'
        role='tab'
        tabindex='-1'
        :aria-selected='active===r.name'
        :aria-controls='`#${r.name}`'
        v-focus='focused && active===r.name'
        v-text='r.label'
      )
</template>

<script>
import { focus } from 'vue-focus'

export default {
  name: 'Tabs',
  directives: { focus },
  props: {
    routes: Array
  },
  data() {
    return {
      active: this.$route.name,
      focused: false,
    }
  },
  computed: {
    index() {
      return this.routes.findIndex(r => r.name===this.active)
    }
  },
  methods: {
    activate(name) {
      this.active = name
      this.$router.push({ name })
    },
    next() {
      if (this.index + 1 < this.routes.length)
        this.activate(this.routes[this.index + 1].name)
    },
    prev() {
      if (this.index - 1 >= 0)
        this.activate(this.routes[this.index - 1].name)
    }
  }
}
</script>

<style scoped lang='stylus'>
ul
  display flex

li
  border 0.5px solid var(--primary)
  &:not(:first-child)
    border-left none

.active
  background-color var(--primary)
  color var(--background)

button
  padding 10px
  &:focus
    text-decoration underline
</style>
