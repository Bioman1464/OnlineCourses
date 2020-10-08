import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './Auth'

// import example from './module-example'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      Auth
    },
    strict: process.env.DEV
  })

  return Store
}
