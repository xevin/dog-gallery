<template lang="pug">
.dg-icon
  img(:src="iconReq")
</template>

<script>
export default {
  name: 'DgIcon',
  props: {
    name: String
  },
  computed: {
    iconReq () {
      return require(`@/assets/icons/${this.$props.name}.svg`)
    }
  }
}
</script>

<style scoped>
.dg-icon {
  display: inline-flex;
}
.dg-icon img {
  width: 100%;
  height: auto;
}
</style>
