<template>
    <div>
      <img src="@/assets/CL_Logo.png" style="float: left; margin-left: 1%; height: 3rem;">
      <nav id="navi">
        <router-link :style="{color: defaultColor}" to="/contact">Kontakt</router-link>
        <router-link :style="{color: defaultColor}" to="/aboutme">Über mich</router-link> 
        <router-link :style="{color: defaultColor}" to="/portfolio">Portfolio</router-link> 
        <keep-alive>
        <router-link :style="{color: defaultColor}" to="/">Startseite</router-link> 
        </keep-alive>
      </nav>
    </div>
</template>

<style scoped>

h1{
  float: left;
}

#navi{
  padding-right: 50px;
  max-height: 50px;
}

#navi a {
  font-weight: bold;
  color: white;
  padding: 15px;
  float: right;
  font-family: "Metropolis-Regular"
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>

<script lang="ts">
import { Watch } from 'vue-property-decorator';
import {Vue} from 'vue-class-component'
export default class NavComponent extends Vue{
  defaultColor = 'white';
  @Watch('$route', {immediate: true, deep: true})
     onUrlChange() {
      this.defaultColor = this.$router.currentRoute.value.name === "Main" ? 'white': 'black';
    }
}
</script>