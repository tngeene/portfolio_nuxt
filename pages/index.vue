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
      <ProjectCard />
    </section>
    <hr />
    <section id="blog" class="container blog ml-3 px-3">
      <h3 class="title is-3 section-title">Latest blog posts</h3>
      <ArticleCard />
    </section>
    <hr />
    <section id="contact" class="container content contact ml-3">
      <h3 class="title is-3 section-title">Get in touch</h3>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can send an email, through the button below. Want to get connected?
            Follow me on the social channels below.
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

          <a
            href="mailto:tngeene@outlook.com"
            class="button is-success contact-btn mt-4"
            >Get In touch</a
          >
        </div>
      </div>
    </section>
    <hr />
  </div>
</template>

<script>
import AboutSection from '~/components/about/DescriptionHero'
import ArticleCard from '~/components/content/ArticleCard'
import ProjectCard from '~/components/content/ProjectCard'
import ServicesCards from '~/components/about/ServicesCards'
import SkillsCards from '~/components/about/SkillsCards'

export default {
  name: 'HomePage',

  components: {
    AboutSection,
    ArticleCard,
    ProjectCard,
    ServicesCards,
    SkillsCards,
  },
}
</script>
