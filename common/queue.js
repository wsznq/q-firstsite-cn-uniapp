import httpRequest from './httpRequest.js'
import httpApi from './httpApi.js'
/**
 * 队列封装
 * @author maxd
 * @date 2019.8.1
 */
module.exports = {
	//站点accountId
	getAccountId() {
		return '2007234663012402490309162'
	},
	//微信的appId
	getWxAppid() {
		return 'wx2a72a5d4c4bd6a8b'
	},
	//全局邀请码
	getInvitation() {
		return uni.getStorageSync("publicRelation") ? uni.getStorageSync("publicRelation") : ''
	},
	//获取用户信息
	getUserInfo(){
		let endpointAccessToken = uni.getStorageSync("EndpointAccessToken");
		let deviceNo = uni.getStorageSync("DeviceNo");
		console.log("EndpointAccessToken-" + endpointAccessToken);
		console.log("deviceNo-" + deviceNo);
		if (endpointAccessToken && deviceNo) {
			httpRequest.getT(httpApi.member.GetUserInfoById).then(res => {
				if (res.Code === 1) {
					let image_url = res.Message.HeadImgUrl;
					if (image_url && image_url !== 'undefined') {
						image_url = image_url;
					} else {
						image_url = '/static/img/common/logo.jpg'
					}
					console.log("image_url-" + image_url);
					this.setData('image_url', image_url);//头像
					this.setData('mobile', res.Message.Mobile);//手机号码
					this.setData('isInvitation', res.Message.isInvitation);//是否邀请
					this.setData('relation_id', res.Message.UserGroupId);//组别序号
					this.setData('relation', res.Message.MUserGroup.UserGroupName);//组别名称
					this.setData('grade', res.Message.MUserGroup.RankId);//等级值
					this.setData("nickName", res.Message.NickName ? res.Message.NickName : res.Message.Mobile);//昵称
					this.setData('gender', parseInt(res.Message.Gender));//性别
					this.setData('userId', res.Message.UserId);
				}
				else{
					uni.showModal({
						title: '用户信息提示',
						content: '本地用户信息失效需要重新授权登录:' + res.Message,
						showCancel: false,
						success: (e) => {
							//#ifdef H5
							if (e.confirm) {
								window.location.reload();
							} else {
								window.location.reload();
							}
							//#endif
							//#ifndef H5
							this.navTo('/pages/public/login')
							//#endif
						},
					});
				}
			});
		}
		else{
			this.logout();
		}
	},
	logout() {
		this.remove("EndpointAccessToken");
		this.remove("EndpointRefreshToken");
		this.remove("userId");
		this.remove("image_url");
		this.remove("mobile");
		this.remove("isInvitation");
		this.remove("relation_id");
		this.remove("relation");
		this.remove("grade");
		this.remove("nickName");
		this.remove("gender");
	},
	showLoading(title) {
		uni.showLoading({
			title: title
		});
	},
	showToast(title) {
		uni.showToast({
			title: title,
			mask: false,
			duration: 2000,
			icon: "none"
		});
	},
	getSearchKeys: function(key) {
		let list = "套套，情趣用品，避孕，男用，女用，成人用品，保健品，冈本 杜蕾斯 杰士邦 第六感 倍力乐 诺丝 多乐士 斯香妮 双一 雨蝶 玛尼仕，充气娃娃，娃娃充气 阴蒂 刺激 超薄 螺纹 震动 润滑 女液体 延时 ";
		return list.includes(key);
	},
	setJson: function(key, value) {
		let jsonString = JSON.stringify(value);
		try {
			uni.setStorageSync(key, jsonString);
		} catch (e) {
			// error
		}
	},
	setData: function(key, value) {
		try {
			uni.setStorageSync(key, value);
		} catch (e) {
			// error
		}
	},
	getData: function(key) {
		try {
			const value = uni.getStorageSync(key);
			if (value) {
				return value;
			}
		} catch (e) {
			// error
		}
	},
	getJson: function(key) {
		try {
			const value = uni.getStorageSync(key);
			if (value) {
				return JSON.parse(value);
			}
		} catch (e) {
			// error
		}

	},
	clear: function() {
		uni.clearStorage();
	},
	get: function(key) { //获取队列里面全部的数据
		let data = this.getJson(key);
		if (data instanceof Array) {
			return data;
		}
		return [];
	},
	insert: function(param) { //队列插入数据
		param.capacityNum = param.capacityNum || 100; //队列容量 默认队列中超过100条数据，自动删除尾部
		let data = this.getJson(param.key);
		if (data instanceof Array) {
			if (data.length > param.capacityNum) {
				let total = data.length - param.capacityNum;
				for (let i = 0; i < total; i++) {
					data.pop();
				}
			}
			data.unshift(param.value);
		} else {
			data = [];
			data.push(param.value);
		}
		this.setJson(param.key, data);
	},
	removeItem: function(key, itemIds) { //提供itemIds数组 批量删除队列中的某项数据
		let data = this.getJson(key);
		if (data instanceof Array) {
			for (let i = 0; i < itemIds.length; i++) {
				for (let p = 0; p < data.length; p++) {
					if (itemIds[i] === data[p].itemid) {
						data.splice(p, 1);
						break;
					}
				}
			}
			this.setJson(key, data);
		}
	},
	isExist: function(key, itemId) { //检测某条数据在队列中是否存在
		let data = this.getJson(key);
		if (data instanceof Array) {
			for (let p = 0; p < data.length; p++) {
				if (itemId === data[p].itemid) {
					return true;
				}
			}
		}
		return false;
	},
	isExistPdd: function(key, itemId) { //检测某条数据在队列中是否存在
		let data = this.getJson(key);
		if (data instanceof Array) {
			for (let p = 0; p < data.length; p++) {
				if (itemId === data[p].itemid) {
					return true;
				}
			}
		}
		return false;
	},
	isExistJd: function(key, itemId) { //检测某条数据在队列中是否存在
		let data = this.getJson(key);
		if (data instanceof Array) {
			for (let p = 0; p < data.length; p++) {
				if (itemId === data[p].itemid) {
					return true;
				}
			}
		}
		return false;
	},
	remove: function(key) { //删除某条队列
		try {
			uni.removeStorageSync(key);
			//localStorage.removeItem(key)
		} catch (e) {
			// error
		}
	},
	getCount: function(key) { //获取队列中全部数据数量

		let data = this.getJson(key);
		if (data instanceof Array) {
			return data.length;
		}
		return 0;
	},
};
