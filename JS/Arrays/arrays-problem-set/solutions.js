// console.log('connected');

// *** printReverse() without using reverse() ***
function printReverse(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([3,4,6,2]); // 2, 6, 4, 3
// console.log([3,4,6,2].reverse());


// *** isUniform() ***
function isUniform(arr){
  const first = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}

isUniform([1,1,1]); //true
isUniform([12,1,11]); //false

// *** sumArray() ***
function sumArray(arr) {
  let total = 0;
  arr.forEach(function(element){
    total += element;
  });
  return total;
}

sumArray([1,2,3]);

// *** max() without using Math.max() ***
function max(arr){
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

max([2, 4, 6, 7]); //returns 7
