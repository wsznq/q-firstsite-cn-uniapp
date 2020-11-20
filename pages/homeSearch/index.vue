<template>
	<view class="s-page-wrapper">
		<view class="search-pop">
			<view class="main-title">
				<view class="search-tab">
					<view
						class="my-sub-src"
						@tap="switchTab(0)"
						v-bind:class="[current == 0 ? 'cur' : '', '']"
					>
						搜券
					</view>
					<view
						class="my-sub-src"
						@tap="switchTab(1)"
						v-bind:class="[current == 1 ? 'cur' : '', '']"
					>
						搜全网
					</view>
					<view class="search">
						<input type="text" :value="keywords" @confirm="submitSearch" :placeholder="placeholder" class="search_area" @input="searchInput" />
						<text v-if="keywords !== ''" class="cuIcon-close clear" @tap="clearInput"></text>
						<view class="search_submit" @tap="submitSearch">搜 索</view>
					</view>
				</view>
			</view>
		</view>
		<view class="search-cat">
			<swiper class="swiper" @change="swiperChange" :current="current">
				<swiper-item>
					<view class="search-keyword" @touchstart="blur">
						<scroll-view class="keyword-list-box" v-show="isShowKeywordList" scroll-y>
							<view class="keyword-entry" hover-class="keyword-entry-tap" v-for="(key, index) in keywordList">
								<view class="keyword-text" @tap="addKeyword(key.keyword)">
									<rich-text :nodes="key.htmlStr"></rich-text>
								</view>
								<view class="keyword-img" @tap="setkeyword(key)">
									<image src="/static/img/search/back.png"></image>
								</view>
							</view>
						</scroll-view>
						<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
							<view class="keyword-box" v-if="oldKeywordList.length > 0">
								<view class="search-cat-tit" @tap="deleteKeyword">
									<text class="up-menu" style="font-size: 16px" @tap="deleteKeyword">
										搜索历史
										<text style="font-size: 14px;margin-left: 70%" @tap="deleteKeyword">清空</text>
									</text>
								</view>
								<view class="src-content">
									<view class="main-src">
										<block v-for="(key, index) in oldKeywordList">
											<view
												v-if="key.keyword.length > 15"
												class="src-item "
												style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width: 100%"
												@click="addKeyword(key.keyword)"
											>
												{{ key.keyword }}
											</view>
											<view v-else class="src-item " style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden" @click="addKeyword(key.keyword)">
												{{ key.keyword }}
											</view>
										</block>
									</view>
								</view>
							</view>
							<view class="keyword-block" v-if="hotKeywordList.length > 0">
								<view class="search-cat-tit">
									<text class="up-menu" style="font-size: 16px">
										热门搜索
									</text>
								</view>
								<view class="src-content">
									<view class="main-src">
										<block v-for="(key, index) in hotKeywordList">
											<view
												v-if="key.length > 15"
												class="src-item "
												style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width: 100%"
												@click="addKeyword(key)"
											>
												{{ key }}
											</view>
											<view v-else class="src-item " style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden" @click="addKeyword(key)">
												{{ key }}
											</view>
										</block>
									</view>
								</view>
							</view>
					  </scroll-view>		
					</view>
				</swiper-item>
				<swiper-item>
					<view class="search-default">
						<view class="help-tips has-mgtb-10 is-size-18">搜索方法：</view>
						<view class="help-tips color999">1、打开手机淘宝/天猫，长按拷贝商品标题</view>
						<view class="help-tips color999">2、将商品标题粘贴到搜索框中进行搜索</view>
						<view class="help-tips color999 has-mgt-10">"搜全网"功能中的商品信息均来自于互联网</view>
						<view class="help-tips color999">商品准确信息请与商品所属店铺经营者沟通确认</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import simpleModal from '@/components/simple-pro/customModal.vue';

