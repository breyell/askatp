<template>
  <div>
    <HomeHero />
    <section class="section">
      <QuestionFilter :questions="questions" />
    </section>
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero'
import QuestionFilter from '~/components/QuestionFilter'

export default {
  name: 'Index',
  layout: 'test',
  components: {
    HomeHero,
    QuestionFilter,
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('https://cms.askatp.fm/questions')
      return { questions: data }
    } catch (e) {
      // console.log(e)
      error({ statusCode: 404, message: 'CMS Request Failed' })
    }
  },
}
</script>
