<template lang="html">
	<div>
		<h2>{{title}}</h2>
	    <transition name="fade" mode="out-in">
	      	<router-view></router-view>
	    </transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hi Vue2.0 Demos!'
		}
	},
	methods: {},
	components: {},
}
</script>

<style lang="css">
h2{ color: #9c9; }
</style>	