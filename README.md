这是一个对.doc或者.docx文档进行查重复率的查重系统，项目前端采用vue+bootstrap 后端spring+springMvc+MyBatis。项目目前还没完成（主要后台对重复率精确到还处理不好），但是页面整体设计基本已经完成。
# 前言
做这个项目主要是熟悉vue以及前后分离的一些经验，在这个项目之前，有了解过vue.js以及后端spring，虽然没用vue中插件elementUi，用的bootstrap，但是使用css这一类框架熟悉一下便能使用一些基础的样式。  
# 一、整体效果
## 1、首页  
作为页面的展示样式，不需登陆就可以查看，主要包含了角色权限（教师和学生）、查询的步骤等等。
![1](https://user-images.githubusercontent.com/46021189/64666557-4bdea000-d489-11e9-89d2-f1345fc3079c.png)
## 2、登录页面  
[2](https://user-images.githubusercontent.com/46021189/64666559-4bdea000-d489-11e9-84e5-86c13b360394.png)
## 3、文档提交页面  
![3](https://user-images.githubusercontent.com/46021189/64666560-4bdea000-d489-11e9-8aa8-8a913035b3cc.png)
## 4、重复率查询页面  
![5](https://user-images.githubusercontent.com/46021189/64666562-4c773680-d489-11e9-95c2-5536445fa773.png)
下载pdf文件，这里用了一个vue里面的插件JSPDF、和html2canvas，主要原理就是把页面指定的元素（标签）转换成canvas、然后进行下载
![6](https://user-images.githubusercontent.com/46021189/64666563-4c773680-d489-11e9-83c2-5d07032db499.png)
## 5、管理
后台管理  
![7](https://user-images.githubusercontent.com/46021189/64666564-4d0fcd00-d489-11e9-87b4-e5aea959fa6e.png)
# 二、功能实现情况
## 首页展示
功能描述|实现情况
---|---
基本信息|完成  
## 登陆模块
功能描述|实现情况
---|---
登陆校验|完成
后台交互|完成
路由拦截|完成
修改密码|完成
## 提交文档模块
功能描述|实现情况
---|---
基本样式|完成
提交至后台得出结果|未完成
## 检测模块
功能描述|实现情况
---|---
前端基本样式|完成
后端交互|未完成
## 后台管理
功能描述|实现情况
---|---
样式|基本完成
# 三、其它资料
