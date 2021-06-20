
function findFloor(arr, val, left=0, right=arr.length-1) {
    //arr[right] is the highest value in the array
    if (val >= arr[right]) return arr[right];
    if (right >= left) {
      let mid = Math.floor((right + left)/2);
      if(arr[mid] === val)  {
        return arr[mid]; 
      } 
      if ((arr[mid - 1] <= val) && (val < arr[mid]) && (mid > 0)){
        return arr[mid - 1];
      } else if (arr[mid] < val) {
        // move to the right 
        return findI(arr, val, mid + 1, right)
      } else if (arr[mid] > val){
        // move to the left   
        return findI(arr, val, left, mid - 1)
      }
    }
    return -1;
  }