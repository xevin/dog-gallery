<template lang="pug">
  component.dg-button(
    :is="tag"
    :class="{'dg-button--active': active}"
    v-bind="componentProps"
    @click="onClick"
  )
    slot
</template>

<script>
export default {
  name: 'DgButton',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    to: String,
    active: Boolean
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  computed: {
    componentProps () {
      if (this.$props.tag === 'router-link') {
        return {
          to: this.to
        }
      } else if (this.$props.tag === 'a') {
        return {
          href: this.to
        }
      } else {
        return {
          type: 'button'
        }
      }
    }
  }
}
</script>

<style>
.dg-button {
  display: inline-block;
  text-decoration: none;
  padding: 0 12px;
  border-radius: 30px;
  color: #626262;
  height: 24px;
  border: 1px solid;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: all .25s ease-in-out;
}

.dg-button:hover {
  color: white;
}

.dg-button--active {
  color: #3C59F0;
}
</style>
