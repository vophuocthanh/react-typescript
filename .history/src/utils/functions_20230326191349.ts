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
function parseCoordinate(obj: Coordinate): Coordinate;
// x: 10, y: 20
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  let coor = {
    x: arg1 as number,
    y: arg2 as number,
  };
  return coor;
}
// parseCoordinateFromObject({ x: 10, y: 20 });
// parseCoordinateFromNumber(10, 20);
