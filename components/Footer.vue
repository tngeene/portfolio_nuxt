<template>
  <footer>
    <div class="columns has-text-centered">
      <div class="column is-12">
        <h5 class="text-white">&copy; {{ year }} www.tngeene.com</h5>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
