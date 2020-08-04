<template lang="pug">
  .index-page
    dg-subheader
      template(slot="head_end")
        dg-checkbox(
          v-model="isOrdered"
          pre-text="Сортировка по алфавиту"
        )

    .content
      dg-card-list(
        :list="list"
        @like="onLike"
      )
</template>

<script>
import DgCardList from '../components/DgCardList'
import DgCheckbox from '../components/DgCheckbox'
import { mapActions } from 'vuex'
import DgSubheader from '../components/DgSubheader'

export default {
  name: 'IndexPage',
  components: {DgSubheader, DgCheckbox, DgCardList},
  data () {
    return {
      isOrdered: false
    }
  },
  computed: {
    list () {
      return this.isOrdered ? this.$store.getters['sortedDogList'] : this.$store.state.dogList
    }
  },
  mounted () {
    this.$store.dispatch('pullRandomDogList')
  },
  methods: {
    ...mapActions({
      onLike: 'toggleLike'
    })
  }
}
</script>

<style>
</style>
