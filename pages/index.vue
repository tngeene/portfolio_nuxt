<template>
  <div class="section">
    <section id="about" class="content">
      <AboutSection
        v-if="Object.keys(bio).length > 0"
        :key="bio.id"
        :about="bio"
      />
    </section>
    <hr />
    <section id="services" class="container content services ml-3">
      <h3 class="title is-3 section-title">My Expertise</h3>
      <p>
        I have more than 5 years' experience building software for different
        clients, ranging from SMEs to big corporations. Below is a quick
        overview of the services I provide.
      </p>
      <ServicesCards />
    </section>
    <hr />
    <section id="services" class="container content services ml-3">
      <h3 class="title is-3 section-title">Skills</h3>
      <p>
        Below is a quick overview of the programming languages and tools I use.
        Want to find out more? check out my resumé.
      </p>
      <SkillsCards />
    </section>
    <hr />
    <section id="projects" class="container content projects ml-3">
      <h3 class="title is-3 section-title">Featured projects</h3>
      <div class="columns is-variable is-multiline mt-2 is-mobile">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
      <div class="is-flex is-justify-content-center">
        <nuxt-link to="/projects">
          <button class="button is-success">All Projects</button>
        </nuxt-link>
      </div>
    </section>
    <hr />
    <section id="blog" class="container blog ml-3 px-3">
      <h3 class="title is-3 section-title">Latest blog posts</h3>
      <div
        v-if="projects"
        class="columns is-variable is-multiline mt-2 is-mobile"
      >
        <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        />
      </div>
      <div
        v-else
        class="is-flex is-flex-direction-column is-justify-content-space-evenly"
      >
        <img src="/img/empty.png" />
        No project uploaded yet 🙁
      </div>
      <div class="is-flex is-justify-content-center">
        <nuxt-link to="/blog">
          <button class="button is-success">All Blog Posts</button>
        </nuxt-link>
      </div>
    </section>
    <hr />
    <section id="contact" class="container content contact ml-3">
      <h3 class="title is-3 section-title">Get in touch</h3>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can send an email, through the button below or request for a
            consultation. Want to get connected? Follow me on the social
            channels below.
          </p>
          <section class="socials mt-2 is-size-4">
            <a href="https://github.com/tngeene" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
            <a href="https://twitter.com/Ngeene_kihiu" target="_blank"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="https://discord.com/users/tngeene#1047/" target="_blank"
              ><i class="fab fa-discord"></i
            ></a>
            <a href="https://www.linkedin.com/in/teddy-kihiu/" target="_blank"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a href="https://dev.to/tngeene" target="_blank"
              ><i class="fab fa-dev"></i
            ></a>
            <a href="https://t.me/Ngeene_kihiu" target="_blank"
              ><i class="fab fa-telegram"></i
            ></a>
          </section>

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
        </div>
      </div>
    </section>
    <hr />
  </div>
</template>

<script>
import AboutSection from '@/components/About/DescriptionHero'
import ArticleCard from '@/components/Content/ArticleCard'
import ProjectCard from '@/components/Content/ProjectCard'
import ServicesCards from '@/components/About/ServicesCards'
import SkillsCards from '@/components/About/SkillsCards'
const baseAPIUrl = process.env.STRAPI_URL || 'https://portfolio.tngeene.com'

export default {
  name: 'HomePage',
  components: {
    AboutSection,
    ArticleCard,
    ProjectCard,
    ServicesCards,
    SkillsCards,
  },
  data() {
    return {
      articles: null,
      projects: null,
      about: null,
      bio: {},
    }
  },
  head() {
    return {
      title: 'Ted Ngeene',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Using technology to enhance the world we live in',
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
    this.fetchArticles()
    this.fetchProjects()
    this.fetchBio()
  },
  methods: {
    async fetchArticles() {
      await this.$strapi.find('articles').then((response) => {
        this.articles = response.reverse().slice(0, 6)
        response.forEach((article) => {
          article.coverImage.url = `${baseAPIUrl}${article.coverImage.formats.small.url}`
        })
      })
    },
    async fetchProjects() {
      await this.$strapi.find('projects').then((response) => {
        this.projects = response.reverse().slice(0, 4)
        response.forEach((project) => {
          project.coverImage.url = `${baseAPIUrl}${project.coverImage.formats.small.url}`
        })
      })
    },
    async fetchBio() {
      await this.$strapi.find('about').then((response) => {
        this.bio = response
        this.bio.profilePicture.url = `${baseAPIUrl}${this.bio.profilePicture.formats.medium.url}`
        this.bio.resume.url = `${baseAPIUrl}${this.bio.resume.url}`
      })
    },
  },
}
</script>
