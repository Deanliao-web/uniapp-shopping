<template>
<view class="index">
  <!-- 首页搜索图标组件 -->

	<my-search  @searchBox="gotosearch" :widthrpx="widthrpx" :camera="camera" ></my-search>
  <!-- 首页横向滚动组件 -->
  <view class="titlebar"> 
      <scroll-view scroll-x="true" show-scrollbar="true" 
     enhanced="true" enable-flex="true" class="scrollGrop">
      <view v-for="(item,i) in titleList" :key="i" >
        <text>{{item}}</text>
      </view>
      </scroll-view>
    <!-- 下拉选项按钮 -->
    <view class="arrow iconfont icon-arrowRight-copy" v-on:click="show"></view>
  </view> 
   <!--下拉菜单界面  -->
  <view>
    <view class="taplist" v-if="isShow"> 
      <view class="tapdetails">
        <text v-for="(item,i) in titleList2" :key="i">{{item}}</text>
      </view>
    </view>
  </view>
	<!-- 轮播图区域 -->
    <!-- 轮播图区域 -->
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <!-- 循环渲染轮播图的 item 项 -->
      <swiper-item  v-for="(item, i) in swiperList" :key="i">
        <view class="swiper-item">
          <!-- 动态绑定图片的 src 属性 -->
          <image class="swiperimage" :src="item"></image>
        </view>
      </swiper-item>
    </swiper>	
	<!-- 限时好货 -->
	<view class="goods">
		<p style="display:flex;justify-content: space-between;">
			<span>限时好货</span>
			<span><navigator url="../list/list" open-type="switchTab">更多></navigator></span> 
		</p>
		<scroll-view scroll-x="true" show-scrollbar="true" 
     enhanced="true" enable-flex="true" class="goods_item">
			<view class="goods_list" v-for="(item,i) in goodsList" :key="i">
				<view>
					<image style="width:100px;height:100px" :src="item.src" :data-del="item"></image>
					</view>
				<text>￥{{item.price}}</text>
			</view>
		</scroll-view>
	</view>
  <!-- 优惠专区-->
	<view class="area" style="padding:5px 0px;" @click="changelist"> 
		<view class="areaFont" data-num="1">品牌闪购</view>
		<view class="areaFont" data-num="2">排行榜</view>
		<view class="areaFont" data-num="3">每日特价</view>
		<view class="areaFont" data-num="4">新品首发</view>
	</view>
	<!-- 商品列表 -->
	<view class="itemsList">
		<view v-for="(item,i) in itemsList" :key="i" @click="toDetails">
		 <view>
			<image style="width:100px;height:100px" :src="item.img" :data-del="item"></image>
		 </view>
		 <view class="itemsDet">
			<p style="width:80%;font-size:15px;">{{item.description}}</p>
					<!-- 优惠券组件预留位置 -->
			<p style="color:#ff4142;font-weight:bold;font-size: 18px;"
					>￥<span>{{item.price.split('.')[0]}}</span><span style="font-size:12px;">.{{item.price.split('.')[1]}}</span></p>
			<p style="font-size:12px;">{{item.comments}}</p>
		 </view>
		</view>
	</view>
</view>
</template>

