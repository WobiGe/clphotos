<template>
  <div class="title">
      <h1>Cynthia Lippert Fotografie</h1>
      <h4>Gemeinsam unvergessliche Momente erleben und festhalten</h4>
      <br>
        <ContactForm style='display: inline-block; margin-right:15px'/>
        <button class="btn btn-dark aboutme" style='font-size: 28px' @click="redirectAboutMe">Über mich</button>
  </div>
    <vueper-slides
      lazy
      autoplay  
      class="no-shadow pic" 
      fixed-height="90vh"
      :touchable="false"
      :parallax="1" 
      :bullets="false">
      <vueper-slide 
        v-for="slide in slides" :key="slide" :image="slide.image" />
    </vueper-slides>
</template>

<style scoped>

h1{
  font-family: Metropolis-Regular;
  font-weight: bolder;
  font-size: 58px;
}

h4{
  font-family: OdstemplikBold-ZOPz;
  font-size: 32px;
}

.title {
  text-align: center;
  position: absolute ;
  max-width: 600px;
	top: 42vh;
	left: 0;
	right: 0;
  margin: auto;
  z-index: 1;
}
.pic{
  z-index: 0;
  filter: brightness(60%) contrast(90%);
}

.main-color{
  background-color: #a4a592;
}

.aboutme{
  background-color: #a4a592 !important;
  border-radius: 8px !important;
  font-family: 'Metropolis-Regular';
  text-transform: uppercase;
  width: 250px
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
    this.imgUrl = await getImage();  
    this.slides.push(
    { image: this.imgUrl }
      )
    }

    redirectAboutMe(){
      router.push({name: 'About'})
            console.log(process.env.VUE_APP_TESTI);
  }
}
</script>