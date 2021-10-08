console.log("promises_2.js");

//practice promise.all and promise.race

let p1 = new Promise(function(resolve, reject){
  var jsonObj = {};
  fetch(`https://jsonplaceholder.typicode.com/todos/3`)
  .then(response => response.json())
  .then(json => {
    jsonObj = json;
    jsonObj["item"] = "todos";
    setTimeout(function(){
      resolve(jsonObj);
    }, 3000);

});
});

let p2 = new Promise(function(resolve, reject){
  var jsonObj = {};
  fetch(`https://jsonplaceholder.typicode.com/posts/3`)
  .then(response => response.json())
  .then(json => {
    jsonObj = json;
      jsonObj["item"] = "posts";
    setTimeout(function(){
      resolve(jsonObj);
    }, 5000);

});
});


// p1.then(() => {console.log("promise p1 resolved");}, () => {console.log("promise p1 rejected");})

Promise.all([p1, p2])
.then(function(arg1){
  console.log("arg1: " + JSON.stringify(arg1));
  console.log("arg2: " + arg1[0]["item"]);
}, function(){
  console.log("promises rejected");
});

Promise.race([p1, p2])
.then(function(arg1){
  console.log("arg1: " + JSON.stringify(arg1));
  console.log("arg2: " + arg1["item"]);
}, function(){
  console.log("promises rejected");
});

// let test = new Promise(function(resolve, reject){
//   let obj = {};
//   fetch('http://fr.wiktionary.org/wiki/attendu', {mode: 'no-cors'})
//     .then(response => response)
//     .then(data => {
//       // obj = data;
//       // console.log(data);
//       resolve(data);
//     });
//   console.log("made test variable");
//
// });
//
// test.then(function(o){
//   console.log(o);
// }, function(e){
//   console.log("some error occured");
// });
