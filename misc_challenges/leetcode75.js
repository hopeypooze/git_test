// // // You are given two strings word1 and word2. Merge the strings by adding letters
// // // in alternating order, starting with word1. If a string is longer than the other,
// // // append the additional letters onto the end of the merged string.

// // // Return the merged string.

// // function alternateMerge(str1, str2) {
// //   const mergedArr = [];

// //   for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
// //     mergedArr.push(str1[i]);
// //     if (str2[i]) {
// //       mergedArr.push(str2[i]);
// //     }
// //   }

// //   return mergedArr.join("");
// // }
// // console.log(alternateMerge("abcd", "pqrs"));

// // //For two strings s and t, we say "t divides s" if and only if
// // // s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// // // Given two strings str1 and str2, return the largest string x
// // // such that x divides both str1 and str2.

// // //euclid's algorithm Find GCD by replacing the bigger number with the remainder.
// // const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// // const findDivisor = (str1, str2) => {
// //   // would strings work concatenated?
// // if (str1 + str2 !== str2 + str1) {
// //   return ""; // No GCD
// // }

// // // GCD of Lengths
// // const gcdLength = gcd(str1.length, str2.length);

// // // string from [0] to [gcd]
// // return str1.substring(0, gcdLength);
// // };

// // console.log(findDivisor("ABAB", "AB"));

// // //There are n kids with candies. You are given an integer array candies,
// // // where each candies[i] represents the number of candies the ith kid has,
// // // and an integer extraCandies, denoting the number of extra candies that you have.

// // // Return a boolean array result of length n, where result[i] is true if,
// // // after giving the ith kid all the extraCandies,
// // // they will have the greatest number of candies among all the kids, or false otherwise.

// // // Note that multiple kids can have the greatest number of candies.
// // const candies = [2, 3, 5, 1, 3, 5];
// // const extraCandies = 3;

// // function mostCandy(candies, extraCandies) {
// //   const maxCandies = Math.max(...candies) + extraCandies;

// //   return candies.map((num) => num + extraCandies === maxCandies);
// // }

// // console.log(mostCandy(candies, extraCandies));

// // //You have a long flowerbed in which some of the plots are planted, and some are not.
// // // However, flowers cannot be planted in adjacent plots.

// // //Given an integer array flowerbed containing 0's and 1's, where 0 means empty
// // // and 1 means not empty, and an integer n, return true if n new flowers can be
// // // planted in the flowerbed without violating the no-adjacent-flowers rule
// // // and false otherwise.

// // // Example 1:

// // const flowerbed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// // // Output: true
// // // Example 2:

// // // const flowerbed = [1,0,0,0,1,];
// // // const n = 2;
// // // Output: false
// // function placeFlowers(flowerbed, n) {
// //   let count = 0;
// //   let i = 0;
// //   if (flowerbed[0] === 0 && flowerbed[1] === 0) {
// //     //   console.log("insert at", [0]);
// //     count++;
// //     i = 1;
// //   }
// //   for (i; i <= flowerbed.length - 2; i++) {
// //     if (
// //       flowerbed[i] === 0 &&
// //       flowerbed[i + 1] === 0 &&
// //       flowerbed[i + 2] === 0
// //     ) {
// //       // console.log("insert at", [i + 1]);
// //       count++;
// //       i = i + 1;
// //     }
// //   }
// //   if (count >= n) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // console.log(placeFlowers(flowerbed, 6));

// // //Given a string s, reverse only all the vowels in the string and return it.

// // //The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases,
// // //more than once.

// // //Output: "AceCreIm"
// // const s = "IceCreAm";
// // // const s = "leetcode";

// // function reverseVowels(s) {
// //   const vowels = /[aeiouAEIOU]/i;
// //   const newString = [];
// //   const vArray = [...s].filter((ch) => vowels.test(ch)).reverse();
// //   let i = 0;
// //   for (const c of s) {
// //     if (!vowels.test(c)) {
// //       newString.push(c);
// //     } else {
// //       newString.push(vArray[i]);
// //       i++;
// //     }
// //   }
// //   return newString.join("");
// // }
// // console.log(reverseVowels(s));

// // //one line version

