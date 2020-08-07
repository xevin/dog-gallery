<template lang="pug">
  .dg-card-list
    dg-card(
      :cover="item.image"
      :title="item.breed"
      v-for="item in list.slice(0, limit)"
      :key="item.image"
      :is-liked="$store.getters['likedPhotos'].includes(item.image)"
      @like="$emit('like', item.image)"
    )
</template>

<script>
import DgCard from './DgCard'

export default {
  name: 'DgCardList',
  components: {DgCard},
  props: {
    list: Array,
    limit: Number
  }
}
</script>

<style scoped>
.dg-card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>
