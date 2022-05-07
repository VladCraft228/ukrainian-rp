<template>
    <div class="notfound">
        <h1>404</h1>
        <h3>Сторінка не знайдена</h3>
        <router-link to="/">
        <button>На головну</button>
        </router-link>
    </div>
</template>

<style>
.notfound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
}
</style>