// // function reverseVowels(s) {
// //   const vowels = /[aeiou]/gi;
// //   const reversed = (s.match(vowels) || []).reverse();
// //   let i = 0;
// //   return s.replace(vowels, () => reversed[i++]);
// // }

// //151. Given an input string s, reverse the order of the words.

// //A word is defined as a sequence of non-space characters.
// // The words in s will be separated by at least one space.

// //Return a string of the words in reverse order concatenated by a single space.

// //Note that s may contain leading or trailing spaces or multiple spaces between two words.
// // The returned string should only have a single space separating the words.
// // Do not include any extra spaces.
// //const s151 = "the  sky is  blue";
// //const s151 = "the sky is blue";
// const s151 = "     a good   example";

// const wordsReversed = (s151) => s151.trim().split(/\s+/).reverse().join(" ");

// console.log(wordsReversed(s151));

// //Given an integer array nums, return an array answer such that answer[i] is equal
// // to the product of all the elements of nums except nums[i].

// //The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// //You must write an algorithm that runs in O(n) time and without using the division operation.
// //Example 1:

// //const nums = [1, 2, 3, 4];
// //Output: [24, 12, 8, 6]; //ok
// // Example 2:

// //const nums = [-1, 1, 0, -3, 3];
// // Output: [0,0,9,0,0]//ok
// //my solution
// // const answer = [];
// // for (const [i] of nums.entries()) {
// //   const product = nums.reduce((acc, el) => {
// //     if (el != nums[i]) {
// //       return acc * el;
// //     } else {
// //       return acc; // leave acc alone
// //     }
// //   }, 1);
// //   answer.push(parseInt(Math.abs(product)));
// // }
// // console.log(answer);

// //Instead of recalculating the product for every index (which is what your outer loop does),
// // think about precomputing partial products.
// // You can split the problem into two passes:

// // Prefix products: For each index, store the product of all elements to the left.
// // Suffix products: For each index, store the product of all elements to the right.

// // Then, for each position, the answer is simply prefix[i] * suffix[i].
// //better solution
// // const n = nums.length;
// // const prefix = new Array(n).fill(1); //filled the arrays with 1. could also have set prefix[0]=1;
// // // we start at index 1 for the loops- that's the trick I missed in my attempts to solve this
// // const suffix = new Array(n).fill(1);
// // const answer = new Array(n);

// // for (let i = 1; i < n; i++) {
// //   prefix[i] = prefix[i - 1] * nums[i - 1];
// // }
// // suffix[n - 1] = 1;
// // for (let i = n - 2; i >= 0; i--) {
// //   suffix[i] = suffix[i + 1] * nums[i + 1];
// // }

// // for (let i = 0; i < n; i++) {
// //   answer[i] = prefix[i] * suffix[i];
// // }

// // console.log(answer);

// //Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// // such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// //  Example 1:

// //const numsT = [1, 2, 3, 4, 5];
// // Output: true
// // Explanation: Any triplet where i < j < k is valid.
// // Example 2:

// //const numsT = [5, 4, 3, 2, 1];
// // Output: false
// // Explanation: No triplet exists.
// // Example 3:

// //const numsT = [2, 1, 5, 0, 4, 6];
// // Output: true
// // Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.

// // A greedy approach can solve this problem in linear time (\(O(n)\)) by maintaining two variables:

// //  minOne: Stores the smallest number encountered so far (the first element of a potential triplet).
// // minTwo: Stores the smallest number that is greater than minOne (the second element of a potential triplet).

// // The algorithm works by iterating through the array and updating these variables:
// // If the current number is smaller than minOne, update minOne to this new smaller value.
// // If the current number is greater than minOne but smaller than minTwo, update minTwo to this number.
// // If the current number is greater than minTwo, a triplet has been found (
// //   since we already know minOne < minTwo, and now the current number is greater than minTwo), so return true.
// //   If the loop finishes without finding a triplet, return false.

// const numsT = [5, 4, 3, 2, 1];

// function triples(nums) {
//   let num_i = Infinity;
//   let num_j = Infinity;

//   for (const num of nums) {
//     if (num <= num_i) {
//       num_i = num;
//     } else if (num <= num_j) {
//       num_j = num;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(triples(numsT));

// //Given an array of characters chars, compress it using the following algorithm:

