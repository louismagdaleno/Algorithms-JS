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

// O(n) time because of constant loopup times on objects;
function sameAgain(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    // create 2 objects
    const obj1 = new Map(), obj2 = new Map();

    // loop over arr 1 and arr 2 and store numbers and frequencies into objects
    for (let item of arr1) {
        if (obj1.has(item)) {
            obj1.set(item, obj1.get(item) + 1);
        } else {
            obj1.set(item, 1);
        }
    }
   

    for (let item of arr2) {
        if (obj2.has(item)) {
            obj2.set(item, obj2.get(item) + 1);
        } else {
            obj2.set(item, 1);
        }
    }
  
    // iterate over keys of arr 1 and check if value squared is in arr 2

  
    for (let key of obj1.keys()) {
      
        if (!obj2.get(key ** 2)) {
           return false;
        }

        if (obj1.get(key) !== obj2.get(key ** 2)) {
            return false;
        }
    }

    return true;

}

console.log(sameAgain([1,2,3], [1,4,9]));
console.log(sameAgain([1,2,3], [1,4,8]));
console.log(sameAgain([2,4,9], [4,16,81]));
console.log(sameAgain([1,2,3], []));