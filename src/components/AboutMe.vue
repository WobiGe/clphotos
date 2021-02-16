<template>
    <div>
        <h1>Über mich</h1>
        <div class="grid-container-aboutme">
            <div class="grid-pic">
                <img class="profile" src="@/assets/Profile_3.jpeg">
            </div>
            <div class="grid-text">
                <p class="aboutmetext"><b>Hallo ich bin Cynthia!</b><br>{{aboutMeText}}</p>
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

private aboutMeText = `
Als Hobbyfotografin habe ich es mir zur Aufgabe gemacht, euch zu begleiten und wunderschöne Momente für euch einzufangen. 

Egal ob Geburt, die große Liebe, die Verlobung und die Hochzeit oder auch die Familiengründung. 
Gerne sorge ich dafür, dass ihr mit einem Shooting, Momente für die Ewigkeit festhalten könnt. 

Dabei steht immer ihr und eure Emotionen im Mittelpunkt! 

Lasst uns gemeinsam wunderschöne Erinnerungen nach euren Wünschen schaffen!`
}
</script>