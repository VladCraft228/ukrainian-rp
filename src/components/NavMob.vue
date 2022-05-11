<template>
  <section class="nav">
      <div class="nav-menu">
        <router-link class="material-icons" :to="{ name: 'Home' }"><span class="material-symbols-rounded">home</span></router-link>
        <router-link class="material-icons" :to="{ name: 'About' }"><span class="material-symbols-rounded">article</span></router-link>
        <router-link class="material-icons" :to="{ name: 'Contact' }"><span class="material-symbols-rounded">contact_mail</span></router-link>
        <router-link class="material-icons" :to="{ name: 'Extra' }"><span class="material-symbols-rounded">help</span></router-link>
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
  position: sticky;
  top: 0;
  background: #080c74;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.nav-menu {
  height: 100%;
  width: 100%;
  justify-content: space-between;
  text-align: center;
  display: flex;
  flex-direction: row;
  overflow: auto;
}

.nav-menu a.router-link-exact-active {
  background: #0a0f87;
  padding-right: 20px;
  padding-left: 20px;
}

</style>