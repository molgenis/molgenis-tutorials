<template>
  <!-- Leave this first div -->
  <div>
    <p v-if="step === 1">
      The <code>entities</code> and <code>packages</code> tables are much smaller and therefore less error-prone. We
      will address possible issues with those slides next.
    </p>
    <div v-if="step === 2">
      <h3>Combination of entity and package name too long</h3>
      <p>Using excel, the combination of the package and entity cannot be longer than 30 characters.</p>
      <div class="row">
        <div class="col-sm-6 col-xs-12">
          <molgenis-table title="Packages"
                          :header="['name', 'label']"
                          :data="[['VeryLongPackageName', 'Very long package name']]"/>
        </div>
        <div class="col-sm-6 col-xs-12">
          <molgenis-table title="Entities"
                          :header="['name', 'package', 'label']"
                          :data="[['VeryLongTableName', 'VeryLongPackageName', 'Very long fully qualified name']]"/>
        </div>
      </div>
      <molgenis-img title="The combination doesn't fit in the tab">
        <img src="@/assets/very_long_issue.png" alt="issue" class="mg-tabs"/>
      </molgenis-img>
      <p>There are two ways to fix it: </p>
      <ul>
        <li>1. The obvious option: make your package and entity names shorter.</li>
        <li>2. Save the tables as csv files, tables should be named: <code>package_entity.csv</code>, and metadata:
          <code>attributes.csv</code>, <code>entities.csv</code> and <code>packages.csv</code>. You can upload all files
          at once by zipping them.</li>
      </ul>
    </div>
    <!-- Leave this last div!-->
  </div>
</template>

<script>
import MolgenisTable from '@/components/MolgenisTable'
import MolgenisImg from '@/components/MolgenisImg'
export default {
  // Here you fill in the name of your slide (use CamelCase like in this example)
  name: 'entities-pkgs-slide',
  // Register the table component if you use it in your slide
  components: { MolgenisTable, MolgenisImg },
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number }
}
</script>

<style scoped>
  img.mg-tabs {
    max-height: 3rem;
  }
  .eg-slideshow h3 {
    text-align: left;
    font-size: 120%;
    color: black;
  }

  .eg-slideshow h4 {
    text-align: left;
    font-size: 80%;
    color: black;
  }
</style>