// // Begin with an empty string s. For each group of consecutive repeating characters in chars:

// // If the group's length is 1, append the character to s.
// // Otherwise, append the character followed by the group's length.
// // The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// // After you are done modifying the input array, return the new length of the array.

// // You must write an algorithm that uses only constant extra space.

// // Note: The characters in the array beyond the returned length do not matter and should be ignored.

// // Example 1:

// const chars = ["a", "a", "b", "b", "c", "c", "c", "c"];
// // Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// // Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// // Example 2:

// // Input: chars = ["a"]
// // Output: Return 1, and the first character of the input array should be: ["a"]
// // Explanation: The only group is "a", which remains uncompressed since it's a single character.
// // Example 3:

// // Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// // Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// // Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

// //recipe for shifting items from the beginning of an array and pushing them to the end in a circular fashion.

// function compress(chars) {
//   chars.push("End");
//   let curr = chars[0];
//   let count = 0;
//   while (curr != "End") {
//     if (chars[0] === curr) {
//       //if same ch encountered, count it and remove from array
//       count++;
//       chars.shift(); //remove first el from array
//     } else {
//       chars.push(curr); //push curr to end of array when element changes (curr is actually the previous element)
//       count > 1 && chars.push(...(count + ""));
//       count = 0;
//       curr = chars[0];
//     }
//   }
//   chars.shift();
//   return chars.length;
// }
// console.log(compress(chars));
// console.log(chars);

// // const pracArray = [0, 1, 5, 3, 12];
// // let current = pracArray[0];

// // pracArray.push("End");

// // for (const w of pracArray) {
// //   while (current != "End") {

// //     let moved = pracArray.shift();
// //     current = pracArray[0];
// //     pracArray.push(moved);
// //   }
// // }
// // pracArray.shift();
// // console.log(pracArray);

// // Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// // Note that you must do this in-place without making a copy of the array.

// // Example 1:

// // const numbs = [0, 1, 0, 3, 12];
// // // Output: [1,3,12,0,0]
// // // Example 2:

// // const nums = [0];

// // let current = nums[0];
// // let count = 0;
// // nums.push("End");

// // for (const w of nums) {
// //   while (current != "End") {
// //     let moved = nums.shift();
// //     current = nums[0];
// //     if (moved != 0) {
// //       nums.push(moved);
// //     } else {
// //       count++;
// //     }
// //   }
// // }
// // nums.shift();
// // for (let j = 0; j < count; j++) {
// //   nums.push(0);
// // }

// // console.log(nums);

// // const nums = [0];

// // function moveZeros(nums, v) {
// //   //removing v for the test bot
// //   let fast = 0;
// //   let slow = 0;
// //   let v = 0;

// //   while (fast < nums.length) {
// //     if (nums[fast] !== v) {
// //       nums[slow] = nums[fast];
// //       slow++;
// //     }
// //     fast++;
// //   }
// //   for (let i = slow; i < nums.length; i++) {
// //     //starting with the inddex of slow, replace els with 0
// //     nums[i] = v;
// //   }
// // }

// // moveZeros(nums, 0);
// // console.log(nums);

// //Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// // A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
// // of the characters without disturbing the relative positions of the remaining characters.
// // (i.e., "ace" is a subsequence of "abcde" while "aec" is not)

// // Example 1:

// // Input: s = "abc", t = "ahbgdc"
// // Output: true
// // Example 2:

// // Input: s = "axc", t = "ahbgdc"
// // Output: false

// // const s = "leeeeetcode";
// const t =
//   "yyyyylyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyytyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyycyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyoyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyydyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";
// //fails some test cases
// // function isSubsequence(s, t) {
// //   const tMinus = [...t].filter((item) => [...s].includes(item));
// //   console.log(tMinus.join(""));
// //   console.log(s);
// //   return tMinus.join("").includes(s);
// // }

// // console.log(isSubsequence(s, t));

// function isSubsequence(s, t) {
//   let i = 0; // Pointer for string s (potential subsequence)
//   let j = 0; // Pointer for string t (main string)

//   // Loop while both pointers are within the bounds of their respective strings
//   while (i < s.length && j < t.length) {
//     // If characters match, increment the pointer for the subsequence string (s)
//     if (s[i] === t[j]) {
//       i++;
//     }
//     // Always increment the pointer for the main string (t) to move through it
//     j++;
//   }

