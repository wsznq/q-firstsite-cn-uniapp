<template>
	<view style="text-align: center;background: white;height: 100%;position: absolute;width: 100%">
		<view style="padding: 42upx;background: #FF6DB2;">
			<view style="font-size: 32upx;color: #FFFFFF;margin-bottom: 32upx"> 我的等级</view>
			<text class="num" style="font-size: 32upx;color: #FFFFFF;margin-bottom: 10px">
				<text style="font-size: 30upx;margin-right:10upx;">VIP</text>
				<text style="font-size: 50upx;font-weight: bold;">{{dengji}}</text>

			</text>
			<!--            <view style="margin-top: 8px;font-size: 10px;color: #999999">（未结算金额=邀请{{totalMoney}}人*1元佣金）</view>
 -->
		</view>
		<!-- <view style="text-align: center;margin-top: 32px;width: 100%;padding-bottom: 32px">
			<view
				@click="getOut"
				v-if="totalMoney > 0"
				style="margin-left: 40px;margin-right:40px;font-size: 18px;background: #FF6DB2;color: white;border-radius: 10px;height: 40px;line-height: 40px"
			>
				申请结算
			</view>
			<view v-else style="margin-left: 40px;margin-right:40px;font-size: 18px;background: gainsboro;color: white;border-radius: 10px;height: 40px;line-height: 40px">
				暂无未结算金额
			</view>
		</view> -->
		<view @click="shengJiMethod()" style="margin-top:30px;margin-left: 40px;margin-right:40px;font-size: 18px;background: #FF6DB2;color: white;border-radius: 10px;height: 40px;line-height: 40px">
			{{dengjides}}
		</view>
		<view @click="yaoqing()" style="margin-top:30px;margin-left: 40px;margin-right:40px;font-size: 18px;background: #FF6DB2;color: white;border-radius: 10px;height: 40px;line-height: 40px">
			我邀请的人
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalMoney: '0',
				dengji: 0,
				dengjides: '生成海报'
			};
		},
		onShow: function(e) {
			this.$queue.getUserInfo(); 
		},
		methods: {
			yaoqing() {
				uni.navigateTo({
					url: '/pages/member/yaoqing'
				});
			},
			//升级规则弹框
			shengJiMethod() {
				uni.showModal({
					title: '升级规则',
					content: '每成功邀请2位好友提升1级\n最高10级每级对应相应的返现比例\n\n邀请方式：\n1、点击右下方生成海报按钮\n2、将海报分享好友、群或朋友圈\n让好友扫码关注即可升级',
					showCancel: true,
					cancelText: '关闭',
					confirmText: '生成海报',
					success: res => {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/share/shares'
							})
						}
					}
				});
			},
			share() {

				uni.navigateTo({
					url: '/pages/share/shares'
				});
			},
			getMoney() {
				let that = this;
				let relationId = this.$queue.getData('relation_id');
				if (relationId) {
					this.$Request.getT('/user/getCount?invitation=' + relationId).then(res => {
						if (res.status === 0 && res.data) {
							that.totalMoney = res.data;
						} else if (res.status === -102) {
							this.$queue.showToast(res.msg);
							this.$queue.logout();
							uni.navigateTo({
								url: '/pages/public/login'
							});
						} else {
							that.totalMoney = '0';
						}
					});
				}
			},
			getOut() {
				let that = this;
				let relationId = this.$queue.getData('relation_id');
				if (relationId) {
					if (this.totalMoney > 2) {
						that.$queue.showLoading('结算中...');
						this.$Request.getT('/user/getCash?invitation=' + relationId).then(res => {
							if (res.status === 0 && res.data) {
								uni.showModal({
									showCancel: false,
									title: '结算成功',
									content: '请返回【我的】点击【立即提现】'
								});
								that.getMoney();
							}
							uni.hideLoading();
						});
					} else {
						uni.showModal({
							showCancel: false,
							title: '结算提醒',
							content: '邀请必须够3人才可申请结算'
						});
					}
				} else {
					uni.navigateTo({
						url: '/pages/public/login'
					});
				}
			}
		}
	};
</script>

<style lang="scss">
	@import '../../static/css/index.css';
</style>
