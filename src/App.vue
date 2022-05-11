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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: 20vw;
  box-sizing: border-box;
  background: #0a0f87;
}

.view-background {
  width: 100%;
  justify-content: center;
  display: flex;
  background: #0F20B9;
  border-radius: 20px;
  margin: 20px;
  align-items: center;
}
#navbar-mobile {
  display: none;
}

@media screen and (max-width: 988px) {
  .view-container {
    background: none;
    position: static;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    margin-left: 0;
  }

  .view-background {
    background: none;
    margin: 0;
  }

  #navbar-desktop {
    display: none;
  }

  #navbar-mobile {
    display: flex;
  }
}

</style>
