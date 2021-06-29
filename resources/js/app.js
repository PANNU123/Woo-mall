

require('./bootstrap');

window.Vue = require('vue').default;
//v----------form
import{Form} from 'vform';
window.Form=Form;
//-------vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './routes';
const router = new VueRouter({
    routes,
    //mode: 'history'
  })
  //------------

  //---------sweet alert

import Swal from 'sweetalert2'
window.Swal=Swal;
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
  })
  window.Toast=Toast;
  //---------------
//---------vue ex------
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './store/store'
const store = new Vuex.Store(
    storeData
);

//------------------
//-------tostr---------
import toastr from 'toastr';
window.toastr=toastr;
//----------

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router,
    store
});
