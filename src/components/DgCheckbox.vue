<template lang="pug">
  .dg-checkbox(
    @click="onClick"
    :class="{'active': value}"
  )
    span {{ preText }}
    span.dg-checkbox__toggler
    span {{ postText }}
</template>

<script>
import DgButton from './DgButton'

export default {
  name: 'DgCheckbox',
  components: {DgButton},
  props: {
    preText: String,
    postText: String,
    value: Boolean
  },
  methods: {
    onClick () {
      this.$emit('input', !this.$props.value)
    }
  }
}
</script>

<style scoped>
.dg-checkbox {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: #626262;
}

.dg-checkbox > *:not(:first-child) {
  margin-left: 8px;
}

.dg-checkbox__toggler {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 14px;
  border: 1px solid;
  border-radius: 30px;
  color: gray;
}

.dg-checkbox__toggler::before {
  position: absolute;
  display: block;
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: gray;
  margin: 1px;
  left: 1px;
  color: gray;
}

.dg-checkbox.active {
  color: white;
}

.dg-checkbox.active .dg-checkbox__toggler {
  color: white;
}

.dg-checkbox.active .dg-checkbox__toggler::before {
  color: white;
  background-color: white;
  right: 1px;
  left: initial;
}
</style>
