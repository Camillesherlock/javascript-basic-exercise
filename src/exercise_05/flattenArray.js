export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var result = [];
  var idx=0;
  if(array===undefined || array===null)
  {
    throw new Error('Flatten undefined or null array');
  }
  if(array.length===0){
    return [];
  }
  if(array.length>0){
  for(var i=0;i<array.length;i++){
    if(array[i].length===undefined){
      result[idx]=array[i];
      idx++;
    }
    if(array[i].length>0){
    for(var j=0;j<array[i].length;j++){
      result[idx]=array[i][j];
      idx++;
    }}
  }
  return result;
}
}
