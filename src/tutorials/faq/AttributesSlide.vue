<template>
  <!-- Leave this first div -->
  <div>
    <!-- Remove the step divs if you have one step-->
    <div v-if="step === 1">
      <p>
        Creating your own table in MOLGENIS can be complex, especially when you are just getting started. We will
        attempt to cover all common mistakes and show how to fix them.
      </p>
    </div>
    <div v-if="step === 2">
      <h3>Forgot to set the id attribute</h3>
      <p>It happens to everyone, you forgot to specify the id attribute of your table. You will receive this error in
        the <code>options</code> section:</p>
      <img src="@/assets/missing_id.png" alt="Error missing id"/>
      <hr />
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <molgenis-table
            title="The fix is easy. choose which column will be best suited as the id for your table and set the
            idAttribute column in your attributes sheet to TRUE."
                          :header="['name', 'label', 'entity', 'idAttribute']"
                          :data="[['id', 'ID', 'demo_table', 'TRUE'],
                          ['label', 'Label', 'demo_table', ''],
                          ['something', 'Something else', 'demo_table', '']]"/>
        </div>
        <div class="col-lg-6 offset-md-2 offset-lg-0">
          <molgenis-table title="If you don't have a suitable column, you can add an additional column and let MOLGENIS
          automatically generate the id's for you."
                          :header="['name', 'label', 'entity', 'idAttribute', 'auto']"
                          :data="[['id', 'ID', 'demo_table', 'TRUE', 'TRUE'],
                          ['label', 'Label', 'demo_table', '', ''],
                          ['something', 'Something else', 'demo_table', '', '']]"/>
        </div>
      </div>
    </div>
    <div v-if="step === 3">
      <h3>Forgot to set label attribute with invisible idAttribute</h3>
      <p>In a lot of cases, you probably want to hide the id column of your table from your users. This means you set
        the <code>visible</code> column in your attributes sheet to <code>FALSE</code>. When doing this, the label
        attribute becomes mandatory. If you don't set it, you will receive the following error in the
        <code>options</code> section:</p>
      <img src="@/assets/missing_label.png" alt="Error missing label"/>
      <hr/>
      <div class="row">
        <div class="col-lg-10 col-xl-12 offset-lg-2 offset-xl-0">
          <molgenis-table title="The fix is easy: find a column that you want to represent the values in your table and set
      it as label attribute in your attributes sheet."
                          :header="['name', 'label', 'entity', 'idAttribute', 'visible', 'labelAttribute']"
                          :data="[['id', 'ID', 'demo_table', 'TRUE', 'FALSE', ''],
                          ['label', 'Label', 'demo_table', '', '', 'TRUE'],
                          ['something', 'Something else', 'demo_table', '', '', '']]"/>
        </div>
      </div>
    </div>
    <div v-if="step > 3 && step < 7">
      <h3>Fully qualified name</h3>
      <p v-if="step === 4">The fully qualified name of the table is the ID MOLGENIS uses to recognise the table when
        creating a table using EMX. The fully qualified name consists of the name of the package and the name of the
        table, joined by an underscore. When creating an attributes sheet, in most cases you need to use this fully
        qualified name. There are two errors that are associated with this kind of problem.</p>
      <div v-if="step === 5">
        <h4>
          Case 1
        </h4>
        <div class="row">
          <div class="col-sm-6">
            <molgenis-table title="Attributes: fully qualified name not used"
                            :header="['name', 'label', 'entity', 'idAttribute']"
                            :data="[['id', 'ID', 'table', 'TRUE'],
                          ['label', 'Label', 'table', ''],
                          ['something', 'Something else', 'table', '']]"/>
          </div>
          <div class="col-sm-3">
            <molgenis-table title="Entites: package is set"
                            :header="['name', 'package', 'label']"
                            :data="[['table', 'demo', 'Table']]"/>
          </div>
          <div class="col-sm-3">
            <molgenis-table title="Entites: package is set"
                            :header="['name', 'label']"
                            :data="[['demo', 'Demo']]"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <p>You will receive this error: </p>
            <img src="@/assets/not_set_pkg.png" alt="Error pkg not set" class="mg-pkg-not-set"/>
          </div>
          <div class="col-lg-6">
            <molgenis-table title="The fix is simple, use the fully qualified name rather than just the tablename"
                            :header="['name', 'label', 'entity', 'idAttribute']"
                            :data="[['id', 'ID', 'demo_table', 'TRUE'],
                          ['label', 'Label', 'demo_table', ''],
                          ['something', 'Something else', 'demo_table', '']]"/>
          </div>
        </div>
      </div>
      <div v-if="step === 6">
        <h4>
          Case 2
        </h4>
        <p>You don't specify any packages or entities, and just upload the <code>attributes</code> sheet without
          specifying the fully qualified name.</p>
        <molgenis-table title="Attributes"
                        :header="['name', 'label', 'entity', 'idAttribute']"
                        :data="[['id', 'ID', 'table', 'TRUE'],
                          ['label', 'Label', 'table', ''],
                          ['something', 'Something else', 'table', '']]"/>
        <p>To upload this, you need to have a package available, you can do this either by creating one in the
          <code>navigator</code>, or by creating it using another EMX file. If you have no package available, you will
          receive this error:</p>
        <img src="@/assets/no_pkg.png" alt="Error no pkg"/>
      </div>
    </div>
    <div v-if="step === 7">
      <h3>Attribute name starting with a number</h3>
      <p>Starting the name of an attribute with a number is not allowed: </p>
      <molgenis-table title="Attributes"
                      :header="['name', 'label', 'entity', 'idAttribute']"
                      :data="[['id', 'ID', 'table', 'TRUE'],
                          ['label', 'Label', 'table', ''],
                          ['2something', 'Something else', 'table', '']]"/>

      <p>You will receive this error:</p>
      <img src="@/assets/number_attr_error.png" alt="error"/>
      <p>To fix it, remove the number in front of the name.</p>
    </div>
    <!-- Leave this last div!-->
  </div>
</template>

<script>
import MolgenisTable from '@/components/MolgenisTable'

export default {
  // Here you fill in the name of your slide (use CamelCase like in this example)
  name: 'attributes-slide',
  // Register the table component if you use it in your slide
  components: { MolgenisTable },
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number }
}
</script>

<style scoped>
  img.mg-xcel {
    max-height: 10rem;
  }
  img.mg-pkg-not-set{
    margin-bottom: 1rem;
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
