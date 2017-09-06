<!-- 参考资料 -->
<!-- http://blog.csdn.net/guodongxiaren/article/details/23690801 -->
<!-- https://github.com/guodongxiaren/README -->
<!-- http://www.jianshu.com/p/1e402922ee32/ -->



<!-- =上面的文本是大标题，=个数无限制 -->
具体用法可以下载这个.md文件，里面有总结
=======



<!-- -上面的文本是中标题，-个数无限制 -->
中标题
------



<!-- #等级标题 -->
<!-- 使用html5中的<br>实现换行 -->
# 一级标题<br>
## 二级标题<br>
### 三级标题<br>
#### 四级标题<br>
##### 五级标题<br>
###### 六级标题<br>



<!-- 部分文字高亮显示,使用``实现 -->
部分文字`高亮`显示



<!-- 文字超链接 -->
[星之灵](http://www.fosunling.com "复星星灵")



<!-- 列出条目时，每条前面圆点的写法，圆点的实现方法*加一个空格 -->
* 我是条目一
* 我是条目二
* 我是条目三
<!-- 二三级条目,二级条目的圆点是tab+*+空格，三级条目的圆点是两个tab+*+空格 -->
* 我是一级条目
    * 我是二级条目
        * 我是三级条目



<!-- 缩进>,缩进多少就用多少个> -->
>缩进1
>>缩进2
>>>缩进3
>>>>缩进4



<!-- 插入图片，实现方法叹号! + 方括号[ ] + 括号( ) 其中括号里是图片的URL -->
![baidu](http://www.baidu.com/img/bdlogo.gif)
<!-- 插入github项目里的图片 -->
![插入github项目里的图片]( https://github.com/zhBoSir/practice-2017Y/raw/master/markdown语法/images/1.png)
<!-- 给图片加上超链接 -->
[![baidu](http://www.baidu.com/img/bdlogo.gif "百度Logo")](http://baidu.com) 



 <!-- 插入代码片段 -->
 ```html
 <div class="box">
    <h1>新闻标题</h1>
    <p>内容内容内容内容内容内容内容内容内容内容内容内容</p>
 </div>     
 ```



 <!-- 引用文本 -->
 > 这是一段引用名人的语句



 <!-- 有序列表 -->
 1. 有序列表1
 2. 有序列表2
 3. 有序列表3



<!-- 表格 -->
|序号|姓名|性别|年龄|成绩|
|----|----|----|----|----|
|01|苏秦|男|2000|100|
|02|张仪|男|2000|100|
|03|司马错|男|2000|100|
|04|樗里子|男|2000|100|



<!-- 代码块 -->
`textarea {
    color: @color-text-base;
    font-size: @font-size-heading;
    line-height: @line-height-paragraph * @font-size-heading;
    appearance: none;
    width: 100%;
    padding: 0;
    border: 0;
    background-color: transparent;
    overflow: visible;
    display: block;
    resize: none;
    word-break: break-all;
    word-wrap: break-word;
  }`

