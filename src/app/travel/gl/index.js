/**
 * @author chenjiancai
 * @time 2017-08-14
 */
import './index.less';

import Vue from 'vue';
import App from './app.vue';
import journey from './journey.vue';
import todo from './todo.vue';

Vue.component('journey', journey);
Vue.component('todo',todo);

new Vue({
    el: "#app",
    render(h) {
        return h(App)
    }
});