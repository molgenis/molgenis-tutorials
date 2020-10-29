<template>
  <div>
    <div v-if="step=== 1">
      <div class="row">
        <div class="col">
          <p>Let's take a look at the <code>attributes</code> sheet that defines these tables.</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <molgenis-table title="attributes"
                          v-if="windowWidth > 600"
                          :header="['name', 'label', 'entity', 'idAttribute', 'labelAttribute', 'dataType', 'refEntity',
                            'mappedBy', 'visible', 'nillable', 'description']"
                          :data="[
                                ['id', 'ID', 'study_subjects', 'TRUE', 'TRUE', 'int', '', '', '', 'FALSE', ''],
                                ['age', 'Age', 'study_subjects', '', '', 'int', '', '', '', 'FALSE', ''],
                                ['sex', 'Sex', 'study_subjects', '', '', 'categorical', 'study_sex', '', '', 'FALSE', ''],
                                ['weight', 'Weight', 'study_subjects', '', '', 'int', '', '', '', 'FALSE', ''],
                                ['height', 'Height', 'study_subjects', '', '', 'int', '', '', '', 'FALSE', ''],
                                ['drug', 'Drug', 'study_subjects', '', '', 'categorical', 'study_drugs', '', '', 'FALSE', ''],
                                ['samples', 'Samples', 'study_subjects', '', '', 'on_to_many', 'study_samples', 'subject', '', 'FALSE', ''],
                                ['id', 'ID', 'study_sex', 'TRUE', '', 'string', '', '', '', 'FALSE', ''],
                                ['label', 'Label', 'study_sex', '', 'TRUE', 'string', '', '', '', 'FALSE', ''],
                                ['id', 'ID', 'study_drugs', 'TRUE', '', 'string', '', '', '', 'FALSE', ''],
                                ['label', 'Label', 'study_drugs', '', 'TRUE', 'string', '', '', '', 'FALSE', ''],
                                ['id', 'ID', 'study_samples', 'TRUE', '', 'string', '', '', 'FALSE', 'FALSE', ''],
                                ['subject', 'Subject', 'study_samples', '', '', 'xref', 'study_subjects', '', '', 'FALSE', ''],
                                ['time', 'Time (h)', 'study_samples', '', 'TRUE', 'decimal', '', '', '', 'FALSE', 'Times at which blood samples were drawn (hr)'],
                                ['conc', 'Concentration (mcg/ml)', 'study_samples', '', 'TRUE', 'decimal', '', '', '', 'FALSE', 'Plasma concentrations drug (mcg/ml)']
                                ]"/>
          <molgenis-table title="attributes (part 1)"
                          v-if="windowWidth < 601"
                          :header="['name', 'label', 'entity', 'idAttribute', 'labelAttribute']"
                          :data="[
                                ['id', 'ID', 'study_subjects', 'TRUE', 'TRUE'],
                                ['age', 'Age', 'study_subjects', '', ''],
                                ['sex', 'Sex', 'study_subjects', '', ''],
                                ['weight', 'Weight', 'study_subjects', '', ''],
                                ['height', 'Height', 'study_subjects', '', ''],
                                ['drug', 'Drug', 'study_subjects', '', ''],
                                ['samples', 'Samples', 'study_subjects', '', ''],
                                ['id', 'ID', 'study_sex', 'TRUE', ''],
                                ['label', 'Label', 'study_sex', '', 'TRUE'],
                                ['id', 'ID', 'study_drugs', 'TRUE', ''],
                                ['label', 'Label', 'study_drugs', '', 'TRUE'],
                                ['id', 'ID', 'study_samples', 'TRUE', ''],
                                ['subject', 'Subject', 'study_samples', '', ''],
                                ['time', 'Time (h)', 'study_samples', '', 'TRUE'],
                                ['conc', 'Concentration (mcg/ml)', 'study_samples', '', 'TRUE']
                                ]"/>
          <molgenis-table title="attributes (part 2)"
                          v-if="windowWidth < 600"
                          :header="['dataType', 'refEntity', 'mappedBy', 'visible', 'nillable', 'description']"
                          :data="[
                                ['int', '', '', '', 'FALSE', ''],
                                ['int', '', '', '', 'FALSE', ''],
                                ['categorical', 'study_sex', '', '', 'FALSE', ''],
                                ['int', '', '', '', 'FALSE', ''],
                                ['int', '', '', '', 'FALSE', ''],
                                ['categorical', 'study_drugs', '', '', 'FALSE', ''],
                                ['on_to_many', 'study_samples', 'subject', '', 'FALSE', ''],
                                ['string', '', '', '', 'FALSE', ''],
                                ['string', '', '', '', 'FALSE', ''],
                                ['string', '', '', '', 'FALSE', ''],
                                ['string', '', '', '', 'FALSE', ''],
                                ['string', '', '', 'FALSE', 'FALSE', ''],
                                ['xref', 'study_subjects', '', '', 'FALSE', ''],
                                ['decimal', '', '', '', 'FALSE', 'Times at which blood samples were drawn (hr)'],
                                ['decimal', '', '', '', 'FALSE', 'Plasma concentrations drug (mcg/ml)']
                                ]"/>
        </div>
      </div>
    </div>
    <div v-else-if="step===2">
      <p>These are the most important attribute sheet columns explained:</p>
      <ul>
        <li>The <code>name</code> is the column name you use in the header of your data. It is unique per table.
        </li>
        <li>The <code>label</code> column contains names of columns as they will be presented in MOLGENIS. They don’t
          have to be unique.</li>
        <li>In the <code>entity</code> column you fill in the id of the table. For tables created via EMX, the
          name consists of the package and table name, joined by an underscore.</li>
        <li>The <code>idAttribute</code> is the column that serves as the id of the table. Each table has only
          one.</li>
        <li>A table can have one <code>labelAttribute</code> that represents the row. It has to be visible. When
          the idAttribute is invisible, the labelAttribute is required, otherwise it is just recommended.</li>
        <li>In the <code>dataType</code> column you specify the data type of the column (default: string).</li>
        <li>The <code>refEntity</code> has to be specified for the data types xref, mref, categorical(_mref), and
          one_to_many. It is the id of the table that contains the reference data.</li>
        <li>The <code>mappedBy</code> column has to be specified for one_to_many attributes. You specify the column in
          the refEntity table upon which the values have to be based.</li>
        <li>You can also specify per attribute whether they are <code>visible</code>/<code>nillable</code> in
          the dataexplorer.</li>
        <li>The <code>description</code> will be shown if you hover over a column in the dataexplorer and when filling
          in data via a form in MOLGENIS.</li>
      </ul>
    </div>
    <div v-else>
      <span>Additional configuration options can be found </span>
      <a href="https://molgenis.gitbook.io/molgenis/data-management/guide-emx" target="_blank">
        <span class="font-weight-bold">here</span>
      </a><span>.</span>
    </div>
  </div>
</template>

<script>
import MolgenisTable from '@/components/MolgenisTable'

export default {
  name: 'create-table-slide',
  components: { MolgenisTable },
  props: { step: Number },
  data () {
    return {
      windowWidth: 0
    }
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
