<template>
  <view class="cart-container" v-if="cart.length !== 0">
    <!-- 使用自定义的 address 组件 -->
    <my-address></my-address>
    <!-- 购物车商品列表的标题区域 -->
    <view class="cart-title">
      <!-- 左侧的图标 -->
      <uni-icons type="shop" size="18"></uni-icons>
      <!-- 描述文本 -->
      <text class="cart-title-text">购物车</text>
    </view>
    <!-- 商品列表区域 -->
      <block v-for="(goods, i) in cart" :key="i">
          <my-goods :goods="goods" :showNum="true" @del="delgoods"  @radio-change="radioChangeHandler" @num-change="numberChangeHandler"></my-goods>
      </block>
    <!-- 结算区域 -->
    <my-settle></my-settle>
  </view>
  <!-- 空白购物车区域 -->
  <view class="empty-cart" v-else>
    <!-- <image src="" class="empty-img"></image> -->
    <text class="tip-text">空空如也~</text>
  </view>
</template>
<style lang="scss">
.cart-title {
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
  border-bottom: 1px solid #efefef;
  .cart-title-text {
    margin-left: 10px;
  }
}
.cart-container {
  padding-bottom: 50px;
}
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  .empty-img {
    width: 90px;
    height: 90px;
  }

  .tip-text {
    font-size: 12px;
    color: gray;
    margin-top: 15px;
  }
}
</style>
<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
// 导入自己封装的 mixin 模块,绝对路径，@指向项目根目录，
import badgeMix from "../../mixins/tabbar-badage.js";
import { mapMutations } from "vuex";
export default {
  // 将 badgeMix 混入到当前的页面中进行使用
  mixins: [badgeMix],
  data() {
    return {
			
    };
  },
  onLoad() {},
  onShow() {},
  methods: {
    ...mapMutations("mycart", [
      "updateGoodsState",
      "updateGoodsCount",
      "removeGoodsById",
    ]),
    radioChangeHandler(e) {
      this.updateGoodsState(e);
      console.log(e);
			console.log(this.cart);
    },
    // 商品的数量发生了变化
    numberChangeHandler(e) {
      // console.log(this.total);
      // console.log(e.goods_count, typeof e.goods_count);
      this.updateGoodsCount(e);
    },
    // 点击删除购物项
		delgoods(goods){
			this.removeGoodsById(goods.goods_id);
			// console.log(goods)
		}
  },
  computed: {
    // 将 mycart 模块中的 total 映射为当前页面的计算属性
    ...mapGetters("mycart", ["total"]),
    ...mapState("mycart", ["cart"]),
  },
};
</script>
