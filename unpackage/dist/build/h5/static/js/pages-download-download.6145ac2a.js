(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-download-download"],{1906:function(t,n,e){t.exports=e.p+"static/img/logo.e9ad63dd.png"},2155:function(t,n,e){"use strict";e.r(n);var i=e("40f9"),o=e("b3bc");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("395d");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"05f821d8",null,!1,i["a"],r);n["default"]=d.exports},"395d":function(t,n,e){"use strict";var i=e("9cef"),o=e.n(i);o.a},"40f9":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"home1"},[i("v-uni-view",{staticStyle:{"margin-top":"150px","text-align":"center"}},[i("v-uni-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e("1906")}})],1),i("v-uni-view",{staticStyle:{"text-align":"center","font-size":"26px","font-weight":"bold","margin-top":"40px","margin-bottom":"32px","":"#97582B"}},[t._v("让你体验白菜价网购的快感")]),i("v-uni-view",{staticStyle:{"text-align":"center","font-size":"16px",color:"white",padding:"4px 16px 4px 16px",background:"blue","margin-right":"30%","margin-left":"30%","border-radius":"30px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addPublisher.apply(void 0,arguments)}}},[t._v("下载APP")]),t.show_share?i("v-uni-view",{attrs:{id:"shareit"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.closeShare.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"arrow",attrs:{src:e("d59f")}}),i("v-uni-view",{attrs:{id:"follow"}},[t._v("受微信平台限制无法进行下载！点击右上角按钮，选择浏览器打开！下载APP！")])],1):t._e(),i("v-uni-view",{staticStyle:{"margin-bottom":"8px",position:"fixed",bottom:"0","text-align":"center",width:"100%"}},[t._v("北京寻源网络技术有限公司版权所有")])],1)},a=[]},"4a41":function(t,n,e){"use strict";e("c975"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{show_share:!1}},methods:{closeShare:function(){this.show_share=!1},addPublisher:function(){var t=this,n=navigator.userAgent.toLowerCase();-1!==n.indexOf("micromessenger")?this.show_share=!0:/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?uni.showModal({title:"下载提示",content:"苹果APP正在上架中,请访问网站www.firstsite.cn",showCancel:!0,success:function(n){n.confirm&&window.location.assign(t.$Url)}}):(/(Android)/i.test(navigator.userAgent),window.location.assign(this.$Url+"/app.apk"))},navTo:function(t){uni.navigateTo({url:t})}}};n.default=i},"63a3":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"#shareit[data-v-05f821d8]{-webkit-user-select:none;position:fixed;\n    /*width: 100%;*/height:2000px;background:rgba(0,0,0,.85);text-align:center;top:0;left:0;z-index:999}#shareit img[data-v-05f821d8]{max-width:100%}.arrow[data-v-05f821d8]{width:100px;height:150px;position:absolute;right:5%;top:1%}#follow[data-v-05f821d8]{margin-right:60px;margin-left:30px;width:90%;height:50px;line-height:50px;text-align:left;text-decoration:none;font-size:18px;color:#fff;float:left;margin-top:160px}.home1[data-v-05f821d8]{position:absolute;width:100%;height:100%;color:#000;background:#f8f8f8\n    /*background: linear-gradient(0deg, rgba(137, 70, 25, 1) 0%, rgba(240, 180, 72, 1) 51%, rgba(176, 104, 31, 1) 100%);*/}",""]),t.exports=n},"9cef":function(t,n,e){var i=e("63a3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("b637c676",i,!0,{sourceMap:!1,shadowMode:!1})},b3bc:function(t,n,e){"use strict";e.r(n);var i=e("4a41"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},d59f:function(t,n){t.exports="data:image/png;base64,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"}}]);