<template>
  <div class="home">
      <img class="city" src="../assets/city.jpg" alt="">
    <div class="image-text">
      <h1>Ukrainian Role Play - НАЙКРАЩИЙ УКРАЇНСЬКИЙ СЕРВЕР В SAMP ІНДУСТРІЇ.</h1>
      <button class="btn" @click="isOpen = true">ПОЧАТИ ГРУ</button>
      <Modal :open="isOpen" @close="isOpen = !isOpen">
        <h2>Для початку гри</h2>
        <p>Потрібно завантажити GTA SA і SAMP (Якщо у вас встановлена GTA SA і є мультиплеєрний клієнт SA-MP – то завантажувати непотрібно)</p>
        <div class="download">
          <a href="../../gta_for_samp.torrent"><img class="gtasa" src="../assets/gtasa.jpg"></a>
          <a href="../assets/samp_client_install.torrent"><img class="samp" src="../assets/samp-0-3-7-multipleer.jpg"></a>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
import { ref } from "vue"
import Modal from "@/components/Modal";
export default {
  components: { Modal },
  setup () {
    const isOpen = ref(false)


    return { isOpen }
  }
}
</script>
<style>
.city {
  width: 100%;
  filter: blur(2px);
  mix-blend-mode: hard-light;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px
}

.image-text {
  text-align: center;
  position: absolute;
  width: 60vw;
}

.btn {
  cursor: pointer;
  color: black;
  background-color: gray ;
  font-size: 18pt;
  font-weight: bold;
  border-radius: 20px;
  padding: 20px;
}

.download {
  display: flex;
  flex-direction: row;
}

.gtasa {
  width: 50%;
}

.samp {
  width: 50%;
}
@media screen and (max-width: 988px) {
  .image-text {
    font-size: 2vw;
  }
  .home {
    justify-content: flex-start;
    padding: 0;
  }
}

</style>