<template>
	<view class="index-content" style="background: white">
		<view class="top-bckground">
			<!-- 搜索板块 -->
			<view class="index-header" style="top: 0;">
				<!-- #ifndef H5 -->
				<view class="icon_header" style="padding-top: 50upx;">
					<!--#endif-->
					<!-- #ifdef H5 -->
					<view class="icon_header">
						<!--#endif-->
						<view class="icon-gender" @tap="showGender">
							<image v-if="gender === 1" src="../../static/img/home/boy.png" class="img-gender"></image>
							<image v-else-if="gender === 2" src="../../static/img/home/girl.png" class="img-gender"></image>
							<image v-else src="../../static/img/common/logo.jpg" class="img-gender"></image>
						</view>
						<view class="index-search" style="margin-left: 140upx;margin-right: 120upx" @tap="toSearchIndex">
							<view class="icon_search" style="text-align: left">
								<text class="cuIcon cuIcon-search" style="margin-right: 12upx"></text>
								<text>输入关键字或粘贴宝贝标题</text>
							</view>
						</view>
						<!-- #ifndef H5 -->
						<view class="icon_suji" @tap="toZujiIndex" style="margin-right: 20upx;margin-top: 48upx">
							<text class="iconfont icon-zuji" style="color:#dcdcdc;font-size: 44upx"></text>
						</view>
						<!--#endif-->
						<!-- #ifdef H5 -->
						<view class="icon_suji" @tap="toZujiIndex" style="margin-right: 20upx;margin-top: 10upx">
							<text class="iconfont icon-zuji" style="color:#dcdcdc;font-size: 44upx"></text>
						</view>
						<!--#endif-->
					</view>
				</view>

				<view>
					<!-- #ifdef H5 -->
					<scroll-view scroll-x class="nav selectTop" scroll-with-animation :scroll-left="scrollLeft">
						<!-- #endif -->
						<!-- #ifndef H5 -->
						<scroll-view scroll-x class="nav selectTop1" scroll-with-animation :scroll-left="scrollLeft">
							<!-- #endif -->
							<view class="cu-item" :class="index1 == TabCur ? 'text-green cur' : ''" v-for="(item, index1) in category" :key="index1"
							 @tap="tabSelect" :data-id="index1">
								<text :style="
								index1 == TabCur
									? 'background: #FFFFFF;padding: 4upx 20upx 4upx 20upx;border-radius: 32upx;margin-right: -20upx'
									: 'background: transparent;color: #FFFFFF;margin-right: -20upx'
							">
									{{ item.name }}
								</text>
							</view>
						</scroll-view>
				</view>
			</view>
			<!--begin支持界面左右滑动-->
			<swiper :current="TabCur" style="height: 1920upx;" @change="changeTab">
				<block v-for="(item, index2) in category" :key="index2">
					<swiper-item v-if="index2 == 0">
						<scroll-view @scroll="scroll" v-bind:scroll-top="scrollTop" style="height: 100%;" lower-threshold="200px"
						 @scrolltolower="loadMore" scroll-y>
							<!-- banner板块 -->
							<!-- #ifndef H5 -->
							<view class="swiper" style="padding-top: 220upx;background: white">
								<!--#endif-->
								<!-- #ifdef H5 -->

								<view class="swiper" style="padding-top: 180upx;background: white">
									<!--#endif-->
									<swiper class="swiper-container" :autoplay="true" :interval="4000" :circular="true" :indicator-dots="true"
									 indicator-active-color="#FC3F78" indicator-color="#cccccc" style="height: 240upx;padding: 18upx 16upx 8upx 16upx">
										<block v-for="(item, index3) in banners" :key="index3">
											<swiper-item class="swiper-wrapper" @tap="toGoodsInfo(item.PageUrl)">
												<image :src="item.DocumentPictureUrl" style="width: 100%;height: 220upx;border-radius: 32upx;" mode="scaleToFill"></image>
											</swiper-item>
										</block>
									</swiper>
								</view>
								<!-- banner结束 -->
								<!--首页菜单开始-->
								<view style="background: white">
									<view class="index-navlist s-grids" style="padding-top: 10px;padding-bottom: 10px;background: white">
										<view class="is-col-1-5 is-center" v-for="(nav, index5) in navlist" :key="index5" @tap="toNavList(nav.url, nav.title)">
											<view class="has-pdtb-5">
												<image :src="nav.image" mode="widthFix" style="height: 45px;width: 45px"></image>
												<view class="is-size-14">{{ nav['title'] }}</view>
											</view>
										</view>
									</view>
									<view class="index-navlist s-grids" style="padding-top: 10px;padding-bottom: 10px;background: white;">
										<view class="is-col-1-5 is-center" v-for="(nav, index6) in navlist1" :key="index6" @tap="toNavList(nav.url, nav.title)">
											<view class="has-pdtb-5">
												<image v-if="nav.url == 'daequan'" :src="nav.image" mode="widthFix" style="height: 46px;width: 46px"></image>
												<image v-else :src="nav.image" mode="widthFix" style="height: 45px;width: 45px"></image>

												<view v-if="nav.url == 'gaoyongjingxuan1'" style="margin-top: 2px;color: red;font-weight: bold" class="is-size-14">{{ nav['title'] }}</view>
												<view v-else style="margin-top: 2px" class="is-size-14">{{ nav['title'] }}</view>
											</view>
										</view>
									</view>
								</view>
								<!--首页菜单结束-->
								<!--首页公告开始-->
								<swiper v-if="messageList.length > 0" :autoplay="true" :vertical="true" :interval="4000" :circular="true"
								 :indicator-dots="false" style="height: 60upx;margin-left: 32upx;margin-right: 32upx;line-height: 60upx;">
									<block v-for="(item1, index10) in messageList" :key="index10">
										<swiper-item style="height: 60upx;" @click="goWebView(item1)">
											<view>
												<image src="../../static/img/laba.png" style="width: 40upx;height: 40upx;"></image>
												<text>{{ item1.DocumentName }}</text>
											</view>
										</swiper-item>
									</block>
								</swiper>
								<!--首页公告结束-->
								<view style="display: flex;padding: 4px 10px 8px 10px">
									<view style="width:48%;height:120px;background:rgba(248,248,250,1);border-radius:6px;" @tap="toNavList('meishi', '爆款美食')">
										<view style="margin:7px;color: #F15B6C;font-size: 16px;font-weight: bold">
											爆款美食
											<text style="font-size: 14px;margin-left: 6px;background:rgba(241,91,108,1);border-radius:4px;color: white;padding: 2px">网红美食</text>
										</view>
										<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">刷新超低折扣价</view>
										<view style="height: 100px;text-align: center;width: 100%">
											<image src="/static/img/home/suiguo.png" style="height: 60px;width: 90px"></image>
										</view>
									</view>
									<view style="margin-left: 16px;width:48%;height:120px;background:rgba(248,248,250,1);border-radius:6px;" @tap="toNavList('meirishangxin', '每日上新')">
										<view style="margin:7px;color: #F15B6C;font-size: 16px;font-weight: bold;">
											每日上新
											<text style="font-size: 14px;margin-left: 6px;background:rgba(241,91,108,1);border-radius:4px;color: white;padding: 2px">售完为止</text>
										</view>
										<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">热卖好货数量有限</view>
										<view style="height: 100px;text-align: center;width: 100%;margin-top: 10px;display: flex">
											<image src="/static/img/home/tupian.png" style="height: 40px;width: 60px;margin-left: 16px;margin-right: 16px"></image>
											<image src="/static/img/home/tupian3.png" style="height: 40px;width: 60px"></image>
										</view>
									</view>
								</view>
								<view style="display: flex;padding: 4px 10px 8px 10px">
									<view style="width:48%;height:60px;background:rgba(248,248,250,1);border-radius:6px;display: flex" @tap="toNavList('jinxuanmeizhuan', '精选美妆')">
										<view>
											<view style="margin:7px;color: #F15B6C;font-size: 16px;font-weight: bold;">精选美妆</view>
											<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">Oh My God 买它</view>
										</view>
										<image src="/static/img/home/tupian1.png" style="border-radius: 8px;height: 40px;width: 40px;margin-top: 10px;margin-left: 10px"></image>
									</view>
									<view style="width:48%;height:60px;background:rgba(248,248,250,1);border-radius:6px;margin-left: 16px;display: flex"
									 @tap="toNavList(3, '3.9包邮')">
										<view>
											<view style="margin:7px;color: #F15B6C;font-size: 16px;font-weight: bold">3.9包邮</view>
											<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">超便宜超划算</view>
										</view>
										<image src="/static/img/home/tupian2.png" style="border-radius: 8px;height: 40px;width: 40px;margin-top: 10px;margin-left: 22px"></image>
									</view>
								</view>
								<view style="display: flex;padding: 4px 10px 8px 10px">
									<view style="width:48%;height:60px;background:rgba(248,248,250,1);border-radius:6px;display: flex" @tap="toNavList('jujiabibei', '居家必备')">
										<view>
											<view style="margin:7px;color: #F15B6C;font-size: 16px;font-weight: bold;">居家必备</view>
											<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">超低价高质量</view>
										</view>
										<image src="/static/img/home/wanggong1.png" style="border-radius: 8px;height: 38px;width: 38px;margin-top: 10px;margin-left: 26px"></image>
									</view>
									<view style="width:48%;height:60px;background:rgba(248,248,250,1);border-radius:6px;margin-left: 16px;display: flex"
									 @tap="toNavList('jinxuannvzhuang', '女装精选')">
										<view>
											<view style="margin:7px;color: #F15B6C;font-size: 16px;font-weight: bold">女装精选</view>
											<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">体验白菜价网购</view>
										</view>
										<image src="/static/img/home/tupian4.png" style="border-radius: 8px;height: 38px;width: 38px;margin-top: 10px;margin-left: 8px"></image>
									</view>
								</view>
								<view style="text-align: center;height: 100px;width:96%;background-image: url(../../static/img/home/go.png);background-repeat: round;margin: 8px"
								 @tap="goPublisherInfo()" v-if="!relation_id&&isEnable!='否'">
									<view style="position: absolute;margin-top: 45px;margin-left: 40px;font-size: 20px;color: white;font-weight: bold">加入会员拿返现哦</view>
									<view style="position: absolute;margin-top: 75px;margin-left: 142px;font-size: 12px;color: white;font-weight: bold">戳我了解会员特权</view>
								</view>
								<view class="home_ant_juhuasuan has-bg-white" v-if="juhuasuanlist.length > 0" style="margin: 8px;border-radius: 10px">
									<view @tap="toNavList('22', '网红抖货')">
										<text style="float: left;margin-top:10px;color: transparent;font-size: 15px;font-weight: bold;background-image: url(../../static/img/home/wanghongdouhuo.png);background-repeat: round;height: 16px">
											网红抖货
										</text>
										<text class="fr-jutext">发现更多</text>
									</view>
									<view class="s-row juhuasuan-list">
										<view class="juhuasuan-list-goods" v-for="(item, index7) in juhuasuanlist" :key="index7" @tap="toGoodsInfos(item)">
											<view class="image" style="margin-bottom: 8px">
												<image :src="item.itempic ? item.itempic + '_310x310.jpg' : 'https://www.firstsite.cn/logo.png'" mode="widthFix"
												 style="height: 91px"></image>
												<view class="name" style="text-align: center;">
													<text class="pinname">券后￥{{ item.itemendprice }}</text>
													<text class="price"></text>
												</view>
											</view>
										</view>
									</view>
								</view>

								<!-- 领券 -->
								<view class="index-coupon has-pd-10" style="background: ghostwhite;padding-top: 2upx;">
									<view class="goods-list" v-if="item.orderList.length > 0">
										<orange-goods-list v-for="(item, index8) in item.orderList" :tkmoney="item.tkmoney" :tkmoneys="item.tkmoneys"
										 :itemid="item.itemid" :isEnable="isEnable" :is-invitation="isInvitation" :logo="item.shoptype === 1? logoMao : logoTaoBao" :itempic="item.itempic + '_310x310.jpg'"
										 :itemtitle="item.itemtitle" :itemprice="'在售价 ¥' + item.itemprice" :itemsale="item.itemsale" :itemendprice="item.itemendprice"
										 :couponmoney="item.couponmoney" :item="item"></orange-goods-list>
									</view>
								</view>
								<!-- 加载更多提示 -->
								<view class="s-col is-col-24">
									<load-more :loadingType="item.loadingType" :contentText="contentText"></load-more>
								</view>

								<!-- 加载更多提示 -->
								<empty v-if="item.orderList.length === 0 && item.loadingType == 0" des="暂无数据"></empty>
						</scroll-view>
					</swiper-item>
					<swiper-item v-else style="background: whitesmoke;">
						<scroll-view @scroll="scroll" v-bind:scroll-top="scrollTop" style="height: 100%;" @scrolltolower="loadMore"
						 scroll-y lower-threshold="200px">
							<!-- #ifdef APP-PLUS --> 
							<view class="index-coupon has-pd-10" style="margin:136px 4px 90px 4px ;background: #FFFFFF">
							<!--#endif-->
							<!-- #ifdef MP --> <!--微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序 -->
							<view class="index-coupon has-pd-10" style="margin:96px 4px 90px 4px ;background: #FFFFFF">	
							<!--#endif-->
							<!-- #ifdef H5 -->
							<view class="index-coupon has-pd-10" style="margin:96px 4px 90px 4px ;background: #FFFFFF">
							<!--#endif-->
								<view class="category" v-if="item.banner.length > 0&&item.orderList.length > 0">
									<view class="list">
										<view class="box" v-for="(item, i) in item.banner" :key="item.son_name" @tap="toCategory(item.son_name)">
											<image :src="item.imgurl"></image>
											<view class="text">{{ item.son_name }}</view>
										</view>
									</view>
								</view>
								<view class="goods-list" v-if="item.orderList.length > 0">
									<orange-goods-card-home v-for="(item, index9) in item.orderList" v-bind:key='item.id' :index="index9 % 2"
									 :logo="item.shoptype === 1? logoMao : logoTaoBao" :isEnable="isEnable" :tkmoney="item.tkmoney" :tkmoneys="item.tkmoneys" :itemid="item.itemid" :itempic="item.itempic ? item.itempic + '_310x310.jpg' : 'https://www.firstsite.cn/logo.png'"
									 :itemtitle="item.itemtitle" :is-invitation="isInvitation" :itemprice="'¥' + item.itemprice" :itemsale="item.itemsale"
									 :itemendprice="'' + item.itemendprice" :couponmoney="item.couponmoney" :item="item"></orange-goods-card-home>
								</view>
							</view>
							<!-- 加载更多提示 -->
							<view class="s-col is-col-24">
								<load-more :loadingType="item.loadingType" :contentText="contentText"></load-more>
							</view>

							<!-- 加载更多提示 -->
							<empty v-if="item.orderList.length === 0 && item.loadingType == 0" des="暂无数据"></empty>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>		
			<!--end支持界面左右滑动-->

			<simpleModal ref="simpleModalTkl" @maskClose="TklmaskCloses">
				<view class="buy-box-title">选择您的身份</view>
				<view class="buy-box-center">
					<view class="code-cent" style="padding: 30px 80px 40px 80px">
						<view style="margin-bottom: 16px" @tap="choseGender(1)">
							<image src="../../static/img/home/boy.png" style="width: 50px;height: 50px"></image>
							<view style="color: #0e80d2">我是帅哥</view>
						</view>
						<view @tap="choseGender(2)">
							<image src="../../static/img/home/girl.png" style="width: 50px;height: 50px"></image>
							<view style="color: pink">我是美女</view>
						</view>
					</view>
				</view>
			</simpleModal>

			<!-- 淘口令分享 -->
			<simpleModal ref="simpleModalTkls" @maskClose="TklmaskClose">
				<view style="width: 600upx;border-radius: 16upx;">
					<view class="buy-box-title" style="font-weight: bold;color: #FF6DB2;">全网超级搜索</view>
					<view class="buy-box-center">
						<view class="code-cent">
							<view>检测到你复制了以下内容是否需要搜索</view>
							<view style="padding: 8px">{{ copyTklStatus }}</view>
						</view>
						<view class="buy-btn-copy" @click="goSearch()">立即搜索</view>
					</view>
				</view>
			</simpleModal>

			<view id="shareit" v-if="show_share" @tap="closeShare">
				<image @click="goHongbao" class="arrow" src="../../static/home.png"></image>
				<view style="border-radius: 100px;color: #FFFFFF;font-size: 18px" @tap="closeShare">X</view>
			</view>

			<!-- 悬浮上拉 -->
			<!-- #ifdef H5 -->
			<view class="scroll_top" @tap="goTop" v-bind:class="[old.scrollTop != 0 ? 'active' : '', '']" style="bottom: 56px;"><text
				 class="iconfont icon-shangla"></text></view>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<view class="scroll_top" @tap="topScrollTap" v-bind:class="[scrollTop != 0 ? 'active' : '', '']" style="bottom: 56px;"><text
				 class="iconfont icon-shangla"></text></view>
			<!-- #endif -->


			<tki-qrcode ref="qrcode" :val="erweima" :size="600" background="#fff" foreground="#000" pdground="#000" :onval="true"
			 :loadMake="true" @result="qrR" :show="false"></tki-qrcode>

		</view>
