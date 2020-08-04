<template lang="pug">
  .favorites-page
    .content
      dg-card-list(
        :list="list"
        @like="onLike"
      )
</template>

<script>
import DgCardList from '../components/DgCardList'
import { mapActions } from 'vuex'

export default {
  name: 'FavoritesPage',
  components: {DgCardList},
  computed: {
    list () {
      return this.$store.getters['likedPhotosBreed']
    }
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
