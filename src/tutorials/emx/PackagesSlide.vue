<template>
  <div>
    <p>A packages sheet in Excel looks like this:</p>
    <img class="mg-pckgs-xcel" src="@/assets/packages_excel.png" alt="packages"/>
    <p>In CSV this would be:</p>
    <pre>"name","label","description"
"study","Study","Pharmacogenetics of NSAIDs"</pre>
    <p>In TSV:</p>
    <pre>"name"  "label" "description"
"study"  "Study" "Pharmacogenetics of NSAIDs"</pre>
    <p>Please note the difference in casing throughout the example. Names and ids in MOLGENIS are case sensitive. We
      tend to use lowercase where possible in all names and ids to make sure we select the package consistently
      throughout the EMX file.</p>
  </div>
</template>
<script>
export default {
  name: 'packages-slide',
  props: { step: Number }
}
</script>
<style scoped>
  img.mg-pckgs-xcel {
    width: 50%;
    max-width: 35rem;
    margin-bottom: 2rem;
  }
</style>
