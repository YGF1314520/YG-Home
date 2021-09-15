/* 对象的遍历 */
// 创建一个对象
var obj = {
    name: "打工人",
    age: 22,
    sex: "男",
    address: "江苏南京",
    tel: 123456
}

/* for in 遍历对象 */
for (key in obj) {
    console.log(key);//打印键
    console.log(obj[key]);//打印值
}

/* 在对象中添加元素属性 如果添加的元素属性存在 则重新赋值 如果不在 就添加新的元素*/
obj.hobby = "敲代码";
console.log(obj.hobby);


/* 删除对象中的元素属性 */
delete obj.hobby;
console.log(obj.hobby);