<template>
  <div class="section">
    <div class="column is-half is-offset-one-quarter">
      <section class="has-text-centered">
        <h3 class="is-3 title has-text-capitalized">
          A blog about Technology and Online Businesses
        </h3>
        Welcome to my online blog, where I write about the different topics
        happening in the tech scene, from tutorials, to setting up online
        businesses.
      </section>
    </div>
    <hr />
    <div class="column is-12">
      <section id="articles" class="container articles ml-3 px-3">
        <div class="columns is-variable is-multiline mt-2 fadeInDown animated">
          <ArticleCard
            v-for="article in filteredArticles"
            :key="article.slug"
            :article="article"
          />
        </div>
        <div
          v-if="
            filteredArticles.length > 0 &&
            articles.length > filteredArticles.length
          "
          class="is-flex is-justify-content-center"
        >
          <button class="button is-primary" @click="showMoreArticles">
            Show More
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ArticleCard from '~/components/Content/ArticleCard'
const baseAPIUrl = process.env.STRAPI_URL || 'http://localhost:1337'
export default {
  components: { ArticleCard },
  data() {
    return {
      articles: {},
      filteredArticles: {},
      filteredArticleLength: 6,
    }
  },
  head() {
    return {
      title: 'Ted Ngeene | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Writing about technology and how we can use it to enhance our lives',
        },
      ],
    }
  },
  mounted() {
    this.fetchArticles()
  },
  methods: {
    async fetchArticles() {
      await this.$strapi.find('articles').then((response) => {
        this.articles = response.reverse()
        this.filteredArticles = this.articles.slice(
          0,
          this.filteredArticleLength
        )
        response.forEach((article) => {
          article.coverImage.url = `${baseAPIUrl}${article.coverImage.formats.medium.url}`
        })
      })
    },
    showMoreArticles() {
      let incrementValue = 4
      this.filteredArticleLength = ++incrementValue
      this.filteredArticles = this.articles.slice(0, this.filteredArticleLength)
    },
  },
}
</script>
