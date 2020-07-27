require('./bootstrap');

window.Vue = require('vue');

Vue.component('menu-list', require('./components/Example.vue'));

const app = new Vue({
	el: '#app'
});