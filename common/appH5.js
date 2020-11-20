import cache from './cache'

module.exports = {
	    cacheName: 'deviceId',
        getBrowserInfo: function appInfo() {
			var browser = { appid:'', appname: 'unknown', version: 0 };
			try{
				var userAgent = window.navigator.userAgent.toLowerCase();  // 使用navigator.userAgent来判断浏览器类型
				//msie,firefox,opera,chrome,netscape  
				if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(userAgent)) {
					browser.appname = RegExp.$1;
					browser.version = RegExp.$2;
				} else if (/version\D+(\d[\d.]*).*safari/.test(userAgent)) { // safari  
					browser.appname = 'safari';
					browser.version = RegExp.$2;
				}
			}catch(e){
				//TODO handle the exception
				console.log("-----TODO handle the exception------begin---");
				console.log(e.message);
				console.log("-----TODO handle the exception------end---");
				uni.getSystemInfo({
				    success: function (res) {
						if(res.platform === "android" || res.platform === "ios"){
							browser.appid = plus.device.imei;
							browser.appname = res.model;
							browser.version = res.version;
						}
						else{
							console.log('运行在开发者工具上');
						}
				    }
				});
			}
			return browser;
        },
        getDeviceInfo: function () {
            var deviceId =  this.fit();
            var bInfo = this.getBrowserInfo();
            var info = {
                id: bInfo.appid === '' ? deviceId : bInfo.appid,
                name: bInfo.appname + " " + bInfo.version,
            };
            return info;
        },
        fit: function () {
            //检查/设置设备id
            var deviceId = cache.get(this.cacheName);
            if (!deviceId) {
                deviceId = this.newGuid();
                cache.put(this.cacheName, deviceId);
            }
            return deviceId;
        },
        newGuid: function (excludeBar) {
            var guid = "";
            for (var i = 1; i <= 32; i++) {
                var n = Math.floor(Math.random() * 16.0).toString(16);
                guid += n;
                if (!excludeBar && ((i == 8) || (i == 12) || (i == 16) || (i == 20))) {
                    guid += "-";
                }
            }
            return guid;
        }
};
