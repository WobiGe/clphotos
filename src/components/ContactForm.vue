<template>
  <div>
    <form name="form_contact">
    <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <h2 class="modal__title">Termin buchen</h2>
      <div class="modal__content">
        <div class="form-group" style="text-align: left;">
          <label style="margin-bottom: 0px">Betreff:</label>
          <input v-model="caption" style="margin-bottom: 8px" class="form-control" type="text" :minlength="validation.min" required>
          <!-- <div style="font-family: Metropolis-Regular; font-size: 12px; color: red" v-if="caption.length < validation.min">Bitte mindestens {{validation.min}} Zeichen eingeben</div> -->
          <label style="margin-bottom: 0px">E-Mail:</label>
          <input id="email" v-model="emailAdress" style="margin-bottom: 8px" class="form-control" type="email" required>
          <label style="margin-bottom: 0px">Ihre Nachricht:</label>
          <textarea v-model="message" style="margin-bottom: 8px" class="form-control message-area" :minlength="validation.min_message" :maxlength="validation.max" required/>
          <!-- <div style="font-family: Metropolis-Regular; font-size: 12px; color: red" v-if="message.length < validation.min_message">Bitte mindestens {{validation.min_message}} eingeben</div> -->
          <!-- <div style="font-family: Metropolis-Regular; font-size: 12px; color: red" v-if="message.length > validation.max">Bitte nicht mehr als {{validation.max}} Zeichen eingeben</div> -->
          <p style="font-family: Metropolis-Regular; font-size: 12px; color: red">{{errorMsg}}</p>
          </div>
      </div>
      <div class="modal__action">
        <button class="btn-sm btn-dark modal__close" type="button" @click="showModal = false">x</button>
        <button @click.stop.prevent="sendMessage()" class="btn btn-dark" type="submit" :disabled="!isEmailValid" >Abschicken</button>
      </div>
      <div class="footer_color"></div>
    </vue-final-modal>
      <button class="btn btn-dark book" type="button" style='font-size: 28px' @click="showModal = true" >Buchen</button>
    </form>
  </div>
</template>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  max-width: 50%;
  margin: 0 1rem;
  padding: 1rem 0rem 0rem 0rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.footer_color{
   background-color: #999B84;
   height: 25px;
   width: 100%;
   padding: 0rem;
   margin-top: 10px;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
  color: black;
  margin-left: 1rem;
  margin-right: 1rem;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.message-area {
  min-height: 250px;
}

.book{
  background-color: #BF7A68 !important;
  border-radius: 8px !important;
  font-family: 'Metropolis-Regular';
  text-transform: uppercase;
  width: 250px;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import emailjs from 'emailjs-com';
import { Watch } from 'vue-property-decorator';
export default class ContactForm extends Vue{
    showModal = false;
    private validation = {
      min: 8,
      min_message: 32,
      max: 500
    }

    emailAdress = "";
    caption = "";
    message = "";
    errorMsg = "";
    isEmailValid = false;

    sendMessage(){
      if(this.emailAdress !== "" && this.message !== "" && this.caption !== ""){
          emailjs.send(process.env.VUE_APP_SERVICEID,process.env.VUE_APP_TEMPLATEID,
          {
            from_name: this.emailAdress,
            message: this.caption+"\n"+this.message
          },process.env.VUE_APP_USERID)
          this.errorMsg = "";
          this.showModal = false;
        }else{
          this.errorMsg = "Bitte überprüfen Sie Ihre Eingabe!";
        }
      }
     @Watch('emailAdress', {immediate: true, deep: true})
     emailValid() {
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailAdress)){
        this.isEmailValid = true;
      }else{
        this.isEmailValid = false;
      }
    }
}
      
</script>