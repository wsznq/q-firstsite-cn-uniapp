import configdata from './config'
import cache from './cache'

module.exports = {
    config: function (name) {
        var info = null;
        if (name) {
            var name2 = name.split("."); //字符分割
            if (name2.length > 1) {
                info = configdata[name2[0]][name2[1]] || null;
            } else {
                info = configdata[name] || null;
            }
            if (info == null) {
                let web_config = cache.get("web_config");
                if (web_config) {
                    if (name2.length > 1) {
                        info = web_config[name2[0]][name2[1]] || null;
                    } else {
                        info = web_config[name] || null;
                    }
                }
            }
        }
        return info;
    },
    post: function (url, data, header) {
        header = header || "application/x-www-form-urlencoded";
        url = this.config("APIHOST") + url;
        return new Promise((succ, error) => {
            uni.request({
                url: url,
                data: data,
                method: "POST",
                header: {
                    "content-type": header
                },
                success: function (result) {
                    succ.call(self, result.data)
                },
                fail: function (e) {
                    error.call(self, e)
                }
            })
        })
    },
    postT: function (url, data, header) {
        header = header || "application/x-www-form-urlencoded";
        url = this.config("APIHOST") + url;
        let endpointAccessToken = uni.getStorageSync("EndpointAccessToken");
        let deviceNo = uni.getStorageSync("DeviceNo");
        if (endpointAccessToken && deviceNo) {
            return new Promise((succ, error) => {
                uni.request({
                    url: url,
                    data: data,
                    method: "POST",
                    header: {
                        "content-type": header,
                        "EndpointAccessToken": endpointAccessToken,
						"DeviceNo": deviceNo
                    },
                    success: function (result) {
                        succ.call(self, result.data)
                    },
                    fail: function (e) {
                        error.call(self, e)
                    }
                })
            })
        } else {
            return new Promise((succ, error) => {
                uni.request({
                    url: url,
                    data: data,
                    method: "POST",
                    header: {
                        "content-type": header,
                    },
                    success: function (result) {
                        succ.call(self, result.data)
                    },
                    fail: function (e) {
                        error.call(self, e)
                    }
                })
            })
        }
    },
    postJson: function (url, data, header) {
        header = header || "application/json";
        url = this.config("APIHOST") + url;
        let endpointAccessToken = uni.getStorageSync("EndpointAccessToken");
        let deviceNo = uni.getStorageSync("DeviceNo");
        if (endpointAccessToken && deviceNo) {
            return new Promise((succ, error) => {
                uni.request({
                    url: url,
                    data: data,
                    method: "POST",
                    header: {
                        "content-type": header,
                        "EndpointAccessToken": endpointAccessToken,
						"DeviceNo": deviceNo
                    },
                    success: function (result) {
                        succ.call(self, result.data)
                    },
                    fail: function (e) {
                        error.call(self, e)
                    }
                })
            })
        } else {
            return new Promise((succ, error) => {
                uni.request({
                    url: url,
                    data: data,
                    method: "POST",
                    header: {
                        "content-type": header,
                    },
                    success: function (result) {
                        succ.call(self, result.data)
                    },
                    fail: function (e) {
                        error.call(self, e)
                    }
                })
            })
        }
    },
    getT: function (url, data, header) {
        header = header || "application/x-www-form-urlencoded";
        url = this.config("APIHOST") + url;
        let endpointAccessToken = uni.getStorageSync("EndpointAccessToken");
		let deviceNo = uni.getStorageSync("DeviceNo");
        if (endpointAccessToken && deviceNo) {
            return new Promise((succ, error) => {
                uni.request({
                    url: url,
                    data: data,
                    method: "GET",
                    header: {
                        "content-type": header,
                        "EndpointAccessToken": endpointAccessToken,
						"DeviceNo": deviceNo
                    },
                    success: function (result) {
                        succ.call(self, result.data)
                    },
                    fail: function (e) {
                        error.call(self, e)
                    }
                })
            })
        } else {
            return new Promise((succ, error) => {
                uni.request({
                    url: url,
                    data: data,
                    method: "GET",
                    header: {
                        "content-type": header
                    },
                    success: function (result) {
                        succ.call(self, result.data)
                    },
                    fail: function (e) {
                        error.call(self, e)
                    }
                })
            })
        }

    },
    posts: function (url, data, header) {
        header = header || "application/x-www-form-urlencoded";
        return new Promise((succ, error) => {
            uni.request({
                url: url,
                data: data,
                method: "POST",
                header: {
                    "content-type": header
                },
                success: function (result) {
                    succ.call(self, result.data)
                },
                fail: function (e) {
                    error.call(self, e)
                }
            })
        })
    },
    postFs: function (url, data, header) {
        header = header || "application/json";
        return new Promise((succ, error) => {
            uni.request({
                url: url,
                data: data,
                method: "POST",
                header: {
                    "content-type": header
                },
                success: function (result) {
                    succ.call(self, result.data)
                },
                fail: function (e) {
                    error.call(self, e)
                }
            })
        })
    },
    get: function (url, data, header) {
        header = header || "application/x-www-form-urlencoded";
        url = this.config("APIHOST") + url;
        return new Promise((succ, error) => {
            uni.request({
                url: url,
                data: data,
                method: "GET",
                header: {
                    "content-type": header
                },
                success: function (result) {
                    succ.call(self, result.data)
                },
                fail: function (e) {
                    error.call(self, e)
                }
            })
        })
    }
}
