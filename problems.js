const perf = require('execution-time')();

//runtime: O(n^2)
//space complexity O(1)
function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true;
        }
      }
    }
    return false;
  }

//runtime: O(n)
//space complexity O(n)
function hasUniqueChars(word) {
    const charCounts = {};
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (charCounts[char]) {
        return false;
      } else {
        charCounts[char] = 1;
      }
    }
    return true;
  }
  
//runtime: O(1)
//space complexity O(1)
function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabet.length; i++) {
      if (!sentence.toLowerCase().includes(alphabet[i])) {
        return false;
      }
    }
    return true;
  }

//runtime: O(n)
//space complexity O(1)
function findLongestWord(words) {
    let longestWordLength = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > longestWordLength) {
        longestWordLength = word.length;
      }
    }
    return longestWordLength;
  }

console.log('====== addToZero results ======')
console.log(addToZero([]));  
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

console.log('====== hasUniqueChars results ======')
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

console.log('====== isPangram results ======')
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

console.log('====== findLongestWord results ======')
console.log(findLongestWord(["hi", "hello"]));