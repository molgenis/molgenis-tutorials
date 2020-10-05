<template>
  <div>
    <div v-if="step === 1">
      <p>For each attribute you can specify its data type.</p>
      <div class="row">
        <div class="offset-lg-1">
          <molgenis-table
        title="DataTypes"
        :header="['Data Type', 'Description']"
        :data="[
               ['string', 'Default data type, sequence of a maximum of 255 characters'],
               ['text', 'Text of possibly more than 255 characters'],
               ['int', 'Whole numbers between -2,147,483,648 and +2,147,483,647'],
               ['long', 'Possibly longer whole numbers'],
               ['decimal', 'Decimal number'],
               ['bool', 'Boolean: TRUE/FALSE'],
               ['date', 'Date without time according to ISO-8601'],
               ['datetime', 'Date and time: timezone is optional but will not be stored'],
               ['xref', 'Reference to another table presented as dropdown'],
               ['mref', 'Reference to multiple items in another table presented as dropdown'],
               ['categorical', 'Reference to another table presented as radio buttons'],
               ['categoricial_mref', 'Reference to multiple items in another table presented as checkboxes'],
               ['compound', 'Group of attributes'],
               ['file', 'A file, needs a reference to the FileMeta table'],
               ['email', 'An email address'],
               ['enum', 'Item from a specified list (defined in the enumOptions in the attributes sheet)'],
               ['script', 'Text field with code highlighting'],
               ['html', 'Text field with HTML highlighting'],
               ['hyperlink', 'A link to a website'],
               ['one_to_many', 'Relation between two columns in possibly different datasets'],
               ['text', 'Text of possibly more than 255 characters']
               ]"/>
        </div>
      </div>
    </div>
    <div v-if="step === 2">
      <div class="row">
        <div class="col-12">
          <p>How do we use these data types in EMX? Let's find out! We'll begin with
            a small dataset:</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-sm-7">
          <molgenis-table title="Subjects" :data="[
            [1, 'F', 50, 60, 170, 'Indomethacin'], [2, 'M', 53, 80, 180, 'Indomethacin'],
            [3, 'F', 53, 56, 160, 'Indomethacin'], [4, 'F', 45, 70, 175, 'Indomethacin'],
            [5, 'M', 48, 79, 190, 'Indomethacin'], [6, 'M', 49, 70, 185, 'Indomethacin']
          ]" :header="['id', 'sex', 'age', 'weight', 'height', 'drug']"/>
        </div>
        <div class="col-md-4 col-sm-5">
          <molgenis-table title="Samples" :data="[
              [1, 0.25, 1.5], [1, 0.5, 0.94], [1, 0.75, 0.78], [1, 1, 0.48], [1, 1.25, 0.37], [1, 2, 0.19], [1, 3, 0.12],
              [1, 4, 0.11], [1, 5, 0.08], [1, 6, 0.07], [1, 8, 0.05], [2, 0.25, 2.03], [2, 0.5, 1.63], [2, 0.75, 0.71],
              ['...', '...', '...']
            ]" :header="['subject', 'time', 'conc']"/>
        </div>
      </div>
    </div>
    <div class="row" v-if="step > 2 && step < 6">
      <div class="col-md-9 col-lg-8">
        <p v-if="step > 2 && step < 6">
          First we determine the data types of the subjects table.
        </p>
        <molgenis-table class="mg-subjects" title="Subjects" :data="[
            [1, 'F', 50, 60, 170, 'Indomethacin'], [2, 'M', 53, 80, 180, 'Indomethacin'],
            [3, 'F', 53, 56, 160, 'Indomethacin'], [4, 'F', 45, 70, 175, 'Indomethacin'],
            [5, 'M', 48, 79, 190, 'Indomethacin'], [6, 'M', 49, 70, 185, 'Indomethacin'],
            ['int', 'categorical', 'int', 'int', 'int', 'categorical']]"
                        :header="['id', 'sex', 'age', 'weight', 'height', 'drug']"
                        v-if="step > 2 && step < 6"/>
      </div>
      <div class="col-md-3 col-lg-4">
        <div v-if='step === 4'>
          <p>For the categoricals we need to add reference tables: </p>
          <molgenis-table title="sex" :header="['id', 'label']" :data="[['f', 'Female'], ['m', 'Male']]"/>
        </div>
        <div v-if='step === 5'>
          <div class="row">
            <div class="col-sm-3 col-md-12">
              <p>And: </p>
            </div>
            <div class="col-sm-9 col-md-12">
              <molgenis-table title="drugs" :header="['id', 'label']" :data="[
                ['asp','Aspirine'], ['celecoxib', 'Celecoxib'],['diclo', 'Diclofenac'],['diflu', 'Diflunisal'],
                ['etodo', 'Etodolac'], ['ibu', 'Ibuprofen'], ['indomet', 'Indomethacin'], ['ketopro', 'Ketoprofen'],
                ['ketoro', 'Ketorolac'], ['nabu', 'Nabumetone'], ['napro', 'Naproxen'], ['oxa', 'Oxaprozin'],
                ['piro', 'Piroxicam'], ['salsa', 'Salsalate'], ['sulin', 'Sulindac'],['tol', 'Tolmetin']]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step === 6">
      <div class="row">
        <div class="col-md-6 col-sm-8">
          <p>Let's do the samples table!</p>
          <molgenis-table title="Samples" class="mg-samples" :data="[
              ['AA', 1, 0.25, 1.5], ['AB', 1, 0.5, 0.94], ['AC', 1, 0.75, 0.78], ['AD', 1, 1, 0.48],
              ['AE', 1, 1.25, 0.37], ['AF', 1, 2, 0.19], ['AG', 1, 3, 0.12], ['AH', 1, 4, 0.11], ['AI', 1, 5, 0.08],
              ['AJ', 1, 6, 0.07], ['AK', 1, 8, 0.05], ['AL', 2, 0.25, 2.03], ['AM', 2, 0.5, 1.63],
              ['AN', 2, 0.75, 0.71], ['...', '...', '...', '...'], ['We’ll add a column with unique ID’s.',
              'xref to the subjects table', 'decimal', 'decimal']
            ]" :header="['id', 'subject', 'time', 'conc']"/>
        </div>
        <div class="col-md-6 col-sm-4">
          <ul>
            <li>To generate automatic IDs you can also add an <code>auto</code> column to your attribute sheet
              and set the value for your id attribute to TRUE (this only works for the string data type)
            </li>
            <li>
              In this example we chose not to use auto IDs, to keep the IDs under our control.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="step=== 7">
      <p>We have determined every data type in these tables. </p>
      <p>Wouldn't it be nice to see the samples for each subject in the same table as well?</p>
      <p>That's where the <code>one_to_many</code> data type comes in handy!</p>
      <br/>
      <p>We will add an additional attribute with the datatype <code>one_to_many</code> that is mapped to the
        <code>subject</code>
        attribute of the samples table.</p>
    </div>
  </div>
</template>

<script>
import MolgenisTable from '@/components/MolgenisTable'

export default {
  name: 'datatypes-slide',
  components: { MolgenisTable },
  props: { step: Number }
}
</script>
<style>
  table.mg-subjects > tbody > tr:nth-child(7), table.mg-samples > tbody > tr:nth-child(16) {
    background-color: #353535;
    color: #72F6B2;
  }
</style>
