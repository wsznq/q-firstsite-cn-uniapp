(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invitation-order"],{"0bc3":function(t,e,i){var a=i("50c2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7f5fd7e1",a,!0,{sourceMap:!1,shadowMode:!1})},1756:function(t,e,i){"use strict";var a=i("4ea4");i("4de4"),i("4160"),i("b680"),i("acd8"),i("e25e"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("4865")),o=a(i("88d9")),r={components:{uniLoadMore:n.default,empty:o.default},data:function(){return{tabCurrentIndex:0,scrollTop:!1,nowPaied:0,lastPaied:0,nowOver:0,lastOver:0,navList:[{state:12,text:"已付款",page:0,loadingType:"more",orderList:[]},{state:3,text:"已结算",page:0,loadingType:"more",orderList:[]}]}},onPageScroll:function(t){this.scrollTop=t.scrollTop>200},onLoad:function(t){this.tabCurrentIndex=parseInt(t.state),this.loadData(),this.getMoney()},methods:{yaoqing:function(){uni.navigateTo({url:"/pages/invitation/persons"})},tuiuang:function(){uni.navigateTo({url:"/pages/member/yao"})},sucai:function(){uni.navigateTo({url:"/pages/share/share"})},getMoney:function(){var t=this,e=this.$queue.getData("relation_id");this.$Request.getT("/order/now/count?relation_id="+e+"&tk_status=12").then((function(e){0===e.status&&e.data?t.nowPaied=parseFloat(e.data).toFixed(1):t.nowPaied="0"})),this.$Request.getT("/order/now/count?relation_id="+e+"&tk_status=3").then((function(e){0===e.status&&e.data?t.nowOver=parseFloat(e.data).toFixed(1):t.nowOver="0"})),this.$Request.getT("/order/invitation/count?relation_id="+e+"&tk_status=3").then((function(e){0===e.status&&e.data?t.lastOver=parseFloat(e.data).toFixed(1):t.lastOver="0"}))},loadMore:function(){var t=this.tabCurrentIndex;this.navList[t].page=this.navList[t].page+1,this.loadData()},topScrollTap:function(){uni.pageScrollTo({scrollTop:0,duration:300})},toGoodsInfo:function(t){var e=this.$queue.getData("relation_id");e?uni.navigateTo({url:"/pages/detail/goodsinfo?itemid="+t+"&relation_id="+e}):uni.navigateTo({url:"/pages/detail/goodsinfo?itemid="+t})},loadData:function(t){var e=this,i=this.tabCurrentIndex,a=this.navList[i],n=a.state,o=a.page;if(("tabChange"!==t||!0!==a.loaded)&&"loading"!==a.loadingType&&"noMore"!==a.loadingType){a.loadingType="loading";var r=this.$queue.getData("relation_id");r&&"undefined"!==r?this.$Request.getT("/order/invitation/list?relation_id="+r+"&tk_status="+n+"&page="+o+"&size=10").then((function(t){if(0===t.status){var i=t.data.content,n=i.filter((function(t){return t=Object.assign(t,e.orderStateExp(t.tk_status)),t}));n.forEach((function(t){t.image="http:"+t.item_img,a.orderList.push(t)})),t.data.totalElements===a.orderList.length?a.loadingType="noMore":a.loadingType="more",e.$set(a,"loaded",!0)}else-102===t.status?(e.$queue.showToast(t.msg),e.$queue.logout(),uni.navigateTo({url:"/pages/public/login"})):e.$queue.showToast(t.msg)})):(a.loadingType="noMore",this.$set(a,"loaded",!0))}},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t},orderStateExp:function(t){var e="",i="#FF6DB2";switch(+t){case 12:e="已付款";break;case 14:e="已收货";break;case 3:e="已结算";break;case 4:e="维权退款";break;case 13:e="已失效",i="#909399";break}return{stateTip:e,stateTipColor:i}}}};e.default=r},4865:function(t,e,i){"use strict";i.r(e);var a=i("d321"),n=i("d172");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("fd69");var r,d=i("f0c5"),l=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"788e84f3",null,!1,a["a"],r);e["default"]=l.exports},"50c2":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-load-more[data-v-788e84f3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-788e84f3]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-788e84f3]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-788e84f3]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-788e84f3 1.56s ease infinite;animation:load-data-v-788e84f3 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-788e84f3]:nth-child(4){top:11px;left:0}.load1[data-v-788e84f3],\n.load2[data-v-788e84f3],\n.load3[data-v-788e84f3]{height:24px;width:24px}.load2[data-v-788e84f3]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-788e84f3]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-788e84f3]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-788e84f3]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-788e84f3]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-788e84f3]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-788e84f3]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-788e84f3]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-788e84f3]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-788e84f3]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-788e84f3]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-788e84f3]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-788e84f3]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-788e84f3]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-788e84f3{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},"9cad":function(t,e,i){"use strict";var a=i("d86d"),n=i.n(a);n.a},b359:function(t,e,i){"use strict";i.r(e);var a=i("de3f"),n=i("d72c");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9cad");var r,d=i("f0c5"),l=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"3fe2b984",null,!1,a["a"],r);e["default"]=l.exports},b617:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */uni-page-body[data-v-3fe2b984], .content[data-v-3fe2b984]{background:#f8f8f8;height:100%}.swiper-box[data-v-3fe2b984]{height:calc(100% - 40px)}.list-scroll-content[data-v-3fe2b984]{height:100%}.navbar[data-v-3fe2b984]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-3fe2b984]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-3fe2b984]{color:#ff6db2}.navbar .nav-item.current[data-v-3fe2b984]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #ff6db2}.uni-swiper-item[data-v-3fe2b984]{height:auto}.order-item[data-v-3fe2b984]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-left:15px;background:#fff;margin-top:8px\r\n  /* 单条商品 */}.order-item .i-top[data-v-3fe2b984]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:40px;padding-right:16px;font-size:%?28?%;color:#303133;position:relative}.order-item .i-top .time[data-v-3fe2b984]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.order-item .i-top .state[data-v-3fe2b984]{font-weight:400;color:#ff6db2}.order-item .i-top .del-btn[data-v-3fe2b984]{padding:6px 0 6px 18px;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-3fe2b984]:after{content:"";width:0;height:16px;border-left:1px solid #dcdfe6;position:absolute;left:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box-single[data-v-3fe2b984]{display:-webkit-box;display:-webkit-flex;display:flex;padding:10px 0}.order-item .goods-box-single .goods-img[data-v-3fe2b984]{width:60px;height:60px}.order-item .goods-box-single .right[data-v-3fe2b984]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 15px 0 12px;overflow:hidden}.order-item .goods-box-single .right .title[data-v-3fe2b984]{height:32px;overflow:hidden;text-overflow:ellipsis;font-size:%?30?%;color:#303133;line-height:1}.order-item .goods-box-single .right .attr-box[data-v-3fe2b984]{font-size:%?26?%;color:#909399;padding:5px 0}.order-item .goods-box-single .right .price[data-v-3fe2b984]{font-size:%?30?%;color:#303133}.order-item .goods-box-single .right .price[data-v-3fe2b984]:before{font-size:%?24?%;margin:0 1px 0 4px}.order-item .price-box[data-v-3fe2b984]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:10px 16px;font-size:%?26?%;color:#909399}.order-item .price-box .num[data-v-3fe2b984]{margin:0 4px;color:#303133}.order-item .price-box .price[data-v-3fe2b984]{font-size:%?32?%;color:#303133}.order-item .price-box .price[data-v-3fe2b984]:before{content:"￥";font-size:%?24?%;margin:0 1px 0 4px}.order-item .action-box[data-v-3fe2b984]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:50px;position:relative;padding-right:16px}.order-item .action-btn[data-v-3fe2b984]{width:80px;height:30px;margin:0;margin-left:12px;padding:0;text-align:center;line-height:30px;font-size:%?26?%;color:#303133;background:#fff;border-radius:100px}.order-item .action-btn[data-v-3fe2b984]:after{border-radius:100px}.order-item .action-btn.recom[data-v-3fe2b984]{background:#fff9f9;color:#ff6db2}.order-item .action-btn.recom[data-v-3fe2b984]:after{border-color:#f7bcc8}\r\n/* load-more */.uni-load-more[data-v-3fe2b984]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:40px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-3fe2b984]{font-size:14px;color:#999}.uni-load-more__img[data-v-3fe2b984]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-3fe2b984]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-3fe2b984]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-3fe2b984 1.56s ease infinite;animation:load-data-v-3fe2b984 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-3fe2b984]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-3fe2b984]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-3fe2b984]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-3fe2b984]:nth-child(4){top:11px;left:0}.load1[data-v-3fe2b984],\r\n.load2[data-v-3fe2b984],\r\n.load3[data-v-3fe2b984]{height:24px;width:24px}.load2[data-v-3fe2b984]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-3fe2b984]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-3fe2b984]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-3fe2b984]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-3fe2b984]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-3fe2b984]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-3fe2b984]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-3fe2b984]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-3fe2b984]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-3fe2b984]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-3fe2b984]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-3fe2b984]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-3fe2b984]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-3fe2b984]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-3fe2b984{0%{opacity:1}100%{opacity:.2}}body.?%PAGE?%[data-v-3fe2b984]{background:#f8f8f8}',""]),t.exports=e},d172:function(t,e,i){"use strict";i.r(e);var a=i("f68e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},d321:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[]},d72c:function(t,e,i){"use strict";i.r(e);var a=i("1756"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},d86d:function(t,e,i){var a=i("b617");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("485aa985",a,!0,{sourceMap:!1,shadowMode:!1})},de3f:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniLoadMore:i("4865").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{display:"flex","text-align":"center",background:"white",padding:"16px"}},[i("v-uni-view",{staticStyle:{width:"33.3%"}},[t._v("本月结算"),i("v-uni-view",{staticStyle:{color:"#FF6DB2"}},[t._v("￥"+t._s(t.nowOver))])],1),i("v-uni-view",{staticStyle:{width:"33.3%"}},[t._v("上月结算"),i("v-uni-view",{staticStyle:{color:"#FF6DB2"}},[t._v("￥"+t._s(t.lastOver))])],1),i("v-uni-view",{staticStyle:{width:"33.3%"}},[t._v("本月付款"),i("v-uni-view",{staticStyle:{color:"#FF6DB2"}},[t._v("￥"+t._s(t.nowPaied))])],1)],1),i("v-uni-view",{staticStyle:{"text-align":"center","font-size":"12px",background:"white","padding-bottom":"8px"}},[t._v("(佣金结算规则：只有代理等级是会员才可得到返佣)")]),i("v-uni-view",{staticStyle:{background:"white","text-align":"center","padding-bottom":"16px"}},[i("v-uni-text",{staticStyle:{"margin-right":"8px",color:"black","font-weight":"bold"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yaoqing()}}},[t._v("成员中心")]),t._v("|"),i("v-uni-text",{staticStyle:{"margin-left":"8px","margin-right":"8px","font-weight":"bold"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tuiuang()}}},[t._v("推广中心")]),t._v("|"),i("v-uni-text",{staticStyle:{"margin-left":"8px","font-weight":"bold"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sucai()}}},[t._v("素材推广")])],1),i("v-uni-view",{staticClass:"navbar"},t._l(t.navList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-item",class:{current:t.tabCurrentIndex===a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a)}}},[t._v(t._s(e.text))])})),1),i("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.tabCurrentIndex,duration:"300"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}}},t._l(t.navList,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"tab-content"},[i("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"lower-threshold":!0,"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[!0===e.loaded&&0===e.orderList.length?i("empty",{attrs:{des:"暂无数据"}}):t._e(),t._l(e.orderList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"order-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoodsInfo(e.item_id)}}},[i("v-uni-view",{staticClass:"i-top b-b"},[i("v-uni-text",{staticClass:"time",staticStyle:{"font-size":"14px",color:"grey"}},[t._v(t._s(e.tk_paid_time)+"付款")]),i("v-uni-text",{staticClass:"state",style:{color:e.stateTipColor}},[t._v(t._s(e.stateTip))])],1),i("v-uni-view",{staticClass:"goods-box-single"},[i("v-uni-image",{staticClass:"goods-img",attrs:{src:e.image}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.item_title))]),i("v-uni-text",{staticClass:"attr-box"},[t._v("店铺名称 "+t._s(e.seller_shop_title))]),i("v-uni-text",{staticClass:"price"},[t._v("实付款 ￥"+t._s(e.alipay_total_price))])],1)],1),i("v-uni-view",{staticClass:"price-box"},[t._v("代理【"+t._s(e.relation_id)+"】预估收入"),i("v-uni-text",{staticClass:"price",staticStyle:{color:"black"}},[t._v(t._s(13!==e.tk_status?e.pub_share_pre_fee_user:"--"))])],1),i("v-uni-view",{staticClass:"price-box"},[t._v("我的预估提成"),i("v-uni-text",{staticClass:"price",staticStyle:{color:"#F15B6C","font-weight":"bold"}},[t._v(t._s(13!==e.tk_status?e.invitationMoney:"--"))])],1)],1)})),i("uni-load-more",{attrs:{status:e.loadingType}})],2)],1)})),1)],1)},o=[]},f68e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=a},fd69:function(t,e,i){"use strict";var a=i("0bc3"),n=i.n(a);n.a}}]);