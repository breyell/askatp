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
        v-for="question in filteredQuestions"
        :key="question.id"
        :title="question.title"
        :asker="question.asker"
        :origin-url="question.originUrl"
        :timestamp="question.episodeTime"
        :overcast-slug="question.episode.overcastSlug"
        :episode-number="question.episode.number"
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
  computed: {
    filteredQuestions() {
      const clonedQuestions = this.questions

      function comapareEpisodeNumbers(a, b) {
        return b.episode.number - a.episode.number
      }

      return clonedQuestions
        .sort(comapareEpisodeNumbers)
        .filter((question) =>
          question.title.toLowerCase().includes(this.query.toLowerCase())
        )
    },
  },
}
</script>
