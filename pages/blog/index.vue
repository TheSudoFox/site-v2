<template>
  <div class="blog-container">
    <section class="hero">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column has-text-centered">
            <h1 class="title is-1 has-text-light">Blog</h1>
            <h4 class="subtitle is-4 has-text-light">random routine ramblings</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-centered columns">
      <div class="box column is-half post-list">
        <ul class="has-text-left">
          <li v-for="post in posts">
            <h2 class="is-3"><nuxt-link :to="post.permalink">{{post.title}}</nuxt-link></h2><h3 class="is-6 is-pulled-right">{{post.date}} </h3>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>
<>
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
.post-list h3, h2{
  display: inline;
}
</style>
