<template>
  <div class="card">
    <div class="card-content">
      <div class="content is-small">
        <h2 class="title" v-text="title" />
        <div v-if="asker" class="level is-mobile is-size-6">
          <div class="level-left">
            <b-icon pack="fas" icon="user" size="is-small" class="level-item" />
            <p class="level-item" v-text="asker" />
          </div>
        </div>
        <div class="level is-mobile is-size-6">
          <div class="level-left">
            <b-icon
              pack="fas"
              icon="calendar-day"
              size="is-small"
              class="level-item"
            />
            <time
              :datetime="releaseDate"
              class="level-item"
              v-text="longDate"
            />
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a
        v-if="timestamp"
        :href="overcastLink"
        target="_blank"
        class="card-footer-item"
      >
        <figure class="image is-32x32">
          <img src="~/assets/overcast-logo.svg" alt="Overcast Logo" />
        </figure>
      </a>
      <a
        :href="`https://atp.fm/${episodeNumber}`"
        class="card-footer-item"
        target="_blank"
        v-text="'atp.fm'"
      />
      <a
        v-if="tweetUrl"
        :href="tweetUrl"
        target="_blank"
        class="card-footer-item"
      >
        <figure class="image is-32x32">
          <img src="~/assets/twitter-logo.svg" alt="Twitter Logo" />
        </figure>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    asker: {
      type: String,
      default: null,
    },
    tweetUrl: {
      type: String,
      default: null,
    },
    // Could time be type date?
    timestamp: {
      type: String,
      default: null,
    },
    overcastSlug: {
      type: String,
      required: true,
    },
    episodeTitle: {
      type: String,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
  },
  computed: {
    overcastLink() {
      if (this.timestamp) {
        return `https://overcast.fm/${this.overcastSlug}/${this.timestamp}`
      }

      return null
    },
    longDate() {
      const date = new Date(this.releaseDate)
      return date.toDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
}
</script>

<style scoped>
.level + .level {
  margin-top: -15px;
}
</style>
