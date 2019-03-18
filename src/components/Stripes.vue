<template lang='pug'>
.stripes
</template>

<script>
export default {
  name: 'Stripes'
}
</script>

<style scoped lang='stylus'>
.stripes
  pointer-events none
  position fixed
  left -3975.46px
  right 0
  top -112px
  bottom -112px
  mix-blend-mode color-burn
  background repeating-linear-gradient(
    -75deg,
    rgba(155, 200, 200, 1) 0,
    rgba(255, 255, 200, 0) 0.33px,
    rgba(255, 255, 200, 0) 1680px,
    rgba(155, 200, 200, 1) 3840px
	), repeating-linear-gradient(
    -15deg,
    rgba(200, 155, 200, 1) 0,
    rgba(255, 255, 200, 0) 0.33px,
    rgba(255, 255, 200, 0) 168px,
    rgba(200, 155, 200, 1) 384px
	)
  animation translate 150s ease
  animation-direction alternate
  animation-iteration-count infinite

@keyframes translate
	from
		transform translate3D(0, 0, 0) rotate(0deg) scale(3)
	to
		transform translate3D(3975.46px, 0, 0) rotate(3600deg) scale(3)
</style>
