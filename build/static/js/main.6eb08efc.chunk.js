(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,r){e.exports=r(64)},61:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var n,a,o=r(0),s=r.n(o),c=r(10),u=r(7),i=r(8),l=r(27),p=r(2);!function(e){e.SET_LOADING="TopNews#SetLoading",e.SET_ERROR="TopNews#SetError",e.SET_PARAMS="TopNews#SetParams",e.RESET_TOP_NEWS="TopNews#ResetNews"}(n||(n={})),function(e){e.LOAD_TOP_NEWS_START="Fetch#LoadTopNewsStart",e.LOAD_TOP_NEWS_SUCCESS="Fetch#LoadTopNewsSuccess",e.LOAD_TOP_NEWS_FAIL="Fetch#LoadTopNewsFail"}(a||(a={}));var d={loading:!1,error:void 0,params:{country:"tw",category:"general",q:"",page:1,pageSize:10},newsArr:void 0,endOfNews:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.LOAD_TOP_NEWS_SUCCESS:var r=t.newsArr;return Object(p.a)({},e,{newsArr:e.newsArr?e.newsArr.concat(r):r,endOfNews:r.length<=0});case a.LOAD_TOP_NEWS_FAIL:return Object(p.a)({},e,{error:t.err});case n.SET_LOADING:return Object(p.a)({},e,{loading:t.value});case n.SET_ERROR:return Object(p.a)({},e,{error:t.err});case n.SET_PARAMS:return Object(p.a)({},e,{params:Object(p.a)({},e.params,t.params)});case n.RESET_TOP_NEWS:return Object(p.a)({},e,{newsArr:d.newsArr});default:return e}},N=Object(i.d)(Object(i.c)({TopNews:w}),Object(i.a)(l.a)),m=r(9),f=r.n(m),T=r(11),E=r(4),O=r(6),A=r(15),h=r.n(A),S=r(28),v=r.n(S),_=function(){function e(){Object(E.a)(this,e)}return Object(O.a)(e,null,[{key:"createNewsFromNet",value:function(e){return{sourceId:e.source.id,sourceName:e.source.name,author:e.author,title:e.title,description:e.description,url:e.url,urlToImage:e.urlToImage,publishedAt:v()(e.publishedAt),content:e.content}}},{key:"createNewsArrayFromNet",value:function(e){var t=this;return e.map(function(e){return t.createNewsFromNet(e)})}}]),e}();h.a.defaults.headers.common["X-Api-Key"]="6d0457ef18344556a915836f1196386d";var g=function(){function e(){Object(E.a)(this,e),this.loadTopNewsArr=function(t){return function(){var r=Object(T.a)(f.a.mark(function r(n){return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n(e._loadTopNewsArrStart()),r.next=3,h.a.get("https://newsapi.org/v2/top-headlines",{params:t}).then(function(t){var r=_.createNewsArrayFromNet(t.data.articles);return n(e._loadTopNewsArrSucces(r)),r}).catch(function(t){throw n(e._loadTopNewsArrFail(t)),t});case 3:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}}return Object(O.a)(e,null,[{key:"_loadTopNewsArrSucces",value:function(e){return{type:a.LOAD_TOP_NEWS_SUCCESS,newsArr:e}}},{key:"_loadTopNewsArrFail",value:function(e){return{type:a.LOAD_TOP_NEWS_FAIL,err:e}}}]),e}();g._loadTopNewsArrStart=function(){return{type:a.LOAD_TOP_NEWS_START}};var b=r(30),y=r(29),j=r(31),L=function(){return s.a.createElement("div",{className:"loading-dots"},s.a.createElement("div",{className:"loading-dots--dot"}),s.a.createElement("div",{className:"loading-dots--dot"}),s.a.createElement("div",{className:"loading-dots--dot"}))},R=function(e){var t=e.news;return s.a.createElement("div",{className:"news-grid"},s.a.createElement("a",{href:t.url},s.a.createElement("img",{src:t.urlToImage,alt:""}),s.a.createElement("p",{className:"news-title"},t.title)))},P=function(e){function t(e){var r;return Object(E.a)(this,t),(r=Object(b.a)(this,Object(y.a)(t).call(this,e))).loadMore=function(){var e=r.props,t=e.params;(0,e.loadNews)(Object(p.a)({},t,{page:t.page+1}))},r}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.params;(0,e.loadNews)(t)}},{key:"render",value:function(){var e=this.props,t=e.loading,r=e.newsArr,n=e.endOfNews,a=Array(2).fill(0).map(function(e,t){return t+1});return s.a.createElement("div",{className:"news-grids"},a.map(function(e){return s.a.createElement("div",{key:e,className:"waterfall"},r&&r.map(function(t,r){return r%2===e-1?s.a.createElement(R,{key:t.url,news:t}):null}))}),!n&&(t?s.a.createElement(L,null):s.a.createElement("span",{className:"news-status",onClick:this.loadMore},"Load More")))}}]),t}(s.a.Component),k=new function e(){var t=this;Object(E.a)(this,e),this.fetchActions=void 0,this.setLoading=function(e){return{type:n.SET_LOADING,value:e}},this.setError=function(e){return{type:n.SET_ERROR,err:e}},this.setParams=function(e){return{type:n.SET_PARAMS,params:e}},this.resetTopNews=function(){return{type:n.RESET_TOP_NEWS}},this.loadTopNews=function(e){return function(){var r=Object(T.a)(f.a.mark(function r(n){return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n(t.setLoading(!0)),r.prev=1,n(t.setParams(e)),r.next=5,n(t.fetchActions.loadTopNewsArr(e));case 5:n(t.setLoading(!1)),r.next=12;break;case 8:throw r.prev=8,r.t0=r.catch(1),n(t.setLoading(!1)),r.t0;case 12:case"end":return r.stop()}},r,null,[[1,8]])}));return function(e){return r.apply(this,arguments)}}()},this.fetchActions=new g},F={resetNews:function(){return k.resetTopNews()},loadNews:function(e){return k.loadTopNews(e)}},I=Object(u.b)(function(e){return{loading:e.TopNews.loading,params:e.TopNews.params,newsArr:e.TopNews.newsArr,endOfNews:e.TopNews.endOfNews}},F)(P),D=(r(61),function(e){var t=e.category,r=e.country;return s.a.createElement("div",{className:"header"},s.a.createElement("img",{src:"https://newsapi.org/favicon-32x32.png"}),s.a.createElement("h3",null,"".concat(t.toUpperCase()," IN ").concat(r)))}),W={tw:"TAIWAN"},C=Object(u.b)(function(e){return{category:e.TopNews.params.category,country:W[e.TopNews.params.country]}},{})(D),x=document.getElementById("root");Object(c.render)(s.a.createElement(function(){return s.a.createElement("div",{id:"App"},s.a.createElement(u.a,{store:N},s.a.createElement(C,null),s.a.createElement(I,null)))},null),x)}},[[32,2,1]]]);
//# sourceMappingURL=main.6eb08efc.chunk.js.map