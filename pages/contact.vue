<template>
  <section id="contact" class="container content contact ml-3">
    <h3 class="title is-3 section-title">Get in touch</h3>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <p>
          Interested in hiring me for your project or just want to say hi? You
          can send an email, through the button below or request for a
          consultation. Want to get connected? Follow me on the social channels
          below.
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
</template>

<script>
export default {
  head() {
    return {
      title: 'Ted Ngeene | Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get in touch with me',
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
}
</script>
