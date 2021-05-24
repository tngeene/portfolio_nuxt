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
        {{ article.category.name }}
        <p v-if="article.article_series">
          Posted in
          <nuxt-link
            :to="{
              name: 'blog-series-slug',
              params: { slug: article.article_series.slug },
            }"
            class="more-link has-text-success"
            >{{ article.article_series.title }} Series</nuxt-link
          >
        </p>
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

      <!-- <article class="panel is-dark">
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
      </article> -->
      <p
        v-if="article.body"
        class="blog-body"
        v-html="$md.render(article.body)"
      ></p>
      <div id="social-share" class="my-2">
        <h4 class="is-title is-4">Share to social media</h4>
        <SocialShare :key="article.slug" :article="article" />
      </div>
      <div id="disqus_thread" class="mt-2">
        <client-only>
          <Disqus />
        </client-only>
      </div>
    </div>
    <div v-else class="">No article yet</div>
  </div>
</template>

<script>
import SocialShare from '~/components/Content/Share'
const baseAPIUrl = process.env.STRAPI_URL || 'http://localhost:1337'

export default {
  name: 'BlogPage',
  components: { SocialShare },
  data() {
    return {
      article: {},
    }
  },
  head() {
    return {
      title: `Ted Ngeene | Blog | ${this.article.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.article.title}`,
        },
        {
          hid: 'og:description',
          content: `${this.article.body}`,
          property: 'og:description',
        },
        {
          hid: 'og:image',
          content: this.article.coverImage,
          property: 'og:image',
        },
        {
          hid: 'twitter:image',
          content: this.article.coverImage,
          property: 'twitter:image',
        },
      ],
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
