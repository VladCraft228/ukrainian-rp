<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <transition name="drop-in">
        <div class="vue-modal-inner" v-show="open">
          <div class="vue-modal-content">
            <slot />
            <button type="button" @click="$emit('close')">Close</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { onMounted, onUnmounted} from "vue";

export default {
  props: {
    open: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  display: flex;
  position: fixed;
  width: 80vw;
  top: 0;
  left: 20vw;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
}

.vue-modal-inner {
  max-width: 600px;
  margin: 2rem auto;
}

.vue-modal-content {
  text-align: justify;
  position: relative;
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>