<template>
  <main class="Home">
    <Banner />
  </main>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";

export default {
  name: 'home',
  components: {
    Banner
  }
}
</script>