//   // If the pointer for the subsequence string (s) has reached its end,
//   // it means all characters of s were found in t in the correct order.
//   return i === s.length;
// }

// // console.log(isSubsequence(s, t));
// //You are given an integer array height of length n.
// // There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// //Find two lines that together with the x-axis form a container, such that the container contains the most water.

// //Return the maximum amount of water a container can store.

// //Start with one pointer at the beginning and one at the end of the array.
// //Compute the area between them.
// //Then, move the pointer that points to the shorter line inward (because moving the taller one inward can’t increase the area—the limiting factor is the shorter line).
// //Repeat until the pointers meet.

// const height = [1, 8, 6, 2, 9, 4, 8, 3, 7];
// function maxArea(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let max = 0;
//   while (left <= right) {
//     let shorter = height[left] > height[right] ? right : left;

//     let area = height[shorter] * (right - left);

//     max = Math.max(max, area);

//     if (height[left] <= height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return max;
// }
// console.log(maxArea(height));

// //max num of -k sum pairs
// //You are given an integer array nums and an integer k.

// //In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// //Return the maximum number of operations you can perform on the array.
// //Input: nums = [1,2,3,4], k = 5
// // Output: 2
// // Explanation: Starting with nums = [1,2,3,4]:
// // - Remove numbers 1 and 4, then nums = [2,3]
// // - Remove numbers 2 and 3, then nums = []
// // There are no more pairs that sum up to 5, hence a total of 2 operations.

// // const nums = [2, 2, 2, 3, 1, 1, 4, 1];
// // const k = 4;

// // const nums = [1, 2, 3, 4];
// // const k = 5;

// //passed ! super fast

// // function badCount(nums, k) {
// //   let ptr = 0;

// //   let operations = 0;
// //   const myMap = new Map(); // initialise empty Map
// //   while (ptr < nums.length) {
// //     let complement = k - nums[ptr]; //Compute complement = k - num

// //     if (myMap.has(complement) && myMap.get(complement) > 0) {
// //       myMap.set(complement, myMap.get(complement) - 1);
// //       operations++;
// //     } else {
// //       if (!myMap.has(nums[ptr])) {
// //         myMap.set(nums[ptr], 0);
// //       }

// //       myMap.set(nums[ptr], myMap.get(nums[ptr]) + 1);
// //     }
// //     ptr++;
// //   }

// //   return operations;
// // }

// // console.log(badCount(nums, k));

// // const nums = [2, 2, 2, 3, 1, 1, 4, 1, 3];
// // const k = 4;
// // function twoPtrCountPairs(nums, k) {
// //   nums.sort((a, b) => a - b);
// //   let left = 0;
// //   let right = nums.length - 1;
// //   let operations = 0;

// //   while (left < right) {
// //     let sum = nums[left] + nums[right];
// //     if (sum === k) {
// //       operations++;
// //       left++;
// //       right--;
// //     } else if (sum < k) {
// //       left++;
// //     } else {
// //       right--;
// //     }
// //   }
// //   return operations;
// // }
// // console.log(twoPtrCountPairs(nums, k));

// //You are given an integer array nums consisting of n elements, and an integer k.

// //Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
// //Example 1:

// // const nums = [5];
// // const k = 1;

// // Output: 12.75000
// // Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// // Example 2:

// // Input: nums = [5], k = 1
// // Output: 5.00000

// function maxAvg(nums, k) {
//   let left = 0;
//   let right = k - 1;
//   let sum = 0;
//   let max = 0;
//   while (right < nums.length) {
//     for (let i = left; i <= right; i++) {
//       sum += nums[i];

//       if (sum > max) {
//         max = sum;
//       }
//     }
//     left++;

//     right++;
//     sum = 0;
//   }

//   return max / 4;
// }
// // console.log(maxAvg(nums, k));
// //when to use:
// // Look for these patterns in the problem statement:

// // Contiguous Subarray or Substring

// // Keywords: “contiguous”, “subarray”, “substring”.
// // Example: Find the maximum sum of a subarray of size k.

// // Fixed or Variable Length

// // Fixed length: “length = k” → classic sliding window.
// // Variable length: “longest substring without repeating characters” → dynamic sliding window.

