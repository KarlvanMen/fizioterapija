// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import 'es6-promise/auto'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueYouTubeEmbed)

/* eslint-disable */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

var Promise = require('es6-promise').Promise