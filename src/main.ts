/*
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-27 11:08:33
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-04 13:30:51
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAnime from 'vue-animejs';
// import VueAnime from 'animejs/lib/anime.es.js';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAnime)
Vue.use(ElementUI);
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
