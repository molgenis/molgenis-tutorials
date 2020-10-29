<template>
  <!--  Don't forget to register your component in the config.json
  (specify name in kebab-case, title and when multiple steps, the number of steps)-->
  <!-- Leave this first div -->
  <div>
   <p>Things that frequently go wrong when creating an EMX.</p>
  </div>
</template>

<script>
export default {
  // Here you fill in the name of your slide (use CamelCase like in this example)
  name: 'first-slide',
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number }
}
</script>
