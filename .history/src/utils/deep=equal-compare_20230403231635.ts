function deepEqualCompare<T>(a: T, b: T): boolean {
  return a === b;
}
// dont pass an array here
deepEqualCompare(true, true);
deepEqualCompare("thanh", "thanh");
deepEqualCompare(999, 999);
