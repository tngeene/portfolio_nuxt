<template>
  <div>
    <TopNav />
    <SideNav />
    <div class="columns">
      <div class="columns is-9">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '~/components/NavBars/SideNav.vue'
import TopNav from '~/components/NavBars/TopNav.vue'

export default {
  components: { SideNav, TopNav },
}
</script>
