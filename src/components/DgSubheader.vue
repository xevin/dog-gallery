<template lang="pug">
  .dg-subheader
    .content
      dg-filter(:title="'Породы'")
        template(slot="head")
          .dg-subheader__head
            .head-start
              template(v-if="$route.params.breed")
                dg-button(
                  tag="router-link"
                  to="/"
                  active
                ) {{ $route.params.breed }} &times;
            .head-end
              slot(name="head_end")

        dg-button(
          tag="router-link"
          :to="item"
          v-for="item in $store.getters['breedList']"
          :active="$route.params.breed === item"
        ) {{ item }}
</template>

<script>
import DgFilter from './DgFilter'
import DgButton from './DgButton'

export default {
  name: 'DgSubheader',
  components: {DgFilter, DgButton}
}
</script>

<style scoped>
.dg-subheader {
  padding: 20px 0;
  min-height: 122px;
  display: flex;
  align-items: center;
}

.dg-subheader__head {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
</style>
