//try to make a complex callback function chain

function fn1(index, callback){
  if (index %2 == 0) { //even index
    var jsonObj = {};
  fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
  .then(response => response.json())
  .then(json => {
    jsonObj = json;
    callback(jsonObj, "todos");

  });
  // console.log("logging jsonOBj" + JSON.stringify(jsonObj));


  } else { // odd index
    var jsonObj = {};
    fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
    .then(response => response.json())
    .then(json => {
      jsonObj = json;
      console.log(jsonObj);
      callback(jsonObj, "posts");

    });
    // console.log("logging jsonOBj" + JSON.stringify(jsonObj));

  }
}

function fn2(jsonObj, item, callback){
  // console.log("fn2: " + item );
  if(item === "posts") {
    console.log("fn2: posts");
    console.log("jsonObj title:" + jsonObj.title);
    callback(`post: ${jsonObj.title}`);
  } else if (item === "todos") {
    console.log("fn2: todos");
    console.log("jsonObj title:" + jsonObj.title);
    callback(`todo: ${jsonObj.title}`);
  }

}

function fn3(objTitle){
  console.log("fn3");
  console.log("fn3: " + objTitle);
}

function fn4(){
  console.log("fn4");
}

//fn1 calls fn2 calls fn3 calls fn4

fn1(1, function(jsonObj, item){
  console.log("jsonObj in fn1: " + JSON.stringify(jsonObj));
  fn2(jsonObj, item, function(objTitle){
    fn3(objTitle);
  });
});
