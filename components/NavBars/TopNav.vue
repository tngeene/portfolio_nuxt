<template>
  <b-navbar fixed-top class="is-theme-green is-hidden-desktop">
    <template #brand class="is-hidden-desktop">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="/icon.png" alt="tngeene.com" />
      </b-navbar-item>
    </template>
    <template #start class="is-theme-green is-flex is-flex-direction-column">
      <div v-if="$nuxt.$route.name === 'index'">
        <b-navbar-item href="#about"> About Me </b-navbar-item>
        <b-navbar-item href="#projects"> Portfolio </b-navbar-item>
        <b-navbar-item href="#blog"> Blog </b-navbar-item>
        <b-navbar-item href="#contact"> Contact </b-navbar-item>
      </div>
      <div v-else>
        <b-navbar-item href="/"> About </b-navbar-item>
        <b-navbar-item href="/projects"> Portfolio </b-navbar-item>
        <b-navbar-item href="/blog"> Blog </b-navbar-item>
        <b-navbar-item href="/contact"> Contact </b-navbar-item>
      </div>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <ColorModePicker />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'
export default {
  name: 'TopNav',
  components: { ColorModePicker },
}
</script>
