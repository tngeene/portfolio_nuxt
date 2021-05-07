<template>
  <div class="section">
    <AboutSection />
    <hr />
    <section id="services" class="container content services ml-3">
      <h3 class="title is-3 section-title">My Expertise</h3>
      <p>
        I have more than 4 years' experience building software for different
        clients, ranging from SMEs to big corporations. Below is a quick
        overview of the services I provide.
      </p>
      <SkillsCards />
    </section>
    <hr />
    <section id="services" class="container content services ml-3">
      <h3 class="title is-3 section-title">Skills</h3>
      <p>
        Below is a quick overview of the programming languages and tools I use.
        Want to find out more? check out my resumé.
      </p>
    </section>
    <hr />
    <section id="projects" class="container content projects ml-3">
      <h3 class="title is-3 section-title">Featured projects</h3>
      <ProjectCard />
    </section>
    <hr />
    <section id="projects" class="container projects ml-3">
      <h3 class="title is-3 section-title">Latest blog posts</h3>
      <ArticleCard />
    </section>
    <hr />
    <section id="contact" class="container content contact ml-3">
      <h3 class="title is-3 section-title">Get in touch</h3>
    </section>
    <hr />
  </div>
</template>

<script>
import AboutSection from '~/components/about/DescriptionHero'
import ArticleCard from '~/components/content/ArticleCard'
import ProjectCard from '~/components/content/ProjectCard'
import SkillsCards from '~/components/about/SkillsCards'

export default {
  name: 'HomePage',

  components: {
    AboutSection,
    ArticleCard,
    ProjectCard,
    SkillsCards,
  },
}
</script>
