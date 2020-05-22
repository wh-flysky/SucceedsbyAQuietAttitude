import Vue from 'vue'
import Vuex from 'vuex'

/**
 * utils引入获取number方法
 * Categories 引入整体数据json
 * Artice 引入文章数据json
 */

import {
	getNumberWithoutPostPositiveZero,
	getCategoryNumbers
} from '@/utils/utils'
import Categories from '@/common/categories'
import Artice from '@/common/artice'

Vue.use(Vuex)

export default new Vuex.Store({
	/**
	 * docs 异步传来的数据
	 * reqData footer底部跳转列表页后过滤数据
	 * reqTitle 过滤列表类型及其描述
	 * computerType 点击我的电脑显示隐藏
	 * footerShow 底部显示隐藏
	 * articeList 文章数据
	 * articeText 解码后的html
	 * articeTitle 文章title
	 * sideBar 侧边栏显示隐藏
	 */
	state: {
		keepAlivePages: [],
		title: sessionStorage.getItem('title'),
		computerType: false,
		footerShow: true,
		docs: Categories.docs,
		reqData: [],
		reqDes: {},
		articeList: Artice,
		articeText:'',
		articeTitle:"",
		sideBarType:false
		
	},
	getters: {
		// 获取列表
		categoryCount: state => state.docs.length,
		getCategoriesByNumber: state => state.docs.reduce((obj, t) => {
			obj[t.number] = t
			return obj
		}, {}),
		getCategoryByNumber: state => number => state.docs.find(doc => doc.number === number),
		getPosterityCategories: (state, getters) => number => {
			const reg = new RegExp(`^${getNumberWithoutPostPositiveZero(number)}`)
			return state.docs.filter(doc => {
				doc.titleDatas = getCategoryNumbers(doc.number).map(t => getters.getCategoriesByNumber[t].name)
				return String(doc.number).match(reg) && (doc.posts.length)
			})
		},
		getChildrenCategoryies: state => number => {
			const reference = String(getNumberWithoutPostPositiveZero(number))
			const len = reference.length
			const regExp = new RegExp(`^${reference}(0[1-9]|[1-9][0-9])(0){${8 - len}}`)
			return state.docs.filter(doc => String(doc.number).match(regExp))
		},
		getCategoryRootDatas: state => state.docs.filter(doc => Number(String(doc.number).slice(2)) === 0),
		getRecommendedCategories: state => state.docs.filter(t => t.recommend).sort((a, b) => a.index - b.index),
		// 获取文章
	},
	mutations: {
		setTitle(state, value) {
			document.title = value;
			sessionStorage.setItem('title', value);
			state.title = value;
		},
		setKeepPages(state, value) {
			state.keepAlivePages = value;
		},
		setComputer(state, value) {
			state.computerType = value;
		},
		setReq(state, value) {
			state.reqData = value;
		},
		setDes(state, value) {
			state.reqDes = value;
		},
		setFootshow(state, value) {
			state.footerShow = value;
		},
		setArticeText(state, value) {
			state.articeText = value;
		},
		setArticeTitle(state, value) {
			state.articeTitle = value;
		},
		setSiderBar(state , value){
			state.sideBarType = value;
		}

	},
	actions: {
		/**
		 * @param {Object} content 获取列表数据
		 * @param {Object} payload 参数
		 */
		getCategoryByNumber(content, payload) {
			return new Promise((resolve) => {
				setTimeout(() => {
					// console.log(this.state.docs)
					content.commit('setDes', this.getters.getCategoryByNumber(payload))
					content.commit('setReq', this.getters.getPosterityCategories(payload))
					resolve()
				}, 300)
			})
		},
		/**
		 * @param {Object} content 获取文章数据
		 * @param {Object} payload id参数
		 */
		getPostWithTheData(content, payload) {
			return new Promise((resolve) => {
				setTimeout(() => {
					console.log(payload)
					let index = Artice.findIndex(item => item._id == payload)
					let text = decodeURIComponent(escape(window.atob(Artice[index].content)))
					let title = Artice[index].title;
					content.commit('setArticeText', text)
					content.commit('setArticeTitle', title)
					resolve()
				}, 300)
			})
		}



	}
})
