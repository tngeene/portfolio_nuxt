<template>
  <div class="column is-half-desktop is-6-tablet is-full-mobile mb-5">
    <div class="card project-card">
      <div class="columns no-gutters">
        <div class="column is-4 project-img-holder">
          <img
            data-aos="zoom-in-up"
            data-aos-delay="500"
            :src="project.coverImage.url"
            alt="`tngeene ${project.title}`"
            class="project-img"
          />
        </div>
        <div class="column is-8 px-5">
          <h4 class="title is-4 project-title">{{ project.title }}</h4>
          <p>{{ project.summary.slice(0, 30) }}...</p>
          <p>
            <small class="mt-2 has-text-grey-dark"
              >Client: {{ project.client }}</small
            >
          </p>
          <p>
            <small class="mt-1 has-text-grey-dark"
              >Industry: {{ project.industry }}</small
            >
          </p>
        </div>
        <div class="project-details fadeIn-bottom">
          <a :href="`/projects/${project.slug}`">
            <button class="button is-dark">
              <i class="fas fa-eye mr-2"></i> View Project
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default() {
        return {
          coverImage: '',
          title: '',
          client: '',
          description: '',
          industry: '',
        }
      },
    },
  },
}
</script>
