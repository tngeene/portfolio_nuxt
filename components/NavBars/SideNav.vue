<template>
  <section class="side-nav aside-menu is-hidden-touch">
    <aside class="section has-text-centered has-text-white">
      <h3 class="is-3 title has-text-white">Ted Ngeene</h3>
      <div class="is-flex is-align-items-center mb-3 is-flex-direction-column">
        <figure class="image is-128x128">
          <img class="is-rounded" src="https://i.imgur.com/luwtCu2.jpg" />
        </figure>
        <p>
          Hi, My name is Ted. I'm a software engineer. welcome to my personal
          website.
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
      </div>
      <hr />
      <div class="menu-list is-flex is-justify-content-center is-capitalized">
        <ul v-if="$nuxt.$route.name === 'index'" class="has-text-left">
          <li>
            <a href="#about"><b-icon icon="account" /> About Me</a>
          </li>
          <li>
            <a href="#projects">
              <b-icon icon="briefcase-variant" /> Portfolio
            </a>
          </li>
          <li>
            <a href="#blog"> <b-icon icon="typewriter" /> blog </a>
          </li>
          <li>
            <a href="#contact"> <b-icon icon="email-send" /> Contact </a>
          </li>
        </ul>
        <ul v-else class="has-text-left">
          <li>
            <nuxt-link to="/"> <b-icon icon="account" /> About Me </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects">
              <b-icon icon="briefcase-variant" /> Portfolio
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog">
              <b-icon icon="typewriter" /> blog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
              <b-icon icon="email-send" /> Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
      <hr />
      <div class="container">
        <ColorModePicker />
      </div>
    </aside>
  </section>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'
export default {
  name: 'SideNav',
  components: { ColorModePicker },
  data() {
    return {
      lightMode: false,
    }
  },
}
</script>

<style scoped>
.container {
  text-align: center;
  padding: 50px;
}
.menu-list a {
  color: #fff !important;
}
.menu-list a:hover {
  color: #000 !important;
  background-color: transparent;
}
</style>
