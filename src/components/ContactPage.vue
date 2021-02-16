<template>
    <div>
        <h1>Kontakt</h1>
        <div style="display: inline-flex; margin-top:8%" >
        <figure>   
            <a target="_blank" href="https://m.facebook.com/profile.php?id=100005253285248"><img src="@/assets/facebook_logo.svg" alt="facebook" class="logo-size"></a>
            <figcaption>
                Schreib mir auf Facebook
            </figcaption>
        </figure>
        <figure>
            <img src="@/assets/letter_logo.svg" alt="email" class="logo-size">
            <figcaption>
                Buche einen Termin
            </figcaption>
            <ContactForm style="text-align:center; margin-top:5%"/>
        </figure>
                <figure>
            <a target="_blank" href="https://www.instagram.com/cynthia.lipprt/"><img src="@/assets/instagram_logo.svg" alt="instagram" class="logo-size"></a>
            <figcaption>
                Schreib mir auf Instagram
            </figcaption>
        </figure>
        </div>
    </div>
</template>

<style scoped>

figcaption{
    color: black;
    font-family: "Metropolis-Regular";
    font-size: 28px;
}

figure{
    width: 80%;
}

h1{
    margin-top: 2rem;
    font-family: "OdstemplikBold-ZOPz";
    font-size: 48px;
    color:black;
}

.logo-size{
    width: 256px;
    margin-bottom: 10%;
    filter: invert(69%) sepia(16%) saturate(250%) hue-rotate(24deg) brightness(94%) contrast(85%);
}

</style>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import ContactForm from '@/components/ContactForm.vue';

@Options({
    components:{
        ContactForm
    }
})

export default class ContactPage extends Vue{
    showModal = false;
}
</script>