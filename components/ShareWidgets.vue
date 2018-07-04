<template>
  <div class="sharing-container">
    <p class="share-message">Enjoy? Want to comment or discuss something? Let's start a conversation!</p><br>
    <div class="share-widgets">
      <a class="share-link" href="#" rel="nofollow" title="Share on Twitter" :onclick="`window.open('https://twitter.com/intent/tweet?text=${post.title}&url=${siteUrl}${post.permalink}&via=${handle}', 'newwindow' ,'width=300, height=250'); return false;`">Twitter</a>
      <a class="share-link" href="#" rel="nofollow" title="Share on Facebook" :onclick="`window.open('https://facebook.com/sharer.php?u=${siteUrl}${post.permalink}', 'newwindow' ,'width=300, height=250'); return false;`">Facebook</a>
    </div>
  </div>
</template>

<script>
const siteUrl = 'https://ethanfox.me'
const handle = 'sudofox'

const site = {
  title: 'Ethan Fox'
}

const fb = {
  admin: 'https://www.facebook.com/ethan.fox.568',
  id: '100000031978060'
}

export default {
  props: ['post'],

  data: () => ({ siteUrl, handle }),

  meta () {
    const fbMeta = [
      { name: 'fb:admins', content: fb.admin },
      { name: 'fb:app_id', content: fb.id },
      { name: 'og:site_name', content: site.title },
      { name: 'og:type', content: 'post' },
      { name: 'og:url', content: siteUrl + this.post.permalink },
      { name: 'og:title', content: this.post.title },
      { name: 'post:published_time', content: this.post.date }
    ]

    const twitterMeta = [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: handle },
      { name: 'twitter:title', content: site.title },
      { name: 'twitter:url', content: siteUrl + this.post.permalink }
    ]

    if (this.article.image) {
      const imagePath = siteUrl + '/img/posts/' + this.post.image
      fbMeta.push({ name: 'og:image', content: imagePath })
      twitterMeta.push({ name: 'twitter:image:src', content: imagePath })
    }

    return [
      ...fbMeta,
      ...twitterMeta
    ]
  }
}
</script>

<style lang="scss">

.sharing-container {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.sharing-container p {
  margin: 0;
}

.share-message,
.share-widgets {
  text-align: center;
}
.share-message {
  color: gray;
}
.share-link{
  background-color: #2196F3;
  color: white;
  border-radius: 5px;
  padding: 0.6rem 0.8rem;
  margin-right: .75rem;
}
</style>
