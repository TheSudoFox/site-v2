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
$darkpage-bg: #1565C0;
$darkpage-bg-invert: findColorInvert($darkpage-bg);
$darkpage-primary: #FF7043;
$darkpage-primary-invert: findColorInvert($darkpage-primary);
$lightpage-bg: #42A5F5;
$lightpage-bg-invert: findColorInvert($lightpage-bg);
$lightpage-primary: #8E24AA;
$lightpage-primary-invert: findColorInvert($lightpage-primary);
$card-background-color: #FFAB91;
$card-header-color: $darkpage-primary;
$card-footer-border-top: 0px solid $darkpage-primary;
$card-shadow: 0 4px 4px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1);
$tabs-boxed-link-active-background-color: #F44336;
$tabs-boxed-link-border-color: #F44336;
$tabs-link-active-color: $white;
$tabs-link-color: #4a4a4a;

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
"lightpagebg": ($lightpage-bg, $lightpage-bg-invert),
"darkpagebg": ($darkpage-bg, $darkpage-bg-invert),
"darkpageprimary": ($darkpage-primary, $darkpage-primary-invert),
"lightpageprimary": ($lightpage-primary, $lightpage-primary-invert),
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
  border-bottom: solid 4px $lightpage-primary;
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
  background-color: $darkpage-bg;
}
.aboutpage{
  min-height: 100vh;
  height: 100%;
  background-color: $lightpage-bg;
}
.blogpage{
  min-height: 100vh;
  height: 100%;
  background-color: $lightpage-bg;
}
.workpage{
  min-height: 100vh;
  height: 100%;
  background-color: $darkpage-bg;
}

.box {
  box-shadow: none;
}
</style>
