<template>
  <div>
    <div v-if="step === 1">
      <p>Open the <code>Advanced importer</code> by clicking it in the menu. Using the default MOLGENIS layout, you can
      find it here: </p>
      <img v-if="this.windowWidth > 989" class="mg-menu" src="@/assets/importer_menu.png" alt="menu"/>
      <img v-if="this.windowWidth < 990" class="mg-menu-sm" src="@/assets/importer_menu_small.png" alt="menu"/>
    </div>
    <div v-if="step === 2">
      <div class="row">
        <div class="col-sm-7">
          <img src="@/assets/import_upload_file.png" alt="Upload file" class="import"/>
        </div>
        <div class="col-sm-5">
          <h4>Step 1</h4>
          <p> Select the EMX file you want to upload and press next.</p>
        </div>
      </div>
    </div>
    <div v-if="step === 3 || step === 4">
      <div class="row">
        <div class="col-lg-5 col-sm-6" v-if="this.windowWidth > 575">
          <img src="@/assets/import_options.png" alt="Options" class="import-options"/>
        </div>
        <div class="col-lg-7 col-sm-6" v-if="step=== 3">
          <img v-if="this.windowWidth < 576 " src="@/assets/import_md_options.png" alt="Options"/>
          <hr/>
          <h4>Step 2 Metadata options</h4>
          <p> Select <code>Create new metadata</code> (make a new table given the EMX you are uploading).</p>
          <p><code>Ignore the metadata</code> will ignore the model you specify and upload the data if the table
            exists. If the table doesn't exist, the upload will fail. MOLGENIS will still validate the metadata if you
            provide it, so your upload might still fail if you provide incorrect metadata.</p>
        </div>
        <div class="col-lg-7 col-sm-6" v-if="step=== 4">
          <img v-if="this.windowWidth < 576" src="@/assets/import_data_options.png" alt="Options"/>
          <hr/>
          <h4>Step 3 Data options</h4>
          <p>
            Select <code>Add entities</code> (this only adds rows to the table and fails if you try to update rows)
          </p>
          <p><code>Add entities/ update existing</code> will add rows that are not present yet, and update rows that
            already exist. Usually this option will work for every dataset. It might however be slower than the other
            options, especially with large datasets.</p>
          <p><code>Update entities</code> will only update existing rows and will fail if you try to add
            new ones.</p>
          <p> You can press next. </p>
        </div>
      </div>
    </div>
    <div v-if="step === 5">
      <div class="row">
        <div class="col-md-7">
          <img src="@/assets/import_packages.png" alt="Packages" class="import"/>
        </div>
        <div class="col-md-5">
          <h4>Step 4</h4>
          <p>Since we already put every entity in a package in our EMX file, this screen is pretty empty. If you don't
          include the <code>entities</code> sheets in your EMX, you have to specify the packages
          here. Obviously, there have to be packages available. If you do not provide the <code>packages</code> sheet,
          you have to make sure you have an available package. </p>
          <p> You can press next again. </p>
        </div>
      </div>
    </div>
    <div v-if="step === 6">
      <div class="row">
        <div class="col-sm-7">
          <img src="@/assets/import_validation.png" alt="Validation" class="import-validation"/>
        </div>
        <div class="col-sm-5">
          <h4>Step 5</h4>
          <p> In this step the data you are uploading will be compared to its metadata. If anything does not match, it
            will show here. </p>
          <p> <code>Unknown</code> means that a column provided is not specified in the metadata. </p>
          <p> <code>Available</code> means that a column specified in the metadata is not present in the data. If the
            column is not required, your upload might still succeed. </p>
          <p> Everything is green, so you can press next again. </p>
        </div>
      </div>
    </div>
    <div v-if="step === 7">
      <div class="row">
        <div class="col-md-7">
          <img src="@/assets/import_importing.png" alt="Importing" class="import"/>
        </div>
        <div class="col-md-5">
          <h4>Step 6</h4>
          <p> MOLGENIS will now attempt to upload your data </p>
        </div>
      </div>
    </div>
    <div v-if="step === 8">
      <div class="row">
        <div class="col-md-7">
          <img src="@/assets/import_success.png" alt="Importing" class="import"/>
        </div>
        <div class="col-md-5">
          <h4>Step 7</h4>
          <p> If all data you provided is correct, your import will succeed. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'importer-slide',
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

<style scoped>
  img.mg-menu {
    max-width: 30rem;
  }

  img.mg-menu-sm {
    width: 100%;
    max-width: 40rem;
  }

  img.import {
    max-width: 100%;
    width: 48.5rem;
  }

  img.import-options {
    max-width: 100%;
    width: 25rem;
  }

  img.import-validation {
    max-width: 100%;
    width: 60rem;
  }
</style>
