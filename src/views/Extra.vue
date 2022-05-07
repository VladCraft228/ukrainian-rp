<template>
<div class="extra">
  <div class="extra-inner">
      <h1>Корисні сторінки</h1>
    <div class="extra-content">
      <div class="extra-container">
        <RouterLink to="/extra/about-samp"><img alt="about-samp" src="../assets/about-samp.png"><h2>Що таке SA-MP?</h2></RouterLink>
      </div>
      <div class="extra-container">
        <RouterLink to="/extra/rp-termins"><img alt="rp-termins" src="../assets/rp-termins.png"><h2>RP-терміни</h2></RouterLink>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Extra"
}
</script>

<style scoped>
.extra {
  display: flex;
  border-radius: 20px;
  height: 95%;
  width: 100%;
  margin: 20px;
  background: #09189a;
}

.extra-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  width: 100%;
  overflow-y: auto;
}

.extra-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.extra-container img{
  width: 100%;
  border-radius: 20px;
  opacity: 0.5;
}

.extra-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  justify-content: center;
}

.extra-container:active {
  transform: translateY(3px);
  transition: all .10s ;
}
.extra-container a{
  display: flex;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 20px
}

.extra-container h2 {
  font-size: 2.5vw;
  margin: 0;
  padding: 20px;
  background: #080c74;
  border-radius: 20px;
  position: absolute;
}
@media screen and (max-width: 988px) {
  .extra {
    background: none;
    margin: 0;
  }
  .extra-content {
    flex-direction: column;
    align-items: center;
  }
  .extra-container {
    margin: 20px 0;
  }
  .extra-container a {
    margin: 0;
  }
  .extra-container h2, a {
    position: relative;
    text-decoration: none;
  }
  .extra-container img {
    display: none;
  }
}
</style>