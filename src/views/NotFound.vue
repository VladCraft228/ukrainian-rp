<template>
  <div class="notfound">
    <div class="notfound-inner">
      <h1>404</h1>
      <h3>Сторінка не знайдена</h3>
      <router-link to="/">
        <button id="btn">На головну</button>
      </router-link>
    </div>
  </div>
</template>

<style>
.notfound {
  display: flex;
  border-radius: 20px;
  width: 100%;
  height: 95%;
  background: #09189a;
  margin: 20px;
}

.notfound-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  width: 100%;
  overflow-y: auto;
}

@media screen and (max-width: 988px) {
  .notfound {
    margin: 100px 0;
    background: none;
    text-align: center;
  }

  .notfound-inner {
    padding: 0;
  }
}
</style>
