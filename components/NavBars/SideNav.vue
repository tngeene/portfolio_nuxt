<template>
  <section class="side-nav aside-menu column is-3 is-hidden-touch">
    <aside class="section has-text-centered has-text-white">
      <h3 class="is-3 title has-text-white">Ted Ngeene</h3>
      <div class="is-flex is-align-items-center mb-3 is-flex-direction-column">
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
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
        </section>
      </div>
      <hr />
      <div class="menu-list is-flex is-justify-content-center is-capitalized">
        <ul class="has-text-left">
          <li><b-icon icon="account" /> About Me</li>
          <li><b-icon icon="briefcase-variant" /> Portfolio</li>
          <li><b-icon icon="typewriter" /> blog</li>
          <li><b-icon icon="email-send" /> Contact</li>
        </ul>
      </div>
      <hr />
      <b-field>
        <b-switch v-model="lightMode" passive-type="is-dark" type="is-light">
          {{ lightMode ? 'Light Mode' : 'Dark Mode' }}
        </b-switch>
      </b-field>
    </aside>
  </section>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      lightMode: false,
    }
  },
}
</script>
