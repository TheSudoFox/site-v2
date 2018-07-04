<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">

        <router-link to="/" class="navbar-item" href="/">
          <img src="../assets/mylogo.png" alt="" width="21" height="30">
        </router-link>

        <div class="navbar-burger burger" @click="toggleMenu" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="navbar-menu">
          <!-- navbar start, navbar end -->
        </div>

      </div>

      <div id="navMenu" :class="{'is-active': this.$store.state.toggleMenu}" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/skills">
            Skills
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/about">
            About me
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/work">
            Work
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/blog">
            Blog
          </nuxt-link>
        </div>
      </div>

    </nav>

    <router-view/>

  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'landingpage'
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('toggleMenu', !this.$store.state.togglMenu)
    }
  }
}
</script>

<style lang="scss">
// Fonts
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

$family-sans-serif: "Roboto", sans-serif;

// Set your colors
$lightblue: #ecf5fe;
$primary: #2196F3;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
$skillsbg: #FFF9C4;
$skillsprimary: #F44336;
$skillsprimary-invert: findColorInvert($skillsprimary);
$card-background-color: #FFAB91;
$card-header-color: $skillsprimary;
$card-footer-border-top: 0px solid $skillsprimary;
$card-shadow: 0 4px 4px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1);
$aboutprimary: #FFF59D;
$aboutprimary-invert: findColorInvert($aboutprimary);
$tabs-boxed-link-active-background-color: #F44336;
$tabs-boxed-link-border-color: #F44336;
$tabs-link-active-color: $white;
$tabs-link-color: #4a4a4a;
$blogprimary: #009688;
$blogprimary-invert: findColorInvert($blogprimary);
$workprimary: #ef9a9a;
$workprimary-invert: findColorInvert($workprimary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
"white": ($white, $black),
"black": ($black, $white),
"light": ($light, $light-invert),
"dark": ($dark, $dark-invert),
"primary": ($primary, $primary-invert),
"info": ($info, $info-invert),
"success": ($success, $success-invert),
"warning": ($warning, $warning-invert),
"danger": ($danger, $danger-invert),
"twitter": ($twitter, $twitter-invert),
"skillsprimary": ($skillsprimary, $skillsprimary-invert),
"aboutprimary": ($aboutprimary, $aboutprimary-invert),
"blogprimary": ($blogprimary, $blogprimary-invert),
"workprimary": ($workprimary, $workprimary-invert),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
  width: 100%;
  height: 100vh;
  font-size: 125%;
}

.blog-container h1{ 
  color: $primary;
  font-size: 200%;
  font-weight: 600;
}

.blog-container h2{ 
  color: #FF6F00;
  font-size: 125%;
  font-weight: 600;
}

.blog-container h4 {
  border-bottom: solid 4px #4CAF50;
  display: inline;
  padding-bottom: 4px;
  line-height: 200%;
}

.blog-container p {
  margin: 1rem 0 1rem 0;
  line-height: 1.5;
}

u {
  text-decoration-color: $primary;
}

ol {
  margin-left: 2.5rem;
  margin-bottom: 1.5rem;
}
.landingpage{
  height: 100%;
}
.skillspage{
  height: 100%;
  background-color: #FFF9C4;
}
.aboutpage{
  min-height: 100vh;
  height: 100%;
  background-color: #3F51B5;
}
.blogpage{
  min-height: 100vh;
  height: 100%;
  background-color: #FFF3E0;
}
.workpage{
  min-height: 100vh;
  height: 100%;
  background-color: #ef9a9a;}
</style>
