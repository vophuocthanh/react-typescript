function getDeepValue<T, K extends keyof T>(
  obj: T,
  firstKey: K,
  secondKey: string
) {
  return obj[firstKey][secondKey];
}

const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    c: false,
    d: 30,
  },
};
// nested object
// log(abj, 'foo', 'a') => true
