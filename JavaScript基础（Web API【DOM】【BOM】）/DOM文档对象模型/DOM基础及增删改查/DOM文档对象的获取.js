/*获取各种节点*/
    // 直接通过 名称获取特殊的节点

    /* 获取根节点  document.doucumentElement*/
    console.log(document.documentElement);

    /* 获取body document.body*/
    console.log(document.body);

    /* 获取网页标题节点 document.title*/
    console.log(document.title);

    /* 获取所有script节点 (JavaScript）*/
    console.log(document.scripts);//伪数组

    /* 获取头部 head */
    console.log(document.head);

    /* 获取图片 images */
    console.log(document.images);//伪数组

    /* 获取外部引用 links */
    console.log(document.links);

    /* 获取样式表 style (styleSheets)*/
    console.log(document.styleSheets);

    /* 通过父子关系获取节点 */

    /*  获取父节点 parentNode*/
    console.log(document.body.parentNode);

    /* 获取所有的子节点 childNodes 空格和换行也是节点属于 文本节点*/
    console.log(document.body.childNodes);

    /* 获取第一个子节点 firstChild*/
    console.log(document.body.firstChild);

    /* 获取最后一个子节点 lastChild */
    console.log(document.body.lastChild);

    /* 获取前一个兄弟节点 previousSibling previousSibling*/
    console.log(document.body.previousSibling);

    /* 获取后面一个兄弟节点 nextSibling) body没有 nextSibling*/
    console.log(document.head.nextSibling);

    /* 查找元素 */

    /* 通过id查找元素 getElementById()*/
    console.log(document.getElementById("box"));

    /* 通过标签名寻找元素 getElementsByTagName() 返回的是一个伪数组 
    查找所有的带此标签的元素*/
    console.log(document.getElementsByTagName("button"));

    /* 通过类名寻找元素 getElementsByClassName() 返回的是一个伪数组 
    查找所有的带此类名的元素*/
    console.log(document.getElementsByClassName("box"));

    /* 通过name属性查找 getElementsByName() 返回的是一个伪数组*/
    console.log(document.getElementsByName("前端"));

    /* 查找父元素 parentElement*/
    console.log(box.parentElement);

    /* 查找所有子元素 children */
    console.log(box.children);

    /* 查找第一个子元素 firstElementChild*/
    console.log(box.firstElementChild);

    /* 查找最后一个子元素 lastElementChild*/
    console.log(box.lastElementChild);

    /* 查找前一个兄弟元素 previousElementSibling*/
    console.log(box.previousElementSibling);

    /* 查找后一个兄弟元素 nextElementSibling*/
    console.log(box.nextElementSibling);

    /* 查找节点的名字 nodeName*/
    console.log(box.nodeName);

    /* 查找节点类型 nodeType*/
    console.log(box.nodeType);

    /* 访问其中的其中的文本的内容  */
    /* 用来访问其中的其中的文本的内容的,但是其中只能够应用在文本节点上
    ,如果将nodeValue应用在元素节点上,那么其中就会才出现的问题就是返回的是null
     */
    console.log(box.firstChild.nodeValue);