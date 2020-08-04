<template lang="pug">
  .breed-page
    dg-subheader

    .breed-page__content.content
      dg-card-list(
        :list="$store.state.breedImageList"
        @like="onLike"
        :limit="20"
      )
</template>

<script>
import DgCardList from '../components/DgCardList'
import { mapActions } from 'vuex'
import DgSubheader from '../components/DgSubheader'
export default {
  name: 'BreedPage',
  components: {DgSubheader, DgCardList},
  props: {
    breed: String
  },
  methods: {
    ...mapActions({
      onLike: 'toggleLike'
    }),
    fetchData () {
      this.$store.dispatch('pullBreedPhotos', this.$props.breed)
    }
  },
  watch: {
    breed (val, old) {
      if (val !== old) {
        this.fetchData()
      }
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style scoped>

</style>
