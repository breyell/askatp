<template>
  <div>
    <HomeHero />
    <section class="section">
      <QuestionFilter :questions="questions" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'test',
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get(
        'https://cms.askatp.fm/questions?_limit=-1'
      )
      return { questions: data }
    } catch (e) {
      // console.log(e)
      error({ statusCode: 404, message: 'CMS Request Failed' })
    }
  },
}
</script>
