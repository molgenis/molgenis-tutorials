<template>
  <!-- Leave this first div -->
  <div>
    <p>
      We separated the possible issues into two parts: metadata issues and data issues.
      The first part will focus on metadata issues: mistakes that are frequently made in <code>attributes</code>,
      <code>entities</code>, and <code>packages</code> files/sheets.
    </p>
    <!-- Leave this last div!-->
  </div>
</template>

<script>
export default {
  // Here you fill in the name of your slide (use CamelCase like in this example)
  name: 'metadata-slide',
  // Register the table component if you use it in your slide
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number }
}
</script>
