<template>
	<view class="s-page-wrapper">
		<view class="index-goods" v-if="loadGoods">
			<view class="swiper">
				<swiper class="swiper-container" :autoplay="true" :interval="4000" :circular="true" :indicator-dots="true"
				 indicator-active-color="#FC3F78" indicator-color="#cccccc">
					<block v-for="(item,index) in goods.images" :key="index">
						<swiper-item class="swiper-wrapper">
							<image :src="item" mode="widthFix" class="is-response" lazy-load="true" :data-index="index" @tap="previewPhoto"></image>
						</swiper-item>
					</block>
				</swiper>
			</view>

			<view style="background: rgba(0, 0, 0, 0.7);padding: 8px;display: flex;font-size: 14px;font-weight: bold" v-if="goods && !relation_id && isEnable!='否'"
			 @tap="goPublisher">
				<view style="color: #ffd465;width: 76%;line-height: 60upx">成为会员最高可返现金￥{{ shengji }}元</view>
				<view style="width: 24%;text-align: center;font-size: 28upx;" class="b-btn">
					立即加入
					<text class="cuIcon cuIcon-right"></text>
				</view>
			</view>
			<view style="background: rgba(0, 0, 0, 0.7);padding: 8px;display: flex;font-size: 14px;font-weight: bold" v-if="goods && relation_id && grade !== '0.7' && isEnable!='否'"
			 @tap="shengJiMethod">
				<view style="color: #ffd465;width: 70%;line-height: 60upx;font-size: 28upx">预估返￥ {{ money }}元，升级最高返￥ {{ shengji }}元
				</view>
				<view style="width: 30%;text-align: right;">
					<view style="text-align: center;font-size: 28upx;" class="b-btn">
						立即升级
						<text class="cuIcon cuIcon-right"></text>
					</view>
				</view>

			</view>
			<view style="background: rgba(0, 0, 0, 0.7);padding: 8px;display: flex;font-size: 14px;font-weight: bold" v-if="goods && grade === '0.7' && isEnable!='否'">
				<view style="color: #ffd465;width: 75%">已成为高级会员，预估返现￥ {{ money }}元</view>
			</view>
			<view class="goods_info" style="padding-top: 6px;padding-bottom: 10px">
				<view style="padding: 8px">
					<image v-if="goods.shoptype == '1'" style="height: 14px;width:12px;margin-top: 4px;margin-right: 4px" src="../../static/img/mao.png"></image>
					<image v-else style="height: 14px;width:12px;margin-top: 4px;margin-right: 4px" src="../../static/img/taobao.png"></image>
					<text style="font-weight: bold">
						<text style="color: #FC3F78;font-weight: bold" v-if="goods.shopname">【{{ goods.shopname }}】
						</text>
						<text @longpress="copyTitle" selectable="true">{{ goods.itemtitle }}</text>
					</text>
				</view>
				<view class="coupon-price s-row">
					<view class="price" style="width: 70%">
						<text style="font-size: 14px">
							券后价
							<text style="font-size: 12px">￥</text>
						</text>
						<text style="font-weight: 700;">{{ goods.itemendprice }}</text>
						<text style="font-size: 12px;color: grey;text-decoration:line-through;margin-left: 8px">￥{{
                            goods.itemprice }}
						</text>
					</view>
					<view class="volume" style="padding-top: 14rpx;font-size: 14px;width: 30%">{{ goods.itemsale }}人付款
					</view>
				</view>

				<view class="coupon-price s-row"></view>
			</view>

			<view class="goods_quan s-row">
				<view class="row getGoodsLink">
					<view class="is-col-16 money">
						<view style="font-weight: bold">
							<text>{{ goods.couponmoney }}</text>
							元优惠券
						</view>
						<view class="date-coupon" v-if="goods.starttime">使用期限: {{ goods.starttime }} - {{
                            goods.endtime }}
						</view>
					</view>
					<view class="is-col-8 name">
						<text @tap="shopCartShare('quan')">立即抢券</text>
					</view>
				</view>
				<image lazy-load src="/static/img/goods/goods_quan.png" mode="widthFix" class="is-response"></image>
			</view>
			<view class="goods_reco" style="margin-top: 10px;display: flex">
				<view class="goods-info-title" style="color: #FC3F78;width: 20%;text-align: center">必买理由</view>
				<view class="goods_desc" style="padding-bottom: 8px;padding-top:8px;width: 80%">{{ goods.itemdesc }}
				</view>
			</view>
			<view class="goods_reco" style="margin-top: -100rpx" v-if="goods.images">
				<view class="goods-info-title">宝贝详情</view>
				<view class="imglist">
					<block v-for="(item, index) in goods.images">
						<image lazy-load :src="item" mode="widthFix" class="is-response" @longpress="toSave(item)"></image>
					</block>
				</view>
			</view>
			<!-- 购买按钮 -->
			<view class="goods_shop_cart">
				<view class="cent" style="display: flex">
					<view style="text-align: center;width: 25%;margin-top: 4px;margin-bottom: 4px;display: flex">
						<view style="width: 50%;text-align: center">
							<view class="iconfont icon-shouye" @tap="goBackUp()"></view>
							<view style="font-size: 12px">首页</view>
						</view>
						<view style="width: 50%;text-align: center">
							<view class="iconfont icon-shoucang" :style="collect.isCollect" @tap="clickCollect()"></view>
							<view style="font-size: 12px" :style="collect.isCollect">{{ collect.name }}</view>
						</view>
					</view>

					<view style="width: 75%;display: flex;color: white">
						<view style="width: 50%;background: #FF6DB2;text-align: center;padding-top:8px;margin: 4px" @tap="shopCartShares('tkl')">{{ buyDes }}
						</view>
						<view class="getTbk" style="width: 50%;background:#F15B6C; text-align: center;padding-top: 8px;margin: 4px" @tap="shopCartShare('quan')">{{ getQun }}
						</view>
					</view>
				</view>
			</view>

			<!-- 购买按钮 active-->
			<view v-if="shopCartBg" class="goods_shop_cart_bg" @tap="showShopCartBg('cart')" @touchmove.stop.prevent="moveHandleStop"></view>
			<view class="goods_share" v-bind:class="[shopCartBg ? 'active' : '', '']">
				<view class="cent">
					<!-- #ifndef H5 -->
					<view class="" @tap="shareFc()">
						<text class="iconfont icon-kouling"></text>
						生成海报
					</view>
					<!--#endif-->
					<text class="em"></text>
					<view class="" @tap="shopCartShare('tklbuy')">
						<text class="iconfont icon-tupian"></text>
						素材分享
					</view>
					<view class="" @tap="copyHref">
						<text class="cuIcon cuIcon-copy"></text>
						复制链接
					</view>
					<view @tap="shopCartShares('tkl')" v-if="isWeiXin">
						<text class="cuIcon cuIcon-share"></text>
						发送给朋友
					</view>
				</view>
			</view>

			<view class="navBarButtonBox">
				<!-- 顶部右侧菜单 -->
				<view v-if="navBarButton" class="goods_shop_cart_bg navBarButton" @tap="showShopCartBg('nav')"
				 @touchmove.stop.prevent="moveHandleStop"></view>
				<view class="h_newlit" v-bind:class="[navBarButton ? 'active' : '', '']">
					<view class="em">
						<view style="font-size: 14px" @tap="navBarButtontO('home')">
							<text class="iconfont icon-shouye"></text>
							返回首页
						</view>
						<view style="font-size: 14px" @tap="navBarButtontO('search')">
							<text class="iconfont icon-sousuo"></text>
							超级搜索
						</view>
						<view style="font-size: 14px" @tap="navBarButtontO('footer')">
							<text class="iconfont icon-zuji"></text>
							我的足迹
						</view>
						<view style="font-size: 14px" @tap="navBarButtontO('like')">
							<text class="iconfont icon-shoucang"></text>
							个人中心
						</view>
					</view>
				</view>
			</view>
			<!-- 顶部右侧菜单 -->

			<!-- 淘口令分享 -->
			<simpleModal ref="simpleModalTkl" @maskClose="TklmaskClose">
				<view class="buy-box-title">复制分享文案</view>
				<view class="buy-box-center">
					<view class="code-cent">
						<div class="cente-text">
							<div>
								<view class="textarea">
									{{ goods.itemtitle }}
									<br />
									【在售价】{{ goods.itemprice }}元
									<br />
									【券后价】{{ goods.itemendprice }}元
									<br />
									复製此信息进入【手机Tao宝】即可查看并下单{{ tkl }}
									<br />
									【必买理由】{{ goods.itemdesc }}
									<br />
								</view>
							</div>
						</div>
						<view class="closeTips">长按上方轮播图片可保存图片素材哦~</view>
					</view>
					<view class="buy-btn-copy" v-bind:class="[copyTklStatus ? 'active' : '', '']" @tap="copyTklWenAns">
						{{ copyTklStatus ? '已复制到剪切板' : '一键复制' }}
					</view>
				</view>
			</simpleModal>
			<!-- 淘口令分享 -->

			<!-- 淘口令购买 -->
			<simpleModal ref="simpleModalTklBuy" @maskClose="TklBuymaskClose">
				<view class="buy-box-center">
					<view class="code-cent" style="margin-top: 10px;">
						<div class="cente-text" style="height: auto;">
							<div>
								<view class="textarea" style="height: auto;">复制框内整段文字，打开【手机淘宝APP】即可领券购买。{{ tkl }}</view>
							</div>
						</div>
					</view>
					<button class="buy-btn-copy" v-bind:class="[copyTklStatus ? 'active' : '', '']" @tap="copyTklWenAn">
						{{ copyTklStatus ? ' 复制成功！请打开【手机淘宝】购买' : '一键复制' }}
					</button>
				</view>
			</simpleModal>
			<!-- 淘口令购买 -->
		</view>
		<view class="" v-if="!loadGoods">
			<view class="s-page">
				<view class="is-100vh is-flex is-column is-justify-center is-align-center ">
					<image src="../../static/img/load.gif" style="width:75px;height: 75px;" class="is-response" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view v-if="couponlist.length > 0" style="text-align: center;font-size: 18px;color: #FC3F78;background: white;margin-top: -60px;padding: 16px">
			为你推荐
		</view>
		<view class="goods-list" style="margin-bottom: 60px" v-if="couponlist.length > 0">
			<orange-goods-card-home v-for="(item, index) in couponlist" :tkmoney="item.tkmoney" :tkmoneys="item.tkmoney" :itemid="item.itemid"
			 :logo="item.shoptype == 1 ? logo : taobao" :is-invitation="isInvitation" :itempic="item.itempic + '_310x310.jpg'"
			 :itemtitle="item.itemtitle" :itemprice="'¥' + item.itemprice" :itemsale="item.itemsale" :itemendprice="'' + item.itemendprice"
			 :couponmoney="item.couponmoney" :item="item"></orange-goods-card-home>
		</view>
		<view id="shareit" v-if="show_share" @tap="closeShare">
			<image class="arrow" src="../../static/img/jiant.png"></image>
			<text id="follow">点击右上角按钮！【发送给朋友】</text>
		</view>
		<view class="scroll_top active " @click="copyTkl()" style="bottom: 56px;width: 100px;right: -12px;padding-right: 10px">
			<text>
				<text class="cuIcon cuIcon-copy"></text>
				淘口令
			</text>
		</view>
		<view class="scroll_top active " @click="showModal()" style="bottom: 98px;width: 100px;right: -12px;padding-right: 10px">
			<text>
				<text class="cuIcon cuIcon-record"></text>
				生成海报
			</text>
		</view>
		<view class="content">
			<view class="flex_row_c_c modalView" :class="qrShow ? 'show' : ''" @tap="hideQr()">
				<view class="flex_column">
					<view class="backgroundColor-white padding1vh border_radius_10px">
						<image :src="poster.finalPath" mode="widthFix" class="posterImage"></image>
					</view>
					<button class="marginTop2vh" type="primary" size="mini" @tap.prevent.stop="saveImage()">保存图片
					</button>
				</view>
			</view>
			<view class="hideCanvasView">
				<canvas class="hideCanvas" canvas-id="default_PosterCanvasId" :style="{ width: (poster.width || 0) + 'px', height: (poster.height || 0) + 'px' }"></canvas>
			</view>
			<tki-qrcode ref="qrcode" :val="erweima" :size="200" background="#fff" foreground="#000" pdground="#000" :onval="true"
			 :loadMake="true" @result="qrR" :show="false"></tki-qrcode>
			 <view class="cu-modal" :class="modalName=='Image'?'show':''" @tap="hideModal">
			 	<view class="cu-dialog" v-if="goods&&haibaoShow&&erweimapath" @tap="hideModal">
			 		<view class="bg-img">
			 			<wm-poster @success="posterSuccess" :imgSrc="goods.itempic" :QrSrc="erweimapath" :Title="goods.itemtitle" :PriceTxt="goods.itemendprice"
			 			 :OriginalTxt="goods.itemprice" :LineType='false'></wm-poster>
			 		</view>
			 	</view>
			 </view>
		</view>
	</view>
