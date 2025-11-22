// You are given two strings word1 and word2. Merge the strings by adding letters
// in alternating order, starting with word1. If a string is longer than the other,
// append the additional letters onto the end of the merged string.

// Return the merged string.

function alternateMerge(str1, str2) {
  const mergedArr = [];

  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    mergedArr.push(str1[i]);
    if (str2[i]) {
      mergedArr.push(str2[i]);
    }
  }

  return mergedArr.join("");
}
console.log(alternateMerge("abcd", "pqrs"));

//For two strings s and t, we say "t divides s" if and only if
// s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x
// such that x divides both str1 and str2.

//euclid's algorithm Find GCD by replacing the bigger number with the remainder.
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const findDivisor = (str1, str2) => {
  // would strings work concatenated?
  if (str1 + str2 !== str2 + str1) {
    return ""; // No GCD
  }

  // GCD of Lengths
  const gcdLength = gcd(str1.length, str2.length);

  // string from [0] to [gcd]
  return str1.substring(0, gcdLength);
};

console.log(findDivisor("ABAB", "AB"));

//There are n kids with candies. You are given an integer array candies,
// where each candies[i] represents the number of candies the ith kid has,
// and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if,
// after giving the ith kid all the extraCandies,
// they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.
const candies = [2, 3, 5, 1, 3, 5];
const extraCandies = 3;

function mostCandy(candies, extraCandies) {
  const maxCandies = Math.max(...candies) + extraCandies;

  return candies.map((num) => num + extraCandies === maxCandies);
}

console.log(mostCandy(candies, extraCandies));

//You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.

//Given an integer array flowerbed containing 0's and 1's, where 0 means empty
// and 1 means not empty, and an integer n, return true if n new flowers can be
// planted in the flowerbed without violating the no-adjacent-flowers rule
// and false otherwise.

// Example 1:

const flowerbed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Output: true
// Example 2:

// const flowerbed = [1,0,0,0,1,];
// const n = 2;
// Output: false
function placeFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    //   console.log("insert at", [0]);
    count++;
    i = 1;
  }
  for (i; i <= flowerbed.length - 2; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i + 2] === 0
    ) {
      // console.log("insert at", [i + 1]);
      count++;
      i = i + 1;
    }
  }
  if (count >= n) {
    return true;
  } else {
    return false;
  }
}

console.log(placeFlowers(flowerbed, 6));

//Given a string s, reverse only all the vowels in the string and return it.

//The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases,
//more than once.

//Output: "AceCreIm"
const s = "IceCreAm";
// const s = "leetcode";

function reverseVowels(s) {
  const vowels = /[aeiouAEIOU]/i;
  const newString = [];
  const vArray = [...s].filter((ch) => vowels.test(ch)).reverse();
  let i = 0;
  for (const c of s) {
    if (!vowels.test(c)) {
      newString.push(c);
    } else {
      newString.push(vArray[i]);
      i++;
    }
  }
  return newString.join("");
}
console.log(reverseVowels(s));

//one line version

function reverseVowels(s) {
  const vowels = /[aeiou]/gi;
  const reversed = (s.match(vowels) || []).reverse();
  let i = 0;
  return s.replace(vowels, () => reversed[i++]);
}

//151. Given an input string s, reverse the order of the words.

//A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.

//Return a string of the words in reverse order concatenated by a single space.

//Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words.
// Do not include any extra spaces.
//const s151 = "the  sky is  blue";
//const s151 = "the sky is blue";
const s151 = "     a good   example";

const wordsReversed = (s151) => s151.trim().split(/\s+/).reverse().join(" ");

console.log(wordsReversed(s151));

//Given an integer array nums, return an array answer such that answer[i] is equal
// to the product of all the elements of nums except nums[i].

//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

//You must write an algorithm that runs in O(n) time and without using the division operation.
//Example 1:

//const nums = [1, 2, 3, 4];
//Output: [24, 12, 8, 6]; //ok
// Example 2:

//const nums = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]//ok
//my solution
// const answer = [];
// for (const [i] of nums.entries()) {
//   const product = nums.reduce((acc, el) => {
//     if (el != nums[i]) {
//       return acc * el;
//     } else {
//       return acc; // leave acc alone
//     }
//   }, 1);
//   answer.push(parseInt(Math.abs(product)));
// }
// console.log(answer);

//Instead of recalculating the product for every index (which is what your outer loop does),
// think about precomputing partial products.
// You can split the problem into two passes:

// Prefix products: For each index, store the product of all elements to the left.
// Suffix products: For each index, store the product of all elements to the right.

// Then, for each position, the answer is simply prefix[i] * suffix[i].
//better solution
// const n = nums.length;
// const prefix = new Array(n).fill(1); //filled the arrays with 1. could also have set prefix[0]=1;
// // we start at index 1 for the loops- that's the trick I missed in my attempts to solve this
// const suffix = new Array(n).fill(1);
// const answer = new Array(n);

// for (let i = 1; i < n; i++) {
//   prefix[i] = prefix[i - 1] * nums[i - 1];
// }
// suffix[n - 1] = 1;
// for (let i = n - 2; i >= 0; i--) {
//   suffix[i] = suffix[i + 1] * nums[i + 1];
// }

// for (let i = 0; i < n; i++) {
//   answer[i] = prefix[i] * suffix[i];
// }

// console.log(answer);

//Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

//  Example 1:

//const numsT = [1, 2, 3, 4, 5];
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

//const numsT = [5, 4, 3, 2, 1];
// Output: false
// Explanation: No triplet exists.
// Example 3:

//const numsT = [2, 1, 5, 0, 4, 6];
// Output: true
// Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.

// A greedy approach can solve this problem in linear time (\(O(n)\)) by maintaining two variables:
//  minOne: Stores the smallest number encountered so far (the first element of a potential triplet).
// minTwo: Stores the smallest number that is greater than minOne (the second element of a potential triplet).
// The algorithm works by iterating through the array and updating these variables:
// If the current number is smaller than minOne, update minOne to this new smaller value.
// If the current number is greater than minOne but smaller than minTwo, update minTwo to this number.
// If the current number is greater than minTwo, a triplet has been found (
//   since we already know minOne < minTwo, and now the current number is greater than minTwo), so return true.
//   If the loop finishes without finding a triplet, return false.

const numsT = [1, 10, 2, 3];

function triples(numsT) {
  let s1 = 0;
  let s2;
  for (let i = 1; i < numsT.length; i++) {
    if (numsT[i] < numsT[s1]) {
      s1 = i;
    }
    if (numsT[i] > numsT[s1] && numsT[i]) {
      s2 = i;
    }
    console.log(numsT[s1], numsT[s2]);
  }
}
console.log(triples(numsT));
