(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-erweima"],{2852:function(o,t,e){"use strict";var i;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var n=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("v-uni-view",{staticStyle:{height:"100vh",background:"#FF6DB2"}},[e("v-uni-view",{staticStyle:{"text-align":"center"}},[e("v-uni-image",{staticStyle:{width:"130px",height:"130px","margin-top":"50%","text-align":"center"},attrs:{src:o.image}}),e("v-uni-view",{staticStyle:{"font-size":"14px",color:"white","margin-top":"20px",opacity:"0.9"}},[o._v(o._s(o.isWeiXin?"长按识别上方二维码":"微信关注公众号【掌上优惠】后登录"))]),o.isWeiXin?e("v-uni-view",{staticStyle:{"font-size":"13px",color:"white","margin-top":"40px",opacity:"0.9"},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.rests.apply(void 0,arguments)}}},[o._v("无法识别？")]):o._e()],1)],1)},a=[]},"75de":function(o,t,e){"use strict";var i=e("b224"),n=e.n(i);n.a},"94b6":function(o,t,e){"use strict";e("c975"),e("ac1f"),e("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={onShareAppMessage:function(o){return{title:"购物先领券，一年省一半",path:"/pages/index/index"}},data:function(){return{image:"https://www.firstsite.cn/erweima.jpg",webviewStyles:{progress:{color:"#FF3333"}},isWeiXin:!1}},onLoad:function(){var o=this,t=navigator.userAgent.toLowerCase();-1!==t.indexOf("micromessenger")&&(this.isWeiXin=!0),this.$Request.getT("/common/type/2").then((function(t){0==t.status&&t.data&&t.data.value&&(o.image=t.data.value)}))},onShow:function(){this.$queue.getData("openid")&&this.$Request.get("/tao/wx/follow/"+this.$queue.getData("openid")).then((function(o){!0===o&&uni.navigateBack()}))},onPullDownRefresh:function(){uni.stopPullDownRefresh()},methods:{navBack:function(){uni.navigateBack()},follow:function(){var o=this;this.$Request.get("/tao/wx/follow/"+this.$queue.getData("openid")).then((function(t){!0===t?window.location.replace(o.$Url):uni.showToast({title:"请长按识别上方二维码关注公众号",mask:!1,duration:1500,icon:"none"})}))},rests:function(){uni.showToast({title:"已刷新请再次长按识别",mask:!1,duration:1500,icon:"none"}),window.location.reload()}}};t.default=i},b224:function(o,t,e){var i=e("dc8c");"string"===typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);var n=e("4f06").default;n("c771deac",i,!0,{sourceMap:!1,shadowMode:!1})},bc00:function(o,t,e){"use strict";e.r(t);var i=e("94b6"),n=e.n(i);for(var a in i)"default"!==a&&function(o){e.d(t,o,(function(){return i[o]}))}(a);t["default"]=n.a},d964:function(o,t,e){"use strict";e.r(t);var i=e("2852"),n=e("bc00");for(var a in n)"default"!==a&&function(o){e.d(t,o,(function(){return n[o]}))}(a);e("75de");var d,r=e("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"24039193",null,!1,i["a"],d);t["default"]=s.exports},dc8c:function(o,t,e){var i=e("24fb"),n=e("1de5"),a=e("2478"),d=e("3efe");t=i(!1);var r=n(a),s=n(d);t.push([o.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.index-content[data-v-24039193]{width:100%;background:#f8f8f8}.index-content .index-header[data-v-24039193]{position:fixed;z-index:160;\r\n    /*border-bottom: solid 1px #ddd;*/\r\n    /*background: linear-gradient(to left, #FC3F78 0, #FBAA58 100%);*/border-bottom-color:transparent;-webkit-transition:all .4s ease 0s;-webkit-transform-origin:center;transform-origin:center;width:100%}.index-content .index-header .icon_header[data-v-24039193]{width:100%;line-height:45px;position:relative;background:-moz-linear-gradient(left,#f15b6c,#ff6db2 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#f15b6c),color-stop(100%,#ff6db2));background:-webkit-linear-gradient(left,#f15b6c,#ff6db2);background:-o-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-ms-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-webkit-linear-gradient(right,#f15b6c,#ff6db2);background:linear-gradient(270deg,#f15b6c 0,#ff6db2)}.index-content .index-header .icon_header .index-search[data-v-24039193]{text-align:center;font-size:16px;color:#fff;position:relative;z-index:2;zoom:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:8px;margin:0 45px 0 10px;padding-bottom:6px}.index-content .index-header .icon_header .index-search .icon_search[data-v-24039193]{background:#f6f6f6;border-radius:%?40?%;-moz-border-radius:%?40?%;-webkit-border-radius:%?40?%;-o-border-radius:%?40?%;-ms-border-radius:%?40?%;height:%?66?%;line-height:%?66?%;font-size:%?26?%;color:#dcdcdc;text-align:left;text-indent:%?32?%;position:relative;z-index:1;zoom:1;transition:all .4s ease 0s;-o-transition:all .4s ease 0s;-moz-transition:all .4s ease 0s;-webkit-transition:all .4s ease 0s;-webkit-transform-origin:center;transform-origin:center}.icon_header .icon_search>.iconfont[data-v-24039193]{margin-right:%?20?%;top:1px;color:#ccc}.icon_header .icon_suji[data-v-24039193]{position:absolute;top:0;width:%?90?%;text-align:center;right:0;color:#fff}.icon-gender[data-v-24039193]{position:absolute;top:0;width:%?90?%;text-align:center;left:16px;color:#fff}.icon_header .icon_suji .icon-zuji[data-v-24039193]{font-size:%?40?%}.index-content .index-banner[data-v-24039193]{padding-top:40px;width:100%}.index-content .index-banner uni-swiper-item[data-v-24039193]{height:400px}.index-content .index-banner .swiper .swiper-container uni-image[data-v-24039193]{width:100%}.index-content .index-navlist[data-v-24039193]{\r\n    /*border-bottom: 10upx solid #f2f2f2*/}.index-content .index-navlist uni-image[data-v-24039193]{width:64px;height:64px}.index-content .home_ant_juhuasuan[data-v-24039193]{padding:0 5px;\r\n    /*border-bottom: 10upx solid #f2f2f2*/margin-bottom:6px}.index-content .home_ant_juhuasuan .fl-jutext[data-v-24039193]{font-size:0;height:45px;line-height:500px;overflow:hidden;-webkit-background-size:auto 18px;background-size:auto 18px;float:left;width:25%}.index-content .home_ant_juhuasuan .fr-jutext[data-v-24039193]{line-height:45px;background:url('+r+') 100% no-repeat;color:#999;-webkit-background-size:auto 11px;background-size:auto 11px;width:65%;float:right;text-align:right;padding-right:10px;font-size:14px}.index-content .juhuasuan-list[data-v-24039193]{clear:both;padding-bottom:10px}.index-content .juhuasuan-list .juhuasuan-list-goods[data-v-24039193]{width:25%;float:left}.index-content .juhuasuan-list .juhuasuan-list-goods .image[data-v-24039193]{display:block;margin:0 2px;border-radius:5px;overflow:hidden;position:relative;z-index:0}.index-content .juhuasuan-list .juhuasuan-list-goods .image uni-image[data-v-24039193]{width:91px\r\n    /* \theight: 91px; */}.index-content .juhuasuan-list .juhuasuan-list-goods .name[data-v-24039193]{position:absolute;left:0;bottom:0;height:20px;line-height:22px;font-size:12px;-moz-border-radius:3px;-webkit-border-radius:3px;-o-border-radius:3px;-ms-border-radius:3px;background:-webkit-linear-gradient(left,#f15b6c,#ff6db2);background:-o-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-ms-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-webkit-gradient(linear,right top,left top,color-stop(0,#f15b6c),to(#ff6db2));background:-o-linear-gradient(right,#f15b6c 0,#ff6db2 100%);background:-webkit-linear-gradient(right,#f15b6c,#ff6db2);background:linear-gradient(270deg,#f15b6c 0,#ff6db2);color:#fff;width:100%;overflow:hidden}.index-content .juhuasuan-list .juhuasuan-list-goods .name[data-v-24039193]:before{background:#ffe7c9;height:100px;position:absolute;-ms-transform:rotate(15deg);right:0;color:#fc3f78;padding-left:%?5?%;padding-right:%?5?%}.index-content .juhuasuan-list .juhuasuan-list-goods .name .pinname[data-v-24039193]{font-size:12px;line-height:20px}.index-content .index-coupon .coupon-tab[data-v-24039193]{margin:0 %?10?%}.index-content .index-coupon .coupon-tab .fl-jutext[data-v-24039193]{width:33.33333333%;font-size:%?30?%;color:#333}.index-content .index-coupon .coupon-tab .fl-jutext[data-v-24039193]:before{content:"";float:left;margin-top:3px;width:3px;height:18px;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-o-border-radius:3px;-ms-border-radius:3px;background:-o-linear-gradient(top,#ff5d06 0,#fc3f78 100%);background:-o-linear-gradient(bottom,#ff5d06 0,#fc3f78 100%);background:-webkit-gradient(linear,left bottom,left top,color-stop(0,#ff5d06),to(#fc3f78));background:-webkit-linear-gradient(bottom,#ff5d06,#fc3f78);background:linear-gradient(0deg,#ff5d06 0,#fc3f78);margin-right:5px}.index-content .index-coupon .coupon-tab .fr-jutext[data-v-24039193]{float:right;color:#aaa;font-size:14px;background:url('+r+') 100% no-repeat;-webkit-background-size:auto 11px;background-size:auto 11px;width:65%;text-align:right;padding-right:10px}.index-content .index-coupon .goods-list .coupon-page[data-v-24039193]{padding:10px}.index-content .index-coupon .goods-list .coupon-page .image[data-v-24039193]{float:left;width:40%}.index-content .index-coupon .goods-list .coupon-page .image uni-image[data-v-24039193]{width:%?240?%;height:%?240?%;border-radius:3px}.index-content .index-coupon .goods-list .coupon-page .content[data-v-24039193]{float:right;width:60%}.index-content .index-coupon .goods-list .coupon-page .content .title[data-v-24039193]{color:#333;font-weight:400;font-size:16px;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:42px;margin-bottom:20px;overflow:hidden}.index-content .index-coupon .goods-list .coupon-page .content .num[data-v-24039193]{color:#aaa;line-height:20px;font-size:13px;padding-top:13px}.index-content .index-coupon .goods-list .coupon-page .content .num .tmprice[data-v-24039193]{padding-right:10px;margin-right:10px;position:relative;z-index:1;zoom:1;display:inline-block}.index-content .index-coupon .goods-list .coupon-page .content .num .volume[data-v-24039193]{float:right}.index-content .index-coupon .goods-list .coupon-page .content .money[data-v-24039193]{height:24px;font-size:18px;margin-top:5px}.index-content .index-coupon .goods-list .coupon-page .content .money .quan[data-v-24039193]{padding:0;position:relative;z-index:1;zoom:1;top:0;overflow:hidden;float:right}.index-content .index-coupon .goods-list .coupon-page .content .money .quan[data-v-24039193]{\r\n    /*background: -moz-linear-gradient(left, #FC3F78 0, #FF927C 100%);*/\r\n    /*background: -webkit-gradient(linear, left top, left right, color-stop(0, #FC3F78), color-stop(100%, #FF927C));*/\r\n    /*background: -webkit-linear-gradient(left, #FC3F78 0, #FF927C 100%);*/\r\n    /*background: -o-linear-gradient(left, #FC3F78 0, #FF927C 100%);*/\r\n    /*background: -ms-linear-gradient(left, #FC3F78 0, #FF927C 100%);*/\r\n    /*background: linear-gradient(to left, #FC3F78 0, #FF927C 100%);*/background:-moz-linear-gradient(left,#fc3f78 0,#ff927c 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#fc3f78),color-stop(100%,#ff927c));background:-webkit-linear-gradient(left,#fc3f78,#ff927c);background:-o-linear-gradient(left,#fc3f78 0,#ff927c 100%);background:-ms-linear-gradient(left,#fc3f78 0,#ff927c 100%);background:-webkit-linear-gradient(right,#fc3f78,#ff927c);background:linear-gradient(270deg,#fc3f78 0,#ff927c);position:relative;z-index:1;zoom:1;font-style:normal;display:block;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-o-border-radius:3px;-ms-border-radius:3px;font-size:.785rem;min-width:3rem;text-align:center;padding:1px %?12?%;color:#fff}.index-content .index-coupon .goods-list .coupon-page .content .money .quan[data-v-24039193]:before{position:absolute;z-index:1;zoom:1;top:50%;margin-top:-3px;background:#fff;display:block;width:5px;height:5px;content:"";border-radius:10px;border:1px solid #fff;left:auto;right:-4px}.index-content .index-coupon .goods-list .coupon-page .content .money .quan[data-v-24039193]:after{position:absolute;z-index:1;zoom:1;top:50%;margin-top:-3px;background:#fff;display:block;width:5px;height:5px;content:"";border-radius:10px;border:1px solid #fff;left:-4px}.index-content .index-coupon .goods-list .coupon-page .content .money .coupon-price[data-v-24039193]{background:#fff;color:#fc3f78;font-size:12px}.index-content .index-coupon .goods-list .coupon-page .content .money .coupon-price uni-text[data-v-24039193]{font-size:16px;padding-left:5px}\r\n/*\r\n** 商品详情\r\n*/.index-goods[data-v-24039193]{width:100%}.index-goods .goods_info[data-v-24039193]{background:#fff;width:100%}.index-goods .goods_info .title[data-v-24039193]{padding:%?20?% %?10?%;font-size:%?32?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;color:#333}.index-goods .goods_info .title uni-text[data-v-24039193]{border:1px solid #fc3f78;color:#fc3f78;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;padding:0 5px;margin-right:5px;font-size:%?28?%;top:-1px}.index-goods .goods_info .coupon-price[data-v-24039193]{margin:%?10?% %?10?% 0 %?10?%;margin-top:%?0?%}.index-goods .goods_info .coupon-price .price[data-v-24039193]{float:left;font-size:%?30?%;color:#fc3f78;width:50%}.index-goods .goods_info .coupon-price .price uni-text[data-v-24039193]{font-size:%?46?%;font-weight:500}.index-goods .goods_info .coupon-price .volume[data-v-24039193]{float:right;font-size:%?30?%;color:#333;width:50%;text-align:right}.index-goods .goods_info .coupon-price .yprice[data-v-24039193]{float:left;color:#888;width:40%}.index-goods .goods_info .coupon-price .tag-list[data-v-24039193]{float:right;width:60%;text-align:right}.index-goods .goods_info .coupon-price .tag-list .tag[data-v-24039193]{text-align:right;float:right;margin-left:%?20?%;color:#888;font-size:%?28?%}.index-goods .goods_info .coupon-price .tag-list .tag .iconfont[data-v-24039193]{color:#fc3f78;margin-right:%?4?%}.index-goods .goods_quan[data-v-24039193]{background:#fff;position:relative;z-index:1;zoom:1}.index-goods .goods_quan[data-v-24039193]:before{content:"";width:2px;height:55%;background:url('+s+');-webkit-background-size:auto 100%;-moz-background-size:auto 100%;background-size:auto 100%;position:absolute;z-index:1;zoom:1;left:64%;top:20%;display:block}.index-goods .goods_quan .row[data-v-24039193]{display:block;position:absolute;z-index:1;zoom:1;left:0;top:0;width:100%;height:100%;text-align:center}.index-goods .goods_quan .row .money[data-v-24039193]{font-size:%?36?%;color:#fff;padding-top:6%;line-height:%?48?%;position:relative;z-index:1;zoom:1;left:.3rem}.index-goods .goods_quan .row .money .date-coupon[data-v-24039193]{font-size:12px;color:#fff}.index-goods .goods_quan .row .name[data-v-24039193]{line-height:100%;color:#fff;position:relative;z-index:1;zoom:1;top:50%;margin-top:-.6rem;text-align:left;font-weight:600}.index-goods .goods_quan .row .name uni-text[data-v-24039193]{margin-left:15%}.index-goods .goods_desc[data-v-24039193]{font-size:%?24?%;line-height:%?48?%;padding:%?10?% %?20?%;color:#888}.hr10[data-v-24039193]{background:#f5f5f5;height:%?10?%}.scroll_top[data-v-24039193]{background:rgba(51,51,51,.8);width:35px;height:35px;border-radius:35px;-moz-border-radius:35px;-webkit-border-radius:35px;-o-border-radius:35px;-ms-border-radius:35px;text-align:center;line-height:35px;color:#fff;position:fixed;z-index:1;zoom:1;right:20px;bottom:25px;opacity:0;-webkit-transform:translateY(100px) translateX(0);transform:translateY(100px) translateX(0);transition:all .4s ease 0s;-o-transition:all .4s ease 0s;-moz-transition:all .4s ease 0s;-webkit-transition:all .4s ease 0s;-webkit-transform-origin:center;transform-origin:center}.scroll_top.active[data-v-24039193]{opacity:1;-webkit-transform:translateY(-25px) translateX(0);transform:translateY(-25px) translateX(0)}.index-goods .goods_shop .info[data-v-24039193]{padding-top:%?20?%;min-height:%?120?%}.index-goods .goods_shop .info uni-image[data-v-24039193]{float:left;width:%?120?%;height:%?120?%;background:#f5f5f5;margin-left:%?20?%}.index-goods .goods_shop .info .shop-text[data-v-24039193]{position:relative;z-index:1;zoom:1;min-height:%?120?%;padding-left:%?160?%;line-height:%?60?%}.index-goods .goods_shop .info .shop-text .shop-title[data-v-24039193]{font-size:1.1rem;font-weight:400;margin-right:%?235?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.index-goods .goods_shop .info .shop-text .icon-taobao[data-v-24039193]{color:#ff5000}.index-goods .goods_shop .info .shop-text .icon-tianmaotmall[data-v-24039193]{color:#fc3f78}.index-goods .goods_shop .info .shop-text .shop-new[data-v-24039193]{position:absolute;z-index:1;zoom:1;right:%?20?%;top:50%;margin-top:-15px;font-size:%?30?%;color:#888}.index-goods .goods_shop .info .shop-text .shop-new .icon-youjiantou[data-v-24039193]{font-size:%?24?%}.index-goods .goods_shop .goods-tab[data-v-24039193]{margin-top:%?30?%;border-top:solid 1px #f5f5f5;font-size:%?30?%;color:#555;padding:%?20?%}.index-goods .goods_shop .goods-tab .lv_p[data-v-24039193]{color:#ff7800;margin-left:%?8?%}.index-goods .goods_shop .goods-tab .lv_d[data-v-24039193]{color:#2ca800;margin-left:%?8?%}.index-goods .goods_shop .goods-tab .lv_g[data-v-24039193]{color:#e31436;margin-left:%?8?%}.index-goods .goods_shop .goods-tab .is-col-8[data-v-24039193]:nth-child(2n):after,\r\n.index-goods .goods_shop .goods-tab .is-col-8[data-v-24039193]:nth-child(2n):before{position:absolute;z-index:1;zoom:1;left:0;top:50%;width:1px;height:1rem;margin-top:-.5rem;background:#eee;display:block;content:""}.index-goods .goods_shop .goods-tab .is-col-8[data-v-24039193]:nth-child(2n):after{left:auto;right:0}.index-goods .goods_reco[data-v-24039193]{background:#fff;margin-bottom:%?120?%}.index-goods .goods_reco .goods-info-title[data-v-24039193]{font-weight:400;text-align:center;font-size:%?28?%;height:%?80?%;line-height:%?80?%;color:#333}.index-goods .goods_reco .imglist[data-v-24039193]{max-width:100%}.index-goods .goods_shop_cart[data-v-24039193]{position:fixed;zoom:1;bottom:0;z-index:500;left:0;width:100%}.index-goods .goods_shop_cart .cent[data-v-24039193]{position:relative;zoom:1;z-index:5;background:#fff;box-shadow:0 -2px 2px 0 rgba(0,0,0,.1)}.index-goods .goods_shop_cart .but .img[data-v-24039193]{position:relative;z-index:1;zoom:1;padding-top:8px;height:28px}.index-goods .goods_shop_cart .but .img uni-image[data-v-24039193]{height:23px;width:23px}.index-goods .goods_shop_cart .but .img .iconfont[data-v-24039193]{font-size:20px;color:#777;top:1px}.index-goods .goods_shop_cart .is-col-16[data-v-24039193]{color:#fff;border:0;padding:0;height:43px;line-height:43px;position:relative;z-index:1;zoom:1;top:10px;background:-webkit-linear-gradient(right,#fc3f78,#fe9f69);background:linear-gradient(270deg,#fc3f78 0,#fe9f69);width:65%}.index-goods .goods_shop_cart .is-col-16 .btn uni-view[data-v-24039193]{height:41px;color:#fff;text-align:center}.index-goods .goods_shop_cart .is-col-16 .btn .tkl[data-v-24039193]{background:#fff;color:#fe9f69;zoom:1;top:1px;left:1px;z-index:5;position:relative\r\n    /* \tborder-radius: 3px 0 0 3px; */}.index-goods .goods_shop_cart .is-col-16 .btn .coupon-buy[data-v-24039193]{background:-webkit-linear-gradient(right,#fc3f78,#fbaa58);background:linear-gradient(270deg,#fc3f78 0,#fbaa58);height:42px}.index-goods .goods_shop_cart_bg[data-v-24039193]{width:100%;height:100%;position:fixed;z-index:50;background:#000;left:0;top:0;\r\n    /*  display: none; */opacity:.5}.index-goods .goods_share[data-v-24039193]{position:fixed;left:2.5%;width:95%;background:#fff;border-radius:4px;opacity:0;bottom:-200px;transition:all .3s cubic-bezier(.4,.68,.15,1.21) .2s;-o-transition:all .3s cubic-bezier(.4,.68,.15,1.21) .2s;-moz-transition:all .3s cubic-bezier(.4,.68,.15,1.21) .2s;-webkit-transition:all .3s cubic-bezier(.4,.68,.15,1.21) .2s;z-index:0}.index-goods .goods_share.active[data-v-24039193]{opacity:1;bottom:60px;z-index:100}.index-goods .goods_share .cent uni-view[data-v-24039193]{height:56px;line-height:36px;text-align:center;color:#666;display:block;font-size:16px;padding:10px 0}.index-goods .goods_share .cent uni-view[data-v-24039193]:nth-child(2){border-bottom:solid 1px #eee}.index-goods .goods_share .cent uni-view .iconfont[data-v-24039193]{margin-right:%?10?%}.index-goods .goods_share .cent .em[data-v-24039193]{position:absolute;left:44%;bottom:-10px;width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid #fff}.navBarButton[data-v-24039193]{z-index:501!important}.index-goods .h_newlit[data-v-24039193]{z-index:-50;top:45px;right:0;border:1px solid #ddd;width:35%;-o-transition:all .4s ease 0s;-moz-transition:all .4s ease 0s;-webkit-transition:all .4s ease 0s;opacity:0;-webkit-transform:translateY(0) translateX(100%);transform:translateY(0) translateX(100%);padding-bottom:5px;-moz-box-shadow:-1px 1px 3px hsla(0,0%,49%,.2);-webkit-box-shadow:-1px 1px 3px hsla(0,0%,49%,.2);box-shadow:-1px 1px 3px hsla(0,0%,49%,.2)}.index-goods .h_newlit.active[data-v-24039193]{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1;position:fixed;z-index:600;zoom:1}.index-goods .h_newlit[data-v-24039193]{width:120px;text-align:center;background:rgba(51,51,51,.9);border:0;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;-o-border-radius:5px;-ms-border-radius:5px;overflow:inherit;right:.5rem\r\n    /*margin-top: 50upx;*/}.index-goods .h_newlit .em[data-v-24039193]{position:relative;z-index:5;zoom:1}.index-goods .h_newlit .em[data-v-24039193]:before{content:"";position:absolute;z-index:601;zoom:1;top:-7px;right:10px;width:17px;height:12px}.index-goods .h_newlit .em[data-v-24039193]:before{width:0;height:0;border-left:7px transparent solid;border-right:7px transparent solid;border-bottom:7px rgba(51,51,51,.9) solid;border-top:none;position:absolute;z-index:601;zoom:1;right:8px;top:-7px}.index-goods .h_newlit .em uni-view[data-v-24039193]{border-bottom:solid 1px hsla(0,0%,40%,.9);color:#fff;font-size:1rem;line-height:44px}.index-goods .h_newlit .em uni-view[data-v-24039193]:last-child{border-bottom:0}.index-goods .h_newlit .em uni-view .iconfont[data-v-24039193]{margin-right:%?10?%}.buy-box-title[data-v-24039193]{height:40px;line-height:40px;text-align:center;background:-webkit-linear-gradient(left,#fc3f78,#ffbf63);background:linear-gradient(90deg,#fc3f78,#ffbf63);-webkit-background-clip:text;color:transparent;font-size:18px;padding:5px 0}.buy-box-title .iconfont[data-v-24039193]{right:7px;color:#999;position:absolute;font-size:23px;top:-1px}.buy-box-center .code-cent[data-v-24039193]{margin:0 10px}.buy-box-center .cente-text[data-v-24039193]{margin:0 10px;padding:10px 0;background:#f1f1f1;color:#333;font-size:14px;line-height:24px;height:260px;border-radius:4px;overflow:hidden;text-align:left}.buy-box-center .cente-text .textarea[data-v-24039193]{padding:10px}.buy-box-center .code-cent .closeTips[data-v-24039193]{text-align:left;line-height:22px;color:#aaa;font-size:12px;padding-top:10px;margin-left:10px}.buy-box-center .buy-btn-copy[data-v-24039193]{background:-webkit-linear-gradient(right,#fc3f78,#fb85f7);background:linear-gradient(270deg,#fc3f78 0,#fb85f7);display:block;border-radius:50px;line-height:40px;height:40px;text-align:center;color:#fff;font-size:16px;width:90%;margin:0 auto;margin-top:10px;margin-bottom:10px}.buy-box-center .buy-btn-copy.active[data-v-24039193]{background:#1fb931}.buy-box-center .code-pic-info[data-v-24039193]{height:119px}.navBarButtonBox[data-v-24039193]{width:0;height:0;overflow:hidden}.getTbk[data-v-24039193]{background:-moz-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#fc3f78),color-stop(100%,#fbaa58));background:-webkit-linear-gradient(left,#fc3f78,#fbaa58);background:-o-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-ms-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-webkit-linear-gradient(right,#fc3f78,#fbaa58);background:linear-gradient(270deg,#fc3f78 0,#fbaa58)}\r\n/*\r\n\t9.9包邮\r\n*/.jiu-page .main-title[data-v-24039193]{background:-moz-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#fc3f78),color-stop(100%,#fbaa58));background:-webkit-linear-gradient(left,#fc3f78,#fbaa58);background:-o-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-ms-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-webkit-linear-gradient(right,#fc3f78,#fbaa58);background:linear-gradient(270deg,#fc3f78 0,#fbaa58);border-bottom-color:transparent;padding:10px;position:fixed;top:0;left:0;width:100%;z-index:120;display:block;box-sizing:border-box;\n}.jiu-page .main-title .menu-cat[data-v-24039193]{font-family:Simhei;font-size:17px;height:28px;line-height:28px;color:#fff;text-align:center}.jiu-page .main-title .menu-cat .span[data-v-24039193]{position:relative;cursor:pointer;padding:6px 22px 6px 15px;text-align:center}.jiu-page .main-title .menu-cat .span uni-image[data-v-24039193]{width:65px;height:22px;margin-left:42%}.dianpu[data-v-24039193]{color:#999;position:absolute;margin-top:%?12?%;width:49%;padding-left:%?8?%}uni-page-body[data-v-24039193]{background:#FF6DB2；}.back-btn[data-v-24039193]{position:absolute;left:20px;z-index:9999;padding-top:0;top:20px;font-size:20px;color:#fff}uni-image > div[data-v-24039193],\r\nuni-image > img[data-v-24039193]{width:102%;height:100%}.content[data-v-24039193]{text-align:center;position:absolute;height:100%;width:100%;background-size:cover}body.?%PAGE?%[data-v-24039193]{background:#FF6DB2；}',""]),o.exports=t}}]);