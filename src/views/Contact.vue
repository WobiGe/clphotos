<template>
  <div id="contact">
    <ContactPage/>
    <ContactForm/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ContactPage from '@/components/ContactPage.vue'; // @ is an alias to /src
import ContactForm from '@/components/ContactForm.vue'

@Options({
  components: {
    ContactPage,
    ContactForm
  },
})
export default class Contact extends Vue {}
</script>