export default {
	components: {
		simpleModal
	},
	onShareAppMessage(res) {
		return {
			title: '购物先领券，一年省一半',
			path: '/pages/index/index'
		};
	},
	data() {
		return {
			placeholder: '输入关键字或粘贴宝贝标题',
			keywords: '',
			copyTklStatus: '',
			localKeyword: 'orange-tyh-keyword',
			current: 0,
			oldKeywordList: [],
			hotKeywordList: [],
			keywordList: [],
			isShowKeywordList: false
		};
	},
	onShow() {
		this.oldKeywordList = this.$queue.get(this.localKeyword);
	},
	onLoad() {
		//#ifdef H5
		if (window.location.href.indexOf('?invitation=') !== -1 || window.location.href.indexOf('&invitation=') !== -1) {
			if (window.location.href.indexOf('?invitation=') !== -1) {
				this.$queue.setData('relation', window.location.href.split('?invitation=')[1].split('&')[0]);
			} else {
				this.invitation = window.location.href.split('&invitation=')[1].split('&')[0];
				this.$queue.setData('relation', window.location.href.split('&invitation=')[1].split('&')[0]);
			}
		}
		//#endif
		//加载热门搜索
		this.$Request.get('/api/hot_key/apikey/maxd').then(res => {
			if (res.code === 1) {
				this.hotKeywordList = [];
				for (let i = 0; i < res.data.length; i++) {
					this.hotKeywordList.push(res.data[i]);
					if (i === 18) {
						break;
					}
				}
			} else {
				this.loadingType = 2;
			}
		});
		this.loadHotKeyword();
		let userId = this.$queue.getData('userId');
		if (!userId) {
			this.$Request.getT('/user/' + userId).then(res => {
				if (res.status === 0) {
					this.$queue.setData('image_url', res.data.image_url);
					this.$queue.setData('mobile', res.data.phone);
					this.$queue.setData('nickName', res.data.nickName);
					this.$queue.setData('relation_id', res.data.relationId);
					this.$queue.setData('gender', parseInt(res.data.gender));
				}
			});
		}
	},
	methods: {
		goSearch() {
			uni.navigateTo({
				url: '/pages/search/search?keywords=' + this.copyTklStatus
			});
			this.$refs.simpleModalTkl.hide();
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
		clearInput() {
			this.keywords = '';
		},
		navigateBack: function() {
			uni.navigateBack();
		},
		searchInput: function(e) {
			//兼容引入组件时传入参数情况
			var keyword = e.detail?e.detail.value:e;
			this.keywords = keyword;
			if (!keyword) {
				this.keywordList = [];
				this.isShowKeywordList = false;
				return;
			}
			this.isShowKeywordList = true;
			
			this.$Request.get(this.$Api.common.tbsuggest,{
				KeyWords: this.keywords
			}).then(res => {
				console.log(res.result);
			    this.keywordList = this.drawCorrelativeKeyword(res.result, keyword);
			})
		},
		//顶置关键字
		setkeyword(data) {
			this.keywords = data.keyword;
		},
		//高亮关键字
		drawCorrelativeKeyword(keywords, keyword) {
			var len = keywords.length,
				keywordArr = [];
			for (var i = 0; i < len; i++) {
				var row = keywords[i];
				//定义高亮#9f9f9f
				var html = row[0].replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + "</span>");
				html = '<div>' + html + '</div>';
				var tmpObj = {
					keyword: row[0],
					htmlStr: html
				};
				keywordArr.push(tmpObj)
			}
			return keywordArr;
		},
		deleteKeyword() {
			//清空最近搜索的关键词
			this.oldKeywordList = [];
			this.$queue.remove(this.localKeyword);
		},
		blur(){
			uni.hideKeyboard()
		},
		submitSearch: function() {
			// //#ifdef APP-PLUS
			// plus.key.hideKeyboard();
			// //#endif
			// #ifdef MP-ALIPAY
			if (this.$queue.getSearchKeys(this.keywords)) {
				uni.showToast({
					title: '输入内容带有非法关键字请重新输入',
					mask: false,
					duration: 1500,
					icon: 'none'
				});
				this.keywords = '';
			} else {
				this.$queue.insert({
					key: this.localKeyword,
					value: {
						keyword: this.keywords
					},
					capacityNum: 20 //队列容量
				});
				uni.navigateTo({
					url: '/pages/search/search?keywords=' + this.keywords
				});
			}
			// #endif
			// #ifndef MP-ALIPAY
			let keywords = this.$queue.get(this.localKeyword);
			if (JSON.stringify(keywords).indexOf(this.keywords) === -1) {
				this.$queue.insert({
					key: this.localKeyword,
					value: {
						keyword: this.keywords
					},
					capacityNum: 20 //队列容量
				});
			}
			uni.navigateTo({
				url: '/pages/search/search?keywords=' + this.keywords
			});
			// #endif
		},
		swiperChange: function(e) {
			this.current = e.detail.current;
		},
		switchTab: function(current) {
			this.current = current;
		},
		addKeywords(current) {
			this.keywords = this.keywordList[current].keyword;
			uni.navigateTo({
				url: '/pages/search/search?keywords=' + this.keywords
			});
		},
		addKeyword(keywords) {
			this.keywords = keywords;
			uni.navigateTo({
				url: '/pages/search/search?keywords=' + this.keywords
			});
		},
		//加载热门搜索
		loadHotKeyword() {
			//定义热门搜索关键字，可以自己实现ajax请求数据再赋值
			this.hotKeywordList = ['键盘', '鼠标', '显示器', '电脑主机', '蓝牙音箱', '笔记本电脑', '鼠标垫', 'USB', 'USB3.0'];
		}
	}
};
</script>

