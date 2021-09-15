/* 实例化一个date对象 */
var date = new Date();

/* 获取号（天）数  getDate()*/
console.log(date.getDate());

/* 获取周几（星期） 0-6 getDay*/
console.log(date.getDay());

/* 获取年份 getFullYear()*/
console.log(date.getFullYear());

/* 获取小时  getHours()*/
console.log(date.getHours());

/* 获取分钟  getMinutes()*/
console.log(date.getMinutes());

/* 获取秒  getSeconds()*/
console.log(date.getSeconds());

/* 获取毫秒 getMilliseconds */
console.log(date.getMilliseconds());

/* 获取月份 从0开始算  getMonth 因此需要+1*/
console.log(date.getMonth() + 1);

/* 获取从 1970年 1月1号 到现在的毫秒数 */
console.log(date.getTime());

/* UTC 格林威治时间 */
console.log(date.getUTCFullYear());//年
console.log(date.getUTCMonth());//月
console.log(date.getUTCDate());//日
console.log(date.getUTCDay());//周
console.log(date.getUTCHours());//时
console.log(date.getUTCMinutes());//分
console.log(date.getUTCSeconds());//秒
console.log(date.getUTCMilliseconds());//毫秒

/* 重置日期 */
// date.setDate(1);
// console.log(date.getDate());

/* 返回字符串格式的日期 周次 月份  年份 */
/* 获取周 月 日 年 toDateString() */
console.log(date.toDateString());//Fri May 21 2021
console.log(date.toJSON());//2021-05-21T14:51:33.465Z

/* 获取年月日 toLocaleDateString()*/
console.log(date.toLocaleDateString());//2021/5/21

/* 获取时间 toLocaleTimeString()*/
console.log(date.toLocaleTimeString());//下午10:53:34
/* 获取中国标准时间 toString() */
console.log(date.toString());//Fri May 21 2021 22:52:41 GMT+0800 (中国标准时间)