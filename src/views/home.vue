<template lang="html">
	<div>
		<h3>Home View! {{date}}</h3>
		<el-button type="primary">
			<router-link :to="{name: 'router'}">Go To Router's View</router-link>
		</el-button>
	</div>
</template>

<script>
export default {
	data (){
		return {
			date: new Date().toString(),
		}
	},
	methods: {
		timing (){
			const $vm = this
			const timer = function (){
				$vm.date = new Date().toString()
				setTimeout(()=>{ timer() }, 1000)
			}
			setTimeout(()=>{ timer() }, 1000)
		}
	},
	created (){
		this.timing()
	}
}
</script>

<style lang="css">
	
</style>