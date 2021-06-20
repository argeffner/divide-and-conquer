function findRotatedIndex(arr, val) {
    let p = findPivot(arr);
    return (val >= arr[0] && p > 0 && val <= arr[p])
      ? findI(arr, val, 0, p) : findI(arr, val, p + 1, arr.length - 1);
}

function findI(arr, val, left, right) {
    if (right >= left) {
      let mid = Math.floor((right + left)/2);
      if ((arr[mid] === val) && (arr[mid - 1] || mid === 0)) {
          return mid; 
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

  // find change of max to min in array
  function findPivot(arr, left=0, right=arr.length - 1) {
    // if (right < left) return -1;
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    if (right === left) return left;
    let mid = Math.floor((right + left) / 2);
    if (mid < right && arr[mid] > arr[mid + 1]) {
        return mid;
    }
    if (mid > left && arr[mid] < arr[mid - 1]) {
        return mid -1;
    }
    if (arr[left] >= arr[mid]) {
        return findPivot(arr, left, mid - 1)
    }
    return findPivot(arr, mid + 1, right)
  }