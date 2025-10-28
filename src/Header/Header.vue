<script setup lang="ts">
import NavHeader from "@/Header/nav-header.vue";
import InputBusca from "@/Header/InputBusca.vue";
</script>

<template>
  <header class="header">
    <div class="div-logo">
      <img src="/public/favicon.ico" alt="Logo Empresa Construx"/>
      <h1>Construx</h1>
    </div>
    <div>
      <InputBusca/>
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
  padding: 20px 20px;
}

.div-logo {
  display: flex;
}

.div-logo, .div-nav {
  flex: 1;
}
</style>