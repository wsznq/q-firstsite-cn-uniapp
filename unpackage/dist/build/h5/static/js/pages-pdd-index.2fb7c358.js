(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pdd-index"],{"33ac":function(t,e,i){"use strict";var a=i("dc18"),n=i.n(a);n.a},"452c":function(t,e,i){"use strict";i.r(e);var a=i("cf90"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},8533:function(t,e,i){"use strict";i.r(e);var a=i("aed9"),n=i("452c");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("33ac");var d,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"fd53a1f8",null,!1,a["a"],d);e["default"]=l.exports},aed9:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index-content"},[i("v-uni-view",{staticClass:"navbar"},t._l(t.category,(function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-item",class:{current:t.tabFromIndex===a+1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClicks(e.position)}}},[t._v(t._s(e.name))])})),1),i("v-uni-view",{staticClass:"index-coupon has-bg-white has-pd-10 top_30"},[t.couponlist.length>0?i("v-uni-view",{staticClass:"goods-list"},t._l(t.couponlist,(function(e,a){return i("orange-goods-card-home",{attrs:{index:a%2,logo:t.pddlogo,tkmoney:e.tkmoney,tkmoneys:e.tkmoneys,itemid:e.itemid,isEnable:t.isEnable,"is-invitation":t.isInvitation,itempic:e.itempic,itemtitle:e.itemtitle,itemprice:"¥"+e.itemprice,itemsale:"已售 "+e.salestip,itemendprice:e.itemendprice,couponmoney:e.couponmoney,item:e}})})),1):t._e()],1),t.couponlist.length>0?i("v-uni-view",{staticClass:"s-col is-col-24"},[i("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}})],1):t._e(),i("v-uni-view",{staticClass:"scroll_top",class:[t.scrollTop?"active":"",""],staticStyle:{bottom:"56px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.topScrollTap.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-shangla"})],1),0===t.couponlist.length?i("empty",{attrs:{des:"暂无数据",show:"false"}}):t._e()],1)},o=[]},bc89:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */uni-page-body[data-v-fd53a1f8],\r\n.content[data-v-fd53a1f8]{background:#f8f8f8;height:100%}.swiper-box[data-v-fd53a1f8]{height:calc(100% - 40px)}.list-scroll-content[data-v-fd53a1f8]{height:100%}.navbar[data-v-fd53a1f8]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.06);box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-fd53a1f8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-fd53a1f8]{color:#ff6db2}.navbar .nav-item.current[data-v-fd53a1f8]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #ff6db2}.uni-swiper-item[data-v-fd53a1f8]{height:auto}.order-item[data-v-fd53a1f8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-left:15px;background:#fff;margin-top:8px\r\n  /* 单条商品 */}.order-item .i-top[data-v-fd53a1f8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:40px;padding-right:16px;font-size:%?28?%;color:#303133;position:relative}.order-item .i-top .time[data-v-fd53a1f8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.order-item .i-top .state[data-v-fd53a1f8]{font-weight:400;color:#ff6db2}.order-item .i-top .del-btn[data-v-fd53a1f8]{padding:6px 0 6px 18px;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-fd53a1f8]:after{content:"";width:0;height:16px;border-left:1px solid #dcdfe6;position:absolute;left:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box-single[data-v-fd53a1f8]{display:-webkit-box;display:-webkit-flex;display:flex;padding:10px 0}.order-item .goods-box-single .goods-img[data-v-fd53a1f8]{width:60px;height:60px}.order-item .goods-box-single .right[data-v-fd53a1f8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 15px 0 12px;overflow:hidden}.order-item .goods-box-single .right .title[data-v-fd53a1f8]{height:32px;overflow:hidden;text-overflow:ellipsis;font-size:%?30?%;color:#303133;line-height:1}.order-item .goods-box-single .right .attr-box[data-v-fd53a1f8]{font-size:%?26?%;color:#909399;padding:5px 0}.order-item .goods-box-single .right .price[data-v-fd53a1f8]{font-size:%?30?%;color:#303133}.order-item .goods-box-single .right .price[data-v-fd53a1f8]:before{font-size:%?24?%;margin:0 1px 0 4px}.order-item .price-box[data-v-fd53a1f8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:10px 16px;font-size:%?26?%;color:#909399}.order-item .price-box .num[data-v-fd53a1f8]{margin:0 4px;color:#303133}.order-item .price-box .price[data-v-fd53a1f8]{font-size:%?32?%;color:#303133}.order-item .price-box .price[data-v-fd53a1f8]:before{content:"￥";font-size:%?24?%;margin:0 1px 0 4px}.order-item .action-box[data-v-fd53a1f8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:50px;position:relative;padding-right:16px}.order-item .action-btn[data-v-fd53a1f8]{width:80px;height:30px;margin:0;margin-left:12px;padding:0;text-align:center;line-height:30px;font-size:%?26?%;color:#303133;background:#fff;-webkit-border-radius:100px;border-radius:100px}.order-item .action-btn[data-v-fd53a1f8]:after{-webkit-border-radius:100px;border-radius:100px}.order-item .action-btn.recom[data-v-fd53a1f8]{background:#fff9f9;color:#ff6db2}.order-item .action-btn.recom[data-v-fd53a1f8]:after{border-color:#f7bcc8}\r\n/* load-more */.uni-load-more[data-v-fd53a1f8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:40px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-fd53a1f8]{font-size:14px;color:#999}.uni-load-more__img[data-v-fd53a1f8]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-fd53a1f8]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-fd53a1f8]{width:6px;height:2px;-webkit-border-top-left-radius:1px;border-top-left-radius:1px;-webkit-border-bottom-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-fd53a1f8 1.56s ease infinite;animation:load-data-v-fd53a1f8 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-fd53a1f8]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-fd53a1f8]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-fd53a1f8]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-fd53a1f8]:nth-child(4){top:11px;left:0}.load1[data-v-fd53a1f8],\r\n.load2[data-v-fd53a1f8],\r\n.load3[data-v-fd53a1f8]{height:24px;width:24px}.load2[data-v-fd53a1f8]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-fd53a1f8]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-fd53a1f8]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-fd53a1f8]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-fd53a1f8]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-fd53a1f8]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-fd53a1f8]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-fd53a1f8]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-fd53a1f8]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-fd53a1f8]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-fd53a1f8]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-fd53a1f8]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-fd53a1f8]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-fd53a1f8]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-fd53a1f8{0%{opacity:1}100%{opacity:.2}}body.?%PAGE?%[data-v-fd53a1f8]{background:#f8f8f8}',""]),t.exports=e},cf90:function(t,e,i){"use strict";i("4160"),i("b680"),i("acd8"),i("e25e"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{pddlogo:"../../static/img/pinduoduo.png",tabFromIndex:5,category:[{position:5,name:"实时热销榜"},{position:6,name:"实时收益榜"}],genderKey:"gender",TabCur:0,scrollLeft:0,scrollTop:!1,couponlist:[],page:1,isInvitation:0,cid:0,loadingType:0,isEnable:"否",contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(t){var e=this.$queue.getData("isEnable");e&&(this.isEnable=e),this.loadPddCouponList(),this.getUserInfo()},onPageScroll:function(t){this.scrollTop=t.scrollTop>200},methods:{loadPddCouponList:function(t){var e=this;uni.showLoading({title:"加载中..."});var i=this.$Api.common.coupontoplist_pdd;this.loadingType=1,this.$Request.getT(i,{ChannelType:this.tabFromIndex,PageNo:this.page}).then((function(i){e.loadingType=0,1===i.Code?(1===e.page&&(e.couponlist=[]),i.Message.forEach((function(t){t.tkmoneys=(.7*t.tkmoney).toFixed(2);var i=e.$queue.getData("grade");t.tkmoney=i?(t.tkmoney*parseFloat(i)).toFixed(2):(.3*t.tkmoney).toFixed(2),t.itemsale=t.itemsale>1e4?"已售 "+(t.itemsale/1e4).toFixed(1)+"万":"已售 "+t.itemsale,e.couponlist.push(t)}))):e.loadingType=2,uni.hideLoading(),"Refresh"===t&&uni.stopPullDownRefresh()}))},getUserInfo:function(){var t=this,e=this.$queue.getData("userId");e&&this.$Request.getT("/user/"+e).then((function(e){0===e.status&&(t.$queue.setData("image_url",e.data.image_url),t.$queue.setData("mobile",e.data.phone),t.isInvitation=e.data.isInvitation,t.$queue.setData("isInvitation",e.data.isInvitation),t.$queue.setData("relation",e.data.invitation),t.$queue.setData("grade",e.data.grade),t.$queue.setData("nickName",e.data.nickName),t.$queue.setData("relation_id",e.data.relationId),t.$queue.setData("gender",parseInt(e.data.gender)))}))},tabClicks:function(t){this.tabFromIndex=t,this.loadPddCouponList()},topScrollTap:function(){uni.pageScrollTo({scrollTop:0,duration:300})}},onReady:function(){this.loadPddCouponList()},onReachBottom:function(){this.page=this.page+1,this.loadPddCouponList()},onPullDownRefresh:function(){this.page=1,this.loadPddCouponList("Refresh")}};e.default=a},dc18:function(t,e,i){var a=i("bc89");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1d00caa2",a,!0,{sourceMap:!1,shadowMode:!1})}}]);