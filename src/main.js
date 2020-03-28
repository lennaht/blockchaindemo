import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import ToDoListBlockchain from './blockchain/ToDoListBlockchain';
Vue.prototype.$chain = new ToDoListBlockchain(3);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
