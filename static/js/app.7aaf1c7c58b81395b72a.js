webpackJsonp([1],{"0Hw8":function(t,e){},"1PWt":function(t,e){},"7RWm":function(t,e){},"991W":function(t,e){},"9nYU":function(t,e){},CuFT:function(t,e){},HTEq:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};i.d(s,"getCityName",function(){return st});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},r=i("VU/8")({name:"App"},a,!1,null,null,null).exports,c=i("/ocq"),o=i("//Fk"),l=i.n(o),u=i("mtWM"),m=i.n(u),d=i("mw3O"),f=i.n(d);function h(t,e){return new l.a(function(i,s){m.a.get(t,e).then(function(t){i(t)}).catch(function(t){s(t)})})}n.default.config.productionTip=!1,n.default.prototype.HOST="/api",m.a.defaults.timeout=1e4,m.a.interceptors.request.use(function(t){return"post"===t.method&&(t.data=f.a.stringify(t.data)),t},function(t){return l.a.reject(t)}),m.a.interceptors.response.use(function(t){return 200===t.status?t:l.a.reject("error")},function(t){return l.a.reject(t)});var v=i("Dd8w"),p=i.n(v),_=i("NYxO"),g={name:"HomeHeader",data:function(){return{msg:"我是首页"}},computed:p()({},Object(_.b)(["getCityName"]))},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{staticClass:"headerRight",attrs:{to:"/city",tag:"div"}},[e("span",[this._v(this._s(this.getCityName))]),e("i",{staticClass:"iconfont icon-down",staticStyle:{"font-size":"1.4rem",color:"#fff"}})])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headerLeft"},[e("i",{staticClass:"iconfont icon-Left",staticStyle:{"font-size":"1.6rem",color:"#fff"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headerCenter"},[e("input",{attrs:{type:"",name:"",id:"",value:"",placeholder:"输入城市或者景点"}})])}]};var y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper"},[e("mt-swipe",{attrs:{auto:2e3,speed:0}},this._l(this.swiperList,function(t,i){return e("mt-swipe-item",{key:i},[e("img",{attrs:{src:t.imgUrl}})])}))],1)},staticRenderFns:[]};var w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid"},[i("mt-swipe",{attrs:{auto:0}},[i("mt-swipe-item",[i("div",{staticClass:"mui-content"},[i("ul",{staticClass:"mui-table-view mui-grid-view mui-grid-9"},t._l(t.iconList,function(e,s){return s<8?i("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"},[i("a",{attrs:{href:"#"}},[i("span",{staticClass:"mui-icon"},[i("img",{attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"mui-media-body"},[t._v(t._s(e.desc))])])]):t._e()}))])]),t._v(" "),t.iconList.length>8?i("mt-swipe-item",[i("div",{staticClass:"mui-content"},[i("ul",{staticClass:"mui-table-view mui-grid-view mui-grid-9"},t._l(t.iconList,function(e,s){return s>=8?i("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"},[i("a",{attrs:{href:"#"}},[i("span",{staticClass:"mui-icon"},[i("img",{attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"mui-media-body"},[t._v(t._s(e.desc))])])]):t._e()}))])]):t._e()],1)],1)},staticRenderFns:[]};var L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hot"},[i("p",[t._v("热销推荐")]),t._v(" "),i("ul",{staticClass:"mui-table-view"},t._l(t.recommendList,function(e,s){return i("li",{key:s,staticClass:"mui-table-view-cell mui-media"},[i("router-link",{attrs:{to:{path:"/detail/"+e.id}}},[i("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"mui-media-body"},[i("span",[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"mui-ellipsis"},[t._v(t._s(e.desc))]),t._v(" "),i("span",{staticClass:"look",attrs:{href:""}},[t._v("查看详情")])])])],1)}))])},staticRenderFns:[]};var b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zhoumo"},[i("p",[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekendList,function(e,s){return i("li",{key:s},[i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-p"},[i("p",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var H={name:"Home",data:function(){return{msg:"我是首页",iconList:"",recommendList:"",swiperList:"",weekendList:""}},components:{HomeHeader:i("VU/8")(g,C,!1,function(t){i("s03r")},null,null).exports,HomeSwiper:i("VU/8")({data:function(){return{}},props:["swiperList"]},y,!1,function(t){i("YMAE")},null,null).exports,HomeGrid:i("VU/8")({data:function(){return{}},props:["iconList"]},w,!1,function(t){i("mhXM")},null,null).exports,HomeHot:i("VU/8")({data:function(){return{}},props:["recommendList"]},L,!1,function(t){i("1PWt")},null,null).exports,HomeZhoumo:i("VU/8")({data:function(){return{}},props:["weekendList"]},b,!1,function(t){i("CuFT")},null,null).exports},mounted:function(){this.getHomeInfo()},methods:{getHomeInfo:function(){var t=this;h("static/mock/index.json",this.msg).then(function(e){if("200"==e.status&&"OK"==e.statusText){var i=e.data.data;t.iconList=i.iconList,t.recommendList=i.recommendList,t.swiperList=i.swiperList,t.weekendList=i.weekendList,console.log(i)}else console.log("服务器异常！")}).catch(function(t){console.log(t)})}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("HomeHeader"),t._v(" "),i("HomeSwiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("HomeGrid",{attrs:{iconList:t.iconList}}),t._v(" "),i("HomeHot",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("HomeZhoumo",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]},k=i("VU/8")(H,I,!1,null,null,null).exports,x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("mt-field",{attrs:{placeholder:"输入城市名或拼音"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)},staticRenderFns:[]};var F=i("VU/8")({name:"search",data:function(){return{username:""}}},x,!1,function(t){i("ehSV")},"data-v-29ab10c8",null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cityHeader"},[e("mt-header",{attrs:{title:"城市选择"}},[e("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}})],1)],1)],1)},staticRenderFns:[]};var U=i("VU/8")({name:"cityHeader",data:function(){return{}}},E,!1,function(t){i("HTEq")},"data-v-2a74364a",null).exports,$=i("GQaK"),S={name:"list",data:function(){return{}},props:["hotCity","cities","numChild"],mounted:function(){this.scroll=new $.a(this.$refs.list)},watch:{numChild:function(){this.numChild&&(console.log(this.numChild),this.scroll.scrollToElement(this.$refs[this.numChild][0]))}},methods:p()({setCity:function(t){localStorage.city=t,this.setcityname(t),this.$router.push("/")}},Object(_.c)({setcityname:"setcityname"})),computed:p()({},Object(_.b)(["getCityName"]))},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"list",staticClass:"list"},[i("div",{staticClass:"listWrap"},[i("div",{staticClass:"area"},[i("p",[t._v("当前城市")]),t._v(" "),i("ul",{staticClass:"cityList"},[i("li",[i("div",[t._v(t._s(this.getCityName))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("p",[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"cityList"},t._l(t.hotCity,function(e,s){return i("li",{key:s,on:{click:function(i){t.setCity(e.name)}}},[i("div",[t._v(t._s(e.name))])])}))]),t._v(" "),i("div",{staticClass:"areaList"},[i("ul",{staticClass:"cityList"},t._l(t.cities,function(e,s){return i("li",{key:s,ref:s,refInFor:!0},[i("p",[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"cityTwo"},t._l(e,function(e){return i("li",{on:{click:function(i){t.setCity(e.name)}}},[t._v(t._s(e.name))])}))])}))])])])},staticRenderFns:[]};var V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"listOrder",staticClass:"listOrder"},[i("ul",{ref:"listUl"},t._l(t.orders,function(e){return i("li",{ref:e,refInFor:!0,class:{pink:e==t.active},on:{touchstart:function(e){return e.preventDefault(),t.touchStart(e)}}},[t._v(t._s(e))])}))])},staticRenderFns:[]};var N={name:"City",data:function(){return{hotCity:"",cities:"",numChild:""}},components:{Search:F,CityHeader:U,List:i("VU/8")(S,R,!1,function(t){i("9nYU")},"data-v-47c41985",null).exports,ListOrder:i("VU/8")({name:"listOrder",data:function(){return{touchStatus:!1,active:"A"}},props:["cities"],methods:{touchStart:function(t){var e=t.target.innerText;this.active=e,this.$emit("num",e)}},computed:{startY:function(){return this.$refs.listOrder.offsetHeight},listUl:function(){return this.$refs.listUl.offsetHeight},orders:function(){var t=[];for(var e in this.cities)t.push(e);return t}}},V,!1,function(t){i("itA2")},"data-v-0f1cc4c6",null).exports},methods:{getCitys:function(){var t=this;h("static/mock/city.json").then(function(e){var i=e.data.data;t.hotCity=i.hotCities,t.cities=i.cities}).catch(function(t){console.log(t)})},numfun:function(t){this.numChild=t}},mounted:function(){this.getCitys()}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city"},[i("CityHeader"),t._v(" "),i("Search"),t._v(" "),i("List",{attrs:{hotCity:t.hotCity,cities:t.cities,numChild:t.numChild}}),t._v(" "),i("ListOrder",{attrs:{cities:t.cities},on:{num:t.numfun}})],1)},staticRenderFns:[]};var T=i("VU/8")(N,O,!1,function(t){i("WrBD")},"data-v-77af0e1b",null).exports,D={data:function(){return{absShow:!0,opas:{opacity:.5}}},methods:{scrollFunc:function(t){var e=document.documentElement.scrollTop;if(e>50){var i=e/160;i=i>1?1:i,this.absShow=!1,this.opas={opacity:i}}else this.absShow=!0}},mounted:function(){window.addEventListener("scroll",this.scrollFunc)},unmounted:function(){window.removeEventListener("scroll",this.scrollFunc)}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"detailHeader",staticClass:"detailHeader"},[e("router-link",{attrs:{to:"/"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.absShow,expression:"absShow"}],staticClass:"headerAbs"},[e("span",{staticClass:"iconfont icon-Left"})])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.absShow,expression:"!absShow"}],staticClass:"headerFixed",style:this.opas},[e("div",{staticClass:"cityHeader"},[e("mt-header",{attrs:{title:"景点详情"}},[e("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}})],1)],1)],1)])],1)},staticRenderFns:[]};var A=i("VU/8")(D,j,!1,function(t){i("OhHJ")},"data-v-5ce96e4e",null).exports,W={data:function(){return{}},methods:{closeImg:function(){this.$emit("close")}},props:["gallaryImgs"],mounted:function(){console.log(this.gallaryImgs)}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Album",on:{click:this.closeImg}},[e("div",{staticClass:"albumWrap"},[e("mt-swipe",this._l(this.gallaryImgs,function(t,i){return e("mt-swipe-item",{key:i},[e("img",{attrs:{src:t}})])}))],1)])},staticRenderFns:[]};var M=i("VU/8")(W,B,!1,function(t){i("ocjU")},null,null).exports,Y={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"fade"}},[this._t("default")],2)},staticRenderFns:[]};var q={data:function(){return{showImg:!1}},props:["bannerImg","sightName","gallaryImgs"],mounted:function(){console.log(222)},methods:{showImgFunc:function(){this.showImg=!0},closeImg:function(){this.showImg=!1}},components:{Fade:i("VU/8")({data:function(){return{}}},Y,!1,function(t){i("7RWm")},"data-v-c836dade",null).exports,Album:M}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailBanner"},[i("div",{staticClass:"detailBg",on:{click:t.showImgFunc}},[i("img",{attrs:{src:t.bannerImg}})]),t._v(" "),i("div",{staticClass:"detailTitle"},[i("p",[t._v(t._s(t.sightName))]),t._v(" "),i("p",[t._v(t._s(t.gallaryImgs.length))])]),t._v(" "),i("Fade",[i("Album",{directives:[{name:"show",rawName:"v-show",value:t.showImg,expression:"showImg"}],attrs:{gallaryImgs:t.gallaryImgs},on:{close:t.closeImg}})],1)],1)},staticRenderFns:[]};var z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailContent"},t._l(t.categoryList,function(e){return i("div",[i("div",{staticClass:"ite"},[t._v(t._s(e.title))]),t._v(" "),e.children?i("div",{staticClass:"aa"},[i("DetailContent",{attrs:{categoryList:e.children}})],1):t._e()])}))},staticRenderFns:[]};var G={data:function(){return{id:"",sightName:"",bannerImg:"",categoryList:"",gallaryImgs:""}},components:{DetailBanner:i("VU/8")(q,Q,!1,function(t){i("Qvpw")},"data-v-5fde3f9f",null).exports,DetailContent:i("VU/8")({name:"DetailContent",props:["categoryList"]},z,!1,function(t){i("duas")},"data-v-4ce33820",null).exports,DetailHeader:A},methods:{getDetail:function(){var t=this;h("static/mock/detail.json?id="+this.id).then(function(e){var i=e.data.data;t.sightName=i.sightName,t.bannerImg=i.bannerImg,t.categoryList=i.categoryList,t.gallaryImgs=i.gallaryImgs}).catch(function(t){console.log(t)})}},mounted:function(){var t=this.$route.params.id;this.id=t,this.getDetail()}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("DetailBanner",{attrs:{bannerImg:this.bannerImg,sightName:this.sightName,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("DetailHeader"),this._v(" "),e("DetailContent",{attrs:{categoryList:this.categoryList}})],1)},staticRenderFns:[]};var P=i("VU/8")(G,J,!1,function(t){i("xTtE")},null,null).exports;n.default.use(c.a);var K=new c.a({routes:[{path:"/",name:"Home",component:k},{path:"/city",name:"City",component:T},{path:"/detail/:id",name:"Detail",component:P}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),X=i("Au9i"),Z=i.n(X),tt=i("v5o6"),et=i.n(tt),it={cityname:localStorage.city?localStorage.city:"定位中..."},st=function(t){return t.cityname},nt={setcityname:function(t,e){t.cityname=e}};n.default.use(_.a);var at=new _.a.Store({state:it,mutations:nt,getters:s}),rt=i("7QTg"),ct=i.n(rt);i("991W"),i("0Hw8"),i("d8/S"),i("v2ns");et.a.attach(document.body),n.default.use(Z.a),n.default.use(ct.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:K,store:at,components:{App:r},template:"<App/>"})},OhHJ:function(t,e){},Qvpw:function(t,e){},WrBD:function(t,e){},YMAE:function(t,e){},"d8/S":function(t,e){},duas:function(t,e){},ehSV:function(t,e){},itA2:function(t,e){},mhXM:function(t,e){},ocjU:function(t,e){},s03r:function(t,e){},v2ns:function(t,e){},xTtE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7aaf1c7c58b81395b72a.js.map