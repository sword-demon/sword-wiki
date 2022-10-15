"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4591],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>f});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},l=Object.keys(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=o.createContext({}),s=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d=function(n){var e=s(n.components);return o.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,c=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),u=s(t),f=r,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||l;return t?o.createElement(m,a(a({ref:e},d),{},{components:t})):o.createElement(m,a({ref:e},d))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:r,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7089:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const l={},a="\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde",i={unversionedId:"Go/websocket/\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde",id:"Go/websocket/\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde",title:"\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde",description:"\u524d\u7aef\u5904\u7406",source:"@site/wiki/dev/Go/websocket/\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde.md",sourceDirName:"Go/websocket",slug:"/Go/websocket/\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde",permalink:"/dev/Go/websocket/\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde",draft:!1,tags:[],version:"current",lastUpdatedBy:"wxvirus",lastUpdatedAt:1665682904,formattedLastUpdatedAt:"2022\u5e7410\u670813\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c01\u88c5\u5ba2\u6237\u7aef\u5bf9\u8c61\u548cPing\u5ba2\u6237\u7aef",permalink:"/dev/Go/websocket/\u5c01\u88c5\u5ba2\u6237\u7aef\u5bf9\u8c61\u548cping"},next:{title:"Go\u5355\u5143\u6d4b\u8bd5",permalink:"/dev/Go/Go\u5355\u5143\u6d4b\u8bd5"}},c={},s=[{value:"\u524d\u7aef\u5904\u7406",id:"\u524d\u7aef\u5904\u7406",level:2}],d={toc:s};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde"},"\u7b80\u5355\u65ad\u7ebf\u91cd\u8fde"),(0,r.kt)("h2",{id:"\u524d\u7aef\u5904\u7406"},"\u524d\u7aef\u5904\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'let lock = false;\nlet wsClient;\n\nfunction reConnect() {\n    if (lock) return;\n    lock = true;\n    console.log(\'\u6b63\u5728\u91cd\u8fde\')\n    setTimeout(function () {\n        NewClient()\n        lock = false\n    }, 2000)\n}\n\n// 0: \u8868\u793a\u8fde\u63a5\u5c1a\u672a\u5efa\u7acb\n// 1: \u8868\u793a\u8fde\u63a5\u5df2\u7ecf\u5efa\u7acb\u53ef\u4ee5\u901a\u4fe1\n// 2: \u8868\u793a\u8fde\u63a5\u6b63\u5728\u5173\u95ed\n// 3: \u8868\u793a\u8fde\u63a5\u5df2\u7ecf\u5173\u95ed\nconst GetClient = function () {\n    if (wsClient != null && wsClient.readyState === 1) {\n        return wsClient\n    }\n    NewClient()\n    return wsClient\n}\n\nconst NewClient = function () {\n    wsClient = new WebSocket("ws://localhost:8080/echo");\n    ws.onopen = function () {\n        console.log("open");\n    }\n    ws.onclose = function (e) {\n        console.log("close");\n        reConnect();\n    }\n    ws.onerror = function (e) {\n        console.log(e);\n        reConnect();\n    }\n    return ws\n}\n\nconst TYPE_NEWPOD = 101;\nconst NewPod = function (PodName, PodImage, PodNode) {\n    return {\n        CmdType: TYPE_NEWPOD,\n        CmdAction: "add",\n        CmdData: {\n            PodName,\n            PodImage,\n            PodNode\n        }\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div>\n    <p>\n      <el-button @click="testSend">\u6d4b\u8bd5\u53d1\u9001</el-button>\n    </p>\n    <div style="width: 95%;margin: 0 auto">\n      <div style="width: 95%;margin:30px auto">\n        <el-table\n            :data="podList"\n            border\n            style="width: 100%">\n          <el-table-column\n              prop="PodName"\n              label="PodName"\n              width="100">\n          </el-table-column>\n          <el-table-column\n              prop="PodImage"\n              label="Pod\u955c\u50cf"\n              width="220">\n          </el-table-column>\n          <el-table-column\n              prop="PodNode"\n              label="Pod\u8282\u70b9"\n              width="100">\n          </el-table-column>\n\n        </el-table>\n      </div>\n\n    </div>\n  </div>\n</template>\n<script type="module">\nmodule.exports = {\n  data() {\n    return {\n      podList: [],\n      client: null,\n    }\n  },\n  created() {\n    this.CheckWsClient();\n  },\n  methods: {\n    CheckWsClient() {\n      this.client = GetClient();\n      this.client.onmessage = (e) => {\n        if (e.data !== \'ping\') {\n          console.log(JSON.parse(e.data).Result)\n          this.$forceUpdate();\n        }\n      }\n    },\n    testSend() {\n      // \u6309\u94ae\u65f6\u95f4\u6267\u884c\u7684\u65f6\u5019\u4e5f\u6267\u884c\u4e00\u4e0b\u68c0\u6d4b\u5ba2\u6237\u7aef\u4ee3\u7801\n      this.CheckWsClient();\n\n      // this.client.send("abc");\n      const pod = NewPod("abc", "aaa", "fe")\n      this.client.send(JSON.stringify(pod))\n\n      const ping = {\n        CmdType: 999,\n        CmdAction: "abc",\n      }\n      this.client.send(JSON.stringify(ping))\n    }\n  }\n\n\n}\n<\/script>\n<style>\n.sdt {\n  margin: 10px auto;\n  width: 90%;\n  border-radius: 5px;\n  display: block;\n  float: left;\n  margin-left: 50px\n}\n\n.sdt dt {\n  width: 100%;\n  display: block;\n  color: #3A7B43;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 10px\n}\n\n.sdt dd {\n  float: left;\n  margin: 0 auto;\n  text-indent: 1em\n}\n\n.sdt .row {\n  width: 100%;\n}\n\n.sdt dd .search {\n  width: 50%;\n}\n\n.sdt dd a {\n  color: #3a8ee6\n}\n\n.sdt dd a:hover {\n  background: #eb5975;\n  color: #fff\n}\n\n.sdt dd .select {\n  background: #eb5975;\n  color: #fff\n}\n\n.sdt dd .numtext {\n  width: 100px\n}\n\n.sdt dd span {\n  margin: 0 auto\n}\n\na {\n  cursor: pointer\n}\n\n.el-pagination {\n  margin: 0 auto;\n  float: left\n}\n</style>\n')))}p.isMDXComponent=!0}}]);