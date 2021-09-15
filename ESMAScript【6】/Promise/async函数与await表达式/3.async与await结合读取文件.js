// 1.引入 fs 模块
const fs = require("fs");

// 读取文件
function readWebzhishi() {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/前端知识.md", (err, data) => {
      // 如果失败
      if (err) reject(err);
      // 如果成功
      resolve(data);
    });
  });
}

function readWebgongchenghua() {
    return new Promise((resolve, reject) => {
      fs.readFile("./resources/前端工程化.md", (err, data) => {
        // 如果失败
        if (err) reject(err);
        // 如果成功
        resolve(data);
      });
    });
  }

  function readXiangjiePromise() {
    return new Promise((resolve, reject) => {
      fs.readFile("./resources/详解Promis.md", (err, data) => {
        // 如果失败
        if (err) reject(err);
        // 如果成功
        resolve(data);
      });
    });
  }

//   声明一个 async 函数
async function main() { 
    // 获取前端知识
    let qianduan = await readWebzhishi();
    // 获取前端工程化
    let qianduangongchenghua = await readWebgongchenghua();
    // 获取Promise详解
    let xiangjie = await readXiangjiePromise();

    console.log(qianduan.toString());
    console.log(qianduangongchenghua.toString());
    console.log(xiangjie.toString());
 }

 main();