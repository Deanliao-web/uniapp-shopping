<template>
  <!-- 最外层的容器 -->
  <view class="my-settle-container">
    <!-- 全选区域 -->
    <label class="radio" @click="changeAllState">
      <radio color="#C00000" :checked="isFullCheck" /><text>全选</text>
    </label>

    <!-- 合计区域 -->
    <view class="amount-box">
      合计:<text class="amount">￥{{ checkedGoodsAmount }}</text>
    </view>

    <!-- 结算按钮 -->
    <view class="btn-settle" @click="settlement">加入到订单({{ checkedCount }})</view>
  </view>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("mycart", ["total", "checkedCount", "checkedGoodsAmount"]),
    // addstr 是详细的收货地址
    ...mapGetters("myuser", ["addstr"]),
    // token 是用户登录成功之后的 token 字符串
    ...mapState("myuser", ["token"]),
    ...mapState("mycart", ["cart"]),
		
    // 2. 是否全选
    isFullCheck() {
      return this.total === this.checkedCount;
    },
  },
  data() {
    return {};
  },
	onLoad(){

	},
  methods: {
    // 2. 使用 mapMutations 辅助函数，把 mycart 模块提供的 updateAllGoodsState 方法映射到当前组件中使用
    ...mapMutations("mycart", ["updateAllGoodsState"]),
    // label 的点击事件处理函数
    changeAllState() {
      // 修改购物车中所有商品的选中状态
      // !this.isFullCheck 表示：当前全选按钮的状态取反之后，就是最新的勾选状态
      this.updateAllGoodsState(!this.isFullCheck);
    },
    // 点击了结算按钮
    settlement() {
      // 1. 先判断是否勾选了要结算的商品
      if (!this.checkedCount) return uni.$showMsg("请选择要结算的商品！");
      // 2. 再判断用户是否选择了收货地址
      if (!this.addstr) return uni.$showMsg("请选择收货地址！");

      // 3. 最后判断用户是否登录了
      if (!this.token) return uni.$showMsg("请先登录！");
			// 4. 加入到订单
			this.payOrder();		
    },
// 加入到订单
async payOrder() {
  // 1. 创建订单
  // 1.1 组织订单的信息对象
	let goods2=[];
	this.cart.forEach((item)=>{
		if(item.goods_state===true){
			goods2.push(item)
		}
	}
	);
	let price=0;
	goods2.forEach((item)=>{
		price+=parseInt(item.goods_price)*parseInt(item.goods_count)
	})
	
  const orderInfo = {
    // 开发期间，注释掉真实的订单价格，
    // order_price: this.checkedGoodsAmount,
    // 写死订单总价为 1 分钱
    order_price: price.toFixed(2),
    consignee_addr: this.addstr,
    // goods: this.cart.filter(x => x.goods_state===true).map(x => ({ goods_id: x.goods_id, goods_number: x.goods_count, goods_price: x.goods_price }))
		goods: goods2
		
  }
  // 1.2 发起请求创建订单,向云开发服务器中插入订单信息
		wx.cloud.init({
			env:"web2010dean-6gzr9t1a190f533d"
		});
	
		const db = wx.cloud.database();
		db.collection('weixin-order').add({data:orderInfo}).then(res=>{
			db.collection('weixin-order').get().then(res=>{
			console.log(res);
			uni.$showMsg('加入订单成功')
			})
		})
		}		
  },
};
</script>

<style lang="scss">
.my-settle-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  // 将背景色从 cyan 改为 white
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  font-size: 14px;

  .radio {
    display: flex;
    align-items: center;
  }

  .amount {
    color: #c00000;
  }

  .btn-settle {
    height: 50px;
    min-width: 100px;
    background-color: #c00000;
    color: white;
    line-height: 50px;
    text-align: center;
    padding: 0 10px;
  }
}
</style>
