<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const email = ref("");
const senha = ref("");
const loading = ref(false);
const error = ref("");
const router = useRouter();
const route = useRoute();

async function onSubmit() {
  loading.value = true;
  error.value = "";

  try {
    const response = await axios.post("https://backend-construx.onrender.com/api/login", {
      email: email.value,
      senha: senha.value,
    });
    console.log(response.data)
    if (response.data.sucesso) {
      // Salva o token e o nome do usuário
      //localStorage.setItem("accessToken", response.data.accessToken);
      //localStorage.setItem("nomeUsuario", response.data.nome);

      router.push("/");
    } else {
      error.value = "Falha no login";
    }
  } catch (err) {
    error.value = "Erro ao conectar ao servidor";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
    <div class="um">
    <div class="sm:w-1/4">
      <div class="dois card shadow-sm">
        <div class="tres">
          <h2 class="h2">Login</h2>
          <form @submit.prevent="onSubmit" class="form">
            <div class="cinco">
              <input type="email" v-model="email" placeholder="user@email.com" required />
            </div>
            <div>
              <label>Senha</label>
              <input type="password" v-model="senha" placeholder="********" required />
            </div>
            <div class="quatro">
              <button :class="['btn btn-block', !loading ? 'btn-accent': 'btn-neutral text-gray-200',]" :disabled="loading">
                {{ loading ? "Entrando..." : "Entrar" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
    /* Container principal */
.um {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e7eb; /* gray-200 */
}

/* Responsividade para telas médias */
.sm\:w-1\/4 {
  width: 100%;
}
@media (min-width: 640px) {
  .sm\:w-1\/4 {
    width: 25%;
  }
}

/* Cartão de login */
.dois {
  width: 100%;
  max-width: 384px;
  background-color: #1f2937; /* gray-800 */
  color: #f9fafb; /* gray-50 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 0.5rem;
}

/* Sombra leve */
.shadow-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
              0 1px 2px rgba(0, 0, 0, 0.06);
}

/* Conteúdo interno do cartão */
.tres {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

/* Título */
.h2 {
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  margin-bottom: 1rem;
}

/* Formulário */
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Campo de email */
.cinco {
  width: 100%;
}

/* Campo de senha e inputs */
input,
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 0.375rem;
  font-size: 1rem;
  background-color: #fff;
  color: #111827; /* gray-900 */
}

/* Botões */
button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6; /* blue-500 */
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #2563eb; /* blue-600 */
}

/* Botões lado a lado */
.quatro {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>