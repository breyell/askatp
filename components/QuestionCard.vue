<template>
  <div class="card column is-one-third">
    <div class="card-content">
      <div class="media-content">
        <div class="title" v-text="title" />
        <a v-if="originUrl" class="" :href="originUrl" v-text="asker" />
        <div v-else class="" v-text="asker" />
        <a class="" :href="overcastLink">Overcast Link</a>
        <a :href="`https://atp.fm/${episodeNumber}`" target="_blank"
          >Episode {{ episodeNumber }}</a
        >
        <div v-text="formattedDate" />
      </div>
    </div>
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
      required: true,
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
      return `https://overcast.fm/${this.overcastSlug}:${this.timestamp}`
    },
    formattedDate() {
      return this.releaseDate.toLocaleString(this.releaseDate, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
}
</script>
