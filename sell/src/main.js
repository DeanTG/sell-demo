import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

//配置axios
axios.interceptors.request.use(function(config){
    //store.dispatch('showLoading');
    return config;
},function(err){
    return Promise.reject(err);
})
axios.interceptors.response.use(function(response){
    //store.dispatch('hideLoading');
    return response;
},function(err){
    return Promise.reject(err);
})
// axios.defaults.baseURL = ""; //配置请求根路径
 Vue.prototype.$http = axios //替换vue.resource里的this.$http方法
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //设置post头部信息

new Vue({
  el: '#app',
  render: h => h(App)
})
