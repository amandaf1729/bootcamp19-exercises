// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = el => {
  // TODO
  return 3 * el;
};

Array.prototype.map = function(fun) {
  // TODO
  let arr = [];
  for(let i = 0; i < this.length; i++){
    arr[i] = fun(this[i])
  }
  return arr;  
};

console.log(arr.map(triple));
