function iterativeLog(arr) {
  arr.forEach((element,index,array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var arr=[1,2,3,4,5,6,7];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
  return array;
}
