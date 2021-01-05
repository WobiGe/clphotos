<template>
    <div>
        <div class="logos">
            <a ref="test" href="https://www.instagram.com/cynthia.lipprt/">
                <img src="@/assets/instagram_logo.svg" alt="instagram">
            </a>
            <a href="https://m.facebook.com/profile.php?id=100005253285248">
                <img src="@/assets/facebook_logo.svg" alt="facebook">
            </a>
        </div>
    </div>
</template>

<style>
    .logos{
        margin-right: 25px;
        margin-top: 5px;
    }
    img{
        height: 32px;
        width: 32px;
        float: right;
        margin-right: 10px;
    }
</style>

<script lang="ts">
import {Vue} from 'vue-class-component'
export default class FooterComponent extends Vue{
}
</script>