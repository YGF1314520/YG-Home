## 详细介绍promise
1：因为传统异步是通过回到函数方式结果的，为了解决回调地狱导致代码可读性差，可维护成本，所以有了promise
2: promise 三种状态 pending（进行中） resolve（已完成） reject（已拒绝）
3：promise中原型上方法 then catch  catch不会所有的错误，then 执行状态改变，then返回新的promise,then也可以执行 下一个prmise 任务。支持.then 通过链式调用完成多个异步任务
4：new Promise 中函数为同步执行  .then中函数为异步执行了
5：Promise 上静态方法：all  race resolve reject 等  
   - all 处理并发业务，所有的都成功了执行then 
   - race 多个promise 中 有一个成功了执行then 
   - resolve 将状态变为已完成
   - reject  将状态变为已拒绝