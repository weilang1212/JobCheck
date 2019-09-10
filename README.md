这是一个对.doc或者.docx文档进行查重复率的查重系统，项目前端采用vue+bootstrap 后端spring+springMvc+MyBatis。项目目前还没完成（主要后台对重复率精确到还处理不好），但是页面整体设计基本已经完成。
# 前言
做这个项目主要是熟悉vue以及前后分离的一些经验，在这个项目之前，有了解过vue.js以及后端spring，虽然没用vue中插件elementUi，用的bootstrap，但是使用css这一类框架熟悉一下便能使用一些基础的样式。  
# 一、整体效果
## 1、首页
作为页面的展示样式，不需登陆就可以查看，主要包含了角色权限（教师和学生）、查询的步骤等等。
![](https://github.com/weilang1212/ProjectImage/blob/master/JobCheck/1.png)
## 2、登录页面
![](https://github.com/weilang1212/ProjectImage/blob/master/JobCheck/2.png)
## 3、文档提交页面
![](https://github.com/weilang1212/ProjectImage/blob/master/JobCheck/3.png)
## 4、重复率查询页面
![](https://github.com/weilang1212/ProjectImage/blob/master/JobCheck/5.png)  
下载pdf文件，这里用了一个vue里面的插件JSPDF、和html2canvas，主要原理就是把页面指定的元素（标签）转换成canvas、然后进行下载。
![](https://github.com/weilang1212/ProjectImage/blob/master/JobCheck/6.png)
