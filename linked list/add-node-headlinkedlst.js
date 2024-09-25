class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Thêm một nút vào đầu danh sách
  prepend(data) {
    // Hàm thêm vào đầu danh sách
    const newNode = new Node(data);
    newNode.next = this.head; // Trỏ nút mới tới nút head hiện tại
    this.head = newNode; // Cập nhật head để trỏ tới nút mới
  }

  printList() {
    // Hàm in ra danh sách liên kết
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Sử dụng
const list = new LinkedList();
list.prepend(3);
list.prepend(2);
list.prepend(1); // Thêm 1 vào đầu danh sách
list.printList(); // Kết quả: 1 2 3
