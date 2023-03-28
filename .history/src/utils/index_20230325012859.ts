// dùng để sử dụng đi sử dụng lại nhiều nơi
// export function total(a, b) {
//   return a + b;
// }
// total('5', '7') // 57
export function total(a: number, b: number): number {
  return a + b;
}
total(5, 7);
// total(5, 7);
// type assignment
// Tuple: nó sẽ là 1 mảng cố định các phần tử, cố định các kiểu dữ liệu trong phần tử.
// String [] -> ['thanhdev', 'react', 'nextjs']
// [number, string] -> cái mà chúng ta diền vào cx phải cấu trúc như vậy.
// Ví dụ: [2003, 'thanhdev'] trường hợp đúng
// ['thanhdev', 123] trường hợp này là trường hợp sai
// Enum: Enum là tập hợp các const (hằng số)
// Any: sử dụng bất kì kiểu dữ liệu nào cx đc và gán lại bất kì dữ liệu nào cx dc
// Union: kiểu này hoặc kiểu kia
// Cú pháp: string | number | ....
// Literal
// Function
// Void: không return trong function
// unknow:
let aNumber: unknown;
// never:
