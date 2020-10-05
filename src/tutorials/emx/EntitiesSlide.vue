<template>
  <div>
    <div v-if="step === 1">
      <div class="row">
        <div class="col-md-5">
          <p>An entities sheet in Excel will look like this:</p>
          <img class="mg-entities" src="@/assets/entities_excel.png" alt="entities"/>
        </div>
        <div class="col-md-7">
          <p>In CSV this would be:</p>
          <pre><code>"name","label","package","description"
"subjects","Subjects","study",""
"samples","Samples","study",""
"sex","Sex","study",""
"drugs","Drugs","study",""
"diseases","Diseases","study","ICD10 Diseases"</code></pre>
          <p>In TSV: the same as CSV, but with tabs instead of commas.</p>
        </div>
      </div>
      <p>Names of entities are also case sensitive. We try to keep them lowercase where possible to avoid mistakes.</p>
    </div>
    <div v-if="step === 2">
      <p>In the MOLGENIS navigator the result will look like:</p>
      <img class="mg-entities-nav" src="@/assets/entities_navigator.png" alt="entities"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entities-slide',
  props: { step: Number }
}
</script>

<style scoped>
  img.mg-entities {
    width: 100%;
    max-width: 40rem;
    margin-bottom: 2rem;
  }

  img.mg-entities-nav {
    width: 100%;
    max-width: 55rem;
  }
</style>
