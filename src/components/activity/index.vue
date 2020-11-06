<!--
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-27 19:54:49
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-04 12:53:52
-->
<template>
	<div class="activity">
		<iframe
			src="static/bg-animate.html"
			scrolling="no"
			frameborder="0"
		></iframe>
		<div class="title">
			<h1>协会活动</h1>
			<p>协会以往的活动。都将展示在这里</p>
		</div>
		<div class="activity_content">
			<div
				v-for="item in this.activityList.slice().sort(compare('id'))"
				:key="item.index"
				class="activity_box"
			>
				<div class="imgBox">
					<img
						v-if="item.activity_image_thumbnail"
						:src="'http://127.0.0.1:8000' + item.activity_image_thumbnail.url"
						:width="item.activity_image_thumbnail.width"
						:height="item.activity_image_thumbnail.height"
					/>
				</div>
				<p>{{ item.title }}</p>
				<p>{{ item.activity_created_at }}</p>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
	import Axios from "axios";
	import { Component, Vue, Prop } from "vue-property-decorator";

	@Component
	export default class Activity extends Vue {
		activityIdList: number[] = [];
		activityList: any = [];
		compare(prop: any) {
			return function (a: any, b: any) {
				let value1 = a[prop];
				let value2 = b[prop];
				return value1 - value2;
			};
		}
		public mounted() {
			Axios.get("api/v2/pages/?type=activity.ActivityPage&limit=10&order=id")
				.then((response) => {
					for (const i in response.data.items) {
						this.activityIdList.push(Number(response.data.items[i].id));
					}
					this.activityIdList.sort();
					this.getActivityList();
				})
				.catch((error) => {
					console.log(error);
				});
		}

		public getActivityList() {
			for (const i in this.activityIdList) {
				Axios.get("/api/v2/pages/" + this.activityIdList[i] + "/")
					.then((response) => {
						// console.log(response.data);
						this.activityList.push(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}
</script>


<style lang="stylus" scoped>
	iframe
		z-index -1
		position absolute
		width 100vw
		height 100vh

	.activity
		div
			background-color fff
			color #111

	.activity_content
		display flex
		flex-wrap wrap
		justify-content center
		padding 1rem 20rem

	.activity_box
		flex 0 0 50%
		max-width 24rem
		margin 0 1rem
		text-align center
		color #333

		p:nth-child(2)
			font-size 1.8rem
			weight bold

	.title
		h1
			font-size 3rem
			margin 4rem 0 1rem 5rem
			color #212836

		p
			margin 0 5rem
			margin-bottom 3rem
			color #212836

	.imgBox
		width 24rem
		height 16rem
		overflow hidden

	.imgBox img
		transition all 0.4s
		-moz-transition all 0.4s
		-webkit-transition all 0.4s
		-o-transition all 0.4s

	.imgBox img:hover
		transform scale(1.2)
</style>