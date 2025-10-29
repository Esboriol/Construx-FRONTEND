<script setup lang="ts">

</script>

<template>
  <nav>
    <router-link to="/" class="nav-btn">Inicio</router-link>
    <router-link to="/" class="nav-btn">Inicio</router-link>
    <router-link to="/" class="nav-btn">Inicio</router-link>
    <router-link to="/" class="nav-btn">Inicio</router-link>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }

  .nav-btn {
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #429aff;
  }
</style>