<style>
@import '../../static/css/index.css';

.swiper {
	height: 100%;
}

.help-tips {
	font-size: 13px;
	color: #999;
	line-height: 26px;
	padding: 0 0 0 30px;
	margin: 0;
	width: 80%;
	text-align: left;
}

.help-tips.color999 {
	color: #999999;
}

.search-default {
	text-align: center;
	height: 150px;
	margin: auto;
}

.search-default image {
	display: block;
	margin: auto;
	width: 80%;
}

.search-cat {
	position: fixed;
	top: 0;
	bottom: 0;
	padding-top: 150px;
	width: 100%;
	height: 100%;
	padding-bottom: 11px;
	background-color: #fff;
}

.search-cat .search-cat-tit {
	position: relative;
	height: 10px;
	margin: 13px 3% 20px;
}

.search-cat .search-cat-tit .up-menu {
	display: block;
	height: 20px;
	line-height: 20px;
	font-size: 0.9em;
	color: #999;
}

.src-content {
	margin: 20px 0 30px;
	width: 97%;
}

.main-src .src-item {
	float: left;
	border-radius: 22px;
	padding: 0 10px;
	height: 23px;
	line-height: 23px;
	background-color: #f6f6f6;
	margin: 10px;
	position: relative;
	font-size: 13px;
	color: #333;
}

.main-title {
	height: 150px;
}

.main-title {
	background: -moz-linear-gradient(left, #f15b6c, #ff6db2 100%);
	background: -webkit-gradient(linear, left top, left right, color-stop(0, #f15b6c), color-stop(100%, #ff6db2));
	background: -webkit-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
	background: -o-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
	background: -ms-linear-gradient(left, #f15b6c 0, #ff6db2 100%);
	background: linear-gradient(to left, #f15b6c 0, #ff6db2 100%);
	/*background: #FC3F78;*/
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

.clear {
	width: 70upx;
	background: white;
	color: crimson;
	position: absolute;
	z-index: 999;
	font-size: 18px;

	/* height: 60upx; */
	margin-left: 98upx;
	margin-top: -40px;
}

.clears {
	float: right;
	color: crimson;
	margin-left: 8px;
	z-index: 100;
}

.uni-input-input,
.uni-input-placeholder {
	width: 93%;
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
	margin-top: 15px;
}

.main-title .search-tab .close-src .iconfont {
	font-size: 20px;
}

.main-title .search {
	background-color: #fff;
	border-radius: 20px;
	width: 78%;
	margin-left: 12%;
	position: relative;
	padding: 0 9px;
	height: 40px;
	line-height: 40px;
	font-size: 14px;
	margin-top: 10px;
	margin-bottom: 20upx;
}

.uni-input-wrapper {
	width: 87% !important;
}

.search_submit {
	width: 25%;
	height: 40px;
	background: #ffb925;
	color: #fff;
	float: right;
	margin-top: -40px;
	position: relative;
	border-radius: 20px;
	margin-right: -20px;
	z-index: 30;
}

.main-title .search input {
	border: none;
	outline: 0;
	height: 40px;
	font-size: 14px;
	line-height: 40px;
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
.keyword-block {padding:10upx 0; clear: both;}
.search-keyword {width:100%;}
.keyword-list-box {height:calc(100vh - 110upx);padding-top:10upx;border-radius:20upx 20upx 0 0;background-color:#fff;}
.keyword-entry-tap {background-color:#eee;}
.keyword-entry {width:94%;height:80upx;margin:0 3%;font-size:30upx;color:#333;display:flex;justify-content:space-between;align-items:center;border-bottom:solid 1upx #e7e7e7;}
.keyword-entry image {width:60upx;height:60upx;}
.keyword-entry .keyword-text,.keyword-entry .keyword-img {height:80upx;display:flex;align-items:center;}
.keyword-entry .keyword-text {width:90%;}
.keyword-entry .keyword-img {width:10%;justify-content:center;}
</style>
