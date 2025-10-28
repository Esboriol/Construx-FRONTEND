import { createRouter, createWebHistory } from 'vue-router'
import TelaInicial from '../view/TelaInicial.vue'
import TelaLogin from '../view/TelaLogin.vue'

const routes = [
    {path: '/', name: 'inicial', component: TelaInicial},
    {path: '/login', name: 'login', component: TelaLogin}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth) {
        return next({name: 'login', query: {redirect: to.fullpath} })
    }
    if (to.meta.guestOnly) {
        return next({name: 'inicial'})
    }
    next()
})

export default router