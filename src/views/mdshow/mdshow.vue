<template>
	<div class="mdshow" v-html="htmlMD"></div>
</template>
<script>
	import markLoader from '@/utils/markdownLoader'
	import BaseBack from '@/components/BaseBack'
	import BreadCrumb from '@/components/BreadCrumb'
	import BaseTitle from '@/components/BaseTitle'
	// import md from '@/MD/node/node1.md'
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";
	export default {
		data(){
			return{
				htmlMD:''
			}
		},
		components: {
			BreadCrumb,
			BaseBack,
			BaseTitle
		},
		computed: {
			...mapState(["reqData", "reqDes" , "markdownStatus" ]),
			boxwidth(){
				return this.markdownStatus ? '50%' : '100%'
			}
		},
		mounted() {
			this.htmlMD = markLoader('@/MD/node/node1.md');
		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	.mdshow{
		width: 100%;
		height: 100%;
		background-color: palevioletred;
	}
</style>
