// Part 1:
//  - What will print and why?
//  It will print 1,2,and undefined. First, the program does console.log(a), where a was
//  initialized to 1. Then, it runs y(), which outputs the value of the a that was 
//  initialized to 2 within the scope of y(). Then, it runs x(), which output a, but 
//  this was not initialized, so it is undefined. 

//  - What will change if we delete line 5? Why?
//  If you delete line 5, then the function x() will see that a was not initialized within x()
//  so it will use the value of a in the higher level of code, giving output 1 instead of 
//  undefined.

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

function x(a) {
  console.log(a);
}

function y() {
  let a = 2;
  console.log(a);
  x(a);
}

let a = 1;
console.log(a);
y();
