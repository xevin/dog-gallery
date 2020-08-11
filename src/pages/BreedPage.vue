<template lang="pug">
  .breed-page
    dg-subheader

    .breed-page__content.content
      dg-card-list(
        :list="$store.state.breedImageList"
        @like="onLike"
        :limit="limit"
      )
</template>

<script>
import DgCardList from '../components/DgCardList'
import { mapActions } from 'vuex'
import DgSubheader from '../components/DgSubheader'
import scrollToBottomMixin from '../mixins/scrollToBottomMixin'

export default {
  name: 'BreedPage',
  components: {DgSubheader, DgCardList},
  mixins: [scrollToBottomMixin],
  props: {
    breed: String
  },
  data () {
    return {
      limit: 20
    }
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
    isScrolledToBottom (val) {
      if (val) {
        /*
          api выдаёт весь список фото,
          поэтому вместо догрузки данных,
          просто расширяем ограничитель видимых фото
         */
        this.limit += 20
      }
    },
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
