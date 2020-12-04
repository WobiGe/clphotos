<template>
  <div id="aboutme">
    <AboutMe/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AboutMe from '@/components/AboutMe.vue'; // @ is an alias to /src

@Options({
  components: {
    AboutMe,
  },
})
export default class About extends Vue {}
</script>