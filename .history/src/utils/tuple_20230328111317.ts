type ThreeDCoordinate = [x: number, y: number, z: number];
function addThreeDCoordinate(
  a: ThreeDCoordinate,
  b: ThreeDCoordinate
): ThreeDCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
addThreeDCoordinate([1, 100, 200], [50, 60, 70]);
// useState
export function simpleUseState(val: string): [string, (v: string) => void] {
  return [
    val,
    (v: string) => {
      val = v;
      console.log(val);
    },
  ];
}
const [valueStr, setValueStr] = simpleUseState("thanhdev");
console.log(valueStr);
setValueStr("Developer");
