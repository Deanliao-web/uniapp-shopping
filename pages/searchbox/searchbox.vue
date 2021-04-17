<template>
	<view>
		<view>
			<my-search @search="searching" :value="value"></my-search>
		</view>
		<view v-if="list.length==0" style="margin-top:80rpx">
			<view class="search_title" >搜索历史</view>
			<view class="search_title" style="margin-top:100rpx">搜索发现</view>
		</view>
		<view v-else style="margin-top:80rpx" @click="details">
			<view class="search_content" :data-item="item" v-for="(item,i) in list" :key="i" >
				<block class="search_name">{{item.description.substr(0,10)}}</block>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//获取的搜索信息
				list:[],
				//搜索的关键词内容，父子传参说
				value:''
			};
		},
		methods:{
			//查询函数,子父传参传来的value,子组件触发事件，传递参数给父组件，在父组件对应函数中执行
			searching(value){
				wx.cloud.init({
					env:"web2010dean-6gzr9t1a190f533d"
				});
					const db = wx.cloud.database();
					db.collection('weixin-project')
					  .where({
					    description:db.RegExp({
					      regexp:value,
					      option:'i'
					    })
					  })
					  .get().then(res=>{
							this.list=res.data;
						})
			},
			//跳转到详情页
			details(event){
				let item=JSON.stringify(event.target.dataset.item);
				// console.log(event.target.dataset.item);
				//点击跳转,保留当前页面跳转到详情页并传递参数
				uni.navigateTo({
					url:`../details/details?item=`+item
				})
			}
		}
	}
</script>

<style lang="scss">
.search_title{
	font-size:18px;margin-left:30rpx;color:#333333;
}
.search_content{
	border-bottom:1px solid #f8f8f8;
	font-size: 14px;margin-left:30rpx;
	height:80rpx;line-height: 80rpx;
}
.search_name{
	display: block;
	width:200px;	
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
