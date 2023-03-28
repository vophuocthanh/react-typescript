// function overloading
// function total(a: number, b: number) {
//   return a + b;
// }
// function total(a: string, b: string) {
//   return a + b;
// }
// total(5, 7); // 12
// total("thanhdev", "frontend"); //

// function total(a: number, b: number): number;
// function total(a: string, b: string): string;
// function total(a: any, b: any) {
//   return a + b;
// }
// total(5, 7); // 12
// total("a", "b"); //ab

interface Coordinate {
  x: number;
  y: number;
}
function parseCoordinateFromObject(obj: Coordinate) {
  return { x...obj}
}
