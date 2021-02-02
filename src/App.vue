<template>
  <div id="nav" class="grid-container">
    <div class="header-zone">
      <NavComponent/>
    </div>
    <div class="page-zone">
      <router-view/>
    </div>
    <div class="footer-zone">
      <FooterComponent/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.01fr 1fr 0.05fr;
  gap: 0px 0px;
  height: 100vh;
  background-color: #a4a592;
}

.header-zone{
  grid-row: 1;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
}

.page-zone{
  grid-row: 2;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.footer-zone{
  grid-row: 3;
  background-color: #a4a592;
  max-height: 50px;
  box-shadow: 0 -5px 6px rgba(0,0,0,0.2);
  position: relative;

}
.page-zone::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FooterComponent from '@/components/FooterComponent.vue'; // @ is an alias to /src
import NavComponent from '@/components/NavComponent.vue';

@Options({
  components: {
    FooterComponent,
    NavComponent,

  },
})
export default class App extends Vue {

}
</script>