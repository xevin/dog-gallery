<template lang="pug">
  .dg-header
    router-link(:to="{name:'index'}")
      dg-logo

    router-link.link(
      :to="{name: 'favorites'}"
      :class="{'link--active': $route.path === '/favorites'}"
    )
      span Избранные
      dg-icon(name="empty_heart")
</template>

<script>
import DgLogo from '@/components/DgLogo'
import DgIcon from '@/components/DgIcon'

export default {
  name: 'DgHeader',
  components: {DgLogo, DgIcon}
}
</script>

<style>
.dg-header {
  display: flex;
  height: 100px;
  padding: 0 60px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.55);
  position: sticky;
  top: 0;
}

.dg-header .link {
  display: inline-flex;
  color: white;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  opacity: .5;
}

.dg-header .link--active {
  opacity: 1;
}

.dg-header .link .dg-icon {
  margin-left: 8px;
  width: 16px;
}
</style>
