webpackJsonp([22],{180:function(n,e,t){var s=t(133)(t(228),t(320),null,null,null);n.exports=s.exports},203:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(211);t.n(s);e.default={data:function(){return{windowHeight:window.innerHeight}}}},204:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(212);t.n(s);e.default={}},205:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(213);t.n(s);e.default={props:["title"]}},206:function(n,e,t){e=n.exports=t(178)(!0),e.push([n.i,".app-container{position:relative;background-color:#f6f6f6}.app-container .github{position:absolute;right:10px;top:10px;width:32px;height:32px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Container.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,eACE,kBAAkB,AAClB,wBAAyB,CAS1B,AAXD,uBAKI,kBAAkB,AAClB,WCPe,ADQf,SCRe,ADSf,WCTe,ADUf,WCVe,CDWhB",file:"Container.scss",sourcesContent:['@import "../core/func";\n\n.app-container {\n  position: relative;\n  background-color: #f6f6f6;\n\n  .github {\n    position: absolute;\n    right: r(10);\n    top: r(10);\n    width: r(32);\n    height: r(32);\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},207:function(n,e,t){e=n.exports=t(178)(!0),e.push([n.i,"footer{text-align:center}.copyright{display:inline-block;margin:30px auto 50px;color:#ccc}.copyright-cn{font-size:14px}.copyright-en{font-size:12px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Footer.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,iBAAkB,CACnB,AAED,WACE,qBAAqB,AACrB,sBAA6B,AAC7B,UAAW,CASZ,AAPC,cACE,cCXe,CDYhB,AAED,cACE,cCfe,CDgBhB",file:"Footer.scss",sourcesContent:['@import "../core/func";\n\nfooter {\n  text-align: center;\n}\n\n.copyright {\n  display: inline-block;\n  margin: r(30) auto r(50) auto;\n  color: #ccc;\n\n  &-cn {\n    font-size: r(14);\n  }\n\n  &-en {\n    font-size: r(12);\n  }\n}',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},208:function(n,e,t){e=n.exports=t(178)(!0),e.push([n.i,"header{padding:15px;font-size:16px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Header.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,aCFiB,ADGjB,cCHiB,CDIlB",file:"Header.scss",sourcesContent:['@import "../core/func";\n\nheader {\n  padding: r(15);\n  font-size: r(16);\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},209:function(n,e,t){e=n.exports=t(178)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageFooter.vue",sourceRoot:""}])},210:function(n,e,t){e=n.exports=t(178)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageHeader.vue",sourceRoot:""}])},211:function(n,e,t){var s=t(206);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(179)("800fcacc",s,!0)},212:function(n,e,t){var s=t(207);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(179)("0a81e2ac",s,!0)},213:function(n,e,t){var s=t(208);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(179)("ce2f83c8",s,!0)},214:function(n,e,t){var s=t(209);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(179)("6c761514",s,!0)},215:function(n,e,t){var s=t(210);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(179)("0f5d00fc",s,!0)},216:function(n,e,t){var s=t(133)(t(203),t(220),null,null,null);n.exports=s.exports},217:function(n,e,t){function s(n){t(214)}var o=t(133)(t(204),t(219),s,null,null);n.exports=o.exports},218:function(n,e,t){function s(n){t(215)}var o=t(133)(t(205),t(221),s,null,null);n.exports=o.exports},219:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("footer",[t("div",{staticClass:"copyright"},[t("div",{staticClass:"copyright-cn"},[n._v("众安·体验设计中心")]),n._v(" "),t("div",{staticClass:"copyright-en"},[n._v("Zhongan UX Densign")])])])}]}},220:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container",style:{minHeight:n.windowHeight+"px"}},[t("a",{staticClass:"github",attrs:{href:"https://github.com/chrisHchen/zarm-vue"}},[t("svg",{attrs:{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16",fill:"#42b983"}},[t("path",{attrs:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},221:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("header",{staticClass:"Header"},[n._v(n._s(n.title))])},staticRenderFns:[]}},228:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(216),o=t.n(s),r=t(218),i=t.n(r),c=t(217),a=t.n(c);e.default={components:{Container:o.a,PageHeader:i.a,PageFooter:a.a},data:function(){return{visible1:!1,visible2:!1,actions1:[{text:"操作一",onClick:function(){return console.log("action 1")}},{text:"操作二",onClick:function(){return console.log("action 2")}},{theme:"error",text:"操作三",onClick:function(){return console.log("action 3")}}],actions2:[{text:"操作一",onClick:function(){return console.log("action 1")}},{text:"操作二",onClick:function(){return console.log("action 2")}}]}},methods:{cancelCb:function(n){console.log("cancelled")}}}},320:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Container",{staticClass:"actionsheet-page"},[t("PageHeader",{attrs:{title:"动作面板 ActionSheet"}}),n._v(" "),t("main",[t("div",[t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("基本")])],1),n._v(" "),t("za-panel-body",[t("za-cell",[t("za-button",{attrs:{size:"xs"},on:{click:function(e){n.visible1=!0}},slot:"description"},[n._v("开启")]),n._v("\n            普通\n          ")],1),n._v(" "),t("za-cell",[t("za-button",{attrs:{size:"xs"},on:{click:function(e){n.visible2=!0}},slot:"description"},[n._v("开启")]),n._v("\n            无取消操作\n          ")],1)],1)],1)],1),n._v(" "),t("za-actionsheet",{attrs:{visible:n.visible1,actions:n.actions1},on:{"update:visible":function(e){n.visible1=e}}}),n._v(" "),t("za-actionsheet",{attrs:{visible:n.visible2,actions:n.actions2,showCancel:!1},on:{"update:visible":function(e){n.visible2=e},cancel:n.cancelCb}})],1),n._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=22.18d345fb70f0403cc9f8.js.map