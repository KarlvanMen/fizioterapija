'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import { apiGetCall, apiPostCall } from '../store/api.js'
import docCookies from '../store/cookies.js'

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
          galerijas: [],
          login: false,
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
        ADJUST_HOME: ({commit, state}, data) => {
          return apiPostCall('edithome', data)
        },
        ADJUST_FIZIOTERAPIJA: ({commit, state}, data) => {
          return apiPostCall('editfizio', data)
        },
        ADJUST_VINGROSANA: ({commit, state}, data) => {
          return apiPostCall('editvingr', data)
        },
        ADJUST_KONTAKTI: ({commit, state}, data) => {
          return apiPostCall('editkont', data)
        },
        ADJUST_PARMUMS: ({commit, state}, data) => {
          return apiPostCall('editabout', data)
        },
        ADJUST_GALERIJAS: ({commit, state}, data) => {
          return apiPostCall('editvideo', data)
        },
        UPLOAD_IMAGE: ({state}, data) => {
          return apiPostCall('uploadImg', data)
        },
        CREATE_FIZIOTERAPIJA: ({state}, data) => {
          return apiPostCall('newFizio', data)
        },
        DELETE_FIZIOTERAPIJA: ({commit, state}, data) => {
          commit('DELETE_FIZIO', data.idD)
          return apiPostCall('delFizio', data)
        },
        ADD_FIZIOTERAPIJA: ({commit, state}, data) => {
          commit('ADD_FIZIO', data)
        },
        CREATE_VINGROSANA: ({state}, data) => {
          return apiPostCall('newVingr', data)
        },
        ADD_VINGROSANA: ({commit, state}, data) => {
          commit('ADD_VINGR', data)
        },
        DELETE_VINGROSANA: ({commit, state}, data) => {
          commit('DELETE_VINGR', data.idD)
          return apiPostCall('delVingr', data)
        },
        EDIT_SECTION: ({state}, data) => {
          return apiPostCall(data.nav_url, data)
        },
        CREATE_DATA: ({commit, state}, data) => {
          commit('ADD_DATA', data)
        },
        DELETE_DATA: ({commit, state}, data) => {
          commit('DELETE_DATA', data)
          apiPostCall(data.nav_url, data)
        },
        UPDATE_DATA: ({commit, state}, data) => {
          commit('UPDATE_DATA', data)
        },
        LOGIN: ({commit, state}, data) => {
          if (data.check) {
            if (docCookies.getItem('login') !== null) {
              commit('LOGIN')
            } else {
              apiPostCall('login', data).then((res)=> {
                if(res.result) {
                  commit('LOGIN')
                }
              })
            }
          } else {
            apiPostCall('login', data).then((res)=> {
              if(res.result) {
                commit('LOGIN')
              }
            })      
          }    
        },
    },

    mutations: {
        SET_DATA: (state, data) => {
            // Vue.set(..., ..., ...) for objects
            // .push() for arrays
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    Vue.set(state.data, key, data[key])
                }
            }
            state.data.fizioterapija.text.reverse()
            state.data.vingrosana.text.reverse()
            state.data.galerijas.text.reverse()
        },
        ADD_FIZIO: (state, data) => {
          let length = state.data.fizioterapija.text.length
          state.data.fizioterapija.text.reverse()
          Vue.set(state.data.fizioterapija.text, length, data)
          state.data.fizioterapija.text.reverse()
        },
        DELETE_FIZIO: (state, id) => {
          Vue.delete(state.data.fizioterapija.text, id)
        },
        ADD_VINGR: (state, data) => {
          let length = state.data.vingrosana.text.length
          state.data.vingrosana.text.reverse()
          Vue.set(state.data.vingrosana.text, length, data)
          state.data.vingrosana.text.reverse()
        },
        DELETE_VINGR: (state, id) => {
          Vue.delete(state.data.vingrosana.text, id)
        },
        ADD_DATA: (state, data) => {
          let length = 0
          switch (data.nav_url) {
          case 'createKal':
            length = state.data.kalendars.trainings.length
            Vue.set(state.data.kalendars.trainings, length, data)
            break
          case 'createAdd':
            length = state.data.kontakti.text.length
            Vue.set(state.data.kontakti.text, length, data)
            break
          case 'newAbout':
            length = state.data.parmums.text.length
            Vue.set(state.data.parmums.text, length, data)
            break
          case 'newGal':
            length = state.data.galerijas.text.length
            state.data.galerijas.text.reverse()
            Vue.set(state.data.galerijas.text, length, data)
            state.data.galerijas.text.reverse()
            break
          }
        },
        DELETE_DATA: (state, data) => {
          switch (data.nav_url) {
            case 'delKal':
              Vue.delete(state.data.kalendars.trainings, data.idD)
              break
            case 'delAdd':
              Vue.delete(state.data.kontakti.text, data.idD)
              break
            case 'delAb':
              Vue.delete(state.data.parmums.text, data.idD)
              break
            case 'delGal':
              Vue.delete(state.data.galerijas.text, data.idD)
              break
          }
        },
        UPDATE_DATA: (state, data) => {
          switch (data.nav_url) {
            case 'editvideo':
            Vue.set(state.data.galerijas.text, data.idB, data)
            break
            case 'updateFiz':
            if (state.data.fizioterapija.text.hasOwnProperty(data.idB)) {
              Vue.set(state.data.fizioterapija.text, data.idB, data)
            }
            break
            case 'updateVin':
            if (state.data.vingrosana.text.hasOwnProperty(data.idB)) {
              Vue.set(state.data.vingrosana.text, data.idB, data)
            }
            break
          }
        },
        LOGIN: (state) => {
          Vue.set(state.data, 'login', true)
          docCookies.setItem('login', true)
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
      getAllData: state => {
        return state.data
      },
      getLogin: state => {
        return state.data.login
      },
    }
})
export default store
