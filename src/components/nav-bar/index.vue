<!--
 * @Descripttion: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-26 20:19:15
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-04 12:54:44
-->
<template>
	<div class="nav">
		<div class="nav-left">
			<h3>轻院计协官网</h3>
			<img src="../../assets/logo.png" alt="" />
		</div>
		<div class="nav-right">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">community</a></li>
				<li><a href="#">FAQ</a></li>
				<li><a href="#">Blog</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Vue, Component } from "vue-property-decorator";
	@Component
	export default class NavBar extends Vue {}
</script>

<style lang="stylus" scoped>
	.nav
		display flex
		background-color #222
		justify-content space-between
		height 78px
		align-items center

		.nav-left
			display flex
			align-items center
			flex-wrap nowrap
			color #fff
			width 15vw
			margin-left 6rem

			h3
				margin 0
				padding 0

			img
				width 4rem

		.nav-right
			margin-right 6rem

			a
				text-decoration none
				color #fff
				-webkit-tap-highlight-color rgba(255, 255, 255, 0)
				-webkit-user-select none
				-moz-user-focus none
				-moz-user-select none

			ul
				flex 4
				display flex
				flex-direction row
				margin 0
				padding 0
				font-weight bold

				li
					list-style none
					color #249df7
					padding 10px
					/* 设置relative,作为伪类::after定位的参照和width的参照基准 */
					position relative
					cursor pointer

				li::before, li::after
					content ''
					position absolute
					bottom 0
					left 50%
					height 2px
					width 0
					background-color #249df7
					transition all 0.5s ease-out

				li:hover::before
					width 50%
					left 0

				li:hover::after
					width 50%
</style>