<template>
    <div>
        <h1>Über mich!</h1>
        <div class="grid-container-aboutme">
            <div class="grid-pic">
                <img class="profile" src="@/assets/Profile_3.jpeg">
            </div>
            <div class="grid-text">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1{
    margin-top: 2rem;
    font-family: Metropolis-Regular;
    color:black;
}

.grid-container-aboutme{
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 1fr;
  gap: 1px;
  height: 80vh;
}

.grid-pic{
    margin: 5rem;
    grid-column: 1 / 2;
}

p{
    font-family: Metropolis-Regular;
}

.grid-text{
    margin-top: 13rem;
    margin-right: 5rem;
    grid-column: 2 / 2;
}

.profile{
  width: 600px;
  height: 600px;
  object-fit:cover;
  border-radius: 50%;
}



</style>

<script lang="ts">
import {Vue} from 'vue-class-component'
export default class AboutMe extends Vue{

    test(){
        alert("test");
    }
}
</script>