<template>
  <div>
    <div class="columns is-multiline">
      <b-field label="Name" class="column is-full">
        <b-input
          v-model="query"
          placeholder="file system"
          type="search"
          icon-pack="fas"
          icon="search"
        />
      </b-field>
      <QuestionCard
        v-for="question in questions"
        :key="question.id"
        :title="question.title"
        :asker="question.asker"
        :origin-url="question.originUrl"
        :timestamp="question.episodeTime"
        :overcast-slug="question.episode.overcastSlug"
        :episode-number="212"
        :release-date="new Date(question.episode.releaseDate)"
      />
    </div>
  </div>
</template>

<script>
import QuestionCard from '~/components/QuestionCard'

export default {
  components: {
    QuestionCard,
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      query: '',
    }
  },
}
</script>
