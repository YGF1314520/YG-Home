/* **字符串常用API** */
/* 返回在指定位置的字符 charAt*/
var strA = "前端9523546AZCAac开始acasddxu学习c";
console.log(strA.charAt(1));

/* 返回在指定的位置的字符的Unicode编码。charCodeAt */
// a-z 97-122 A-Z 65-90 0-9 48-57
console.log(strA.charCodeAt(0));

/* 将Unicode 编码转为字符 fromCharCode */
console.log(String.fromCharCode(26446));

/* 返回某个指定的字符串值在字符串中首次出现的位置。 indexOf
没有的话  返回-1*/
// 参数1 要查找的字符串 参数2 开始找的位置
console.log(strA.indexOf("ae", 13));
console.log(strA.indexOf("a", 13));

/* 找字符串中是否包含指定的子字符串 includes*/
console.log(strA.includes("端"));

/* 字符串的替换 replace*/
var strB = "我认为==你是==sb";
var res = strB.replace("sb", "**");
console.log(res, strB);

/* 截取字符串 slice */
// 参数1 开始位置 是负数从后面开始截取
// 参数2(可选) 结束位置(不包括结束位置)
// 没有参数1 从开始位置一直到结束位置
var res2 = strB.slice(-3);
console.log(res2);

/* 把字符串分割为字符串数组。可以指定字符 split */
var res3 = strB.split("=");
console.log(res3);

/* 字符串的联式调用 api1.api2.api3*/
var strC = "我想学前端";
// str.split("") 已经是一个数组了可以继续使用数组的api 称作链式调用
var res4 = strC.split("").reverse().join();//字符串转为数组 再反转 再转回字符串(链式调用)
console.log(res4);

/* 统计某个字母出现的个数 */
// 方法1
var strD = "ssfffkzlkflkkf";
function charCount(strD, a) {
    var count = 0;
    for (var i = 0; i < strD.length; i++) {
        if (strD[i] == a) {
            count++;
        }
    }
    return count;
}
// var res5 = charCount(strD,"f");
// console.log(res5);

// 方法2
/* 使用对象来统计字符串出现的次数 */
function tjChar(strD, a) {
    var obj = {};
    for (var i = 0; i < strD.length; i++) {
        // 如果对象中没该属性 返回的属性值是 undefined
        if (obj[strD[i]]) {
            // 如果有这个属性 该属性值就自加1
            obj[strD[i]]++;
        } else {
            // 若对象中没有这个属性 
            // 新增属性 并赋值为1
            obj[strD[i]] = 1;
        }
    }
    return obj;
}
console.log(tjChar(strD));

/* 字符串对象的属性添加 */
var newObj = {
    name: "张三"
}
// 添加字符串对象属性
newObj.age = 18
console.log(newObj);

//  ""为false  其他字符串都是true
/* 判断字符串对象是否存在某个属性 */
// if (newObj.a) {
//     console.log("我打印了！");
// }
// if (newObj["age"]) {
//     console.log("我悟到了");
// }

/* 字符串API总结 */
/* 
字符串转数组 split();
 
字符串是否包含某个字符 includes() indexOf()
 
字符串转为Unicode编码 charCodeAt()
 
将Unoicode编码转换回字符串 String.fromCharCode()
 
字符串替换 replace("old","new")
 
截取字符串 slice("startIndex","endIndex") 不包括 endIndex 
若是负数 从倒数第几位一直到最后
var str = "1234567";
console.log(str.slice(-3));
 
返回指定字符串的索引 indexOf("searchChar","pos")
参数1 要查找的字符 参数2 开始查找的位置
 
通过索引找到对应的字符 charAt("index");
 */

/* 数组和字符串都有的API总结 */
/* 
includes() indexOf() concat()【连接2个字符串或者数组】 slice()
 
数组转为字符串 toString() join("指定分隔符")
字符串转数组 split("指定分隔符")
 */

/* concat()【连接2个字符串或者数组】 */
var strF = "你好";
var strY = "世界";
var resG = strF.concat(strY);
console.log(resG);

var arrF = [1, 2, 3];
var arrY = [4, 5, 6];
var resGG = arrF.concat(arrY);
console.log(resGG);