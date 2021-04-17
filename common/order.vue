<template>
	<view>
		<view class="del-item" v-if="name==='待付款'">
			<view>
				<view class="del-item-title">待付款</view>
			</view>
			<view class="del-item-content" v-for="(item,i) in orders[orders.length-1].goods" :key="i">
				<view>名称：{{item.goods_description}}</view>
				<view>数量：{{item.goods_count}}</view>
				<view>总价：{{item.goods_price}}</view>
			</view>
		</view>
		<view class="del-item" v-else-if="name==='全部订单'">
			<view>
				<view class="del-item-title">全部订单</view>
			</view>
			<view class="del-item-content" v-for="(item,i) in orders" :key="i">
				<view v-for="(item2,k) in item.goods" :key='k'>
				<view>名称：{{item2.goods_description}}</view>
				<view>数量：{{item2.goods_count}}</view>
				<view>总价：{{Number(item2.goods_price*item2.goods_count).toFixed(2)}}</view>						
				</view>
			</view>
		</view>
		<view v-else></view>
	</view>
</template>

<script>
	export default{
	props:['orders','name'],	
		data(){
			return{
				
			}
		},
		onLoad(){
			console.log(this.orders)
		}
	}
</script>

<style lang="scss">
.del-item{
	margin:20rpx 5rpx;
	font-size:12px;
}
.del-item-content{
	padding-left:30rpx;
}
.del-item-title{
	font-weight:bold;
	font-size:16px;
}	
</style>
