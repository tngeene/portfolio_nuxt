<template>
  <div class="column is-4-desktop is-full-mobile is-4-tablet">
    <div class="card article-card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="series.cover_image.url" :alt="`tngeene ${series.title}`" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4 class="is-4 is-capitalized">{{ series.title }}</h4>
          <!-- <small class="has-text-grey-light is-capitalized">
            {{ series.article_count }} Articles
          </small> -->
          <br />
          <p
            v-if="series.summary"
            v-html="$md.render(series.summary.slice(0, 40))"
          ></p>
          <br />
          <p class="mb-0 mt-4">
            <nuxt-link
              :to="{ name: 'blog-series-slug', params: { slug: series.slug } }"
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
  name: 'SeriesCard',
  props: {
    series: {
      type: Object,
      default() {
        return {
          coverImage: '',
          title: '',
          summary: '',
          published_at: '',
        }
      },
    },
  },
}
</script>