// // Optimization Within a Range

// // Max/min sum, average, count, or length.
// // Example: Find the smallest subarray with sum ≥ target.

// // Sequential Data

// // Arrays, strings, or streams where you process elements in order.

// // Avoiding Recalculation

// // If brute force would involve recalculating sums or counts for overlapping ranges, sliding window is likely the intended optimization.
// //sliding window:
// // “Expand the window until the constraint breaks, then shrink from the left until it’s valid again—track the best size during the process.”

// // Common Constraints for Sliding Window

// // Count-based constraints

// // “At most k zeros” → longest subarray with flips allowed.
// // “At most k distinct characters” → longest substring with ≤ k unique chars.

// // Sum-based constraints

// // “Sum ≤ target” → shortest/longest subarray with sum condition.
// // “Sum exactly target” → count subarrays or find length.

// // Frequency-based constraints

// // “No repeating characters” → longest substring without repeats.
// // “Contains all characters of pattern” → minimum window substring.

// // Balance constraints

// // “Equal number of X and Y” → longest balanced substring.
// // “Difference between counts ≤ k” → sliding window with two counters.

// // Quality constraints

// // “At most k replacements” → longest substring after replacing chars.
// // “At most k mismatches” → DNA sequence or pattern matching.

// //proper sliding window
// //Start: sum = a+b+c+d
// // Next: sum = (a+b+c+d) - a + e
// // const nums = [1, 12, -5, -6, 50, 3];
// // const k = 4;
// // const nums = [3, 3, 4, 3, 0];
// // const k = 3;
// // const nums = [1, 12, -5, -6, 50, 3];
// // const k = 4;

// function slidingWindow(nums, k) {
//   let left = 0;
//   let max = 0;

//   if (nums.length > 1) {
//     let sum = nums.slice(0, k).reduce((acc, curr) => {
//       return acc + curr;
//     }, 0);

//     max = sum;

//     while (left < nums.length - k) {
//       left++;

//       sum = sum - nums[left - 1] + nums[left + (k - 1)];
//       if (sum > max) {
//         max = sum;
//       }
//     }
//   } else {
//     max = nums[left];
//   }
//   return max / k;
// }

// // console.log("max", slidingWindow(nums, k));

// //Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// // const s = "leetcode";
// // const k = 3;
// // const s = "abciiidef";
// // const k = 3;
// //Output: 2
// //Explanation: "lee", "eet" and "ode" contain 2 vowels.

// function maxVowels(s, k) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let left = 0;
//   let max = 0;
//   let count = s
//     .slice(0, k)
//     .toLowerCase()
//     .split("")
//     .reduce((count, char) => {
//       if (vowels.includes(char)) {
//         return count + 1;
//       }

//       return count;
//     }, 0);

//   max = count;
//   while (left < s.length - k) {
//     left++;
//     console.log(s.slice(left, left + k));
//     count = s
//       .slice(left, left + k)
//       .toLowerCase()
//       .split("")
//       .reduce((count, char) => {
//         if (vowels.includes(char)) {
//           return count + 1;
//         }
//         return count;
//       }, 0);
//     if (count > max) {
//       max = count;
//     }
//   }

//   return max;
// }

// // console.log(maxVowels(s, k));
// const s = "abccoccicdef";
// const k = 4;

// function maxVowels2(s, k) {
//   let vowels = /^[aeiouAEIOU]$/;
//   let left = 1;
//   let max = 0;

//   let count = s
//     .slice(0, k)
//     .toLowerCase()
//     .match(/[aeiou]/gi);
//   count = count ? count.length : 0;
//   max = count ? count : 0;

//   while (left < s.length - k + 1) {
//     if (vowels.test(s[left - 1])) {
//       count--;
//     }

//     if (vowels.test(s[left + k - 1])) {
//       count++;

//       if (count > max) {
//         max = count;
//       }
//     }

//     left++;
//   }

//   return max;
// }

// console.log(maxVowels2(s, k));

//Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
//ie array is valid if it contains <=2 0s

// const nums = [1, 1, 1];
// const k = 2;

// function longestOnes(nums, k) {
//   let left = 0;
//   let right = 0;
//   let max = 0;
//   let z = 0;

