<template>
  <div id="contact">
    <ContactPage/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ContactPage from '@/components/ContactPage.vue'; // @ is an alias to /src

@Options({
  components: {
    ContactPage
  },
})
export default class Contact extends Vue {}
</script>