import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fontRoboto from '../node_modules/roboto-fontface/css/roboto/roboto-fontface.css'
import fontMaterial from '../node_modules/@material-icons/font/css/all.css'
import fontawesome from '../node_modules/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

fontRoboto;
fontMaterial;
fontawesome;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.overlay');

function scrollTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
document.querySelector('.nav').onclick = function () {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('ds_block');
}
document.querySelector('.sidebar').onclick = function () {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('ds_block');
    scrollTop();
}
// document.querySelector('h1').onclick = function () {
//     scrollTop();
// }
document.querySelector('.overlay').onclick = function () {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('ds_block');
}
// DARKMODE
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')
$checkbox.addEventListener('click' , function(){
    $html.classList.toggle('dark-mode')
})
// DARKMODE