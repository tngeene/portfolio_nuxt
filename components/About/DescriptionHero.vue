.
<template>
  <div class="columns">
    <div class="column is-7">
      <h2 class="title is-2">Ted Ngeene</h2>
      <h5 class="subtitle is-5">Software Engineer</h5>
      <p>
        {{ about.description }}
      </p>
      <div class="interests mt-3">
        <strong>Currently Learing:</strong> {{ about.currently_learning }}<br />
        <strong>Interest/Hobbies:</strong> {{ about.hobbies }}<br />
      </div>
      <div class="mt-5">
        <a class="button is-success is-light mr-2" href="#projects"
          ><span class="mdi mdi-briefcase-variant mdi-24px"></span> View
          Portfolio</a
        >
        <a class="button is-dark" :href="about.resume.url" target="_blank"
          ><span class="mdi mdi-file-document mdi-24px"></span> View Resume</a
        >
      </div>
    </div>
    <div class="column is-4">
      <b-image
        :src="about.profilePicture.url"
        src-fallback="https://media-exp1.licdn.com/dms/image/C4E03AQGwIt_Ln5l3Ig/profile-displayphoto-shrink_400_400/0/1563688841704?e=1626307200&v=beta&t=qB8i0sl3x-qd3MViaZZcGPYr6DjToqF3RCvNq4B8gWQ"
        ratio="5by4"
      ></b-image>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    about: {
      type: Object,
      default() {
        return {
          description: '',
          resume: '',
          currently_learning: '',
          hobbies: '',
          profilePicture: {
            url: '',
          },
        }
      },
    },
  },
}
</script>
