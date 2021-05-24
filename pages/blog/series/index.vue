<template>
  <div class="section">
    <div class="column is-half is-offset-one-quarter">
      <section class="has-text-centered">
        <h3 class="is-3 title has-text-capitalized">
          A blog about Technology and Online Businesses
        </h3>
        Welcome to my online blog, where I write about the different topics
        happening in the tech scene, from tutorials, to setting up online
        businesses. Here a couple of blog series I've written. They cover deep
        dives into related ideas.
      </section>
    </div>
    <hr />
    <div class="column is-12">
      <section id="series" class="container series ml-3 px-3">
        <div class="columns is-variable is-multiline mt-2">
          <SeriesCard
            v-for="serie in filteredSeries"
            :key="serie.slug"
            :series="serie"
          />
        </div>
        <div
          v-if="
            filteredSeries.length > 0 && series.length > filteredSeries.length
          "
          class="is-flex is-justify-content-center"
        >
          <button class="button is-primary" @click="showMoreseries">
            Show More
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SeriesCard from '~/components/Content/SeriesCard'
const baseAPIUrl = process.env.STRAPI_URL || 'http://localhost:1337'
export default {
  components: { SeriesCard },
  data() {
    return {
      series: {},
      filteredSeries: {},
      filteredSeriesLength: 6,
    }
  },
  head() {
    return {
      title: 'Ted Ngeene | Blog | Series',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Blog series about technology and how we can use it to enhance our lives',
        },
      ],
    }
  },
  mounted() {
    this.fetchSeries()
  },
  methods: {
    async fetchSeries() {
      await this.$strapi.find('article-series').then((response) => {
        this.series = response.reverse()
        this.filteredSeries = this.series.slice(0, this.filteredSeriesLength)
        response.forEach((series) => {
          series.cover_image.url = `${baseAPIUrl}${series.cover_image.formats.medium.url}`
          // eslint-disable-next-line no-console
          console.log('here', series.cover_image.formats.medium.url)
        })
      })
    },
    showMoreseries() {
      let incrementValue = 4
      this.filteredSeriesLength = ++incrementValue
      this.filteredSeries = this.series.slice(0, this.filteredSeriesLength)
    },
  },
}
</script>
