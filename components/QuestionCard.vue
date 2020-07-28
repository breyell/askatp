<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <p class="title" v-text="title" />
        <p>
          <b-icon pack="fas" icon="user" size="is-small" />
          {{ asker }}
        </p>
        <p>
          <b-icon pack="fas" icon="calendar-day" size="is-small" />
          <time :datetime="shortDate" v-text="longDate" />
        </p>
      </div>
    </div>
    <footer class="card-footer">
      <a v-if="timestamp" :href="overcastLink" class="card-footer-item">
        <figure class="image is-32x32">
          <img src="~/assets/overcast-logo.svg" alt="Overcast Logo" />
        </figure>
      </a>
      <a
        :href="`https://atp.fm/${episodeNumber}`"
        class="card-footer-item"
        target="_blank"
        v-text="'Show Notes'"
      />
      <a v-if="originUrl" :href="originUrl" class="card-footer-item">
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
    originUrl: {
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
    episodeNumber: {
      type: Number,
      required: true,
    },
    // Could this be type Date?
    releaseDate: {
      type: Date,
      required: true,
    },
  },
  computed: {
    overcastLink() {
      if (this.timestamp) {
        return `https://overcast.fm/${this.overcastSlug}:${this.timestamp}`
      }

      return null
    },
    longDate() {
      return this.releaseDate.toLocaleDateString(this.releaseDate, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    shortDate() {
      const year = this.releaseDate.getFullYear()
      let month = this.releaseDate.getMonth()
      let date = this.releaseDate.getDate()

      if (month < 10) {
        month = '0' + month
      }

      if (date < 10) {
        date = '0' + date
      }

      return `${year}-${month}-${date}`
    },
  },
}
</script>
