function getDevicesKeys<A, B extends keyof A>(items: A[], dataKey: B): A[B][] {
  return items.map((item) => item[dataKey]);
}
getDevicesKeys(devices);

const devices = [
  {
    name: "Iphone",
    price: 1000,
  },
  {
    name: "Samsung",
    price: 900,
  },
  {
    name: "Xiaomi",
    price: 800,
  },
];
//  Output: key name ['Iphone, 'Samsung', 'Xiaomi]
// key price: [1000, 900, 800]
