<template>
  <div>
    <div v-if="step === 1">
      <p>An EMX file can be saved either as an Excel file, or as a tab or comma separated files (TSV/CSV).
        The tab and comma separated files can be bundled together in a zip file.</p>
      <img class="mg-excel" src="@/assets/excel.png" alt="excel"/>
    </div>
    <div v-if="step === 2">
      <div class="row">
        <div class="col">
          <p>Before we continue it's important to understand the MOLGENIS terminology. On the left you see the
            terminology you are used to, on the right the MOLGENIS equivalent.</p>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-xs-6">
          <molgenis-table
            title="Table"
            :header="['Column 1', 'Column 2']"
            :data="[['Value 1', 'Value 2'],['Value 1', 'Value 2']]"/>
        </div>
        <div class="col-xs-6">
          <molgenis-table
            title="EntityType"
            :header="['Attribute 1', 'Attribute 2']"
            :data="[['Value 1', 'Value 2'],['Value 1', 'Value 2']]"/>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col">
          <p>Additionally, a group of entityTypes is called a "package".</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MolgenisTable from '@/components/MolgenisTable'

export default {
  name: 'emx-slide',
  components: { MolgenisTable },
  props: { step: Number }
}
</script>

<style scoped>
  img.mg-excel {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    width: 5%;
  }
</style>
