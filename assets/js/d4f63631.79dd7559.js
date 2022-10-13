"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),k=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=k(r),m=o,b=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var k=2;k<a;k++)l[k]=r[k];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>k});var n=r(7462),o=(r(7294),r(3905));const a={id:"K8S\u7b80\u4ecb",title:"K8S\u7b80\u4ecb",sidebar_position:1,data:"2022\u5e7406\u670809\u65e5",tags:["K8S"]},l=void 0,i={unversionedId:"K8S/K8S\u7b80\u4ecb",id:"K8S/K8S\u7b80\u4ecb",title:"K8S\u7b80\u4ecb",description:"K8s \u662f Google \u5f00\u6e90\u7684\u4e00\u4e2a\u5bb9\u5668\u7f16\u6392\u5f15\u64ce\uff0c\u5b83\u652f\u6301\u81ea\u52a8\u5316\u90e8\u7f72\u3001\u5927\u89c4\u6a21\u53ef\u4f38\u7f29\u3001\u5e94\u7528\u5bb9\u5668\u5316\u7ba1\u7406\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u901a\u5e38\u8981\u90e8\u7f72\u8be5\u5e94\u7528\u7684\u591a\u4e2a\u5b9e\u4f8b\u4ee5\u4fbf\u5bf9\u5e94\u7528\u8bf7\u6c42\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002",source:"@site/wiki/dev/K8S/1.K8S\u7b80\u4ecb.md",sourceDirName:"K8S",slug:"/K8S/K8S\u7b80\u4ecb",permalink:"/sword-wiki/dev/K8S/K8S\u7b80\u4ecb",draft:!1,tags:[{label:"K8S",permalink:"/sword-wiki/dev/tags/k-8-s"}],version:"current",lastUpdatedBy:"wxvirus",lastUpdatedAt:1665591873,formattedLastUpdatedAt:"2022\u5e7410\u670812\u65e5",sidebarPosition:1,frontMatter:{id:"K8S\u7b80\u4ecb",title:"K8S\u7b80\u4ecb",sidebar_position:1,data:"2022\u5e7406\u670809\u65e5",tags:["K8S"]},sidebar:"tutorialSidebar",previous:{title:"K8S",permalink:"/sword-wiki/dev/category/k8s"},next:{title:"Swoole",permalink:"/sword-wiki/dev/category/swoole"}},p={},k=[{value:"k8s \u53d1\u5c55\u7ecf\u5386",id:"k8s-\u53d1\u5c55\u7ecf\u5386",level:2},{value:"\u7279\u70b9\uff1a",id:"\u7279\u70b9",level:3},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2}],u={toc:k};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"K8s \u662f Google \u5f00\u6e90\u7684\u4e00\u4e2a\u5bb9\u5668\u7f16\u6392\u5f15\u64ce\uff0c\u5b83\u652f\u6301\u81ea\u52a8\u5316\u90e8\u7f72\u3001\u5927\u89c4\u6a21\u53ef\u4f38\u7f29\u3001\u5e94\u7528\u5bb9\u5668\u5316\u7ba1\u7406\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u901a\u5e38\u8981\u90e8\u7f72\u8be5\u5e94\u7528\u7684\u591a\u4e2a\u5b9e\u4f8b\u4ee5\u4fbf\u5bf9\u5e94\u7528\u8bf7\u6c42\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u5728 K8S \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u5bb9\u5668\uff0c\u6bcf\u4e2a\u5bb9\u5668\u91cc\u9762\u8fd0\u884c\u4e00\u4e2a\u5e94\u7528\u5b9e\u4f8b\uff0c\u7136\u540e\u901a\u8fc7\u5185\u7f6e\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u5b9e\u73b0\u5bf9\u8fd9\u4e00\u7ec4\u5e94\u7528\u5b9e\u4f8b\u7684\u7ba1\u7406\u3001\u53d1\u73b0\u3001\u8bbf\u95ee\uff0c\u800c\u8fd9\u4e9b\u7ec6\u8282\u90fd\u4e0d\u9700\u8981\u8fd0\u7ef4\u4eba\u5458\u53bb\u8fdb\u884c\u590d\u6742\u7684\u624b\u5de5\u914d\u7f6e\u548c\u5904\u7406\u3002")),(0,o.kt)("h2",{id:"k8s-\u53d1\u5c55\u7ecf\u5386"},"k8s \u53d1\u5c55\u7ecf\u5386"),(0,o.kt)("p",null,"K8S \u5b98\u7f51\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/"},"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Apache MESOS"),"\uff1a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u8d44\u6e90\u7ba1\u7406\u6846\u67b6 2019 \u5e74 5 \u6708\u4efd Twitter \u8f6c\u5411 K8S"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Swarm"),"\uff1a\u5bf9",(0,o.kt)("inlineCode",{parentName:"li"},"docker"),"\u4e13\u95e8\u505a\u7684 2019 \u5e74 7 \u6708\u4efd \u963f\u91cc\u4e91\u5ba3\u5e03\u4ece\u963f\u91cc\u4e91\u7684\u9009\u62e9\u5217\u8868\u91cc\u5254\u9664"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes"),"\uff1aGoogle 10 \u5e74\u524d\u5c31\u5f00\u59cb\u5bb9\u5668\u5316\u57fa\u7840\u67b6\u6784 \u7ec4\u4ef6\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"borg"),"\u7cfb\u7edf\uff0cgoogle \u5185\u90e8\u7684 \u540e\u6765\u91c7\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"Go"),"\u8bed\u8a00\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"borg"),"\u7684\u8bbe\u8ba1\u601d\u8def\u5f00\u53d1\u4e86 K8S \u5e76\u4e14\u5f00\u6e90\u7ed9\u4e86\u5bb9\u5668\u57fa\u91d1\u4f1a")),(0,o.kt)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f7b\u91cf\u7ea7\uff1a\u6d88\u8017\u7684\u8d44\u6e90\u5c0f"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u6e90"),(0,o.kt)("li",{parentName:"ul"},"\u5f39\u6027\u4f38\u7f29"),(0,o.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861\uff1aLVS")),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u88c5\u7bb1")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8e\u5bb9\u5668\u5bf9\u5e94\u8fd0\u884c\u73af\u5883\u7684\u8d44\u6e90\u914d\u7f6e\u8981\u6c42\u81ea\u52a8\u90e8\u7f72\u5e94\u7528\u5bb9\u5668")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u4fee\u590d(\u81ea\u6108\u80fd\u529b)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5f53\u5bb9\u5668\u5931\u8d25\u65f6\uff0c\u4f1a\u5bf9\u5bb9\u5668\u8fdb\u884c\u91cd\u542f"),(0,o.kt)("p",{parentName:"blockquote"},"\u5f53\u6240\u90e8\u7f72\u7684\u8282\u70b9\u6709\u95ee\u9898\u65f6\uff0c\u4f1a\u5bf9\u5bb9\u5668\u8fdb\u884c\u91cd\u65b0\u90e8\u7f72\u548c\u91cd\u65b0\u8c03\u5ea6"),(0,o.kt)("p",{parentName:"blockquote"},"\u5f53\u5bb9\u5668\u672a\u901a\u8fc7\u76d1\u63a7\u68c0\u67e5\u65f6\uff0c\u4f1a\u5173\u95ed\u6b64\u5bb9\u5668\u76f4\u5230\u5bb9\u5668\u6b63\u5e38\u8fd0\u884c\u65f6\uff0c\u624d\u4f1a\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6c34\u5e73\u6269\u5c55")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u7b80\u5355\u7684\u547d\u4ee4\u3001\u7528\u6237 UI \u754c\u9762\u6216\u57fa\u4e8e CPU \u7b49\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u5bf9\u5e94\u7528\u5bb9\u5668\u8fdb\u884c\u89c4\u6a21\u6269\u5927\u6216\u89c4\u6a21\u526a\u88c1\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u6bd4\u5982\uff1a\u53cc\u5341\u4e00\u65f6\u4f1a\u6709\u5927\u91cf\u8bf7\u6c42\uff0c\u4f1a\u8fdb\u884c\u6269\u5927\uff1b\u7b49\u5230\u6d3b\u52a8\u7ed3\u675f\u4e4b\u540e\u4f1a\u88c1\u526a")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u670d\u52a1\u53d1\u73b0")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7528\u6237\u4e0d\u9700\u8981\u4f7f\u7528\u989d\u5916\u7684\u670d\u52a1\u53d1\u73b0\u673a\u5236\uff0c\u5c31\u80fd\u591f\u57fa\u4e8e K8S \u81ea\u8eab\u80fd\u529b\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u8d1f\u8f7d\u5747\u8861\uff1b\u5bf9\u5916\u670d\u52a1\u6709\u4e00\u4e2a\u7edf\u4e00\u7684\u5165\u53e3\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),"\uff0c\u5982\u679c\u8bbf\u95ee\u8ba2\u5355\u670d\u52a1\u5c31\u53ea\u8bbf\u95ee\u8ba2\u5355\u7684\u8282\u70b9\u7b49\uff0c\u8fd8\u53ef\u4ee5\u5728\u8fd9\u4e24\u8005\u4e4b\u95f4\u505a\u8d1f\u8f7d\u5747\u8861")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u6eda\u52a8\u66f4\u65b0")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u7684\u53d8\u5316\uff0c\u5bf9\u5e94\u7528\u5bb9\u5668\u8fd0\u884c\u7684\u5e94\u7528\uff0c\u8fdb\u884c\u4e00\u6b21\u6027\u6216\u6279\u91cf\u5f0f\u66f4\u65b0\uff1b\u5bf9\u52a0\u8fdb\u53bb\u7684\u670d\u52a1\u4f1a\u8fdb\u884c\u68c0\u6d4b\uff0c\u5982\u679c\u5e94\u7528\u6ca1\u6709\u95ee\u9898\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u5f00\u59cb\u5bf9\u5916\u8fdb\u884c\u670d\u52a1\u3002")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u7248\u672c\u56de\u9000")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u90e8\u7f72\u60c5\u51b5\uff0c\u5bf9\u5e94\u5e94\u7528\u5bb9\u5668\u8fd0\u884c\u7684\u5e94\u7528\uff0c\u8fdb\u884c\u5386\u53f2\u7248\u672c\u5373\u65f6\u56de\u9000")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"\u79d8\u94a5\u548c\u914d\u7f6e\u7ba1\u7406")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u4e0d\u9700\u8981\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u90e8\u7f72\u548c\u66f4\u65b0\u79d8\u94a5\u548c\u5e94\u7528\u914d\u7f6e\uff0c\u7c7b\u4f3c\u70ed\u90e8\u7f72")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u7f16\u6392")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u81ea\u52a8\u5b9e\u73b0\u5b58\u50a8\u7cfb\u7edf\u6302\u8f7d\u53ca\u5e94\u7528\uff0c\u7279\u522b\u5bf9\u6709\u72b6\u6001\u5e94\u7528\u5b9e\u73b0\u6570\u636e\u6301\u4e45\u5316\u975e\u5e38\u91cd\u8981\uff0c\u5b58\u50a8\u7cfb\u7edf\u53ef\u4ee5\u6765\u81ea\u4e8e\u672c\u5730\u76ee\u5f55\u3001\u7f51\u7edc\u5b58\u50a8(NFS\u3001Gluster\u3001Ceph \u7b49)\u3001\u516c\u5171\u4e91\u5b58\u50a8\u670d\u52a1")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"\u6279\u5904\u7406")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u63d0\u4f9b\u4e00\u6b21\u6027\u4efb\u52a1\u3001\u5b9a\u65f6\u4efb\u52a1\uff1b\u6ee1\u8db3\u6279\u91cf\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u7684\u573a\u666f")))}c.isMDXComponent=!0}}]);