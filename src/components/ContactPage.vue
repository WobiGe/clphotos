<template>
    <div>
        <h1>Kontakt!</h1>
        <div class="grid-container-contact">
            <div class="grid-infos">
                <img class="profile" src="@/assets/nature.jpg">
            </div>
            <div class="grid-logo">
                <ContactForm/>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1{
    margin-top: 2rem;
    font-family: Metropolis-Regular;
    color:black;
}

.grid-container-contact{
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 1fr;
  gap: 1px;
  height: 80vh;
}

.grid-infos{
    margin: 5rem;
    grid-column: 1 / 2;
}

p{
    font-family: Metropolis-Regular;
}

.grid-logo{
    margin-top: 15rem;
    margin-right: 5rem;
    grid-column: 2 / 2;
}

.profile{
    border-radius: 050%;
    height: 40rem;
    max-width: 40rem;
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