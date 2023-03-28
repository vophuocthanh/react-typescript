type ThreeDCoordinate = [x: number, y: number, z: number];
function addThreeDCoordinate(
  a: ThreeDCoordinate,
  b: ThreeDCoordinate
): ThreeDCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
addThreeDCoordinate([1, 100, 200], [50, 60, 70]);
// useState
function simpleUseState(value: string): [string, (v: string) => void] {
  return [
    value,
    (v: string) => {
      value = v;
    },
  ];
}
const [value, setValue] = simpleUseState("thanhdev");
