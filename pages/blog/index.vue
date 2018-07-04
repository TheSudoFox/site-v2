<template>
  <div class="blog-container">
    <section class="hero">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column has-text-centered">
            <h1 class="title is-1 has-text-blogprimary">Blog</h1>
            <h4 class="subtitle is-4">random routine ramblings</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <ul class="has-text-centered">
          <li v-for="post in posts" class="is-size-4">
            <nuxt-link :to="post.permalink">{{post.title}}</nuxt-link>
            // {{post.date}}
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'blogpage'
    }
  },
  asyncData: async ({ app }) => ({
    posts: await app.$content('/').getAll()
  })
}
</script>

<style>
.container {
  padding-top: 5vh;
}
</style>
