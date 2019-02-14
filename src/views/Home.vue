<template>
  <main class="Home">
    <Banner />
    <Speakers />
  </main>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import Speakers from "@/components/Speakers/Speakers.vue";

export default {
  name: 'home',
  components: {
    Banner,
    Speakers,
  }
}
</script>
