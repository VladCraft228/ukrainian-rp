<template>
  <section class="nav">
    <div class="nav-logo">
      <router-link to="/"><img class="logo" src="../assets/logo.png" alt="Ukrainian RP logo"></router-link>
    </div>
    <div class="nav-menu">
      <router-link :to="{ name: 'Home' }">Головна</router-link>
      <router-link :to="{ name: 'About' }">Про проєкт</router-link>
      <router-link :to="{ name: 'Contact' }">Зв'язок</router-link>
      <router-link :to="{ name: 'Extra' }">Додаток</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "NavMob"
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.nav-logo {
  width: 50vw;
  border-radius: 20px;
  background: #42b983;
}

.logo {
  width: 100%;
}

.nav-menu {
  text-align: center;
  width: 100%;
}
</style>