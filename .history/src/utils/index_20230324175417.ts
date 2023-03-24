// dùng để sử dụng đi sử dụng lại nhiều nơi
// export function total(a, b) {
//   return a + b;
// }
// total('5', '7') // 57
export function total(a: number, b: number) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return 0;
  }
}
total(5, 7);
// total(5, 7);
