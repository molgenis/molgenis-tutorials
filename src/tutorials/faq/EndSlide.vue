<template>
  <div>
    <p> In this tutorial you learned: </p>
    <ul class="ml-5">
      <li>What happens when you forget the id or label attribute</li>
      <li>How you should select a package</li>
      <li>That attribute names cannot start with numbers</li>
      <li>That you shouldn't make your package and entity names too long</li>
      <li>That you should use the ID of the columns when defining data</li>
      <li>That the casing of your metadata should be the same everywhere</li>
      <li>How to define dates correctly</li>
      <li>What happens when you have duplicated rows in your data</li>
      <li>How to add/update data with auto IDs</li>
      <li>What happens when you misspell an ID</li>
      <li>What happens when you select an mref value multiple times in one cell</li>
      <li>What happens when the name of your table is incorrect</li>
      <li>What happens when you leave a required field empty</li>
      <li>How to correctly select reference values</li>
      <li>That you should put quotes around and commas between values in CSV</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'end-slide',
  props: { step: Number }
}
</script>
