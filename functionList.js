/** Make a count zeros function 
 
 *  Input => Output 
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
*/

function countZeroes (arr) {
  let count = 0;
  for (let i=0; i < arr.length; i++ ) {
      if (arr[i] === 0) {
          count += 1;
      }
  }
  return count;
}

/** Make a count frequency function 
 
 *  Input => Output 
sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
*/

function countFrequency(arr, val) {
  let freq = 0;
  for (let num of arr) {
    if (num === val) {
        freq += 1;
    } 
  }
  return (freq === 0) ? -1 : freq
}

/** Make a findIndex of val function 
 
 *  Input => Output 
findIndex([3,4,1,2],4) // 1
findIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findIndex([37,44,66,102,10,22],14) // -1
findIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
*/

function findIndex(arr, val) {
  for (let num of arr) {
    return (num = val) ? arr.indexOf(num) : -1
  }
}

/** Make a findStepIndex function 
    (finds the index where value decreases in the array)
 *  Input => Output 
findStepIndex([15, 18, 2, 3, 6, 12]) // 2
findStepIndex([7, 9, 11, 12, 5]) // 4
findStepIndex([7, 9, 11, 12, 15]) // 0
*/

function findStepIndex(arr) {
  for (let i=1; i < arr.length; i++) {
    if (arr[i-1] > arr[i]) {
        return i;
    }
  }
  return 0;
}

/** Make a findFloor function  
    (accepts a sorted array and a value x, and returns the floor of x in the array. 
     The floor of x in an array is the largest element in the array which is smaller than or equal to x. 
     If the floor does not exist, return -1.)
 *  Input => Output 
findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
*/

function findFloor(arr, val) {
  for (let num of arr) {
    let x = arr.indexOf(num);
    if ((num > val) && (arr[0] < val)) {
        return arr[x-1]; 
    }
    else if ((num <= val) && (x === arr.length - 1)) {
        return num;
    } 
    else if ((num > val) && (arr[0] > val)){
        return -1;
    }
  }
}