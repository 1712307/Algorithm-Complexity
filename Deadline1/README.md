# Algorithm-Complexity
### _Creator: X.Cuong Le_
### **1.Tính toán độ phức tạp thuật toán cho bài toán Fibonacci sử dụng đệ quy (_Fibonacci by Recursion_)**

### **Tính toán trên lí thuyết:**
```javascript
fibonacci = (n) => {
    if (n <= 1)
        return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(5));
```
### Theo giải thuật trên, để tính được f(n) ta cần gọi hàm đệ quy để thực hiện phép toán cộng cho f(n-1) và f(n-2). Dễ dàng nhận thấy số các phép toán (+) của bài toán đệ quy trên là số các nút của cây đệ quy trong hình vẽ phía dưới.

![Markdown Logo](img/fibotree.png)
Từ lập luận đó, ta có thể suy ra được: 
> Trên lý thuyết số phép toán cộng cần thực hiện là: $2^{n-2}$

(Do lớp lá của cây chỉ có 2 node và có thể tính cho 2 node thiếu bên phải của lớp thứ liền kế lớp lá để ra được kết qủa $2^{n-1} - 1$)

Dựa vào điều kiện bài toán, số phép tính so sánh (<=1) sẽ bằng số node lá của cây cộng với tổng số node trên cây:
> Trên lý thuyết, số phép so sánh là: $2^{n-1} - 1$)

_Các công thức trên chỉ áp dụng khi thoả điều kiện n>=2_

### **Kết quả thực tế:**
