<template>
  <figure class="figure">
    <!-- Slot for image -->
    <slot></slot>
    <figcaption class="figure-caption">{{title}}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'molgenis-img',
  props: { title: String }
}
</script>

<style scoped>
  .figure-caption {
    font-size: 50%;
  }
</style>
