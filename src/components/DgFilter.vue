<template lang="pug">
  .dg-filter(:class="{'dg-filter--active': isOpened}")
    .dg-filter__head
      button.dg-filter__title(type="button" @click="onToggle")
        | {{ title }}&nbsp;
        span(v-if="isOpened") &uarr;
        span(v-else) &darr;

      slot(name="head")

    .dg-filter__body
      .wrap
        slot
</template>

<script>
export default {
  name: 'DgSpoiler',
  props: {
    title: String,
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpened: false
    }
  },
  created () {
    this.isOpened = this.$props.active
  },
  methods: {
    onToggle () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style scoped>
.dg-filter {
  margin-bottom: 20px;
}

.dg-filter__title {
  border: none;
  background: none;
  outline: none;
  color: white;
  display: inline-block;
  border-bottom: 1px dashed;
  cursor: pointer;
  padding: 0 0 1px;
  margin-right: 8px;
}

.dg-filter__head {
  display: flex;
}

.dg-filter__body {
  height: 0;
  overflow: hidden;
}

.dg-filter__body .wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-around;
  padding: 12px 0;
}

.dg-filter--active .dg-filter__body {
  height: auto;
  overflow: auto;
}
</style>
