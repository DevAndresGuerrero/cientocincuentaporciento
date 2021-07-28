require('./bootstrap');
require('./startbootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Router Imported.
import { routes } from './routes';

// Import User Class.
import User from './Helpers/User';
window.User = User;

// Import Notification Class.
import Notification from './Helpers/Notification';
window.Notification = Notification;

// SweetAlert Start.
import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

window.Toast = Toast;
// SweetAlert End.


const router = new VueRouter({
  routes,
  mode: 'history'
})

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
  el: '#app',
  router,
});
