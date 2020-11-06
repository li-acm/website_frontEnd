<!--
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-27 12:22:02
 * @LastEditors: hongzai
 * @LastEditTime: 2020-09-27 20:49:55
-->
<template>
	<div>
		<iframe
			src="static/bg-breakdown.html"
			scrolling="no"
			frameborder="0"
		></iframe>
	</div>
</template>


<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	@Component
	export default class BgBreakdown extends Vue {}
</script>


<style lang="stylus" scope>
	iframe
		width 100%
		height 100%
</style>