<script>
	import badgeMix from '../../mixins/tabbar-badage.js';
	import {goodsList,picList,swiperList} from '../../common/lists.js'
	export default {
			mixins:[badgeMix],
		data() {
		return {
			widthrpx:80,
			camera:1,
	//首页分类内容数组
	 titleList:[
		 '首页','个护清洁','电脑办公','食品饮料','手机','数码','母婴','女装',
		 '内衣配饰','大家电','医药健康','女装','箱包皮具','酒水','生鲜','宠物'],
		 //下拉菜单内容数组
	 titleList2:['全部分类'],
	//首页隐藏分类菜单变量
	isShow:false,
	//轮播图片列表
	picList:[],
	//限时好货信息列表
	goodsList:[],
	//商品详情数据列表
	itemsList:[],
	//触底加载的页数
	num:1,
	//轮播图数据
	swiperList:[],
	//所有商品信息列表
	allList:[]
 }

},
		onLoad() {
		this.swiperList=swiperList;
		this.goodsList=goodsList;
		this.picList=picList;
		this.titleList2=this.titleList2.concat(this.titleList);
		//发送请求从云开发获取数据
		wx.cloud.init({
			env:"web2010dean-6gzr9t1a190f533d"
		});
		//调用获取首页详情数据
		const db = wx.cloud.database();
		db.collection('weixin-project').get().then(res=>{
				this.allList=res.data;
				this.itemsList=res.data.slice(0,4);
			})
		// console.log(this.getData("weixin-project"));		
		},
		onReachBottom() {
			this.num++;
			this.getData('weixin-project',this.num).then(res=>{
				res.forEach((item,i)=>{
					this.itemsList.push(item);
				})
			})
			// console.log(this.itemsList);
		},
		methods: {
		//切换选项卡更新商品列表
		changelist(e){
		//获取选项卡id	
		let s=e.target.dataset.num;
		//设置截取的开始下标
		let a=4*(s-1);
		//设置截取的结束下标
		let b=4*s;
		this.itemsList=this.allList.slice(a,b) ;

		},	
		//跳转到详情页
		toDetails(event){
			console.log(event.target.dataset.del)
			let item=JSON.stringify(event.target.dataset.del);
			// console.log(event.target.dataset.item);
			//点击跳转,保留当前页面跳转到详情页并传递参数
			uni.navigateTo({
				url:`../details/details?item=`+item
			})
		},
	 //控制隐藏分类菜单的显示
		show(){
				this.isShow=!this.isShow;
		    // console.log(this.data.titleList2);
		  },
		//向云服务器发送请求
		getData(table,num){
			const db = wx.cloud.database();
		 return db.collection(table).where({page:num}).get().then(res=>res.data)
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

/**index.wxss**/
/* 引入阿里图标库 */
@import "../../common/iconfont.css"; 

.index{
  height:85px;background-color:#eb4935;position:relative;
}

.titlebar{
  display:flex;align-items:flex-end;justify-content: space-around;
}
.scrollGrop{
  width:90%; height:20px;margin-top:50px;color:white;
}
scroll-view{
display: flex;
/* 设置文本不换行 */
white-space: nowrap;
}
scroll-view view{
  margin-left:10px;
	text-align: center;
  font-size:14px;
}
scroll-view view text:hover{
  font-size:18px;
}
.arrow{
  width:20px;height:20px;
  background-color:#eb4935;
  color:white;
  margin-left:8px;
}
.taplist{
  height:220px;background-color:#ffffff;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  border:1px solid gray;
  margin-top:10px;
	position:absolute;
	z-index:10;
}
/* 下拉菜单样式 */
.tapdetails{
  display:flex;
  flex-wrap: wrap;
  white-space: nowrap;
  justify-content: flex-start;
  text-align:center;
}
.tapdetails text{
line-height:30px;
font-size:12px;
display: block;
height:30px;width:60px;
color:#262626;
margin:10px 0px 0px 10px;
flex-basis: 20%;
background-color:rgba(38,38,38,0.1) ;
border-radius:20px;
}
.tapdetails text:hover{
  background-color:white;
  color:red;
  border:1px solid red;
}
// 限时好货样式
.goods{
	height:150px;
	margin-top:30px;
}
.goods>p>span{
	font-size: 14px;color:#8c8c8c;
}
.goods_item{
display:flex;height:80%;
}
.goods_list{
	width:80px;color:#f2270c;
	display: flex;flex-direction:column;
	align-items:center;
	font-weight:bold;
}
.area{
	display: flex;justify-content: space-around;
	margin-top:10px;font-size: 16px;
}
.areaFont:hover{
	font-weight:bold;
	font-size: 18px;
}
// 商品列表样式
.itemsList{
	display: flex;
	flex-wrap: wrap;
	flex-basis: 4%;
	text-align:center;
	background-color: #F4F4F4;
}
.itemsList>view:not(:first-child):not(:nth-child(2)){
		margin-top: 8px;
}

.itemsList>view{
	width:40%;
	border:1px solid white;
	margin-left:8px;
	padding:10px;
	border-radius:10px;
	background-color: white;
}
.itemsList .itemsDet{
	text-align:left;
	margin-left:5px;
}
.itemsDet>p:first-child{
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
display: -webkit-box;
text-overflow: ellipsis;
overflow: hidden;
}
// 轮播图样式
.swiper {
 height: 330rpx;
 width:100% !important;
 margin-top:25rpx;
 .swiper-item,
 .swiperimage {
   width: 100%;
   height: 100%;
 }
}
</style>
