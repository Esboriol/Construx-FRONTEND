<script>
import axios from "axios";

export default {
  data() {
    return {
      listProdutos: null,
    };
  },
  mounted() {
    const categoriaId = this.$route.query.id_categoria;

    axios.get(`https://backend-construx.onrender.com/api/produtos/categorias/${categoriaId}`)
      .then(res => {
        this.listProdutos = res.data;
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }
};
</script>



<template>

<section class="featured">
      <h2>Produtos em Destaque</h2>
      <div class="products-grid" id="productsGrid">
        <article v-for="produto in listProdutos" :key="produto.id" class="product" data-name="Furadeira Profissional">
          <div class="thumb">
            <img :src=produto.url_imagem alt="Furadeira Profissional">
          </div>
          <h3 class="prod-title">{{produto.nome}}</h3>
          <div class="price">
            <strong> R$ {{ produto.preco_unitario }}</strong>
          </div>
          <div class="prod-actions">
            <button class="btn-secondary" data-sku="DRL-800">Ver</button>
            <button class="btn-primary add-cart" data-sku="DRL-800">Adicionar</button>
          </div>
        </article>
      </div>
    </section>
    
</template>