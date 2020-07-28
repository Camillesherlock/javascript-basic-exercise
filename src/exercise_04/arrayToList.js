export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  var Node = function(data) {
    this.value = data;
    this.next = null;
  };

  var arr=[];
  var head =new Node();

  if(array===undefined || array===null){
    throw new Error('Creating list from undefined array');
   }
  
   if(array.length===0){
    throw new Error('Creating list from empty array');

   }
  if(array.length===1)
  {head.value=array[0];
    return head;
  }
  if(array.length>1){
    for(var i=0;i<array.length;i++){
      arr[i]=new Node(array[i]);
    }
    for(var i=0;i<array.length-1;i++){
     arr[i].next=arr[i+1];
    }
    return arr[0];
  }
  

}
