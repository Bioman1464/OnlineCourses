import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'

import axios from 'axios'
import API, { BASE_URL } from 'boot/axios'

export const actions = {
  sanctum (next) {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}sanctum/csrf-cookie`).then(() => {
        next()
      }).catch((error) => {
        reject(error)
      })
    })
  },
  signUp ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post('Auth/register', data).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error.response.data.errors)
      })
    })
  },
  signIn ({ commit, dispatch }, data) {
    return new Promise((resolve, reject) => {
      dispatch('sanctum',
        API.post('Auth/login', data).then((response) => {
          commit('SET_TOKEN', response.data.access_token)
          API.defaults.headers.Authorization = 'Bearer ' + response.data.access_token
          localStorage.setItem('jwt', response.data.access_token)
          resolve(response)
        }).catch((error) => {
          reject(error)
        }))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
