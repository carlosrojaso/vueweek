<template>
  <section class="Speakers">
    <div class="Speakers__header">
      <i class="Speakers__icon"></i>
      <h2 class="Speakers__title">Speakers</h2>
    </div>
    <div class="Speakers__cards">
      <div class="Speakers__cardsRow" v-for="(speakers, index) in speakerRows" :key="index">
        <article class="Speakers__card" v-for="speaker in speakers" :key="speaker.id">
          <h3 class="Speakers__cardTitle">
            {{speaker.name}}
          </h3>
          <div class="Speakers__cardImageContainer">
            <img :src="speaker.image_url" :alt="speaker.name + ' photograph'" class="Speakers__cardImage">
          </div>
          <div class="Speakers__cardContent">
            <p class="Speakers__cardText">
              {{speaker.description}}
            </p>
            <div class="Speakers__cardLinks">
              <a class="Speakers__cardLink fa fa-github" target="_blank" :href="speaker.github" v-if="speaker.github"></a>
              <a class="Speakers__cardLink fa fa-twitter" target="_blank" :href="speaker.twitter" v-if="speaker.twitter"></a>
              <a class="Speakers__cardLink fa fa-linkedin" target="_blank" :href="speaker.linkedin" v-if="speaker.linkedin"></a>
              <a class="Speakers__cardLink fa fa-facebook" target="_blank" :href="speaker.facebook" v-if="speaker.facebook"></a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script src="./Speakers.js"></script>
<style lang="scss" src="./Speakers.scss"></style>

