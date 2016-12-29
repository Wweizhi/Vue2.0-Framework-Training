
import Vue from 'vue'
import Vuex from 'vuex'
import * as action from './action'
import * as getters from './getters'
import * as types from './mutation-types'
import * as mutation from './mutation'
import counter from './modules/counter' 

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	action,
	getters,
	mutation,
	modules: {
		counter
	},
	strict: debug
})