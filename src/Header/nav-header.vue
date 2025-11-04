<script setup lang="ts">
</script>

<template>
  <nav class="nav" aria-label="Navegação principal">
    <router-link to="/" class="nav-btn">Início</router-link>
    <router-link to="/produtos" class="nav-btn">Produtos</router-link>
    <router-link to="/sobre" class="nav-btn">Sobre</router-link>
    <router-link to="/login" class="nav-btn">Login</router-link>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 8px;
  align-items: center;
}

.nav-btn {
  text-decoration: none;
  color: #e8873f;
  background: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.95rem;
}

.nav-btn:hover {
  transform: translateY(-3px);
}

</style>
