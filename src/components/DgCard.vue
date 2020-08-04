<template lang="pug">
.dg-card
  .dg-card__like
    dg-like(:value="isLiked", @input="onLike")

  img.dg-card__cover(:src="cover")

  router-link.dg-card__title(:to="title") {{ title }}
</template>

<script>
import DgLike from '@/components/DgLike'

export default {
  name: 'DgCard',
  props: {
    title: String,
    cover: String,
    isLiked: Boolean
  },
  components: {
    DgLike
  },
  methods: {
    onLike () {
      this.$emit('like')
    }
  }
}
</script>

<style scoped>
.dg-card {
  width: 100%;
  height: 100%;
  max-width: 367px;
  max-height: 270px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  background-color: rgba(255,255,255,0.2);
}

.dg-card__cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.dg-card__title {
  position: absolute;
  display: flex;

  bottom: 0;
  right: 0;
  left: 0;
  height: 30px;
  color: white;
  font-weight: bold;
  text-decoration: none;

  background: linear-gradient(to top, black, transparent);
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 20px 20px;
}

.dg-card__like {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
