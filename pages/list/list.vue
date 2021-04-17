<template>
	<view class="content">
		<view class="search">
			<my-search @searchBox="gotosearch" :widthrpx="widthrpx" :camera="camera" ></my-search>
		</view>
		<!-- 左侧滚动条区域 -->
		<view style="margin-top:80rpx">
			<scroll-view scroll-y="true" show-scrollbar="true"
			 enhanced="true" enable-flex="true" class="listBar" @click="addNum">
			 <view class="listTitle" v-for="(item,i) in searchList" :key="i">
				 <view class="details" :data-id="item.id">
				 {{item.name}}
				 </view>
			 </view>
			</scroll-view>
		</view>
		<!-- 右侧正文区域 -->
		<view class="right_area" style="margin-top:80rpx">
			<my-recommends :details="details" :num="num" @jumpToDetails="toDetails"></my-recommends>
		</view>
	</view>
</template>

<script>
	import {lists} from '../../common/lists.js'
	import badgeMix from '../../mixins/tabbar-badage.js';
	export default {
		mixins:[badgeMix],
		data() {
			return {
				widthrpx:70,
				camera:0,
				//左侧滚动条内容数组
				searchList:[],
				//控制切换的变量
				num:99,
				//切换页面内容的信息
				details:[],

			};
		},
		onLoad(){
			//获取从外部获得的列表名称
			this.searchList=lists;
			//请求数据
			this.getfun(this.num-98)
		},
		methods:{
		//跳转到详情页
		toDetails(list_item){
			let item=JSON.stringify(list_item);
			// console.log(event.target.dataset.item);
			//点击跳转,保留当前页面跳转到详情页并传递参数
			uni.navigateTo({
				url:`../details/details?item=`+item
			})
		},			
			addNum(e){
				//将自定义属性的id值赋值给变量,控制显示对相应的组件
				this.num=e.target.dataset.id;
				//发送请求获取数据
				this.getfun(this.num-98)
			},
			//使用自定义封装的方法获取数据
			getfun(num){
				this.$request.function("weixin-project",num).then(res=>{
					// console.log(res);
					this.details=res;
				})
			},
			//跳转搜索页面
			gotosearch(){
				uni.navigateTo({
					url:'../searchbox/searchbox'
				})
			}
		}
	}
</script>

<style lang="scss">
.search{
	position:absolute;
	z-index:10;
	height:80rpx;width:100%;
	background-color: #eb4935;
}	
.listBar{
	display:flex;
	background-color:#f8f8f8;
	color:#333333;flex-wrap: wrap;
	flex-direction: column;
	border-top:1px solid gray;
	width:80px;
}

.listTitle{
	color:#2e2d2d;height:90rpx;
	display: inline-block;
}
.details{
	font-size:14px;height:40rpx;line-height:40rpx;
	margin-top:12rpx;padding:10rpx 0rpx 0rpx 30rpx;
	vertical-align: middle;
}
.details:first-child>view{
	font-weight:bold;	border-left:3px solid red;
}
.details:hover{
	font-weight:bold;	border-left:3px solid red;
}
.listTitle:hover{
	background-color: white;
}
.content{
	display: flex;
}

</style>
