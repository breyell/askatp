<template>
  <div class="container">
    <b-field label="Question Search" label-position="on-border">
      <b-input
        v-model="query"
        placeholder="file system"
        type="search"
        icon-pack="fas"
        icon="search"
      />
    </b-field>
    <div class="columns is-multiline">
      <div
        v-for="question in filteredQuestions"
        :key="question.id"
        class="column is-variable is-12-mobile is-6-tablet is-4-desktop is-3-widescreen"
      >
        <QuestionCard
          :title="question.title"
          :asker="question.asker"
          :tweet-url="question.tweetUrl"
          :timestamp="question.timestamp"
          :overcast-slug="question.episode.overcastSlug"
          :episode-title="question.episode.title"
          :episode-number="question.episode.number"
          :release-date="new Date(question.episode.releaseDate)"
        />
      </div>
    </div>
    <p v-if="filteredQuestions.length === 0">
      No questions found. Try another query.
    </p>
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
