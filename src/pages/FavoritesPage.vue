<template lang="pug">
  .favorites-page
    .content
      dg-card-list(
        :list="likedList"
        @like="onLike"
      )
</template>

<script>
import DgCardList from '../components/DgCardList'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FavoritesPage',
  components: {DgCardList},
  computed: {
    ...mapGetters({
      likedList: 'likedPhotosBreed'
    })
  },
  methods: {
    ...mapActions({
      onLike: 'toggleLike'
    })
  }
}
</script>

<style scoped>
.favorites-page {
  padding-top: 122px;
}
</style>
