<script>
import axios from "axios";

export default {
  data() {
    return {
      listProdutos: null,
      listCategorias: null
    };
  },
  mounted() {
    axios.get('https://backend-construx.onrender.com/api/produtos')
        .then(response => {
          this.listProdutos = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
    axios.get('https://backend-construx.onrender.com/api/categorias')
        .then(response =>{
          this.listCategorias = response.data;
        })
        .catch(error => {
          console.error('Erro ao encontrar bagulho foda', error);
        })
   }
};
</script>

<template>
  <main>
    <section class="hero">
      <div class="carousel" id="carousel">
        <div class="slide active" style="background-image:url('https://placehold.co/600x600')">
          <div class="slide-content">
            <h1>Promoção de Inverno em Ferramentas</h1>
            <p>Até 30% de desconto em marcas selecionadas</p>
            <a class="btn-primary" href="#">Ver ofertas</a>
          </div>
        </div>
        <div class="slide" style="background-image:url('https://placehold.co/600x500')">
          <div class="slide-content">
            <h1>Cimento com entrega rápida</h1>
            <p>Compra por volume com desconto</p>
            <a class="btn-primary" href="#">Saiba mais</a>
          </div>
        </div>
        <button class="carousel-prev" aria-label="Anterior">‹</button>
        <button class="carousel-next" aria-label="Próximo">›</button>
      </div>

      <aside class="promo-cards">
        <div class="card">
          <h4>Frete grátis</h4>
          <img src="https://placehold.co/80x80" alt="">
          <p>Acima de R$ 299</p>
        </div>
        <div class="card">
          <h4>Parcelamento</h4>
          <img src="https://placehold.co/80x80" alt="">
          <p>Em até 6x sem juros</p>
        </div>
        <div class="card">
          <h4>Suporte técnico</h4>
          <img src="https://placehold.co/80x80" alt="">
          <p>Assistência para escolha de produtos</p>
        </div>
      </aside>
    </section>

    <section class="categories">
      <h2>Categorias Rápidas</h2>
      <div class="cats-grid">
        <a v-for="categoria in listCategorias" class="cat" href="#"><img src="https://placehold.co/36x36" alt=""><span>{{ categoria.nome_categoria }}</span></a>
      </div>
    </section>

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
  </main>
</template>

<style>
:root {
  --primary: #ff6600;
  --accent: #ff7a2b;
  --dark: #222;
  --muted: #6b6b6b;
  --bg: #f5f6f8;
  --card: #ffffff;
  --radius: 12px;
  --shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  --gap: 18px;
  --btn-height: 44px;
  --btn-radius: 10px;
  --btn-transition: 180ms cubic-bezier(.2,.9,.3,1);
  --btn-focus-ring: 3px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

html, body {
  height: 100%;
  background: var(--bg);
  margin: 0;
  padding: 0;
  color: var(--dark);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Base */
main {
  display: block;
  background: transparent;
  color: var(--dark);
}

/* HERO (carousel + promo cards) */
.hero {
  display: flex;
  gap: 24px;
  padding: 28px;
  align-items: stretch;
}

/* Garantir espaço interno no carrossel para os controles */
.carousel {
  flex: 1;
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  min-height: 320px;
  background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.01));
  box-sizing: border-box;
  padding-left: 64px;   /* espaço para o botão anterior */
  padding-right: 64px;  /* espaço para o botão próximo */
}

/* Slides */
.slide {
  width: 100%;
  height: 100%;
  min-height: 320px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 28px;
  color: #fff;
  position: relative;
  box-sizing: border-box;
}

.slide::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.45));
  pointer-events: none;
}

.slide-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
}

/* Controles posicionados com mais folga e tamanho consistente */
.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 6px 18px rgba(0,0,0,0.28);
  transition: transform var(--btn-transition), background-color var(--btn-transition);
  -webkit-tap-highlight-color: transparent;
  line-height: 1;
  margin-left: -10px;
  margin-right: -10px;
}

/* distância das laterais do container (não da imagem) */
.carousel-prev { left: 16px; }
.carousel-next { right: 16px; }

/* ícones/texto centralizado e escalável */
.carousel-prev::before,
.carousel-next::before {
  display: inline-block;
  font-size: 22px;
  line-height: 1;
}

/* hover / active para feedback visual */
.carousel-prev:hover,
.carousel-next:hover {
  transform: translateY(-50%) scale(1.02);
  background: rgba(0,0,0,0.6);
}

.carousel-prev:active,
.carousel-next:active {
  transform: translateY(-50%) scale(0.98);
}

/* foco acessível (só aparece em navegação por teclado) */
.carousel-prev:focus,
.carousel-next:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255,122,43,0.18), 0 8px 24px rgba(0,0,0,0.18);
}

/* PROMO CARDS */
.promo-cards {
  width: 320px;
  display: grid;
  gap: 12px;
}

.card {
  background: var(--card);
  padding: 16px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 16px;
  box-sizing: border-box;
}

.card h4 {
  margin: 0 0 6px 0;
  font-size: 16px;
}

.card p {
  margin: 0;
  color: var(--muted);
}

.card img {
  width: min-content;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}

/* CATEGORIES */
.categories {
  padding: 20px 28px;
}

.categories h2 {
  margin: 0 0 14px 0;
  font-size: 20px;
}

.cats-grid {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.cat {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--card);
  padding: 12px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--dark);
  box-shadow: var(--shadow);
  min-width: 160px;
}

.cat img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.cat span {
  font-weight: 600;
}

/* FEATURED PRODUCTS */
.featured {
  padding: 20px 28px;
}

