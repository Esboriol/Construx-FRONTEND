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
    <button class="margin" type="submit">🔍</button>
  </form>
</template>

<style scoped>
.search {
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 520px;
}

.margin{
  margin-left: 10px;
}

input {
  flex: 1 1 auto;
  padding: 8px 10px;
  border: 0;
  outline: none;
  min-width: 120px;
  font-size: 14px;
}

button {
  padding: 6px 12px;
  font-size: 18px;
  width: 15%;
  border: 0;
  background: #429aff;
  color: white;
  cursor: pointer;
  border-radius: 0 6px 6px 0;
}
</style>
