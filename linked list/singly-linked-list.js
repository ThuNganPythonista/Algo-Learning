// Định nghĩa một nút (node)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Định nghĩa danh sách liên kết đơn
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Thêm một nút vào cuối danh sách
  addToList(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Tìm phần tử ở giữa danh sách
  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next; // Di chuyển 1 bước
      fast = fast.next.next; // Di chuyển 2 bước
    }

    return slow.data; // Trả về dữ liệu của phần tử ở giữa
  }
}

// Tạo danh sách liên kết đơn
const list = new LinkedList();
list.addToList(10);
list.addToList(20);
list.addToList(30);
list.addToList(40);
list.addToList(50);

// Tìm phần tử ở giữa
console.log("Phần tử ở giữa là:", list.findMiddle()); // Kết quả: 30
