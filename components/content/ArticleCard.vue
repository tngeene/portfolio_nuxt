<template>
  <div class="column is-4">
    <div class="card article-card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            :src="article.coverImage.url"
            :alt="`tngeene ${article.title}`"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4 class="is-4 is-capitalized">{{ article.title }}</h4>
          <small class="has-text-grey-light is-capitalized">
            Published
            {{ new Date(article.published_at).toLocaleDateString() }} |
            {{ article.category.name }}
          </small>
          <br />
          <p
            v-if="article.body"
            v-html="$md.render(article.body.slice(0, 40))"
          ></p>
          <br />
          <p class="mb-0 mt-4">
            <nuxt-link
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="more-link"
              >Read more →</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      default() {
        return {
          coverImage: '',
          title: '',
          body: '',
          published_at: '',
        }
      },
    },
  },
}
</script>
