<template>
  <div class="marking">
    <slot name="movie"></slot>
    <slot name="book"></slot>
  </div>
</template>

<script>
export default {
  name: 'marking',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.marking 
  display: flex;
 
</style>
