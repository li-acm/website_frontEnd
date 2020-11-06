<!--
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-11-02 20:17:01
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-04 14:10:54
-->
<template>
	<div>
		<div class="title">
			<h1>协会荣誉</h1>
			<h2>join us</h2>
			<p>协会的荣誉，是支撑我们走下去的动力</p>
		</div>
		<div class="glory_content">
			<div
				v-for="item in this.gloryList.slice().sort(compare('id'))"
				:key="item.index"
				class="glory_box"
			>
				<div class="imgBox">
					<img
						v-if="item.glory_image_thumbnail"
						:src="'http://127.0.0.1:8000' + item.glory_image_thumbnail.url"
						:width="item.glory_image_thumbnail.width"
						:height="item.glory_image_thumbnail.height"
					/>
				</div>
				<p>{{ item.title }}</p>
				<p>{{ item.glory_created_at }}</p>
			</div>
		</div>
		<div class="more">
			<el-button plain type="primary">了解更多</el-button>
		</div>
	</div>
</template>


<script lang="ts">
	import Axios from "axios";
	import { Component, Vue } from "vue-property-decorator";

	@Component
	export default class Glory extends Vue {
		gloryIdList: number[] = [];
		gloryList: any = [];
		compare(prop: any) {
			return function (a: any, b: any) {
				let value1 = a[prop];
				let value2 = b[prop];
				return value1 - value2;
			};
		}
		mounted() {
			Axios.get("api/v2/pages/?type=glory.GloryPage&limit=10&order=id")
				.then((response) => {
					for (const i in response.data.items) {
						this.gloryIdList.push(Number(response.data.items[i].id));
					}
					this.getGloryList();
				})
				.catch((error) => {
					console.log(error);
				});
		}
		getGloryList() {
			for (const i in this.gloryIdList) {
				Axios.get("/api/v2/pages/" + this.gloryIdList[i] + "/")
					.then((response) => {
						this.gloryList.push(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}
</script>


<style lang="stylus" scoped>
	.title
		display block
		width 100vw
		height 40vh
		padding-top 10vh
		background url('../../assets/glory-bg.jpg')
		background-repeat no-repeat
		text-align center
		color #fff
		font-size 1.6rem

		h1
			margin-top 0

	.more
		text-align center

		.el-button
			width 20rem

	.glory_content
		display flex
		justify-content space-evenly
		flex-wrap wrap

	.glory_box
		margin 1rem 1rem
		color #91979b

	.imgBox
		display flex
		// justify-content center
		align-items center

	.imgBox img
		width 309px
		height 528px
		-webkit-transition all 0.4s
		transition all 0.4s
		-moz-transition all 0.4s
		-webkit-transition all 0.4s
		-o-transition all 0.4s

	.imgBox img:hover
		transform scale(1.05)
</style>