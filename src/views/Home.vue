<template>
  <div class="row frontpage">
    <div class="col-12">
      <div class="row">
        <div class="col-12 banner" id="mg-top-banner">
          <img class="mg-logo" src="@/assets/molgenis_white.png" alt="molgenis"/>
          <h1> MOLGENIS</h1>
          <p>
            MOLGENIS is a free open source platform in which data can be stored and handled. In short
            it’s a big interface built upon a database with a few API’s and lots of functionality that can
            be used to handle the data.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 banner">
          <div class="row">
            <div class="col-md-10 col-sm-9 col-xs-8">
              <h2 class="mg-tutorials-header">MOLGENIS Tutorials</h2>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-4">
              <github-button href="https://github.com/molgenis/molgenis" data-size="large" data-show-count="true"
                             aria-label="Star molgenis/molgenis on GitHub">Star
              </github-button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p> On this page we walk you through the most essential features of MOLGENIS. Click on the tutorial to
                start it. Use the left and right arrow keys on your keyboard to go through the tutorials.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10">
              <div class="thumbnails">
                <h3>Tutorials</h3>
              <molgenis-tutorial-preview :tutorials="tutorials"/>
              </div>
            </div>
            <div class="col-md-2">
              <h3>Resources</h3>
              <a :href="`${publicPath}data/demo.xlsx`" download>
                <font-awesome-icon icon="download"/>
                Demo EMX</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tutorials from '@/slideshows/tutorials.ts'
import GithubButton from 'vue-github-button'
import MolgenisTutorialPreview from '@/components/MolgenisTutorialPreview'

export default {
  name: 'home',
  components: {
    GithubButton,
    MolgenisTutorialPreview
  },
  data: function () {
    return {
      tutorials: tutorials.list,
      publicPath: process.env.BASE_URL,
      isVisible: false,
      isStacked: true
    }
  },
  mounted: function () {
    document.currentSlide = {}
  }
}
</script>
<style lang='scss' scoped>

  .mg-tutorials-header {
    margin-top: 0;
  }

  .banner {
    padding-left: 12%;
    padding-right: 12%;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  #mg-top-banner {
    font-family: 'IBM Plex Mono', monospace;
    background-color: rgb(1, 127, 253);
    color: white;
    font-size: 1.6rem;
    line-height: 3.0rem;
  }

  #mg-top-banner h1 {
    border-top: 0.5rem solid;
    font-size: 4.8rem;
    line-height: 4.8rem;
    margin-top: 3.2rem;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    margin-bottom: 0rem;
  }

  .mg-logo {
    height: 6rem;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }
</style>
