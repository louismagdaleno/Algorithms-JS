// Write a function called same, 
// which accepts two arrays. 
// The function should return true 
// if every value in the array has 
// it's corresponding value squared 
// in the second array. 
// The frequency of values must be the same.


// time complexity O(n^2) because of nested for loops
function same(arr1,arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }
    
    // make copy of arr2
    let temp = [...arr2];
    // loop through arr1 . for each element, check if value squared exists in arr2. 
    for ( let i = 0; i < arr1.length; i++) {
        // loop through arr2
        for (let j = 0; j < temp.length; j++) {
             // if value exists, remove it from arr2
             if ((arr1[i] ** 2) === temp[j]) {
                 temp.splice(j,1);
                 continue;
             }
        }


    }
     // if at the end of arr1 loop, arr2.length is 0, then return true, else false
     if (temp.length === 0) {
         return true;
     } else {
         return false;
     }
   
}

console.log(same([1,2,3], [1,4,9]));
console.log(same([1,2,3], [1,4,8]));
console.log(same([2,4,9], [4,16,81]));
console.log(same([1,2,3], []));