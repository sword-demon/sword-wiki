"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4602],{3519:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"learn-on-day","metadata":{"permalink":"/sword-wiki/blog/learn-on-day","editUrl":"https://github.com/sword-demon/sword-wiki/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-16-learn-on-day/index.md","source":"@site/blog/2022-10-16-learn-on-day/index.md","title":"\u5b66\u4e60\u8bb0\u5f55","description":"\u597d\u770b\u7684\u80cc\u666f\u56fe","date":"2022-10-16T00:00:00.000Z","formattedDate":"2022\u5e7410\u670816\u65e5","tags":[{"label":"blog","permalink":"/sword-wiki/blog/tags/blog"},{"label":"study","permalink":"/sword-wiki/blog/tags/study"}],"readingTime":0.66,"hasTruncateMarker":true,"authors":[{"name":"wxvirus","title":"\u65e0\u89e3\u7684\u6e38\u620f","url":"https://www.wjstar.top/img/avatar.jpeg","imageURL":"https://www.wjstar.top/img/avatar.jpeg","key":"wxvirus"}],"frontMatter":{"slug":"learn-on-day","title":"\u5b66\u4e60\u8bb0\u5f55","authors":"wxvirus","tags":["blog","study"]},"nextItem":{"title":"\u6587\u6863\u7b14\u8bb0\u521d\u521b\u6837\u5f0f\u8c03\u8282","permalink":"/sword-wiki/blog/wiki-style"}},"content":"![\u597d\u770b\u7684\u80cc\u666f\u56fe](./bg/bg.jpg)\\n\\n\x3c!-- truncate --\x3e\\n\\n1. \u5b66\u4e60`Vue3` + `vite`\u5b9e\u73b0\u7ba1\u7406\u540e\u53f0\\n    - \u521b\u5efa\u57fa\u672c\u9879\u76ee\\n    - \u767b\u5f55\u9875\u6784\u5efa\u4ee5\\n    - \u5c01\u88c5\u4f7f\u7528\u7684\u4e00\u4e9b\u5e93  \\n    - \u8c03\u7528\u767b\u5f55\u63a5\u53e3\u8c03\u7528\u4ee5\u53ca\u4f18\u5316\\n    - \u4f7f\u7528`vuex`\u5b58\u50a8\u767b\u5f55\u7528\u6237\u4fe1\u606f\\n2. \u5b66\u4e60`rust`\u8bed\u8a00\\n    - \u5b66\u4e60`struct`\u4e2d\u4f7f\u7528\u6cdb\u578b\\n    - \u6cdb\u578b\u65b9\u6cd5`demo`\u624b\u52a8\u7ec3\u4e60\\n    - `trait`\u5165\u95e8\uff0c\u7f16\u5199\u7b80\u5355\u5171\u4eab\u884c\u4e3a\u63a5\u53e3\\n\\n\\n>\u5269\u4f59\u65f6\u95f4\uff0c\u770b\u770b\u7535\u89c6 \uff0c\u770b\u770b\u7fa4\u53cb\u5439\u725b\u903c\\n\\n:::caution \u96be\u53d7\\n\u5076\u5c14\u5904\u7406\u4e00\u4e0b\u516c\u53f8\u9879\u76ee\u95ee\u9898\\n:::"},{"id":"wiki-style","metadata":{"permalink":"/sword-wiki/blog/wiki-style","editUrl":"https://github.com/sword-demon/sword-wiki/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-14-wiki-style-post.md","source":"@site/blog/2022-10-14-wiki-style-post.md","title":"\u6587\u6863\u7b14\u8bb0\u521d\u521b\u6837\u5f0f\u8c03\u8282","description":"","date":"2022-10-14T00:00:00.000Z","formattedDate":"2022\u5e7410\u670814\u65e5","tags":[{"label":"wiki","permalink":"/sword-wiki/blog/tags/wiki"},{"label":"blog","permalink":"/sword-wiki/blog/tags/blog"},{"label":"style","permalink":"/sword-wiki/blog/tags/style"}],"readingTime":0.48,"hasTruncateMarker":false,"authors":[{"name":"wxvirus","title":"\u65e0\u89e3\u7684\u6e38\u620f","url":"https://www.wjstar.top/img/avatar.jpeg","imageURL":"https://www.wjstar.top/img/avatar.jpeg","key":"wxvirus"}],"frontMatter":{"slug":"wiki-style","title":"\u6587\u6863\u7b14\u8bb0\u521d\u521b\u6837\u5f0f\u8c03\u8282","authors":"wxvirus","tags":["wiki","blog","style"]},"prevItem":{"title":"\u5b66\u4e60\u8bb0\u5f55","permalink":"/sword-wiki/blog/learn-on-day"},"nextItem":{"title":"\u6587\u6863\u7b14\u8bb0\u521d\u521b","permalink":"/sword-wiki/blog/wiki-create"}},"content":"```css title=\\"styles.module.css\\"\\n.features {\\n    display: flex;\\n    align-items: center;\\n    padding: 2rem 0;\\n    width: 100%;\\n}\\n\\n.featureSvg {\\n    height: 200px;\\n    width: 200px;\\n}\\n\\n.mainWrapper {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background-repeat: no-repeat;\\n    background-position: right center;\\n    background-size: cover;\\n    /*background-color: #2d364a;*/\\n    background-image: url(\\"../../../static/img/lanran.jpg\\");\\n}\\n\\n.mainWrapper .title {\\n    margin-bottom: 50px;\\n    flex: 1 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    font-size: 3rem;\\n    position: relative;\\n    bottom: 150px;\\n    justify-content: center;\\n    font-weight: 600;\\n}\\n\\n.mainWrapper .subTitle {\\n    font-size: 22px;\\n    font-weight: 300;\\n}\\n\\n.mainWrapper .subTitle > div > span {\\n    color: #338bff;\\n}\\n\\n.mainWrapper .subTitle .socialLinks > a {\\n    cursor: pointer;\\n    padding-right: 26px;\\n}\\n\\n```"},{"id":"wiki-create","metadata":{"permalink":"/sword-wiki/blog/wiki-create","editUrl":"https://github.com/sword-demon/sword-wiki/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-13-wiki-create-post.md","source":"@site/blog/2022-10-13-wiki-create-post.md","title":"\u6587\u6863\u7b14\u8bb0\u521d\u521b","description":"wiki\u521b\u5efa","date":"2022-10-13T00:00:00.000Z","formattedDate":"2022\u5e7410\u670813\u65e5","tags":[{"label":"wiki","permalink":"/sword-wiki/blog/tags/wiki"},{"label":"blog","permalink":"/sword-wiki/blog/tags/blog"},{"label":"note","permalink":"/sword-wiki/blog/tags/note"}],"readingTime":0.2,"hasTruncateMarker":false,"authors":[{"name":"wxvirus","title":"\u65e0\u89e3\u7684\u6e38\u620f","url":"https://www.wjstar.top/img/avatar.jpeg","imageURL":"https://www.wjstar.top/img/avatar.jpeg","key":"wxvirus"}],"frontMatter":{"slug":"wiki-create","title":"\u6587\u6863\u7b14\u8bb0\u521d\u521b","authors":"wxvirus","tags":["wiki","blog","note"]},"prevItem":{"title":"\u6587\u6863\u7b14\u8bb0\u521d\u521b\u6837\u5f0f\u8c03\u8282","permalink":"/sword-wiki/blog/wiki-style"}},"content":"## wiki\u521b\u5efa\\n\\n>\u5728\u4eca\u5929\uff0c\u51b3\u5b9a\u5c06\u524d\u9762\u4f7f\u7528`vue-press`\u7248\u672c\u7684\u6587\u6863\u7ba1\u7406\u6362\u6210`docusaurus`\u6765\u4f7f\u7528\uff0c\u64cd\u4f5c\u66f4\u52a0\u4fbf\u6377\uff0c\u53d1\u5e03\u66f4\u52a0\u5bb9\u6613\u3002"}]}')}}]);