<template>
  <div id="mg-faq" class="slideshow" ref="faq">
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
import config from '@/tutorials/faq/config.json'
import slides from '@/tutorials/faq'

export default {
  name: 'faq-tutorial',
  components: { MolgenisSlide, ...slides },
  mixins: [Slideshow],
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'EMX: Frequently asked questions',
    description: 'Things that frequently go wrong when creating an EMX.',
    // Path in the URL, NO SPACES
    path: 'faq'
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
