(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-loginphone"],{"075c":function(e,t,i){"use strict";i.r(t);var n=i("9073"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"62b2":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"left-bottom-sign"}),i("v-uni-view",{staticClass:"back-btn yticon icon-zuojiantou-up",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"left-top-sign"},[e._v("掌上优惠")]),i("v-uni-view",{staticClass:"welcome"},[e._v("登录")]),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"1px solid whitesmoke","margin-bottom":"20px","border-radius":"30px"}},[i("v-uni-view",{staticClass:"title"},[e._v("手机号")]),i("v-uni-input",{attrs:{type:"number",value:e.mobile,placeholder:"请输入手机号",maxlength:"11","data-key":"mobile"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"1px solid whitesmoke","border-radius":"30px"}},[i("v-uni-view",{staticClass:"title"},[e._v("密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"请输入密码",maxlength:"20",value:e.code,"data-key":"code"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputChange.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"send-msg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.forget.apply(void 0,arguments)}}},[e._v("忘记密码")])],1)],1),i("v-uni-button",{class:e.mobile&&e.code?"confirm-btn":"confirm-btn1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toLogin.apply(void 0,arguments)}}},[e._v("登录")]),i("v-uni-view",{staticStyle:{"margin-top":"32px","text-align":"center"}},[i("v-uni-view",[e._v("没有账号？"),i("v-uni-text",{staticStyle:{color:"#FC3F78"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register()}}},[e._v("立即注册")])],1)],1)],1)],1)},o=[]},9073:function(e,t,i){"use strict";i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{mobile:"",code:"",sending:!1,sendTime:"获取验证码",count:60,deviceNo:"xxx",deviceName:""}},onLoad:function(){var e=this.$queue.getData("DeviceNo");e&&(this.deviceNo=e);var t=this.$queue.getData("DeviceName");t&&(this.deviceName=t)},methods:{forget:function(){uni.navigateTo({url:"/pages/public/pwd"})},register:function(){uni.navigateTo({url:"/pages/public/register"})},inputChange:function(e){var t=e.currentTarget.dataset.key;this[t]=e.detail.value},navBack:function(){uni.navigateBack()},toLogin:function(){var e=this;this.$queue.logout();var t=this.$queue.getData("openid"),i=this.mobile,n=this.code;(i||n)&&(this.$queue.showLoading("正在登录中..."),this.$Request.post(this.$Api.member.UserLogin,{UserName:i,Password:n,DeviceNo:this.deviceNo,DeviceName:this.deviceName,openid:t}).then((function(t){1===t.Code?(e.$queue.setData("EndpointAccessToken",t.Message.EndpointAccessToken),e.$queue.setData("EndpointRefreshToken",t.Message.EndpointRefreshToken),e.$queue.setData("userId",t.Message.UserId),e.$queue.setData("mobile",i),e.getUserInfo(t.Message.UserId,t.Message.EndpointAccessToken)):(uni.hideLoading(),uni.showModal({showCancel:!1,title:"登录失败",content:t.Message}))})))},getUserInfo:function(e,t){var i=this;this.$Request.getT(this.$Api.member.GetUserInfoById).then((function(n){if(1===n.Code){i.$queue.setData("image_url",n.Message.HeadImgUrl?i.$Url+n.Message.HeadImgUrl:"/static/img/common/logo.jpg"),i.$queue.setData("mobile",n.Message.Mobile),i.$queue.setData("relation_id",n.Message.UserGroupId),i.$queue.setData("relation",n.Message.MUserGroup.UserGroupName),i.$queue.setData("grade",n.Message.MUserGroup.RankId),i.$queue.setData("isInvitation","1"),i.$queue.setData("nickName",n.Message.NickName?n.Message.NickName:n.Message.Mobile),i.$queue.setData("gender",parseInt(n.Message.Gender));var a=i.$queue.getData("href");a?(console.log(a),"/pages/member/publisher"===a?(i.$queue.remove("href"),uni.redirectTo({url:"/pages/member/publisher?uid="+e+"&token="+t})):"/pages/member/user"===a?(i.$queue.remove("href"),uni.switchTab({url:"/pages/member/user"})):(i.$queue.remove("href"),uni.redirectTo({url:a}))):uni.switchTab({url:"/pages/index/index"})}else uni.showModal({showCancel:!1,title:"登录失败",content:n.msg}),i.$queue.logout();uni.hideLoading()}))}}};t.default=n},b4a0:function(e,t,i){"use strict";i.r(t);var n=i("62b2"),a=i("075c");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("d600");var r,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"65002408",null,!1,n["a"],r);t["default"]=u.exports},d600:function(e,t,i){"use strict";var n=i("eaa8"),a=i.n(n);a.a},dc23:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */uni-page-body[data-v-65002408]{background:#fff}.send-msg[data-v-65002408]{-webkit-border-radius:30px;border-radius:30px;color:#000;background:#fff;height:30px;font-size:14px;line-height:30px}.container[data-v-65002408]{top:0;padding-top:50px;position:relative;width:100%;height:100%;overflow:hidden;background:#fff}.wrapper[data-v-65002408]{position:relative;z-index:90;background:#fff;padding-bottom:20px}.back-btn[data-v-65002408]{position:absolute;left:20px;z-index:9999;padding-top:0;top:20px;font-size:20px;color:#303133}.left-top-sign[data-v-65002408]{font-size:80px;color:#f8f8f8;position:relative}.right-top-sign[data-v-65002408]{position:absolute;top:40px;right:-15px;z-index:95}.right-top-sign[data-v-65002408]:before, .right-top-sign[data-v-65002408]:after{display:block;content:"";width:20px;height:40px;background:#fc3f78}.right-top-sign[data-v-65002408]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);-webkit-border-radius:0 50px 0 0;border-radius:0 50px 0 0}.right-top-sign[data-v-65002408]:after{position:absolute;right:-198px;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);-webkit-border-radius:50px 0 0 0;border-radius:50px 0 0 0\r\n  /* background: pink; */}.left-bottom-sign[data-v-65002408]{position:absolute;left:-270px;bottom:-320px;\r\n  /*border: 100upx solid #d0d1fd;*/-webkit-border-radius:50%;border-radius:50%;padding:90px}.welcome[data-v-65002408]{position:relative;left:30px;top:-55px;font-size:28px;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-65002408]{padding:0 20px}.input-item[data-v-65002408]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 30px;background:#f8f6fc;height:64px;-webkit-border-radius:4px;border-radius:4px;margin-bottom:30px}.input-item[data-v-65002408]:last-child{margin-bottom:0}.input-item .tit[data-v-65002408]{height:30px;line-height:28px;font-size:%?26?%;color:#606266}.input-item uni-input[data-v-65002408]{height:40px;font-size:%?30?%;color:#303133;width:100%}.confirm-btn[data-v-65002408]{width:300px;height:42px;line-height:42px;-webkit-border-radius:30px;border-radius:30px;margin-top:40px;background:#fc3f78;color:#fff;font-size:%?32?%}.confirm-btn[data-v-65002408]:after{-webkit-border-radius:60px;border-radius:60px}.confirm-btn1[data-v-65002408]{width:300px;height:42px;line-height:42px;-webkit-border-radius:30px;border-radius:30px;margin-top:40px;background:#f5f5f5;color:grey;font-size:%?32?%}.confirm-btn1[data-v-65002408]:after{-webkit-border-radius:60px;border-radius:60px}.forget-section[data-v-65002408]{font-size:%?26?%;color:#4399fc;text-align:center;margin-top:40px}.register-section[data-v-65002408]{left:0;margin-top:30px;bottom:30px;width:100%;font-size:%?26?%;color:#606266;text-align:center}.register-section uni-text[data-v-65002408]{color:#4399fc;margin-left:10px}body.?%PAGE?%[data-v-65002408]{background:#fff}',""]),e.exports=t},eaa8:function(e,t,i){var n=i("dc23");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("0a2fa1ba",n,!0,{sourceMap:!1,shadowMode:!1})}}]);