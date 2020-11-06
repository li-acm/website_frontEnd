
<!--
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-27 11:08:33
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-02 18:08:02
-->
<template>
	<div id="app"><Home></Home></div>
</template>
<script lang="ts">
	import { Vue, Component } from "vue-property-decorator";
	import Home from "@/views/Home.vue";
	@Component({
		components: {
			Home,
		},
	})
	export default class App extends Vue {}
</script>
<style lang="stylus">
	::-webkit-scrollbar
		width 0 !important

	::-webkit-scrollbar
		width 0 !important
		height 0

	#app
		font-family 'Lato', Avenir, Helvetica, Arial, sans-serif, Georgia, Microsoft YaHei
		-webkit-font-smoothing antialiased
		-moz-osx-font-smoothing grayscale
</style>
