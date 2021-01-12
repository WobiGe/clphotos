<template>
  <div class="intro">
    <button @click="test123"></button>
      <p>Cynthia Lippert Fotografie</p>
      <p>Gemeinsam unvergessliche Momente erleben und festhalten</p>
        <ContactForm style='display: inline-block; margin-right:15px'/>
        <button class="btn btn-dark" @click="redirectAboutMe">Über mich</button>
  </div>
    <vueper-slides :bullets="false" class="no-shadow pic" fixed-height="90vh" autoplay>
      <vueper-slide :style="'color: black'" v-for="slide in slides" :key="slide" :image="slide.image" />
    </vueper-slides>
</template>

<style>

.intro {
  text-align: center;
  position: absolute ;
  width: 400px;
	top: 500px;
	bottom: 0;
	left: 0;
	right: 0;
  margin: auto;
  z-index: 1;
}
.vueperslides__arrow{
  color: white;
}
.pic{
  z-index: 0;
  filter: brightness(60%) contrast(90%);
}

.main-color{
  background-color: #a4a592;;
}
</style>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import ContactForm from '@/components/ContactForm.vue'
import router from '@/router'
import {getImage} from '@/firebase';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

@Options({
  components: {
    MainPage,
    ContactForm,
    VueperSlide,
    VueperSlides
  },
})

export default class MainPage extends Vue{
  imgUrl: string = "";
  slides: [{}] = [{}];

  async beforeMount(){
    let someVal: any;
    this.imgUrl = await getImage();
  this.slides.push(
    {image: this.imgUrl})
  }
  redirectAboutMe(){
    router.push({name: 'About'})
  }
}
</script>