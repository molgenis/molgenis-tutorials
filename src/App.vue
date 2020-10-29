<template>
  <div class="container-fluid">
    <router-view id="app"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  body {
    margin: 0 0;
  }

  html {
    height: 0;
    widows: 0;
    background-color: #017FFD;
  }
</style>
