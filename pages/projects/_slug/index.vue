<template>
  <div
    v-if="Object.keys(project).length > 0"
    class="section columns is-variable is-multiline"
  >
    <div class="column is-8 offset-2">
      <section class="project-header has-text-center">
        <h3 class="is-3 is-title">{{ project.title }}</h3>
        {{ project.summary }}
      </section>
    </div>
    <br />
    <div class="column is-8 offset-2">
      <div class="columns">
        <div class="column is-4">
          <img :src="project.coverImage.url" alt="tngeene" />
        </div>
        <div class="column is-8">
          <h3 class="is-3 title">{{ project.title }}</h3>
          <i class="lni lni-briefcase"></i> Industry: {{ project.industry }}
          <br />
          <i class="lni lni-link"></i> Live Link:
          <a :href="project.live_link" target="_blank">{{
            project.live_link
          }}</a>
          <br />
          <i class="lni lni-code"></i> Tech Stack:
          <ul class="stack-list">
            <li v-for="tech in project.tech_stacks" :key="tech.name">
              {{ tech.name }}
            </li>
          </ul>

          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const baseAPIUrl = process.env.STRAPI_URL || 'http://localhost:1337'

export default {
  data() {
    return {
      project: {},
    }
  },
  mounted() {
    this.fetchProject(this.$route.params.slug)
  },
  methods: {
    async fetchProject(slug) {
      await this.$strapi.findOne('projects', slug).then((response) => {
        this.project = response
        this.project.coverImage.url = `${baseAPIUrl}${this.project.coverImage.formats.medium.url}`
        // eslint-disable-next-line no-console
        console.log(this.project.coverImage.url)
      })
    },
  },
}
</script>
