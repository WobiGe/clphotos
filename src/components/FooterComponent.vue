<template>
    <div>
        <div class="logos">
            <a target="_blank" ref="test" href="https://www.instagram.com/cynthia.lipprt/">
                <img src="@/assets/instagram_logo.svg" alt="instagram">
            </a>
            <a target="_blank" href="https://m.facebook.com/profile.php?id=100005253285248">
                <img src="@/assets/facebook_logo.svg" alt="facebook">
            </a>
        </div>
    </div>
</template>

<style scoped>
    .logos{
        margin-top: 0.25%;
        margin-right: 0.25%;
    }
    img{
        height: 32px;
        width: 32px;
        float: right;
        margin-right: 1%;
        margin-bottom: 0.25%;
    }
</style>

<script lang="ts">
import {Vue} from 'vue-class-component'
export default class FooterComponent extends Vue{
}
</script>