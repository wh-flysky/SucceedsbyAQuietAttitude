<template>
	<transition name="" enter-active-class="animated zoomInRight"  leave-active-class="animated bounceOutRight">
		<div class="sideBar" v-if="sideBarType">
			<div class="wrap">
			    <nav>
					<router-link class="item" to="/categories/1000000000">HTML</router-link>
					<router-link class="item" to="/categories/1100000000">CSS</router-link>
					<router-link class="item" to="/categories/1200000000">JavaScript</router-link>
					<router-link class="item" to="/categories/1300000000">HTTP</router-link>
			      <div class="item">
			        <details>
			          <summary>前端框架</summary>
			          <nav>
			            <router-link class="dItems" to="/categories/1404000000">React</router-link>
			            <router-link class="dItems" to="/categories/1403000000">Vue</router-link>
			            <router-link class="dItems" to="/categories/1401000000">jQuery</router-link>
			            <router-link class="dItems" to="/categories/1402000000">Bootstrap</router-link>
			          </nav>
			        </details>
			      </div>
			      <router-link class="item" to="/categories/1500000000">前端工具</router-link>
			      <router-link class="item" to="/categories/1600000000">移动端</router-link>
			      <div class="item">
			        <details>
			          <summary>后端相关</summary>
			          <nav>
			            <router-link class="dItems" to="/categories/1701000000">NodeJS</router-link>
			            <router-link class="dItems" to="/categories/1702000000">MongoDB</router-link>
			            <router-link class="dItems" to="/categories/1703000000">PHP</router-link>
			            <router-link class="dItems" to="/categories/1704000000">MySQL</router-link>
			          </nav>
			        </details>
			      </div>
			    </nav>
			  </div>
		</div>
	</transition>

</template>

<script>
	export default{
		name: 'BaseNav',
		data() {
			return {
				
			}
		},
		props: {
			sideBarType: Boolean
		},
		methods: {
		
		}
	}
</script>

<style lang="scss" scoped>
	.sideBar{
		padding: 0 20px;
		height: calc(100vh - 30px);
		background-color: rgba(0,0,0,.7);
		position: fixed;
		right: 0;
		bottom: 0;
		z-index: 3;
		overflow-y: scroll;
		.wrap {
		  box-sizing: border-box;
		  min-height: 100%;
		  padding: 10px;
		  min-width: 170px;
		}
		
		.item {
		  cursor: pointer;
		  display: block;
		  width: 80%;
		  max-width: 800px;
		  margin: 16px auto;
		  border-radius: 6px;
		  font-size: 1.1em;
		  line-height: 50px;
		  text-align: center;
		  color: rgba(0, 0, 0, .8);
		  background: rgba(255, 255, 255, .4);
		  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
		}
		
		.dItems {
		  display: block;
		  line-height: 40px;
		
		  &:nth-child(odd) {
		    background: #eee;
		  }
		}
	}
	
</style>
