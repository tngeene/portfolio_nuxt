<template>
  <div>
    <TopNav />
    <div class="columns">
      <div class="column is-3">
        <div class="scrollable-full-height">
          <SideNav />
        </div>
      </div>
      <div class="column is-9">
        <div class="scrollable-full-height">
          <nuxt />
        </div>
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
