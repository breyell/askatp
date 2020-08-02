<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title" v-text="title" />
        <p class="subtitle" v-text="description" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: '#askatp',
      description: 'Questions previously asked on the Accidental Tech Podcast.',
    }
  },
}
</script>
