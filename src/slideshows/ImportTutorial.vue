<template>
  <div id="mg-import" class="slideshow" ref="import">
    <div class="eg-slideshow">
      <slide v-for="(slide, index) in slideConfig.slides"
             :key="index"
             :steps="slide.steps ? slide.steps : 1">
        <molgenis-slide :title="slide.title"
                        :is-first="slide.isFirst ? slide.isFirst : false"
                        :is-last="slide.isLast ? slide.isLast : false"
                        :go-back="previousStep" :go-next="nextStep">
          <component :is="slide.name"  v-bind="{step : step}"/>
        </molgenis-slide>
      </slide>
    </div>
  </div>
</template>
<script>
import { Slideshow } from 'eagle.js'
import MolgenisSlide from '@/components/MolgenisSlide'
import config from '@/tutorials/import/config.json'
import slides from '@/tutorials/import'

export default {
  name: 'import-tutorial',
  components: { MolgenisSlide, ...slides },
  mixins: [Slideshow],
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Import table',
    description: 'How to import your table into MOLGENIS.',
    // Path in the URL, NO SPACES
    path: 'import'
  },
  data () {
    return {
      slideConfig: config
    }
  }
}
</script>
<style scoped>
  .eg-slideshow img {
    max-width: 100%;
  }
</style>
