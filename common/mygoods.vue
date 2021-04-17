<template>
	<view class="cart">
		<!-- 商品左侧图片区域 -->
		<view style="flex-basis:50%">
			<view class="goods-item-left">
				<radio :checked="goods.goods_state" color="#C00000" @click="radioClickHandler"></radio>
				<image :src="goods.goods_img" class="goods-pic"></image>
			</view>
		</view>
		<view style="flex-basis:50%">
			<view class="goods-info-box">
				<view>
					<view>{{goods.goods_description}}</view>
					<view class="goods-price">￥{{goods.goods_price}}</view>
				</view>
				<view>
					<view class="delgroup" >
						<!-- 数字改变时自动触发change事件，数字的增减是封装好的 -->			
						<uni-number-box :min="1" :value="goods.goods_count" v-if="showNum" @change="numChangeHandler"></uni-number-box>					
						<span style="color:red;font-weight: bold;" @click="del(goods)">删除</span>						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
	props:['goods','showNum'],
		data(){
			return {

			}
		},
		onLoad(){

		},
		methods:{
			//自父传参
			radioClickHandler(){
				this.$emit('radio-change',{
					//商品id
					goods_id:this.goods.goods_id,
					//商品状态
					goods_state:!this.goods.goods_state
				})
			},
			// NumberBox 组件的 change 事件处理函数
			numChangeHandler(val){
			// 通过 this.$emit() 触发外界通过 @ 绑定的 num-change 事件
				this.$emit('num-change', {
      // 商品的 Id
				goods_id: this.goods.goods_id,
      // 商品的最新数量 +val是转换成数值类型，不是自增 不能写++，会变成死循环
				goods_count: +val
				})								
			},
			del(goods){
				this.$emit('del',this.goods)
			}
		}
	}
</script>

<style>
	.cart{
		display: flex;
		justify-content: space-around;
		box-sizing:border-box;
		width:100%;
	}
	.goods-item-left {
	  margin-right: 5px;
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
		
	}
	.goods-item-left>.goods-pic {
	  width: 100px;
	  height: 100px;
	  display: block;
}
.goods-info-box {
	  display: flex;
		flex-direction: column;

	  justify-content: center;
	}
.goods-price {
	  font-size: 16px;
	  color: #c00000;
	}
.delgroup{
	display:flex;	align-items: center;
	
}	
</style>
