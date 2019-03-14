// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. There can be negative numbers in
//  the array, but it will always be sorted.
function countUniqueValues(arr) {
    // create pointers for first and second
    let a = 0;
    let b = 1;

    // create a counter variable
    let count = 0;

    // loop over the array 
    while (a < arr.length) {
        // if the values at indexes a and b are different, incremenet the counter, a, and b
        if (arr[a] !== arr[b]) {
            count++;
            a ++;
            b++;
        } else {
            // if the values are the index a and b are the same, move a up to b, and increment b. 
            // slide the window, so to speak
            a = b;
            b++;
        }
    }
    // we are done. return the count
    return count;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4