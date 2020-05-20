<template>
	<div class="footerPage">
		<div class="dock">
			<ul class="pcview">
				<li v-for="(item,index) in iconList" :key="index" @click="topage">
					<span>{{item.text}}</span>
					<div><img :src="item.imgUrl"></div>
					<!-- <a href="javascript:void(0)"><img :src="item.imgUrl"></a> -->
				</li>
			</ul>
			<ul class="mobileview scrollInMobile">
				<li v-for="(item,index) in iconList" :key="index">
					<span>{{item.text}}</span>
					<a href="javascript:void(0)"><img :src="item.imgUrl"></a>
				</li>
				<li></li>
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
				iconList: [{
						text: 'Html',
						imgUrl: require('@/assets/img/html.png')
					},
					{
						text: 'Css',
						imgUrl: require('@/assets/img/css.png')
					},
					{
						text: 'Js',
						imgUrl: require('@/assets/img/js.png')
					},
					{
						text: 'Vue',
						imgUrl: require('@/assets/img/vue.png')
					},
					{
						text: 'React',
						imgUrl: require('@/assets/img/react.png')
					},
					{
						text: 'Angular',
						imgUrl: require('@/assets/img/angular.png')
					},
					{
						text: 'Node',
						imgUrl: require('@/assets/img/node.png')
					}
				]
			}
		},
		methods:{
			topage(){
				this.$router.push(`book`)
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
			.scrollInMobile{
				width: auto;
				display: flex;
				flex-direction: row;
				overflow-x: scroll;
				li:hover img {
					-webkit-transform: scale(1);
					margin: 0;
				}
				
				li:hover+li img,
				li.prev img {
					-webkit-transform: scale(1);
					margin: 0;
				}
			}
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
</style>
