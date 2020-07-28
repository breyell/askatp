<template>
  <section class="container">
    <QuestionFilter :questions="questions" />
  </section>
</template>

<script>
import QuestionFilter from '~/components/QuestionFilter'

export default {
  name: 'Index',
  layout: 'test',
  components: {
    QuestionFilter,
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('https://cms.askedatp.fm/questions')
      return { questions: data }
    } catch (e) {
      // console.log(e)
      error({ statusCode: 404, message: 'CMS Request Failed' })
    }
  },
}
</script>
