import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let store = new Vuex.Store({})

store.$axios = axios

export default store
