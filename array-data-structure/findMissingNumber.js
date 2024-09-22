function findMissingNumber(arr, number) {
  const totalSum = (number * (number + 1)) / 2;

  const arrSum = arr.reduce((acc, num) => acc + num, 0);

  return totalSum - arrSum;
}

const arr = [...Array(100).keys()]
  .map((i) => i + 1)
  .filter((num) => num !== 85);

const test = 100;
const missingNumber = findMissingNumber(arr, test);
console.log(`Số còn thiếu là: ${missingNumber}`);

// Note thêm một chút về function build in của method reduce()

// var reduce = function(nums, fn, init) {
//     let accumulator = init;
//     for(i=0;i<nums.length;i++){
//         accumulator =fn(accumulator,nums[i]);
//     }
//     return accumulator;
// };
