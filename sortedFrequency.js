function sortedFrequency(arr, val) {

    let freqL = findLeft(arr, val);
    let freqR = findRight(arr, val);
    return (freqL === -1) ? freqL : freqR - freqL + 1
}

function findLeft(arr, val, left=0, right=arr.length -1) {
  if (right >= left) {
    let mid = Math.floor((right + left)/2);
    if ((arr[mid] === val) && (val > arr[mid - 1] || mid === 0)) {
        return mid; 
    }
    else if (arr[mid] < val) {
        // move to the right 
        return findLeft(arr, val, mid + 1, right)
    }
    // move to the left   
    return findLeft(arr, val, left, mid - 1)
  }
  return -1;
}

function findRight(arr, val, left=0, right=arr.length -1) {
    if (right >= left) {
      let mid = Math.floor((right + left)/2);
      if ((arr[mid] === val) && (val < arr[mid + 1] || mid === arr.length - 1)) {
          return mid; 
      }
      else if (arr[mid] > val) {
          // move to the right 
          return findRight(arr, val, left, mid - 1)
      }
      // move to the left   
      return findRight(arr, val, mid + 1, right)
    }
    return -1;
  }