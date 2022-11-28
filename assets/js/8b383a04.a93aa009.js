"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1073],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={id:"vector\u5feb\u901f\u5165\u95e8",title:"vector\u5feb\u901f\u5165\u95e8",sidebar_position:14,date:new Date("2022-11-15T00:00:00.000Z"),tags:["rust","vector"]},s="vector\u5feb\u901f\u5165\u95e8",o={unversionedId:"Rust/vector\u5feb\u901f\u5165\u95e8",id:"Rust/vector\u5feb\u901f\u5165\u95e8",title:"vector\u5feb\u901f\u5165\u95e8",description:"\u5b83\u548c\u6570\u7ec4\u662f\u76f8\u53cd\u7684\uff0c\u5b83\u662f\u5b58\u5728\u5806\u4e0a\u7684\u3001\u662fRust\u6807\u51c6\u5e93\u5e2e\u4f60\u505a\u7684\u529f\u80fd\u3001\u957f\u5ea6\u53ef\u4ee5\u81ea\u52a8\u6269\u5145\u3002",source:"@site/wiki/dev/Rust/14.vector\u5feb\u901f\u5165\u95e8.md",sourceDirName:"Rust",slug:"/Rust/vector\u5feb\u901f\u5165\u95e8",permalink:"/sword-wiki/dev/Rust/vector\u5feb\u901f\u5165\u95e8",draft:!1,tags:[{label:"rust",permalink:"/sword-wiki/dev/tags/rust"},{label:"vector",permalink:"/sword-wiki/dev/tags/vector"}],version:"current",lastUpdatedBy:"wxvirus",lastUpdatedAt:1668526158,formattedLastUpdatedAt:"2022\u5e7411\u670815\u65e5",sidebarPosition:14,frontMatter:{id:"vector\u5feb\u901f\u5165\u95e8",title:"vector\u5feb\u901f\u5165\u95e8",sidebar_position:14,date:"2022-11-15T00:00:00.000Z",tags:["rust","vector"]},sidebar:"tutorialSidebar",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/sword-wiki/dev/Rust/\u751f\u547d\u5468\u671f"},next:{title:"\u5b8f\u5165\u95e8",permalink:"/sword-wiki/dev/Rust/\u5b8f\u5165\u95e8"}},l={},p=[{value:"\u4f7f\u7528\u5b8f\u6765\u5b9a\u4e49",id:"\u4f7f\u7528\u5b8f\u6765\u5b9a\u4e49",level:2},{value:"\u4f7f\u7528Vec::new\u6765\u521b\u5efa",id:"\u4f7f\u7528vecnew\u6765\u521b\u5efa",level:2},{value:"\u904d\u5386",id:"\u904d\u5386",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vector\u5feb\u901f\u5165\u95e8"},"vector\u5feb\u901f\u5165\u95e8"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u5b83\u548c\u6570\u7ec4\u662f\u76f8\u53cd\u7684\uff0c\u5b83\u662f\u5b58\u5728\u5806\u4e0a\u7684\u3001\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Rust"),"\u6807\u51c6\u5e93\u5e2e\u4f60\u505a\u7684\u529f\u80fd\u3001\u957f\u5ea6\u53ef\u4ee5\u81ea\u52a8\u6269\u5145\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5b8f\u6765\u5b9a\u4e49"},"\u4f7f\u7528\u5b8f\u6765\u5b9a\u4e49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let tags = vec!["php", "java"];\n    println("{:?}", tags);\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u8981\u52a8\u6001\u52a0\uff0c\u6211\u4eec\u9700\u8981\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"mut"),"\u4fee\u9970\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut tags = vec!["php", "java"];\n    tags.push("go");\n    println!("{:?}", tags);\n}\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528vecnew\u6765\u521b\u5efa"},"\u4f7f\u7528Vec::new\u6765\u521b\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut tags = Vec::new();\n    tags.push("go");\n    tags.push("php");\n    tags.push("js");\n    println!("{:?}", tags);\n}\n')),(0,a.kt)("h2",{id:"\u904d\u5386"},"\u904d\u5386"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"\u7684\u65b9\u5f0f\u6765\u904d\u5386"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut tags = Vec::new();\n    tags.push("js");\n    tags.push("php");\n    tags.push("java");\n    // \u5de6\u95ed\u53f3\u5f00\u533a\u95f4\n    for i in 0..tags.len() {\n        println!("{:?}", tags[i]);\n    }\n    println!("{:?}", tags);\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"for i in xxx"),"\u7684\u65b9\u5f0f\uff0c\u8fd9\u91cc\u9700\u8981\u4f7f\u7528\u5f15\u7528\u7684\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut tags = Vec::new();\n    tags.push("js");\n    tags.push("php");\n    tags.push("java");\n    // \u5de6\u95ed\u53f3\u5f00\u533a\u95f4\n    for i in tags {\n        println!("{:?}", i);\n    }\n    println!("{:?}", tags.len()); // \u9519\u8bef\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u8fd8\u884c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"tags"),"\u83b7\u53d6\u957f\u5ea6\uff0c\u8fd9\u91cc\u4f1a\u62a5\u9519 \uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," fn into_iter(self) -> Self::IntoIter;\n    |                  ^^^^\nhelp: consider iterating over a slice of the `Vec<&str>`'s content to avoid moving into the `for` loop\n    |\n13  |     for i in &tags {\n    |              +\n\nFor more information about this error, try `rustc --explain E0382`.\n")),(0,a.kt)("p",null,"\u5b83\u4f1a\u8ba9\u4f60\u4f7f\u7528\u5f15\u7528\u7684\u65b9\u5f0f\u53bb\u501f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut tags = Vec::new();\n    tags.push("js");\n    tags.push("php");\n    tags.push("java");\n    // \u5de6\u95ed\u53f3\u5f00\u533a\u95f4\n    for i in &tags {\n        println!("{:?}", i);\n    }\n    println!("{:?}", tags.len());\n}\n')),(0,a.kt)("p",null,"\u4fee\u6539\u91cc\u9762\u7684\u503c\uff0c\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"mut"),"\u52a0\u89e3\u5f15\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut tags = Vec::new();\n    tags.push(1);\n    tags.push(2);\n    // \u5de6\u95ed\u53f3\u5f00\u533a\u95f4\n    for i in &mut tags {\n        // \u89e3\u5f15\u7528\n        *i = *i + 10\n    }\n    println!("{:?}", tags);\n}\n')),(0,a.kt)("p",null,"\u6b64\u65f6\u5faa\u73af\u91cc\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"i"),"\u5c31\u76f8\u5f53\u4e8e\u662f\u4e00\u4e2a\u5957\u4e0a\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"\u7684\u5f15\u7528\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u89e3\u5f15\u7528\u83b7\u53d6\u539f\u6709\u7684\u503c\u7136\u540e\u624d\u80fd\u53bb\u52a0\u51cf\u3002"))}c.isMDXComponent=!0}}]);