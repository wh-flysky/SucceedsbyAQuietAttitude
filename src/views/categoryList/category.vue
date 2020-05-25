<template>
	<article class="box" :style="{width:boxwidth}">
		<BaseBack @click.native="$router.push($route.params.parentPath || '/')">类别列表</BaseBack>
		<BaseTitle>{{ reqDes.name }}知识体系</BaseTitle>
		<section class="main">
			<p class="description">{{ reqDes.description }}</p>
			<dl v-for="(item, index) in reqData" :key="index">
				<dt>
					<BreadCrumb class="bread-crumb" :datas="item.titleDatas" />
				</dt>
				<dd v-for="(innerItem, innerIndex) in item.posts" :key="innerIndex" class="item"
				 @click="$router.push({name:'book',params: { postid: innerItem._id, parentPath: $route.path }
          })">{{ innerItem.title }}</dd>
			</dl>
		</section>
	</article>
</template>
<script>
	import BaseBack from '@/components/BaseBack'
	import BreadCrumb from '@/components/BreadCrumb'
	import BaseTitle from '@/components/BaseTitle'
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";
	export default {
		components: {
			BreadCrumb,
			BaseBack,
			BaseTitle
		},
		computed: {
			paramsNumber() {
				return this.$route.params.number
			},
			...mapState(["reqData", "reqDes" , "markdownStatus" ]),
			boxwidth(){
				return this.markdownStatus ? '50%' : '100%'
			}
		},
		async mounted() {
			await this.getCategoryByNumber(Number(this.paramsNumber))
		},
		methods: {
			...mapMutations(["setComputer"]),
			...mapActions(["getCategoryByNumber"])
		}
	}
</script>
<style lang="scss" scoped>
	.box {
		display: flex;
		flex-flow: column;
		align-items: flex-start;
		box-sizing: border-box;
		height: calc(100vh - 30px);
		padding: 10px;
		font-size: 1.1em;
		line-height: 2.2;
		background-color: #fafafa;
		position: absolute;
		top: 30px;
		right: 0;
	}

	.main {
		flex: 1;
		width: 100%;
		margin-top: 10px;
		overflow-y: auto;
		text-align: left;
	}

	.description {
		margin-bottom: 10px;
		white-space: pre-wrap;
	}

	.bread-crumb {
		border-radius: 4px;
		line-height: 50px;
		color: rgba(0, 0, 0, .6);
		background: #eee;
		cursor: default;
	}

	.item {
		overflow: hidden;
		line-height: 50px;
		text-overflow: ellipsis;
		text-indent: 2em;
		white-space: nowrap;
		color: rgba(0, 0, 0, .8);
		cursor: pointer;

		&:nth-of-type(odd) {
			background-color: #fff;
		}
	}
</style>
