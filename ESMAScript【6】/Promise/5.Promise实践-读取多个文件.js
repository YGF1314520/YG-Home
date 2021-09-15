// 引入 fs 模块
const { rejects } = require("assert");
const fs = require("fs");

// fs.readFile("../Promise/前端知识.md", (err, data1) => {
//   fs.readFile("../Promise/详解Promis.md", (err, data2) => {
//     fs.readFile("../Promise/前端工程化.md", (err, data3) => {
//       let result = data1 +'\r\n'+ data2 +'\r\n'+ data3;
//       console.log(result);
//     });
//   });
// });

// 使用 promise 实现
const p = new Promise((resolve, reject) => {
  fs.readFile("./前端知识.md", (err, data) => {
    resolve(data);
  });
});

p.then((value) => {
  // console.log(value.toString());
  return new Promise((resolve, reject) => {
    fs.readFile("./详解Promis.md", (err, data) => {
      resolve([value, data]);
    });
  });
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      fs.readFile("./前端工程化.md", (err, data) => {
        //压入
        value.push(data);
        resolve(value);
      });
    });
  })
  .then((value) => {
    console.log(value.join('\r\n'));
  });
