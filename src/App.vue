<template>
	<div id="app">

		<!-- 头部 -->
		<TheHeader></TheHeader>

		<!-- 页面容器 -->
		<div class="container">
			<transition :name="transitionName">
				<keep-alive :include="keepAlivePages">
					<router-view />
				</keep-alive>
			</transition>
		</div>
		
		<!-- 底部tab栏 -->
		<TheFooter></TheFooter>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader'
	import TheFooter from '@/components/TheFooter'
	import {
		mapState,
		mapMutations
	} from "vuex";
	export default {
		name: 'app',
		components: {
			TheHeader,
			TheFooter
		},
		data() {
			return {
				transitionName: ''
			}
		},
		computed: {
			...mapState(["keepAlivePages"])
		},
		watch: {
			$route(to, from) {
				let isBack = this.$router.isBack;
				if (isBack) {
					this.transitionName = 'slide-right'
				} else {
					this.transitionName = 'slide-left'
				}
				this.$router.isBack = false;
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.container {
			width: 100%;
			// max-width: 960px;
		}
	}

	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		will-change: transform;
		transition: all 0.3s;
		position: absolute;
		width: 100%;
		left: 0;
	}

	.slide-right-enter {
		transform: translateX(-100%);
	}

	.slide-right-leave-active {
		transform: translateX(100%);
	}

	.slide-left-enter {
		transform: translateX(100%);
	}

	.slide-left-leave-active {
		transform: translateX(-100%);
	}
</style>
