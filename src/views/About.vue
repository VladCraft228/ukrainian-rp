<template>
  <div class="about">
    <div class="about-inner">
      <div class="about-logo">
        <img class="logo" src="../assets/icon.png" alt="Ukrainian RP logo">
      </div>
      <div class="about-header">
        <h1>ПРО ПРОЄКТ <br> UKRAINIAN ROLE PLAY</h1>
      </div>
      <div class="about-body"><p>Вам набридли нудні хард РП сервера, вас постійно ігнорує адміністрація на популярних серверах,
        а ігровий мод вже приївся і став не цікавим, то ласкаво просимо до нашого проекту.
        У нас на сервері ви знайдете: цікавий ігровий мод, відповідальну і швидко реагуючу адміністрацію,
        якісний і цікавий мапінг, а також систему невеликих нагород для постійних гравців нашого сервера.
        Якщо говорити одним реченням, то:</p></div>
      <div class="about-quotation"><h3>“Ми взяли найкраще, відкинули непотрібне і вийшов Ukrainian Role Play”</h3></div>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  border-radius: 20px;
  justify-content: center;
  width: 100%;
  height: 95%;
  background: #09189a;
  margin: 20px;
}

.about-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  margin: 10px;
  overflow-y: auto;
}
.about-header {
  text-align: center;
}

.about-quotation {
  display: flex;
  text-align: center;
  justify-content: center;
  background: #080c74;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
}

.about-quotation h3{
  margin-block-end: 0;
}

.logo {
  width: 20vw;
}

@media (max-width: 988px) {
  .about {
    background: none;
    justify-content: flex-start;
    padding: 0;
  }
  .about-header {
    font-size: 5vw;
  }

  .about-body {
    font-size: 5vw;
    padding: 20px 0;
  }

  .logo {
    width: 20vw;
  }
}
</style>
