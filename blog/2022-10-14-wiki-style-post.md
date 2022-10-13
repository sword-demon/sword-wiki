---
slug: wiki-style
title: 文档笔记初创样式调节
authors: wxvirus
tags: [wiki, blog, style]
---

```css title="styles.module.css"
.features {
    display: flex;
    align-items: center;
    padding: 2rem 0;
    width: 100%;
}

.featureSvg {
    height: 200px;
    width: 200px;
}

.mainWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
    /*background-color: #2d364a;*/
    background-image: url("../../../static/img/lanran.jpg");
}

.mainWrapper .title {
    margin-bottom: 50px;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    position: relative;
    bottom: 150px;
    justify-content: center;
    font-weight: 600;
}

.mainWrapper .subTitle {
    font-size: 22px;
    font-weight: 300;
}

.mainWrapper .subTitle > div > span {
    color: #338bff;
}

.mainWrapper .subTitle .socialLinks > a {
    cursor: pointer;
    padding-right: 26px;
}

```
