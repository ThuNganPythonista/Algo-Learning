// cách 1

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// cách 2 : không sử dụng library nào

function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}
