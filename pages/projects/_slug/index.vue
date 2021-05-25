<template>
  <div class="section">
    <div
      v-if="Object.keys(project).length > 0"
      class="columns is-mobile is-variable is-multiline"
    >
      <div class="column is-half is-offset-one-quarter">
        <section class="project-header has-text-centered">
          <h3 class="is-3 title">{{ project.title }}</h3>
          {{ project.summary }}
        </section>
      </div>
      <hr />
      <div class="column is-10 is-offset-1 has-background-light">
        <div class="columns">
          <div class="column is-4">
            <img :src="project.coverImage.url" alt="tngeene" />
          </div>
          <div class="column is-8">
            <h3 class="is-3 title">{{ project.title }}</h3>
            <ul class="project-overview">
              <li v-if="project.industry">
                <i class="lni lni-briefcase"></i> Industry:
                {{ project.industry }}
              </li>
              <li v-if="project.industry">
                <i class="lni lni-target-customer"></i> Client:
                {{ project.client }}
              </li>
              <li v-if="project.live_link">
                <i class="lni lni-link"></i> Live Link:
                <a :href="project.live_link" target="_blank">{{
                  project.live_link
                }}</a>
              </li>
              <li v-if="project.github_link">
                <i class="lni lni-github"></i> Github Link:
                <a :href="project.github_link" target="_blank">{{
                  project.github_link
                }}</a>
              </li>
              <li v-if="project.role">
                <i class="lni lni-user"></i> Role on Project:
                {{ project.role }}
              </li>
              <li v-if="project.tech_stacks.length > 0">
                <i class="lni lni-code"></i> Tech Stack:
                <ul class="stack-list">
                  <li v-for="tech in project.tech_stacks" :key="tech.name">
                    {{ tech.name }}
                  </li>
                </ul>
              </li>
              <li v-if="project.made_at">
                <i class="lni lni-pin"></i> Made At:
                {{ project.made_at }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="project.description" class="column is-10 is-offset-1">
        <h3 class="title is-3 section-title has-text-capitalized">
          Project overview
        </h3>
        <p>{{ project.description }}</p>
      </div>
      <div v-if="project.approach" class="column is-10 is-offset-1">
        <h3 class="title is-3 section-title has-text-capitalized">
          The Approach and solution
        </h3>
        <p>{{ project.approach }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const baseAPIUrl = process.env.STRAPI_URL || 'https://portfolio.tngeene.com'

export default {
  data() {
    return {
      project: {},
    }
  },
  head() {
    return {
      title: `Ted Ngeene | Projects |${this.project.title}`,
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
