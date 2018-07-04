<template>
  <section class="blog-container">
    <div class="container is-fluid"> 
      <div class="content-container">
        <h1 class="title is-1 post-title"> {{ post.title }} </h1>
        <h3 class="subtitle is-3 post-date">Published: {{ post.date }} </h3>
        <nuxtent-body :body="post.body" />
          <ShareWidgets :post="post"></ShareWidgets>
          <div class="content-footer has-text-centered">
            <nuxt-link to="/blog" class="back-home">Back to blog home</nuxt-link>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    post: await app.$content('/').get(route.path) || payload
  }),

  components: {
    ShareWidgets: () => import('~/components/ShareWidgets')
  },

  head () {
    return {
      title: 'Ethan Fox | ' + this.post.title
    }
  }
}
</script>

<style>
.content-container {
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
}
.content-container ul {
  list-style: square;
  padding: .25rem 0 .25rem 3rem;
}
.content-footer {
  margin-bottom: 2rem;
}
.back-home {
  &:before {
    content: "← "
  }
}
</style>
