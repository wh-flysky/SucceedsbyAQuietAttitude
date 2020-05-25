<template>
	<div class="header">
		<div class="headerPage">
			<ul class="header-left">
				<li class="iconfont">
					<span class="mobileview">&#xe60b;</span>
					<span @click="computer" class="pcview">&#xe60b;</span>
				</li>
				<li @click="markdown">MD</li>
				<!-- <li>壁纸</li>
				<li>关于</li> -->
			</ul>
			<span>succeeds by a quiet attitude</span>
			<ul class="header-right">
				<li class="iconfont" @click="mdshow"><i class="fa fa-folder" aria-hidden="true"></i></li>
<!-- 								<li class="iconfont">&#xe6c0;</li>
				<li class="iconfont">&#xe688;</li>
				<li class="iconfont">&#xe6ca;</li>
				<li class="iconfont">&#xe6a7;</li>
				<li class="iconfont">&#xe6cb;</li> -->
				<li class="iconfont" @click="basenav">&#xe6b8;</li>
				<li class="iconfont"></li>
			</ul>
		</div>
	</div>

</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex";
	export default {
		computed: {
			...mapState(["sideBarType" , "markdownStatus"])
		},
		props: {
			msg: String
		},
		data() {
			return {
				bgurl: require("@/assets/img/bg.jpg")
			}
		},
		methods: {
			...mapMutations(["setComputer" , "setSiderBar" , "setMarkdown"]),
			/**
			 * computer 打开我的电脑
			 * basenav 打开侧边栏
			 */
			computer(){
				this.setComputer(true)
			},
			basenav(){
				this.setSiderBar(!this.sideBarType)
			},
			markdown(){
				this.setMarkdown(!this.markdownStatus)
			},
			mdshow(){
				this.$router.push('/mdshow')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;

		.headerPage {
			width: 100%;
			position: relative;
			display: flex;
			height: 30px;
			line-height: 30px;
			background: #FBFCFB;
			box-shadow: 0 1px 8px #888888;
			color: #333;
			z-index: 5;

			.header-left,
			.header-right {
				flex: 1;
			}

			.header-left {
				text-align: left;
			}

			.header-right {
				text-align: right;
			}

			.header-left li {
				display: inline-block;
				margin: 0 10px;
				cursor: pointer;
			}

			.header-left li:first-child {
				margin-left: 20px;
			}

			.header-right li {
				display: inline-block;
				margin: 0 5px;
				cursor: pointer;
			}

			.header-right li:last-child {
				margin-right: 10px;
			}

		}
	}
</style>
