// SumZero
// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. Return an array 
// that includes both values that sum to zero or undefined if a pair does not exist

//
function sumZero(arr) {
    // create pointers for head and tail of array
    let head = 0;
    let tail = arr.length - 1;

    // iterate over array
    while (head < tail) {
        // get the sum of the head and tail elements at each iteration
        let sum = arr[head] + arr[tail];
        // if the sum of these two is 0, we are done. return the pair
        if (sum === 0) {
            return [arr[head] , arr[tail]];
        }
        // if the sum is greater than 0, the bound is too large. move the tail down by 1 
        else if (sum > 0) {
            tail --;
        }
        // else, the number is too small. move the head up by 1 
        else  {
            head ++;
        }
    }

    return undefined;
}



console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) // undefined
console.log(sumZero([-4,-3,-2,-1,0,1,5,7])) // [-1, 1]

// averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target
// average. There may be more than one pair that matches the average target.

function averagePair(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let average = ( arr[left] + arr[right] ) / 2;
        if (average === num) {
            return true;
        } else if (average > num) {
            right --;
        } else {
            left ++;
        }
    }
    return false;
  }

  console.log(averagePair([1,2,3], 2.5)) //true
  console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) //true
  console.log(averagePair([-1,0,3,4,5,6], 4.1)) //false
  console.log(averagePair([], 4))  // false