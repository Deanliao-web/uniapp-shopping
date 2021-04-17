<template>
  <view class="my-userinfo-container">
    <!-- 头像昵称区域 -->
    <view class="top-box">
      <image src="../static/me_enable.png" class="avatar"></image>
      <view class="nickname">{{ userinfo.nickName }}</view>
    </view>
    <!-- 面板的列表区域 -->
    <view class="panel-list">
      <!-- 第一个面板 -->
      <view class="panel">
        <!-- panel 的主体区域 -->
        <view class="panel-body">
          <!-- panel 的 item 项 -->
          <view class="panel-item">
            <text>8</text>
            <text>收藏的店铺</text>
          </view>
          <view class="panel-item">
            <text>14</text>
            <text>收藏的商品</text>
          </view>
          <view class="panel-item">
            <text>18</text>
            <text>关注的商品</text>
          </view>
          <view class="panel-item">
            <text>84</text>
            <text>足迹</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 第二个面板 我的订单 待付款 待收货 退款/退货 全部订单-->
		<view class="panel">
		  <!-- 面板的标题 -->
		  <view class="panel-title">我的订单</view>
		  <!-- 面板的主体 -->
		  <view class="panel-body" @click="userorder">
		    <!-- 面板主体中的 item 项 -->
		    <view class="panel-item" >
		      <image src="/static/icon1.png" class="icon" data-name="待付款" ></image>
		      <text>待付款</text>
		    </view>
		    <view class="panel-item" >
		      <image src="/static/icon2.png" class="icon" data-name="待收货" ></image>
		      <text>待收货</text>
		    </view>
		    <view class="panel-item" >
		      <image src="/static/icon3.png" class="icon" data-name="退款/退货" ></image>
		      <text>退款/退货</text>
		    </view>
		    <view class="panel-item" >
		      <image src="/static/icon4.png" class="icon" data-name="全部订单" ></image>
		      <text>全部订单</text>
		    </view>
		  </view>
		</view>

		<veiw>
			<my-order :name="name" :orders="orders"></my-order>
		</veiw>
		
    <view class="" style="margin-bottom:20px"> 
      <!-- 面板的标题 -->
<!-- 			<view class="del-item"> 
				<view>
					<view class="del-item-title">我的订单</view>
				</view>
				<view class="del-item-content" v-for="(item,i) in order[order.length-1].goods" :key="i">
					<view>名称：{{item.goods_description}}</view>
					<view>数量：{{item.goods_count}}</view>
					<view>总价：{{item.goods_price}}</view>
				</view>
			</view>
			<view class="del-item">
				<view>
					<view class="del-item-title">全部订单</view>
				</view>
				<view class="del-item-content" v-for="(item,i) in order" :key="i">
					<view v-for="(item2,k) in item.goods" :key='k'>
					<view>名称：{{item2.goods_description}}</view>
					<view>数量：{{item2.goods_count}}</view>
					<view>总价：{{Number(item2.goods_price*item2.goods_count).toFixed(2)}}</view>						
					</view>
				</view>
			</view>		 -->
    </view>
	
    <!-- 第三个面板 -->
    <view class="panel">
      <view class="panel-list-item">
        <text>收货地址</text>
        <uni-icons type="arrowright" size="15"></uni-icons>
      </view>
      <view class="panel-list-item">
        <text>联系客服</text>
        <uni-icons type="arrowright" size="15"></uni-icons>
      </view>
      <view class="panel-list-item" @click="logout">
        <text>退出登录</text>
        <uni-icons type="arrowright" size="15"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
// 按需导入 mapState 辅助函数
import { mapState, mapMutations } from "vuex";

export default {
	props:["order"],
  computed: {
    // 将 myuser 模块中的 userinfo 映射到当前页面中使用
    ...mapState("myuser", ["userinfo"]),
  },
  data() {
    return {
			name:'',
			orders:[]
		}
  },
	onLoad(){
		
	},
  methods: {
    ...mapMutations("myuser", [
      "updateUserInfo",
      "updateToken",
      "updateAddress",
    ]),
		userorder(event){
			this.name=event.target.dataset.name;
			this.orders=this.order;
		},
    // 退出登录
    async logout() {
      // 询问用户是否退出登录
      const [err, succ] = await uni
        .showModal({
          title: "提示",
          content: "确认退出登录吗？",
        })
        .catch((err) => err);
      if (succ && succ.confirm) {
        // 用户确认了退出登录的操作
        // 需要清空 vuex 中的 userinfo、token 和 address
        this.updateUserInfo({});
        this.updateToken("");
        this.updateAddress({});
      }
    },
  },
};
</script>

<style lang="scss">
.my-userinfo-container {
  height: 100%;
  // 为整个组件的结构添加浅灰色的背景
  background-color: #f4f4f4;
  .top-box {
    height: 400rpx;
    background-color: #c00000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .avatar {
      display: block;
      width: 90px;
      height: 90px;
      border-radius: 45px;
      border: 2px solid white;
      box-shadow: 0 1px 5px black;
    }
    .nickname {
      color: white;
      font-weight: bold;
      font-size: 16px;
      margin-top: 10px;
    }
  }
}	
.panel-list {
  padding: 0 10px;
  position: relative;
  top: -10px;
}
.panel {
  background-color: white;
  border-radius: 3px;
  margin-bottom: 8px;
}
.panel-title {
  line-height: 45px;
  padding-left: 10px;
  font-size: 15px;
  border-bottom: 1px solid #f4f4f4;
}
.panel-body {
  display: flex;
  justify-content: space-around;
}
.panel-item {
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
font-size: 13px;
padding: 10px 0;
      }
.icon {
width: 35px;
height: 35px;
 }
.del-item{
	margin:20rpx 5rpx;
	font-size:12px;
}
.del-item-content{
	padding-left:30rpx;
}
.del-item-title{
	font-weight:bold;
	font-size:18px;
}

</style>