//   while (right < nums.length) {
//     nums[right] === 0 && z++;
//     right++; //expand to the right every time

//     while (z > k) {
//       //shrink from the left until condition is met
//       nums[left] === 0 && z--;
//       left++;
//     }

//     if (right - left > max) {
//       max = right - left;
//     }
//   }

//   return max;
// }

// // console.log(longestOnes(nums, k));

// //Given a binary array nums, you should delete one element from it.

// //Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// function longestSubarray(nums) {
//   let left = 0;
//   let right = 0;
//   let max = 0;
//   let z = 0;

//   while (right < nums.length) {
//     nums[right] === 0 && z++;
//     right++; //expand to the right every time

//     while (z > 1) {
//       //shrink from the left until condition is met
//       nums[left] === 0 && z--;
//       left++;
//     }

//     if (right - left - 1 > max) {
//       max = right - left - 1;
//     }
//   }

//   return max;
// }

// console.log(longestSubarray(nums));

// //prefix sum

// //There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes.
// // The biker starts his trip on point 0 with altitude equal 0.

// //You are given an integer array gain of length n where gain[i] is the net gain in altitude
// // between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
// // // Prefix sum: For each index, store the sum of all elements to the left.

// const gain = [-5, 1, 5, 0, -7];
// //Output: 0
// //Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

// function maxGain(gain) {
//   let sum = 0;
//   let max = 0;
//   for (let i = 0; i < gain.length; i++) {
//     sum = sum + gain[i];
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// }
// console.log(maxGain(gain));

//pivot index
//Given an array of integers nums, calculate the pivot index of this array.

//The pivot index is the index where the sum of all the numbers strictly to the left of the index
// is equal to the sum of all the numbers strictly to the index's right.

//If the index is on the left edge of the array, then the left sum is 0
// because there are no elements to the left. This also applies to the right edge of the array.

//Return the leftmost pivot index. If no such index exists, return -1.

const nums = [2, 1, -1];

function pivotIndex(nums) {
  let sumLeft = 0;
  let sumRight = 0;
  let i = 1;

  for (i = 0; i < nums.length; i++) {
    sumLeft = i === 0 ? 0 : sumLeft + nums[i - 1];

    for (let j = i + 1; j < nums.length; j++) {
      sumRight = i === nums.length - 1 ? 0 : sumRight + nums[j];
    }

    if (sumLeft === sumRight) {
      return i;
    }

    sumRight = 0;
  }
  return -1;
}
console.log(pivotIndex(nums));

//prefix sum solution:

function pivotIndex(nums) {
  const total = nums.reduce((a, b) => a + b, 0); //calc total of array once
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i]; //right is total minus i and everything to its left
    if (leftSum === rightSum) return i;
    leftSum += nums[i]; //grows to include i just before moving along
  }

  return -1;
}

//Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

//answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
//answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
//Note that the integers in the lists may be returned in any order.

//use set and .has instead of array and reduce to reduce time complexity
const nums1 = [1, 2, 3, 3];
const nums2 = [1, 1, 2, 2];
function findDifference(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const diff1 = [...set1].filter((el) => !set2.has(el));
  const diff2 = [...set2].filter((el) => !set1.has(el));

  return [diff1, diff2];
}

console.log(findDifference(nums1, nums2));

//Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
//add counts to Map, convcert Map values to array.  convery array to Set.  If they are the same length, values were unique.
const arr = [-3, 0, -3, 1, 1, 1, -3, 10, 0];

function uniqueOccurrences(arr) {
  const myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    myMap.has(arr[i])
      ? myMap.set(arr[i], myMap.get(arr[i]) + 1)
      : myMap.set(arr[i], 1);
  }
  const mapValues = [...myMap.values()];
  const mapSet = new Set(mapValues);
  const result = mapValues.length === mapSet.size ? true : false;
  return result;
}

console.log(uniqueOccurrences(arr));

//Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
const word1 = "abc";
const word2 = "bca";

function closeStrings(str1, str2) {}
//Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

//A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

const grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];

const myMap = new Map();
grid.forEach((row, index) => {
  myMap.set(`row${index}`, row);
});
console.log(myMap.get("row0").length);
console.log(myMap.get("row0"));
console.log(myMap.get("row1")[1]);
console.log(myMap);
