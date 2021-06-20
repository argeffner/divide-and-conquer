/** Write function Time Complexity: O(log n) 
 * (remember not to use any loops as they are O(n) )
*/

function countZeroes(arr) {
  let zero = findZero(arr);
  if (zero === -1) {
      return 0;
  } 
  return arr.length - zero
}
// by setting these defaults you can apply function within itself
function findZero(arr, left=0, right=arr.length - 1) {
    if (right >= left) {
      let mid = Math.floor((right + left) / 2);  // mid index
      if((arr[mid] === 0) && (arr[mid - 1] || mid === 0)) {
          return mid; 
        }
      else if (arr[mid] === 1) {
          // move to the right  (can use function and pass in new values)
          return findZero(arr, mid + 1, right)
      }
      // move to the left   
      return findZero(arr, left, mid - 1)
      }
     // right < left 
     return -1
    }

    // module.exports = countZeroes