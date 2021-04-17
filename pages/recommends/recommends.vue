<template>
	<view class="recommends">
		<!-- 专场推荐 -->
		<view class="first" v-if="num%2==1">
			<view class="first_view">专场推荐</view>
			<view class="firstframe" @click="jumpToDetails">	
				<view class="inner" v-for="(item,i) in details" :key="i"  >				
					<view class="inner_first">
						<p class="inner_firp">圆宝宝计划</p>
						<p class="inner_secp">低至9.9元</p>
					</view>
					<view>
						<image style="width:100rpx;height:100rpx;" :src="item.img" :data-del="item"></image>
					</view>			
				</view>
			</view>
		</view>
		<!-- 商品轮播图 -->
		<view class="swiper">
			<swiper  indicator-dots="true" autoplay="true" interval="3000"
			duration="500">
				<swiper-item v-for="(item,i) in details" :key="i">
					<image class="img" :src="item.img"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 猜你想搜 -->
		<view class="first guess">
			<view>猜你想搜</view>
			<view class="guessframe" @click="jumpToDetails">
				<veiw class="guess_content" v-for="(item,i) in details.concat(details,details)" :key="i" >
					<view>
						<image style="width:150rpx;height:150rpx;"
					 :src="item.img" :data-del="item">
					 </image>
					</view>
					<text>{{item.description.substr(0,4)}}</text>
				</veiw>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["details","num"],
		data() {
			return {
				// details:[]
			};
		},
		onLoad(){
			
		},
		methods:{
			jumpToDetails(event){
				this.$emit('jumpToDetails',event.target.dataset.del)
			}
		}
	}
</script>

<style lang="scss">
.recommends{
border-top:1px solid gray;
padding:50rpx 0rpx 0rpx 30rpx;
width:100%;
}
.first{
	font-size:14px;
	font-weight: bold;
}
.firstframe{
display:flex;flex-wrap:wrap;justify-content: center;	
}
.first .first_view{
	margin-left:20rpx
}
.inner{
display:flex;
margin:10rpx 0rpx 0rpx 10rpx;
	
}
//样式警告
.inner .inner_first{
	display:flex;flex-direction:column;
	justify-content:center;
}
.inner .inner_firp{
	font-size:12px;color:#333333;
	font-weight: bold;
}
.inner .inner_secp{
	font-size:10px;color:#eb5153;
}
//轮播图样式
.swiper{
	background-color: #f4f4f4;
	border:1px solid white;
	border-radius:20rpx;
	margin:0 auto;
	width:460rpx;
}
.swiper .img{
	width:400rpx;height:400rpx;
	margin-left:50%;transform: translateX(-50%);
}
// 猜你想搜样式
.guess{
	margin-top:30rpx;
}
.guessframe{
display:flex;flex-wrap:wrap;flex-basis:30%;justify-content: space-around;	
}
.guess_content{
	display: flex;flex-direction: column;
	text-align:center;
	
}
</style>