</template>

<script>
	import simpleModal from '../../components/simple-pro/customModal.vue';
	import _app from '../../js_sdk/QuShe-SharerPoster/QS-SharePoster/app.js';
	import getSharePoster from '../../js_sdk/QuShe-SharerPoster/QS-SharePoster/QS-SharePoster.js';
	import wmPoster from '@/components/wm-poster/wm-poster.vue';
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';

	export default {
		data() {
			return {
				erweima: '',
				erweimapath: '',
				modalName: '',
				logo: '../../static/img/mao.png',
				taobao: '../../static/img/taobao.png',
				buyDes: '口令购买',
				collect: {
					name: '收藏',
					isCollect: ''
				},
				show_share: false,
				data: [],
				itemid: '',
				itempic: '',
				itemtitle: '',
				itemprice: '',
				itemendprice: '',
				couponmoney:'',
				couponurl:'',
				itemdesc:'',
				starttime:'',
				endtime:'',
				shengji: '',
				getQun: '立即领券',
				follow: false,
				loadGoods: true,
				goods: '',
				taoBaoBuy: true,
				shopCartBg: false,
				scrollTop: false,
				couponlist: [],
				navBarButton: false,
				copyTklStatus: false,
				save: false,
				tkl: '',
				relation_id: null,
				money: 0,
				grade: '',
				isInvitation: 0,
				showFollow: false,
				isWeiXin: false,
				footprintKey: 'orange-sqx-footprint',
				collectKey: 'orange-sqx-collect',
				poster: {},
				coupon_click_url: '',
				qrShow: false,
				haibaoImg: null,
				haibaoShow: false,
				isEnable: '否',
				canvasId: 'default_PosterCanvasId'
			};
		},
		components: {
			simpleModal,
			tkiQrcode,
			wmPoster
		},
		onShow: function() {
			this.copyTklStatus = false;
			let relation_id = this.$queue.getData('relation_id');
			if (relation_id) {
				this.relation_id = relation_id;
			}
		},
		onLoad: function(e) {
			let a = this.$queue.getData("isEnable");
			if (a) {
				this.isEnable = a;
			}
			if (e) {
				//#ifdef H5
				let ua = navigator.userAgent.toLowerCase();
				if (ua.indexOf('micromessenger') !== -1) {
					this.isWeiXin = true;
				}
				if (window.location.href.indexOf('&relation_id=') !== -1) {
					let relation = window.location.href.split('&relation_id=')[1].split('&')[0];
					this.$queue.setData('relation', relation);
				}
				//#endif
				this.data = JSON.parse(decodeURIComponent(e.data));
				this.itemid = this.data.itemid;
				this.itempic = this.data.itempic;
				this.itemtitle = this.data.itemtitle;
				this.itemprice = this.data.itemprice;
				this.itemendprice = this.data.itemendprice;
				this.starttime = this.data.starttime;
				this.endtime = this.data.endtime;
				this.couponmoney = this.data.couponmoney;
				this.couponurl = this.data.couponurl;
				this.itemdesc = this.data.itemdesc;
				let userId = this.$queue.getData('userId');
				if (userId) {
					this.$Request.getT(this.$Api.member.GetUserInfoById).then(res => {
						if (res.Code === 1) {
							this.isInvitation = "1";
							this.$queue.setData('isInvitation', this.isInvitation);//是否邀请
							this.$queue.setData('relation_id', res.Message.UserGroupId);//组别序号
							this.$queue.setData('relation', res.Message.MUserGroup.UserGroupName);//组别名称
							this.$queue.setData('grade', res.Message.MUserGroup.RankId);//等级值
							this.$queue.setData("image_url", res.Message.HeadImgUrl ? this.$Url + res.Message.HeadImgUrl : '/static/img/common/logo.jpg');//头像
							this.$queue.setData('mobile', res.Message.Mobile);//手机号码
							this.$queue.setData('nickName', res.Message.NickName);//昵称
							this.$queue.setData('gender', parseInt(res.Message.Gender));//性别
						}
					});
					this.loadGoodsInfo();
				} else {
					this.loadGoodsInfo();
				}
			} else {
				uni.navigateBack();
			}
		},
		onPageScroll: function(e) {
			this.scrollTop = e.scrollTop > 200;
		},

		onNavigationBarButtonTap: function() {
			this.navBarButton = !this.navBarButton;
		},
		methods: {
			posterSuccess(haibaoImg) {
				this.haibaoImg = haibaoImg;
				this.modalName = "Image"
			},
			showModal() {
				if (!this.haibaoImg) {
					this.haibaoShow = true;
					this.$queue.showLoading("海报生成中...")
				} else {
					this.modalName = "Image"
				}
			
			},
			hideModal() {
				this.modalName = null
			},
			shengJiMethod() {
				uni.showModal({
					title: '返费提升规则',
					content: '每成功邀请2位好友提升1级\n最高10级每级对应相应的返现比例\n\n邀请方式：\n1、点击下方生成海报按钮\n2、将海报分享好友、群或朋友圈\n让好友扫码关注即可升级',
					showCancel: true,
					cancelText: '关闭',
					confirmText: '生成海报',
					success: res => {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/share/shares'
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			qrR(path) {
				this.erweimapath = path;
			},
			/* 预览照片 */
			previewPhoto(e) {
				let index = e.currentTarget.dataset.index;
				let list = this.goods.images.map((item, index) => {
					return item;
				});

				uni.previewImage({
					current: list[index],
					urls: list,
					longPressActions: {
						itemList: ['保存图片'],
						success: function(res) {
							// console.error(res);
							uni.getImageInfo({
								src: list[res.index],
								success: function(image) {
									console.log('图片信息：', JSON.stringify(image));
									uni.saveImageToPhotosAlbum({
										filePath: image.path,
										success: function() {
											uni.showToast({
												title: '图片保存成功',
												icon: 'none',
												duration: 3000
											});
										}
									});
								}
							});
						}
					}
				});
			},
			//初始化加载详情数据
			loadGoodsInfo: function() {
				let that = this;
				uni.showLoading({
					title: '加载中...'
				});
				this.$Request.get(this.$Api.goods.iteminfo,{
					NumIids: that.itemid
				}).then(res => {
					if (res.Code === 1) {
						that.goods = res.Message[0];
						if (that.goods.smallimages && that.goods.smallimages.length > 0) {
							let images = that.goods.smallimages;
							that.goods.images = [];
							for (let i = 0; i < images.length; i++) {
								that.goods.images.push(images[i].smallpic);
							}
						} else {
							that.goods.images = [];
							that.goods.images.push(that.goods.itempic);
						}
						that.goods.itemprice = that.itemprice;
						that.goods.itemendprice = that.itemendprice;
						that.goods.starttime = that.starttime;
						that.goods.endtime = that.endtime;
						that.goods.couponmoney = that.couponmoney;
						that.goods.itemsale = that.goods.itemsale > 10000 ? (that.goods.itemsale / 10000).toFixed(1) + '万' : that.goods.itemsale;
						that.goods.itemdesc = that.itemdesc;
						that.goods.couponurl = that.couponurl;
						
						this.$Request.get(this.$Api.goods.tbkspreadget,{
							Url: that.couponurl
						}).then(res_url_tbk => {
							if (res_url_tbk.Code === 1) {
								this.erweima = res_url_tbk.Message;
								console.log("----this.erweima---------" + this.erweima);
							}
						});
						
						that.loadGoods = true;
						let grade = this.$queue.getData('grade');
						if (grade) {
							that.money = (that.goods.tkmoney * parseFloat(grade)).toFixed(2);
						} else {
							that.money = (that.goods.tkmoney * 0.3).toFixed(2);
						}
						that.shengji = parseFloat(that.goods.tkmoney * 0.7).toFixed(2);
						that.grade = grade;
						try {
							let isExist = this.$queue.isExist(this.collectKey, that.goods.itemid);
							if (isExist === true) {
								this.collect.name = '已收藏';
								this.collect.isCollect = 'color: #FC3F78';
							} else {
								this.collect.name = '收藏';
								this.collect.isCollect = false;
							}
							let isExists = this.$queue.isExist(this.footprintKey, that.goods.itemid);
							if (isExists === false) {
								this.$queue.insert({
									key: this.footprintKey,
									value: this.goods
								});
							}
							this.itemprice = that.goods.itemprice;
							this.itempic = that.goods.itempic;
							this.itemtitle = that.goods.itemtitle;
							this.itemendprice = that.goods.itemendprice;

							this.$queue.setData('itempic', that.goods.itempic);
							this.$queue.setData('itemtitle', that.goods.itemtitle);
							this.$queue.setData('itemprice', that.goods.itemprice);
							this.$queue.setData('itemendprice', that.goods.itemendprice);
							let grade = this.$queue.getData('grade');
							if (this.isEnable != '否') {
								if (grade) {
									if (grade === '0.7') {
										this.buyDes = '返现 ￥' + (this.goods.tkmoney * parseFloat(grade)).toFixed(2);
									} else {
										this.buyDes = '升级返 ￥' + (this.goods.tkmoney * 0.7).toFixed(2);
									}
								} else {
									this.buyDes = '返现 ￥' + (this.goods.tkmoney * 0.3).toFixed(2);
								}
							} else {
								this.buyDes = '分享给好友';
							}
							this.getQun = '领券￥' + this.goods.couponmoney + ' 购买';
							//获取淘口令
							this.loadTkl();
						} catch (ex) {
							console.log(ex);
						}
					} else {
						uni.navigateBack();
					}
					uni.hideLoading();
				});
				//为你推荐
				this.$Request.get(this.$Api.common.couponbestlist,{
					MaterialId: "13256",
					ItemId: that.itemid
				}).then(res => {
					if (res.Code === 1) {
						res.Message.forEach(d => {
							d.tkmoneys = (d.tkmoney * 0.7).toFixed(2);
							let grade = this.$queue.getData('grade');
							if (grade) {
								d.tkmoney = (d.tkmoney * parseFloat(grade)).toFixed(2);
							} else {
								d.tkmoney = (d.tkmoney * 0.3).toFixed(2);
							}
							d.itemsale = d.itemsale > 10000 ? '已售 ' + (d.itemsale / 10000).toFixed(1) + '万' : '已售 ' + d.itemsale;
							this.couponlist.push(d);
						});
					}
				});
			},
			goWeb(url) {
				uni.navigateTo({
					url: '/pages/member/webview?url=' + url
				});
			},
			goPublisher() {
				let token = this.$queue.getData('token');
				let userId = this.$queue.getData('userId');
				if (token) {
					uni.navigateTo({
						url: '/pages/member/publisher?uid=' + userId + '&token=' + token
					});
				} else {
					this.loginS();
				}
			},

			/**
			 * 保存图片
			 * @param url
			 */
			toSave(url) {
				//#ifndef H5
				uni.getImageInfo({
					src: url,
					success: function(image) {
						console.log('图片信息：', JSON.stringify(image));
						uni.saveImageToPhotosAlbum({
							filePath: image.path,
							success: function() {
								console.log('save success');
								uni.showToast({
									title: '图片保存成功',
									icon: 'none',
									duration: 3000
								});
							}
						});
					}
				});

				//#endif
			},
			/**
			 * 返回
			 */
			goBackUp() {
				// uni.navigateBack();
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			/**
			 * 复制链接
			 */
			copyHref() {
				//#ifdef H5
				uni.setClipboardData({
					data: window.location.href,
					success: r => {
						this.$queue.showToast('复制成功');
					}
				});
				//#endif
				//#ifndef H5
				let relation_id = this.$queue.getData('relation_id');
				if (relation_id) {
					uni.setClipboardData({
						data: this.$Url + '/pages/detail/goodsinfo?data=' + encodeURIComponent(JSON.stringify(this.data)) + '&relation_id=' +
							relation_id,
						success: r => {
							this.$queue.showToast('复制成功');
						}
					});
				} else {
					uni.setClipboardData({
						data: this.$Url + '/pages/detail/goodsinfo?data=' + encodeURIComponent(JSON.stringify(this.data)),
						success: r => {
							this.$queue.showToast('复制成功');
						}
					});
				}
				//#endif
			},
			closeShare() {
				this.show_share = false;
			},
			clickCollect() {
				//收藏
				let isExist = this.$queue.isExist(this.collectKey, this.goods.itemid);
				if (isExist) {
					let items = [];
					items.push(this.goods.itemid);
					this.$queue.removeItem(this.collectKey, items);
					this.collect.name = '收藏';
					this.collect.isCollect = '';
				} else {
					this.$queue.insert({
						key: this.collectKey,
						value: this.goods
					});
					this.collect.name = '已收藏';
					this.collect.isCollect = 'color: #FC3F78';
				}
			},
			//获取优惠券
			getQuan: function() {
				uni.showLoading({
					title: '加载中...'
				});
				let that = this;
				let coupon_click_url = that.couponurl;
				if(coupon_click_url !== ''){
				    coupon_click_url = "https:" + coupon_click_url;
				}
				let relation_id = that.$queue.getData('relation_id');
				let relation = that.$queue.getData('relation');
				if (relation) {
					coupon_click_url = coupon_click_url + '&relationId=' + relation;
				}
				if (relation_id) {
					coupon_click_url = coupon_click_url + '&relationId=' + relation_id;
				}
				//#ifdef APP-PLUS
				uni.showToast({
					title: '正在获取优惠券请稍后...',
					mask: false,
					duration: 1500,
					icon: 'none'
				});
				if (plus.os.name == 'Android') {
					plus.runtime.openURL(
						coupon_click_url,
						function(res) {
							that.shopCartShare('tttt');
							uni.hideLoading();
						},
						'com.taobao.taobao'
					);
				} else {
					coupon_click_url = coupon_click_url.split('//')[1];
					plus.runtime.openURL(
						'taobao://' + coupon_click_url,
						function(res) {
							that.shopCartShare('tttt');
							uni.hideLoading();
						},
						'taobao://'
					);
				}
				//#endif
				//#ifndef APP-PLUS
				if(this.isWeiXin){
					that.shopCartShare('tttt');
				}
				else{
					uni.showToast({
						title: '正在获取优惠券请稍后...',
						mask: false,
						duration: 1500,
						icon: 'none'
					});
					window.location.href = coupon_click_url;
				}
				//#endif
				that.coupon_click_url = coupon_click_url;
			},
			/**
			 *获取佣金结算
			 * @param type
			 */
			getTkl: function(type) {
				let that = this;
				let relation_id = that.$queue.getData('relation_id');
				if (this.tkl) {
					if (type === 'tkl' && type !== 'tklbuy') {
						this.$refs.simpleModalTkl.show({
							showConfirmButton: false
						});
					} else if (type === 'tttt') {
						this.$refs.simpleModalTklBuy.show({
							showConfirmButton: false
						});
					} else if (type === 'copy') {
						that.copyTkl();
					} else if (type === 'save') {
						//that.copyTkl();
					} else if (relation_id) {
						this.$refs.simpleModalTkl.show({
							showConfirmButton: false
						});
					} else {
						this.$refs.simpleModalTklBuy.show({
							showConfirmButton: false
						});
					}
					uni.hideLoading();
				} else {
					uni.showLoading({
						title: '加载中...'
					});
					let relation = that.$queue.getData('relation');
					//#ifdef H5
					if (window.location.href.indexOf('&relation_id=') !== -1) {
						relation = window.location.href.split('&relation_id=')[1].split('&')[0];
						that.$queue.setData('relation', relation);
					}
					//#endif
					let coupon_click_url = that.couponurl;
					if(coupon_click_url !== ''){
						coupon_click_url = "https:" + coupon_click_url;
					}
					if(this.isWeiXin){
						this.$Request.post(this.$Api.goods.itemcode, { Url : coupon_click_url, Text: that.itemtitle, Logo:that.itempic })
						.then(res => {
								if (res.Code === 1) {
									this.tkl = res.Message;
									if (type === 'tkl' && type !== 'tklbuy') {
										this.$refs.simpleModalTkl.show({
											showConfirmButton: false
										});
									} else if (type === 'tttt') {
										this.$refs.simpleModalTklBuy.show({
											showConfirmButton: false
										});
									} else if (type === 'copy') {
										that.copyTkl();
									} else if (type === 'save') {
										//that.copyTkl();
									} else if (relation_id) {
										this.$refs.simpleModalTkl.show({
											showConfirmButton: false
										});
									} else {
										this.$refs.simpleModalTklBuy.show({
											showConfirmButton: false
										});
									}
								} else {
									uni.showToast({
										title: '请关注微信公众号【掌上优惠】领取优惠券',
										mask: false,
										duration: 1500,
										icon: 'none'
									});
								}
								uni.hideLoading();
							}).catch(res => {
								uni.hideLoading();
								uni.showToast({
									title: '请关注微信公众号【掌上优惠】领取优惠券',
									mask: false,
									duration: 1500,
									icon: 'none'
								});
							});
					}
					else{
						window.location.href = this.coupon_click_url
					}
				}
			},
			formatDate: function(now) {
				const year = now.getFullYear();
				const month = now.getMonth() + 1;
				const date = now.getDate();
				return year + '-' + month + '-' + date;
			},
			loadTkl() {
				let that = this;
				let relation_id = that.$queue.getData('relation_id');
				let relation = that.$queue.getData('relation');
				//#ifdef H5
				if (window.location.href.indexOf('&relation_id=') !== -1) {
					relation = window.location.href.split('&relation_id=')[1].split('&')[0];
					that.$queue.setData('relation', relation);
				}
				//#endif
				let coupon_click_url = that.couponurl;
				if(coupon_click_url !== ''){
					coupon_click_url = "https:" + coupon_click_url;
				}
				if(this.isWeiXin){
					this.$Request.post(this.$Api.goods.itemcode, { Url : coupon_click_url, Text:that.itemtitle,Logo:that.itempic })
					.then(res => {
						if (res && res.Message) {
							this.tkl = res.Message;
							this.erweima = "复制(" + res.Message + ")打开【淘宝】";
						}
					});
				}
			},
			copyTkl: function() {
				uni.setClipboardData({
					data: this.tkl,
					success: r => {
						uni.showToast({
							title: '复制成功',
							duration: 1500
						});
					}
				});
			},
			haibao: function() {
				uni.navigateTo({
					url: '/pages/detail/share'
				});
			},
			moveHandleStop: function() {
				console.log('111');
			},
			showShopCartBg: function(type) {
				if (type === 'cart') {
					this.shopCartBg = !this.shopCartBg;
				}
				if (type === 'nav') {
					this.navBarButton = !this.navBarButton;
				}
			},
			topScrollTap: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			navBarButtontO: function(type) {
				if (type === 'search') {
					uni.switchTab({
						url: '/pages/homeSearch/index'
					});
				} else if (type === 'like') {
					uni.switchTab({
						url: '/pages/member/user'
					});
				} else if (type === 'footer') {
					uni.navigateTo({
						url: '/pages/footer/index'
					});
				} else if (type === 'home') {
					uni.switchTab({
						url: '/pages/index/index'
					});
				}
			},
			shopCartShare: function(type) {
				if (type === "tkl") {
					this.copyTklStatus = false;
					this.getTkl(type);
				} else if (type === "tklbuy") {
					let relation_id = this.$queue.getData("relation_id");
					if (relation_id) {
						// // 淘口令购买
						this.copyTklStatus = false;
						this.getTkl(type);
					} else {
						this.$queue.setData("href", '/pages/detail/goodsinfo?itemid=' + this.itemid);
						let token = this.$queue.getData("token");
						let userId = this.$queue.getData("userId");
						if (token) {
							uni.navigateTo({
								url: '/pages/member/publisher?uid=' + userId + '&token=' + token
							});
						} else {
							uni.navigateTo({
								url: '/pages/public/login'
							})
						}
					}
				} else if (type === "showPic") {
					this.copyTklStatus = false;
					this.$refs.simpleModalTkl.show({
						showConfirmButton: false,
					});
				} else if (type === "quan") {
					this.getQuan();
				} else {
					this.copyTklStatus = false;
					this.getTkl(type);
				}
			},
			shopCartShares: function(type) {
				// tkl = 淘口令  picture = 图片
				if (type === "tklbuy") {
					// // 淘口令购买
					this.copyTklStatus = false;
					this.getTkl(type);
				} else if (type === "quan") {
					this.getQuan();
				}
			},
			loginS() {
				//#ifdef H5
				uni.showModal({
					title: '登录提醒',
					showCancel: false,
					content: '当前账号未登录\n请登录后操作',
					success: confirmRes => {
						if (confirmRes.confirm) {
							this.$queue.setData('href', '/pages/detail/goodsinfo?data=' + encodeURIComponent(JSON.stringify(this.data)));
							uni.navigateTo({
								url: '/pages/member/register'
							});
						}
					}
				});
				//#endif
				//#ifndef H5
				uni.showModal({
					title: '登录提醒',
					showCancel: false,
					content: '当前账号未登录\n请登录后操作',
					success: confirmRes => {
						if (confirmRes.confirm) {
							this.$queue.setData('href', '/pages/detail/goodsinfo?data=' + encodeURIComponent(JSON.stringify(this.data)));
							uni.navigateTo({
								url: '/pages/public/login'
							});
						}
					}
				});
				//#endif
			},
			TklmaskClose: function(e) {
				this.$refs.simpleModalTkl.hide();
				this.copyTklStatus = false;
			},
			copyTklWenAn: function() {
				uni.setClipboardData({
					data: '复制这段文字，打开【淘宝】即可领券购买。$' + this.tkl,
					success: r => {
						this.copyTklStatus = true;
					}
				});
			},
			copyTitle: function() {
				uni.setClipboardData({
					data: this.goods.title,
					success: r => {
						this.$queue.showToast('复制成功')
					}
				});
			},
			copyTklWenAns: function() {
				let relation_id = this.$queue.getData('relation_id');
				//#ifdef H5
				uni.setClipboardData({
					data: this.goods.itemtitle +
						'\n【在售价】' +
						this.goods.itemprice +
						'元\n【券后价】' +
						this.goods.itemendprice +
						'元\n【必买理由】\n' +
						this.goods.itemdesc +
						'+\n$' +
						this.tkl +
						'复制此信息进入【淘宝】即可查看并下单\n',
					success: r => {
						this.copyTklStatus = true;
					}
				});

				//#endif
				//#ifndef H5
				uni.setClipboardData({
					data: this.goods.itemtitle +
						'\n【在售价】' +
						this.goods.itemprice +
						'元\n【券后价】' +
						this.goods.itemendprice +
						'元\n【必买理由】\n' +
						this.goods.itemdesc +
						'+\n$' +
						this.tkl +
						'复制此信息进入【淘宝】即可查看并下单\n',
					success: r => {
						this.copyTklStatus = true;
					}
				});
				//#endif
			},
			TklBuymaskClose: function() {
				this.$refs.simpleModalTklBuy.hide();
				this.copyTklStatus = false;
			},
			async shareFc() {
				if (!this.goods.itempic_copy) {
					_app.showToast('当前商品不支持海报生成');
					return;
				}
				try {
					if (!this.poster.finalPath) {
						const d = await getSharePoster({
							type: 'testShareType',
							backgroundImage: this.goods.itempic,
							posterCanvasId: this.canvasId,
							qrCodeArray: ({
								bgObj,
								type,
								bgScale
							}) => {
								console.log(this.$Url);
								let relation_id = this.$queue.getData('relation_id');
								if (relation_id) {
									return [{
										text: this.$Url + '/pages/detail/goodsinfo?data=' + encodeURIComponent(JSON.stringify(this.data)) + '&relation_id=' +
											relation_id,
										size: bgObj.width * 0.2,
										dx: bgObj.width * 0.05,
										dy: bgObj.height - bgObj.width * 0.25
									}];
								} else {
									return [{
										text: this.$Url + '/pages/detail/goodsinfo?data=' + encodeURIComponent(JSON.stringify(this.data)),
										size: bgObj.width * 0.2,
										dx: bgObj.width * 0.05,
										dy: bgObj.height - bgObj.width * 0.25
									}];
								}
							},
							textArray: ({
								bgObj,
								type,
								bgScale
							}) => {
								const fontSize = bgObj.width * 0.05;
								const fontSize2 = bgObj.width * 0.08;
								const widths = bgObj.width * 0.25;
								const fontSize1 = bgObj.width * 0.04;
								const lineHeight = bgObj.height * 0.04;
								return [{
										fontStyle: 'italic',
										fontWeight: 'bold',
										text: '【掌上优惠】券后价',
										size: fontSize,
										color: 'red',
										alpha: '1',
										textAlign: 'left',
										textBaseline: 'middle',
										infoCallBack(textLength) {
											_app.log('index页面的text的infocallback ，textlength:' + textLength);
											return {
												dx: bgObj.width - textLength - fontSize,
												dy: bgObj.height - lineHeight * 3.5
											};
										}
									},
									{
										fontWeight: 'bold',
										text: '长按识别二维码领券',
										size: fontSize1,
										color: 'white',
										alpha: 1,
										textAlign: 'right',
										textBaseline: 'middle',
										infoCallBack(textLength) {
											return {
												dx: bgObj.width * 0.37,
												dy: bgObj.height - bgObj.width * 0.02
											};
										}
									},
									{
										text: this.goods.itemendprice + ' 元',
										size: fontSize2,
										fontWeight: 'bold',
										color: 'red',
										alpha: 1,
										textAlign: 'left',
										textBaseline: 'middle',
										infoCallBack(textLength) {
											return {
												dx: bgObj.width - textLength - fontSize,
												dy: bgObj.height - lineHeight * 1.5
											};
										}
									}
								];
							},
							setCanvasWH: ({
								bgObj,
								type,
								bgScale
							}) => {
								// 为动态设置画布宽高的方法，
								this.poster = bgObj;
							},
							setDraw: ({
								Context,
								bgObj,
								type,
								bgScale
							}) => {
								Context.setFillStyle('black');
								Context.setGlobalAlpha(0.5);
								Context.fillRect(0, bgObj.height - bgObj.height * 0.2, bgObj.width, bgObj.height * 0.2);
							}
						});
						console.log('海报生成成功， 临时路径: ' + d.poster.tempFilePath);
						this.poster.finalPath = d.poster.tempFilePath;
					}
					this.qrShow = true;
				} catch (e) {
					_app.hideLoading();
					_app.showToast(JSON.stringify(e));
					console.log(JSON.stringify(e));
				}
			},
			saveImage() {
				// #ifndef H5
				uni.saveImageToPhotosAlbum({
					filePath: this.poster.finalPath,
					success(res) {
						_app.showToast('保存成功');
					}
				});
				// #endif
				// #ifdef H5
				_app.showToast('请长按上方图片保存');
				// #endif
			},
			share() {
				// #ifdef APP-PLUS
				_app.getShare(false, false, 2, '', '', '', this.poster.finalPath, false, false);
				// #endif

				// #ifndef APP-PLUS
				_app.showToast('请长按图片保存后自行分享');
				// #endif
			},
			hideQr() {
				this.qrShow = false;
			}
		}
	};
</script>

<style>
	@import '../../static/css/index.css';

	.swiper-container {
		min-height: 100vw;
	}

	.hideCanvasView {
		position: relative;
	}

	.hideCanvas {
		position: fixed;
		top: -99999 upx;
		left: -99999 upx;
		z-index: -99999;
	}

	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.modalView {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		outline: 0;
		transform: scale(3);
		perspective: 2500 upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out;
		pointer-events: none;
		backface-visibility: hidden;
		z-index: 999;
	}

	.modalView.show {
		opacity: 1;
		transform: scale(1);
		pointer-events: auto;
	}

	.flex_column {
		display: flex;
		flex-direction: column;
	}

	.backgroundColor-white {
		background-color: white;
	}

	.border_radius_10px {
		border-radius: 10px;
	}

	.padding1vh {
		padding: 1vh;
	}

	.posterImage {
		width: 60vw;
	}

	.flex_row {
		display: flex;
		flex-direction: row;
	}

	.marginTop2vh {
		margin-top: 2vh;
	}

	.shareInfos {
		color: #fc3f78;
	}

	.shareInfo::after {
		border: none;
	}

	button {
		font-size: 14px;
	}

	#shareit {
		-webkit-user-select: none;
		position: fixed;
		width: 100%;
		height: 2000px;
		background: rgba(0, 0, 0, 0.85);
		text-align: center;
		top: 0;
		left: 0;
		z-index: 999;
	}

	#shareit img {
		max-width: 100%;
	}

	.arrow {
		width: 100px;
		height: 150px;
		position: absolute;
		right: 5%;
		top: 1%;
	}

	.b-btn {
		right: 10px;
		top: 16px;
		width: 80px;
		text-align: center;
		font-size: 14px;
		padding: 4px 1px 4px 6px;
		color: #36343c;
		border-radius: 20px;
		background: linear-gradient(left, #f9e6af, #ffd465);
		z-index: 1;
	}

	#follow {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		text-decoration: none;
		font-size: 18px;
		color: white;
		float: left;
		margin-top: 160px;
	}

	#follow1 {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		text-decoration: none;
		font-size: 18px;
		color: white;
		float: left;
		margin-top: 170px;
	}

	button::after {
		border: none;
	}

	.swiper-wrapper {
		width: 100%;
	}
</style>
