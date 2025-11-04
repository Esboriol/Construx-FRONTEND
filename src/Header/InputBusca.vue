<script setup lang="ts">
import { ref } from 'vue';
const query = ref('');
const emit = defineEmits(['search']);

function submit(e: Event) {
  e.preventDefault();
  emit('search', query.value.trim());
}
</script>

<template>
  <form class="search" @submit="submit" role="search" aria-label="Buscar produtos">
    <input id="search" v-model="query" type="text" placeholder="Buscar por produtos" />
    <button type="submit">Buscar</button>
  </form>
</template>

<style scoped>
.search {
  display:inline-flex;
  align-items:center;
  border-radius:6px;
  overflow:hidden;
  background:#fff;
  box-shadow:0 1px 0 rgba(0,0,0,0.08);
  width:100%;
  max-width:520px;
}

input {
  flex:1 1 auto;
  padding:8px 10px;
  border:0;
  outline:none;
  min-width:120px;
}

button {
  padding:8px 12px;
  border:0;
  background:#429aff;
  color:white;
  cursor:pointer;
}
</style>
