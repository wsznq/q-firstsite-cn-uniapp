<template>
	<view class="index-content">
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft" style="position: fixed;z-index: 100;text-align: center;width: 100%;">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tab" @tap="tabSelect"
			 :data-id="index">
				<text :style="index==TabCur?'background: #FC3F78;color: white;padding: 2px 10px 2px 10px;border-radius: 16px;margin-right: -10px':'background: #ffffff;color: #333333;margin-right: -10px'">
					{{item.name}}
				</text>
			</view>
		</scroll-view>
		<view class="index-coupon has-bg-white has-pd-10" style="padding-top: 80upx">
			<view class="goods-list" v-if="couponlist.length > 0">
				<orange-goods-card-home v-for="(item,index) in couponlist" :index="index%2" :tkmoney='item.tkmoney' :tkmoneys='item.tkmoneys'
				 :itemid="item.itemid" :isEnable='isEnable' :logo="logo" :is-invitation="isInvitation" :itempic="item.itempic+'_310x310.jpg'" :itemtitle="item.itemtitle"
				 :itemprice='"¥"+item.itemprice' :itemsale='item.itemsale' :itemendprice='""+item.itemendprice' :couponmoney="item.couponmoney" :item="item"></orange-goods-card-home>
			</view>
		</view>
		<!-- 加载更多提示 -->
		<view class="s-col is-col-24" v-if="couponlist.length > 0">
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
		<!-- 加载更多提示 -->
		<!-- 悬浮上拉 -->
		<view class="scroll_top" @tap="topScrollTap" v-bind:class="[scrollTop ? 'active' : '','']" style="bottom: 56px;">
			<text class="iconfont icon-shangla"></text>
		</view>
		<empty v-if="couponlist.length === 0" des="未搜索到哦" show="false"></empty>
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
				logo: "../../static/img/mao.png",
				taobao: "../../static/img/taobao.png",
				tab: [
					{ name: '热销', position: 1, total: 0, data: [] },
					{ name: '综合', position: 2, total: 0, data: [] },
					{ name: '最新', position: 3, total: 0, data: [] },
					{ name: '高佣', position: 4, total: 0, data: [] },
					{ name: '低价', position: 5, total: 0, data: [] },
				],
				TabCur: 0,
				scrollLeft: 0,
				scrollTop: false,
				couponlist: [],
				page: 1,
				localKeyword: 'orange-tyh-keyword',
				position: 1,
				cid: 1,
				keywords: "",
				isInvitation: 0,
				loadingType: 0,
				deviceValue:'',
				isEnable:'否',
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		onLoad: function(e) {
			uni.showLoading({
				title: '加载中...'
			});
			let isEnable = this.$queue.getData("isEnable")
			if (isEnable) {
				this.isEnable = isEnable;
			}
			let deviceValue = this.$queue.getData("DeviceNo");
			if(deviceValue){
				this.deviceValue = deviceValue;
			}
			let isInvitation = this.$queue.getData("isInvitation");
			if(isInvitation){
				this.isInvitation = isInvitation;
			}
			this.cid = e.cid;
			this.keywords = e.name;
			uni.setNavigationBarTitle({
				title: e.name
			});
		},
		onPageScroll: function(e) {
			this.scrollTop = e.scrollTop > 200;
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.position = this.tab[e.currentTarget.dataset.id].position;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.page = 1;
				uni.showLoading({
					title: '加载中...'
				});
				this.loadCouponList("Refresh");
				//#ifdef H5
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
				//#endif
			},
			topScrollTap: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			loadCouponList: function(type) {
				console.log("----cid------" + this.cid);
				console.log("----page------" + this.page);
				console.log("----position------" + this.position);
				this.loadingType = 1;
				this.$Request.get(this.$Api.common.couponlist, {
					KeyWords:this.keywords,
					ColumnId: this.cid,
					Position:this.position,
					HasCoupon:true,
					PageNo: this.page,
					DeviceValue: this.deviceValue
				}).then(res => {
					this.loadingType = 0;
					if (res.Code === 1) {
						if (this.page === 1) {
							this.couponlist = [];
						}
						res.Message.forEach(d => {
							let grade = this.$queue.getData("grade");
							d.tkmoneys = ((d.itemendprice * (d.tkrates * 0.01)) * 0.7).toFixed(2);
							if (grade) {
								d.tkmoney = ((d.itemendprice * (d.tkrates * 0.01)) * parseFloat(grade)).toFixed(2);
							} else {
								d.tkmoney = ((d.itemendprice * (d.tkrates * 0.01)) * 0.3).toFixed(2);
							}
							d.itemsale = d.itemsale > 10000 ? "已售 " + (d.itemsale / 10000).toFixed(1) + "万" : "已售 " + d.itemsale;
							this.couponlist.push(d);
						})
					} else {
						this.loadingType = 2;
					}
					uni.hideLoading();

					if (type === "Refresh") {
						uni.stopPullDownRefresh(); // 停止刷新
					}
				})
			},
			navigateBack: function() {
				uni.navigateBack();
			},
			toGoodsInfo: function(itemid) {
				let relation_id = this.$queue.getData("relation_id");
				if (relation_id) {
					uni.navigateTo({
						url: "/pages/detail/goodsinfo?itemid=" + itemid + "&relation_id=" + relation_id,
					})
				} else {
					uni.navigateTo({
						url: "/pages/detail/goodsinfo?itemid=" + itemid,
					})
				}
			}
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
			this.loadCouponList("Refresh");
		}
	}
