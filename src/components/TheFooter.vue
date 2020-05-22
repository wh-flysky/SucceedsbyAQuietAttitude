<template>
	<div class="footerPage">
		<div class="dock">
			<ul class="pcview">
				<li v-for="(item,index) in iconList" :key="index" @click="topage(item.number)">
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
						imgUrl: require('@/assets/img/html.png'),
						number: 1000000000
					},
					{
						text: 'Css',
						imgUrl: require('@/assets/img/css.png'),
						number: 1100000000
					},
					{
						text: 'Js',
						imgUrl: require('@/assets/img/js.png'),
						number: 1200000000
					},
					{
						text: 'Http',
						imgUrl: require('@/assets/img/HTTP.png'),
						number: 1300000000
					},
					{
						text: 'Vue',
						imgUrl: require('@/assets/img/vue.png'),
						number: 1403000000
					},
					{
						text: 'React',
						imgUrl: require('@/assets/img/react.png'),
						number: 1404000000
					},
					// {
					// 	text: 'Angular',
					// 	imgUrl: require('@/assets/img/angular.png'),
					// 	number: ''
					// },
					// {
					// 	text: 'Node',
					// 	imgUrl: require('@/assets/img/node.png'),
					// 	number: 1701000000
					// },
					// {
					// 	text: 'MySql',
					// 	imgUrl: require('@/assets/img/mysql.png'),
					// 	number: 1704000000
					// },
					// {
					// 	text: 'Mobile',
					// 	imgUrl: require('@/assets/img/mobile.png'),
					// 	number: 1600000000
					// },
					// {
					// 	text: 'Tools',
					// 	imgUrl: require('@/assets/img/tools.png'),
					// 	number: 1500000000
					// },
					// {
					// 	text: 'MongoDB',
					// 	imgUrl: require('@/assets/img/mongodb.png'),
					// 	number: 1702000000
					// },
					// {
					// 	text: 'PHP',
					// 	imgUrl: require('@/assets/img/php.png'),
					// 	number: 1703000000
					// },
					// {
					// 	text: 'JQ',
					// 	imgUrl: require('@/assets/img/jq.png'),
					// 	number: 1401000000
					// }
				]
			}
		},
		methods:{
			topage(e){
				if(!e){
					return false
				}
				this.$router.push(`/categories/${e}`)
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
		z-index: 2;
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
