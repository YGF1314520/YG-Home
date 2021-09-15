/* Number 对象的API */

/* js中最大值 Number.MAX_VALUE */
console.log(Number.MAX_VALUE);//1.7976931348623157e+308

/* js中最小值 Number.MIN_VALUE */
console.log(Number.MIN_VALUE);//5e-324

/* 表示非数值 NaN*/
console.log(Number.NaN);

/* Number判断API 返回值是：true && false*/
var num = Infinity;//无限 Infinity

/* 判断一个数是否是有限的 isFinite*/
console.log(Number.isFinite(num));

/* 判断一个数是否是整数 isInteger*/
console.log(Number.isInteger(3));

/* 判断一个数是否是NaN isNaN*/
console.log(Number.isNaN(2));

/* 从字符串中找到数字  必须是开头就是 如果不是就返回 NaN parseFloat*/
console.log(Number.parseFloat("5555呜呜呜555555嗡嗡嗡5555哇哇哇"));

/*  将一个小数或 字符串类型的小数 变成 整数 parseInt */
console.log(Number.parseInt(66.666));
console.log(Number.parseInt("99.999"));

/* 数值转字符串toString */
var num = 99;
console.log(num.toString());

/* 保留几位小数 */
var num = 100;
console.log(num.toFixed(2));

/* 常用的Number的Api :  isNaN (判断是否为非数值)
                        parseInt(取整)
                        parseFloat(寻找数字【必须第一个就是】)
                        toString(数字转字符串)
                        toFixed(保留小数) */