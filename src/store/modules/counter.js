var timer = null;
const state = {
	count: 0,
	sum: 0
}

const getters = {
	evenOrOdd: (state) => {
		return (state.sum % 2 == 0) ? 'odd' : 'even'
	}
}

const mutations = {
	increment (state){
		state.count++
		state.sum++
	},
	decrement (state){
		state.count++
		state.sum--
	},
	abortIncrement (state){
		clearTimeout(timer)
	},
	resetCounter (state){
		clearTimeout(timer)
		state.count = state.sum = 0;
	}
}

const actions = {
	autoIncrement ({ state, commit }){
		clearTimeout(timer)
		 function timing(){
			timer = setTimeout(()=>{
				commit('increment')
				timing()
			}, 1000)
		}
		timing()
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}