function quicksort(arr) {
  if (arr <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else if (arr[i] < pivot) {
      left.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

const array = [34, 7, 23, 32, 5, 62];
const sortedArray = quicksort(array);
console.log(sortedArray);

// Giải thích mã:
// Cơ sở dừng: Nếu mảng có 0 hoặc 1 phần tử, nó đã được sắp xếp và trả về ngay.

// Chọn pivot: Chọn phần tử cuối làm pivot.

// Phân chia: Duyệt qua tất cả các phần tử trong mảng, nếu phần tử nhỏ hơn pivot thì thêm vào mảng left, nếu không thì thêm vào mảng right.

// Gọi đệ quy: Gọi hàm quicksort cho cả hai mảng left và right, sau đó kết hợp với pivot để tạo thành mảng đã sắp xếp.
