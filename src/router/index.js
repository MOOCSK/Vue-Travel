import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home';
import City from '../pages/city/City';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/vue/travel/',
        name: 'Home',
        component: Home
    }, {
        path: '/vue/travel/city',
        name: 'City',
        component: City
    }]
});
