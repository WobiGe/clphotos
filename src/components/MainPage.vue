<template>
  <div class="intro">
      <h1>Cynthia Lippert Fotografie</h1>
      <h4>Gemeinsam unvergessliche Momente erleben und festhalten</h4>
        <ContactForm style='display: inline-block; margin-right:15px'/>
        <button class="btn btn-dark" style='font-size: 28px' @click="redirectAboutMe">Über mich</button>
  </div>
    <vueper-slides
      lazy
      autoplay  
      class="no-shadow pic" 
      fixed-height="90vh"
      :dragging-distance="5"
      :touchable="true"
      :parallax="1" 
      :bullets="false">
      <vueper-slide 
        :style="'color: black; background-color: #a4a592'" 
        v-for="slide in slides" :key="slide" :image="slide.image" />
    </vueper-slides>
</template>

<style>


.intro {
  text-align: center;
  position: absolute ;
  width: 400px;
	top: 400px;
	bottom: 350px;
	left: 0;
	right: 0;
  margin: auto;
  z-index: 1;
}

.vueperslides__arrow{
  color: #a4a592;
  padding-left: 5%;
  padding-right: 5%;
}

.pic{
  z-index: 0;
  filter: brightness(60%) contrast(90%);
}

.main-color{
  background-color: #a4a592;
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
  slides: [{}] = [{image: require('@/assets/pic_11.jpg')}];

  async beforeMount(){
    let someVal: any;
    this.imgUrl = await getImage();  
    this.slides.push(
    { image: this.imgUrl }
      )
    }

    redirectAboutMe(){
      router.push({name: 'About'})
  }
}
</script>