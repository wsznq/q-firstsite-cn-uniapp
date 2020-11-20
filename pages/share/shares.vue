<template>
	<view style="width: 100%;height: 100%;position: absolute;background: white" @dblclick="navBack">
		<!-- #ifdef H5 -->
		<view v-if="isShow" class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<!-- #endif -->
		<view style="background: whitesmoke"><wm-poster :imgSrc="itempic" :QrSrc="erweima" :Title="itemtitle" :PriceTxt="itemendprice" :OriginalTxt="itemprice"></wm-poster></view>
	</view>
</template>

<script>
import wmPoster from '@/components/wm-poster/wm-posters.vue';
export default {
	components: {
		wmPoster
	},
	data() {
		return {
			itemendprice: '识别二维码免费领取',
			itemtitle: '',
			isShow: false,
			erweimas: '',
			user: '',
			itemprice: '',
			erweima: this.$Url+'/erweimas.jpg',
			itempic: ''
		};
	},
	onLoad: function(e) {
		let that = this;
		//this.loadInfos();
		this.itempic = this.$queue.getData('itempic');
		this.itemtitle = this.$queue.getData('itemtitle');
		if (!this.$queue.getData('itemtitle')) {
			this.itemtitle = '漫花原木纸巾抽纸家用整箱实惠装餐巾纸卫生纸面巾纸抽婴儿擦手纸';
		}
		if (!this.$queue.getData('itempic')) {
			this.itempic = 'https://img.alicdn.com/imgextra/i3/2930255252/O1CN0159ouF21ofSiQ3kPq2_!!2930255252.jpg';
		}
		//this.itemendprice = this.$queue.getData('itemendprice');
		this.erweima = this.$queue.getData('erweimas');
		if (!this.$queue.getData('erweimas')) {
			this.erweima = this.$Url+'/erweimas.jpg';
		}
		setTimeout(function() {
			that.isShow = true;
		}, 2000);
	},
	methods: {
		qrR(path) {
			this.erweimas = path;
		},
		navBack() {
			uni.navigateBack();
		},
		//初始化加载详情数据
		loadInfos() {
			let relationId = this.$queue.getData('relation_id');
			if (!relationId) {
				relationId = this.$queue.getInvitation();
			}
			let that = this;
			this.$Request.getT('/wx/token').then(res => {
				uni.request({
					url: this.$Url+'/qrcode?access_token=' + res,
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						action_name: 'QR_LIMIT_STR_SCENE',
						action_info: {
							scene: {
								scene_str: relationId
							}
						}
					},
					success: function(result) {
						that.erweima = result.data.url;
					},
					fail: function(e) {
						console.error(e);
					}
				});
			});
		}
	}
};
</script>

<style lang="scss">
.back-btn {
	position: absolute;
	left: 20px;
	z-index: 9999;
	padding-top: var(--status-bar-height);
	top: 20px;
	font-size: 20px;
}
</style>
