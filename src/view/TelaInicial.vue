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
        <a class="cat" href="#"><img src="https://placehold.co/36x36" alt=""><span>Ferramentas</span></a>
        <a class="cat" href="#"><img src="https://placehold.co/36x36" alt=""><span>Materiais</span></a>
        <a class="cat" href="#"><img src="https://placehold.co/36x36" alt=""><span>Tintas</span></a>
        <a class="cat" href="#"><img src="https://placehold.co/36x36" alt=""><span>Segurança</span></a>
      </div>
    </section>

    <section class="featured">
      <h2>Produtos em Destaque</h2>
      <div class="products-grid" id="productsGrid">
        <article class="product" data-name="Furadeira Profissional">
          <div class="thumb">
            <img src="https://placehold.co/200x140" alt="Furadeira Profissional">
            <span class="tag sale">-20%</span>
          </div>
          <h3 class="prod-title">Furadeira Profissional 800W</h3>
          <div class="price">
            <span class="old">R$ 379,90</span>
            <strong>R$ 303,92</strong>
          </div>
          <div class="prod-actions">
            <button class="btn-secondary" data-sku="DRL-800">Ver</button>
            <button class="btn-primary add-cart" data-sku="DRL-800">Adicionar</button>
          </div>
        </article>

        <article class="product" data-name="Cimento CP II 50kg">
          <div class="thumb">
            <img src="https://placehold.co/200x140" alt="Cimento CP II 50kg">
          </div>
          <h3 class="prod-title">Cimento CP II 50kg</h3>
          <div class="price">
            <strong>R$ 39,90</strong>
          </div>
          <div class="prod-actions">
            <button class="btn-secondary">Ver</button>
            <button class="btn-primary add-cart" data-sku="CIM-50">Adicionar</button>
          </div>
        </article>

        <article class="product" data-name="Tinta Acrílica 18L">
          <div class="thumb">
            <img src="https://placehold.co/200x140" alt="Tinta Acrílica 18L">
            <span class="tag top">Mais vendido</span>
          </div>
          <h3 class="prod-title">Tinta Acrílica 18L Branco Neve</h3>
          <div class="price">
            <strong>R$ 149,90</strong>
          </div>
          <div class="prod-actions">
            <button class="btn-secondary">Ver</button>
            <button class="btn-primary add-cart" data-sku="TIN-18">Adicionar</button>
          </div>
        </article>
      </div>
    </section>

    <section class="deal">
      <h2>Oferta Relâmpago</h2>
      <div class="deal-card">
        <img src="https://placehold.co/160x110" alt="Serra elétrica">
        <div class="deal-info">
          <h3>Serra Elétrica 2000W</h3>
          <p class="countdown" id="dealCountdown">00:15:00</p>
          <div class="price">
            <strong>R$ 499,00</strong>
            <span class="old">R$ 699,00</span>
          </div>
          <button class="btn-primary add-cart" data-sku="SR-2000">Comprar Agora</button>
        </div>
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
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

main {
  display: block;
  background: transparent;
  color: var(--dark)
}

/* HERO (carousel + promo cards) */
.hero {
  display: flex;
  gap: 24px;
  padding: 28px;
  align-items: stretch
}

.carousel {
  flex: 1;
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  min-height: 320px
}

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
  position: relative
}

.slide::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.45));
  pointer-events: none
}

.slide-content {
  position: relative;
  z-index: 2;
  max-width: 560px
}

.carousel-prev, .carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.35);
  border: 0;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 3
}

.carousel-prev {
  left: 12px
}

.carousel-next {
  right: 12px
}

/* PROMO CARDS */
.promo-cards {
  width: 320px;
  display: grid;
  gap: 12px
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
}

.card h4 {
  margin: 0 0 6px 0;
  font-size: 16px
}

.card p {
  margin: 0;
  color: var(--muted)
}

.card img {
  width: min-content;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto
}

/* CATEGORIES */
.categories {
  padding: 20px 28px
}

.categories h2 {
  margin: 0 0 14px 0;
  font-size: 20px
}

.cats-grid {
  display: flex;
  gap: 14px;
  flex-wrap: wrap
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
  min-width: 160px
}

.cat img {
  width: 36px;
  height: 36px;
  object-fit: contain
}

.cat span {
  font-weight: 600
}

/* FEATURED PRODUCTS */
.featured {
  padding: 20px 28px
}

.featured h2 {
  margin: 0 0 18px 0;
  font-size: 20px
}

.products-grid {
  display: grid;
  grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px
}

.product {
  background: var(--card);
  padding: 12px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 260px
}

.thumb {
  position: relative;
  border-radius: 8px;
  overflow: hidden
}

.thumb img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block
}

.tag {
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  color: #fff;
  font-weight: 700;
  font-size: 13px
}

.tag.sale {
  background: #ff3b3b
}

.tag.top {
  background: #00a86b
}

.prod-title {
  font-size: 15px;
  margin: 0 0 6px 0;
  font-weight: 700
}

.price {
  display: flex;
  gap: 8px;
  align-items: center
}

.price .old {
  text-decoration: line-through;
  color: var(--muted);
  font-size: 14px
}

.prod-actions {
  display: flex;
  gap: 10px;
  margin-top: auto
}

.btn-primary {
  background: var(--primary);
  color: #fff;
  border: 0;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700
}

.btn-secondary {
  background: #f0f0f0;
  border: 0;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer
}

/* DEAL / OFERTA RELÂMPAGO */
.deal {
  padding: 20px 28px
}

.deal h2 {
  margin: 0 0 14px 0;
  font-size: 20px
}

.deal-card {
  display: flex;
  gap: 18px;
  align-items: center;
  background: linear-gradient(90deg, #fff, #fff);
  padding: 16px;
  border-radius: 12px;
  box-shadow: var(--shadow)
}

.deal-card img {
  width: 160px;
  height: 110px;
  object-fit: cover;
  border-radius: 8px
}

.deal-info h3 {
  margin: 0 0 6px 0;
  font-size: 18px
}

.countdown {
  font-weight: 800;
  color: var(--primary);
  font-size: 18px
}

.deal .price {
  margin-top: 8px
}

.deal .price strong {
  font-size: 18px;
  margin-right: 10px
}

.deal .price .old {
  color: var(--muted);
  font-size: 14px
}

/* UTIL / ACCESSIBILITY */
a.btn-primary, button.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none
}

img {
  max-width: 100%;
  height: auto;
  display: block
}

/* RESPONSIVE */
@media (max-width: 1000px) {
  .hero {
    flex-direction: column;
    padding: 18px;
    gap: 16px
  }

  .promo-cards {
    width: 100%;
    grid-auto-flow: column;
    overflow: auto;
    grid-auto-columns: 1fr
  }

  .categories, .featured, .deal {
    padding: 16px
  }
}

@media (max-width: 520px) {
  .products-grid {
    grid-template-columns:repeat(2, minmax(0, 1fr))
  }

  .deal-card {
    flex-direction: column;
    align-items: stretch
  }

  .deal-card img {
    width: 100%;
    height: 160px
  }
}
</style>