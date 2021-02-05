<template>
  <div>
    <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <h2 class="modal__title">Vollbildansicht</h2>
      <div class="modal__content">
          <img class="fullscreen" :src="img">
      </div>
      <div class="modal__action">
        <button class="btn-sm btn-dark modal__close" type="button" @click="showModal = false">x</button>
      </div>
    </vue-final-modal>
  </div>
</template>

<style scoped>


.fullscreen{
    width: 100vw;
    height: 100vh;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    -o-object-fit: contain;
    object-fit: contain;
  overflow: auto;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0rem 0rem 0rem 0rem;

  background-color: transparent;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
  color: black;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
</style>


<script lang="ts">
import {Vue} from 'vue-class-component'

export default class ImagePreview extends Vue{
    showModal = false;
    img = "";
}
</script>