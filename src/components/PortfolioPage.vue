<template>
    <div>
        <div v-if="imagesLoaded">
            <div v-for="categorie in categories" :key="categorie">
                <p v-if="categorie.images.length > 0">{{categorie.name}}</p>
                <vueper-slides
                    v-if="categorie.images.length > 0"
                    slide-multiple
                    fixed-height="500px"
                    fixed-width="500px"
                    :dragging-distance="70"
                    :visible-slides="3"
                    :arrows="true" 
                    :touchable="true" 
                    :bullets="false">
                    <vueper-slide
                    v-for="img in categorie.images" 
                    :key="img" 
                    :image="img"
                    ref="testRef"
                    @dblclick="showFull($refs.imagePreviewModal, img)"/>
                </vueper-slides>
            </div>
        </div>
    </div>
    <ImagePreview ref="imagePreviewModal"/>
</template>

<style>
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
        imagePreviewModal.showModal = !imagePreviewModal.showModal;
        imagePreviewModal.img = img;
    }
}

</script>