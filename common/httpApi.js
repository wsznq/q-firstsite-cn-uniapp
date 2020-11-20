/**
 * API接口配置文件
 */
module.exports = {
	home : {
		banners:"/Api/DocumentLink?ModelId=2&ColumnIds=12", //首页banner 
		navlist:"/Api/DocumentLink?ModelId=2&ColumnIds=13", //首页导航
		messagelist:"/Api/DocumentLink?ModelId=2&ColumnIds=115", //首页公告
		hhzclist:"/Api/DocumentLink?ModelId=2&ColumnIds=117", //好货专场
		juhusuan:"/index/juhuasuanlist", //首页聚划算推荐
	},
	common:{
		tabBars:"/Api/ColumnLink?ShowColumn=5&ColumnId=11",//一级栏目
		subTabBars:"/Api/ColumnLink?ShowColumn=5",//&ColumnId=14 二级栏目
		couponlist:"/alimama.aspx?action=TbkDgMaterialOptional", //公共加载商品
		couponbestlist:"/alimama.aspx?action=TbkDgOptimusMaterial", //公共加载商品（精选）
		tbsuggest:"/alimama.aspx?action=TbSuggest",//淘宝推荐信息
		couponlist_jd:"/jdlianmeng.aspx?action=GetJdUnionOpenGoodsJingfenQuery", //京粉精选商品查询接口
		coupontoplist_pdd:"/pddlianmeng.aspx?action=GetPddDdkTopGoodsListQuery",//多多客获取爆款排行商品接口
		couponlistsearch_pdd:"/pddlianmeng.aspx?action=GetPddDdkGoodsSearch",//多多进宝商品查询
		config:"/config/getinfo", // 获取服务端配置
		update:"/config/update", // 检测更新 
	},
	goods:{
		iteminfo:"/alimama.aspx?action=TbkItemInfoGet", //商品详情
		itemcode:"/alimama.aspx?action=TbkTpwdCreate", //淘口令生成
		tbkspreadget:"/alimama.aspx?action=TbkSpreadGet",//淘宝客-公用-长链转短链
		itemurl_jd:"/jdlianmeng.aspx?action=GetJdUnionOpenPromotionCommon",//二合一跳转地址
		iteminfo_pdd:"/pddlianmeng.aspx?action=GetPddDdkGoodsDetail",//商品详情
		itemurl_pdd:"/pddlianmeng.aspx?action=GetPddDdkGoodsPromotionUrlGenerate"//二合一跳转地址
	},
	weixin:{
		WeiXinLogin:"/Plugins/WeiXin/API/WX.aspx?action=WeiXinLogin" ,//获取用户信息
		GetCodeUrl:"/Plugins/WeiXin/API/WX.aspx?action=GetCodeUrl" //获取授权地址
	},
	member:{
		UserLogin:"/Common/Member.aspx?action=UserLogin", //用户登录
		GetUserInfoById:"/Common/Member.aspx?action=GetUserInfoById" //用户信息
	}
}