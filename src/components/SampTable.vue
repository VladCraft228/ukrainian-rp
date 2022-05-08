<template>
    <div class="samp-table">
      <div class="samp-info">
        <div class="samp-logo">
          <img alt="" src="../assets/samp-0-3-7-multipleer.jpg">
        </div>
        <div class="short-info">
          <div class="short-info-inner">
            <table>
              <tr>
                <td><p>Тип</p></td>
                <td><p>Модифікація</p></td>
              </tr>
              <tr>
                <td><p>Автор(и)</p></td>
                <td><p>Kalcor (Kye), Spookie</p></td>
              </tr>
              <tr>
                <td><p>Розробник</p></td>
                <td><p>SA-MP Team</p></td>
              </tr>
              <tr>
                <td><p>Перший випуск</p></td>
                <td><p>0.1 (10 травня 2006)</p></td>
              </tr>
              <tr>
                <td><p>Стабільний випуск</p></td>
                <td><p>0.1 (10 травня 2006)</p></td>
              </tr>
              <tr>
                <td><p>Нестабільний випуск</p></td>
                <td><p>0.3.7 (1 травня 2015 <br> 6 років тому[1])</p></td>
              </tr>
              <tr>
                <td><p>Нестабільний випуск</p></td>
                <td><p>0.3.DL (25 січня 2018 <br> 3 роки тому[2])</p></td>
              </tr>
              <tr>
                <td><p>Платформа</p></td>
                <td><p>Багатоплатформність</p></td>
              </tr>
              <tr>
                <td><p>Операційна система</p></td>
                <td><p>Windows <br> Linux (тільки ігровий сервер)</p></td>
              </tr>
              <tr>
                <td><p>Мова програмування</p></td>
                <td><p>Pawn</p></td>
              </tr>
              <tr>
                <td><p>Розмір</p></td>
                <td><p>15,5 МБ (0.3.7) <br> 14,9 МБ (0.3.DL)</p></td>
              </tr>
              <tr>
                <td><p>Доступні мови</p></td>
                <td><p>Англійська</p></td>
              </tr>
              <tr>
                <td><p>Стан розробки</p></td>
                <td><p>Активний</p></td>
              </tr>
              <tr>
                <td><p>Ліцензія</p></td>
                <td><p>Вільна</p></td>
              </tr>
              <tr>
                <td><p>Вебсайт</p></td>
                <td><a href="https://www.sa-mp.com/">sa-mp.com</a></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: "SampTable"
}
</script>

<style scoped>
.samp-table {
  display: flex;
  width: 25%;
  border-radius: 20px;
  margin-left: 20px;
}

.samp-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  word-break: break-word;
  overflow-y: auto;
  justify-content: space-between;
}
.samp-logo {
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  background: #09189a;
  border-radius: 20px;
}

.samp-logo img{
  border-radius: 20px;
  width: 100%;
}

.short-info {
  display: flex;
  border-radius: 20px;
  width: 100%;
  height: 50%;
  background: #09189a;
}

.short-info-inner {
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0 10px;
  border-radius: 20px;
  width: 100%;
  overflow-y: auto;
}

.short-info-inner p {
  padding: 5px;
  margin: 0;
}

.short-info-inner a {
  padding: 5px;
  color: deeppink;
}

.short-info-inner a:hover {
  opacity: 0.8;
}
</style>