<template>
	<view class="container">
		<image @click="navBack" src="../../static/close.png" style="width: 32upx;height: 32upx;margin-left: 46upx;"></image>

		<view style="text-align: center;">
			<image style="width: 120upx;height: 120upx;margin-top: 140upx;border-radius:20upx" src="../../static/logo.png"></image>
			<view style="font-size: 28upx;margin-top: 32upx">你的网购省钱专家</view>
			<button v-if="!taobao && weixinLogin" class="confirm-btn" @click="weixinLo">微信登录</button>
			<button v-if="weixinLogin&&taobao" class="confirm-btn-weixin" @click="weixinLo">微信登录</button>
			<button v-if="!weixinLogin && !taobao" class="confirm-btn" @click="loginphone">手机号登录</button>
			<view v-if="weixinLogin||taobao" style="margin-top: 32upx;text-align: center"><text style="color: #999999;font-size: 26upx;"
				 @click="loginphone()">手机登录 ></text></view>
			<!-- 底部信息 -->
			<view class="footer">
				<text>登录即代表同意</text>
				<!-- 协议地址 -->
				<navigator url="/pages/member/mimi" open-type="navigate">《隐私政策》</navigator>
				和
				<navigator url="/pages/member/xieyi" open-type="navigate">《用户服务协议》</navigator>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				taobao: false,
				weixinLogin: false,
				deviceNo: 'xxx',
				deviceName: ''
			};
		},
		onLoad() {
			//微信登录开启
			this.weixinLogin = true;
			let deviceNo = this.$queue.getData("DeviceNo");
			if (deviceNo) {
				this.deviceNo = deviceNo;
			}
			let deviceName = this.$queue.getData("DeviceName");
			if (deviceName) {
				this.deviceName = deviceName;
			}
		},
		methods: {
			weixinLo() {
				this.$queue.logout();
				this.$queue.showLoading("正在登录中...");
				this.$Request.post(this.$Api.weixin.GetCodeUrl, {
					DeviceNo: this.deviceNo,
					DeviceName: this.deviceName
				}).then(res => {
					console.log(res);
					if (res.Code === 1) {
						window.location.href = res.Message;
					} else {
						uni.hideLoading();
						uni.showModal({
							showCancel: false,
							title: '登录失败',
							content: res.Message,
						});
					}
				});
			},
			loginphone() {
				uni.navigateTo({
					url: '/pages/public/loginphone'
				});
			},
			navBack() {
				uni.navigateBack();
			}
		}
	};
</script>

<style lang="scss">
	.footer {
		padding-left: 140upx;
		margin-top: 32upx;
		font-size: 24upx;
		color: #666666;
		text-align: center;
		display: flex;
	}

	page {
		background: #fff;
	}

	.send-msg {
		border-radius: 30px;
		color: black;
		background: white;
		height: 30px;
		font-size: 14px;
		line-height: 30px;
	}

	.container {
		top: 0;
		padding-top: 50px;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #fff;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 20px;
	}

	.back-btn {
		position: absolute;
		left: 20px;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 20px;
		font-size: 20px;
		color: $font-color-dark;
	}

	.left-top-sign {
		font-size: 80px;
		color: $page-color-base;
		position: relative;
	}

	.right-top-sign {
		position: absolute;
		top: 40px;
		right: -15px;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: '';
			width: 20px;
			height: 40px;
			background: #e10a07;
		}

		&:before {
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -198px;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: absolute;
		left: -270px;
		bottom: -320px;
		/*border: 100upx solid #d0d1fd;*/
		border-radius: 50%;
		padding: 90px;
	}

	.welcome {
		position: relative;
		left: 30px;
		top: -55px;
		font-size: 28px;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
	}

	.input-content {
		padding: 0 20px;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30px;
		background: $page-color-light;
		height: 64px;
		border-radius: 4px;
		margin-bottom: 30px;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 30px;
			line-height: 28px;
			font-size: $font-sm + 2upx;
			color: $font-color-base;
		}

		input {
			height: 40px;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}
	}

	.confirm-btn-weixin {
		width: 200px;
		height: 42px;
		line-height: 42px;
		border-radius: 30px;
		margin-top: 40upx;
		background: -moz-linear-gradient(left, #f15b6c, #e10a07 100%);
		background: -webkit-gradient(linear, left top, left right, color-stop(0, #f15b6c), color-stop(100%, #e10a07));
		background: -webkit-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: -o-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: -ms-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: linear-gradient(to left, #f15b6c 0, #e10a07 100%);
		color: #fff;
		font-size: $font-lg;

		&:after {
			border-radius: 60px;
		}
	}

	.confirm-btn {
		width: 200px;
		height: 42px;
		line-height: 42px;
		border-radius: 30px;
		margin-top: 300upx;
		background: -moz-linear-gradient(left, #f15b6c, #e10a07 100%);
		background: -webkit-gradient(linear, left top, left right, color-stop(0, #f15b6c), color-stop(100%, #e10a07));
		background: -webkit-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: -o-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: -ms-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: linear-gradient(to left, #f15b6c 0, #e10a07 100%);
		color: #fff;
		font-size: $font-lg;

		&:after {
			border-radius: 60px;
		}
	}

	.confirm-btn1 {
		width: 300px;
		height: 42px;
		line-height: 42px;
		border-radius: 30px;
		margin-top: 40px;
		background: whitesmoke;
		color: grey;
		font-size: $font-lg;

		&:after {
			border-radius: 60px;
		}
	}

	.forget-section {
		font-size: $font-sm + 2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40px;
	}

	.register-section {
		left: 0;
		margin-top: 30px;
		bottom: 30px;
		width: 100%;
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		text-align: center;

		text {
			color: $font-color-spec;
			margin-left: 10px;
		}
	}
</style>
