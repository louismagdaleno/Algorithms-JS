// Is Unique
// Implement an algorithm to determine if a string has all unqie characters. What if you cannot use additional data structures?

function isUnique(str) {

    if (typeof str !== 'string') {
        return null;
    }
    if (str.length === 0) {
        return 'empty string';
    }
    const seen = new Set();


    for (let val of str) {
        if (seen.has(val)) {
            return false;
        } else {
            seen.add(val);
        }
    }
    return true;
}

console.log(isUnique('hello')); // false
console.log(isUnique('world')); // true
console.log(isUnique(''));
console.log(isUnique(null));

function isStillUnique(str) {
    if (typeof str !== 'string') {
        return null;
    }
    if (str.length === 0) {
        return 'empty string';
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = i +1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;

}

console.log(isStillUnique('hello')); // false
console.log(isStillUnique('world')); // true
console.log(isStillUnique(''));
console.log(isStillUnique(null));


// Gannon Darcy [8:43 PM]
// Delete Occurrences of Extra Elements in an Array
// Create a function that takes two arguments: an array and a number. In the array (the first argument), if an element occurs more than N times (the second argument), remove the extra occurrence(s) and return the result.

// Examples
// deleteOccurrences([1, 1, 1, 1], 2) ➞ [1, 1]

// deleteOccurrences([13, true, 13, null], 1) ➞ [13, true, null]

// deleteOccurrences([true, true, true], 3) ➞ [true, true, true]
// Notes
// Do not alter the order of the original array.



function deleteOccurrences(arr, num) {
    const seen = new Map();
    const temp = [];

   for (let val of arr) {
       if (seen.has(val)) {
        if (seen.get(val) < num) {
            temp.push(val);
            seen.set(val, seen.get(val) + 1)
        }
       } else {
            temp.push(val);
            seen.set(val, 1);
       }
   }
   return temp;
}

 console.log(deleteOccurrences([1, 1, 1, 1], 2)) //➞ [1, 1]

 console.log(deleteOccurrences([13, true, 13, null], 1)) //➞ [13, true, null]

 console.log(deleteOccurrences([true, true, true], 3)) //➞ [true, true, true]

 // permutation
 // write a function that given two strings, will check if they are permutations of one antoher

 function permutations(a,b) {
     if (a.length !== b.length) {
         return false;
     }

     const objA = new Map(), objB = new Map();

     for (let val of a) {
        objA.set(val, (objA.get(val) + 1) || 1);
        
     }

     for (let val of b) {
        objB.set(val, (objB.get(val) + 1) || 1);
    }

    for (let key of objA.keys()) {
        if (!objB.get(key)) {
            return false;
        }
        if (objA.get(key) !== objB.get(key)) {
            return false;
        }
    }
     return true;
 }
 console.log(permutations('elle', 'leel'));
 console.log(permutations('dog', 'god'));
 console.log(permutations('elle', 'leeel'));
 console.log(permutations('elle', 'leel'));

 // urlify
 // write a function that takes a string and replaces all spaces with %20
 function urlify(str) {
     return str.split(' ').join('%20');
 }

 console.log(urlify('Mr John Smith Went To Ebay'));