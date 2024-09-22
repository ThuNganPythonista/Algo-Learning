function findDuplicatedNumber(arr) {
  let duplicates;
  let seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicates = arr[i];
    } else {
      seen.add(arr[i]);
    }
  }
  return duplicates;
}

const test = [1, 2, 3, 3, 4, 5];
const test1 = findDuplicatedNumber(test);
console.log(test1);
