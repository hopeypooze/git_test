//Given an integer array nums sorted in non-decreasing order, remove the duplicates
// in-place such that each unique element appears only once. The relative order of the elements
// should be kept the same.

//Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates,
// return the number of unique elements k.

//The first k elements of nums should contain the unique numbers in sorted order.
// The remaining elements beyond index k - 1 can be ignored.

//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Two pointers

// While j is within the bounds of the array:
// Compare the element at arr[i] with the element at arr[j].
// If arr[i] is not equal to arr[j]: This indicates a unique element has been found.
// Increment i by 1.
// Assign the value of arr[j] to arr[i]. This effectively moves the unique element to its correct
// position in the modified array.

// If arr[i] is equal to arr[j]: This indicates a duplicate.
// Simply increment j by 1 to skip the duplicate.

// function removeDuplicates(nums) {
//   let i = 0;
//   let j = 1;
//   if (nums.length > 0) {
//     while (j < nums.length) {
//       if (nums[i] != nums[j]) {
//         //0,1
//         nums[i + 1] = nums[j]; //assign, don't swap.
//         i++;
//       }

//       j++;
//     }
//     return i + 1; //output the length of the first i elements of the array, the duplicates have been pushed to the back
//   }

//   return 0;
// }
// console.log(removeDuplicates(nums));
const nums = [0, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7];

// eslint-disable-next-line no-unused-vars
function allowUpTo(nums, m) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    //scan with j
    if (i < m || nums[j] !== nums[i - m]) {
      //commit with i
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

console.log(allowUpTo(nums, 2));
