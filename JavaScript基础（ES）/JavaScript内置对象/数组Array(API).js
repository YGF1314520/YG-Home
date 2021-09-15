/* 数组遍历的Api*/
// forEach 遍历数值的api
// forEach 里面的参数是一个回调函数(回头再调用) 
// 回调函数中的参数1 表示的是当前数组中的元素 
//            参数2 是该元素对应的索引 
//            参数3是该元素所在的数组
// var arr = [2,3,45,67,8,9,10];
// arr.forEach(function(item,index,arr){
//     // console.log(item,index,arr);
// });

// 【遍历后，它会输出：元素+下标索引+所属数组】

// every 去遍历数组 参数 是一个 函数 
// 函数中的参数1是当前遍历的元素 
//         参数2当前元素的索引 
//         参数3 当前元素所在的数组
// var res = arr.every(function(item){
//     // return  后面就是我们要检测的条件 
//     // 只要有一个 item不满足 就返回 false 
//     return item >100;
// });
// console.log(res);

// 【带判断条件的遍历，判断条件是：boolean类型true&&false】

// 【小模块总结】
/* 总结 ： foreach(function(item,index,arr){ //遍历

                      })
            // 所有的元素都满足条件 返回true 否则false
            every(function(item,index,arr){ 
                        return item>10
                      })

           // 只要有一个满足条件 返回 true 否则false
           some(function(item,index,arr){ 
                        return item>10
                      })   
          //  处理数组中的每一个元素 返回的是一个新数组
           map(function(item,index,arr){ 
                        return item+10;
                      })  
         //  过滤出符合条件的数组中的元素 并组成一个新数组 并返回 不影响原数组
           filter(unction(item,index,arr){ 
                        return item>10;
                      })
 */

/* 数组增删改查Api */
var arr = [];

/* 添加数组元素的api push */
// 向数组的末尾新增一个元素并返回新数组的长度
var res = arr.push(1, 2);
console.log(res, arr);

/* 添加数组元素的api unshift */
//  向数组的开头添加一个或更多元素，并返回新的长度。
var res1 = arr.unshift(3, 4, 5);
console.log(res1, arr);

/* 删除数组元素的api pop shift*/
//  从数组末尾删除元素 并返回被删除的元素
var res2 = arr.pop();
console.log(res2, arr);
//   从数组开头删除元素
var res3 = arr.shift();
console.log(res3, arr);

// 【小模块总结】
/* 
push和pop  是一对栈操作   unshift 和shift 是一对队列操作
// splice  向数组中添加或删除元素
//  参数1数组开始删除元素的位置  参数2 删除元素的个数  参数3以后 表示在参数1的位置插入新的元素
//  只有参数1 表示从这个位置一直到数组最后  两个参数 表示删除的位置和个数
*/
var arr4 = [3, 4, 5, 4, 67, 23, 4, 4, 4, 44, 4, 4];
var res4 = arr4.splice(1, 2, 999, 888);
console.log(res4, arr4);

/* 判断数组中是否包含某个元素 返回一个boolean值 */
var arr5 = [1, 22, 3, 3, 3, 3, 345, 6];
var res5 = arr5.includes(222)
console.log(res5);

/* 数组反转 原数组也会直接反转*/
var res6 = arr5.reverse();
console.log(res6, arr5);

/* 数组排序 */
var arr6 = [3, 4, 5, 67, 8732, 2];
arr6.sort(function (a, b) {
    // return a-b;升序排列
    return b - a; //降序
});
console.log(arr6);

/* indexOf 查找元素的索引
参数1要找的元素 参数2 开始查找的索引位置 如果找不到 返回值是-1
 //   参数2可选 没有的话 从0 开始到最后
 */

var arr8 = [3, 4, 5, 6, 6, 7, 7];
console.log(arr8.indexOf(6));
/* slice  选取数组的一部分
参数1 开始位置 参数2 结束位置(不包括) 可选 不写就是从开始位置到结束位置
  */
console.log(arr8.slice(0));

/* 其他数组Api */

/* 数组合并 */
var arr1 = [9, 8, 7];
var arr2 = [4, 5, 6];
var res1 = arr1.concat(arr2);
console.log(res1, arr1, arr2);

/*数组中的元素拷贝  
数组中的元素拷贝到指定位置 
参数1是指定的索引位置  
参数2 开始拷贝的位置
参数3 是拷贝结束的位置
*/
var res2 = arr1.copyWithin(1, 0, 1);
console.log(res2);

/*  伪数组 : 1有索引  2有length属性 */
var str = "23432432432";
console.log(str[1], str.length);

/* 判断一个对象是否是数组
直接使用 类名调用的方法我们成为静态方法(内置的方法本来就有 相当于DNA)
*/
var res4 = Array.isArray(str);
console.log(res4)

/* .from 将一个伪数组(类数组) 转变为一个真数组 */
var res5 = Array.from(str);
console.log(Array.isArray(res5));

