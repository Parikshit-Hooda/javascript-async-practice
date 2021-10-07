//try to make a complex callback function chain

function fn1(index, callback1){
  if (index %2 == 0) { //even index
    var jsonObj = {};
  fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
  .then(response => response.json())
  .then(json => {
    jsonObj = json;
    console.log(jsonObj);
  });
  setTimeout(function(){callback1(jsonObj, "todos");}, 5000);

  } else { // odd index
    var jsonObj = {};
    fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
    .then(response => response.json())
    .then(json => {
      jsonObj = json;
      console.log(jsonObj);
    });

    setTimeout(function(){callback1(jsonObj, "posts");}, 10000);

  }
}

function fn2(jsonObj, item){
  console.log("fn2: " + item );
}

function fn3(){
  console.log("fn3");

}

function fn4(){


}

fn1(1, fn2);
fn1(2, fn2);
