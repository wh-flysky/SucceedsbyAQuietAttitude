<template>
	<div class="warp" :style="{width:boxwidth}">
		<header class="topBox_2Rd7RuN9">
			<BaseBack @click.native="$router.push($route.params.parentPath || '/')">返回</BaseBack>
		</header>
		<article class="article">
			<h1 class="title">{{articeTitle}}</h1>
			<div class="main" v-html="initalArticle" />
		</article>
	</div>
</template>

<script>
	import BaseArticle from '@/components/BaseArticle'
	import marked from 'marked'
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";
	import BaseBack from '@/components/BaseBack'
	export default {
		name: 'book',
		components: {
			BaseBack,
			BaseArticle
		},
		data() {
			return {
				string: '',
			}
		},
		computed: {
			...mapState(["reqData", "articeText" ,"articeTitle" ,"markdownStatus"]),
			initalArticle() {
				return marked(this.articeText, {
					headerIds: false,
					sanitize: true
				})
			},
			postId() {
				return this.$route.params.postid
			},
			boxwidth(){
				return this.markdownStatus ? '50%' : '100%'
			}
		},
		async mounted() {
			await this.getPostWithTheData(this.postId)
		},
		activated(){
			this.getPostWithTheData(this.$route.params.postid)
		},
		methods: {
			...mapMutations(["setComputer"]),
			...mapActions(["getCategoryByNumber", "getPostWithTheData"]),
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../style/github-markdown.css";
	.warp {
		height: calc(100vh - 30px);
		box-sizing: border-box;
		padding: 0 10px;
		background-color: #FAFAFA;
		position: absolute;
		top: 46px;
		right: 0;
	}

	.article {
		display: flex;
		flex-flow: column;
		box-sizing: border-box;
		height: calc(100% - 90px);
		padding: 14px;
		margin-top: 10px;
		border-radius: 6px;
		background: #fff;
		box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
	}

	.sectionPage {
		box-sizing: border-box;
		padding: 0 10px 10px;
		height: calc(100% - 150px);
		overflow-y: scroll;
	}


	.main {
		flex: 1;
		margin-top: 20px;
		overflow-x: hidden;
		overflow-y: auto;
		font-size: 14px;
		line-height: 2;
		word-break: break-all;
		-webkit-overflow-scrolling: touch;
		text-align: left;

		& a {
			text-decoration: underline;
		}

		& h2 {
			margin-bottom: 18px;
			border-bottom: 2px solid #efeaea;
			font-weight: normal;
			font-size: 1.3em;
		}

		& h3 {
			margin: 12px 0 8px;
			font-size: 1.2em;
			line-height: 1.2;

			&::after {
				width: 2px;
				padding-left: 6px;
				color: #2175bc;
				content: '|';
			}
		}

		& code {
			padding: .2em .4em;
			border-radius: 3px;
			font-size: 90%;
			background: rgba(27, 31, 35, .05);
		}

		& pre {
			display: block;
			padding: 1em;
			border: 2px solid #ddd;
			border-radius: 4px;
			overflow-x: auto;
			line-height: 1.6;
			background: #f8f8f8;
			-webkit-overflow-scrolling: touch;

			& code {
				padding: 0;
				background: none;
			}
		}

		& img {
			max-width: 100%;
		}

		& table {
			width: 100%;
			line-height: 1.5;
			text-align: center;
		}

		& td,
		& th {
			padding: 6px 12px;
			border: 1px solid #ddd;
		}

		@media screen and (max-width: 320px) {
			& iframe {
				max-width: 272px;
			}
		}
	}

	@media all and (min-width: 900px) {
		.main {
			font-size: 16px;
		}
	}

	.wrap_YgpFyIWY {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 10px;
		background: #eee;
	}

	.wrap_2d8lQMpw {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin: 0 auto;
	}

	.router_3tP_PZ18 {
		position: absolute;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
	}

	.title_1BPYEAuw {
		font-weight: 700;
		font-size: 1.2em;
		line-height: 2
	}

	.screen_1QeIuRPr {
		z-index: 3
	}

	.inner_IfZKF666 {
		position: absolute;
		top: 0;
		left: 50%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		min-width: 180px;
		padding: 16px;
		margin: 100px auto 0;
		border-radius: 4px;
		line-height: 22px;
		text-align: center;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(0, 0, 0, .3);
		-webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);
		box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);
		-webkit-transform: translateX(-50%);

		transform: translateX(-50%) p {
			display: block;
			margin-block-start: 1em;
			margin-block-end: 1em;
			margin-inline-start: 0px;
			margin-inline-end: 0px;
		}
	}

	.wrap_2d8lQMpw {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin: 0 auto
	}

	.wrap_69PY8VoY {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .4)
	}

	@-webkit-keyframes progressCircularRotate_1Zv1Syrw {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg)
		}
	}

	@keyframes progressCircularRotate_1Zv1Syrw {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg)
		}
	}

	@-webkit-keyframes progressCircularDash_2Kpt6AzA {
		0% {
			stroke-dasharray: 1px, 200px;
			stroke-dashoffset: 0
		}

		50% {
			stroke-dasharray: 100px, 200px;
			stroke-dashoffset: -15px
		}

		100% {
			stroke-dasharray: 100px, 200px;
			stroke-dashoffset: -120px
		}
	}

	@keyframes progressCircularDash_2Kpt6AzA {
		0% {
			stroke-dasharray: 1px, 200px;
			stroke-dashoffset: 0
		}

		50% {
			stroke-dasharray: 100px, 200px;
			stroke-dashoffset: -15px
		}

		100% {
			stroke-dasharray: 100px, 200px;
			stroke-dashoffset: -120px
		}
	}

	.svg_1iWvmae6 {
		color: #2196f3;
		-webkit-animation: progressCircularRotate_1Zv1Syrw 1.4s linear infinite;
		animation: progressCircularRotate_1Zv1Syrw 1.4s linear infinite
	}

	.circle_2hKuQ_8k {
		stroke-dasharray: 80px, 200px;
		stroke-dashoffset: 0;
		stroke: currentColor;
		stroke-linecap: round;
		-webkit-animation: progressCircularDash_2Kpt6AzA 1.4s ease-in-out infinite;
		animation: progressCircularDash_2Kpt6AzA 1.4s ease-in-out infinite
	}

	.title_2uhRexqi {
		float: left;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: calc(100% - 32px);
		padding: 4px 0;
		font-size: 1.2em;
		cursor: default
	}

	.exit_xlvJONYE {
		float: right;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 32px;
		padding: 2px 6px;
		font-size: 26px;
		cursor: pointer
	}

	.header_3253mhg6 {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 10px
	}

	.logoBox_3jApETtW {
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		cursor: pointer
	}

	.title_kdxIiydy {
		display: inline-block;
		margin-left: 4px;
		font-size: 1.1em;
		background-image: linear-gradient(160deg, #7fdbff, #0074d9);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text
	}

	.avatar_2SmYPAaS {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		line-height: 30px;
		text-align: center;
		color: #fff;
		background-color: #00a8e5;
		cursor: pointer
	}

	.wrap_YgpFyIWY {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 10px;
		background: #eee
	}

	.topBox_2Rd7RuN9 {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center
	}

	.contentBox_2wMhC8MM {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		cursor: pointer
	}

	.controlBox_3NGqJJND {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		text-align: center
	}

	.control_knHdb2YT {
		padding: 0 10px;
		cursor: pointer
	}

	h3 {
		display: block;
		font-size: 1.17em;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
	}

	.breadCrumb_1sFhe044 {
		-webkit-box-pack: end;
		-ms-flex-pack: end;
		justify-content: flex-end;
		line-height: 30px;
		color: rgba(0, 0, 0, .6)
	}

	.backBox_2D_1F2GX {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 1.1em;
		cursor: pointer
	}

	.svg_2y5bfIp0 {
		margin-right: 6px
	}

	.title_2cRpvvWT {
		-ms-flex-item-align: center;
		align-self: center;
		padding: 6px 0;
		font-weight: 400;
		font-size: 1.6em;
		line-height: 2;
		text-align: center;
		cursor: default
	}

	.list_AB3Cc_Fy {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		overflow: auto
	}

	.item_1o95kAD2 {
		-ms-flex-negative: 0;
		flex-shrink: 0;
		margin: 0 4px
	}

	.item_1o95kAD2::after {
		position: relative;
		left: 4px;
		content: '/'
	}

	.item_1o95kAD2:last-child::after {
		content: ''
	}

	.main_3o5eqx86 {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		margin-top: 20px;
		overflow-x: hidden;
		overflow-y: auto;
		font-size: 14px;
		line-height: 2;
		word-break: break-all;
		-webkit-overflow-scrolling: touch;
		text-align: left;
	}

	.main_3o5eqx86 a {
		text-decoration: underline
	}

	.main_3o5eqx86 h2 {
		margin-bottom: 18px;
		border-bottom: 2px solid #efeaea;
		font-weight: 400;
		font-size: 1.3em
	}

	.main_3o5eqx86 h3 {
		margin: 12px 0 8px;
		font-size: 1.2em;
		line-height: 1.2
	}

	.main_3o5eqx86 h3::after {
		width: 2px;
		padding-left: 6px;
		color: #2175bc;
		content: '|'
	}

	.main_3o5eqx86 code {
		padding: .2em .4em;
		border-radius: 3px;
		font-size: 90%;
		background: rgba(27, 31, 35, .05);
		text-align: left;
	}

	.main_3o5eqx86 pre {
		display: block;
		padding: 1em;
		border: 2px solid #ddd;
		border-radius: 4px;
		overflow-x: auto;
		line-height: 1.6;
		background: #f8f8f8;
		-webkit-overflow-scrolling: touch
	}

	.main_3o5eqx86 pre code {
		padding: 0;
		background: 0 0
	}

	.main_3o5eqx86 img {
		max-width: 100%
	}

	.main_3o5eqx86 table {
		width: 100%;
		line-height: 1.5;
		text-align: center
	}

	.main_3o5eqx86 td,
	.main_3o5eqx86 th {
		padding: 6px 12px;
		border: 1px solid #ddd
	}

	@media screen and (max-width:320px) {
		.main_3o5eqx86 iframe {
			max-width: 272px
		}
	}

	@media all and (min-width:900px) {
		.main_3o5eqx86 {
			font-size: 16px
		}
	}
</style>
