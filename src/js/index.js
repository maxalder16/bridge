import '../../assets/css/main.css';

console.log('Hello, world 2!');

import Vue from 'vue';
import TestComponent from './components/TestComponent.vue';

Vue.component('test-component', TestComponent);

new Vue({
  el: '#app',
});