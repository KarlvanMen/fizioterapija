'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import { apiGetCall } from '../store/api.js'
// import docCookies from '../store/cookies.js'

// sync Vue with Vuex
Vue.use(Vuex)

/* eslint-disable */
const store = new Vuex.Store({

  // Application state

    state: {

      // All the data should be store here (YOUR APPLICATION STATE)
        data: {
          home: [],
          fizioterapija: [],
          vingrosana: [],
          kalendars: [],
          kontakti: [],
          parmums: [],
          galerijas: []
        },
    },

  // Vuex actions here
  // All the data should be altered by calling actions from your components
  // Never (or at least as little as possible) tweak data in state without calling an action
  // That way you'll be able to trace the data flow, debug etc. way more efficiently
    actions: {

      // Two mandatory arguments (commit and state)
        FETCH_DATA: ({ commit, state }) => {
            apiGetCall('getdata').then((res) => {
                if (res.home) {
                    commit('SET_DATA', res)
                }
            })
        },
    },

    mutations: {

      // Single mandatory argument (state)
        SET_DATA: (state, data) => {
            // Vue.set(..., ..., ...) for objects
            // .push() for arrays
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    Vue.set(state.data, key, data[key])
                }
            }
        },
    },

    getters: {
      getHomeData: state => {
        return state.data.home
      },
      getFizioData: state => {
        return state.data.fizioterapija
      },
      getVingrData: state => {
        return state.data.vingrosana
      },
      getKalenData: state => {
        return state.data.kalendars
      },
      getAboutData: state => {
        return state.data.parmums
      },
      getPhotoData: state => {
        return state.data.galerijas
      },
      getKontaktiData: state => {
        return state.data.kontakti
      },
    }
})
export default store
