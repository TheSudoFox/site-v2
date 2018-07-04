<template>
  <div class="has-text-centered header-image">
    <img :src="`/img/posts/${picture}`">&lt;/img>
    <h5 class="is-subtitle is-5">{{description}}</h5>
  </div>
</template>
<script>
export default {
  props: ['picture', 'description']
}
</script>
<style>
.header-image{
  margin: 5rem 0 2.5rem 0;
}
</style>
