<template>
    <div>
        <h1>Über mich</h1>
        <div class="grid-container-aboutme">
            <div class="grid-pic">
                <img class="profile" src="@/assets/Profile_3.jpeg">
            </div>
            <div class="grid-text">
                <p class="aboutmetext">Mein Name ist Cynthia Lippert. Ich bin 20 Jahre alt und mache mein Hobby zu meinem Beruf. Ich habe einen pinguin-fetish, kuschel gerne mit meinem Freund und kann auch mal etwas versaut sein. Außerdem lache ich gerne über Pfirsiche :D</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1{
    margin-top: 2rem;
    font-family: "OdstemplikBold-ZOPz";
    font-size: 48px;
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
.aboutmetext{
    font-family: Metropolis-Regular;
    font-size: 28px;
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