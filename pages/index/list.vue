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
		<view class="index-content" style="padding-top: 90px;">
			<view class="index-coupon has-bg-white has-pd-10 top_30">
				<view class="goods-list" v-if="couponlist.length > 0">
					 <orange-goods-card-home
					         v-for="(item,index) in couponlist"
					         :index="index%2"
					         :tkmoney='item.tkmoney'
							 :isEnable="isEnable"
							 :tkmoneys='item.tkmoneys'
					         :itemid="item.itemid"
					         :logo="item.shoptype === 1? logoMao : logoTaoBao"
					         :is-invitation="isInvitation"
					         :itempic="item.itempic+'_310x310.jpg'"
					         :itemtitle="item.itemtitle"
					         :itemprice='"¥"+item.itemprice'
					         :itemsale='item.itemsale'
					         :itemendprice='""+item.itemendprice'
					         :couponmoney="item.couponmoney"
							 :item="item"
					 ></orange-goods-card-home>
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

			<!-- #ifdef H5 -->
			<!--  <view class="scroll_top active " @click="addPublisher()"
                  style="bottom: 150px;width: 100px;right: -12px;padding-right: 10px">
                <text>
                    <text class="cuIcon cuIcon-down"></text>
                    下载APP
                </text>
            </view> -->
			<!--#endif-->
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
				logoMao: '../../static/img/mao.png',
				logoTaoBao: '../../static/img/taobao.png',
				isEnable:'否',
				tab: [
					{ name: '热销', position: 1, total: 0, data: [] },
					{ name: '综合', position: 2, total: 0, data: [] },
					{ name: '最新', position: 3, total: 0, data: [] },
					{ name: '高佣', position: 4, total: 0, data: [] },
					{ name: '低价', position: 5, total: 0, data: [] },
				],
				category: [
					{ name: '全部', positon: 0},
					{ name: '女装', positon: 1},
					{ name: '男装', positon: 2},
					{ name: '内衣', positon: 3},
					{ name: '美妆', positon: 4},
					{ name: '配饰', positon: 5},
					{ name: '鞋品', positon: 6},
					{ name: '箱包', positon: 7},
					{ name: '儿童', positon: 8},
					{ name: '母婴', positon: 9},
					{ name: '居家', positon: 10},
					{ name: '美食', positon: 11},
					{ name: '数码', positon: 12},
					{ name: '家电', positon: 13},
					{ name: '其他', positon: 14},
					{ name: '车品', positon: 15},
					{ name: '文体', positon: 16},
					{ name: '宠物', positon: 17},
				],
				TabCur: 0,
				TabCurs: 0,
				scrollLeft: 0,
				scrollLefts: 0,
				couponlist: [],
				page: 1,
				cid: 0,
				type: 1,
				isInvitation: 0,
				position: 1,
				genderKey: "gender",
				loadingType: 0,
				deviceValue:'',
				scrollTop: false,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		onLoad: function(e) {
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
			if (e.title && e.type) {
				this.type = e.type;
				uni.setNavigationBarTitle({
					title: e.title
				});
				uni.showLoading({
					title: '加载中...'
				});
			} else {
				uni.navigateBack()
			}
		},
		onPageScroll: function(e) {
			this.scrollTop = e.scrollTop > 200;
		},
		methods: {
			addPublisher() {
				if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
					uni.showModal({
						title: "下载提示",
						content: '苹果APP正在上架中请先关注公众号使用哦',
						showCancel: true,
						success: (e) => {
							if (e.confirm) {
								uni.navigateTo({
									url: '/pages/member/erweima'
								});
							}
						}
					});
				} else if (/(Android)/i.test(navigator.userAgent)) { //判断Android
					window.location.assign("https://fir.vip/d/5yilc")
				} else { //pc
					window.location.assign(this.$Url)
				}
			},
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

			loadCouponList: function(type) {
				let materialId;
				let apiUrl = this.$Api.common.couponlist;
				if(this.cid === 0){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "6708"; 
				}
				
				console.log("----DENG-Begin---");
				console.log("----apiUrl----" + apiUrl);
				console.log("----cid----" + this.cid);
				console.log("----type----" + this.type);
				console.log("----this.page----" + this.page);
				console.log("----this.deviceValue----" + this.deviceValue);
				console.log("----DENG-End---");
				
				this.loadingType = 1;
				this.$Request.get(apiUrl, {
					ColumnId: this.cid,
					MaterialId: materialId,
					PageNo: this.page,
					Position: this.position,
					DeviceValue: this.deviceValue
				}).then(res => {
					console.log(res);
					this.loadingType = 0;
					if (res.Code === 1) {
						if (this.page === 1) {
							this.couponlist = [];
						}
						res.Message.forEach(d => {
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
			toGoodsInfo: function(e) {
				let relation_id = this.$queue.getData("relation_id");
				if (relation_id) {
					uni.navigateTo({
						url: "/pages/detail/goodsinfo?data=" + encodeURIComponent(JSON.stringify(e)) + "&relation_id=" + relation_id,
					})
				} else {
					uni.navigateTo({
						url: "/pages/detail/goodsinfo?data=" + encodeURIComponent(JSON.stringify(e)),
					})
				}
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
