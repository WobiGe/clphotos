<template>
  <div>
    <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <h2 class="modal__title">Termin buchen</h2>
      <div class="modal__content">
        <div class="form-group" style="text-align: left;">
          <label style="margin-bottom: 0px">Betreff:</label>
          <input v-model="caption" style="margin-bottom: 8px" class="form-control" type="text">
          <label style="margin-bottom: 0px">E-Mail:</label>
          <input v-model="emailAdress" style="margin-bottom: 8px" class="form-control" type="email">
          <label style="margin-bottom: 0px">Ihre Nachricht:</label>
          <textarea v-model="message" style="margin-bottom: 8px" class="form-control message-area"/>
          </div>
      </div>
      <div class="modal__action">
        <button class="btn-sm btn-dark modal__close" type="button" @click="showModal = false">x</button>
        <button @click="sendMessage" class="btn btn-dark" type="button" :disabled="!emailAdress" >Abschicken</button>
      </div>
      <div class="footer_color"></div>
    </vue-final-modal>
    <button class="btn btn-dark book" style='font-size: 28px' @click="showModal = true">Buchen</button>
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
import {Vue} from 'vue-class-component'
import emailjs from 'emailjs-com';

export default class ContactForm extends Vue{
    private emailjsConfig = {
      serviceId: 'service_gjd73ws',
      templateId: 'template_ck1kpas',
      userId: 'user_IDxR8dysalYfB25UYm0u7'
    }
    showModal = false;
    emailAdress = "";
    caption = "";
    message = "";

    sendMessage(){
      emailjs.send(this.emailjsConfig.serviceId,this.emailjsConfig.templateId,
      {
          from_name: this.emailAdress,
          message: this.caption+"\n"+this.message
        }, this.emailjsConfig.userId)
}}
</script>