<template>
  <div class="about">
    <div class="about-inner">
        <img class="logo" src="../assets/icon.png" alt="Ukrainian RP logo">
        <h1>ПРО ПРОЄКТ <br> UKRAINIAN ROLE PLAY</h1>
      <p>Вам набридли нудні хард РП сервера, вас постійно ігнорує адміністрація на популярних серверах,
        а ігровий мод вже приївся і став не цікавим, то ласкаво просимо до нашого проекту.
        У нас на сервері ви знайдете: цікавий ігровий мод, відповідальну і швидко реагуючу адміністрацію,
        якісний і цікавий мапінг, а також систему невеликих нагород для постійних гравців нашого сервера.
        Якщо говорити одним реченням, то:</p>
      <h3>“Ми взяли найкраще, відкинули непотрібне і вийшов Ukrainian Role Play”</h3>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  border-radius: 20px;
  width: 100%;
  height: 95%;
  background: #09189a;
  margin: 20px;
}

.about-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 20px;
  margin: 10px;
  overflow-y: auto;
}

.about-inner p {
  text-align: justify;
}

.about-inner h3 {
  background: #080c74;
  border-radius: 20px;
  padding: 20px;
}

.logo {
  width: 20vw;
}

@media (max-width: 988px) {
  .about {
    background: none;
    margin: 0;
  }

  .about-inner {
    padding: 0;
    margin: 20px;
  }

  .logo {
    width: 50%;
  }
}
</style>
