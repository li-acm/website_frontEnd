<!--
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-27 11:08:33
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-04 11:42:05
-->
<template>
	<div class="home" scroll="no">
		<nav-bar></nav-bar>
		<bg-breakdown class="bg"></bg-breakdown>
		<glory></glory>
		<activity></activity>
		<site-footer></site-footer>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import NavBar from "@/components/nav-bar/index.vue";
	import BgBreakdown from "../components/bg-breakdown/index.vue";
	import SiteFooter from "../components/site-footer/index.vue";
	import Activity from "../components/activity/index.vue";
	import Glory from "../components/glory/index.vue";
	@Component({
		components: {
			NavBar,
			BgBreakdown,
			Activity,
			Glory,
			SiteFooter,
		},
	})
	export default class Home extends Vue {}
</script>
<style lang="stylus" scoped>
	.home
		font-family Matter, AcuminPro, Helvetica, sans-seri
		width 100vw
		height 100vh
		background-color #222

		.bg
			background-color #fff
			height 100vh
</style>