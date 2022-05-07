<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <transition name="drop-in">
        <div class="vue-modal-inner" v-show="open">
          <div class="vue-modal-content">
            <slot />
            <div class="vue-modal-footer">
              <button type="button" id="btn" class="material-icons" @click="$emit('close')">
                <span class="material-symbols-rounded">close</span>
              </button>
            </div>
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
  top: 5vh;
  left: 20vw;
  bottom: 5vh;
  z-index: 1;
}

.vue-modal-inner {
  max-width: calc(80vw - 256px);
  margin: 2rem auto;
}

.vue-modal-content {
  display: flex;
  height: 100%;
  overflow-y: auto;
  position: relative;
  background-color: #080c74;
  border-radius: 20px;
  padding: 10px;
  align-items: flex-end;
  flex-direction: column;
}

.vue-modal-footer {
  display: flex;
  position: sticky;
  bottom: 0;
  border-radius: 20px;
  width: 100%;
  justify-content: flex-end;
}

@media screen and (max-width: 988px) {
  .vue-modal {
    left: 10vw;
  }
  .vue-modal-inner {
    max-width: 100%;
  }
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