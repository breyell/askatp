<template>
  <b-navbar type="is-black" wrapper-class="container">
    <template slot="brand">
      <b-navbar-item
        tag="nuxt-link"
        :to="brandLink.link"
        exact-active-class="is-active"
        v-text="brandLink.label"
      />
    </template>
    <template slot="start">
      <b-navbar-item
        v-for="(item, index) in links"
        :key="index"
        tag="nuxt-link"
        :to="item.link"
        exact-active-class="is-active"
        v-text="item.label"
      />
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      brandLink: {
        label: 'Home',
        link: '/',
      },
      links: [
        {
          label: 'About',
          link: '/about',
        },
      ],
    }
  },
}
</script>
