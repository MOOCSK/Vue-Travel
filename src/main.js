// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import router from './router';
import store from './store';
import App from './App';

import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';
import fastClick from 'fastclick';
// 解决移动端点击300ms延迟
fastClick.attach(document.body);

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});
