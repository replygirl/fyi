<template lang='pug'>
  .swatch
    slot(name='before')
    .inner: slot
    slot(name='after')
</template>

<script>
export default {
  name: 'Swatch'
}
</script>

<style scoped lang='stylus'>
/*   --img   sets the background-image of the swatch
*/

.swatch
  display inline-block
  position relative
  width 228px
  @media (min-width 1440px)
    width 384px
  @media (min-width 1920px)
    width 512px
  :not(.inner)
    font-size 16px
    line-height 20px
    + :not(.inner)
      margin-top 10px

* + .inner
  margin-top 20px
.inner + *
  margin-top 20px

.inner
  height 0
  width 75%
  padding-bottom @width
  background-color black
  background-image var(--img)
  color white
  @media (min-width 768px)
    width 100%
    padding-bottom @width
</style>
