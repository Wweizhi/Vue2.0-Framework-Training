<template lang="html">
	<div>
		<h3>Click: {{count}} times, sum = {{sum}}, it is {{evenOrOdd}}, {{greeting}}</h3>
		<el-button type="primary" @click="increment">increment</el-button>
		<el-button type="primary" @click="decrement">decrement</el-button>
		<el-button type="success" @click="autoIncrement">auto increment</el-button>
		<el-button type="default" @click="abortIncrement">abort increment</el-button>
		<el-button type="primary" @click="resetCounter">reset</el-button>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
export default {
	computed: {
		...mapState({
			'count': state => state.counter.count,
			sum: state => state.counter.sum
		}),
		...mapGetters([
			'evenOrOdd'
		]),
		greeting (){ return 'hello vuex example!' }
	},
	methods: {
		...mapMutations([
			'increment',
			'decrement',
			'abortIncrement',
			'resetCounter'
		]),
		...mapActions([
			'autoIncrement'
		])
	}
}
</script>