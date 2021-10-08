console.log("promises_1.js");

// let promise = new Promise(function(resolve, reject){
//   setTimeout(() => resolve("done"), 5000);
// });
//
// promise.then(function(returnedVal){console.log("returnedVal: " + returnedVal);}, function(returnedVal){console.log("promise rejected:" + returnedVal)});

// let promise_ls = function(src){
//
//   return new Promise(function(resolve, reject){
//   let script = document.createElement('script');
//   script.src= src;
//
//   script.onload = () => resolve("script loaded.");
//   script.onerror = () => reject(new Error("script not loaded."));
//
//   document.head.append(script);
//
// });
// }
//
// promise_ls("./callbacks_3.js")
// .then(resolvedLog => {console.log(resolvedLog);},
// rejectedLog => {console.log(rejectedLog);})
// .finally( () => {console.log("calling finally.")});

// promise version of setTimeout

function delay(ms) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve();
    }, ms);
  });
}

delay(3000).then(() => {alert('runs after 3 seconds');});
