function findTargetedNumber(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }
  return { min, max };
}
const array_t = [1, 2, 3, 4, 5];
const result = findTargetedNumber(array_t);
console.log(`${result.max}, ${result.min}`);
