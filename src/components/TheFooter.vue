<template>
	<div class="footerPage">
		<div class="dock">
			<ul>
				<li v-for="(item,index) in iconList" :key="index">
					<span>{{item.text}}</span>
					<a href="javascript:void(0)"><img :src="item.imgUrl"></a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		props: {

		},
		data() {
			return {
				iconList:[
					{
						text:'Finder',
						imgUrl:require('@/assets/img/1.png')
					},
					{
						text:'Chrome',
						imgUrl:require('@/assets/img/2.png')
					},
					{
						text:'Codepen',
						imgUrl:require('@/assets/img/5.png')
					},
					{
						text:'Launchpad',
						imgUrl:require('@/assets/img/6.png')
					},
					{
						text:'System setup',
						imgUrl:require('@/assets/img/7.png')
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footerPage {
		position: fixed;
		bottom: 0;
		padding: 16px 0;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 10px 10px 0 0;
		text-align: center;
		.dock {
			width: 100%;
			text-align: center;
			margin: 0 auto;
		}

		li {
			list-style-type: none;
			display: inline-block;
			position: relative;
			margin-left: 10px;
		}

		li img {
			width: 50px;
			height: 50px;
			-webkit-box-reflect: below 2px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255, 255, 255, .5)));
			-webkit-transition: all 0.3s;
			-webkit-transform-origin: 40% 70%;
		}

		li:hover img {
			-webkit-transform: scale(2);
			margin: 0 2em;
		}

		li:hover+li img,
		li.prev img {
			-webkit-transform: scale(1.5);
			margin: 0 1.5em;
		}

		li span {
			display: none;
			position: absolute;
			bottom: 100px;
			left: 0;
			width: calc(100% - 10px);
			margin-left: 10px;
			background-color: #222;
			padding: 4px 0;
			border-radius: 7px;
		}

		li:hover span {
			display: block;
			color: #fff;
		}
	}
	
	@media (max-width: 480px) {
		.footerPage{
			width: 90%;
		}
	}
	
	@media (min-width: 800px) {
		.footerPage{
			left: calc(50% - 400px);
			width: 800px;
		}
	}
	
</style>
