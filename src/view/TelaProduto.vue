<script>
import axios from "axios";

export default {
  data() {
    return {
      produto: null,
    };
  },
  mounted() {
    const produtoId = this.$route.query.id;

    axios.get(`https://backend-construx.onrender.com/api/produtos/${produtoId}`)
      .then(res => {
        this.produto = res.data;
        console.log(res.data)
      })
      .catch(error => {
        console.error('Erro ao buscar produto:', error);
      });
  }
};
</script>

<template>
    <div class="product-container">
        <section v-if="produto">
            <div class="product-header">
                <h1 id="nome">{{ produto.nome }}</h1>
                <span class="product-price" id="preco">R$ {{ produto.preco_unitario }}</span>
            </div>
            <div class="product-description">
                <p id="descricao">{{produto.descricao}}</p>
            </div>
            <div class="product-details">
                <p> <span id="categoria">{{ produto.categoria }}</span></p>
                <p> <span id="estoque">Peso:</span> {{produto.peso}} KG</p>
                <p> <span id="avaliacao">Avaliação</span></p>
            </div>
        </section>
    </div> 
</template>

<style>

.product-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.product-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.product-header h1 {
    font-size: 24px;
    margin: 0;
    color: #333;
}

.product-price {
    font-size: 20px;
    color: #27ae60;
    font-weight: bold;
    margin-left: 10px;
}

.product-description {
    margin-bottom: 15px;
}

.product-description p {
    font-size: 16px;
    color: #555;
}

.product-details p {
    margin: 5px 0;
    font-size: 15px;
    color: #666;
}

.product-details span {
    font-weight: bold;
    color: #333;
}
</style>