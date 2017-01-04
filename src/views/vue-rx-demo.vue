<template lang="html">
	<div>
		<h3>{{title}}</h3>
		<el-row>
			<el-col :span="6">
				<el-input
					class="inline-input"
					v-model="inputStr"
					placeholder="请输入内容"
				></el-input>
				<p>{{result}}</p>
			</el-col>
			<el-col :span="6" :offset="1">
				<el-button v-for="item in arr" class="rx-btn pull-right">rx click{{item}}</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Rx from 'rxjs/Rx'
export default {
	data (){
		return {
			title: 'Just a vue-rx demo!',
			inputStr: '',
			arr2: []
		}
	},
	methods: {
	},
	subscriptions (){
		const inputStream = this.$watchAsObservable('inputStr')
													.debounceTime(300)
													.pluck('newValue')
													.map(x => x)
													.distinctUntilChanged()
													.filter(x => !!x)
		return {
			arr: Rx.Observable.from([0,1,2,3,4,5]).map(x => { return (x*2) }).toArray(),
			inputResult : inputStream,
			result: inputStream
								.switchMap(x => {
									const oPromise = new Promise((resolve, reject) => {
										setTimeout(() => {
											resolve('本次输入结果为' + x + '，搜索结果为>....')
										}, 600)
									})
									return Rx.Observable.fromPromise(oPromise)
								})
								.merge(inputStream.map(()=>'搜索中 ＝＝＝＝'))
								.startWith('未搜索...')
		}
	},
	mounted (){
		this.$subscribeTo(Rx.Observable.fromEvent(document.querySelectorAll('.rx-btn'), 'click'), (e) => {
			console.log(e.target)
		})
		
	}
}
</script>