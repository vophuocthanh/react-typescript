function deepEqualCompare<T>(
  a: T extends any[] ? "dont pas an array here" : T,
  b: T extends any[] ? "dont pas an array here" : T
): boolean {
  return a === b;
}
// dont pass an array here
deepEqualCompare(true, true);
deepEqualCompare("thanh", "thanh");
deepEqualCompare(999, 999);
