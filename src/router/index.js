import { createRouter, createWebHistory } from 'vue-router'
import TelaInicial from '../view/TelaInicial.vue'
import TelaLogin from '../view/TelaLogin.vue'
import TelaProdutos from '@/view/TelaProduto.vue'
import TelaProdutos_Categoria from '@/view/TelaProdutos_Categoria.vue'
import TelaBusca from '@/view/TelaBusca.vue'

const routes = [    
    {path: '/', name: 'inicial', component: TelaInicial},
    {path: '/login', name: 'login', component: TelaLogin},
    {path: '/produto', name: 'produto', component: TelaProdutos},
    {path: '/produtos/categoria', name: 'categorias', component: TelaProdutos_Categoria, props: true},
    {path: '/produtos/busca', name: 'busca', component: TelaBusca, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _, next) => {
    next()
})

export default router