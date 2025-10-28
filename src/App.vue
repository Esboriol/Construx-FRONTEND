<script setup>
import './assets/main.css'
import Header from "@/Header/Header.vue";
import Footer from "@/Footer/Footer.vue";
</script>

<template>
  <Header/>
  <router-view class="view"/>
  <Footer/>
</template>

<style scoped></style>
