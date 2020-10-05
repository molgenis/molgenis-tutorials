<template>
  <div class="row" @mouseenter="atMouseEnter" @mouseleave="atMouseLeave">
    <div v-for="(tutorial, index) in tutorials" :key="index"
         :class="isStacked ? 'col-md-4' : 'col-md-12'"
         class="mg-tutorial">
      <div class="row">
        <div class="box-card" :class="isStacked ? 'col-md-12' : 'col-md-3'">
          <router-link :to="tutorial.infos.path" @click.native="click">
            <div class="embedded-slideshow-container">
              <component :is="tutorial" :embedded=true :keyboardNavigation="false"
                         :mouseNavigation="false"/>
            </div>
          </router-link>
          <div class="mg-caption">
            <p class="font-weight-bold">{{tutorial.infos.title}}</p>
            <p class="thumbnail-description d-md-none d-lg-none d-xl-none">
              {{tutorial.infos.description}}
            </p>
          </div>
        </div>
        <transition name="fade">
          <div class="mg-description d-none d-md-block d-xl-block col-md-9" v-if="isVisible"
               :class="{isStacked: 'mg-stacked'}">
            <h4>{{tutorial.infos.title}}</h4>
            <p>
              {{tutorial.infos.description}}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'molgenis-tutorial-preview',
  props: { tutorials: Array },
  data: function () {
    return {
      isVisible: false,
      isStacked: true,
      inFocus: false
    }
  },
  watch: {
    inFocus: function () {
      if (this.inFocus) {
        setTimeout(this.showDescription, 300)
      } else {
        setTimeout(this.hideDescription, 1000)
      }
    }
  },
  methods: {
    click (evt) {
      evt.stopPropagation()
    },
    setStackedTrue () {
      this.isStacked = true
    },
    showDescription () {
      if (this.inFocus) {
        this.isVisible = true
        this.isStacked = false
      }
    },
    hideDescription () {
      if (!this.inFocus) {
        this.isVisible = false
        setTimeout(this.setStackedTrue, 300)
      }
    },
    atMouseEnter () {
      this.inFocus = true
    },
    atMouseLeave () {
      this.inFocus = false
    }
  }
}
</script>

<style lang='scss' scoped>
  .mg-stacked {
    display: none;
  }

  .mg-description {
    background-color: rgba(53, 53, 53, 0.9);
    padding: 1.5rem;
    height: 100%;
    margin-bottom: 1rem;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .box-card {
    text-align: center;
    margin-bottom: 50px;

    .embedded-slideshow-container {
      position: relative;
      width: 150px;
      height: 120px;
      margin: 0 auto;
      border: 1px solid grey;
      overflow: hidden;
    }

    h3, p {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  .mg-caption {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
