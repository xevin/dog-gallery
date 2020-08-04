<template lang="pug">
  .dg-like(@click="onClick")
    dg-icon(
      v-show="value"
      name="filled_heart")
    dg-icon(
      v-show="!value"
      name="empty_heart")
</template>

<script>
import DgIcon from './DgIcon'
export default {
  name: 'DgLike',
  components: {DgIcon},
  props: ['value'],
  methods: {
    onClick () {
      this.$emit('input', !this.$props.value)
    }
  }
}
</script>

<style>
.dg-like {
  cursor: pointer;
}
.dg-like img {
  width: 24px;
}
</style>
