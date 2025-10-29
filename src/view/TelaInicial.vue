<script>
import axios from "axios";

export default {
  data() {
    return {
      mensagem: null
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:5000/api')
        .then(response => {
          this.mensagem = response.data.message;
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
  }
};


</script>

<template>
    <h1>Inicial {{ mensagem }}</h1>
</template>