<template>
  <section class="nav">
    <div class="nav-background">
      <div class="nav-logo">
        <router-link to="/"><img class="logo" src="../assets/logo.png" alt="Ukrainian RP logo"></router-link>
      </div>
      <div class="nav-menu">
        <router-link :to="{ name: 'Home' }">Головна</router-link>
        <router-link :to="{ name: 'About' }">Про проєкт</router-link>
        <router-link :to="{ name: 'Contact' }">Зв'язок</router-link>
        <router-link :to="{ name: 'Extra' }">Додаток</router-link>
      </div>
      <div class="footer">
        <p>Ukrainian-rp©2022</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NavPC"
}
</script>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  background: #0a0f87;
}

.nav-background {
  display: flex;
  flex-direction: column;
  background: #0F20B9;
  border-radius: 20px;
  width: 18vw;
  overflow-y: auto;
  margin: 20px 0;
}

.nav-logo {
  padding: 20px 0;
}

.logo {
  width: 100%;
}

.nav-menu {
  display: flex;
  justify-content: center;
  flex-direction: column;

}

.nav-menu a {
  margin: 15px;
  padding: 10px;
  text-decoration: none;
  color: #005AFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #FCFF00;
  mix-blend-mode: normal;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-weight: bold;
  transition-property: auto;
  transition-duration: 4s;
  transition-delay: 2s;
}

.nav-menu a:hover {
  transition-property: auto;
  transition: all .5s;
}

.nav-menu a.router-link-exact-active {
  background: #005AFF;
  color: #FCFF00;
  margin-right: 20px;
  margin-left: 20px;
}

.footer {
  display: flex;
  align-items: center;
  text-align: center;
  background: #09189b;
  justify-content: center;
}
</style>