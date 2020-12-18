<template>
  <div id="nav" class="grid-container" style="backgroundImage: ">
    <div class="header-zone">
      <router-link to="/">Startseite</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/aboutme">Über mich</router-link> |
      <router-link to="/contact">Kontakt</router-link>
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
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1fr 0.1fr;
  gap: 0px 0px;
  background-image: url('~@/assets/nature.jpg');
  background-size: cover;
  height: 100vh;
}

.header-zone{
  grid-row: 1;
  outline-color: 2px dotted green;
}

.page-zone{
  grid-row: 2;
}

.footer-zone{
  grid-row: 3;
}

</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FooterComponent from '@/components/FooterComponent.vue'; // @ is an alias to /src

@Options({
  components: {
    FooterComponent,
  },
})
export default class App extends Vue {}
</script>