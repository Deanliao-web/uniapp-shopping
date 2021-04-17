import Vue from 'vue'
import App from './App'
import { $http } from '@escook/request-miniprogram'

// 引入推荐页面组件
import recommends from './pages/recommends/recommends.vue'
//引入自定义封装请求组件
import request from './common/request.js'
import search from './common/search.vue'

// 导入 store 的实例对象
import store from './store/store.js'
import mygoods from './common/mygoods.vue'
import myaddress from './common/myaddress.vue'
import mysettle from './common/mysettle.vue'
import mylogin from './common/mylogin.vue'
import userinfo from './common/userinfo.vue'
import order from './common/order.vue'

uni.$http = $http;

// 配置请求根路径
$http.baseUrl = 'https://api.zbztb.cn'

// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '数据加载中...',
  })
  // 判断请求的是否为有权限的 API 接口
  // if (options.url.indexOf('/my/') !== -1) {
  //   // 为请求头添加身份认证字段
  //   options.header = {
  //     // 字段的值可以直接从 vuex 中进行获取
  //     Authorization: store.state.myuser.token,
  //   }
  // }	
	
}

// 请求完成之后做一些事情
$http.afterRequest = function () {
  uni.hideLoading()
}

Vue.config.productionTip = false
// 将推荐页面组件转换成全局组件
Vue.component("my-recommends",recommends);
Vue.component("my-search",search);
Vue.component("my-goods",mygoods);
Vue.component("my-address",myaddress);
Vue.component("my-settle",mysettle);
Vue.component("my-login",mylogin);
Vue.component("my-userinfo",userinfo);
Vue.component("my-order",order);

//将请求放到vue的原型对象中
Vue.prototype.$request=request;

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

App.mpType = 'app'

const app = new Vue({
    ...App,
	// 2. 将 store 挂载到 Vue 实例上
		store
})
app.$mount()
