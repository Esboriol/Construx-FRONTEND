<script setup lang="ts">

import NavHeader from "@/Header/nav-header.vue";
</script>

<template>
  <header>
    <div class="div-img">
      <img src="/public/favicon.ico" alt="Logo Empresa Construx"/>
    </div>
    <div>
      <h1>
        Construx
      </h1>
    </div>
    <div class="div-nav">
      <nav-header/>
    </div>
  </header>
</template>

<style scoped>
  header {
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    margin-left: 20px;
  }

  .div-img, .div-nav {
    flex: 1;
  }

</style>