// dùng để sử dụng đi sử dụng lại nhiều nơi
// export function total(a, b) {
//   return a + b;
// }
// total('5', '7') // 57
export function total(a: number = 5, b: number = 7) {
  return a + b;
}
total();
