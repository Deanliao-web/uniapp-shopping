<template>
	<view>
		<!-- 图片展示区域 -->
		<veiw><image class="pic" :src="item.img" 
		@click="preview(item.img)"></image></veiw>
		<!-- 详情页信息 -->
		<veiw class="details">
			<view class="price">
				￥<span class="price_up">{{price_up}}</span><span class="price_low">.{{price_low}}</span>
			</view>
			<view class="content1">
				{{item.description}}
			</view>
			<view>
				<view>
					<image class="pic" :src="item" v-for="(item,i) in item.otherimgs" :key="i"></image>
				</view>
				<view class="content2">{{item.description}}</view>
			</view>
		</veiw>
		<!-- 商品底部的导航组件 -->
		<view class="details_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue';
	// 从 vuex 中按需导出 mapState 辅助方法
	import { mapState } from 'vuex';
	import { mapMutations} from 'vuex';
	import { mapGetters} from 'vuex';
	
	export default {
		components:{uniGoodsNav},
		data() {
			return {
				item:{},
				price_up:'',
				price_low:'',
				// 导航组件相关参数
				options:[{
            icon: 'headphones',
            text: '客服'
        }, {
            icon: 'shop',
            text: '店铺',
            info: 0,
            infoBackgroundColor:'#007aff',
            infoColor:"red"
        }, {
            icon: 'cart',
            text: '购物车',
            info: 0
        }],
        buttonGroup: [{
          text: '加入购物车',
          backgroundColor: '#ff0000',
          color: '#fff'
        },
        {
          text: '立即购买',
          backgroundColor: '#ffa200',
          color: '#fff'
        }
        ]
			}
		},
		onLoad(option){
			//获取搜索页面传递过来的参数
			this.item=JSON.parse(option.item);
			let price=JSON.parse(option.item).price;
			this.price_up=price.split('.')[0];
			this.price_low=price.split('.')[1];
			
			console.log(this.item);
		},
		methods:{
			//左侧点击事件
			onClick (e) {
				// 跳转到购物车页面
				if(e.content.text==="购物车"){
					uni.switchTab({
						url:'../cart/cart'
					})
				}
				// 显示消息提示框
			  uni.showToast({
			  title: `进入${e.content.text}`,
			  icon: 'none'
				})
			},
			//右侧按钮组点击事件
			buttonClick (e) {
	   // 1. 判断是否点击了 加入购物车 按钮
	   if (e.content.text === '加入购物车') {
	      // 2. 组织一个商品的信息对象
	      let goods = {
	         goods_id: this.item.id,              // 商品的Id
	         goods_description: this.item.description,  // 商品的描述
	         goods_price: this.item.price, 							// 商品的价格
	         goods_count: 1,                            // 商品的数量
	         goods_img: this.item.img, 									// 商品的图片
					 goods_otherimgs:this.item.otherimgs,				// 商品的详情图片
	         goods_state: true,                         // 商品的勾选状态
					 goods_page:this.item.page,									// 商品的页数
	      }
	      // 3. 通过 this 调用映射过来的 addToCart 方法，把商品信息对象存储到购物车中
	      this.addToCart(goods);
			 }
		},	 
			 //图片预览的函数
			preview(img){
				uni.previewImage({
					current:img,
					urls:this.item.otherimgs
				})
			},
			...mapMutations('mycart',['addToCart']),
		},
		computed:{
			...mapState('mycart',['cart']),
			...mapGetters('mycart',['total']),
		},
		watch:{
			// 定义 total 侦听器，指向一个配置对象
			total: {
				// handler 属性用来定义侦听器的 function 处理函数
				handler(newVal) {
         const findResult = this.options.find(x => x.text === '购物车')
         if (findResult) {
            findResult.info = newVal
					}
				},
				// immediate 属性用来声明此侦听器，是否在页面初次加载完毕后立即调用
				immediate: true
			}
		}
	}
</script>

<style lang="scss">
.pic{
	margin-left:50%;transform: translateX(-50%);
	width:400rpx;height:400rpx;
}

.price{
	color:#f2270c;margin-left:20px;
	font-weight:bold;
}
.price .price_up{
	font-size:18px;
}
.price .price_low{
	font-size:14px;
}
.content1,.content2{
	margin-left:20px;
}
.content2{
	padding-bottom:50px;
}
.details_nav{
	position:fixed;bottom:0;left:0;width:100%;
	
;}
</style>
