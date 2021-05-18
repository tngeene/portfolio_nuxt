<template>
  <div class="section">
    <div class="column is-half is-offset-one-quarter">
      <section class="has-text-centered">
        <h3 class="is-3 title">Projects</h3>
        Welcome to my online portfolio. Some of the amazing projects I've been
        honored to have worked on, over the course of my career are highlighted
        below. I'm also taking freelance and consultancy work at the moment. You
        can reach me via the methods below:
        <div class="buttons is-flex is-justify-content-center mt-2">
          <a
            href=""
            onclick="Calendly.initPopupWidget({url: 'https://calendly.com/tngeene'});return false;"
            class="button is-primary is-light contact-btn"
          >
            <b-icon icon="calendar" class="mr-2" /> Schedule a meeting</a
          >
          <a
            href="mailto:tngeene@outlook.com"
            class="button is-success contact-btn"
          >
            <b-icon icon="email-send" class="mr-2" /> Email</a
          >
        </div>
      </section>
    </div>
    <hr />
    <div class="column is-12 slideInRight animated">
      <section id="projects" class="container content projects ml-3">
        <div class="columns is-variable is-multiline mt-2">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.slug"
            :project="project"
          />
        </div>
        <div
          v-if="
            filteredProjects.length > 0 &&
            projects.length > filteredProjects.length
          "
          class="is-flex is-justify-content-center"
        >
          <button class="button is-primary" @click="showMoreProjects">
            Show More
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProjectCard from '~/components/content/ProjectCard'
const baseAPIUrl = process.env.STRAPI_URL || 'http://localhost:1337'
export default {
  components: { ProjectCard },
  data() {
    return {
      projects: {},
      filteredProjects: {},
      filteredProjectsLength: 6,
    }
  },
  head() {
    return {
      title: 'Ted Ngeene | Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A list of projects Done',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://assets.calendly.com/assets/external/widget.css',
        },
      ],
      script: [
        { src: 'https://assets.calendly.com/assets/external/widget.js' },
      ],
    }
  },
  mounted() {
    this.fetchProjects()
  },
  methods: {
    async fetchProjects() {
      await this.$strapi.find('projects').then((response) => {
        this.projects = response.reverse()
        this.filteredProjects = this.projects.slice(
          0,
          this.filteredProjectsLength
        )
        response.forEach((project) => {
          project.coverImage.url = `${baseAPIUrl}${project.coverImage.formats.small.url}`
        })
      })
    },
    showMoreProjects() {
      let incrementValue = 3
      this.filteredProjectsLength = ++incrementValue
      this.filteredProjects = this.projects.slice(
        0,
        this.filteredProjectsLength
      )
    },
  },
}
</script>
