import Vue from 'vue';
import VueRouter from 'vue-router';
import Todo from '../views/Todo.vue';
import Blockchain from '../views/Blockchain.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/blockchain',
        name: 'Blockchain',
        component: Blockchain

    }
]

const router = new VueRouter({
  routes
})

export default router
