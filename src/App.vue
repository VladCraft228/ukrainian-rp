<template>
  <NavPC id="navbar-desktop"/>
  <NavMob id="navbar-mobile"/>
  <div class="view-container">
    <div class="view-background">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavPC from "@/components/NavPC";
import NavMob from "@/components/NavMob";
export default {
  components: {NavMob, NavPC}
}
</script>

<style scoped>

.view-container {
  display: flex;
  justify-content: center;
  margin-left: 20vw;
  padding: 0 1em;
  box-sizing: border-box;
  min-height: 100vh;
  background: #0a0f87;
}

.view-background {
  display: flex;
  background: #0F20B9;
  border-radius: 20px;
  margin: 20px;
}
#navbar-mobile {
  display: none;
}

@media screen and (max-width: 988px) {
  .view-container {
    width: 100%;
    margin-left: 0;
  }

  .view-background {
    background: none;
  }
  #navbar-desktop {
    display: none;
  }

  #navbar-mobile {
    display: flex;
  }
}

</style>