</template>

<script>
	import simpleModal from '@/components/simple-pro/customModal.vue';
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';

	export default {
		components: {
			simpleModal,
			tkiQrcode
		},
		onPageScroll: function(e) {
			this.scrollTop = e.scrollTop > 200;
		},
		data() {
			return {
				logoMao: '../../static/img/mao.png',
				logoTaoBao: '../../static/img/taobao.png',
				TabCur: 0,
				scrollLeft: 0,
				messageList: [],
				showEmpty: false,
				banner: [{
					id: '1'
				}],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				category: [{
						name: '热门',
						loaded: false,
						positon: 0,
						loadingType: 0, //加载更多 0加载前，1加载中，2没有更多了
						page: 0,
						orderList: [],
						banner: []
					},
					{
						name: '美食',
						loaded: false,
						positon: 11,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '干果',
								imgurl: 'http://img.haodanku.com/31695fbcfec8af7274b493698d5c1f5a-600'
							},
							{
								son_name: '干货',
								imgurl: 'http://img.haodanku.com/40693f1b39155f40843b4023d938a812-600'
							},
							{
								son_name: '速食',
								imgurl: 'http://img.haodanku.com/78ca01c1baddaed135f179cbf495d780-600'
							},
							{
								son_name: '零食',
								imgurl: 'http://img.haodanku.com/3bba49572000849457705fb6e7b25756-600'
							},
							{
								son_name: '饮料',
								imgurl: 'http://img.haodanku.com/e9ced92e2c3c5a9125bde206632923f8-600'
							},
							{
								son_name: '酒水',
								imgurl: 'http://img.haodanku.com/6b2095fa96eb10aef4cc968253a77e62-600'
							},
							{
								son_name: '土鸡蛋',
								imgurl: 'http://img.haodanku.com/011b54caa88d4ebf172312ad228e234c-600'
							},
							{
								son_name: '大米',
								imgurl: 'http://img.haodanku.com/be27573ccf52be1f42238f29167516da-600'
							},
							{
								son_name: '大闸蟹',
								imgurl: 'http://img.haodanku.com/ee9e645ee82d6ef1bad1a9c676122375-600'
							},
							{
								son_name: '新鲜水果',
								imgurl: 'http://img.haodanku.com/2ae6a731a71e6021383e808db628915d-600'
							}
						]
					},
					{
						name: '居家',
						loaded: false,
						positon: 10,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '卫生巾',
								imgurl: 'http://img.haodanku.com/d4ad5258247d5cfcd397fed061c55332-600'
							},
							{
								son_name: '卷纸',
								imgurl: 'http://img.haodanku.com/1fa08dd194ae423de72af366e6fa319c-600'
							},

							{
								son_name: '抽纸',
								imgurl: 'http://img.haodanku.com/8b15fc81e69e7140bfdd6af51890a5f7-600'
							},
							{
								son_name: '洗手液',
								imgurl: 'http://img.haodanku.com/afa011f3b8e0757b5b9d67af74062fe6-600'
							},
							{
								son_name: '洗衣液',
								imgurl: 'http://img.haodanku.com/e068719387ea102d937ec3724598675c-600'
							},

							{
								son_name: '牙膏',
								imgurl: 'http://img.haodanku.com/9d36678d53c9c83a1a6a7cd1e9637b65-600'
							},
							{
								son_name: '沐浴露',
								imgurl: 'http://img.haodanku.com/14bfdb8fc38493aa985d310d390aad19-600'
							},
							{
								son_name: '洗发水',
								imgurl: 'http://img.haodanku.com/162652a65fc931cf7aba34436a5882cd-600'
							},
							{
								son_name: '清洁剂',
								imgurl: 'http://img.haodanku.com/cc34507e016b01cc6005d028b55aa1cc-600'
							},
							{
								son_name: '牙刷',
								imgurl: 'http://img.haodanku.com/529884a59eb3a2ed7cad27cc215f042c-600'
							}
						]
					},
					{
						name: '美妆',
						loaded: false,
						positon: 4,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '卸妆',
								imgurl: 'http://img.haodanku.com/11f4c31e57040ca6578e395764685f9d-600'
							},
							{
								son_name: '唇膏',
								imgurl: 'http://img.haodanku.com/73dce1ba7e1e6c2f087a82e6e2daaf0f-600'
							},
							{
								son_name: '洗面奶',
								imgurl: 'http://img.haodanku.com/0390ae3565930d395244524603d38605-600'
							},
							{
								son_name: '眼线',
								imgurl: 'http://img.haodanku.com/4216c4cdc29f8e9bce9722bf2329f4d4-600'
							},
							{
								son_name: '眼霜',
								imgurl: 'http://img.haodanku.com/9bcc8b7e61d0958a4cf24efa92d8d7d9-600'
							},
							{
								son_name: '睫毛膏',
								imgurl: 'http://img.haodanku.com/917ca505a2916d4308258c1df00aa6bc-600'
							},

							{
								son_name: '纤体',
								imgurl: 'http://img.haodanku.com/900cbfe080fcea90a276c9b0367252ef-600'
							},

							{
								son_name: '腮红',
								imgurl: 'http://img.haodanku.com/1305d219f6095577b2d4930531a1b3ee-600'
							},

							{
								son_name: '面膜',
								imgurl: 'http://img.haodanku.com/f9ddb9d89e9bfd8312056b02c4081bcd-600'
							},
							{
								son_name: '面霜',
								imgurl: 'http://img.haodanku.com/e57cb97f45eacb673b10d4179ce54079-600'
							}
						]
					},
					{
						name: '女装',
						loaded: false,
						positon: 1,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '妈妈装',
								imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
							},

							{
								son_name: 'T恤',
								imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
							},
							{
								son_name: '一字肩',
								imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
							},
							{
								son_name: '卫衣',
								imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
							},
							{
								son_name: '夹克',
								imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
							},
							{
								son_name: '棉服',
								imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
							},
							{
								son_name: '毛呢',
								imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
							},
							{
								son_name: '牛仔',
								imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
							},
							{
								son_name: '皮衣',
								imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
							},
							{
								son_name: '短外套',
								imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
							}
						]
					},

					{
						name: '母婴',
						loaded: false,
						positon: 9,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '奶嘴',
								imgurl: 'http://img.haodanku.com/dc498440b8169d4f411a2d303ce85c7d-600'
							},
							{
								son_name: '奶瓶',
								imgurl: 'http://img.haodanku.com/b9d99fb2308fec3063560d1a442c51e6-600'
							},
							{
								son_name: '婴儿床',
								imgurl: 'http://img.haodanku.com/8d25d45a30d633f31af4e6f8ec9e3eb7-600'
							},
							{
								son_name: '婴儿抱被',
								imgurl: 'http://img.haodanku.com/e87f2636c6c571487bfe3e1b87c19f24-600'
							},
							{
								son_name: '学步车',
								imgurl: 'http://img.haodanku.com/4bc090e096ed0d3fc550d373b257ce83-600'
							},
							{
								son_name: '推车',
								imgurl: 'http://img.haodanku.com/192ba1c1901d19388a80ed93fe0dd532-600'
							},
							{
								son_name: '新生儿',
								imgurl: 'http://img.haodanku.com/8eb521c44d4cc5c2c606101321f6878f-600'
							},
							{
								son_name: '睡袋',
								imgurl: 'http://img.haodanku.com/2afc4fdac09e372274248fc6f421b8ef-600'
							},
							{
								son_name: '纸尿布',
								imgurl: 'http://img.haodanku.com/0d2df54a221fca7d23c888464edf17e3-600'
							},
							{
								son_name: '连体睡衣',
								imgurl: 'http://img.haodanku.com/e1fd4104171d365a3e76ada535e55c0b-600'
							}
						]
					},

					{
						name: '男装',
						loaded: false,
						positon: 2,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '马甲',
								imgurl: 'http://img.haodanku.com/325254ca7f6e1f03c438d818cb4c67cb-600'
							},
							{
								son_name: '呢大衣',
								imgurl: 'http://img.haodanku.com/f3c0fd52abf5945b5d253a64f8fce62d-600'
							},
							{
								son_name: '夹克',
								imgurl: 'http://img.haodanku.com/250eefdd7acef0934e9f0fafffa75c88-600'
							},
							{
								son_name: '棉衣',
								imgurl: 'http://img.haodanku.com/6b5cd4e0f1c6f346b552651209cf78a3-600'
							},
							{
								son_name: '棒球服',
								imgurl: 'http://img.haodanku.com/2c296a0d7e6600da4b5f572c1c1878e4-600'
							},
							{
								son_name: '牛仔外套',
								imgurl: 'http://img.haodanku.com/d55f8511d3916346c8a808dbe5b0868a-600'
							},
							{
								son_name: '皮衣',
								imgurl: 'http://img.haodanku.com/14f79fee301aa6bb5a69318d9d95a2ef-600'
							},
							{
								son_name: '羽绒服',
								imgurl: 'http://img.haodanku.com/51ee457f0c7b8c2ddb6f4e5e9dd9818e-600'
							},
							{
								son_name: '西装',
								imgurl: 'http://img.haodanku.com/09290b9079002c5d957b245bf8d5dc22-600'
							},
							{
								son_name: '风衣',
								imgurl: 'http://img.haodanku.com/16a6f06b799c96f30289e124ee084f9a-600'
							}
						]
					},

					{
						name: '鞋包配饰',
						loaded: false,
						positon: 6,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '帆布鞋',
								imgurl: 'http://img.haodanku.com/b1ec5218812aac9249071123cc9ff37d-600'
							},
							{
								son_name: '板鞋',
								imgurl: 'http://img.haodanku.com/c0ea8e1a9a0e9c486c2f3b571b495395-600'
							},
							{
								son_name: '网布鞋',
								imgurl: 'http://img.haodanku.com/acaf3517b2b374e568e512ea2c1c0334-600'
							},
							{
								son_name: '豆豆鞋',
								imgurl: 'http://img.haodanku.com/6f74d2cd0dc9de9ea1b746ab78ba6b66-600'
							},
							{
								son_name: '男运动鞋',
								imgurl: 'http://img.haodanku.com/7b3bc2187dfeaf64dbb61ad6d3eb358f-600'
							},
							{
								son_name: '女运动鞋',
								imgurl: 'http://img.haodanku.com/9449c2e63a06f058a48f788c82591d00-600'
							},
							{
								son_name: '高跟鞋',
								imgurl: 'http://img.haodanku.com/0ee8f1f3483c3faa69f5ef1f129cfac5-600'
							},
							{
								son_name: '中跟鞋',
								imgurl: 'http://img.haodanku.com/5a52d7f0375aadd03558aab5a2489a81-600'
							},
							{
								son_name: '乐福鞋',
								imgurl: 'http://img.haodanku.com/8ebb992fc125df908039e1468b634c1f-600'
							},
							{
								son_name: '低跟鞋',
								imgurl: 'http://img.haodanku.com/19c7f3e00da194115690d71b5b0f6691-600'
							},
							{
								son_name: '单肩包',
								imgurl: 'http://img.haodanku.com/4acda5f2e1ba8067820eb6a0b1517a48-600'
							},
						
							{
								son_name: '小方包',
								imgurl: 'http://img.haodanku.com/d1f9ffe6b63d0100c573312981c293e9-600'
							},
							{
								son_name: '斜挎包',
								imgurl: 'http://img.haodanku.com/197be2a76a74db7a9d3fee2e513b1cf0-600'
							},
							{
								son_name: '水桶包',
								imgurl: 'http://img.haodanku.com/02f6b9bcb87488b3b2f538ed3bd901d9-600'
							},
							{
								son_name: '手提包',
								imgurl: 'http://img.haodanku.com/5e2d18ca3f9f2863b7e02f88e1cd5895-600'
							},
							{
								son_name: '旅行箱',
								imgurl: 'http://img.haodanku.com/7e4ae55cefff14d819c8619566b85700-600'
							},
							{
								son_name: '钱包',
								imgurl: 'http://img.haodanku.com/fa179896a4e7ba6864c3a2b5c208c647-600'
							},
							{
								son_name: '双肩包',
								imgurl: 'http://img.haodanku.com/a410a8f08c112bb99e3f61ba46ee0b7a-600'
							},
							{
								son_name: '波士顿包',
								imgurl: 'http://img.haodanku.com/2db6a9dfe0323ab1aba9eb4d0c92b9f6-600'
							},
							{
								son_name: '贝壳包',
								imgurl: 'http://img.haodanku.com/d5c5a8c3afa64c58527a68cbd46c2234-600'
							},
							{
								son_name: '贝雷帽',
								imgurl: 'http://img.haodanku.com/6d5eebc640a964a4b55fb03046a2f8fb-600'
							},
							{
								son_name: '针织帽',
								imgurl: 'http://img.haodanku.com/0b376d73ab661bbab0c83d8aefc50aca-600'
							},
							{
								son_name: '鸭舌帽',
								imgurl: 'http://img.haodanku.com/1de98e064ef1e8dd92d4e95eda311105-600'
							},
							{
								son_name: '真皮腰带',
								imgurl: 'http://img.haodanku.com/cd8ad3794ee3fbb1a8c8bce8f88f7ef1-600'
							},
							{
								son_name: '腰带',
								imgurl: 'http://img.haodanku.com/7586c7f14be6334d52ea6f862048ce3a-600'
							},
							{
								son_name: '触屏手套',
								imgurl: 'http://img.haodanku.com/a69d879b523d78d0203fe4879109486f-600'
							},
							{
								son_name: '雨伞',
								imgurl: 'http://img.haodanku.com/eb9cb749ec8237a84227614d356bfd0f-600'
							},
							{
								son_name: '真丝围巾',
								imgurl: 'http://img.haodanku.com/c371383e6e2f9b234f30d32c0a1295ef-600'
							},
							{
								son_name: '羊毛围巾',
								imgurl: 'http://img.haodanku.com/2959aea355069c58f07a5bd4312c0750-600'
							},
							{
								son_name: '羊绒围巾',
								imgurl: 'http://img.haodanku.com/9870a6e83a4e97ce9f8b8d2bf2fe057e-600'
							}
						]
					},
					{
						name: '儿童',
						loaded: false,
						positon: 8,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '描红本',
								imgurl: 'http://img.haodanku.com/89a1df77f661111da350ffb31b965683-600'
							},
							{
								son_name: '早教机',
								imgurl: 'http://img.haodanku.com/2ac050e8b1a787b9a1296a51edfa182a-600'
							},
							{
								son_name: '自行车',
								imgurl: 'http://img.haodanku.com/54baf388a5aacb482bffba872a8393e0-600'
							},
							{
								son_name: '学习用品',
								imgurl: 'http://img.haodanku.com/e1cdde128eaff4b464b02a6280128ab9-600'
							},
							{
								son_name: '户外玩具',
								imgurl: 'http://img.haodanku.com/4b7d8b14035d7c42417d36037827df23-600'
							},
							{
								son_name: '积木',
								imgurl: 'http://img.haodanku.com/dfb898577d5b402ee78efdf77fc753b9-600'
							},
							{
								son_name: '亲子玩具',
								imgurl: 'http://img.haodanku.com/5a1f75dd01301762813b4c946f72c0bb-600'
							},
							{
								son_name: '玩具',
								imgurl: 'http://img.haodanku.com/89ac36736a405eac40bd34efc223edba-600'
							},
							{
								son_name: '亲子装',
								imgurl: 'http://img.haodanku.com/e892274edc543dbd443f1e1ca011e8a0-600'
							},
							{
								son_name: '女童外套',
								imgurl: 'http://img.haodanku.com/3c4dbd196a8c86fd7aa7c0db67398427-600'
							}
						]
					},
					{
						name: '数码家电',
						loaded: false,
						positon: 12,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: [{
								son_name: '保护壳',
								imgurl: 'http://img.haodanku.com/778ee5974fe396bc6fb46241462aebd1-600'
							},
							{
								son_name: '耳机',
								imgurl: 'http://img.haodanku.com/f34fd15e7a7775051a2c0f613eaa14f1-600'
							},
							{
								son_name: '苹果配件',
								imgurl: 'http://img.haodanku.com/c5f7f3b8324bbc7c9394bdd2af6e7651-600'
							},
							{
								son_name: '鼠标键盘',
								imgurl: 'http://img.haodanku.com/71e1a923a83a1a6ca44695c71b46bf7c-600'
							},
							{
								son_name: '无人机',
								imgurl: 'http://img.haodanku.com/c372feef0f96f90efe5d1c55cacf79c3-600'
							},
							{
								son_name: '电脑主机',
								imgurl: 'http://img.haodanku.com/d596eac2d096816c10881b97fbac02a9-600'
							},
							{
								son_name: '音响',
								imgurl: 'http://img.haodanku.com/81f08ba219e31194566d65363173fdcf-600'
							},
							{
								son_name: '加湿器',
								imgurl: 'http://img.haodanku.com/086080993e964a15594f81c94d509eb8-600'
							},
							{
								son_name: '取暖器',
								imgurl: 'http://img.haodanku.com/f5662ec4c72c3c7f81f8837f51255e4b-600'
							},
							{
								son_name: '吸尘器',
								imgurl: 'http://img.haodanku.com/ec822582bdb343a4fcf4aa7241e76f21-600'
							},
							{
								son_name: '扫地机器人',
								imgurl: 'http://img.haodanku.com/951a3f7ccf7390bbb332c697415bec48-600'
							},
							{
								son_name: '榨汁机',
								imgurl: 'http://img.haodanku.com/7878d1994d35916456406cff96bd333d-600'
							},
							{
								son_name: '烤箱',
								imgurl: 'http://img.haodanku.com/b1ee29313a733d944f80453a2cefa832-600'
							},
							{
								son_name: '电热毯',
								imgurl: 'http://img.haodanku.com/afa97d55c0121f8bcee9dc15bf99dd72-600'
							},
							{
								son_name: '电饭锅',
								imgurl: 'http://img.haodanku.com/529b946479dd79d3f86dd5d161095fad-600'
							},
							{
								son_name: '空气净化器',
								imgurl: 'http://img.haodanku.com/24fc6a453206afb6a7c26d52dc64a50c-600'
							},
							{
								son_name: '豆浆机',
								imgurl: 'http://img.haodanku.com/88e089532fc4b4c184ca1d596d0e3ab4-600'
							}
						]
					},
					{
						name: '内衣',
						loaded: false,
						positon: 3,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: []
					},
					{
						name: '运动户外',
						loaded: false,
						positon: 17,
						loadingType: 0,
						page: 0,
						orderList: [],
						banner: []
					}
				],
				banners: [{
					DocumentPictureUrl: 'http://shegnqx.oss-cn-beijing.aliyuncs.com/1577946584839.jpg',
					PageUrl: '/pages/member/news'
				}, {
					DocumentPictureUrl: 'http://shegnqx.oss-cn-beijing.aliyuncs.com/1577946584839.jpg',
					PageUrl: '/pages/member/news'
				}, {
					DocumentPictureUrl: 'http://shegnqx.oss-cn-beijing.aliyuncs.com/1577946584839.jpg',
					PageUrl: '/pages/member/news'
				}, {
					DocumentPictureUrl: 'http://shegnqx.oss-cn-beijing.aliyuncs.com/1577946584839.jpg',
					PageUrl: '/pages/member/news'
				}],
				navlist: [
					{ title: '天猫优选', image: '../../static/img/home/tianmaojingxuan.png', url: '9' },
					{ title: '拼多多', image: '../../static/img/home/pinduoduo.png', url: 'pinduoduo' },
					{ title: '京东', image: '../../static/img/home/jingdong.png', url: 'jingdong' },
					{ title: '热销榜', image: '../../static/img/home/daequan.png', url: 'remeng' },
					{ title: '聚划算', image: '../../static/img/home/juhuasuan.png', url: 'juhuasuan' }
				],
				navlist1: [
					{ title: '30元精选', image: '../../static/img/home/tianmaochaoshi.png', url: '3' }, 
					{ title: '母婴精选', image: '../../static/img/home/gaoyongjingxuan.png', url: 'gaoyongjingxuan' },
					{ title: '9.9包邮', image: '../../static/img/home/baoyou.png', url: '2' },
					{ title: '超值大牌', image: '../../static/img/home/chaozhidapai.png', url: '8' },
					{ title: '免单中心', image: '../../static/img/home/free-order.gif', url: 'daequan' },
				],
				juhuasuanlist: [],
				page: 1,
				min_id: 1,
				min_ids: 1,
				min_ida: 1,
				erweima: '',
				cat_id: 0,
				gender: 0,
				loadingType: 0,
				index: 0,
				deviceValue:'',
				show_share: false,
				genderKey: 'gender',
				copyTklStatus: '',
				isInvitation: 0,
				isEnable: "否",
				relation_id: '',
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
			};
		},
		onLoad() {
			let isEnable = this.$queue.getData("isEnable")
			if (isEnable) {
				this.isEnable = isEnable;
			}
			let gender = this.$queue.getData(this.genderKey);
			if (gender) {
				if (gender === 1) {
					this.gender = gender;
				}
				if (gender === 2) {
					this.gender = gender;
				}
			}
			let deviceValue = this.$queue.getData("DeviceNo");
			if(deviceValue){
				this.deviceValue = deviceValue;
			}
			let relation_id = this.$queue.getData("relation_id");
			if(relation_id){
				this.relation_id = relation_id;
			}
			let isInvitation = this.$queue.getData("isInvitation");
			if(isInvitation){
				this.isInvitation = isInvitation;
			}
			this.loadBanner("refresh");
			this.loadJuhuasuanlist();
			this.loadCouponList();
			this.loadInfos();
			this.loadMessage();
		},
		onReachBottom() {
			this.loadCouponList();
		},
		onPullDownRefresh() {
			this.page = 1;
			this.loadCouponList("Refresh");
		},
		onShow() {
			// #ifdef APP-PLUS
			this.getClipboardData();
			// #endif
		},
		methods: {
			/**
			 * 加载首页新闻
			 */
			loadBanner: function(Refresh) {
				var indexBanner = this.$SysCache.get("app_index_banner");
				if (indexBanner && Refresh == undefined) {
					this.banners = indexBanner;
				} else {
					this.$Request.post(this.$Api.home.banners).then(res => {
						if (res.Code === 1) {
							let bannerList = res.Message;
							bannerList.forEach(item => {
								item.DocumentPictureUrl = this.$Url + item.DocumentPictureUrl;
							});
							this.banners = bannerList;
							this.$SysCache.put("app_index_banner", res.Message, 43200);
						}
					})
				}
			},
			loadJuhuasuanlist: function() {
				let materialId = "3756";
				let apiUrl = this.$Api.common.couponbestlist;
				this.$Request.get(apiUrl, {
					MaterialId: materialId,
					HasCoupon:true,
					PageNo: this.page,
					PageSize:4,
					DeviceValue: this.deviceValue
				}).then(res => {
						if (res.Code === 1) {
							this.juhuasuanlist = [];
							res.Message.forEach(d => {
								this.juhuasuanlist.push(d);
							});
						}
						uni.stopPullDownRefresh(); // 停止刷新
					});
			},
			/**
			 * @param {Object} type加载
			 */
			loadCouponList: function(type) {
				let materialId;
				let cid = this.category[this.TabCur].positon;
				let apiUrl = this.$Api.common.couponlist;
				if(cid === 0){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "27446"; 
				}
				else if(cid === 11){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "27451";
				}
				else if(cid === 10){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "27798";
				}
				else if(cid === 4){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "27453";
				}
				else if(cid === 1){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "27448";
				}
				else if(cid === 9){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "27454";
				}
				else if(cid === 2){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "13372";
				}
				else if(cid === 6){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "13370";
				}
				else if(cid === 3){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "13373";
				}
				else if(cid === 17){
					apiUrl = this.$Api.common.couponbestlist;
					materialId = "13376";
				}
				console.log("----DENG-Begin---");
				console.log("----apiUrl----" + apiUrl);
				console.log("----cid----" + cid);
				console.log("----materialId----" + materialId);
				console.log("----this.page----" + this.page);
				console.log("----this.deviceValue----" + this.deviceValue);
				console.log("----DENG-End---");
				
				this.category[this.TabCur].loadingType = 1;
				this.$Request.get(apiUrl, {
					ColumnId: cid,
					MaterialId: materialId,
					HasCoupon:true,
					PageNo: this.page,
					DeviceValue: this.deviceValue
				}).then(res => {
					this.category[this.TabCur].loadingType = 0;
					if (res.Code === 1) {
						if (this.page === 1) {
							this.category[this.TabCur].orderList = [];
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
							this.category[this.TabCur].orderList.push(d);

						});
					} else {
						this.category[this.TabCur].loadingType = 2;
					}
					if (type === 'Refresh') {
						uni.stopPullDownRefresh(); // 停止刷新
					}
					uni.hideLoading();
				});
			},
			/**
			 * 加载公告
			 */
			loadMessage() {
				this.$Request.getT(this.$Api.home.messagelist).then(res => {
					if (res.Code === 1) {
						this.messageList = res.Message;
					}
				});
			},
			loadInfos() {
				let relationId = this.$queue.getData('relation_id');
				if (!relationId) {
					relationId = this.$queue.getInvitation();
				}
			},
			/**
			 * @param {Object} e tab切换
			 */
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				// this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				// #ifndef H5
				this.page = 1;
				// #endif
			},
			//swiper 切换
			changeTab(e) {
				this.TabCur = e.target.current;
				this.scrollLeft = (e.target.current - 1) * 50;
				let list = this.category[e.target.current].orderList;
				if (list.length == 0) {
					uni.showLoading({
						title: '加载中...'
					});
					//第一次切换tab，动画结束后需要加载数据
					if (list.loaded !== true) {
						this.loadCouponList('Refresh');
						list.loaded = true;
					}
				}
			},
			qrR(path) {
				this.$queue.setData('erweimas', path);
			},
			toCategory(son_name) {
				uni.navigateTo({
					url: '/pages/categray/search?cid=' + this.category[this.TabCur].positon + '&name=' + son_name
				});
			},
			scroll: function(e) {
				this.old.scrollTop = parseInt(e.detail.scrollTop);
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop;
				this.$nextTick(function() {
					this.scrollTop = 0;
				});
			},
			//app查询
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search?keywords=' + this.copyTklStatus
				});
				this.$refs.simpleModalTkls.hide();
				this.copyTklStatus = '';
				uni.setClipboardData({
					data: '',
					success: r => {
						uni.showToast({
							icon: 'none',
							title: '搜索中',
							duration: 1500
						});
					}
				});
			},
			//app查询弹框
			TklmaskClose: function(e) {
				this.$refs.simpleModalTkls.hide();
				this.copyTklStatus = '';
				uni.setClipboardData({
					data: '',
					success: r => {
						uni.showToast({
							icon: 'none',
							title: '已取消搜索',
							duration: 1500
						});
					}
				});
			},
			TklmaskCloses: function(e) {
				this.$refs.simpleModalTkls.hide();
			},
			//获取剪切板
			async getClipboardData() {
				let that = this;
				uni.getClipboardData({
					success: function(res) {
						that.copyTklStatus = res.data;
						if (res.data) {
							if (res.data.indexOf('http') == -1 && res.data.indexOf('&') == -1 && res.data.indexOf('￥') == -1) {
								that.$refs.simpleModalTkls.show({
									showConfirmButton: false
								});
							} else {
								that.$refs.simpleModalTkls.hide();
							}
						} else {
							that.$refs.simpleModalTkls.hide();
						}
					},
					fail: function(res) {}
				});
			},
			/**
			 * 会员授权界面
			 */
			goPublisherInfo() {
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
			 * 登录检测
			 */
			loginS() {
				//#ifdef H5
				uni.showModal({
					title: '登录提醒',
					showCancel: false,
					content: '当前账号未登录\n请登录后申请',
					success: confirmRes => {
						if (confirmRes.confirm) {
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
					content: '当前账号未登录\n请登录后申请',
					success: confirmRes => {
						if (confirmRes.confirm) {
							uni.navigateTo({
								url: '/pages/public/login'
							});
						}
					}
				});
				//#endif
			},
			goWebView(item) {
				if (item.PageUrl !== '') {
					//#ifndef H5
					uni.navigateTo({
						url: '/pages/member/ping?url=' + item.PageUrl
					});
					//#endif
					//#ifdef H5
					window.location.href = item.PageUrl;
					//#endif
				}
			},
			/**
			 * @param {Object} type 身份选择
			 */
			choseGender(type) {
				this.$queue.setData(this.genderKey, type);
				this.gender = type;
				this.page = 1;
				this.min_id = 1;
				if (type === 1) {
					this.TabCur = 6;
					this.cat_id = 2;
				}
				if (type === 2) {
					this.TabCur = 4;
					this.cat_id = 1;
				}
				this.loadCouponList('Refresh');
				this.$refs.simpleModalTkl.hide();
			},
			showGender() {
				this.$refs.simpleModalTkl.show({
					showConfirmButton: false
				});
			},
			/**
			 * 快速置顶
			 */
			topScrollTap: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			/**
			 * @param {Object} url
			 * @param {Object} titles 首页item跳转
			 */
			toNavList: function(url, title) {
				if (url === "remeng") {
					uni.navigateTo({
						url: '/pages/hot/index'
					});
				} 
				else if (url === "pinduoduo") {
					uni.navigateTo({
						url: '/pages/pdd/index'
					});
				} 
				else if (url === "shoucang") {
					uni.navigateTo({
						url: '/pages/footer/like'
					});
				} 
				else if (url === "jingdong") {
					uni.navigateTo({
						url: '/pages/jd/jds'
					});
				} 
				else if (url === "rexiao") {
					uni.switchTab({
						url: '/pages/hot/index'
					});
				} 
				else if (url === "daequan") {
					uni.navigateTo({
						url: '/pages/index/mian'
					});
				} 
				else if (url === "meishi") {
					uni.navigateTo({
						url: '/pages/index/tuiguang?cid=8'
					});
				} 
				else if (url === "meirishangxin") {
					uni.navigateTo({
						url: '/pages/index/tuiguang?cid=0'
					});
				} 
				else if (url === "jinxuanmeizhuan") {
					uni.navigateTo({
						url: '/pages/index/tuiguang?cid=4'
					});
				} 
				else if (url === "jujiabibei") {
					uni.navigateTo({
						url: '/pages/index/tuiguang?cid=7'
					});
				} 
				else if (url === "jinxuannvzhuang") {
					uni.navigateTo({
						url: '/pages/index/tuiguang?cid=1'//女装精选
					});
				} 
				else if (url === "gengduofenlie") {
					// #ifdef H5
					window.location.href = 'https://www.firstsite.cn/help/news.html';
					// #endif
					// #ifndef H5
					uni.navigateTo({
						url: '/pages/member/webview?url=https://www.firstsite.cn/help/news.html'
					});
					// #endif
				} 
				else if (url === "gaoyongjingxuan") {
					uni.navigateTo({
						url: '/pages/index/tuiguang?cid=6'//箱包配饰
					});
				} 
				else if (url === "juhuasuan") {
					uni.navigateTo({
						url: '/pages/index/tuiguang?cid=11'//聚划算
					});
				} 
				else if (url == "22") {//网红
					uni.navigateTo({
						url: '/pages/cate/index'
					});
				} 
				else {
					console.log("url-" + url + "title-" + title);
					uni.navigateTo({
						url: '/pages/index/list?title=' + title + '&type=' + url
					});
				}
			},
			/**
			 * 上拉加载
			 */
			loadMore() {
				this.page = this.page + 1;
				this.loadCouponList();
			},
			toGoodsInfo: function(url) {
				if (url.indexOf('/pages/') !== -1) {
					uni.navigateTo({
						url
					});
				} else {
					//#ifndef H5
					uni.navigateTo({
						url: '/pages/member/webview?url=' + url
					});
					//#endif
					//#ifdef H5
					window.location.href = url;
					//#endif
				}
			},
			toGoodsInfos: function(e) {
				let relation_id = this.$queue.getData('relation_id');
				console.log(relation_id);
				if (relation_id) {
					uni.navigateTo({
						url: '/pages/detail/goodsinfo?data=' + encodeURIComponent(JSON.stringify(e)) + '&relation_id=' + relation_id
					});
				} else {
					uni.navigateTo({
						url: '/pages/detail/goodsinfo?data=' + encodeURIComponent(JSON.stringify(e))
					});
				}
			},
			toSearchIndex: function() {
				uni.switchTab({
					url: '/pages/homeSearch/index'
				});
			},
			toZujiIndex: function() {
				uni.navigateTo({
					url: '/pages/footer/index'
				});
			}
		},
	};
</script>

<style lang="scss">
	@import '../../static/css/index.css';

	.img-gender {
		/* #ifndef H5 */
		width: 60upx;
		height: 60upx;
		margin-top: 60upx
			/* #endif */
			/* #ifdef H5 */
			width: 60upx;
		height: 60upx;
		margin-top: 20upx
			/* #endif */

	}

	.top-background {
		background: -webkit-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -o-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -ms-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -webkit-gradient(linear, right top, left top, color-stop(0, #f15b6c), to(#ff6db2));
		background: -o-linear-gradient(right, #f15b6c 0, #ff6db2 100%);
		background: linear-gradient(to left, #f15b6c 0, #ff6db2 100%);
	}

	.swiper-item img {
		display: block;
	}

	.title .fr {
		float: right;
		line-height: 50px;
		margin-right: 16px;
		font-size: 10px;
		color: #ccc;
	}

	/*#ifndef APP-PLUS*/
	.scroll_top_act {
		background: white;
		top: 45px;
		position: fixed;
	}

	/*#endif*/
	/*#ifdef APP-PLUS*/
	.scroll_top_act {
		background: white;
		top: 65px;
		position: fixed;
	}

	/*#endif*/

	.banner {
		border-radius: 10px;
		margin: 8px 8px 0 8px;
		overflow: hidden;
		display: flex;
	}

	.banner img {
		width: 100%;
	}

	.banner>.left {
		flex: 4;
		/* margin-right: 10upx; */
		border-right: 2px solid #f2f2f2;
		overflow: hidden;
	}

	.banner>.right {
		flex: 7;
	}

	.right .top {
		width: 100%;
		/* margin-bottom: 7upx; */
		/*border-bottom: 2px solid #f2f2f2;*/
		overflow: hidden;
	}

	.right .bottom {
		display: flex;
		width: 100%;
	}

	.right .bottom .bottom-left {
		flex: 6;
		/* margin-right: 5upx; */
		overflow: hidden;
		border-right: 1px solid #f2f2f2;
	}

	.right .bottom .bottom-right {
		flex: 6;
		/* margin-left: 5upx; */
		/* border-left: 1px solid #f2f2f2; */
		overflow: hidden;
	}

	.marquee-box {
		border-radius: 5px;
		overflow: hidden;
		position: relative;
		background: #fff;
		height: 26px;
		line-height: 26px;
	}

	.marquee-title {
		padding-left: 8px;
		padding-right: 8px;
		position: absolute;
		color: #ff5100;
		top: 0;
		left: 0;
		z-index: 3;
		background: #fff;
		font-size: 14px;
	}

	.marquee {
		padding: 6px 10px;
		color: #000;
		display: inline-block;
		white-space: nowrap;
		animation: 35s wordsLoop linear infinite normal;
		font-size: 14px;
	}

	@keyframes wordsLoop {
		0% {
			transform: translateX(350px);
			-webkit-transform: translateX(350px);
		}

		100% {
			transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
		}
	}

	.selectTop {
		z-index: 100;
		padding-left: 16upx;
		padding-right: 16upx;
		position: fixed;
		top: 90upx;
		background: -webkit-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -o-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -ms-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -webkit-gradient(linear, right top, left top, color-stop(0, #f15b6c), to(#ff6db2));
		background: -o-linear-gradient(right, #f15b6c 0, #ff6db2 100%);
		background: linear-gradient(to left, #f15b6c 0, #ff6db2 100%);
	}

	.selectTop1 {
		z-index: 999;
		padding-left: 16upx;
		padding-right: 16upx;
		position: fixed;
		top: 130upx;
		background: -webkit-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -o-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -ms-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
		background: -webkit-gradient(linear, right top, left top, color-stop(0, #f15b6c), to(#ff6db2));
		background: -o-linear-gradient(right, #f15b6c 0, #ff6db2 100%);
		background: linear-gradient(to left, #f15b6c 0, #ff6db2 100%);
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
		width: 80%;
		height: 420px;
		margin-top: 100px;
	}

	.share_close {
		position: absolute;
		bottom: -0.5rem;
		left: 50%;
		margin-left: -0.3rem;
		width: 0.6rem;
		height: 0.6rem;
		background: url(http://img.haodanku.com/Fo2-nJ_43fsFStbAfqMUEcCFJnJ6);
		background-size: 100% 100%;
		cursor: pointer;
	}

	#follow {
		margin-right: 60px;
		margin-left: 30px;
		width: 90%;
		height: 50px;
		line-height: 50px;
		text-align: left;
		text-decoration: none;
		font-size: 18px;
		color: white;
		float: left;
		margin-top: 160px;
	}

	.category {
		padding: 4upx;

		.list {
			margin-top: 20upx;
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.box {
				width: 20%;
				margin-bottom: 20upx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;

				image {
					width: 60%;
					height: calc(71.44vw / 3 * 0.6);
				}

				.text {
					margin-top: 5upx;
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
				}
			}
		}
	}

	.swiper-box {
		height: calc(100% - 40px);
	}
</style>
