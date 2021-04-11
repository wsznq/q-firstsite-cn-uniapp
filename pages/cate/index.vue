<template>
	<view class="index-content">
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft" style="position: fixed;z-index: 100;border-bottom: 1px solid ghostwhite">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in category" :key="index" @tap="tabSelect"
			 :data-id="index">
				<text :style="index==TabCur?'background: #FC3F78;color: white;padding: 4px 10px 4px 10px;border-radius: 16px;margin-right: -10px':'background: #ffffff;color: #333333;margin-right: -10px'">{{item.name}}</text>

			</view>
		</scroll-view>
		<view class="index-coupon has-bg-white has-pd-10 top_30">
			<view class="goods-list" v-if="couponlist.length > 0" style="padding-top: 46px">
				<orange-goods-card-home v-for="(item,index) in couponlist" :index="index%2" :tkmoney='item.tkmoney' :tkmoneys='item.tkmoneys'
				 :itemid="item.itemid" :isEnable='isEnable' :is-invitation="isInvitation" :itempic="item.itempic+'_310x310.jpg'"
				 :itemtitle="item.itemtitle" :itemprice='"¥"+item.itemprice' :itemsale='item.itemsale' :itemendprice='""+item.itemendprice'
				 :couponmoney="item.couponmoney" :item="item"></orange-goods-card-home>
			</view>
		</view>

		<!-- 加载更多提示 -->
		<view class="s-col is-col-24" v-if="couponlist.length > 0">
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
		<!-- 加载更多提示 -->
		<!-- 悬浮上拉了 -->
		<view class="scroll_top" @tap="topScrollTap" v-bind:class="[scrollTop ? 'active' : '','']" style="bottom: 56px;">
			<text class="iconfont icon-shangla"></text>
		</view>
		<empty v-if="couponlist.length === 0" des="暂无数据" show="false"></empty>
	</view>
</template>

<script>
	export default {
		onShareAppMessage(res) {
			return {
				title: '购物先领券，一年省一半',
				path: '/pages/index/index'
			}
		},
		data() {
			return {
				category: [
					{name: '热门抖货', position: 1, total: 0, data: []},
					{name: '百变穿搭', position: 2, total: 0, data: []},
					{name: '包罗万象', position: 3, total: 0, data: []},
					{name: '美妆达人', position: 4, total: 0, data: []},
					{name: '魅力配饰', position: 5, total: 0, data: []},
					{name: '步履不停', position: 6, total: 0, data: []},
					{name: '宝妈神器', position: 7, total: 0, data: []},
					{name: '居家好物', position: 8, total: 0, data: []},
					{name: '吃货专区', position: 9, total: 0, data: []},
					{name: '数码达人', position: 10, total: 0, data: []},
					{name: '时尚潮男', position: 11, total: 0, data: []},
				],
				genderKey: "gender",
				TabCur: 0,
				scrollLeft: 0,
				scrollTop: false,
				couponlist: [],
				page: 1,
				isInvitation: 0,
				position: 1,
				sort: 4,
				loadingType: 0,
				isEnable:'否',
				deviceValue:'',
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		onLoad: function(e) {
			let a = this.$queue.getData("isEnable")
			if (a) {
				this.isEnable = a;
			}
			uni.showLoading({
				title: '加载中...'
			});
			this.loadCouponList();
			this.$queue.getUserInfo();
		},
		onPageScroll: function(e) {
			this.scrollTop = e.scrollTop > 200;
		},
		methods: {
			tabSelect(e) {
				uni.showLoading({
					title: '加载中...'
				});
				this.TabCur = e.currentTarget.dataset.id;
				this.position = this.category[e.currentTarget.dataset.id].position;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.page = 1;
				//#ifdef H5
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
				//#endif
				this.loadCouponList("Refresh");
			},
			topScrollTap: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			loadCouponList: function(type) {
				let materialId = "3756";
				console.log("----position----" + this.position);
				if(this.position === 1){
					materialId = "3756";
				}
				else if(this.position === 2){
					materialId = "3767";
				}
				else if(this.position === 3){
					materialId = "3765";
				}
				else if(this.position === 4){
					materialId = "3763";
				}
				else if(this.position === 5){
					materialId = "3762";
				}
				else if(this.position === 6){
					materialId = "3766";
				}
				else if(this.position === 7){
					materialId = "3760";
				}
				else if(this.position === 8){
					materialId = "3758";
				}
				else if(this.position === 9){
					materialId = "3761";
				}
				else if(this.position === 10){
					materialId = "3759";
				}
				else if(this.position === 11){
					materialId = "3764";
				}
				
				let apiUrl = this.$Api.common.couponbestlist;
				console.log("----DENG-Begin---");
				console.log("----apiUrl----" + apiUrl);
				console.log("----materialId----" + materialId);
				console.log("----this.page----" + this.page);
				console.log("----this.deviceValue----" + this.deviceValue);
				console.log("----DENG-End---");
				
				this.loadingType = 1;
				uni.showLoading({
				    title: '加载中...'
				});
				this.$Request.get(apiUrl, {
					MaterialId: materialId,
					HasCoupon:true,
					PageNo: this.page,
					DeviceValue: this.deviceValue
				}).then(res => {
					console.log(res);
				    this.loadingType = 0;
				    if (res.Code === 1) {
				        if (this.page === 1) {
				            this.couponlist = [];
				        }
				        res.Message.forEach(d => {
							let grade = this.$queue.getData('grade');
							d.tkmoneys = (d.tkmoney * 0.7).toFixed(2);
							if (grade) {
								d.tkmoney = (d.tkmoney * parseFloat(grade)).toFixed(2);
							} else {
								d.tkmoney = (d.tkmoney * 0.3).toFixed(2);
							}
							d.itemsale = d.itemsale > 10000 ? '已售 ' + (d.itemsale / 10000).toFixed(1) + '万' : '已售 ' + d.itemsale;
				            this.couponlist.push(d);
				        })
				    } else {
				        this.loadingType = 2;
				    }
				    if (type === "Refresh") {
				        uni.stopPullDownRefresh(); // 停止刷新
				    }
				    uni.hideLoading();
				})
			},
		},

		onReady: function() {
			this.loadCouponList();
		},
		onReachBottom: function() {
			this.page = this.page + 1;
			this.loadCouponList();
		},
		onPullDownRefresh: function() {
			this.page = 1;
			this.min_id = 1;
			this.loadCouponList("Refresh");
		}
	}
</script>

<style>
	@import "../../static/css/index.css";
</style>
