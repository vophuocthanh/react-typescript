function getDeepValue<T, K extends keyof T, V extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: V
) {
  return obj[firstKey][secondKey];
}

const obj = {
  foo: {
    a: true,
    b: 20,
    to: {
      e: 300,
    },
  },
  baz: {
    c: false,
    d: 30,
    to2: {
      f: 60,
    },
  },
};
getDeepValue(obj, "baz", "c");
// nested object
// log(abj, 'foo', 'a') => true
