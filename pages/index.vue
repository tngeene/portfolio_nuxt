<template>
  <div class="section">
    <AboutSection />
    <hr />
    <div id="skills" class="container skills p-3">
      <h3 class="title is-3 section-title">What I do</h3>
      <SkillsCards />
    </div>
    <hr />
    <div id="projects" class="container projects p-3">
      <h3 class="title is-3 section-title">Featured projects</h3>
    </div>
    <hr />
    <div id="projects" class="container projects p-3">
      <h3 class="title is-3 section-title">Latest blog posts</h3>
    </div>
    <hr />
    <div id="contact" class="container contact p-3">
      <h3 class="title is-3 section-title">Get in touch</h3>
    </div>
    <hr />
  </div>
</template>

<script>
import AboutSection from '~/components/About/DescriptionHero'
import SkillsCards from '~/components/About/SkillsCards'

export default {
  name: 'HomePage',

  components: {
    AboutSection,
    SkillsCards,
  },
}
</script>
