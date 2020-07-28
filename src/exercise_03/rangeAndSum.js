export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var result=[];
 if(start === end){
   return result;
}
if( start <end){
for(var i=start;i<end;i++){
   result.push(i);
}
 return result;
}
if(start>end){
for(var i=start;i>end;i--){

  result.push(i);
}
return result;
}
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var test = numbers.length;
  var result=0;
  for(var i=0;i<test;i++){
    result+=numbers[i];

  }
  return result;
}
