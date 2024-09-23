function findDuplicates(arr) {
  let duplicates = new Set();
  let seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicates.add(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }
  return Array.from(duplicates);
}

const array = [1, 2, 3, 1, 4, 5, 2, 6, 3];
const result = findDuplicates(array);
console.log(result); // Output: [1, 2, 3]
