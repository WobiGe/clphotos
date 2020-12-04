<template>
  <div id="portfolio">
    <PortfolioPage/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PortfolioPage from '@/components/PortfolioPage.vue'; // @ is an alias to /src

@Options({
  components: {
    PortfolioPage,
  },
})
export default class Portfolio extends Vue {}
</script>