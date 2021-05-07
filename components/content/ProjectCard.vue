<template>
  <div class="columns is-variable is-multiline mt-2">
    <div class="column is-half">
      <div class="card project-card">
        <div class="columns">
          <div
            class="card-image column is-full-mobile is-one-third-desktop is-one-third-widescreen"
          >
            <b-image
              src="https://picsum.photos/id/1074/800/400"
              class="is-128x128 is-square"
            >
              <template #placeholder>
                <b-skeleton
                  class="skeleton-placeholder"
                  height="100%"
                ></b-skeleton>
              </template>
            </b-image>
          </div>
          <div
            class="column is-full-mobile is-two-thirds-desktop is-two-thirds-widescreen"
          >
            <h4 class="is-4 title">Project title</h4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient...
            <small class="mt-4 has-text-grey-dark">Client: Google</small>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-half">
      <div class="card project-card">
        <div class="columns">
          <div
            class="column is-full-mobile is-one-third-desktop is-one-third-widescreen"
          >
            <b-image src="https://picsum.photos/id/1074/800/400" ratio="2by1">
              <template #placeholder>
                <b-skeleton
                  class="skeleton-placeholder"
                  height="100%"
                ></b-skeleton>
              </template>
            </b-image>
          </div>
          <div
            class="column is-full-mobile is-two-thirds-desktop is-two-thirds-widescreen"
          >
            <h4 class="is-4 title">Project title</h4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient...
            <small class="mt-4 has-text-grey-dark">Client: Google</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
}
</script>
