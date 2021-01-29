<template>
    <div>
        <div style="display: inline-flex;" v-if="imagesLoaded">
            <div v-for="categorie in categories" :key="categorie">
                <p>{{categorie.name}}</p>
                <div v-for="image in categorie.images" :key="image">
                    <img style="width: 20%; height: 20%;"  v-bind:src="image">
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {getAllImages} from '@/firebase';
export default class PortfolioPage extends Vue{
    private categories: [{}] = [{}];
    private imagesLoaded: boolean = false;

    async beforeMount(){
        this.categories = await getAllImages();
        this.waitForImages();
    }

    waitForImages(){
        setTimeout(()=>{
                this.imagesLoaded = true;
        }, 1000)
    }
}

</script>