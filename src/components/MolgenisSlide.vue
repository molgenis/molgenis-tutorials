<template>
  <div class="mg-slide" :class="{'mg-first-slide':isFirst, 'mg-small-screen': this.windowWidth < 1000}">
    <div class="row">
      <div class="col-12">
        <img v-if="isFirst" class="mg-slide-logo" src="../assets/molgenis_white.png" alt="molgenis"/>
        <img v-else class="mg-slide-logo" src="../assets/molgenis_blue.png" alt="molgenis"/>
        <h2>{{title}}</h2>
        <slot></slot>
        <div class="fixed-bottom mg-next-prev-btns">
          <div class="btn-group" role="group">
            <button v-if="isFirst || isLast" type="button" class="btn btn-primary">
              <router-link to="/" class="btn-primary">
                <font-awesome-icon icon="home" /> Home
              </router-link>
            </button>
            <button v-if="!isFirst" type="button" class="btn btn-primary" @click.stop="goBack">
              <font-awesome-icon icon="chevron-left" /> Previous</button>
            <button v-if="!isLast" type="button" class="btn btn-primary" @click.stop="goNext">
              <font-awesome-icon icon="chevron-right" /> Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'molgenis-slide',
  props: {
    title: String,
    isFirst: { type: Boolean, default: false },
    isLast: { type: Boolean, default: false },
    goBack: Function,
    goNext: Function
  },
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
<style>
  .mg-small-screen {
    font-size: 90%;
  }

  .mg-small-screen img.mg-slide-logo {
    width: 15%;
  }

  .mg-small-screen h2 {
   font-size: 200%;
  }

  .mg-slide {
    padding-right: 7%;
    padding-left: 5%;
    color: rgb(1, 127, 253);
    background-color: white;
    height: 100vh;
  }

  .mg-slide p, .mg-slide ul, .mg-slide span {
    font-size: 70%;
  }

  .mg-first-slide {
    font-family: 'IBM Plex Mono', monospace;
    background-color: rgb(1, 127, 253);
    color: white;
  }

  .mg-first-slide h2, .mg-first-slide p {
    text-align: center;
  }

  .mg-first-slide h2 {
    border-bottom: 0.4rem solid white;
    padding-bottom: 5%;
    padding-top: 1%;
    margin-bottom: 7%;
  }

  .mg-slide:not(.mg-first-slide) h2 {
    border-bottom: 0.4rem solid rgb(1, 127, 253);
    padding-bottom: 1%;
    margin-bottom: 2%;
  }

  .mg-slide-logo {
    margin-top: 1rem;
    width: 12%;
    text-align: left;
  }
  .embedded-slideshow-container .mg-slide-logo {
    margin-right: 70%;
  }

  .embedded-slideshow-container .mg-first-slide h2{
    border-bottom: 0.1rem solid white;
  }

  .embedded-slideshow-container .mg-next-prev-btns {
    display: none;
  }
</style>