.featured h2 {
  margin: 0 0 18px 0;
  font-size: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
}

.product {
  background: var(--card);
  padding: 12px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 260px;
  box-sizing: border-box;
}

.thumb {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
}

.tag {
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
}

.tag.sale { background: #ff3b3b; }
.tag.top { background: #00a86b; }

.prod-title {
  font-size: 15px;
  margin: 0 0 6px 0;
  font-weight: 700;
}

.price {
  display: flex;
  gap: 8px;
  align-items: center;
}

.price .old {
  text-decoration: line-through;
  color: var(--muted);
  font-size: 14px;
}

.prod-actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
  align-items: center;
}

/* DEAL / OFERTA RELÂMPAGO */
.deal {
  padding: 20px 28px;
}

.deal h2 {
  margin: 0 0 14px 0;
  font-size: 20px;
}

.deal-card {
  display: flex;
  gap: 18px;
  align-items: center;
  background: linear-gradient(90deg, #fff, #fff);
  padding: 16px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  box-sizing: border-box;
}

.deal-card img {
  width: 160px;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
}

.deal-info h3 {
  margin: 0 0 6px 0;
  font-size: 18px;
}

.countdown {
  font-weight: 800;
  color: var(--primary);
  font-size: 18px;
}

.deal .price { margin-top: 8px; }
.deal .price strong { font-size: 18px; margin-right: 10px; }
.deal .price .old { color: var(--muted); font-size: 14px; }

/* UTIL / ACCESSIBILITY */
a.btn-primary, button.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

/* img defaults */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* BOTÕES - padronização, acessibilidade e estados */
.btn-primary,
.btn-secondary,
a.btn-primary,
a.btn-secondary,
button.btn-primary,
button.btn-secondary {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: var(--btn-height);
  min-width: 92px;
  padding: 0 14px;
  border-radius: var(--btn-radius);
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  transition: transform var(--btn-transition), box-shadow var(--btn-transition), background-color var(--btn-transition), color var(--btn-transition);
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

/* Primário */
.btn-primary,
a.btn-primary,
button.btn-primary {
  background: linear-gradient(180deg, var(--accent), var(--primary));
  color: #fff;
  box-shadow: 0 6px 18px rgba(255,102,0,0.18), 0 1px 0 rgba(255,255,255,0.03) inset;
}

/* Secundário */
.btn-secondary,
a.btn-secondary,
button.btn-secondary {
  background: #f5f5f6;
  color: var(--dark);
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
}

/* Hover / Active */
.btn-primary:hover,
a.btn-primary:hover,
button.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255,102,0,0.20);
}

.btn-primary:active,
button.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.btn-secondary:hover,
a.btn-secondary:hover,
button.btn-secondary:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

.btn-secondary:active,
button.btn-secondary:active {
  transform: translateY(0);
}

/* Focus acessível (aparece apenas quando teclado é usado) */
:focus-visible {
  outline: none;
}

.btn-primary:focus-visible,
.btn-secondary:focus-visible,
a.btn-primary:focus-visible,
a.btn-secondary:focus-visible {
  box-shadow: 0 0 0 var(--btn-focus-ring) rgba(255,122,43,0.18), 0 6px 18px rgba(0,0,0,0.08);
  border-radius: calc(var(--btn-radius) + 2px);
}

/* Disabled / aria-disabled */
.btn-primary[disabled],
.btn-secondary[disabled],
button[disabled],
[aria-disabled="true"] {
  opacity: 0.55;
  pointer-events: none;
  transform: none;
  box-shadow: none;
  cursor: not-allowed;
}

/* Icones dentro de botão - alinhar corretamente */
.btn-primary > svg,
.btn-secondary > svg,
.btn-primary .icon,
.btn-secondary .icon {
  width: 18px;
  height: 18px;
  display: inline-block;
}

/* Ajuste para links dentro de .slide (contraste e legibilidade sobre imagens) */
.slide .btn-primary,
.slide a.btn-primary {
  background: linear-gradient(90deg, rgba(255,122,43,0.95), rgba(255,102,0,0.95));
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}

/* Responsivo - botões menores em telas pequenas */
@media (max-width: 520px) {
  :root { --btn-height: 40px; }
  .btn-primary, .btn-secondary { min-width: 72px; padding: 0 12px; font-size: 13px; }
}

/* Mobile: reduzir padding do container e reposicionar para a base do carrossel */
@media (max-width: 640px) {
  .carousel {
    padding-left: 12px;
    padding-right: 12px;
  }

  .carousel-prev,
  .carousel-next {
    top: auto;
    bottom: 12px;
    transform: none;
    width: 44px;
    height: 44px;
    opacity: 0.98;
  }

  .carousel-prev { left: 12px; }
  .carousel-next { right: 12px; }
}

/* Em layouts muito estreitos, evita overlap com conteúdo textual:
   desloca botões para fora visualmente mas mantendo hit area */
@media (max-width: 420px) {
  .carousel-prev { transform: translateY(-50%) translateX(-4px); }
  .carousel-next { transform: translateY(-50%) translateX(4px); }
}

/* RESPONSIVE geral */
@media (max-width: 1000px) {
  .hero {
    flex-direction: column;
    padding: 18px;
    gap: 16px;
  }

  .promo-cards {
    width: 100%;
    grid-auto-flow: column;
    overflow: auto;
    grid-auto-columns: 1fr;
  }

  .categories, .featured, .deal {
    padding: 16px;
  }
}

@media (max-width: 520px) {
  .products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deal-card {
    flex-direction: column;
    align-items: stretch;
  }

  .deal-card img {
    width: 100%;
    height: 160px;
  }
}
</style>