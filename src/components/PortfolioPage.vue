<template>
    <div>
        <div v-if="imagesLoaded">
            <div v-for="categorie in categories" :key="categorie">
                <p v-if="categorie.images.length > 0">{{categorie.name}}</p>
                <vueper-slides
                    style="margin-left:2%; margin-right:2%;   max-width: 100%; overflow-x: hidden;"
                    v-if="categorie.images.length > 0"
                    slide-multiple
                    fixed-height="300px"
                    fixed-width="500px"
                    :infinite="true"
                    :gap="3"
                    :dragging-distance="70"
                    :visible-slides="5"
                    :arrows="true" 
                    :touchable="true" 
                    :bullets="false"
                    @previous="logEvent(true,$event)"
                    @next="logEvent(true,$event)">
                    <vueper-slide
                    v-for="img in categorie.images" 
                    :key="img" 
                    :image="img"
                    class="highlight"
                    @click="showFull($refs.imagePreviewModal, img)"/>
                </vueper-slides>
            </div>
        </div>
    </div>
    <ImagePreview ref="imagePreviewModal"/>
</template>
<style>

.vueperslides__arrow{
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}

.highlight:hover{
    filter: brightness(130%);
    cursor: pointer;
}

p{
    color:black;
    font-family: "OdstemplikBold-ZOPz";
    font-size: 28px;
}

</style>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import ImagePreview from '@/components/ImagePreview.vue';
import {getAllImages} from '@/firebase';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

@Options({
  components: {
    VueperSlide,
    VueperSlides,
    ImagePreview
  },
})

export default class PortfolioPage extends Vue{
    private categories: [{}] = [{}];
    private imagesLoaded: boolean = false;
    showFullScreen: boolean = false;
    selectedImage: any = "";
    switchedSlide: boolean = false;

    async beforeMount(){
        this.categories = await getAllImages();
        this.waitForImages();
    }

    waitForImages(){
        setTimeout(()=>{
                this.imagesLoaded = true;
        }, 1000)
    }

    showFull(imagePreviewModal, img){
        if(!this.switchedSlide){
            imagePreviewModal.showModal = !imagePreviewModal.showModal;
            imagePreviewModal.img = img;
        }
        this.switchedSlide = false;
    }

    logEvent(slideMode, event){
        this.switchedSlide = slideMode;
    }
}

</script>