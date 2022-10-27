---
id: Go面试题
title: Go面试题
sidebar_position: 1
date: 2022-10-27
tags: [go, interview]
---

# 面试题



## 题目1：

```go
package main

import "fmt"

func main()
    s := []string{"a", "b", "c"}

    copy(s[1:], s)

    fmt.Println(s)
}
```

-   A: [a a a]
-   B: [a a b]
-   C: [a a b c]
-   D: [b c c]
-   E: panic



>   答案为：B



:::tip

`copy`函数主要是切片的拷贝，不支持数组。将第二个切片的元素拷贝到第一个切片里，拷贝的长度为两个切片中长度较小的长度值。

一个特殊的用法，将字符串当成`[]byte`类型的切片

```go
bytes := []byte("hello world")
copy(bytes, "ha ha")
```

会一个字符一个字符的复制：`ha ha world`，即将`hello`五个字符替换为`ha ha`

:::



## 题目2：

```go
package main

import "fmt"

func main() {
    a := make([]int, 20)

    b := a[18:]
    b = append(b, 2022)

    fmt.Println(len(b), cap(b))
}
```

-   A: 1 2
-   B: 3 4
-   C: 3 33
-   D: 3 40

>   答案：B



**考点**

1.   切片冒号截取操作的底层机制
2.   切片的扩容原理



## `defer`执行顺序和`panic`

>   go语言面试题[https://www.topgoer.cn/docs/gomianshiti/mian1](https://www.topgoer.cn/docs/gomianshiti/mian1)

下面这段代码输出的内容

```go
package main

 import (
     "fmt"
 )

 func main() {
     defer_call()
 }

func defer_call() {
    defer func() { fmt.Println("打印前") }()
    defer func() { fmt.Println("打印中") }()
    defer func() { fmt.Println("打印后") }()
    panic("触发异常")
}
```

-   `defer`的执行顺序是后进先出
-   `panic`出现的时候，会先按照`defer`的规则执行，然后最后执行`panic`

所以结果是

```bash
打印后
打印中
打印前
panic: 触发异常
```



## for range 案例

```go
func main() {
     slice := []int{0,1,2,3}
     m := make(map[int]*int)

     for key,val := range slice {
         m[key] = &val
     }

    for k,v := range m {
        fmt.Println(k,"->",*v)
    }
}
```

这里`map[int]*int`存储的`value`是`*int`，是一个`int`的指针类型，所以`&val`取得都是变量`val`的地址，`for range` 循环的时候会创建每个元素的副本，而不是元素的引用，`val`最后值就是3，所以最终取的都是3的地址，所以再次循环取值的时候，所有输出都是3。

正确写法：

```go
func main() {
     slice := []int{0,1,2,3}
     m := make(map[int]*int)

     for key,val := range slice {
         value := val // 每次取副本的值的地址
         m[key] = &value
     }

    for k,v := range m {
        fmt.Println(k,"===>",*v)
    }
}
```



