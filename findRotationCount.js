function findRotatedCount(arr) {
  let p = findPivot(arr);
  return (p !== 0) ? p + 1 : p
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