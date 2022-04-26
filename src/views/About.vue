<template>
  <div class="about">
    <div class="nav-logo">
      <img class="logo" src="../assets/icon.png" alt="Ukrainian RP logo">
    </div>
    <div class="text-header">
      <h1>ПРО ПРОЄКТ <br> UKRAINIAN ROLE PLAY</h1>
    </div>
    <div class="text-body"><p>Вам набридли нудні хард РП сервера, вас постійно ігнорує адміністрація на популярних серверах,
      а ігровий мод вже приївся і став не цікавий, то ласкаво просимо до нас на проект.
      У нас на сервері ви знайдете: цікавий ігровий мод, відповідальну і швидко відповідає адміністрацію,
      якісний і цікавий маппинг, а так само систему невеликих нагород для постійних гравців нашого сервера.
      Якщо говорити один пропозицією, то:</p></div>
    </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px
}

.text-header {
  text-align: center;
}

.text-body {
  text-align: justify;
  padding: 20px 0;
}

.logo {
  width: 256px;
}

@media (max-width: 988px) {
  .about {
    justify-content: flex-start;
    padding: 0;
  }
  .text-header {
    font-size: 5vw;
  }

  .text-body {
    text-align: justify;
    font-size: 5vw;
    padding: 20px 0;
  }

  .logo {
    width: 60vw;
  }
}
</style>
