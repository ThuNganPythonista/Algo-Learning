// Định nghĩa một lớp Node cho từng phần tử trong danh sách liên kết
class Node {
  constructor(data) {
    this.data = data; // Giá trị của phần tử
    this.next = null; // Trỏ tới phần tử tiếp theo
  }
}

// Định nghĩa một lớp LinkedList cho danh sách liên kết đơn
class LinkedList {
  constructor() {
    this.head = null; // Đầu tiên, danh sách rỗng, không có phần tử nào
  }

  // Phương thức thêm một nút vào cuối danh sách
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      // Nếu danh sách đang rỗng
      this.head = newNode; // Gán nút mới làm phần tử đầu tiên
    } else {
      let current = this.head;
      while (current.next !== null) {
        // Duyệt đến phần tử cuối cùng
        current = current.next;
      }
      current.next = newNode; // Thêm nút mới vào cuối danh sách
    }
  }

  // Phương thức tìm phần tử đầu tiên
  getFirstElement() {
    if (this.head === null) {
      return null; // Nếu danh sách rỗng, trả về null
    }
    return this.head.data; // Trả về giá trị của phần tử đầu tiên
  }
}

// Tạo một danh sách liên kết đơn và thêm các phần tử vào
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

// Tìm phần tử đầu tiên
console.log(linkedList.getFirstElement()); // Kết quả: 10
