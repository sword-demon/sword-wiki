"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9014],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(o),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8301:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=o(7462),n=(o(7294),o(4137));const a={id:"proto3\u8bed\u6cd5",title:"proto3\u8bed\u6cd5",sidebar_position:2,data:"2022\u5e7410\u670826\u65e5"},i="proto3\u8bed\u6cd5",p={unversionedId:"Go/gRPC/proto3\u8bed\u6cd5",id:"Go/gRPC/proto3\u8bed\u6cd5",title:"proto3\u8bed\u6cd5",description:"Google\u6587\u6863\u5730\u5740\uff1ahttps://developers.google.com/protocol-buffers/docs/proto3",source:"@site/wiki/dev/Go/gRPC/2.proto3\u8bed\u6cd5.md",sourceDirName:"Go/gRPC",slug:"/Go/gRPC/proto3\u8bed\u6cd5",permalink:"/sword-wiki/dev/Go/gRPC/proto3\u8bed\u6cd5",draft:!1,tags:[],version:"current",lastUpdatedBy:"wxvirus",lastUpdatedAt:1666794135,formattedLastUpdatedAt:"2022\u5e7410\u670826\u65e5",sidebarPosition:2,frontMatter:{id:"proto3\u8bed\u6cd5",title:"proto3\u8bed\u6cd5",sidebar_position:2,data:"2022\u5e7410\u670826\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e00\u4e2agRPC\u793a\u4f8b",permalink:"/sword-wiki/dev/Go/gRPC/\u7b2c\u4e00\u4e2agRPC\u793a\u4f8b"},next:{title:"go\u5bf9\u63a5websocket",permalink:"/sword-wiki/dev/category/go\u5bf9\u63a5websocket"}},l={},s=[{value:"\u5b9a\u4e49\u4e00\u4e2a\u6d88\u606f",id:"\u5b9a\u4e49\u4e00\u4e2a\u6d88\u606f",level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"proto3\u8bed\u6cd5"},"proto3\u8bed\u6cd5"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"  Google\u6587\u6863\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"https://developers.google.com/protocol-buffers/docs/proto3")),(0,n.kt)("p",{parentName:"blockquote"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"protobuf"),"\u7c7b\u4f3c\u4e8e",(0,n.kt)("inlineCode",{parentName:"p"},"json"),"\uff0c\u662f\u4e00\u4e2a\u5e8f\u5217\u5316\u7684\u534f\u8bae\uff0c\u6216\u8005\u8bf4\u5b83\u662f\u4e00\u4e2a\u63a5\u53e3\u63cf\u8ff0\u8bed\u8a00\uff0c\u4e3b\u8981\u4f5c\u7528\u5c31\u662f\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"rpc"),"\u6846\u67b6\u91cc\u628a\u5b83\u4f5c\u4e3a\u901a\u4fe1\u7684\u5e8f\u5217\u5316\u7684\u4e00\u4e2a\u534f\u8bae\u3002")),(0,n.kt)("h2",{id:"\u5b9a\u4e49\u4e00\u4e2a\u6d88\u606f"},"\u5b9a\u4e49\u4e00\u4e2a\u6d88\u606f"),(0,n.kt)("p",null,"\u6211\u4eec\u524d\u9762\u5b9a\u4e49\u6d88\u606f\u7684\u65f6\u5019\u4f7f\u7528\u7684\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"message"),"\u5173\u952e\u5b57,\u6587\u4ef6\u7c7b\u578b\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},".proto"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage HelloRequest {\n    string name = 1;\n    int32 page = 2;\n    int32 page_size = 3;\n}\n')),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u6307\u5b9a\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"proto3"),"\u8bed\u6cd5\uff0c\u5426\u5219",(0,n.kt)("inlineCode",{parentName:"li"},"protocol buffer"),"\u7f16\u8bd1\u5668\u5c06\u5047\u5b9a\u4f60\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"proto2"),"\uff0c\u8fd9\u4e2a\u58f0\u660e\u5fc5\u987b\u662f\u6587\u4ef6\u7684\u7b2c\u4e00\u4e2a\u975e\u7a7a\u6ce8\u91ca\u884c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HelloRequest"),"\u6d88\u606f\u5b9a\u4e49\u4e863\u4e2a\u5b57\u6bb5\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u8868\u793a\u5e0c\u671b\u5305\u542b\u5728\u6b64\u7c7b\u6d88\u606f\u4e2d\u7684\u6bcf\u4e00\u6bb5\u6570\u636e\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u6709\u4e00\u4e2a\u540d\u79f0\u548c\u7c7b\u578b\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u7684\u5b57\u6bb5\u7c7b\u578b\u90fd\u662f\u6807\u91cf\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e3a\u5b57\u6bb5\u6307\u5b9a\u7ec4\u5408\u7c7b\u578b\uff0c\u5305\u62ec\u679a\u4e3e\u548c\u5176\u4ed6\u6d88\u606f\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u6700\u540e\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"1 2 3"),"\u662f\u5e8f\u53f7\u5e76\u4e14\u4e0d\u91cd\u590d\u7684\uff0c\u8fd9\u4e9b\u5b57\u6bb5\u7f16\u53f7\u7528\u6765\u5728\u6d88\u606f\u4e8c\u8fdb\u5236\u683c\u5f0f\u4e2d\u6807\u8bc6\u5b57\u6bb5\uff0c\u5728\u6d88\u606f\u7c7b\u578b\u4f7f\u7528\u540e\u4e0d\u80fd\u518d\u66f4\u6539\u3002\u3010\u6ce8\u610f\uff1a\u8303\u56f41\u523015\u4e2d\u7684\u5b57\u6bb5\u7f16\u53f7\u9700\u8981\u4e00\u4e2a\u5b57\u8282\u8fdb\u884c\u7f16\u7801\uff0c\u5305\u62ec\u5b57\u6bb5\u7f16\u53f7\u548c\u5b57\u6bb5\u7c7b\u578b\uff1b\u8303\u56f416\u52302047\u7684\u5b57\u6bb5\u7f16\u53f7\u91c7\u75282\u4e2a\u5b57\u8282\u3002\u56e0\u6b64\uff0c\u7ecf\u5e38\u4f7f\u7528\u7684\u6d88\u606f\u5143\u7d20\u4fdd\u7559\u6570\u5b571\u523015\u7684\u7f16\u53f7\uff0c",(0,n.kt)("strong",{parentName:"li"},"\u5207\u8bb0\u5c06\u6765\u53ef\u80fd\u6dfb\u52a0\u7684\u7ecf\u5e38\u4f7f\u7528\u7684\u5143\u7d20\u7559\u51fa\u4e00\u4e9b\u7f16\u53f7"),"\u3011\uff1b"))),(0,n.kt)("p",null,"\u53ef\u4ee5\u8bbf\u95ee\u5927\u4f6c\u7684\u535a\u5ba2\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.liwenzhou.com/posts/Go/Protobuf3-language-guide-zh/"},"https://www.liwenzhou.com/posts/Go/Protobuf3-language-guide-zh/"),"\uff0c\u57fa\u672c\u5c31\u662f\u8c37\u6b4c\u6587\u6863\u7684\u4e2d\u6587\u7ffb\u8bd1\u7248\u3002"))}u.isMDXComponent=!0}}]);