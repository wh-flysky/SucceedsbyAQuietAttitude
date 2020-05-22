<template>
	<div class="content" :style="{backgroundImage:'url('+bgurl+')'}">
		
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex";
	export default {
		name: 'home',
		props: {
			msg: String
		},
		data() {
			return {
				bgurl: require("@/assets/img/bg.jpg")
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.content {
		width: 100%;
		height: calc(100vh - 30px);
		background-position: center 0;
		background-size: cover;
		overflow: hidden;
		.app-list {
			display: flex;
			height: 80vh;
			flex-direction: column;
			flex-wrap: wrap;
			align-content: flex-start;
			padding-left: 20px;
		}

		.app-list .list-item {
			width: 60px;
			margin-top: 20px;
			margin-left: 25px;
			cursor: pointer;
		}

		.app-list .list-item img {
			width: 100%;
		}

		.app-list .list-item span {
			display: block;
			line-height: 21px;
			text-align: center;
			background: rgba(0, 0, 0, 0.2);
			border-radius: 18px;
			margin-top: 8px;
			font-size: 12px;
			color: #FFFFFF;
		}
	}
</style>
