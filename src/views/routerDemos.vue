<template lang="html">
	<div>
		<h3>Hello! there are some demos of router!</h3>
		<el-button @click="goHome">
			Back To Home
		</el-button>	
	</div>
</template>

<script>
export default {
	data (){
		return {

		}
	},
	methods: {
		goHome (){
			this.$router.push({name: 'home'})
		},
	},
	components: {},
	beforeRouteEnter (to, from, next){
		next();
		// 不能访问实例 this
	},
	beforeRouteLeave (to, from, next){
		next();
		// 可访问实例 this
	}
}
</script>

<style lang="css">
	
</style>