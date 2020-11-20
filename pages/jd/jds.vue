<template style="background: white">
	<view>
		<view style="background: white;z-index: 999">
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft" style="position: fixed;z-index: 100;border-bottom:1px solid ghostwhite">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in category" @tap="tabSelect"
				 :data-id="index">
					<text :style="index==TabCur?'background: #FC3F78;color: white;padding: 2px 10px 2px 10px;border-radius: 16px;margin-right: -10px':'background: #ffffff;color: #333333;margin-right: -10px'">
						{{item.name}}
					</text>
				</view>
			</scroll-view>
			<!--#ifdef H5-->
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLefts" style="position: fixed;z-index: 100;top: 86px;text-align: center;border-bottom:1px solid ghostwhite">
				<view class="cu-item" :class="indexs==TabCurs?'text-green cur':''" v-for="(item,indexs) in tab" @tap="searchSelect"
				 :data-id="indexs">
					<text :style="indexs==TabCurs?'background: #FC3F78;color: white;padding: 2px 10px 2px 10px;border-radius: 16px;margin-right: -10px':'background: #ffffff;color: #333333;margin-right: -10px'">
						{{item.name}}
					</text>
				</view>
			</scroll-view>
			<!--#endif-->
			<!--#ifndef H5-->
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLefts" style="position: fixed;z-index: 100;top: 44px;text-align: center;border-bottom:1px solid ghostwhite">
				<view class="cu-item" :class="indexs==TabCurs?'text-green cur':''" v-for="(item,indexs) in tab" :key="indexs" @tap="searchSelect"
				 :data-id="indexs">
					<text :style="indexs==TabCurs?'background: #FC3F78;color: white;padding: 2px 10px 2px 10px;border-radius: 16px;margin-right: -10px':'background: #ffffff;color: #333333;margin-right: -10px'">
						{{item.name}}
					</text>
				</view>
			</scroll-view>
			<!--#endif-->
		</view>
		<view style="height: 1px;background: grey;width: 100%"></view>
		<view class="index-content" style="padding-top: 170upx;">
			<view class="index-coupon has-bg-white has-pd-10 top_30">
				<view class="goods-list" v-if="couponlist.length > 0">
					<orange-goods-card-home v-for="(item,index) in couponlist" :index='index' :tkmoney='item.tkmoney' :tkmoneys='item.tkmoney'
					 :itemid="item.itemid" :logo="jdlogo" :isEnable='isEnable' :is-invitation="isInvitation" :itempic="item.itempic"
					 :itemtitle="item.itemtitle" :itemprice='"¥"+item.itemprice' :itemsale='item.itemsale' :itemendprice='""+item.itemendprice'
					 :couponmoney="item.couponmoney" :item="item" @success="clickItem"></orange-goods-card-home>
				</view>
			</view>
			<!-- 悬浮上拉 -->
			<view class="scroll_top" @tap="topScrollTap" v-bind:class="[scrollTop ? 'active' : '','']" style="bottom: 56px;">
				<text class="iconfont icon-shangla"></text>
			</view>


			<!-- 加载更多提示 -->
			<view class="s-col is-col-24" v-if="couponlist.length > 0">
				<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
			</view>
			<!-- 加载更多提示 -->
			<empty v-if="couponlist.length === 0" des="暂无数据" show="false"></empty>
		</view>
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
				isEnable: '否',
				jdlogo: "../../static/img/jd.png",
				tab: [
					{ name: '热销', position: 1, total: 0, data: [] },
					{ name: '综合', position: 2, total: 0, data: [] },
					{ name: '最新', position: 3, total: 0, data: [] },
					{ name: '高佣', position: 4, total: 0, data: [] },
					{ name: '低价', position: 5, total: 0, data: [] },
				],
				category: [
					{ name: '热销爆品', positon: 22},
					{ name: '9.9专区', positon: 10},
					{ name: '数码家电', positon: 24},
					{ name: '母婴玩具', positon: 26},
					{ name: '家具日用', positon: 27},
					{ name: '美妆穿搭', positon: 28},
					{ name: '医药保健', positon: 29},
					{ name: '图书文具', positon: 30},
					{ name: '今日必推', positon: 31},
					{ name: '品牌好货', positon: 32},
				],
				TabCur: 0,
				TabCurs: 0,
				scrollLeft: 0,
				scrollLefts: 0,
				couponlist: [],
				page: 1,
				cid: '休闲零食',
				type: 1,
				isInvitation: 0,
				position: 1,
				genderKey: "gender",
				loadingType: 0,
				scrollTop: false,
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
		},
		onPageScroll: function(e) {
			this.scrollTop = e.scrollTop > 200;
		},
		methods: {
			searchSelect(e) {
				this.TabCurs = e.currentTarget.dataset.id;
				this.position = this.tab[e.currentTarget.dataset.id].position;
				this.scrollLefts = (e.currentTarget.dataset.id - 1) * 60;
				this.page = 1;
				uni.showLoading({
					title: '加载中...'
				});
				//#ifdef H5
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
				//#endif
				this.loadCouponList("Refresh");
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.cid = this.category[this.TabCur].positon;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.page = 1;
				uni.showLoading({
					title: '加载中...'
				});
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
			clickItem(index) {
				this.$queue.setData("jd_list", JSON.stringify(this.couponlist[index]))
				uni.navigateTo({
					url: '/pages/detail/jd'
				});
			},
			loadCouponList: function(type) {
				let apiUrl = this.$Api.common.couponlist_jd;
				this.loadingType = 1;
				this.$Request.getT(apiUrl,{
					EliteId:this.cid,
					Position:this.position,
					PageNo: this.page
				}).then(
					res => {
						this.loadingType = 0;
						if (res.Code === 1) {
							if (this.page === 1) {
								this.couponlist = [];
							}
							res.Message.forEach(d => {
								if (d.smallimages.length > 0) {
									d.itempic = d.smallimages[0].smallpic;
								}
								d.tkmoneys = (d.tkmoney * 0.7).toFixed(2);
								let grade = this.$queue.getData("grade");
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
						uni.hideLoading();
						if (type === "Refresh") {
							uni.stopPullDownRefresh(); // 停止刷新
						}
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
			this.loadCouponList("Refresh");
		}
	}
</script>

<style>
	@import "../../static/css/index.css";
</style>
