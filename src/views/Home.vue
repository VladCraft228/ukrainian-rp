<template>
  <div class="home">
      <img class="city" src="../assets/city.jpg" alt="">
    <div class="image-text">
      <h1>Ukrainian Role Play - НАЙКРАЩИЙ УКРАЇНСЬКИЙ СЕРВЕР В SAMP ІНДУСТРІЇ.</h1>
      <button id="btn" @click="isOpen = true">ПОЧАТИ ГРУ</button>
      <Modal :open="isOpen" @close="isOpen = !isOpen">
        <div class="modal-text">
          <h2>Необхідні файли</h2>
          <p>Потрібно завантажити GTA SA і SA-MP</p>
          <ul class="download-conditions">
            <li>Якщо у вас нічого не встановлено - завантажувати 1-ий файл</li>
            <li>Якщо у вас встановлена GTA SA і нема мультиплеєрного клієнту SA-MP – завантажувати 2-ий файл</li>
            <li>Якщо у вас встановлена GTA SA і є мультиплеєрний клієнт SA-MP – то завантажувати нічого непотрібно</li>
          </ul>
        <div class="download">
          <div class="download-content">
            <img class="gtasa" src="../assets/gtasa.jpg" alt="gta+samp">
            <div class="download-text">
              <h2>GTA SA + SA-MP</h2>
            </div>
            <div class="download-link">
              <a class="material-icons" href="https://drive.google.com/file/d/1NdMQ5POiY8sx7o0p1he94_pLgAp-jqiv">
                <span class="material-symbols-outlined">file_upload</span>
              </a>
            </div>
          </div>
          <div class="download-content">
            <img class="samp"  src="../assets/samp-0-3-7-multipleer.jpg" alt="samp">
            <div class="download-text">
            <h2>SA-MP (без GTA SA)</h2>
            </div>
            <div class="download-link">
              <a class="material-icons" href="https://drive.google.com/file/d/1Y_JZNIcR9vVgnX19mulpnIxCT5rb8PNg">
                <span class="material-symbols-outlined">file_upload</span>
              </a>
            </div>
          </div>
        </div>
          <h2>Встановлення SA-MP клієнта</h2>
          <ol class="samp-install">
            <li>Відкрийте скачаний SA-MP клієнт</li>
            <li>У вікні погодитеся з умовами натиснувши “I Agree”</li>
            <li>Вкажіть папку зі встановленою GTA San Andreas і натисніть “Install”</li>
            <li>Установка займе приблизно 4 секунди</li>
          </ol>
          <h2>Запуск та налаштування SAMP клієнта</h2>
          <p>SAMP можна запустити з робочого столу завдяки ярлику або з кореневої папки. Перед вами має з'явитися вікно:</p>
          <img class="samp-launcher" src="../assets/launcher-samp.png" alt="samp-launcher">
          <ul class="icon-designation">
            <li>
              <p class="material-icons"><span class="material-symbols-outlined">play_circle</span></p>
              <p>підключитися до сервера</p>
            </li>
            <li>
              <p class="material-icons"><span class="material-symbols-outlined">check_circle</span></p>
              <p>додати новий сервер</p>
            </li>
            <li>
              <p class="material-icons"><span class="material-symbols-outlined">cancel</span></p>
              <p>видалити сервер</p>
            </li>
            <li>
              <p class="material-icons"><span class="material-symbols-outlined">change_circle</span></p>
              <p>оновити сервер</p>
            </li>
          </ul>
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

#btn {
  cursor: pointer;
  color: #005AFF;
  background-color: #FCFF00 ;
  font-size: 16pt;
  font-weight: bold;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  border-style: hidden;
}

#btn:active {
  background: #cbce0a;
  box-shadow: 0 6px 4px rgb(0 0 0 / 45%);
  transform: translateY(3px);
  transition: all .10s ;
}

.modal-text {
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  padding: 0 10px;
}
.modal-text h2 {
  margin-top: 0;
  margin-bottom: 10px;
}
.modal-text p {
  margin: 10px 0;
}
.download {
  display: flex;
  flex-direction: column;
}

.download-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
}


.download-text {
  display: flex;
  width: 80%;
  text-align: justify;
  justify-content: space-around;
}

.download-link {
  display: flex;
}

.download-link a{
  background: #FCFF00;
  text-decoration: none;
  padding: 20px 30px;
  border-radius: 20px;
  color: #005AFF;
  text-align: center;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  border-style: hidden;
}
.download-link a:active{
  background: #cbce0a;
  box-shadow: 0 6px 4px rgb(0 0 0 / 45%);
  transform: translateY(3px);
  transition: all .10s ;
}

.gtasa {
  width: 128px;
  border-radius: 20px;
}

.samp {
  width: 128px;
  border-radius: 20px;
}

.samp-launcher{
  width: 100%;
  border-radius: 20px;
}
.samp-install {
  margin-top: 10px;
  font-size: 16pt;
  color: aliceblue;
  text-align: justify;
}

.download-conditions {
  margin-top: 10px;
  font-size: 16pt;
  color: aliceblue;
  text-align: justify;
}

.icon-designation {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: 10px;
  padding: 0;
  font-size: 16pt;
  color: aliceblue;
  text-align: justify;
}
.icon-designation li {
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-designation li p.material-icons{
  font-size: 36pt;
  color: #FCFF00;
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