console.log("loaded callbacks.js");


function getCost(item) {
  console.log("getCost called: " + item);
}

function getItem(index, callback) {
  if(index === 1) {
    setTimeout(
      function(){
      console.log("getItem index: " + "sushi");
      callback("sushi");
    }, 5000);
  }
  else if (index === 2 ) {
    console.log("getItem index: " + "pasta");
    callback("pasta");
  }
}

getItem(1, getCost);
getItem(2, getCost);
