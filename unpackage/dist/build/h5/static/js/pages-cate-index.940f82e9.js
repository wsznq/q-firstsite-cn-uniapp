(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cate-index"],{"0c09":function(o,t,a){"use strict";a.r(t);var e=a("ea5d"),i=a("f91b");for(var n in i)"default"!==n&&function(o){a.d(t,o,(function(){return i[o]}))}(n);a("fa92");var d,r=a("f0c5"),f=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"fadf2ba2",null,!1,e["a"],d);t["default"]=f.exports},5151:function(o,t,a){var e=a("eb27");"string"===typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);var i=a("4f06").default;i("49bc8182",e,!0,{sourceMap:!1,shadowMode:!1})},"7b7c":function(o,t,a){"use strict";a("4160"),a("b680"),a("acd8"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={onShareAppMessage:function(o){return{title:"购物先领券，一年省一半",path:"/pages/index/index"}},data:function(){return{category:[{name:"热门抖货",position:1,total:0,data:[]},{name:"百变穿搭",position:2,total:0,data:[]},{name:"包罗万象",position:3,total:0,data:[]},{name:"美妆达人",position:4,total:0,data:[]},{name:"魅力配饰",position:5,total:0,data:[]},{name:"步履不停",position:6,total:0,data:[]},{name:"宝妈神器",position:7,total:0,data:[]},{name:"居家好物",position:8,total:0,data:[]},{name:"吃货专区",position:9,total:0,data:[]},{name:"数码达人",position:10,total:0,data:[]},{name:"时尚潮男",position:11,total:0,data:[]}],genderKey:"gender",TabCur:0,scrollLeft:0,scrollTop:!1,couponlist:[],page:1,isInvitation:0,position:1,sort:4,loadingType:0,isEnable:"否",deviceValue:"",contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(o){var t=this.$queue.getData("isEnable");t&&(this.isEnable=t),uni.showLoading({title:"加载中..."}),this.loadCouponList(),this.$queue.getUserInfo()},onPageScroll:function(o){this.scrollTop=o.scrollTop>200},methods:{tabSelect:function(o){uni.showLoading({title:"加载中..."}),this.TabCur=o.currentTarget.dataset.id,this.position=this.category[o.currentTarget.dataset.id].position,this.scrollLeft=60*(o.currentTarget.dataset.id-1),this.page=1,uni.pageScrollTo({scrollTop:0,duration:300}),this.loadCouponList("Refresh")},topScrollTap:function(){uni.pageScrollTo({scrollTop:0,duration:300})},loadCouponList:function(o){var t=this,a="3756";console.log("----position----"+this.position),1===this.position?a="3756":2===this.position?a="3767":3===this.position?a="3765":4===this.position?a="3763":5===this.position?a="3762":6===this.position?a="3766":7===this.position?a="3760":8===this.position?a="3758":9===this.position?a="3761":10===this.position?a="3759":11===this.position&&(a="3764");var e=this.$Api.common.couponbestlist;console.log("----DENG-Begin---"),console.log("----apiUrl----"+e),console.log("----materialId----"+a),console.log("----this.page----"+this.page),console.log("----this.deviceValue----"+this.deviceValue),console.log("----DENG-End---"),this.loadingType=1,uni.showLoading({title:"加载中..."}),this.$Request.get(e,{MaterialId:a,HasCoupon:!0,PageNo:this.page,DeviceValue:this.deviceValue}).then((function(a){console.log(a),t.loadingType=0,1===a.Code?(1===t.page&&(t.couponlist=[]),a.Message.forEach((function(o){var a=t.$queue.getData("grade");o.tkmoneys=(.7*o.tkmoney).toFixed(2),o.tkmoney=a?(o.tkmoney*parseFloat(a)).toFixed(2):(.3*o.tkmoney).toFixed(2),o.itemsale=o.itemsale>1e4?"已售 "+(o.itemsale/1e4).toFixed(1)+"万":"已售 "+o.itemsale,t.couponlist.push(o)}))):t.loadingType=2,"Refresh"===o&&uni.stopPullDownRefresh(),uni.hideLoading()}))}},onReady:function(){this.loadCouponList()},onReachBottom:function(){this.page=this.page+1,this.loadCouponList()},onPullDownRefresh:function(){this.page=1,this.min_id=1,this.loadCouponList("Refresh")}};t.default=e},ea5d:function(o,t,a){"use strict";var e;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return e}));var i=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("v-uni-view",{staticClass:"index-content"},[a("v-uni-scroll-view",{staticClass:"bg-white nav",staticStyle:{position:"fixed","z-index":"100","border-bottom":"1px solid ghostwhite"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":o.scrollLeft}},o._l(o.category,(function(t,e){return a("v-uni-view",{key:e,staticClass:"cu-item",class:e==o.TabCur?"text-green cur":"",attrs:{"data-id":e},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.tabSelect.apply(void 0,arguments)}}},[a("v-uni-text",{style:e==o.TabCur?"background: #FC3F78;color: white;padding: 4px 10px 4px 10px;border-radius: 16px;margin-right: -10px":"background: #ffffff;color: #333333;margin-right: -10px"},[o._v(o._s(t.name))])],1)})),1),a("v-uni-view",{staticClass:"index-coupon has-bg-white has-pd-10 top_30"},[o.couponlist.length>0?a("v-uni-view",{staticClass:"goods-list",staticStyle:{"padding-top":"46px"}},o._l(o.couponlist,(function(t,e){return a("orange-goods-card-home",{attrs:{index:e%2,tkmoney:t.tkmoney,tkmoneys:t.tkmoneys,itemid:t.itemid,isEnable:o.isEnable,"is-invitation":o.isInvitation,itempic:t.itempic+"_310x310.jpg",itemtitle:t.itemtitle,itemprice:"¥"+t.itemprice,itemsale:t.itemsale,itemendprice:""+t.itemendprice,couponmoney:t.couponmoney,item:t}})})),1):o._e()],1),o.couponlist.length>0?a("v-uni-view",{staticClass:"s-col is-col-24"},[a("load-more",{attrs:{loadingType:o.loadingType,contentText:o.contentText}})],1):o._e(),a("v-uni-view",{staticClass:"scroll_top",class:[o.scrollTop?"active":"",""],staticStyle:{bottom:"56px"},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.topScrollTap.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-shangla"})],1),0===o.couponlist.length?a("empty",{attrs:{des:"暂无数据",show:"false"}}):o._e()],1)},n=[]},eb27:function(o,t,a){var e=a("24fb"),i=a("1de5"),n=a("bfa7"),d=a("4764");t=e(!1);var r=i(n),f=i(d);t.push([o.i,".index-content[data-v-fadf2ba2]{width:100%;background:#f8f8f8}.index-content .index-header[data-v-fadf2ba2]{position:fixed;z-index:160;\r\n    /*border-bottom: solid 1px #ddd;*/\r\n    /*background: linear-gradient(to left, #FC3F78 0, #FBAA58 100%);*/border-bottom-color:transparent;-webkit-transition:all .4s ease 0s;-webkit-transform-origin:center;transform-origin:center;width:100%}.index-content .index-header .icon_header[data-v-fadf2ba2]{width:100%;line-height:45px;position:relative;background:-moz-linear-gradient(left,#f15b6c,#ff6db2 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#f15b6c),color-stop(100%,#ff6db2));background:-webkit-linear-gradient(left,#f15b6c,#ff6db2);background:-o-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-ms-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-webkit-gradient(linear,right top,left top,color-stop(0,#f15b6c),to(#ff6db2));background:-webkit-linear-gradient(right,#f15b6c,#ff6db2);background:linear-gradient(270deg,#f15b6c 0,#ff6db2)}.index-content .index-header .icon_header .index-search[data-v-fadf2ba2]{text-align:center;font-size:16px;color:#fff;position:relative;z-index:2;zoom:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:8px;margin:0 45px 0 10px;padding-bottom:6px}.index-content .index-header .icon_header .index-search .icon_search[data-v-fadf2ba2]{background:#f6f6f6;border-radius:%?40?%;-moz-border-radius:%?40?%;-webkit-border-radius:%?40?%;-o-border-radius:%?40?%;-ms-border-radius:%?40?%;height:%?66?%;line-height:%?66?%;font-size:%?26?%;color:#dcdcdc;text-align:left;text-indent:%?32?%;position:relative;z-index:1;zoom:1;transition:all .4s ease 0s;-o-transition:all .4s ease 0s;-moz-transition:all .4s ease 0s;-webkit-transition:all .4s ease 0s;-webkit-transform-origin:center;transform-origin:center}.icon_header .icon_search>.iconfont[data-v-fadf2ba2]{margin-right:%?20?%;top:1px;color:#ccc}.icon_header .icon_suji[data-v-fadf2ba2]{position:absolute;top:0;width:%?90?%;text-align:center;right:0;color:#fff}.icon-gender[data-v-fadf2ba2]{position:absolute;top:0;width:%?90?%;text-align:center;left:16px;color:#fff}.icon_header .icon_suji .icon-zuji[data-v-fadf2ba2]{font-size:%?40?%}.index-content .index-banner[data-v-fadf2ba2]{padding-top:40px;width:100%}.index-content .index-banner uni-swiper-item[data-v-fadf2ba2]{height:400px}.index-content .index-banner .swiper .swiper-container uni-image[data-v-fadf2ba2]{width:100%}.index-content .index-navlist[data-v-fadf2ba2]{\r\n    /*border-bottom: 10upx solid #f2f2f2*/}.index-content .index-navlist uni-image[data-v-fadf2ba2]{width:64px;height:64px}.index-content .home_ant_juhuasuan[data-v-fadf2ba2]{padding:0 5px;\r\n    /*border-bottom: 10upx solid #f2f2f2*/margin-bottom:6px}.index-content .home_ant_juhuasuan .fl-jutext[data-v-fadf2ba2]{font-size:0;height:45px;line-height:500px;overflow:hidden;-webkit-background-size:auto 18px;background-size:auto 18px;float:left;width:25%}.index-content .home_ant_juhuasuan .fr-jutext[data-v-fadf2ba2]{line-height:45px;background:url("+r+') 100% no-repeat;color:#999;-webkit-background-size:auto 11px;background-size:auto 11px;width:65%;float:right;text-align:right;padding-right:10px;font-size:14px}.index-content .juhuasuan-list[data-v-fadf2ba2]{clear:both;padding-bottom:10px}.index-content .juhuasuan-list .juhuasuan-list-goods[data-v-fadf2ba2]{width:25%;float:left}.index-content .juhuasuan-list .juhuasuan-list-goods .image[data-v-fadf2ba2]{display:block;margin:0 2px;border-radius:5px;overflow:hidden;position:relative;z-index:0}.index-content .juhuasuan-list .juhuasuan-list-goods .image uni-image[data-v-fadf2ba2]{width:91px\r\n    /* \theight: 91px; */}.index-content .juhuasuan-list .juhuasuan-list-goods .name[data-v-fadf2ba2]{position:absolute;left:0;bottom:0;height:20px;line-height:22px;font-size:12px;-moz-border-radius:3px;-webkit-border-radius:3px;-o-border-radius:3px;-ms-border-radius:3px;background:-webkit-linear-gradient(left,#f15b6c,#ff6db2);background:-o-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-ms-linear-gradient(left,#f15b6c 0,#ff6db2 100%);background:-webkit-gradient(linear,right top,left top,color-stop(0,#f15b6c),to(#ff6db2));background:-o-linear-gradient(right,#f15b6c 0,#ff6db2 100%);background:-webkit-linear-gradient(right,#f15b6c,#ff6db2);background:linear-gradient(270deg,#f15b6c 0,#ff6db2);color:#fff;width:100%;overflow:hidden}.index-content .juhuasuan-list .juhuasuan-list-goods .name[data-v-fadf2ba2]:before{background:#ffe7c9;height:100px;position:absolute;-ms-transform:rotate(15deg);right:0;color:#fc3f78;padding-left:%?5?%;padding-right:%?5?%}.index-content .juhuasuan-list .juhuasuan-list-goods .name .pinname[data-v-fadf2ba2]{font-size:12px;line-height:20px}.index-content .index-coupon .coupon-tab[data-v-fadf2ba2]{margin:0 %?10?%}.index-content .index-coupon .coupon-tab .fl-jutext[data-v-fadf2ba2]{width:33.33333333%;font-size:%?30?%;color:#333}.index-content .index-coupon .coupon-tab .fl-jutext[data-v-fadf2ba2]:before{content:"";float:left;margin-top:3px;width:3px;height:18px;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-o-border-radius:3px;-ms-border-radius:3px;background:-o-linear-gradient(top,#ff5d06 0,#fc3f78 100%);background:-o-linear-gradient(bottom,#ff5d06 0,#fc3f78 100%);background:-webkit-gradient(linear,left bottom,left top,color-stop(0,#ff5d06),to(#fc3f78));background:-webkit-linear-gradient(bottom,#ff5d06,#fc3f78);background:linear-gradient(0deg,#ff5d06 0,#fc3f78);margin-right:5px}.index-content .index-coupon .coupon-tab .fr-jutext[data-v-fadf2ba2]{float:right;color:#aaa;font-size:14px;background:url('+r+') 100% no-repeat;-webkit-background-size:auto 11px;background-size:auto 11px;width:65%;text-align:right;padding-right:10px}.index-content .index-coupon .goods-list .coupon-page[data-v-fadf2ba2]{padding:10px}.index-content .index-coupon .goods-list .coupon-page .image[data-v-fadf2ba2]{float:left;width:40%}.index-content .index-coupon .goods-list .coupon-page .image uni-image[data-v-fadf2ba2]{width:%?240?%;height:%?240?%;border-radius:3px}.index-content .index-coupon .goods-list .coupon-page .content[data-v-fadf2ba2]{float:right;width:60%}.index-content .index-coupon .goods-list .coupon-page .content .title[data-v-fadf2ba2]{color:#333;font-weight:400;font-size:16px;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:42px;margin-bottom:20px;overflow:hidden}.index-content .index-coupon .goods-list .coupon-page .content .num[data-v-fadf2ba2]{color:#aaa;line-height:20px;font-size:13px;padding-top:13px}.index-content .index-coupon .goods-list .coupon-page .content .num .tmprice[data-v-fadf2ba2]{padding-right:10px;margin-right:10px;position:relative;z-index:1;zoom:1;display:inline-block}.index-content .index-coupon .goods-list .coupon-page .content .num .volume[data-v-fadf2ba2]{float:right}.index-content .index-coupon .goods-list .coupon-page .content .money[data-v-fadf2ba2]{height:24px;font-size:18px;margin-top:5px}.index-content .index-coupon .goods-list .coupon-page .content .money .quan[data-v-fadf2ba2]{padding:0;position:relative;z-index:1;zoom:1;top:0;overflow:hidden;float:right}.index-content .index-coupon .goods-list .coupon-page .content .money .quan[data-v-fadf2ba2]{\r\n    /*background: -moz-linear-gradient(left, #FC3F78 0, #FF927C 100%);*/\r\n    /*background: -webkit-gradient(linear, left top, left right, color-stop(0, #FC3F78), color-stop(100%, #FF927C));*/\r\n    /*background: -webkit-linear-gradient(left, #FC3F78 0, #FF927C 100%);*/\r\n    /*background: -o-linear-gradient(left, #FC3F78 0, #FF927C 100%);*/\r\n    /*background: -ms-linear-gradient(left, #FC3F78 0, #FF927C 100%);*/\r\n    /*background: linear-gradient(to left, #FC3F78 0, #FF927C 100%);*/background:-moz-linear-gradient(left,#fc3f78 0,#ff927c 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#fc3f78),color-stop(100%,#ff927c));background:-webkit-linear-gradient(left,#fc3f78,#ff927c);background:-o-linear-gradient(left,#fc3f78 0,#ff927c 100%);background:-ms-linear-gradient(left,#fc3f78 0,#ff927c 100%);background:-webkit-gradient(linear,right top,left top,color-stop(0,#fc3f78),to(#ff927c));background:-webkit-linear-gradient(right,#fc3f78,#ff927c);background:linear-gradient(270deg,#fc3f78 0,#ff927c);position:relative;z-index:1;zoom:1;font-style:normal;display:block;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-o-border-radius:3px;-ms-border-radius:3px;font-size:.785rem;min-width:3rem;text-align:center;padding:1px %?12?%;color:#fff}.index-content .index-coupon .goods-list .coupon-page .content .money .quan[data-v-fadf2ba2]:before{position:absolute;z-index:1;zoom:1;top:50%;margin-top:-3px;background:#fff;display:block;width:5px;height:5px;content:"";border-radius:10px;border:1px solid #fff;left:auto;right:-4px}.index-content .index-coupon .goods-list .coupon-page .content .money .quan[data-v-fadf2ba2]:after{position:absolute;z-index:1;zoom:1;top:50%;margin-top:-3px;background:#fff;display:block;width:5px;height:5px;content:"";border-radius:10px;border:1px solid #fff;left:-4px}.index-content .index-coupon .goods-list .coupon-page .content .money .coupon-price[data-v-fadf2ba2]{background:#fff;color:#fc3f78;font-size:12px}.index-content .index-coupon .goods-list .coupon-page .content .money .coupon-price uni-text[data-v-fadf2ba2]{font-size:16px;padding-left:5px}\r\n\r\n/*\r\n** 商品详情\r\n*/.index-goods[data-v-fadf2ba2]{width:100%}.index-goods .goods_info[data-v-fadf2ba2]{background:#fff;width:100%}.index-goods .goods_info .title[data-v-fadf2ba2]{padding:%?20?% %?10?%;font-size:%?32?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;color:#333}.index-goods .goods_info .title uni-text[data-v-fadf2ba2]{border:1px solid #fc3f78;color:#fc3f78;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;padding:0 5px;margin-right:5px;font-size:%?28?%;top:-1px}.index-goods .goods_info .coupon-price[data-v-fadf2ba2]{margin:%?10?% %?10?% 0 %?10?%;margin-top:%?0?%}.index-goods .goods_info .coupon-price .price[data-v-fadf2ba2]{float:left;font-size:%?30?%;color:#fc3f78;width:50%}.index-goods .goods_info .coupon-price .price uni-text[data-v-fadf2ba2]{font-size:%?46?%;font-weight:500}.index-goods .goods_info .coupon-price .volume[data-v-fadf2ba2]{float:right;font-size:%?30?%;color:#333;width:50%;text-align:right}.index-goods .goods_info .coupon-price .yprice[data-v-fadf2ba2]{float:left;color:#888;width:40%}.index-goods .goods_info .coupon-price .tag-list[data-v-fadf2ba2]{float:right;width:60%;text-align:right}.index-goods .goods_info .coupon-price .tag-list .tag[data-v-fadf2ba2]{text-align:right;float:right;margin-left:%?20?%;color:#888;font-size:%?28?%}.index-goods .goods_info .coupon-price .tag-list .tag .iconfont[data-v-fadf2ba2]{color:#fc3f78;margin-right:%?4?%}.index-goods .goods_quan[data-v-fadf2ba2]{background:#fff;position:relative;z-index:1;zoom:1}.index-goods .goods_quan[data-v-fadf2ba2]:before{content:"";width:2px;height:55%;background:url('+f+');-webkit-background-size:auto 100%;-moz-background-size:auto 100%;background-size:auto 100%;position:absolute;z-index:1;zoom:1;left:64%;top:20%;display:block}.index-goods .goods_quan .row[data-v-fadf2ba2]{display:block;position:absolute;z-index:1;zoom:1;left:0;top:0;width:100%;height:100%;text-align:center}.index-goods .goods_quan .row .money[data-v-fadf2ba2]{font-size:%?36?%;color:#fff;padding-top:6%;line-height:%?48?%;position:relative;z-index:1;zoom:1;left:.3rem}.index-goods .goods_quan .row .money .date-coupon[data-v-fadf2ba2]{font-size:12px;color:#fff}.index-goods .goods_quan .row .name[data-v-fadf2ba2]{line-height:100%;color:#fff;position:relative;z-index:1;zoom:1;top:50%;margin-top:-.6rem;text-align:left;font-weight:600}.index-goods .goods_quan .row .name uni-text[data-v-fadf2ba2]{margin-left:15%}.index-goods .goods_desc[data-v-fadf2ba2]{font-size:%?24?%;line-height:%?48?%;padding:%?10?% %?20?%;color:#888}.hr10[data-v-fadf2ba2]{background:#f5f5f5;height:%?10?%}.scroll_top[data-v-fadf2ba2]{background:rgba(51,51,51,.8);width:35px;height:35px;border-radius:35px;-moz-border-radius:35px;-webkit-border-radius:35px;-o-border-radius:35px;-ms-border-radius:35px;text-align:center;line-height:35px;color:#fff;position:fixed;z-index:1;zoom:1;right:20px;bottom:25px;opacity:0;-webkit-transform:translateY(100px) translateX(0);transform:translateY(100px) translateX(0);transition:all .4s ease 0s;-o-transition:all .4s ease 0s;-moz-transition:all .4s ease 0s;-webkit-transition:all .4s ease 0s;-webkit-transform-origin:center;transform-origin:center}.scroll_top.active[data-v-fadf2ba2]{opacity:1;-webkit-transform:translateY(-25px) translateX(0);transform:translateY(-25px) translateX(0)}.index-goods .goods_shop .info[data-v-fadf2ba2]{padding-top:%?20?%;min-height:%?120?%}.index-goods .goods_shop .info uni-image[data-v-fadf2ba2]{float:left;width:%?120?%;height:%?120?%;background:#f5f5f5;margin-left:%?20?%}.index-goods .goods_shop .info .shop-text[data-v-fadf2ba2]{position:relative;z-index:1;zoom:1;min-height:%?120?%;padding-left:%?160?%;line-height:%?60?%}.index-goods .goods_shop .info .shop-text .shop-title[data-v-fadf2ba2]{font-size:1.1rem;font-weight:400;margin-right:%?235?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.index-goods .goods_shop .info .shop-text .icon-taobao[data-v-fadf2ba2]{color:#ff5000}.index-goods .goods_shop .info .shop-text .icon-tianmaotmall[data-v-fadf2ba2]{color:#fc3f78}.index-goods .goods_shop .info .shop-text .shop-new[data-v-fadf2ba2]{position:absolute;z-index:1;zoom:1;right:%?20?%;top:50%;margin-top:-15px;font-size:%?30?%;color:#888}.index-goods .goods_shop .info .shop-text .shop-new .icon-youjiantou[data-v-fadf2ba2]{font-size:%?24?%}.index-goods .goods_shop .goods-tab[data-v-fadf2ba2]{margin-top:%?30?%;border-top:solid 1px #f5f5f5;font-size:%?30?%;color:#555;padding:%?20?%}.index-goods .goods_shop .goods-tab .lv_p[data-v-fadf2ba2]{color:#ff7800;margin-left:%?8?%}.index-goods .goods_shop .goods-tab .lv_d[data-v-fadf2ba2]{color:#2ca800;margin-left:%?8?%}.index-goods .goods_shop .goods-tab .lv_g[data-v-fadf2ba2]{color:#e31436;margin-left:%?8?%}.index-goods .goods_shop .goods-tab .is-col-8[data-v-fadf2ba2]:nth-child(2n):after,\r\n.index-goods .goods_shop .goods-tab .is-col-8[data-v-fadf2ba2]:nth-child(2n):before{position:absolute;z-index:1;zoom:1;left:0;top:50%;width:1px;height:1rem;margin-top:-.5rem;background:#eee;display:block;content:""}.index-goods .goods_shop .goods-tab .is-col-8[data-v-fadf2ba2]:nth-child(2n):after{left:auto;right:0}.index-goods .goods_reco[data-v-fadf2ba2]{background:#fff;margin-bottom:%?120?%}.index-goods .goods_reco .goods-info-title[data-v-fadf2ba2]{font-weight:400;text-align:center;font-size:%?28?%;height:%?80?%;line-height:%?80?%;color:#333}.index-goods .goods_reco .imglist[data-v-fadf2ba2]{max-width:100%}.index-goods .goods_shop_cart[data-v-fadf2ba2]{position:fixed;zoom:1;bottom:0;z-index:500;left:0;width:100%}.index-goods .goods_shop_cart .cent[data-v-fadf2ba2]{position:relative;zoom:1;z-index:5;background:#fff;-webkit-box-shadow:0 -2px 2px 0 rgba(0,0,0,.1);box-shadow:0 -2px 2px 0 rgba(0,0,0,.1)}.index-goods .goods_shop_cart .but .img[data-v-fadf2ba2]{position:relative;z-index:1;zoom:1;padding-top:8px;height:28px}.index-goods .goods_shop_cart .but .img uni-image[data-v-fadf2ba2]{height:23px;width:23px}.index-goods .goods_shop_cart .but .img .iconfont[data-v-fadf2ba2]{font-size:20px;color:#777;top:1px}.index-goods .goods_shop_cart .is-col-16[data-v-fadf2ba2]{color:#fff;border:0;padding:0;height:43px;line-height:43px;position:relative;z-index:1;zoom:1;top:10px;background:-webkit-gradient(linear,right top,left top,color-stop(0,#fc3f78),to(#fe9f69));background:-webkit-linear-gradient(right,#fc3f78,#fe9f69);background:linear-gradient(270deg,#fc3f78 0,#fe9f69);width:65%}.index-goods .goods_shop_cart .is-col-16 .btn uni-view[data-v-fadf2ba2]{height:41px;color:#fff;text-align:center}.index-goods .goods_shop_cart .is-col-16 .btn .tkl[data-v-fadf2ba2]{background:#fff;color:#fe9f69;zoom:1;top:1px;left:1px;z-index:5;position:relative\r\n    /* \tborder-radius: 3px 0 0 3px; */}.index-goods .goods_shop_cart .is-col-16 .btn .coupon-buy[data-v-fadf2ba2]{background:-webkit-gradient(linear,right top,left top,color-stop(0,#fc3f78),to(#fbaa58));background:-webkit-linear-gradient(right,#fc3f78,#fbaa58);background:linear-gradient(270deg,#fc3f78 0,#fbaa58);height:42px}.index-goods .goods_shop_cart_bg[data-v-fadf2ba2]{width:100%;height:100%;position:fixed;z-index:50;background:#000;left:0;top:0;\r\n    /*  display: none; */opacity:.5}.index-goods .goods_share[data-v-fadf2ba2]{position:fixed;left:2.5%;width:95%;background:#fff;border-radius:4px;opacity:0;bottom:-200px;transition:all .3s cubic-bezier(.4,.68,.15,1.21) .2s;-o-transition:all .3s cubic-bezier(.4,.68,.15,1.21) .2s;-moz-transition:all .3s cubic-bezier(.4,.68,.15,1.21) .2s;-webkit-transition:all .3s cubic-bezier(.4,.68,.15,1.21) .2s;z-index:0}.index-goods .goods_share.active[data-v-fadf2ba2]{opacity:1;bottom:60px;z-index:100}.index-goods .goods_share .cent uni-view[data-v-fadf2ba2]{height:56px;line-height:36px;text-align:center;color:#666;display:block;font-size:16px;padding:10px 0}.index-goods .goods_share .cent uni-view[data-v-fadf2ba2]:nth-child(2){border-bottom:solid 1px #eee}.index-goods .goods_share .cent uni-view .iconfont[data-v-fadf2ba2]{margin-right:%?10?%}.index-goods .goods_share .cent .em[data-v-fadf2ba2]{position:absolute;left:44%;bottom:-10px;width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid #fff}.navBarButton[data-v-fadf2ba2]{z-index:501!important}.index-goods .h_newlit[data-v-fadf2ba2]{z-index:-50;top:45px;right:0;border:1px solid #ddd;width:35%;-o-transition:all .4s ease 0s;-moz-transition:all .4s ease 0s;-webkit-transition:all .4s ease 0s;opacity:0;-webkit-transform:translateY(0) translateX(100%);transform:translateY(0) translateX(100%);padding-bottom:5px;-moz-box-shadow:-1px 1px 3px hsla(0,0%,49%,.2);-webkit-box-shadow:-1px 1px 3px hsla(0,0%,49%,.2);box-shadow:-1px 1px 3px hsla(0,0%,49%,.2)}.index-goods .h_newlit.active[data-v-fadf2ba2]{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1;position:fixed;z-index:600;zoom:1}.index-goods .h_newlit[data-v-fadf2ba2]{width:120px;text-align:center;background:rgba(51,51,51,.9);border:0;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;-o-border-radius:5px;-ms-border-radius:5px;overflow:inherit;right:.5rem\r\n    /*margin-top: 50upx;*/}.index-goods .h_newlit .em[data-v-fadf2ba2]{position:relative;z-index:5;zoom:1}.index-goods .h_newlit .em[data-v-fadf2ba2]:before{content:"";position:absolute;z-index:601;zoom:1;top:-7px;right:10px;width:17px;height:12px}.index-goods .h_newlit .em[data-v-fadf2ba2]:before{width:0;height:0;border-left:7px transparent solid;border-right:7px transparent solid;border-bottom:7px rgba(51,51,51,.9) solid;border-top:none;position:absolute;z-index:601;zoom:1;right:8px;top:-7px}.index-goods .h_newlit .em uni-view[data-v-fadf2ba2]{border-bottom:solid 1px hsla(0,0%,40%,.9);color:#fff;font-size:1rem;line-height:44px}.index-goods .h_newlit .em uni-view[data-v-fadf2ba2]:last-child{border-bottom:0}.index-goods .h_newlit .em uni-view .iconfont[data-v-fadf2ba2]{margin-right:%?10?%}.buy-box-title[data-v-fadf2ba2]{height:40px;line-height:40px;text-align:center;background:-webkit-gradient(linear,left top,right top,from(#fc3f78),to(#ffbf63));background:-webkit-linear-gradient(left,#fc3f78,#ffbf63);background:linear-gradient(90deg,#fc3f78,#ffbf63);-webkit-background-clip:text;color:transparent;font-size:18px;padding:5px 0}.buy-box-title .iconfont[data-v-fadf2ba2]{right:7px;color:#999;position:absolute;font-size:23px;top:-1px}.buy-box-center .code-cent[data-v-fadf2ba2]{margin:0 10px}.buy-box-center .cente-text[data-v-fadf2ba2]{margin:0 10px;padding:10px 0;background:#f1f1f1;color:#333;font-size:14px;line-height:24px;height:260px;border-radius:4px;overflow:hidden;text-align:left}.buy-box-center .cente-text .textarea[data-v-fadf2ba2]{padding:10px}.buy-box-center .code-cent .closeTips[data-v-fadf2ba2]{text-align:left;line-height:22px;color:#aaa;font-size:12px;padding-top:10px;margin-left:10px}.buy-box-center .buy-btn-copy[data-v-fadf2ba2]{background:-webkit-gradient(linear,right top,left top,color-stop(0,#fc3f78),to(#fb85f7));background:-webkit-linear-gradient(right,#fc3f78,#fb85f7);background:linear-gradient(270deg,#fc3f78 0,#fb85f7);display:block;border-radius:50px;line-height:40px;height:40px;text-align:center;color:#fff;font-size:16px;width:90%;margin:0 auto;margin-top:10px;margin-bottom:10px}.buy-box-center .buy-btn-copy.active[data-v-fadf2ba2]{background:#1fb931}.buy-box-center .code-pic-info[data-v-fadf2ba2]{height:119px}.navBarButtonBox[data-v-fadf2ba2]{width:0;height:0;overflow:hidden}.getTbk[data-v-fadf2ba2]{background:-moz-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#fc3f78),color-stop(100%,#fbaa58));background:-webkit-linear-gradient(left,#fc3f78,#fbaa58);background:-o-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-ms-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-webkit-gradient(linear,right top,left top,color-stop(0,#fc3f78),to(#fbaa58));background:-webkit-linear-gradient(right,#fc3f78,#fbaa58);background:linear-gradient(270deg,#fc3f78 0,#fbaa58)}\r\n\r\n/*\r\n\t9.9包邮\r\n*/.jiu-page .main-title[data-v-fadf2ba2]{background:-moz-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#fc3f78),color-stop(100%,#fbaa58));background:-webkit-linear-gradient(left,#fc3f78,#fbaa58);background:-o-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-ms-linear-gradient(left,#fc3f78 0,#fbaa58 100%);background:-webkit-gradient(linear,right top,left top,color-stop(0,#fc3f78),to(#fbaa58));background:-webkit-linear-gradient(right,#fc3f78,#fbaa58);background:linear-gradient(270deg,#fc3f78 0,#fbaa58);border-bottom-color:transparent;padding:10px;position:fixed;top:0;left:0;width:100%;z-index:120;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;\n}.jiu-page .main-title .menu-cat[data-v-fadf2ba2]{font-family:Simhei;font-size:17px;height:28px;line-height:28px;color:#fff;text-align:center}.jiu-page .main-title .menu-cat .span[data-v-fadf2ba2]{position:relative;cursor:pointer;padding:6px 22px 6px 15px;text-align:center}.jiu-page .main-title .menu-cat .span uni-image[data-v-fadf2ba2]{width:65px;height:22px;margin-left:42%}.dianpu[data-v-fadf2ba2]{color:#999;position:absolute;margin-top:%?12?%;width:49%;padding-left:%?8?%}',""]),o.exports=t},f91b:function(o,t,a){"use strict";a.r(t);var e=a("7b7c"),i=a.n(e);for(var n in e)"default"!==n&&function(o){a.d(t,o,(function(){return e[o]}))}(n);t["default"]=i.a},fa92:function(o,t,a){"use strict";var e=a("5151"),i=a.n(e);i.a}}]);