(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-share"],{4436:function(t,e,n){"use strict";var i=n("4ea4");n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("7baa")),r={components:{wmPoster:a.default},data:function(){return{providerList:[],sourceLink:"http://yunzhujiao.cn/bind_pub/index.html",type:0,url:this.$Url+"/?invitation="+this.$queue.getInvitation(),erweima:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+this.$Url}},onLoad:function(){var t=this,e=this.$queue.getData("relation_id");e&&(this.url=this.$Url+"/?invitation="+e,this.erweima="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+this.$Url+"/?invitation="+e),uni.getProvider({service:"share",success:function(e){for(var n=[],i=0;i<e.provider.length;i++)switch(e.provider[i]){case"weixin":n.push({name:"分享到微信好友",id:"weixin"}),n.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":n.push({name:"分享到QQ",id:"qq"});break;default:break}t.providerList=n},fail:function(t){console.log("获取登录通道失败"+JSON.stringify(t))}})},methods:{toSave:function(){},navBack:function(){uni.navigateBack()},sharurl:function(){uni.setClipboardData({data:"给你说个购物省钱的好东西！\n买东西最高能省50%的钱！\n一年省一半\n谁不想给自己省钱呢？\n戳下方链接查看哦啊\n"+this.url,success:function(){console.log("success"),uni.showModal({title:"复制成功",content:"内容已复制到粘贴板",showCancel:!1,success:function(t){t.confirm||t.cancel}})}})},save:function(){uni.showActionSheet({itemList:["保存图片到相册"],success:function(){plus.gallery.save("http://pds.jyt123.com/wxtest/logo.png",(function(){uni.showToast({title:"保存成功",icon:"none"})}),(function(){uni.showToast({title:"保存失败，请重试！",icon:"none"})}))}})},share:function(t){var e=this;if(0!==this.providerList.length){var n=this.providerList.map((function(t){return t.name}));uni.showActionSheet({itemList:n,success:function(t){console.log(e.providerList[t.tapIndex].id),"qq"==e.providerList[t.tapIndex].id?e.type=1:e.type=0,uni.share({provider:e.providerList[t.tapIndex].id,scene:e.providerList[t.tapIndex].type&&"WXSenceTimeline"===e.providerList[t.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:e.type,title:"耘助教",summary:"耘助教是一个在线教育应用平台",imageUrl:"http://pds.jyt123.com/wxtest/logo.png",href:"https://m3w.cn/uniapp",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})},openLink:function(){plus.runtime.openWeb(this.sourceLink)}}};e.default=r},"5d48":function(t,e,n){"use strict";n.r(e);var i=n("4436"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},6320:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.tugurl[data-v-eee2c8aa]{color:#999}.back-btn[data-v-eee2c8aa]{position:absolute;left:20px;z-index:9999;padding-top:0;top:10px;font-size:20px;color:#fff}.content[data-v-eee2c8aa]{position:absolute;width:100%;height:100%}.sharbuttn[data-v-eee2c8aa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.shartitle[data-v-eee2c8aa]{width:80%;text-align:center;margin-left:10%;border-bottom:1px solid #ddd;position:relative;height:30px}.tgtit[data-v-eee2c8aa]{text-align:center}.shartitle uni-view[data-v-eee2c8aa]{height:25px;line-height:25px;font-size:14px;color:#999;width:60px;margin:16px auto;position:absolute;background:#fff;left:50%;margin-left:-30px}.sharapk[data-v-eee2c8aa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:10px auto}.sharapk uni-view[data-v-eee2c8aa]{margin:20px}.sharapk uni-view uni-image[data-v-eee2c8aa]{height:40px;width:40px}.content[data-v-eee2c8aa]{width:100%;background-color:#fff}.top[data-v-eee2c8aa]{width:100%;height:70px;\r\n  /*background: url(../../static/img/banner.png) no-repeat;*/background-size:100%;background-position:50%;background:-moz-linear-gradient(left,#f15b6c,#ff6db2 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#f15b6c),color-stop(100%,#ff6db2));background:-webkit-linear-gradient(left,#f15b6c,#ff6db2);background:-o-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-ms-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-webkit-linear-gradient(right,#f15b6c,#ff6db2);background:linear-gradient(270deg,#f15b6c 0,#ff6db2)}.top1[data-v-eee2c8aa]{width:100%;height:40px;\r\n  /*background: url(../../static/img/banner.png) no-repeat;*/background-size:100%;background-position:50%;background:-moz-linear-gradient(left,#f15b6c,#ff6db2 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#f15b6c),color-stop(100%,#ff6db2));background:-webkit-linear-gradient(left,#f15b6c,#ff6db2);background:-o-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-ms-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-webkit-linear-gradient(right,#f15b6c,#ff6db2);background:linear-gradient(270deg,#f15b6c 0,#ff6db2)}.banner[data-v-eee2c8aa]{width:100%;background-color:#fff;border-radius:30px 30px 0 0}.banner dl dt[data-v-eee2c8aa]{text-align:center}.banner dl dt uni-image[data-v-eee2c8aa]{width:80px;height:80px;border-radius:50%}.banner dl dd[data-v-eee2c8aa]{text-align:center}.img[data-v-eee2c8aa]{width:150px;height:150px;background-color:red;margin:0 auto;margin-top:12px}.img uni-image[data-v-eee2c8aa]{width:100%;height:100%}.btn[data-v-eee2c8aa]{width:130px;height:30px;line-height:30px;margin:0 auto;margin-top:16px;border-radius:20px;border:0;font-size:13px;outline:0;background:#ff6db2;color:#fff;text-align:center}.bottom[data-v-eee2c8aa]{margin-top:16px;text-align:center;width:100%;background-position:0 100%;\r\n  /* 设置背景图片位置 */background-size:20%}.bottom ul[data-v-eee2c8aa]{padding-left:20px;box-sizing:border-box}.bottom ul li[data-v-eee2c8aa]{width:100%;height:30px}',""]),t.exports=e},c41e:function(t,e,n){"use strict";n.r(e);var i=n("ec07"),a=n("5d48");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("dfa8");var o,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"eee2c8aa",null,!1,i["a"],o);e["default"]=s.exports},c94a:function(t,e,n){var i=n("6320");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8e7e3c18",i,!0,{sourceMap:!1,shadowMode:!1})},dfa8:function(t,e,n){"use strict";var i=n("c94a"),a=n.n(i);a.a},ec07:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"top1"}),n("v-uni-view",{staticClass:"back-btn yticon icon-zuojiantou-up",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navBack.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"banner",staticStyle:{"margin-top":"8px"}},[n("v-uni-view",{staticStyle:{"text-align":"center"}},[n("v-uni-view",{staticStyle:{"font-size":"22px","font-weight":"bold",color:"#FF6DB2"}},[t._v("掌上优惠")]),n("v-uni-view",{staticStyle:{color:"#FF6DB2","margin-top":"4px"}},[t._v("让你体验白菜价网购的快感")])],1),n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:t.erweima},on:{longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.toSave.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"12px",color:"grey","margin-top":"8px"}},[t._v("长按上方二维码保存图片")]),n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"10px",color:"grey","margin-top":"4px"}},[t._v("（可截屏当前页面发送到朋友圈哦）")]),n("v-uni-view",{staticClass:"shartitle"},[n("v-uni-view",[t._v("推广链接")])],1),n("v-uni-view",{staticClass:"tgtit",staticStyle:{"margin-top":"12px"}},[n("v-uni-text",{staticClass:"tugurl",staticStyle:{"margin-top":"6px"}},[t._v(t._s(t.url))])],1),n("v-uni-view",{staticClass:"sharbuttn"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sharurl.apply(void 0,arguments)}}},[t._v("复制推广链接")])],1)],1)],1)},r=[]}}]);