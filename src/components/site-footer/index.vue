<!--
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-27 20:08:07
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-03 15:58:26
-->
<template>
	<div>
		<div class="footer">
			<svg
				class="editorial"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 24 150 28"
				preserveAspectRatio="none"
			>
				<defs>
					<path
						id="gentle-wave"
						d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
					/>
				</defs>
				<g class="parallax">
					<use xlink:href="#gentle-wave" x="50" y="0" fill="#4579e2" />
					<use xlink:href="#gentle-wave" x="50" y="3" fill="#3461c1" />
					<use xlink:href="#gentle-wave" x="50" y="6" fill="#2d55aa" />
				</g>
			</svg>
			<div class="content">
				<h1>Live long and prosper</h1>
				<h1>生生不息 繁荣昌盛</h1>
				<el-main class="main-container">
					<div class="about">
						<ul>
							<h3>关于我们</h3>
							<li>团队</li>
							<li></li>
							<li></li>
						</ul>
					</div>
					<div class="contact-us">
						<ul>
							<h3>联系方式</h3>
							<li>微信公众号</li>
						</ul>
					</div>
					<div class="follow-us">
						<h3>关注我们的动态</h3>
					</div>
					<div class="copyright">
						<p>© 2020 贵州轻工acm all registered .</p>
					</div>
				</el-main>
			</div>

			<link
				href="https://fonts.googleapis.com/css?family=Lato:100"
				rel="stylesheet"
			/>
		</div>
	</div>
</template>


<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";

	@Component
	export default class SiteFooter extends Vue {}
</script>


<style lang="stylus" scoped>
	.main-container
		padding 0
		display flex
		flex-wrap wrap
		justify-content space-between
		color #fff
		text-align center

		li
			list-style-type none

		.about
			flex 20%

		.contact-us
			flex 20%

		.follow-us
			flex 20%

		.copyright
			flex 100%

	::selection
		background-color salmon
		color white

	.parallax > use
		animation move-forever 12s linear infinite

		&:nth-child(1)
			animation-delay -2s

		&:nth-child(2)
			animation-delay -2s
			animation-duration 5s

		&:nth-child(3)
			animation-delay -4s
			animation-duration 3s

	@keyframes move-forever
		0%
			transform translate(-90px, 0%)

		100%
			transform translate(85px, 0%)

	.editorial
		display block
		width 100%
		height 10em
		max-height 100vh
		margin 0

	body
		background-color #323232
		margin 0
		max-height 100vh
		overflow hidden
		padding 9em 0 0 0

	.content
		font-family 'Lato', sans-serif
		text-align center
		background-color #2d55aa
		text-align center
		min-height 25vh
		margin -0.1em 0 0 0
		padding 1em
		color #eee
		font-size 2em
		font-weight 300

	.content
		font-size 1em

	.content h1
		margin 0.5rem 0
		font-weight 100
		font-size 5em
		user-select none
		cursor default

	/* prevent many large-by-comparison ripples by shrinking the height */
	@media (max-width 50em)
		.content h1
			font-size 12vmax

		.editorial
			height 17vw

	h1
		outline none

	body
		background-color #234
</style>
