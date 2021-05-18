<template>
  <div class="section columns is-mobile fadeInUp animated">
    <div
      v-if="Object.keys(article).length > 0"
      class="column is-8 is-offset-2 px-2"
    >
      <h3 class="title is-3">{{ article.title }}</h3>
      <h5 class="subtitle is-5 has-text-grey is-capitalized">
        Published
        {{ new Date(article.published_at).toLocaleDateString() }} |
        {{ article.category.name }} | Posted in
        <nuxt-link
          :to="{
            name: 'blog-series-slug',
            params: { slug: article.article_series.slug },
          }"
          class="more-link has-text-success"
          >{{ article.article_series.title }} Series</nuxt-link
        >
      </h5>
      <div class="container mb-2 article-cover-img">
        <img
          :src="article.coverImage.url"
          :alt="`tngeene ${article.title}`"
          class="blog-img"
          height="450"
          width="1000"
        />
      </div>

      <article class="panel is-dark">
        <p class="panel-heading">Success (2 Part Series)</p>
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          jgthms.github.io
        </a>
      </article>
      <p
        v-if="article.body"
        class="blog-body"
        v-html="$md.render(article.body)"
      ></p>
      <div id="disqus_thread" class="mt-2"></div>
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
  head() {
    return {
      title: `Ted Ngeene | Blog | ${this.article.title}`,
    }
  },
  mounted() {
    this.fetchArticle(this.$route.params.slug)
  },
  methods: {
    async fetchArticle(slug) {
      await this.$strapi.findOne('articles', slug).then((response) => {
        this.article = response
        this.article.coverImage.url = `${baseAPIUrl}${this.article.coverImage.formats.medium.url}`
      })
    },
  },
}
</script>
