<template lang='pug'>
  .job
    h3(v-text='job.description')
    p: span.medium(v-for='m in job.media' :key='m' v-text='m')
    p(v-text='job.roles[0]')
    p: span.contribution(v-for='c in job.contributions' :key='c' v-text='c')
    ul: li.role(v-for='r in job.roles.slice(1)' :key='r') fmr. {{r}}
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: Object
  }
}
</script>

<style lang="stylus" scoped="true">
.medium, .contribution
  &:not(:last-child)::after
    content '; '
</style>
