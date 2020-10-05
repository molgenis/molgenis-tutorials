<template>
  <div>
    <div v-if="step === 1">
      <p>The attributes sheet specifies the metadata of each table. In Excel the result will look like this:</p>
      <img v-if="this.windowWidth < 1000" src="@/assets/attributes_excel_sm.png" alt="attributes"/>
      <img v-else src="@/assets/attributes_excel.png" alt="attributes"/>
    </div>
    <div v-if="step === 2">
      <p>In the MOLGENIS dataexplorer the result is:</p>
      <img src="@/assets/attributes_dataexplorer.png" class="mg-img-attrs" alt="attributes"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'attributes-slide',
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
  .eg-slideshow img {
    width: 100%;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: 90%;
  }

  img.mg-img-attrs {
    max-width: 80rem;
  }
</style>
