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

  // Phương thức thêm nút vào cuối danh sách
  append(data) {
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

  // Phương thức sắp xếp Quick Sort
  quickSort(head) {
    // Nếu danh sách rỗng hoặc chỉ có một phần tử
    if (!head || !head.next) {
      return head;
    }

    // Chọn pivot
    const pivot = head.data;
    let leftDummy = new Node(0); // Danh sách chứa phần tử nhỏ hơn pivot
    let rightDummy = new Node(0); // Danh sách chứa phần tử lớn hơn pivot
    let leftCurrent = leftDummy;
    let rightCurrent = rightDummy;

    let current = head.next; // Bắt đầu từ nút thứ hai

    // Chia danh sách thành các phần
    while (current) {
      if (current.data < pivot) {
        leftCurrent.next = current;
        leftCurrent = leftCurrent.next;
      } else {
        rightCurrent.next = current;
        rightCurrent = rightCurrent.next;
      }
      current = current.next;
    }

    // Kết thúc danh sách bên phải
    leftCurrent.next = null;
    rightCurrent.next = null;

    // Đệ quy sắp xếp các phần
    const sortedLeft = this.quickSort(leftDummy.next);
    const sortedRight = this.quickSort(rightDummy.next);

    // Kết hợp các phần đã sắp xếp
    if (sortedLeft) {
      head = sortedLeft; // Đầu danh sách là phần đã sắp xếp nhỏ hơn
      leftCurrent = sortedLeft;

      // Tìm nút cuối cùng trong phần nhỏ hơn
      while (leftCurrent.next) {
        leftCurrent = leftCurrent.next;
      }

      leftCurrent.next = head; // Kết nối với pivot
    } else {
      head = head; // Không có phần nhỏ hơn
    }

    // Kết nối với phần lớn hơn
    head.next = sortedRight;

    return head;
  }

  // Phương thức in danh sách
  printList() {
    let current = this.head;
    while (current) {
      process.stdout.write(current.data + " -> ");
      current = current.next;
    }
    console.log("null");
  }
}

// Sử dụng
const list = new LinkedList();
list.append(3);
list.append(5);
list.append(1);
list.append(4);
list.append(2);

console.log("Danh sách trước khi sắp xếp:");
list.printList();

list.head = list.quickSort(list.head);

console.log("Danh sách sau khi sắp xếp:");
list.printList();

// Cách thực hiện Quick Sort trên danh sách liên kết đơn
// Chọn một pivot (chốt):

// Chọn một phần tử từ danh sách để làm pivot. Trong danh sách liên kết, bạn có thể chọn phần tử đầu tiên hoặc cuối cùng.
// Chia danh sách:

// Duyệt qua danh sách và chia thành ba phần:
// Phần tử nhỏ hơn pivot.
// Phần tử bằng pivot.
// Phần tử lớn hơn pivot.
// Bạn cần duyệt từng nút trong danh sách để xác định phần nào thuộc về phần nào.
// Đệ quy:

// Gọi Quick Sort trên danh sách con nhỏ hơn và lớn hơn.
// Kết hợp các phần đã sắp xếp với pivot để tạo thành danh sách đã sắp xếp.
// Kết thúc:

// Khi danh sách đã được chia đến mức không còn phần tử nào, quá trình sắp xếp hoàn tất.

// Giải thích mã:
// Lớp Node: Định nghĩa một nút trong danh sách liên kết với dữ liệu và con trỏ tới nút tiếp theo.

// Lớp LinkedList:

// Chứa phương thức append để thêm nút vào cuối danh sách.
// Phương thức quickSort để thực hiện thuật toán Quick Sort:
// Kiểm tra xem danh sách có rỗng hoặc chỉ có một nút không.
// Chọn pivot và chia danh sách thành hai phần: phần nhỏ hơn và phần lớn hơn pivot.
// Gọi đệ quy trên hai phần con để sắp xếp chúng.
// Kết hợp các phần đã sắp xếp và pivot lại với nhau.
