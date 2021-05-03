.
<template>
  <div class="columns">
    <div class="column is-7">
      <h2 class="title is-2">Ted Ngeene</h2>
      <h5 class="subtitle is-5">Software Engineer</h5>
      <p>
        I'm a software engineer specialised in frontend and backend development
        for complex scalable web apps. I write about software development on my
        blog. Want to know how I may help your project? Check out my project
        portfolio and online resume.
      </p>
      <div class="mt-5">
        <b-button type="is-success is-light" class="mr-2"
          ><span class="mdi mdi-briefcase-variant mdi-24px"></span> View
          Portfolio</b-button
        >
        <b-button type="is-dark"
          ><span class="mdi mdi-file-document mdi-24px"></span> View
          Resume</b-button
        >
      </div>
    </div>
    <div class="column is-4">
      <b-image
        src="https://picsum.photos/id/error/600/400"
        src-fallback="https://picsum.photos/id/237/600/400"
        ratio="16by9"
      ></b-image>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>