/* 将数组按照指定的字符转为字符串 */
var arr6 = [1, 2, 4, 6, 677, 45];
// 参数就是字符串的分隔符  默认是 ,
// console.log(arr6.join("*")) ;

/* keys 返回的数组的可迭代对象 包含的是数组的键*/
// var res = arr6.keys();
// // console.log(res);

// for(item of res){
//     console.log(item);
// }

/* .values  返回的数组的可迭代对象 包含的是数组的值 */
// var res7 = arr6.values();

/*  for of 遍历 */
// for(item of  res7){
//     console.log(item);
// }

/* 使用迭代器遍历 数组的键值对 */
// var arr3 = ["H", "e", "l", "l", "o"];
// //   console.log(arr3.entries())

/* 使用迭代器遍历 数组的键值对  */
// var res = arr3.entries();
// for (var item of res) {
//     //   打印键值对
//     console.log(item, item[0], item[1]);
// }

/* 将一个数组转为字符串没有join强大 */
console.log(arr8.toString());

/* 查找数组中的元素 查找第一个符合条件的元素 */
var res5 = arr4.find(function (item) {
    return item > 60;
})
console.log(res5)

/*  查找数组中符合条件的元素的索引 */
var res6 = arr4.findIndex(function (item) {
    return item > 60
});
console.log(res6); //返回1

/* 数组API总结 */
/*
        定义数组： 
           var arr = [1,2,3];
           var arr = new Array();
        数组长度： arr.length
        遍历数组 ： foreach(function(item,index,arr){})

                   every(function(item,index,arr){ return item>1}) 返回boolean值 所有的都符合条件才会返回true
                   some(function(item,index,arr){ return item>1})  返回boolean  只要有一个满足条件的 返回 true

                   map(function(item,index,arr){ return item*10})  返回处理过的数组

                   filter(function(item,index,arr){ return item>10}) 返回符合条件的元素 组成的新数组 
                   
                   for of  利用迭代器遍历数组 for(item of  arr.entries()){console.log(item)} ; 
        增加元素：  push(arg) 数组末尾新增元素    返回新数组的长度
                   unshift(arg) 数组开头添加元素  返回新数组的长度
                   splice(arg1,arg2,arg3...) arg3以后是要插入的元素 arg1开始插入或删除的位置 arg2 表示删除的个数  
        删除元素：  pop() 从数组末尾删除一个元素 返回被删除的元素
                   shift() 从数组开头删除元素  返回被删除的元素  注意 后面的元素索引会立即发生改变 
                   splice(arg1,arg2)  arg1开始插入或删除的位置 arg2 表示删除的个数 
        修改元素：  arr[i] = 23;
        数组反转：  reverse();
        数组排序：  sort(function(a,b){return a-b}) 升序排列
        数组是否包含某个元素:  includes(item);  返回 true/false 
                              indexOf(arg1,arg2) arg1要找的元素 arg2 开始查找的索引号 返回值是元素的索引 没有 -1
        数组拼接：  contact(arr); 
        数组拷贝：   copyWithin()
        数组转字符串： join("*") 可以指定分隔符  toString() 
        判断对象是否是数组：  Array.isArray();
        伪数组转为数组： Array.from(arr);
        数组检索：  find(function(item,index){return item>10}) 找到第一个符合条件的元素
                   findIndex(function(item,index){return item>10}) 找到第一个符合条件的元素的索引
        数组截取：  slice(starNum,endNum);  注意不包含endNum位置            
    
    */

/* 补充数组API知识 */
/* 数组去重 */
function uniq1(arr) {
    if (!Array.isArray(arr)) {
        console.log("输入错误");
        return;
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        // if (array.indexOf(arr[i]) === -1) {
        //     array.push(arr[i]);
        // }

        if (!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
}

/* 数组去重简单方法 兼容性不是太好 */
function uniq(arr) {
    if (!Array.isArray(arr)) {
        console.log("输入错误")
        return;
    }
    return Array.from(new Set(arr));
}
console.log(uniq([1, 2, 3, 1, 1, 4, 6, 3, 1]));

/* 将数组转为对象 es6新增的  ... */
var arr = ["a", 2, 3];
var obj = { ...arr };
console.log(obj);

/* 合并两个对象 */
const obj1 = { a: 1 };
const obj2 = { b: 2 };
var obj3 = Object.assign(obj1, obj2);
console.log(obj3);
var obj4 = { ...obj1, ...obj2 };
console.log(obj4);

/* 深度递归  */
var arr1 = [1, [2, 3, [4, 5]]];
console.log(arr1.flat(3));

/* 求幂运算 */
console.log(Math.pow(2, 10));

console.log(2 ** 10);

/* 截断数组 */
var arr2 = [1, 2, 3, 4, 5];
arr2.length = 3;
console.log(arr2)

/*copy数组 */
var arr3 = [1, 2, 3, 4, 5];


var copyarr3 = arr3.slice();

var copyarr4 = [...arr];
var copyarr5 = arr3.concat();

console.log(copyarr3);
console.log(copyarr5);


console.clear();//清空控制台

console.log(2 ** 3);