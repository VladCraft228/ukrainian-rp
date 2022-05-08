<template>
  <div class="successful-send">
    <div class="successful-send-inner">
      <h1>Форму успішно надіслано</h1>
      <router-link to="/">
        <button id="btn">На головну</button>
      </router-link>
    </div>
  </div>
</template>

<style>
.successful-send {
  display: flex;
  border-radius: 20px;
  width: 100%;
  height: 95%;
  background: #09189a;
  margin: 20px;
}
.successful-send-inner {
  display: flex;
  justify-content: safe center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  width: 100%;
  overflow-y: auto;
}
</style>
