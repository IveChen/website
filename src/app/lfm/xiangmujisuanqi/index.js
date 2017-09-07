/**
 * @author chenjiancai
 * @time 2017-09-07
 */
import './index.less';

import App from './app.vue';
import Vue from 'vue';
import Element from 'element-ui'

Vue.use(Element)
new Vue({
    el: '#app',
    render(h) {
        return h(App);
    }
});