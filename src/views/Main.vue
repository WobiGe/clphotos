<template>
  <div>
      <MainPage/>
      <ContactForm/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPage from '@/components/MainPage.vue'; // @ is an alias to /src
import ContactForm from '@/components/ContactForm.vue'

@Options({
  components: {
    MainPage,
    ContactForm
  },
})
export default class Main extends Vue {
  
}
</script>
