<template>
    <div>
        <h1>About me</h1>
        <button @click="test">Test</button>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import {Vue} from 'vue-class-component'
export default class AboutMe extends Vue{

    test(){
        alert("test");
    }
}
</script>