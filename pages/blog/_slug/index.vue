<template>
  <div class="section columns">
    <div
      v-if="Object.keys(article).length > 0"
      class="column is-10 is-offset-2 px-2"
    >
      <h3 class="title is-3">{{ article.title }}</h3>
      <h5 class="subtitle is-5 has-text-grey is-capitalized">
        Published
        {{ new Date(article.published_at).toLocaleDateString() }} |
        {{ article.category.name }}
      </h5>
      <img
        :src="article.coverImage.url"
        :alt="`tngeene ${article.title}`"
        class="has-ratio"
        width="640"
        height="360"
      />
      <p v-if="article.body" v-html="$md.render(article.body.slice(0, 40))"></p>
    </div>
    <div v-else class="">No article yet</div>
  </div>
</template>

<script>
const baseAPIUrl = process.env.STRAPI_URL || 'http://localhost:1337'

export default {
  name: 'BlogPage',
  data() {
    return {
      article: {},
    }
  },
  mounted() {
    this.fetchArticle(this.$route.params.slug)
  },
  methods: {
    async fetchArticle(slug) {
      // eslint-disable-next-line no-console
      console.log('here')
      await this.$strapi.findOne('articles', slug).then((response) => {
        this.article = response
        this.article.coverImage.url = `${baseAPIUrl}${this.article.coverImage.formats.medium.url}`
      })
    },
  },
}
</script>
