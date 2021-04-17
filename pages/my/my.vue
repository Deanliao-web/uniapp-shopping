<template>
	<view class="my-container">
    <!-- 用户未登录时，显示登录组件 -->
    <my-login v-if="!token"></my-login>
    <!-- 用户登录后，显示用户信息组件 -->
    <my-userinfo :order="order" v-else></my-userinfo>
	</view>
</template>

<script>
	import badgeMix from '../../mixins/tabbar-badage.js';
	// 1. 从 vuex 中按需导入 mapState 辅助函数
	import { mapState } from 'vuex'	
	export default {
		mixins:[badgeMix],
		data() {
			return {
				order:[]
			};
		},
		onLoad(){
		wx.cloud.init({
			env:"web2010dean-6gzr9t1a190f533d"
		});
		const db = wx.cloud.database();
	 db.collection('weixin-order').get().then(res=>{
		 this.order=res.data
		 console.log(res.data)
	 })					
	},
computed:{
    // 2. 从 myuser 模块中导入需要的 token 字符串
    ...mapState('myuser', ['token']),	
}		
	}
</script>

<style lang="scss">
.my-container {
  height: 100%;
}
</style>
