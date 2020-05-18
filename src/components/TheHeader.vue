<template>
	<div class="header">
		<div class="headerPage">
			<ul class="header-left">
				<li class="iconfont"><a href="https://www.apple.com/cn/" target="_blank" title="苹果官网">&#xe60b;</a></li>
				<li><a href="https://github.com/lw1995/Vue-Mac-WebDesktop" target="_blank">GitHub</a></li>
				<li>文件</li>
				<li>壁纸</li>
				<li>关于</li>
			</ul>
			<ul class="header-right">
				<li class="iconfont">&#xe6c0;</li>
				<li class="iconfont">&#xe688;</li>
				<li class="iconfont">&#xe6ca;</li>
				<li class="iconfont">&#xe6a7;</li>
				<li class="iconfont">&#xe6cb;</li>
				<li class="iconfont">&#xe6b8;</li>
				<li class="iconfont"></li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	export default {
		props: {
			msg: String
		},
		data() {
			return {
				bgurl:require("@/assets/img/bg.jpg")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
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
