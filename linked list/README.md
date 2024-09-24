**Khái niệm về độ phức tạp?**

Khái niệm về độ phức tạp O(n) O(1)

-> Sự tương quan giữa thời điểm hiện tại của thuật toán và độ lớn của dữ liệu

Ví dụ trục Oxy thì trục y là time của trục x là độ lớn dữ liệu
O(1) thì như 1 đường thẳng song song với trục Ox
còn O(n) giống như một đường thẳng tăng tiến

=> khi dữ liệu ít thì nó chạy nhanh (trục Oy), khi dữ liệu nhiều thì nó sẽ chạy chậm

Ví dụ:

một array [1,2,3,4,5]. Việc xóa số 3 từ array thì độ phức tạp O(1)

Tuy nhiên nếu mộ array từ 1 -> một số siêu lớn thì độ phức tạp sẽ tăng O(n), bởi vì khi lấy ra 1 số thì số kế bên phải dịch chuyển vào khoảng trống của số mới dời đi. array [1,2,3,4,5] thì chỉ dịch chuyển 4 và 5 nên không mất nhiều time so với dịch chuyển so với mảng nhiều số lớn hơn -> O(n).

Do đó, người ta tạo ra linked list để giải quyết vấn đề O(n) mà chỉ tốn O(1) thôi.

**Linked list?**

nó là những cái node nối nhau. Thì cái này, ví dụ mà muốn xóa một thằng thì xóa là nó mất tiêu, không cần phải dịch chuyển thằng kế bên làm gì hết.

Nhược điểm : Muốn gọi đến thằng thứ n thì phải loop n lần => Không có thuật toán nào là hoàn hảo.

**Mảng liên kết đơn là gì ? (singly linked list)**

- Một hàng các node có phần đầu (head) và phần kết thúc
- Mỗi node gồm (data và con trỏ next để liên kết với nút tiếp theo)
- Node cuối cùng trỏ đến null.

**Chèn node vào giữa hàng**

![illustration](../images/a1.png)
