# BookStoreSystem

一个以前后端分离思想架构的web项目，因为比较小，于是直接把前端塞到了webapp目录。

# 预览
数据库布置在阿里云上，操作起来就比较方便了。
![]( https://image--bed.oss-cn-qingdao.aliyuncs.com/image--bed--PicGo/20200607042918.png?x-oss-process=image)

# 数据库设计
![](https://image--bed.oss-cn-qingdao.aliyuncs.com/image--bed--PicGo/20200607043234.png?x-oss-process=image)


![](https://image--bed.oss-cn-qingdao.aliyuncs.com/image--bed--PicGo/20200607043123.png?x-oss-process=image)

# 技术栈

前端的布局与样式全部使用的bootstrap，动作全部使用jquery。

后端采用MVC架构，控制层使用反射优化了结构。
使用了apache的dbutil通过结果集处理器直接转化为list，并使用c3p0连接池优化数据库访问。

前后通信前端使用ajax发送请求, 端使用jackson以结果类的形式将请求的数据封装为json返回。

# 缺点

购物车功能来不及实现了，也未设计表存储商品，就考虑或者用cookie来假装存到库里了，或者只是用js只做视觉效果。
这里采用的后一种方法。这个demo也就不该了，课程设计大项目会详细考虑购物车功能完整的实现。
