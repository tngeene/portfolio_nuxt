<template>
  <div class="section">
    <div class="column is-half is-offset-one-quarter">
      <section class="has-text-centered">
        <h3 class="is-3 title has-text-capitalized">
          {{ series.title }} Series
        </h3>
        {{ series.summary }}
      </section>
    </div>
    <hr />
    <div class="column is-12 fadeInUp animated">
      <section id="series" class="container series ml-3 px-3">
        <div class="columns is-variable is-multiline mt-2">
          <ArticleCard
            v-for="article in articles"
            :key="article.slug"
            :article="article"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ArticleCard from '~/components/Content/ArticleCard'
const baseAPIUrl = process.env.STRAPI_URL || 'https://portfolio.tngeene.com'
export default {
  components: { ArticleCard },
  data() {
    return {
      series: {},
      articles: {},
    }
  },
  head() {
    return {
      title: `Ted Ngeene | Blog | ${this.series.title} Series `,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.series.summary}`,
        },
      ],
    }
  },
  mounted() {
    this.fetchSeries(this.$route.params.slug)
    this.fetchArticles(this.$route.params.slug)
  },
  methods: {
    async fetchSeries(slug) {
      await this.$strapi.findOne('article-series', slug).then((response) => {
        this.series = response
      })
    },
    async fetchArticles(slug) {
      await this.$strapi
        .find('articles', { 'article_series.slug': slug })
        .then((response) => {
          this.articles = response.reverse()
          response.forEach((article) => {
            article.coverImage.url = `${baseAPIUrl}${article.coverImage.formats.medium.url}`
          })
        })
    },
  },
}
</script>
