// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  if(!obj){
    return true;
  }
  for(vals of Object.values(obj)){
    return hasFalsyValue(vals);
  }
  return false;
};

console.log(hasFalsyValue(obj = false ));
obj =  {name: false, num: 15};
console.log(hasFalsyValue(obj));

