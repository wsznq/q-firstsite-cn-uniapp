(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-feedback"],{5346:function(t,e,i){"use strict";i.r(e);var a=i("f80e"),n=i("7025");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9aea");var c,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5cf3bdc4",null,!1,a["a"],c);e["default"]=d.exports},"6b64":function(t,e,i){"use strict";i("99af"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""}}},onLoad:function(){var t={appid:plus.runtime.appid,imei:plus.device.imei,p:"Android"===plus.os.name?"a":"i",md:plus.device.model,app_version:plus.runtime.version,plus_version:plus.runtime.innerVersion,os:plus.os.version,net:""+plus.networkinfo.getCurrentType()};this.sendDate=Object.assign(t,this.sendDate)},methods:{close:function(t){this.imageList.splice(t,1)},chooseMsg:function(){var t=this;uni.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},chooseImg:function(){var t=this;uni.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}})},chooseStar:function(t){this.sendDate.score=t},previewImage:function(){uni.previewImage({urls:this.imageList})},send:function(){console.log(JSON.stringify(this.sendDate)),this.sendDate.content?this.sendDate.contact?(uni.report("意见反馈",this.sendDate),this.$queue.showLoading("加载中..."),this.$Request.postJson("/message/add",{state:2,title:this.sendDate.contact,content:JSON.stringify(this.sendDate)}).then((function(t){0===t.status?(uni.showToast({title:"反馈成功"}),setTimeout((function(){uni.navigateBack()}),1e3)):(uni.hideLoading(),uni.showModal({showCancel:!1,title:"反馈失败",content:t.msg}))}))):uni.showToast({icon:"none",title:"请填写QQ或邮箱"}):uni.showToast({icon:"none",title:"请输入反馈内容"})}}};e.default=a},7025:function(t,e,i){"use strict";i.r(e);var a=i("6b64"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9aea":function(t,e,i){"use strict";var a=i("f7df"),n=i.n(a);n.a},dacf:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf) format("truetype")}uni-page-body[data-v-5cf3bdc4]{background-color:#efeff4}uni-view[data-v-5cf3bdc4]{font-size:%?28?%}.input-view[data-v-5cf3bdc4]{font-size:%?28?%}.close-view[data-v-5cf3bdc4]{text-align:center;line-height:14px;height:16px;width:16px;-webkit-border-radius:50%;border-radius:50%;background:#ff5053;color:#fff;position:absolute;top:-6px;right:-4px;font-size:12px}\r\n/* 上传 */.uni-uploader[data-v-5cf3bdc4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-uploader-head[data-v-5cf3bdc4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-uploader-info[data-v-5cf3bdc4]{color:#b2b2b2}.uni-uploader-body[data-v-5cf3bdc4]{margin-top:%?16?%}.uni-uploader__files[data-v-5cf3bdc4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-uploader__file[data-v-5cf3bdc4]{margin:%?10?%;width:%?210?%;height:%?210?%}.uni-uploader__img[data-v-5cf3bdc4]{display:block;width:%?210?%;height:%?210?%}.uni-uploader__input-box[data-v-5cf3bdc4]{position:relative;margin:%?10?%;width:%?208?%;height:%?208?%;border:%?2?% solid #d9d9d9}.uni-uploader__input-box[data-v-5cf3bdc4]:before,\r\n.uni-uploader__input-box[data-v-5cf3bdc4]:after{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.uni-uploader__input-box[data-v-5cf3bdc4]:before{width:%?4?%;height:%?79?%}.uni-uploader__input-box[data-v-5cf3bdc4]:after{width:%?79?%;height:%?4?%}.uni-uploader__input-box[data-v-5cf3bdc4]:active{border-color:#999}.uni-uploader__input-box[data-v-5cf3bdc4]:active:before,\r\n.uni-uploader__input-box[data-v-5cf3bdc4]:active:after{background-color:#999}.uni-uploader__input[data-v-5cf3bdc4]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}\r\n/*问题反馈*/.feedback-title[data-v-5cf3bdc4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-star-view.feedback-title[data-v-5cf3bdc4]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0}.feedback-quick[data-v-5cf3bdc4]{position:relative;padding-right:%?40?%}.feedback-quick[data-v-5cf3bdc4]:after{font-family:uniicons;font-size:%?40?%;content:"\\e581";position:absolute;right:0;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.feedback-body[data-v-5cf3bdc4]{font-size:%?32?%;padding:%?16?%;margin:%?16?%;-webkit-border-radius:%?16?%;border-radius:%?16?%;background:#fff}.feedback-textare[data-v-5cf3bdc4]{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input[data-v-5cf3bdc4]{font-size:%?34?%;height:%?60?%;min-height:%?60?%;padding:%?15?% %?20?%;line-height:%?50?%}.feedback-uploader[data-v-5cf3bdc4]{padding:%?22?% %?20?%}.feedback-star[data-v-5cf3bdc4]{font-family:uniicons;font-size:%?40?%;margin-left:%?6?%}.feedback-star-view[data-v-5cf3bdc4]{margin-left:%?20?%}.feedback-star[data-v-5cf3bdc4]:after{content:"\\e408"}.feedback-star.active[data-v-5cf3bdc4]{color:#ffb400}.feedback-star.active[data-v-5cf3bdc4]:after{content:"\\e438"}.feedback-submit[data-v-5cf3bdc4]{background:#007aff;color:#fff;margin:%?20?%}body.?%PAGE?%[data-v-5cf3bdc4]{background-color:#efeff4}',""]),t.exports=e},f7df:function(t,e,i){var a=i("dacf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("02e0c4d7",a,!0,{sourceMap:!1,shadowMode:!1})},f80e:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[t._v("问题和意见")]),i("v-uni-text",{staticClass:"feedback-quick",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseMsg.apply(void 0,arguments)}}},[t._v("快速键入")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-textarea",{staticClass:"feedback-textare",attrs:{placeholder:"请详细描述你的问题和意见..."},model:{value:t.sendDate.content,callback:function(e){t.$set(t.sendDate,"content",e)},expression:"sendDate.content"}})],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[t._v("QQ/邮箱")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-input",{staticClass:"feedback-input",attrs:{placeholder:"方便我们联系你 "},model:{value:t.sendDate.contact,callback:function(e){t.$set(t.sendDate,"contact",e)},expression:"sendDate.contact"}})],1),i("v-uni-view",{staticClass:"feedback-title feedback-star-view"},[i("v-uni-text",[t._v("应用评分")]),i("v-uni-view",{staticClass:"feedback-star-view"},t._l(t.stars,(function(e,a){return i("v-uni-text",{key:a,staticClass:"feedback-star",class:a<t.sendDate.score?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseStar(e)}}})})),1)],1),i("v-uni-button",{staticClass:"feedback-submit",staticStyle:{background:"rgb(255, 109, 178)"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("提交")])],1)},o=[]}}]);