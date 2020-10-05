<template>
  <div>
    <p>Metadata in molgenis is specified in three different sections:</p>
    <ul>
      <li><code>packages</code>: contains the names and descriptions of each folder (not required)</li>
      <li><code>entities</code>: contains the description, names and packages of the tables (not required)</li>
      <li><code>attributes</code>: contains the most important information: the structure of your tables (i.e. the
        names and properties of the columns of the tables)
      </li>
    </ul>
    <br/>
    <h4>Excel</h4>
    <p>
      Add a tab for each metadata section you want to specify. Additionally add a tab for each table you want to upload.
    </p>
    <h4>CSV/TSV</h4>
    <p>
      Create a file for all metadata (e.g. <code>attributes.csv</code>, <code>entities.csv</code> and
      <code>packages.csv</code>). To specify the data, add a file for each table as well.
    </p>
  </div>
</template>
<script>
export default {
  name: 'structure-slide',
  props: { step: Number }
}
</script>
