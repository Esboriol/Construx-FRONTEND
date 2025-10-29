import { createRouter, createWebHistory } from 'vue-router'
import TelaInicial from '../view/TelaInicial.vue'
import TelaLogin from '../view/TelaLogin.vue'
import TelaProdutos from '@/view/TelaProdutos.vue'

const routes = [
    {path: '/', name: 'inicial', component: TelaInicial},
    {path: '/login', name: 'login', component: TelaLogin},
    {path: '/produto', name: 'produto', component: TelaProdutos}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _, next) => {
    next()
})

export default router