</script>

<style>
	@import "../../static/css/index.css";


	.search-default image {
		display: block;
		margin: auto;
		width: 80%;
	}


	.main-title {
		background: -moz-linear-gradient(left, #F15B6C, #FF6DB2 100%);
		background: -webkit-gradient(linear, left top, left right, color-stop(0, #F15B6C), color-stop(100%, #FF6DB2));
		background: -webkit-linear-gradient(left, #F15B6C 0, #FF6DB2 100%);
		background: -o-linear-gradient(left, #F15B6C 0, #FF6DB2 100%);
		background: -ms-linear-gradient(left, #F15B6C 0, #FF6DB2 100%);
		background: linear-gradient(to left, #F15B6C 0, #FF6DB2 100%);

		border-bottom-color: transparent;
		padding: 8px 10px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 120;
		display: block;
		box-sizing: border-box;
	}

	.search-pop .search-tab {
		margin: 5px 0 10px;
		color: #fff;
		font-size: 15px;
		text-align: center;
		/* #ifdef APP-PLUS */
		padding-top: var(--status-bar-height);
		/* #endif */
	}

	.search-pop .search-tab .my-sub-src {
		margin: 0 auto 0 20px;
		display: inline-block;
		color: #fff;
		line-height: 30px;
		margin-bottom: 10px !important;
	}

	.search-pop .search-tab .my-sub-src:nth-child(1) {
		margin-left: 0px !important;
	}

	.main-title .search-tab .cur {
		opacity: 1;
		border-bottom: 1px solid #fff;
	}

	.main-title .search-tab .close-src {
		position: absolute;
		left: 20px;
		display: block;
		float: left;
		color: #ffffff;
		margin-top: 5px;
	}

	.main-title .search-tab .close-src .iconfont {
		font-size: 20px;
	}

	.uni-input-input,
	.uni-input-placeholder {
		width: 93%;
	}

	.main-title .search {
		background-color: #fff;
		border-radius: 20px;
		width: 76%;
		margin-left: 12%;
		position: relative;
		padding: 0 9px;
		height: 32px;
		line-height: 32px;
		font-size: 13px;
		margin-top: 10px;
	}

	.search_submit {
		width: 25%;
		height: 32px;
		background: #ffb925;
		color: #fff;
		float: right;
		margin-top: -32px;
		position: relative;
		border-radius: 15px;
		margin-right: -20px;
		z-index: 30;
	}

	.clear {
		float: right;
		color: crimson;
		width: 23px;
		height: 22px;
		margin-top: -31px;
		position: relative;
		margin-right: 50px;
		z-index: 100;
		background: white;
	}

	.main-title .search input {
		border: none;
		outline: 0;
		height: 32px;
		font-size: 13px;
		line-height: 30px;
		background: #fff;
		color: #666;
		border-radius: 5px;
		padding: 0 0 0 5px;
		text-align: left;
	}

	.main-title .search input.search_area {
		background-color: transparent;
		position: relative;
		z-index: 99;
		width: 80%;
		color: #333;
		font-size: 12px;
	}
</style>
