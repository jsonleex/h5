webpackJsonp([7],{"+ILz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("rzQm"),i=n.n(s),o=(n("EuXz"),n("14gb")),a=n("BM2P"),r=n("UnZV"),l=n("axjn"),c={name:"news-detail",components:{ArticleCard:r["a"],CommentItem:l["a"]},data:function(){return{oldID:0,news:{},loading:!0,fetching:!1,likes:[],comments:[],pinnedCom:[],fetchComing:!1,noMoreCom:!1,maxComId:0}},computed:{newsID:function(){return this.$route.params.newsID},uid:function(){return this.$store.state.CURRENTUSER.id},isMine:function(){return this.news.user_id===this.uid},liked:{get:function(){return!!this.news.has_like},set:function(t){this.news.has_like=t}},likeCount:{get:function(){return this.news.digg_count||0},set:function(t){t&&(this.news.digg_count=t)}},commentCount:{get:function(){return this.news.comment_count||0},set:function(t){this.news.comment_count=t}},time:function(){return this.news.created_at||""},cate:function(){var t=this.news.category;t=void 0===t?{}:t;var e=t.name,n=void 0===e?"未分类":e;return n},body:function(){return Object(a["default"])(this.news.content||"")}},methods:{fetchNews:function(){var t=this;this.fetching||(this.fetching=!0,this.$http.get("/news/".concat(this.newsID)).then(function(e){var n=e.data,s=void 0===n?{}:n;t.news=s,t.oldID=t.newsID,setTimeout(function(){t.loading=!1,t.fetching=!1,t.fetchNewsComments(),t.fetchNewsLikes()},800)}).catch(function(e){console.log(e),t.$router.back()}))},fetchNewsLikes:function(){var t=this;this.$http.get("/news/".concat(this.newsID,"/likes")).then(function(e){var n=e.data,s=void 0===n?[]:n;s&&s.length,t.likes=s})},fetchNewsComments:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.fetchComing||(this.fetchComing=!0,this.$http.get("/news/".concat(this.newsID,"/comments"),{params:{after:e}}).then(function(n){var s=n.data,o=s.pinneds,a=void 0===o?[]:o,r=s.comments,l=void 0===r?[]:r;a&&a.length&&(t.pinnedCom=e?i()(t.pinneds).concat(i()(a)):a),l&&l.length?(t.comments=e?i()(t.comments).concat(i()(l)):l,t.maxComId=l[l.length-1].id):t.noMoreCom=!0,t.fetchComing=!1}).catch(function(){t.fetchComing=!1}))},likeNews:function(){var t=this,e=this.liked?"delete":"post";this.fetching||(this.fetching=!0,this.$http({method:e,url:"/news/".concat(this.newsID,"/likes"),validataStatus:function(t){return 201===t||204===t}}).then(function(){"post"===e?(t.liked=!0,t.likeCount+=1):(t.liked=!1,t.likeCount-=1),t.fetching=!1}).catch(function(){t.fetching=!1}))},commentNews:function(){var t=this;o["a"].$emit("commentInput",{onOk:function(e){t.sendComment({body:e})}})},shareNews:function(){console.log("分享")},moreAction:function(){var t=this,e=[{text:"收藏",method:function(){console.log("收藏")}}],n=this.isMine?[{text:"申请文章置顶",method:function(){t.$Message.info("置顶功能开发中，敬请期待")}},{text:"删除",method:function(){t.$Message.info("资讯删除功能开发中，敬请期待")}}]:[{text:"举报",method:function(){t.$Message.info("举报功能开发中，敬请期待")}}];o["a"].$emit("actionSheet",e.concat(n),"取消")},replyComment:function(t,e){var n=this;t===this.uid?o["a"].$emit("actionSheet",[{text:"申请评论置顶",method:function(){n.$Message.info("置顶功能开发中，敬请期待")}},{text:"删除评论",method:function(){n.$Message.info("评论删除功能开发中，敬请期待")}}],"取消"):o["a"].$emit("commentInput",{placeholder:"回复： ".concat(e),onOk:function(e){n.sendComment({reply_user:t,body:e})}})},sendComment:function(t){var e=this,n=t.reply_user,s=t.body,i={};s&&s.length>0?(i.body=s,n&&(i["reply_user"]=n),this.$http.post("/news/".concat(this.newsID,"/comments"),i,{validataStatus:function(t){return 201===t}}).then(function(t){var n=t.data;e.$Message.success("评论成功"),console.log(n),o["a"].$emit("commentInput:close",!0)}).catch(function(){e.$Message.error("评论失败"),o["a"].$emit("commentInput:close",!0)})):this.$Message.error("评论内容不能为空")}},activated:function(){var t=this;this.newsID&&(this.newsID!==this.oldID?this.fetchNews():setTimeout(function(){t.loading=!1},600))},deactivated:function(){this.loading=!0}},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article-card",{attrs:{liked:t.liked,loading:t.loading},on:{"on-like":t.likeNews,"on-share":t.shareNews,"on-more":t.moreAction,"on-comment":t.commentNews}},[n("div",{staticClass:"m-flex-shrink1 m-flex-grow1 m-art m-main"},[n("section",{staticClass:"m-art-head"},[n("h1",[t._v(t._s(t.news.title))]),n("p",[n("i",{staticClass:"m-art-cate"},[t._v(t._s(t.cate))]),n("span",[t._v("来自 "+t._s(t.news.from||"原创"))])])]),n("p",{staticClass:"m-art-subject"},[t._v(t._s(t.news.subject))]),n("div",{staticClass:"m-art-body",domProps:{innerHTML:t._s(t.body)}}),n("div",{staticClass:"m-box m-aln-center m-justify-bet m-art-foot"},[n("div",{staticClass:"m-flex-grow1 m-flex-shrink1 m-box m-aln-center m-art-like-list"},[t.likeCount>0?[n("ul",{staticClass:"m-box m-flex-grow0 m-flex-shrink0"},t._l(t.likes.slice(0,5),function(t,e){var s=t.user,i=t.id;return n("li",{key:i,staticClass:"m-avatar-box tiny",style:{zIndex:5-e}},[n("img",{attrs:{src:s.avatar}})])})),n("span",[t._v(t._s(t._f("formatNum")(t.likeCount))+"人点赞")])]:t._e()],2),n("div",{staticClass:"m-box-model m-aln-end m-art-info"},[n("span",[t._v("发布于"+t._s(t._f("time2tips")(t.time)))]),n("span",[t._v(t._s(t._f("formatNum")(t.news.hits||0))+"浏览")])])])]),n("div",{staticClass:"m-box-model m-art-comments"},[n("ul",{staticClass:"m-box m-aln-center m-art-comments-tabs"},[n("li",[t._v(t._s(t._f("formatNum")(t.commentCount))+"条评论")])]),t._l(t.pinnedCom,function(t){return n("comment-item",{key:t.id,attrs:{pinned:!0,comment:t}})}),t._l(t.comments,function(e){return n("comment-item",{key:e.id,attrs:{comment:e},on:{click:t.replyComment}})}),n("div",{staticClass:"m-box m-aln-center m-justify-center load-more-box"},[t.noMoreCom?n("span",{staticClass:"load-more-ph"},[t._v("---没有更多---")]):n("span",{staticClass:"load-more-btn",on:{click:function(e){e.stopPropagation(),t.fetchNewsComments(t.maxComId)}}},[t._v("\n          "+t._s(t.fetchComing?"加载中...":"点击加载更多")+"\n        ")])])],2)])},h=[],u=n("XyMi"),d=!1,f=null,p=null,v=null,w=Object(u["a"])(c,m,h,d,f,p,v);e["default"]=w.exports},"8Zmr":function(t,e){},DXP0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("rzQm"),i=n.n(s),o=n("Hsq6"),a={name:"news-search",components:{newsItem:o["a"]},data:function(){return{keyword:"",list:[]}},computed:{after:function(){var t=this.list.length;return t>0?this.list[t-1].id:0},topEvent:function(){var t=this.keyword.length;return t>0?this.onRefresh:null}},methods:{beforeSearch:function(t){if(this.keyword){var e=t.type;switch(e){case"click":return this.onRefresh();case"keypress":return 13===t.keyCode&&this.onRefresh()}}},onRefresh:function(){var t=this;if(!this.keyword)return this.$refs.loadmore.topEnd(!1);this.$http.get("/news",{params:{limit:15,key:this.keyword}}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.data;t.list=n,t.$refs.loadmore.topEnd(!(n.length<15))})},onLoadMore:function(){var t=this;if(!this.keyword)return this.$refs.loadmore.bottomEnd(!0);this.$http.get("/news",{params:{limit:15,key:this.keyword,after:this.after}}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.data;n.length>0&&(t.list=i()(t.list).concat(i()(t.data))),t.$refs.loadmore.bottomEnd(n.length<15)})}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-news-search"},[n("head-top",{attrs:{"go-back":!0,append:!0,title:"搜索资讯"}},[n("div",{staticClass:"head-top-cancel",attrs:{slot:"append"},on:{click:t.beforeSearch},slot:"append"},[t._v("搜索")]),n("div",{staticClass:"p-news-search-input",attrs:{slot:"title"},slot:"title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text"},domProps:{value:t.keyword},on:{keypress:function(e){t.beforeSearch(e)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})])]),n("load-more",{ref:"loadmore",staticClass:"p-news-search-body",attrs:{onRefresh:t.topEvent,onLoadMore:t.onLoadMore}},t._l(t.list,function(e){return e.id?n("news-item",{key:e.id,attrs:{news:e}}):t._e()}))],1)},l=[],c=n("XyMi");function m(t){n("WKej")}var h=!1,u=m,d=null,f=null,p=Object(c["a"])(a,r,l,h,u,d,f);e["default"]=p.exports},Hsq6:function(t,e,n){"use strict";n("EuXz");var s={name:"news-item",props:["news"],data:function(){return{hits:0,cate:null,image:null,title:null,author:null,time:""}},methods:{formatData:function(){var t=this.news,e=t.hits,n=void 0===e?0:e,s=t.author,i=void 0===s?"":s,o=t.image,a=void 0===o?{}:o,r=t.title,l=void 0===r?"":r,c=t.created_at,m=t.category,h=void 0===m?{}:m;this.hits=n,this.title=l,this.author=i,this.time=c,this.cate=h.name,this.image=a?"/api/v2/files/".concat(a.id):null}},mounted:function(){this.formatData()}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"news-item",attrs:{tag:"div",to:"/news/"+t.news.id}},[n("section",{staticClass:"news-item--body"},[n("h2",[t._v(t._s(t.title))]),n("p",[n("i",{staticClass:"news-cate"},[t._v(t._s(t.cate))]),n("span",[t._v("作者 "+t._s(t.author))]),n("span",[t._v("・"+t._s(t.hits)+"浏览")]),n("span",[t._v("・"+t._s(t._f("time2tips")(t.time)))])])]),t.image?n("div",{staticClass:"news-item--poster"},[n("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.image,expression:"image"}]})]):t._e()])},o=[],a=n("XyMi");function r(t){n("lWxD")}var l=!1,c=r,m=null,h=null,u=Object(a["a"])(s,i,o,l,c,m,h);e["a"]=u.exports},LhTa:function(t,e,n){var s=n("rFzY"),i=n("Q6Nf"),o=n("FryR"),a=n("BbyF"),r=n("plSV");t.exports=function(t,e){var n=1==t,l=2==t,c=3==t,m=4==t,h=6==t,u=5==t||h,d=e||r;return function(e,r,f){for(var p,v,w=o(e),g=i(w),C=s(r,f,3),b=a(g.length),_=0,x=n?d(e,b):l?d(e,0):void 0;b>_;_++)if((u||_ in g)&&(p=g[_],v=C(p,_,w),t))if(n)x[_]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return _;case 2:x.push(p)}else if(m)return!1;return h?-1:c||m?m:x}}},U6qc:function(t,e,n){"use strict";var s=n("Ds5P"),i=n("LhTa")(6),o="findIndex",a=!0;o in[]&&Array(1)[o](function(){a=!1}),s(s.P+s.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("RhFG")(o)},UnZV:function(t,e,n){"use strict";var s=n("hAM4"),i=n.n(s),o={name:"article-card",props:{loading:{type:Boolean,default:!0},liked:{type:Boolean,default:!1}},methods:{handelLike:function(){this.$emit("on-like")},handelComment:function(){this.$emit("on-comment")},handelShare:function(){this.$emit("on-share")},handelMore:function(){this.$emit("on-more")},goback:function(){this.$router.go(-1)}},mounted:function(){this.headroom=new i.a(this.$refs.head,{tolerance:5,offset:50,classes:{initial:"headroom-head",pinned:"headroom--headShow",unpinned:"headroom--headHide"}}),this.footroom=new i.a(this.$refs.foot,{tolerance:5,offset:50,classes:{initial:"headroom-foot",pinned:"headroom--footShow",unpinned:"headroom--footHide"}}),this.headroom.init(),this.footroom.init()}},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",{staticClass:"m-wrapper m-wbox"},[n("div",{staticClass:"m-box-model m-art-card"},[n("div",{ref:"head",staticClass:"m-box-model m-justify-center m-pos-f m-head-top m-main m-bb1 m-lim-width"},[t._t("head",[n("header",{staticClass:"m-box m-justify-bet m-aln-center"},[n("div",{staticClass:"m-box m-flex-grow1 m-aln-center m-flex-base0"},[n("svg",{staticClass:"m-style-svg m-svg-def",on:{click:t.goback}},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-back"}})])]),n("div",{staticClass:"m-box-model m-flex-grow1 m-aln-center m-flex-base0 m-head-top-title"},[t._v("资讯详情")]),n("div",{staticClass:"m-box m-flex-grow1 m-aln-center m-flex-base0 m-justify-end"},[n("svg",{staticClass:"m-style-svg m-svg-def"},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-share"}})])])])])],2),t.loading?n("div",{staticClass:"m-spinner pos-f"},[n("div"),n("div")]):t._e(),n("main",{staticClass:"m-lim-width m-box-model m-art-card-main mt90"},[t._t("default")],2),n("footer",{ref:"foot",staticClass:"m-pos-f m-box m-aln-center m-justify-aro m-bt1 m-art-card-foot"},[t._t("foot",[n("a",{staticClass:"m-box-model m-aln-center",on:{click:function(e){e.preventDefault(),t.handelLike(e)}}},[n("svg",{staticClass:"m-style-svg m-svg-def"},[n("use",{attrs:{"xlink:href":t.liked?"#feed-like":"#feed-unlike"}})]),n("span",[t._v("喜欢")])]),n("a",{staticClass:"m-box-model m-aln-center",on:{click:function(e){e.preventDefault(),t.handelComment(e)}}},[n("svg",{staticClass:"m-style-svg m-svg-def"},[n("use",{attrs:{"xlink:href":"#feed-comment"}})]),n("span",[t._v("评论")])]),n("a",{staticClass:"m-box-model m-aln-center",on:{click:function(e){e.preventDefault(),t.handelShare(e)}}},[n("svg",{staticClass:"m-style-svg m-svg-def"},[n("use",{attrs:{"xlink:href":"#base-share"}})]),n("span",[t._v("分享")])]),n("a",{staticClass:"m-box-model m-aln-center",on:{click:function(e){e.preventDefault(),t.handelMore(e)}}},[n("svg",{staticClass:"m-style-svg m-svg-def"},[n("use",{attrs:{"xlink:href":"#feed-more"}})]),n("span",[t._v("更多")])])])],2)])])])},r=[],l=n("XyMi"),c=!1,m=null,h=null,u=null,d=Object(l["a"])(o,a,r,c,m,h,u);e["a"]=d.exports},WKej:function(t,e){},XO1R:function(t,e,n){var s=n("ydD5");t.exports=Array.isArray||function(t){return"Array"==s(t)}},Xm8N:function(t,e){},axjn:function(t,e,n){"use strict";n("EuXz");function s(t){for(var e,n=0,s=0;s<t.length;s++)e=t.charCodeAt(s),e<127?n+=.25:e>=128&&e<=2047?n+=1:e>=2048&&e<=65535&&(n+=1.5);return n}var i={name:"comment-item",props:{comment:null,pinned:Boolean},data:function(){return{showAll:!1}},computed:{isShowAll:{get:function(){return this.bodyLength<60||this.showAll},set:function(t){this.showAll=t}},user:function(){var t=this.comment.user;return t&&t.id?t:{}},replyUser:function(){var t=this.comment.reply;return t&&t.id?t:null},body:function(){return this.comment.body||""},bodyLength:function(){return s(this.body)},time:function(){return this.comment.created_at||""}},methods:{handelClick:function(){if(!this.isShowAll)return this.isShowAll=!this.isShowAll;this.$emit("on-click",this.user.id,this.user.name,this.comment.id)}},mounted:function(){this.$store.commit("SAVE_USER",this.user)}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-lim-width m-art-comment"},[n("div",{staticClass:"m-box m-art-comment-wrap"},[n("avatar",{attrs:{user:t.user}}),n("section",{staticClass:"m-box-model m-flex-grow1 m-flex-shrink1 m-art-comment-body"},[n("header",{staticClass:"m-box m-aln-center m-justify-bet m-art-comment-usr"},[n("h4",{staticClass:"m-flex-grow1 m-flex-shrink1"},[t._v(t._s(t.user.name))]),n("div",{staticClass:"m-box m-aln-center"},[t.pinned?n("span",{staticClass:"m-art-comment-icon-top"},[t._v("置顶")]):t._e(),n("span",[t._v(t._s(t._f("time2tips")(t.time)))])])]),n("article",{staticClass:"m-text-box m-art-comment-con",class:{maxh:!t.isShowAll},on:{click:t.handelClick}},[t.replyUser?[n("span",{staticClass:"m-art-comment-rep"},[t._v("\n            回复"),n("router-link",{attrs:{to:"/user/"+t.replyUser.id}},[t._v(t._s(t.replyUser.name))]),t._v("：\n          ")],1)]:t._e(),t._v("\n        "+t._s(t.body)+"\n        "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.bodyLength>60&&!t.isShowAll,expression:"bodyLength > 60 && !isShowAll"}],staticClass:"m-text-more",on:{click:function(e){e.stopPropagation(),t.isShowAll=!t.isShowAll}}},[t._v(" >>更多")])],2)])],1)])},a=[],r=n("XyMi"),l=!1,c=null,m=null,h=null,u=Object(r["a"])(i,o,a,l,c,m,h);e["a"]=u.exports},boo2:function(t,e,n){var s=n("UKM+"),i=n("XO1R"),o=n("kkCw")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),s(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},hAM4:function(t,e,n){var s,i,o;(function(n,a){"use strict";i=[],s=a,o="function"===typeof s?s.apply(e,i):s,void 0===o||(t.exports=o)})(0,function(){"use strict";var t={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};function e(t){this.callback=t,this.ticking=!1}function n(t){return t&&"undefined"!==typeof window&&(t===window||t.nodeType)}function s(t){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var e,i,o=t||{};for(i=1;i<arguments.length;i++){var a=arguments[i]||{};for(e in a)"object"!==typeof o[e]||n(o[e])?o[e]=o[e]||a[e]:o[e]=s(o[e],a[e])}return o}function i(t){return t===Object(t)?t:{down:t,up:t}}function o(t,e){e=s(e,o.options),this.lastKnownScrollY=0,this.elem=t,this.tolerance=i(e.tolerance),this.classes=e.classes,this.offset=e.offset,this.scroller=e.scroller,this.initialised=!1,this.onPin=e.onPin,this.onUnpin=e.onUnpin,this.onTop=e.onTop,this.onNotTop=e.onNotTop,this.onBottom=e.onBottom,this.onNotBottom=e.onNotBottom}return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,e.prototype={constructor:e,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},o.prototype={constructor:o,init:function(){if(o.cutsTheMustard)return this.debouncer=new e(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;for(var e in this.initialised=!1,t)t.hasOwnProperty(e)&&this.elem.classList.remove(t[e]);this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,e=this.classes;!t.contains(e.pinned)&&t.contains(e.unpinned)||(t.add(e.unpinned),t.remove(e.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,e=this.classes;t.contains(e.unpinned)&&(t.remove(e.unpinned),t.add(e.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,e=this.classes;t.contains(e.top)||(t.add(e.top),t.remove(e.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notTop)||(t.add(e.notTop),t.remove(e.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.bottom)||(t.add(e.bottom),t.remove(e.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notBottom)||(t.add(e.notBottom),t.remove(e.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var e=t<0,n=t+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return e||n},toleranceExceeded:function(t,e){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[e]},shouldUnpin:function(t,e){var n=t>this.lastKnownScrollY,s=t>=this.offset;return n&&s&&e},shouldPin:function(t,e){var n=t<this.lastKnownScrollY,s=t<=this.offset;return n&&e||s},update:function(){var t=this.getScrollY(),e=t>this.lastKnownScrollY?"down":"up",n=this.toleranceExceeded(t,e);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),t+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(t,n)?this.unpin():this.shouldPin(t,n)&&this.pin(),this.lastKnownScrollY=t)}},o.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},o.cutsTheMustard="undefined"!==typeof t&&t.rAF&&t.bind&&t.classList,o})},lWxD:function(t,e){},plSV:function(t,e,n){var s=n("boo2");t.exports=function(t,e){return new(s(t))(e)}},sO8D:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("rzQm"),i=n.n(s),o=n("Hsq6"),a=(n("SldL"),n("7hDC")),r=n.n(a),l=(n("n12u"),n("U6qc"),"news__filter"),c={name:"NewsFilter",data:function(){return{prefixCls:l,editing:!1,showAll:!1,myCates:[],moreCates:[],currentCate:{id:0,name:"推荐"}}},watch:{editing:function(){},showAll:function(t){!t&&(this.editing=!1)}},methods:{showEditor:function(){this.showAll=!this.showAll},onOk:function(){if(this.editing){this.editing=!1;var t=this.myCates.map(function(t){return t.id}).join(",");this.$http.patch("/news/categories/follows",{follows:t}),this.showAll=!1,this.$emit("onOk",this.myCates)}else this.editing=!0},chooseCate:function(t,e){if(this.showAll)if(this.editing){var n=this.myCates.findIndex(function(t){return t.id===e.id});if(n>-1)this.moreCates.push(e),this.myCates.splice(n,1);else{var s=this.moreCates.findIndex(function(t){return t.id===e.id});this.myCates.push(e),this.moreCates.splice(s,1)}}else this.editing=!0;else if(e.id!==this.currentCate.id){var i=t.target;this.currentCate=Object.assign({},e,{el:i}),this.$emit("change",this.currentCate)}},fetchCates:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,n,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/news/cates");case 2:e=t.sent,n=e.data,n=void 0===n?{}:n,s=n.my_cates,o=n.more_cates,this.myCates=s?i()(s):[],this.moreCates=o?i()(o):[];case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){this.fetchCates()}},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.prefixCls,{showAll:t.showAll}]},[n("div",{class:t.prefixCls+"--head"},[n("span",[t._v("点击以编辑")]),n("div",[n("button",{on:{click:t.onOk}},[t._v(t._s(t.editing?"完成":"编辑"))]),n("button",{on:{click:t.showEditor}},[t._v("收起")])])]),n("div",{class:t.prefixCls+"--list__wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAll,expression:"!showAll"}],class:t.prefixCls+"--switch",on:{click:t.showEditor}},[n("svg",[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-arrow-r"}})])]),n("span",{class:t.prefixCls+"--list__label"},[t._v("我的订阅")]),n("div",{class:[t.prefixCls+"--list",{editing:t.editing}]},[n("div",{class:[t.prefixCls+"--list__item",{active:0===~~t.currentCate.id}],on:{click:function(e){t.chooseCate(e,{id:0,name:"推荐"})}}},[t._v("推荐")]),t._l(t.myCates,function(e){return n("div",{key:"myCate-"+e.id,class:[t.prefixCls+"--list__item",{active:e.id===t.currentCate.id}],on:{click:function(n){t.chooseCate(n,e)}}},[t._v(t._s(e.name))])})],2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAll,expression:"showAll"}],class:t.prefixCls+"--list__wrap"},[n("span",{class:t.prefixCls+"--list__label"},[t._v("更多订阅")]),n("div",{class:t.prefixCls+"--list"},t._l(t.moreCates,function(e){return n("div",{key:"moreCate-"+e.id,class:[t.prefixCls+"--list__item"],on:{click:function(n){t.chooseCate(n,e)}}},[t._v(t._s(e.name))])}))])])},h=[],u=n("XyMi");function d(t){n("8Zmr")}var f=!1,p=d,v=null,w=null,g=Object(u["a"])(c,m,h,f,p,v,w),C=g.exports,b={name:"news-index",components:{newsItem:o["a"],newsFilter:C},data:function(){return{list:[],currentCate:0}},computed:{after:function(){var t=this.list.length;return t>0?this.list[t-1].id:0}},methods:{onCateChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=void 0===e?0:e;this.list=[],this.currentCate=n,this.$refs.loadmore.beforeRefresh()},onRefresh:function(){var t=this,e=0===this.currentCate?{limit:10,recommend:1}:{limit:10,cate_id:this.currentCate};this.$http.get("/news",{params:e}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.data,s=void 0===n?[]:n;t.list=s,t.$refs.loadmore.topEnd(!(s.length<10))})},onLoadMore:function(){var t=this,e=0===this.currentCate?{limit:10,recommend:1,after:this.after}:{limit:10,cate_id:this.currentCate,after:this.after};this.$http.get("/news",{params:e}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.data,s=void 0===n?[]:n;t.list=i()(t.list).concat(i()(s)),t.$refs.loadmore.bottomEnd(s.length<10)})}}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-news"},[n("header",{staticClass:"m-box m-pos-f m-main m-bb1 m-head-top"},[n("div",{staticClass:"m-box m-aln-center m-flex-grow1 m-flex-base0"},[n("svg",{staticClass:"m-style-svg m-svg-def",on:{click:t.goBack}},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-back"}})])]),t._m(0),n("div",{staticClass:"m-box m-aln-center m-flex-grow1 m-flex-base0 m-justify-end"},[n("router-link",{staticClass:"m-style-svg m-svg-def",attrs:{append:"",tag:"svg",to:"search"}},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-search"}})])],1)]),n("news-filter",{on:{change:t.onCateChange}}),n("load-more",{ref:"loadmore",staticClass:"p-news--body",attrs:{onRefresh:t.onRefresh,onLoadMore:t.onLoadMore}},t._l(t.list,function(e){return e.id?n("news-item",{key:e.id,attrs:{news:e}}):t._e()}))],1)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-box m-aln-center m-flex-grow1 m-flex-base0 m-justify-center m-head-top-title"},[n("span",[t._v("资讯")])])}];function k(t){n("Xm8N")}var y=!1,$=k,A=null,E=null,M=Object(u["a"])(b,_,x,y,$,A,E);e["default"]=M.exports}});
//# sourceMappingURL=news.js.map