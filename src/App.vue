<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>

import Navigation from "@/components/Navigation/Navigation.vue";

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>


<style lang="scss" src="./main.scss"></style>
