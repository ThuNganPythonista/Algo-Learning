# Cách đệ quy hoạt động trong Quicksort

`const arr = [34, 7, 23, 32, 5, 62];`

**1.Chọn pivot:** Chọn phần tử cuối cùng, 62, làm pivot.

**2.Chia mảng:**

**Left:** [34, 7, 23, 32, 5] (các phần tử nhỏ hơn 62).
**Right:** [] (không có phần tử nào lớn hơn 62).
**Kết quả:** Left cần sắp xếp, còn Right đã sẵn sàng.

**Gọi đệ quy cho left:** Ta tiếp tục gọi quicksort cho mảng [34, 7, 23, 32, 5].

**Chọn 5 làm pivot:**

**Left:** [] (không có phần tử nào nhỏ hơn 5).

**Right:** [34, 7, 23, 32] (các phần tử lớn hơn 5).

**3.ọi đệ quy cho right của mảng [34, 7, 23, 32]:** Chọn pivot tiếp theo là 32:

**Left:** [7, 23] (phần tử nhỏ hơn 32).

**Right:** [34] (phần tử lớn hơn 32).

Tiếp tục cho đến khi mọi mảng con chỉ còn 1 phần tử.

Kết hợp các mảng đã sắp xếp: Sau khi đệ quy dừng, các mảng con đã được sắp xếp sẽ lần lượt được kết hợp lại với pivot ở từng bước, và cuối cùng toàn bộ mảng ban đầu được sắp xếp.

Tóm lại, đệ quy được sử dụng trong Quicksort để:

- Chia mảng thành các mảng con nhỏ hơn.

- Sắp xếp từng mảng con.

+Kết hợp lại thành mảng đã sắp xếp hoàn chỉnh.

Quá trình này giúp Quicksort đạt được hiệu suất cao, với độ phức tạp trung bình là O(n log n).
