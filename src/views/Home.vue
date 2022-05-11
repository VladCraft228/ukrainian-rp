<template>
  <div class="home">
    <div class="home-inner">
      <div class="start">
        <img class="image" alt="statue" src="../assets/city.jpg">
        <div class="image-text">
          <h1>Ukrainian Role Play - найкращий український сервер в SA-MP індустрії.</h1>
          <button id="btn" @click="isOpen = true">Почати гру</button>
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
                  <img src="../assets/gtasa.jpg" alt="gta+samp">
                  <div class="download-text">
                    <h2>GTA SA + SA-MP</h2>
                  </div>
                  <div class="download-link">
                    <a class="material-icons" href="/files/gta_for_samp.torrent" download>
                      <span class="material-symbols-rounded">download_for_offline</span><p>Завантажити</p>
                    </a>
                  </div>
                </div>
                <div class="download-content">
                  <img src="../assets/samp-0-3-7-multipleer.jpg" alt="samp">
                  <div class="download-text">
                    <h2>SA-MP (без GTA SA)</h2>
                  </div>
                  <div class="download-link">
                    <a class="material-icons" href="/files/samp_client_install.torrent" download>
                      <span class="material-symbols-rounded">download_for_offline</span><p>Завантажити</p>
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
              <h2>Запуск та налаштування SA-MP клієнта</h2>
              <p>SAMP можна запустити з робочого столу завдяки ярлику або з кореневої папки. Перед вами має з'явитися вікно:</p>
              <div class="samp-launcher">
                <img src="../assets/launcher-samp.png" alt="samp-launcher">
              </div>
              <ul class="icon-designation">
                <li>
                  <p class="material-icons"><span class="material-symbols-rounded">play_circle</span></p>
                  <p>підключитися до сервера</p>
                </li>
                <li>
                  <p class="material-icons"><span class="material-symbols-rounded">check_circle</span></p>
                  <p>додати новий сервер</p>
                </li>
                <li>
                  <p class="material-icons"><span class="material-symbols-rounded">cancel</span></p>
                  <p>видалити сервер</p>
                </li>
                <li>
                  <p class="material-icons"><span class="material-symbols-rounded">change_circle</span></p>
                  <p>оновити сервер</p>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </div>
      <div class="server">
        <h1>Список серверів</h1>
      <div class="server-list">
        <div class="server-bar">
          <h3>Kyiv</h3>
          <p>Заповненість: </p>
          <div class="bar">
            <div class="progress" style="width: 100%;"><p>100%</p></div>
          </div>
          <p>IP: <a>Скоро...</a></p>
        </div>

        <div class="server-bar">
          <h3>Dnipro</h3>
          <p>Заповненість: </p>
          <div class="bar">
            <div class="progress" style="width: 50%;"><p>50%</p></div>
          </div>
          <p>IP: <a>Скоро...</a></p>
        </div>

        <div class="server-bar">
          <h3>Lviv</h3>
          <p>Заповненість: </p>
          <div class="bar">
            <div class="progress" style="width: 20%;"><p>20%</p></div>
          </div>
          <p>IP: <a>Скоро...</a></p>
        </div>

        <div class="server-bar">
          <h3>Odessa</h3>
          <p>Заповненість: </p>
          <div class="bar">
            <div class="progress" style="width: 62%;"><p>62%</p></div>
          </div>
          <p>IP: <a>Скоро...</a></p>
        </div>


      </div>
      </div>
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

.home {
  display: flex;
  border-radius: 20px;
  width: 100%;
  height: 95%;
  background: #09189a;
  margin: 20px;
}

.home-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  overflow-y: auto;
}
.start {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
}
.image {
  width: 50%;
  border-radius: 20px;
}
.image-text {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-left: 20px;
  width: 50%;
  flex-direction: column;
}

#btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #005AFF;
  background-color: #FCFF00 ;
  font-weight: bold;
  border-radius: 20px;
  padding: 1vw;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  border-style: hidden;
}

#btn:active {
  box-shadow: 0 6px 4px rgb(0 0 0 / 45%);
  transform: translateY(3px);
  transition: all .10s ;
}

#btn .material-symbols-rounded {
  background: #FCFF00;
  border-radius: 20px;
  font-size: 1.5vw;
  color: #005AFF;
}

.modal-text {
  padding: 0 20px;
  text-align: justify;
}

.download {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.download-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-content img {
  margin: 20px 0;
  max-width: 15vw;
  border-radius: 20px;
}

.download-text {
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: space-around;
}

.download-link {
  display: flex;
  border-radius: 20px;
}

.download-link a {
  display: flex;
  margin: 0;
  width: 100%;
  text-decoration: none;
  align-items: center;
}

.download-link:active{
  transform: translateY(3px);
  transition: all .10s ;
}

.material-icons p{
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #FCFF00;
  margin-left: 1em;
}

.samp-launcher {
  display: flex;
  justify-content: center;
  border-radius: 20px;
}

.samp-launcher img {
  max-width: 100%;
  border-radius: 20px;
}

.icon-designation {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: 10px;
  padding: 0;
}

.icon-designation li {
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.material-symbols-rounded {
  font-size: 3vw;
  color: #FCFF00;
}

.server {
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
}

.server-list {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.server-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #080c74;
  padding: 20px;
  border-radius: 20px;
  width: 15%;
}

.server-bar p{
  margin-block-end: 0;
}

.progress {
  background-color: #005AFF;
  border-radius: 20px;
  text-align: center;
}

.bar {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  background: #09189a;
}

@media screen and (min-width: 1440px) {
  #btn .material-symbols-rounded {
    background: #FCFF00;
    border-radius: 20px;
    font-size: 0.8vw;
    color: #005AFF;
  }

  .material-symbols-rounded {
    font-size: 3vw;
    color: #FCFF00;
  }

  .progress p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
}

@media screen and (max-width: 1440px) {
  #btn .material-symbols-rounded {
    background: #FCFF00;
    border-radius: 20px;
    font-size: 1.5vw;
    color: #005AFF;
  }

  .material-symbols-rounded {
    font-size: 4vw;
  }

  .progress p {
    font-size: 1vw;
    margin-block-start: 5px;
    margin-block-end: 5px;
  }
}

@media screen and (max-width: 988px) {
  .home {
    margin: 0;
    background: none;
  }

  .home-inner {
    padding: 0;
    margin: 20px;
  }

  .start {
    flex-direction: column;
    align-items: center;
  }

  .image {
    width: 50%;
  }

  .download-content img {
    max-width: 50%;
  }

  .image-text {
    width: 100%;
    margin-left: 0;
  }

  .modal-text {
    width: 100%;
    padding: 0;
  }

  .material-symbols-rounded {
    font-size: 60px;
  }

  .download {
    flex-direction: column;
  }

  .download-link p {
    display: none;
  }

  .download-link a {
    justify-content: center;
  }

  #btn {
    padding: 10px;
  }

  #btn .material-symbols-rounded {
    font-size: 30px;
  }

  .icon-designation {
    flex-direction: column;
    align-items: center;
  }

  .bar {
    width: 95%;
  }

  .progress p {
    font-size: 20px;
    margin-block-start: 10px;
    margin-block-end: 10px;
  }

  .server-list {
    flex-direction: column;
  }

  .server-bar {
    margin: 20px 0;
    padding: 20px 0;
    width: 100%;
  }
}

</style>