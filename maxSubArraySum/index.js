// Write a function called maxSubarraySum which accepts an array of integers
//  and a number called n. The function should calculate the maximum sum of n
//   consecutive elements in the array.
function maxSubarraySum(arr, target) {
    if (arr.length < target) {
        return null;
    }
    

    
    let tail = target - 1;
    let sum = 0;
    for (let i = 0 ; i < tail; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
// console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
// console.log(maxSubarraySum([4,2,1,6],1)) // 6
// console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
// console.log(maxSubarraySum([],4)) // null