<template>
  <div id="main">
      <MainPage/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPage from '@/components/MainPage.vue'; // @ is an alias to /src

@Options({
  components: {
    MainPage,
  },
})
export default class Main extends Vue {
}
</script>
