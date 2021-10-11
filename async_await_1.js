console.log("async_await_1.js");

function f1() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("logging function f1");
      resolve("resolved function f1");
    }, 3000);
  });
}

function f2() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("logging function f2");
      resolve("resolved function f2");
    }, 1000);
  });
}

async function f(){
  let result = await Promise.race([f2(), f1()]);
  console.log(result);
  setTimeout(function(){
    console.log(result);
  }, 5000);
  // let x = await f1();
  // let y = await f2();
  // console.log(x);
  // console.log(y);
  // console.log("logging f");
}

f();
