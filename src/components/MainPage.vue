<template>
  <div class="intro">
      <p>Cynthia Lippert Fotografie</p>
      <p>Gemeinsam unvergessliche Momente erleben und festhalten</p>
        <ContactForm style='display: inline-block; margin-right:15px'/>
        <button class="btn btn-dark">Über mich</button>
  </div>
</template>

<style>

.intro {
  text-align: center;
  color: white;
	width: 500px;
	height: 250px;
	position: absolute;
	top: 200px;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
</style>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import ContactForm from '@/components/ContactForm.vue'

@Options({
  components: {
    MainPage,
    ContactForm
  },
})

export default class MainPage extends Vue{

}
</script>