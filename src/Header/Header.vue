<script setup lang="ts">
import NavHeader from "@/Header/nav-header.vue";
import InputBusca from "@/Header/InputBusca.vue";

const logoUrl = new URL('/favicon.ico', import.meta.url).href;
</script>

<template>
  <header class="header">
    <div class="logo-area">
      <img :src="logoUrl" alt="Logo Construx" class="logo"/>
      <h1 class="brand">Construx</h1>
    </div>

    <div class="search-area">
      <InputBusca/>
    </div>

    <div class="nav-area">
      <NavHeader/>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: #ff8c00;
  box-sizing: border-box;
}

/* layout: logo left, search center (flex 1), nav right */
.logo-area {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
}

.search-area {
  flex: 1 1 320px;
  display: flex;
  justify-content: center;
}

.nav-area {
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
}

/* logo */
.logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.brand {
  margin: 0;
  color: white;
  font-size: 1rem;
  font-weight: 600;
}

/* responsivo */
@media (max-width: 720px) {
  .header {
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px;
  }

  .logo-area {
    flex: 0 0 auto;
    width: 100%;
  }

  .search-area {
    order: 3;
    width: 100%;
    justify-content: stretch;
  }

  .nav-area {
    order: 2;
    width: 100%;
    justify-content: center;
  }
}
</style>
