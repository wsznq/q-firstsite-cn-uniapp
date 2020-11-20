<template style="background: white;">
    <view style="text-align: center;background:#FC3F78;height: 100%;position: absolute;width:100%">
        <image style="width: 60px;height: 60px;margin-top: 70px;border-radius:10px" src="../../static/img/logo.png">
        </image>
        <view style="font-size: 18px;margin-top: 8px;font-weight: 600">自用省钱  分享赚钱</view>
        <image style="width: 150px;height: 150px;margin-top: 40px" src="../../static/img/erweima.jpg">
        </image>
        <view style="font-size: 14px;color: grey;margin-top: 20px">长按识别上方二维码</view>
        <view style="font-size: 15px;margin-top: 10px">关注服务号【掌上优惠】后进行注册</view>
        <view style="font-size: 13px;color: grey;margin-top: 40px" @click="rests">无法识别？</view>
        <view style="color:white;padding: 16px;background:#FC3F78;position: fixed;bottom: 0;width: 100%"
              @click="follow">已经关注 , 请戳我一下哦
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
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }

            }
        },
        onPullDownRefresh: function () {
            uni.stopPullDownRefresh(); // 停止刷新
        },
        methods: {
            follow() {
                this.$Request.get("/tao/wx/follow/" + this.$queue.getData("openid")).then(res => {
                    if (res === true) {
                        window.location.replace(localStorage.openUrl);
                    } else {
                        uni.showToast({
                            title: "请长按识别上方二维码关注公众号后进行注册",
                            mask: false,
                            duration: 1500,
                            icon: "none"
                        });
                    }

                });
            },
            rests() {
                uni.showToast({
                    title: "已刷新请再次长按识别",
                    mask: false,
                    duration: 1500,
                    icon: "none"
                });
                window.location.reload();
            }
        },

    }
</script>

<style>
    @import "../../static/css/index.css";
</style>
