const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  let reverse = "";
  for(let i = 0; i < str.length; i++){
    reverse += str[str.length - i - 1];
  }
  return reverse;
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  return Array.from(new Set(arr));
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if(num == 0 || num == 1){
    return 1;
  }
  else{
    return factorial(num - 1)*num;
  }
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if(arr1.length != arr2.length){
    return -1;
  }
  let combined = [];
  for(let i = 0; i < arr1.length; i++){
    combined[i] = [arr1[i], arr2[i]];
  }
  return combined;
  
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = [];
  let arr2 = [];
  for(let i = 0; i < arr.length; i++){
    arr1[i] = arr[i][0];
    arr2[i] = arr[i][1];
  }
  return "[" + arr1 + "], [" + arr2 + "]";
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let shift = "";
  shift = str[num - 1 , str.length - 1] + str[0, num]
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert(reverse("3df") === "fd3");
console.log(reverse("3df"));
console.log(tokenize("hello this is a test"));
console.log(uniqueOnes([1,1,2,4,3,3,11,5,6,2]));
console.log(factorial(5));
console.log(zip([1, 2, 3], [5, 3, 1]));
console.log(unzip([[1, 5], [2, 3], [3, 1]]));
