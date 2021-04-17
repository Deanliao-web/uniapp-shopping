<template>
	<view>
		<view class="search" :style="{'width':widthrpx+'%'}">
		  <view>
		    <icon class="icon-search" type="search" size="18"></icon>
		  </view>
		  <input class="searchbar" type="text" placeholder="请输入" v-model="value"
			size="50" @blur="search" @click="searchBox"
		  ></input>
		  <view>
		    <icon class="iconfont camera" :class="(camera==1)?'icon-13':''"  style="font-size:23px;" ></icon>
		  </view>
		</view>

	</view>
	
</template>

<script>

	export default {
		props:['widthrpx','camera'],
		data() {
			return {
				//控制宽度的参数
				// //控制图标的参数
				list:'',
				value:''
			};
		},
		methods:{

			//显示搜索页面函数
			searchBox(){
				//向父元素传递自定义事件名searchBox
				this.$emit('searchBox');
				
			},
			//搜索函数
			search(){
			//向父元素传递自定义事件名search,和双向绑定参数value
				this.$emit('search',this.value);
			}
		}
	}
</script>

<style lang="scss">
	/* 引入阿里图标库 */
	@import "./iconfont.css";
	 
.search{
  position: absolute;z-index: 10;height:30px;margin-left:10px;
  top:1px;
  border:1px solid white;
  border-radius:18px;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content: space-around;
}
.icon-search{
  margin-top:5px;
	margin-left:5px;
}
.searchbar{
  // width: 80%;
}
.camera{
  margin-top:-10px;margin-right:10px;
}
</style>
