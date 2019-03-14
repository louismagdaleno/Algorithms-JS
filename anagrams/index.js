// ANAGRAMS
// Given two strings, write a function to determine if the second string 
// is an anagram of the first. An anagram is a word, phrase, or name formed 
// by rearranging the letters of another, such as cinema, formed from iceman.\

// runs in O(n) time because of use of Map
function validAnagram(a,b) {
    if (a.length !== b.length) {
        return false;
    }
    
    const obj1 = new Map(), obj2 = new Map();

    for (let item of a) {
        if (obj1.has(item)) {
            obj1.set(item, obj1.get(item) + 1);
        } else {
            obj1.set(item, 1);
        }
    }

    for (let item of b) {
        if (obj2.has(item)) {
            obj2.set(item, obj2.get(item) + 1);
        } else {
            obj2.set(item, 1);
        }
    }

    for (let key of obj1.keys()) {
        if (!obj2.has(key)) {
            return false;
        }
        if (obj1.get(key) !== obj2.get(key)) {
            return false;
        }
    }

    return true;
}



console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true