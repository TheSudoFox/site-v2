<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column has-text-centered">
            <h1 class="title is-1 has-text-aboutprimary">About Me</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="aboutmeinfo">My name is Ethan Fox and I love learning and bringing new ideas to life. I also have a deep desire to
        help improve the world at large through the fruits of my labor.

        To fuel this fire, I spend a lot of my days reading and listening. Both fortunately and unfortunately, a
        lot of things fall into my realm of interest. These topics mainly center around technology, science,
        and geopolitics; however I've spent long days down Google/YouTube/Wikipedia holes looking up
        everything from cooking to architecture!

        Outside of intellectual endeavors I play way too many video games, travel as much as possible, and want to
        cuddle every dog I come into contact with.

        You can read my thoughts on all of these subjects and more on my blog, or feel free to reach out
        and email me at me@ethanfox.me to talk.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  head: {
    bodyAttrs: {
      class: 'aboutpage'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding-top: 5vh;
}
h4 {
  border-bottom: solid 4px #2196F3;
  display: inline;
  padding-bottom:4px;
  line-height: 200%;
}
.columns .title {
  color: #FFC107;
}
p {
  color: white;
  line-height: 200%;
  font-size: 1.5rem;
  padding: 1rem;
}
.aboutmeinfo {
  padding-top: 15vh;
}
</style>
